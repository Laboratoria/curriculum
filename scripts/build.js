#! /usr/bin/env node

const { spawn } = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs-extra');
const minimist = require('minimist');
const mkdirp = require('mkdirp');
const porch = require('porch');
const { loadYaml, flattenLearningObjectives } = require('@laboratoria/curriculum-parser/lib/project');
const { repository, version } = require('../package.json');


const { _: args, ...opts } = minimist(process.argv.slice(2));
const validate = !!opts.validate;
const concurrency = (
  typeof opts.concurrency === 'number'
    ? opts.concurrency
    : Math.max(os.cpus().length - 1, 1)
);
const buildDir = path.join(__dirname, '..', 'dist');


if (Number.isNaN(concurrency) || concurrency < 1) {
  console.error(`Invalid concurrency: ${concurrency}`);
  process.exit(1);
}


const parse = ({ type, id, locale, track }) => new Promise((resolve) => {
  console.log(`=> Parsing ${type} ${id} ${locale}...`);
  const slug = type === 'topic' ? id : id.split('-').slice(1).join('-');
  const suffix = locale.split('-')[0];
  const dest = path.join(buildDir, `${type}s`, `${locale === 'es-ES' ? slug : `${slug}-${suffix}`}.json`);
  const fd = fs.openSync(validate ? '/dev/null' : dest, 'w');
  const child = spawn('npx', [
    'curriculum-parser',
    type,
    `${type}s/${id}`,
    '--repo', repository,
    '--version', version,
    '--track', track,
    '--locale', locale,
    '--lo', path.join(__dirname, '../learning-objectives'),
    ...(locale === 'es-ES' ? [] : ['--suffix', suffix]),
  ], { stdio: [null, fd, 'pipe'] });

  const stderrChunks = [];
  child.stderr.on('data', chunk => stderrChunks.push(chunk));

  child.on('close', (code) => {
    if (code > 0) {
      const err = Object.assign(new Error(`Error parsing ${type} ${id} ${locale}`), {
        item: { type, id, locale },
        stderr: stderrChunks.join(''),
      });
      console.error(`<= FAIL: Error parsing ${type} ${id} ${locale}`);
      console.error(err.stderr);
      return resolve(err);
    }

    console.log(`<= OK parsing ${type} ${id} ${locale}`);
    return resolve({ ok: true });
  });
});


const ensureDirs = (items) => {
  if (validate) {
    return Promise.resolve();
  }

  const types = items.reduce(
    (memo, item) => memo.includes(item.type) ? memo : [...memo, item.type],
    [],
  );

  return Promise.all(types.map(type => mkdirp(path.join(buildDir, `${type}s`))));
};


const buildItems = items => ensureDirs(items)
  .then(() => porch(items.map(item => () => parse(item)), concurrency, 0, false))
  .then(results => {
    const errors = results.filter(result => result instanceof Error);
    if (errors.length) {
      throw new Error(`Failed to parse ${errors.length} items.`);
    }
    return results.map((result, idx) => ({ ...items[idx], result }));
  });


//
// Create projects.json and topics.json with indeces of all projects and topics.
//
const createIndexes = () => {
  if (validate) {
    return Promise.resolve();
  }

  const createIndex = (name) => {
    const dir = path.join(buildDir, name);
    const fname = path.join(buildDir, `${name}.json`);
    return fs.readdir(dir)
      .then(files => files.map(file => require(path.join(dir, file))))
      .then(json => (
        name !== 'topics'
          ? json
          : json.map(({ syllabus, ...rest }) => rest)
      ))
      .then(json => fs.writeFile(fname, JSON.stringify(json)));
  };

  return Promise.all([createIndex('projects'), createIndex('topics')]);
};


const addLearningObjectives = () => {
  if (validate) {
    return Promise.resolve();
  }

  const dir = path.join(__dirname, '../learning-objectives')
  return Promise.all([
    loadYaml(path.join(dir, 'data.yml')),
    loadYaml(path.join(dir, 'intl', 'es.yml')),
    loadYaml(path.join(dir, 'intl', 'pt.yml')),
  ])
    .then(([tree, es, pt]) => {
      const flat = flattenLearningObjectives(tree);
      return {
        tree,
        flat,
        intl: { es, pt },
        table: flat.map(key => ({
          key,
          es: es[key]?.title || es[key],
          pt: pt[key]?.title || pt[key],
        })),
      };
    })
    .then(json => fs.writeFile(
      path.join(buildDir, 'learning-objectives.json'),
      JSON.stringify(json),
    ));
};


