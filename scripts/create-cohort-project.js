#! /usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const minimist = require('minimist');
const mkdirp = require('mkdirp');
const { Octokit } = require('@octokit/rest');
const {
  getLearningObjectives,
  loadYaml,
} = require('@laboratoria/curriculum-parser/lib/project');


const uiUrl = 'https://curriculum.laboratoria.la';


const prompt = text => new Promise((resolve) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(text, (answer) => {
    rl.close();
    resolve(answer);
  });
});


const ensureSrc = (src) => {
  if (!src) {
    throw new Error('Please specify a source dir containing a project');
  }

  if (!fs.existsSync(src) || !fs.statSync(src).isDirectory()) {
    throw new Error('Source dir is not a directory!');
  }
};


const ensureRepoDir = async (repoDir, opts) => {
  if (fs.existsSync(repoDir)) {
    if (!fs.statSync(repoDir).isDirectory()) {
      throw new Error('Destination exists and its a file??');
    }

    const confirmOverwrite = await prompt(
      `Dir ${repoDir} already exists.. use it anyway? [y/N]: `,
    );
    if (!['y', 'Y'].includes(confirmOverwrite)) {
      throw new Error('Aborting');
    }
  } else {
    if (opts.noop) {
      console.log(`Would have created directory ${repoDir}`);
    } else {
      await mkdirp(repoDir);
    }
  }
};


const copy = async (src, repoDir, opts) => {
  console.log(`You are about to copy all files from ${src} to ${repoDir}`);
  const confirmCopy = await prompt('Are you sure you want to continue? [Y/n]: ');
  if (['n', 'N'].includes(confirmCopy)) {
    throw new Error('Aborting');
  }

  if (opts.noop) {
    console.log(`Would have copied files from ${src} to ${repoDir}`);
    return;
  }

  console.log('Copying files...');
  await fs.copy(src, repoDir);

  if (opts.locale === 'pt-BR') {
    return fs.move(
      `${repoDir}/README.pt-BR.md`,
      `${repoDir}/README.md`,
      { overwrite: true },
    );
  }

  if (fs.existsSync(`${repoDir}/README.pt-BR.md`)) {
    return fs.unlink(`${repoDir}/README.pt-BR.md`);
  }
};


const linkToString = ({ title, url }, lang) => (
  `[${title}](${url.startsWith('topics/') ? `${uiUrl}/${lang}/${url}` : url})`
);


