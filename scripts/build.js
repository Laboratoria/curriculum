#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { promisify } = require('util');
const mkdirp = promisify(require('mkdirp'));
const { repository, version } = require('../package.json');


const projects = [
  '01-cipher',
  '02-data-lovers',
  '03-social-network',
  '04-burger-queen',
  '04-md-links',
  '04-social-network-frameworks',
  '05-bq-node',
  '05-tic-tac-toe-rn',
];

const topics = [
  'babel',
  'browser',
  'css',
  'functional',
  'html',
  'javascript',
  'paradigms',
  'react',
  'redux',
  'scm',
  'shell',
];

const topicsPt = [
  'browser',
  'css',
  'html',
  'javascript',
  'scm',
  'shell',
];


const rubricVersion = '2.3.x';
const validate = process.argv[2] === '--validate';
const buildDir = path.join(__dirname, '..', 'build');


const parse = ({ type, id, locale }) => new Promise((resolve) => {
  console.log(`=> Parsing ${type} ${id} ${locale}...`);
  const suffix = locale.split('-')[0];
  const fd = fs.openSync(
    validate
      ? '/dev/null'
      : `build/${type}s/${locale === 'es-ES' ? id : `${id}-${suffix}`}.json`,
    'w',
  );
  const child = spawn('npx', [
    'curriculum-parser',
    type,
    `${type}s/${id}`,
    '--repo', repository,
    '--version', version,
    '--rubric', rubricVersion,
    '--track', 'js',
    '--locale', locale,
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


const buildItems = (items) => {
  return ensureDirs(items)
    .then(() => Promise.all(items.map(item => parse(item))))
    .then(results => results.map((result, idx) => ({ ...items[idx], result })));
};


buildItems([
  ...projects.map(id => ({ type: 'project', id, locale: 'es-ES' })),
  ...topics.map(id => ({ type: 'topic', id, locale: 'es-ES' })),
  ...topicsPt.map(id => ({ type: 'topic', id, locale: 'pt-BR' })),
])
  .then(results => {
    const hasErrors = results.reduce(
      (memo, { result }) => memo || result instanceof Error,
      false,
    );
    process.exit(hasErrors ? 1 : 0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
