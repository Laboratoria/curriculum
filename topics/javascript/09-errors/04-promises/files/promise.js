import http from 'http';

// const getLatestNodeInfo = () => new Promise((resolve, reject) => {
//   http.get('http://nodejs.org/dist/index.json', (resp) => {
//     const { statusCode, headers } = resp;
//
//     if (statusCode !== 200) {
//       return reject(new Error(`Request Failed. Status Code: ${statusCode}`));
//     } else if (!/^application\/json/.test(headers['content-type'])) {
//       return reject(new Error(`Bad content-type. Expected application/json but got ${contentType}`));
//     }
//
//     let rawData = '';
//     resp.setEncoding('utf8');
//     resp.on('data', (chunk) => { rawData += chunk; });
//     resp.on('end', () => {
//       try {
//         const parsedData = JSON.parse(rawData);
//         resolve(parsedData.shift());
//       } catch (err) {
//         reject(err);
//       }
//     });
//   }).on('error', reject);
// });


const getNodeReleases = () => new Promise((resolve, reject) => {
  http.get('http://nodejs.org/dist/index.json', (resp) => {
    const { statusCode, headers } = resp;

    if (statusCode !== 200) {
      return reject(new Error(`Request Failed. Status Code: ${statusCode}`));
    } else if (!/^application\/json/.test(headers['content-type'])) {
      return reject(new Error(`Bad content-type. Expected application/json but got ${contentType}`));
    }

    let rawData = '';
    resp.setEncoding('utf8');
    resp.on('data', (chunk) => { rawData += chunk; });
    resp.on('end', () => resolve(rawData));
  }).on('error', reject);
});

// getNodeReleases()
//   .then(data => JSON.parse(data))
//   .then(data => data.shift())
//   .then(data => console.log(`Versión más reciente de Node.js: ${data.version}`))
//   .catch(err => console.error(err));


const getLatestNodeInfo = () =>
  getNodeReleases()
    .then(data => JSON.parse(data))
    .then(data => data.shift());

getLatestNodeInfo()
  .then(data => console.log(`Versión más reciente de Node.js: ${data.version}`))
  .catch(err => console.error(err));
