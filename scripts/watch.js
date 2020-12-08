#! /usr/bin/env node

const { spawn } = require('child_process');
const { EventEmitter } = require('events');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const WebSocket = require('ws');
const { repository, version } = require('../package.json');


const log = (...args) => {
  console.log((new Date()), ...args);
};


const parse = (type, dir, locale, track) => {
  log(`Parsing ${type} ${dir} ${locale}...`);
  const suffix = locale.split('-')[0];
  const slug = type === 'topic' ? dir : dir.split('-').slice(1).join('-');
  const fname = path.join(
    './dist',
    `${type}s`,
    `${locale === 'es-ES' ? slug : `${slug}-${suffix}`}.json`,
  );
  const ee = new EventEmitter();
  const fd = fs.openSync(fname, 'w');
  const child = spawn('npx', [
    'curriculum-parser',
    type,
    `${type}s/${dir}`,
    '--repo', repository,
    '--version', version,
    '--track', track,
    '--locale', locale,
    '--lo', path.join(__dirname, '../learning-objectives'),
    ...(locale === 'es-ES' ? [] : ['--suffix', suffix]),
  ], { stdio: [null, fd, 'inherit'] });

  child.on('error', (err) => {
    ee.emit('error', err);
  });

  child.on('close', (code) => {
    if (code !== 0) {
      console.error('Failed parsing', type, dir, locale, track, code);
      return;
    }

    log(`Finished parsing ${type} ${dir} ${locale}...`);

    const absPath = path.resolve(fname);
    delete require.cache[absPath];
    const json = require(absPath);
    ee.emit('parse', json);
  });


  ee.cancel = () => {
    child.kill();
  };

  return ee;
};


const main = () => {
  const wss = new WebSocket.Server({ port: 8080 });
  const watcher = chokidar.watch(['./topics', './projects']);
  let sockets = [];
  const jobs = {};

  const runJob = (type, dir, locale) => {
    const jobId = `${type}-${dir}-${locale}`;

    // if already parsing 1st cancel current job...
    if (jobs[jobId]) {
      jobs[jobId].cancel();
    }

    // parse and keep cancel function for later...
    jobs[jobId] = parse(type, dir, locale, 'js');

    jobs[jobId].on('error', (err) => {
      console.error(err);
      jobs[jobId] = undefined;
    });

    jobs[jobId].on('parse', (data) => {
      sockets.forEach((ws) => {
        ws.send(JSON.stringify({ path: `${type}s/${data.slug}`, data }));
      });
      jobs[jobId] = undefined;
    });
  };

  wss.on('connection', (ws) => {
    sockets.push(ws);

    ws.on('close', () => {
      sockets = sockets.filter(s => s !== ws);
    });
  });

  watcher.on('change', (path) => {
    const parts = path.split('/');
    const type = parts[0].slice(0, -1);
    const dir = parts[1];

    if (!path.startsWith('projects/') && !path.startsWith('topics/')) {
      return;
    }

    log(`Change detected in file ${path}`);
    const locales = (
      path.endsWith('.pt-BR.md')
        ? ['pt-BR']
        : path.endsWith('.md')
          ? ['es-ES']
          : ['es-ES', 'pt-BR']
    );

    locales.forEach(locale => runJob(type, dir, locale));
  });
};

main();