buildItems([
  // JS Projects (spanish)
  { type: 'project', id: '00-trivia', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '01-card-validation', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '01-cipher', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '02-data-lovers', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '02-emergency-room', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '02-memory-match', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '02-movie-challenge', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '03-social-network', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '03-visitors', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '04-burger-queen', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '04-burger-queen-api', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '04-burger-queen-api-client', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '04-md-links', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '04-news-alerts', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '04-notes', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '05-battleship', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '05-chat-app', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '05-fleet-management', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '05-roman-numerals', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '05-roman-numerals-slack', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '05-social-network-fw', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '05-tic-tac-toe-rn', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '05-wordpress-plugin', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '05-open-project', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '06-job-application', locale: 'es-ES', track: 'js' },
  // JS Projects (portuguese)
  { type: 'project', id: '00-trivia', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '01-card-validation', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '01-cipher', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '02-data-lovers', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '02-emergency-room', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '02-memory-match', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '02-movie-challenge', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '03-social-network', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '04-burger-queen', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '04-burger-queen-api', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '04-burger-queen-api-client', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '04-md-links', locale: 'pt-BR', track: 'js' },
  // UX Projects (spanish)
  { type: 'project', id: '00-hcd-intro', locale: 'es-ES', track: 'ux' },
  { type: 'project', id: '01-design-and-usability', locale: 'es-ES', track: 'ux' },
  { type: 'project', id: '02-small-businesses', locale: 'es-ES', track: 'ux' },
  { type: 'project', id: '03-ui-design', locale: 'es-ES', track: 'ux' },
  { type: 'project', id: '04-industry-deep-dive', locale: 'es-ES', track: 'ux' },
  { type: 'project', id: '04-service-design', locale: 'es-ES', track: 'ux' },
  { type: 'project', id: '04-ux-consultancy', locale: 'es-ES', track: 'ux' },

  // JS Topics (spanish)
  { type: 'topic', id: 'browser', locale: 'es-ES', track: 'js' },
  { type: 'topic', id: 'css', locale: 'es-ES', track: 'js' },
  { type: 'topic', id: 'functional', locale: 'es-ES', track: 'js' },
  { type: 'topic', id: 'html', locale: 'es-ES', track: 'js' },
  { type: 'topic', id: 'javascript', locale: 'es-ES', track: 'js' },
  { type: 'topic', id: 'paradigms', locale: 'es-ES', track: 'js' },
  { type: 'topic', id: 'scm', locale: 'es-ES', track: 'js' },
  { type: 'topic', id: 'shell', locale: 'es-ES', track: 'js' },
  // JS Topics (portuguese)
  { type: 'topic', id: 'browser', locale: 'pt-BR', track: 'js' },
  { type: 'topic', id: 'css', locale: 'pt-BR', track: 'js' },
  { type: 'topic', id: 'html', locale: 'pt-BR', track: 'js' },
  { type: 'topic', id: 'javascript', locale: 'pt-BR', track: 'js' },
  { type: 'topic', id: 'scm', locale: 'pt-BR', track: 'js' },
  { type: 'topic', id: 'shell', locale: 'pt-BR', track: 'js' },
  // UX Topics (spanish)
  { type: 'topic', id: 'content-management', locale: 'es-ES', track: 'ux' },
  { type: 'topic', id: 'interaction-design', locale: 'es-ES', track: 'ux' },
  { type: 'topic', id: 'intro-ux', locale: 'es-ES', track: 'ux' },
  { type: 'topic', id: 'prototyping', locale: 'es-ES', track: 'ux' },
  { type: 'topic', id: 'ux-research', locale: 'es-ES', track: 'ux' },
])
  .then(createIndexes)
  .then(addLearningObjectives)
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
