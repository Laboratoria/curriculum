#! /usr/bin/env node

import { spawn } from 'node:child_process';
import { EventEmitter } from 'node:events';
import { openSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import chokidar from 'chokidar';
import { WebSocketServer } from 'ws';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { repository, version } = JSON.parse(
  await readFile(path.join(__dirname, '../package.json')),
);

const log = (...args) => {
  console.log((new Date()), ...args);
};

const parse = (type, dir, track) => {
  log(`Parsing ${type} ${dir}...`);
  const slug = type === 'topic' ? dir : dir.split('-').slice(1).join('-');
  const fname = path.join(
    './dist',
    `${type}s`,
    `${slug}.json`,
  );
  const ee = new EventEmitter();
  const fd = openSync(fname, 'w');
  const child = spawn('npx', [
    'curriculum-parser',
    type,
    `${type}s/${dir}`,
    '--repo', repository,
    '--version', version,
    '--track', track,
    '--lo', path.join(__dirname, '../learning-objectives'),
  ], { stdio: [null, fd, 'inherit'] });

  child.on('error', (err) => {
    ee.emit('error', err);
  });

  child.on('close', async (code) => {
    if (code !== 0) {
      console.error('Failed parsing', type, dir, track, code);
      return;
    }

    log(`Finished parsing ${type} ${dir}...`);
    ee.emit('parse', JSON.parse(await readFile(path.resolve(fname))));
  });

  ee.cancel = () => {
    child.kill();
  };

  return ee;
};

const main = () => {
  const wss = new WebSocketServer({ port: 8080 });
  const watcher = chokidar.watch(['./topics', './projects']);
  let sockets = [];
  const jobs = {};

  const runJob = (type, dir) => {
    const jobId = `${type}-${dir}`;

    // if already parsing 1st cancel current job...
    if (jobs[jobId]) {
      jobs[jobId].cancel();
    }

    // parse and keep cancel function for later...
    // TODO: Where should we get the track from?
    jobs[jobId] = parse(type, dir, 'webDev');

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
    runJob(type, dir);
  });
};

main();