---
type: read
duration: 15min
---

# Errores en callbacks

En la lectura anterior hemos visto como la sentencia `try...catch` nos permite
envolver código que podría resultar en una excepción y así evitar que la
excepción haga que se termine la ejecución de nuestro programa.

Pero qué pasa cuando ocurre un error en una operación asíncrona? Veamos un
ejemplo. Imaginemos que en un script escrito para Node.js tenemos una función
que se llama `getLatestNodeInfo()`, y que esta función es asíncrona (tiene que
hacer una consulta por HTTP para ver cuál es la versión más reciente de
Node.js), así que recibe un _callback_ como argumento.

```js
getLatestNodeInfo((err, data) => {
  if (err) {
    return console.error(err);
  }

  console.log(data);
});
```

En el mundo de Node.js es muy común que los callbacks tengan esta firma
`(err, data)`, dónde el primer argumento es un error (en caso de que haya
ocurrido uno) y el segundo argumento es la `data` o el _resultado_ en caso de
que la operación se complete satisfactoriamente.

A la hora de implementar funciones asíncronas, donde vamos a comunicar el
_resultado_ a través de un _callback_, evitamos arrojar errores con `throw` y en
vez los comunicamos como argumento a una función callback. Esto va a permitir
"atrapar" un error asíncrono (que ha ocurrido en otro contexto de ejecución) y
manejar errores que de otra forma no podríamos.

Considera la siguiente implementación de la función `getLatestNodeInfo()`:

```js
const http = require('http');

const getLatestNodeInfo = (cb) =>
  http.get('http://nodejs.org/dist/index.json', (resp) => {
    const { statusCode, headers } = resp;

    if (statusCode !== 200) {
      throw new Error(`Request Failed. Status Code: ${statusCode}`);
    }

    // ...

  }).on('error', cb);
```

En esta implementación (incompleta todavía - e incorrecta por ahora) estamos
lanzando un error con `throw` dentro de un _callback_. Viendo esta sentencia
`throw` unx podría pensar que podemos usar `try...catch` para atrapar el error.
Algo así:

```js
// intento fallido de atrapar error lanzado con `throw` dentro de un callback
try {
  getLatestNodeInfo(() => {
    // ...
  });
} catch (err) {
  console.log('error atrapado con try...catch', err);
}
```

En este caso, si se da la condición del error (puedes cambiar
`statusCode !== 200` a `statusCode === 200` temporalmente para probar el error),
veremos que la excepción NO es atrapada en el bloque `catch`, sino que termina
la ejecución de nuestro programa sin que tengamos la oportunidad de manejar el
error. Esto es porque la excepción se está arrojando desde un callback que se
ejecuta en otro contexto, más adelante en el tiempo. Este `try...catch` solo
atraparía errores que pudieran ocurrir en la parte síncrona de la función, antes
de hacer el request.

Es por esto que las funciones asíncronas evitan arrojar errores con `throw` y
siempre comunican errores a través de argumentos pasados a _callbacks_, ya sea
en un _callback_ con varios argumentos donde el primero es el posible error, o
en _callbacks_ dedicados, como por ejemplo el _handler_ que le pasamos a request
en el ejemplo anterior:

```js
http
  .get(url, successCallback)
  .on('error', errorCallback);
```

Ahora sí, completemos nuestra implementación de `getLatestNodeInfo()`, pero esta
vez pasando los errores a través del _callback_ recibido del usuario en vez de
usar `throw`. Nótese también que la implementación hace uso de `try...catch`
internamente para atrapar errores que pudieran ocurrir durante el _parseado_ de
la data recibida (usando `JSON.parse()`), lo cual es una operación síncrona y
queremos evitar que arroje un error, ya que no podría manejarse desde fuera de
nuestra función. Para solucionar esto, primero atrapamos el error y después lo
devlolvemos como argumento al _callback_.

```js
const getLatestNodeInfo = (cb) =>
  http.get('http://nodejs.org/dist/index.json', (resp) => {
    const { statusCode, headers } = resp;

    if (statusCode !== 200) {
      return cb(new Error(`Request Failed. Status Code: ${statusCode}`));
    } else if (!/^application\/json/.test(headers['content-type'])) {
      return cb(new Error(`Bad content-type. Expected application/json but got ${contentType}`));
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
```

Esta nueva implementación nos asegura que los errores que puedan ocurrir en
nuestra función siempre se pasen como argumentos al _callback_ recibido por el
usuario.
