#! /usr/bin/env node

import { spawn } from 'node:child_process';
import { openSync } from 'node:fs';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import minimist from 'minimist';
import { mkdirp } from 'mkdirp';
import porch from 'porch';
import {
  loadYaml,
  flattenLearningObjectives,
} from '@laboratoria/curriculum-parser/lib/project.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(__dirname, '..', 'dist');
const { repository, version } = JSON.parse(
  await readFile(path.join(__dirname, '../package.json')),
);

const getConcurrency = (opts) => {
  const concurrency = (
    typeof opts.concurrency === 'number'
      ? opts.concurrency
      : Math.max(os.cpus().length - 1, 1)
  );

  if (Number.isNaN(concurrency) || concurrency < 1) {
    throw new Error(`Invalid concurrency: ${concurrency}`);
  }

  return concurrency;
};

const readContentDirs = async () => {
  const [projects, topics] = await Promise.all(
    ['project', 'topic'].map(async (type) => {
      const files = await readdir(path.join(__dirname, '..', `${type}s`));
      return files.reduce(
        (memo, file) => (
          ['.', '_'].includes(file[0])
            ? memo
            : memo.concat(`${type}s/${file}`)
        ),
        [],
      );
    }),
  );

  return [...projects, ...topics];
};

const parse = (dir, validate) => new Promise((resolve) => {
  console.log(`=> Parsing ${dir}...`);

  const [basedir, id] = dir.split('/');
  const type = basedir.slice(0, -1);
  const slug = type === 'topic' ? id : id.split('-').slice(1).join('-');
  const dest = path.join(buildDir, `${type}s`, `${slug}.json`);
  const fd = openSync(validate ? '/dev/null' : dest, 'w');
  const args = [
    'curriculum-parser',
    type,
    dir,
    '--repo', repository,
    '--version', version,
  ];

  const child = spawn(
    'npx',
    type === 'project'
      ? args.concat('--lo', path.join(__dirname, '../learning-objectives'))
      : args,
    { stdio: [null, fd, 'pipe'] },
  );

  const stderrChunks = [];
  child.stderr.on('data', chunk => stderrChunks.push(chunk));

  child.on('close', (code) => {
    if (code > 0) {
      const err = Object.assign(new Error(`Error parsing ${dir}`), {
        item: { type, id },
        stderr: stderrChunks.join(''),
      });
      console.error(`<= FAIL: Error parsing ${dir}`);
      console.error(err.stderr);
      return resolve(err);
    }

    console.log(`<= OK parsing ${dir}`);
    return resolve({ dir, type, id, slug, dest });
  });
});

//
// Create projects.json and topics.json with indeces of all projects and topics.
//
const createIndexes = async (results) => {
  const resultsWithJson = await Promise.all(results.map(async result => ({
    ...result,
    json: JSON.parse(await readFile(result.dest)),
  })));

  const resultsByType = resultsWithJson.reduce(
    ({ projects, topics }, { type, json }) => {
      const { units, ...rest } = json;
      return (
        type === 'project'
          ? { projects: projects.concat(json), topics }
          : { projects, topics: topics.concat(rest) }
      );
    },
    { projects: [], topics: [] },
  );

  await Promise.all(Object.keys(resultsByType).map(key => writeFile(
    path.join(buildDir, `${key}.json`),
    JSON.stringify(resultsByType[key], null, 2),
  )));
};

const addLearningObjectives = async () => {
  const dir = path.join(__dirname, '../learning-objectives')
  const [tree, es, pt] = await Promise.all([
    loadYaml(path.join(dir, 'data.yml')),
    loadYaml(path.join(dir, 'intl', 'es.yml')),
    loadYaml(path.join(dir, 'intl', 'pt.yml')),
  ]);

  const flat = flattenLearningObjectives(tree);
  const json = {
    tree,
    flat,
    intl: { es, pt },
    table: flat.map(key => ({
      key,
      es: es[key]?.title || es[key],
      pt: pt[key]?.title || pt[key],
    })),
  };

  await writeFile(
    path.join(buildDir, 'learning-objectives.json'),
    JSON.stringify(json, null, 2),
  );
};

const main = async (args, opts) => {
  const validate = !!opts.validate;
  const concurrency = getConcurrency(opts);
  const dirs = await readContentDirs();

  if (!validate) {
    await mkdirp(path.join(buildDir, 'projects'));
    await mkdirp(path.join(buildDir, 'topics'));
  }

  const results = await porch(
    dirs.map(dir => () => parse(dir, validate)),
    concurrency,
    0,
    false,
  );

  const errors = results.filter(result => result instanceof Error);
  if (errors.length) {
    throw new Error(`Failed to parse ${errors.length} items.`);
  }

  if (!validate) {
    await createIndexes(results);
    await addLearningObjectives();
  }
};

const { _: args, ...opts } = minimist(process.argv.slice(2));
main(args, opts).catch((err) => {
  console.error(err);
  process.exit(1);
});
