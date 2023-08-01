#! /usr/bin/env node

import childProcess from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { cp, rename, unlink, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import minimist from 'minimist';
import { mkdirp } from 'mkdirp';
import { Octokit } from '@octokit/rest';
import {
  transformLearningObjectives,
  loadYaml,
} from '@laboratoria/curriculum-parser/lib/project.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uiUrl = 'https://curriculum.laboratoria.la';

const exec = promisify(childProcess.exec);

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

  if (!existsSync(src) || !statSync(src).isDirectory()) {
    throw new Error('Source dir is not a directory!');
  }
};

const ensureRepoDir = async (repoDir, opts) => {
  if (existsSync(repoDir)) {
    if (!statSync(repoDir).isDirectory()) {
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
  await cp(src, repoDir, { recursive: true });

  if (opts.locale === 'pt') {
    return rename(`${repoDir}/README.pt.md`, `${repoDir}/README.md`);
  }

  if (existsSync(`${repoDir}/README.pt.md`)) {
    return unlink(`${repoDir}/README.pt.md`);
  }
};

const addBootcampInfo = async (repoDir) => {
  const projectPkgJsonPath = path.resolve(`${repoDir}/package.json`);
  if (!existsSync(projectPkgJsonPath)) {
    return;
  }
  const pkg = Object.assign(JSON.parse(await readFile(projectPkgJsonPath)), {
    bootcamp: {
      createdAt: (new Date()).toISOString(),
      version: process.env.npm_package_version,
      commit: (await exec('git rev-parse HEAD')).stdout.trim(),
    },
  });
  await writeFile(projectPkgJsonPath, JSON.stringify(pkg, null, 2));
};

const addExplainDevConfigFile = async ({ project, cohort, track, repoDir }) => {
  if (track === 'web-dev') {
    const explainDevConfigFilePath = path.resolve(`${repoDir}/explaindev.json`);
    const explainDevConfig = {
      project,
      cohort,
    }
    await writeFile(explainDevConfigFilePath, JSON.stringify(explainDevConfig, null, 2));
  }
};

const linkToString = ({ title, url }, lang) => (
  `[${title}](${url.startsWith('topics/') ? `${uiUrl}/${lang}/${url}` : url})`
);

const addLocalizedLearningObjectives = async (repoDir, opts, meta) => {

  const learningObjectives = await transformLearningObjectives(repoDir, {
    lo: path.join(__dirname, '../learning-objectives'),
  }, meta);

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
  const contents = (await readFile(readmePath, 'utf8')).split('\n');
  const startIndex = contents.findIndex(
    line => /^## \d+\. Objetivos de aprendiza(je|gem)/i.test(line),
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

  await writeFile(readmePath, updatedContent);
  await unlink(path.join(repoDir, 'project.yml'));
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
  return octokit.repos.createInOrg({ org, name });
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
  await addBootcampInfo(repoDir);
  const meta = await loadYaml(path.join(src, 'project.yml'));
  // console.log('learning Objectives son', learningObjectives);
  await addExplainDevConfigFile({
    project: slug,
    cohort: prefix,
    track: meta.track,
    repoDir,
  });
  await addLocalizedLearningObjectives(repoDir, opts, meta);
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

    # crea el proyecto Markdown Links en la ruta actual para DEV999
    npm run create-cohort-project projects/04-md-links ./ DEV999

Acá puedes encontrar la documentación completa:
https://github.com/Laboratoria/bootcamp/tree/main/scripts#create-cohort-project
`);
};

const { _: args, ...opts } = minimist(process.argv.slice(2));

if (args.length === 0 || opts.h || opts.help) {
  printUsage();
  process.exit(0);
}

main(trimSlashes(args), opts).catch((err) => {
  console.error(err);
  process.exit(1);
});
