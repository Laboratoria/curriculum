#! /usr/bin/env node

const fs = require('fs').promises;
const https = require('https');
const path = require('path');
const porch = require('porch');
const { version } = require('../package.json');

const {
  GITHUB_REF,
  LABORATORIA_API_URL,
  LABORATORIA_API_EMAIL,
  LABORATORIA_API_PASS,
} = process.env;

console.log('GITHUB_REF', GITHUB_REF);

const nodeVersion = process.version.split('.')[0].replace(/[a-z]/ig, '');
// Only run on Node.js 14.x
if (nodeVersion !== '14') {
  console.log('Not Node.js v14. Ignoring...');
  process.exit(0);
}

const tag = (GITHUB_REF || '').split('/').slice(2).join('/');
const prereleaseType = (tag.split('-')[1] || '').split('.')[0];

if (!version) {
  console.error('Could not read version from package.json!');
  process.exit(1);
}

if (tag[0] !== 'v') {
  console.error('Not a release tag. Ignoring...');
  process.exit(0);
}

console.log('Release tag detected!!');

if (prereleaseType) {
  console.log(`prereleaseType: ${prereleaseType}`);
}

if (tag !== `v${version}` && !LABORATORIA_API_URL) {
  console.error(`Version in package.json (v${version}) does not match tag (${tag})`);
  process.exit(1);
}

const apiBaseUrl = LABORATORIA_API_URL || (
  prereleaseType
    ? 'https://laboratoria-la-staging.firebaseapp.com'
    : 'https://api.laboratoria.la'
);

if (!LABORATORIA_API_EMAIL || !LABORATORIA_API_PASS) {
  console.error('Missing API credentials!');
  process.exit(1);
}

const post = (pathname, body, token) => new Promise((resolve, reject) => {
  const req = https.request(`${apiBaseUrl}${pathname}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(token && { authorization: `Bearer ${token}` }),
    },
  });

  req.on('error', reject);

  req.on('response', (resp) => {
    const chunks = [];
    resp.on('error', reject);
    resp.on('data', chunk => chunks.push(chunk));
    resp.on('end', () => {
      const responseText = chunks.join('');
      resolve({
        statusCode: resp.statusCode,
        body: responseText.length && /^application\/json/.test(resp.headers['content-type'])
          ? JSON.parse(responseText)
          : responseText,
      });
    });
  });

  req.write(JSON.stringify(body));
  req.end();
});

// Get auth token from API
const getAuthToken = (email, password) => {
  console.log('Getting auth token from laboratoria API...');
  return post('/auth', { email, password })
    .then(({ statusCode, body }) => {
      if (statusCode !== 200) {
        throw new Error(`Error getting token from API: ${statusCode}`);
      }
      if (!body.token) {
        throw new Error(`Could not get auth token!`);
      }
      return body.token;
    });
};

const publish = async (type, token) => {
  console.log(`Publishing ${type}...`);
  const dir = path.resolve(__dirname, `../build/${type}`);
  const files = await fs.readdir(dir);

  const tasks = files.map(
    file => () => post(`/${type}`, require(path.join(dir, file)), token),
  );

  return new Promise((resolve, reject) => {
    const stream = porch.createStream(tasks, 2, 1000, false);
    const results = [];
    stream.on('error', reject);
    stream.on('data', ({ idx, result }) => {
      if (result instanceof Error || result.statusCode > 201) {
        console.log(`=> FAIL ${files[idx]} (${result.statusCode || 'Error'}): ${
          result.body.message || result.body || result.message || result
        }`);
      } else {
        console.log(`=> OK ${files[idx]}`);
      }
      results.push(result);
    });
    stream.on('end', () => resolve(results));
  });
};

console.log(`Publishing version ${version} to: ${apiBaseUrl}...`);
getAuthToken(LABORATORIA_API_EMAIL, LABORATORIA_API_PASS)
  .then(async (token) => {
      const projectsResults = await publish('projects', token);
      const topicsResults = await publish('topics', token);
      const hasErrors = projectsResults
        .concat(topicsResults)
        .reduce(
          (memo, result) => (
            memo || result instanceof Error || result.statusCode > 201
          ),
          false,
        );

      process.exit(hasErrors ? 1 : 0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
