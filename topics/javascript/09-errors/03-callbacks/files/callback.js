import http from 'http';


const saludaEnElFuturo = (nombre, segundos, cb) => {
  if (typeof segundos !== 'number') {
    throw new TypeError('Argumento "segundos" debe ser un número');
  }

  setTimeout(() => {
    console.log(`Hola ${nombre}!`);
    cb();
  }, segundos * 1000);
};


// saludaEnElFuturo('Ada', 5, () => {
//   console.log('fin');
// });

// saludaEnElFuturo('Ada');
// TypeError: Argumento "segundos" debe ser un número

// try {
//   saludaEnElFuturo('Ada', 1);
// } catch (err) {
//   console.error('error', err);
// }


const getLatestNodeInfo = (cb) =>
  http.get('http://nodejs.org/dist/index.json', (resp) => {
    const { statusCode, headers } = resp;

    if (statusCode !== 200) {
      return cb(new Error(`Request Failed. Status Code: ${statusCode}`));
    } else if (!/^application\/json/.test(headers['content-type'])) {
      return cb(new Error(`Invalid content-type. Expected application/json but received ${contentType}`));
    }

    let rawData = '';
    resp.setEncoding('utf8');
    resp.on('data', (chunk) => { rawData += chunk; });
    resp.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        cb(null, parsedData.shift());
      } catch (err) {
        cb(err);
      }
    });
  }).on('error', cb);


// getLatestNodeInfo((err, data) => {
//   if (err) {
//     return console.error('ocurrió un error', err);
//   }
//
//   console.log(`La versión más reciente Node.js es ${data.version}`);
// });


try {
  getLatestNodeInfo((err, data) => {
    if (err) {
      return console.error('ocurrió un error', err);
    }

    console.log(data);
  });
} catch (err) {
  console.log('error atrapado con try...catch', err);
}

// console.log('esperando...');
