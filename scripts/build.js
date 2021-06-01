#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const mkdirp = require('mkdirp');
const { repository, version } = require('../package.json');


const validate = process.argv[2] === '--validate';
const buildDir = path.join(__dirname, '..', 'build');


const parse = ({ type, id, locale, track }) => new Promise((resolve) => {
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


const buildItems = (items) => {
  return ensureDirs(items)
    .then(() => Promise.all(items.map(item => parse(item))))
    .then(results => results.map((result, idx) => ({ ...items[idx], result })));
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
  { type: 'project', id: '05-battleship', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '05-social-network-fw', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '05-tic-tac-toe-rn', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '06-open-project', locale: 'es-ES', track: 'js' },
  { type: 'project', id: '07-job-application', locale: 'es-ES', track: 'js' },
  // JS Projects (portuguese)
  { type: 'project', id: '00-trivia', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '01-card-validation', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '01-cipher', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '02-data-lovers', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '03-social-network', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '04-burger-queen', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '04-burger-queen-api', locale: 'pt-BR', track: 'js' },
  { type: 'project', id: '04-md-links', locale: 'pt-BR', track: 'js' },
  // UX Projects (spanish)
  { type: 'project', id: '00-usability', locale: 'es-ES', track: 'ux' },
  { type: 'project', id: '01-small-businesses', locale: 'es-ES', track: 'ux' },
  { type: 'project', id: '04-ux-consultancy', locale: 'es-ES', track: 'ux' },
  { type: 'project', id: '05-service-design', locale: 'es-ES', track: 'ux' },
  { type: 'project', id: '05-visual-design', locale: 'es-ES', track: 'ux' },
  { type: 'project', id: '06-redesign-and-data', locale: 'es-ES', track: 'ux' },

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
  { type: 'topic', id: 'talent-fest', locale: 'es-ES', track: 'ux' },
  { type: 'topic', id: 'ux-research', locale: 'es-ES', track: 'ux' },
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