const addLocalizedLearningObjectives = async (repoDir, opts) => {
  const learningObjectives = await getLearningObjectives(repoDir, {
    lo: path.join(__dirname, '../learning-objectives'),
  });

  if (!learningObjectives) {
    return;
  }

  const lang = opts.locale ? opts.locale.split('-')[0] : 'es';
  const intl = await loadYaml(
    path.join(__dirname, '../learning-objectives', 'intl', `${lang}.yml`),
  );
  const cats = learningObjectives.reduce(
    (memo, item) => {
      const cat = item.split('/')[0];
      return memo.includes(cat) ? memo : [...memo, cat];
    },
    [],
  );
  const text = cats.reduce(
    (memo, cat) => {
      const localizedCat = intl[cat] || {};
      return learningObjectives
        .filter(item => item.startsWith(`${cat}/`))
        .reduce(
          (prev, key) => {
            const item = intl[key] || {};
            const title = item.title || key.split('/').slice(1).join('/');
            if (!item.links || !item.links.length) {
              return `${prev}\n\n- [ ] **${title}**`;
            }
            // collapsible links
            const detailsStart = '<details><summary>Links</summary><p>\n';
            const detailsEnd = '\n</p></details>';
            return item.links.reduce(
              (p, link) => `${p}\n  * ${linkToString(link, lang)}`,
              `${prev}\n\n- [ ] **${title}**\n\n  ${detailsStart}`,
            ) + detailsEnd;
          },
          `${memo}\n\n### ${localizedCat.title || intl[cat] || cat}`,
        );
    },
    '',
  );

  const readmePath = path.join(repoDir, 'README.md');
  const contents = (await fs.readFile(readmePath, 'utf8')).split('\n');
  const startIndex = contents.findIndex(
    line => /^## \d\. Objetivos de aprendiza(je|gem)/i.test(line),
  );

  if (startIndex < 0) {
    throw new Error('README.md is missing Learning Objectives heading');
  }

  const endIndex = (
    startIndex
    + contents.slice(startIndex + 1).findIndex(line => /^## /.test(line))
  );

  const updatedContent = contents.slice(0, startIndex + 1)
    .concat(
      '',
      intl.description,
      text.trim(),
      endIndex > startIndex ? contents.slice(endIndex) : '',
    )
    .join('\n')
    .replace(/\.\.\/\.\.\/topics\//g, `${uiUrl}/${lang}/topics/`);

  await fs.writeFile(readmePath, updatedContent);
  await fs.unlink(path.join(repoDir, 'project.yml'));
};


const initRepo = async (repoDir, opts) => {
  if (opts.noop) {
    console.log('Would have initialized local repo, added files and commited');
    return;
  }

  console.log('Initializing repo...');
  await exec('git init', { cwd: repoDir });
  await exec('git add .', { cwd: repoDir });
  await exec('git commit -m "chore(init): Adds project files from curriculum"', { cwd: repoDir });
  await exec('git branch -M main', { cwd: repoDir });
};


const createRemote = async (name, opts) => {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN env var is not set!');
  }

  const org = (await prompt('GitHub org [Laboratoria]: ')) || 'Laboratoria';

  if (opts.noop) {
    console.log(`Would have tried to create repo on ${org}/${name}`);
    return { status: 201 };
  }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  return octokit.repos.createInOrg({
    org,
    name,
  });
};

const pushChanges = async (repoDir, repo, useHttps, opts) => {
  if (opts.noop) {
    console.log(`Would have pushed changes to ${repo.full_name}`);
    return;
  }

  const repoUri = (
    useHttps
      ? `https://github.com/${repo.full_name}.git`
      : `git@github.com:${repo.full_name}.git`
  );

  await exec(`git remote add upstream "${repoUri}"`, { cwd: repoDir });
  await exec('git push -u upstream main', { cwd: repoDir });
};


const main = async (args, opts) => {
  const [src, dest, prefix] = args;

  ensureSrc(src);

  const slug = path.basename(src).slice(3);
  const repoName = prefix ? `${prefix}-${slug}` : slug;
  const repoDir = dest ? `${dest}/${repoName}` : repoName;

  await ensureRepoDir(repoDir, opts);
  await copy(src, repoDir, opts);
  await addLocalizedLearningObjectives(repoDir, opts);
  await initRepo(repoDir, opts);

  const confirmRemote = await prompt(
    'Would you like to create a repository on GitHub and push changes? [Y/n]: ',
  );
  if (['n', 'N'].includes(confirmRemote)) {
    console.log('Done');
    return;
  }

  const createRemoteResponse = await createRemote(repoName, opts);

  if (createRemoteResponse.status > 201) {
    throw new Error(`Error creating remote repo`);
  }

  const remoteType = await prompt('Do you use ssh to clone with GitHub? [Y/n]: ');
  const useHttps = ['n', 'N'].includes(remoteType);
  console.log(`Ok, will clone repo with ${useHttps ? 'https then' : 'ssh'}.`);

  await pushChanges(repoDir, createRemoteResponse.data, useHttps, opts);

  console.log(`
  Para continuar accede al directorio del proyecto del cohort:

  cd ${repoDir}

  O visita el repo directamente en GitHub:

  ${createRemoteResponse.data.html_url}

  🚀🚀🚀
  `);
};

/* Arguments From Shell \m/ */
const handleArgs = (argumentsFromShell) => {
  return minimist(argumentsFromShell.slice(2));
}

const trimSlashes = (args) => {
  return args.map(arg => (
    arg[arg.length - 1] === '/'
      ? arg.slice(0, -1)
      : arg
  ));
}

const printUsage = () => {
  console.log(`create-cohort-project es un script para crear un nuevo proyecto del
bootcamp, para un cohort en particular.

Este es un mensaje de ayuda para que puedas usarlo.

  Uso:

    npm run create-cohort-project <RUTA_PROYECTO_ORIGEN> <RUTA_DESTINO> <PREFIJO_COHORT>

  Ejemplo:

    # crea el proyecto Markdown Links en la ruta actual para LIM042
    npm run create-cohort-project projects/04-md-links ./ LIM042

Acá puedes encontrar la documentación completa:
https://github.com/Laboratoria/bootcamp/tree/main/scripts#create-cohort-project
`);
};

const noOptionsOrHelp = (args) => {
  return args.length === 0 || ['-h', '--help'].includes(args[0]);
}

if (module === require.main) {
  const { _: args, ...opts } = handleArgs(process.argv);

  if (noOptionsOrHelp(args)) {
    printUsage();
    process.exit(0);
  }

  const argsWithoutSlashes = trimSlashes(args);

  main(argsWithoutSlashes, opts)
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
