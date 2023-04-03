---
type: read
duration: 15min
---

# Errores en promesas

A partir de ECMAScript 6, JavaScript incluye objetos `Promise` que nos permiten
controlar el flujo de operaciones diferidas y asíncronas.

Al igual que con los _callbacks_, a la hora de implementar _promesas_ también
evitamos arrojar errores con `throw`. En el caso de las promesas tenemos una
serie de funciones dedicadas especícamente a manejar errores. Desde el punto de
vista de la implementación de _promesas_, tenemos la función `reject` y en el
caso del consumo de promesas tenemos el método `promise.catch()`, así como la
opción de un segundo argumento al método `promise.then(onSuccess, onError)`.

Continuando con el ejemplo de la lectura anterior, modifiquemos nuestra
implementación de `getLatestNodeInfo()` para que retorne una promesa en vez de
usar un simple _callback_:

```js
const http = require('http');

const getLatestNodeInfo = () => new Promise((resolve, reject) => {
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
    resp.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        resolve(parsedData.shift());
      } catch (err) {
        reject(err);
      }
    });
  }).on('error', reject);
});
```

En esta nueva implementación hemos reemplazado la invocaciones a `cb()` (el
_callback_ que recibíamos como argumento) con invocaciones a `reject()` (en los
casos de error) y `resolve()` (en caso de que completemos la tarea con éxito).
Esto nos permitiría ahora invocar nuestra función `getLatestNodeInfo()` de la
siguiente manera:

```js
getLatestNodeInfo()
  .then(data => console.log(`Versión más reciente de Node.js: ${data.version}`))
  .catch(err => console.error(err));
```

De forma equivalente podríamos haber escrito:

```js
getLatestNodeInfo().then(
  data => console.log(`Versión más reciente de Node.js: ${data.version}`),
  err => console.error(err)
);
```

## Manejo de errores en promesas encadenadas

Una de las grandes ventajas de las promesas es que podemos encadenarlas. Esto
quiere decir que cuando invocamos el método `promise.then()` podemos retornar

* o un valor al que resuelve la promesa
* u otra promesa, que resolverá a otro valor

El método `promise.then()` a su vez retorna una promesa sobre la cual podemos
volver a invocar `then` y recibe como argumento el valor al que haya resuelto
el `then` anterior.

Para ilustrar este concepto, modifiquemos otra vez nuestra implementación de
`getLatestNodeInfo()` para que haga un poco menos de trabajo, y en vez de
parsear el texto recibido con `JSON.parse` y de ahí seleccionar la última
versión, hagamos que directamente devuelva el texto recibido. Aprovechamos a
cambiarle el nombre a la función, ya que ahora ya no devuelve la última version
sino info sobre todos los releases (en texto JSON sin parsear):

```js
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
```

Invoquemos nuestra nueva función `getNodeReleases()`:

```js
getNodeReleases()
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

Si no ocurre ningún error de red, esto debería resultar en que se invoque la
función pasada a `.then()` con el texto recibido del request y no la pasada a
`catch()`. El output debería ser algo así:

```text
[
{"version":"v9.4.0","date":"2018-01-10","files":["aix-ppc64","headers","linux-arm64","linux-armv6l","linux-armv7l","linux-ppc64le","linux-x64","linux-x86","osx-x64-pkg","osx-x64-tar","src","sunos-x64","sunos-x86","win-x64-7z","win-x64-exe","win-x64-msi","win-x64-zip","win-x86-7z","win-x86-exe","win-x86-msi","win-x86-zip"],"npm":"5.6.0","v8":"6.2.414.46","uv":"1.18.0","zlib":"1.2.11","openssl":"1.0.2n","modules":"59","lts":false},
{"version":"v9.3.0","date":"2017-12-12","files":["aix-ppc64","headers","linux-arm64","linux-armv6l","linux-armv7l","linux-ppc64le","linux-x64","linux-x86","osx-x64-pkg","osx-x64-tar","src","sunos-x64","sunos-x86","win-x64-7z","win-x64-exe","win-x64-msi","win-x64-zip","win-x86-7z","win-x86-exe","win-x86-msi","win-x86-zip"],"npm":"5.5.1","v8":"6.2.414.46","uv":"1.18.0","zlib":"1.2.11","openssl":"1.0.2n","modules":"59","lts":false},
...
]
```

Ahora para recuperar la funcionalidad que teníamos antes, podemos encadenar
invocaciones a `.then()`, dónde cada una representa una transformación, que
puede ser síncrona (simplemente retornando un valor) o asíncrona (retornando una
promesa).

```js
getNodeReleases()
  .then(data => JSON.parse(data))
  .then(data => data.shift())
  .then(data => console.log(`Versión más reciente de Node.js: ${data.version}`))
  .catch(err => console.error(err));
```

Lo interesante desde el punto de vista del manejo de errores es que solo
necesitamos un `.catch()`. Si cualquiera de los `.then()` retorna un error una
promesa que resuelva a un error, directamente pasamos al `.catch()` (se hace
un _corto circuito_ que impide que los siguientes `.then()` se ejecuten).

Para completar el ejemplo, re-implementemos la función `getLatestNodeInfo()`,
pero esta vez haciendo uso de nuestra nueva función `getNodeReleases()` y
encadenando promesas.

```js
const getLatestNodeInfo = () =>
  getNodeReleases()
    .then(data => JSON.parse(data))
    .then(data => data.shift());
```

Esta nueva implementación simplemente encadena un par de transformaciones a
través de promesas que resuelven directamente a un valor y retorna una promesa
nueva, lo cual nos va a permitir usar la función `getLatestNodeInfo()` de la
misma manera que en el primer ejemplo de esta lectura:

```js
getLatestNodeInfo()
  .then(data => console.log(`Versión más reciente de Node.js: ${data.version}`))
  .catch(err => console.error(err))
```

***

## Lecturas complemenentarias

* [Promises - Jake Archibald - Google Developers](https://developers.google.com/web/fundamentals/primers/promises)
