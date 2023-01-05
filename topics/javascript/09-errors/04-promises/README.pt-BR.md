---
type: read
duration: 15min
---

# Erros em promessas

A partir do ECMAScript 6, o JavaScript incluiu objetos `Promise` que nos
permitem controlar o fluxo de operações síncronas e assíncronas.

Assim como com as _callbacks_, quando vamos implementar _promessas_ também
evitamos lançar erros com `throw`. No caso das promessas temos uma série de
funções dedicadas especialmente ao tratamento de erros. Do ponto de vista da
implementação de _promessas_, temos a função `reject` e no caso do consumo de
promessas temos o mẽtodo `promise.catch()`, assim como a opção de um segundo
argumento do método `promise.then(onSuccess, onError)`.

Continuando com o exemplo da leitura anterior, modificamos nossa implementação
de `getLatestNodeInfo()` para que retorne uma promessa ao invés de usar uma
_callback_ simples:

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

Nesta nova implementação nós substituímos as chamadas a `cb()` (a _callback_ que
recebíamos como argumento) com chamadas para `reject()` (nos casos de erro) e
`resolve()` (em caso de êxito). Isto no permite agora chamar nossa função
`getLatestNodeInfo()` da seguinte maneira:

```js
getLatestNodeInfo()
  .then(data => console.log(`Versão mais recente de Node.js: ${data.version}`))
  .catch(err => console.error(err));
```

Da mesma forma, poderíamos escrever:

```js
getLatestNodeInfo().then(
  data => console.log(`Versão mais recente de Node.js: ${data.version}`),
  err => console.error(err)
);
```

## Tratamento de erros em promessas encadeadas

Uma das grandes vantagens das promessas é que podemos encadeá-las. Isso quer
dizer que, quando invocamos o método `promise.then()`, podemos retornar:

* ou um valor que resolve a promessa
* ou outra promessa, que resolverá outro valor

O método`promise.then()`, por sua vez, retorna uma promessa sobre a qual podemos
invocar novamente `then` e recebe como argumento o valor resultado do `then`
anterior.

Para ilustrar este conceito, modifiquemos outra vez nossa implementação de
`getLatestNodeInfo()` para que faça um pouco menos de trabalho, e ao invés de
parsear o texto recebido com `JSON.parse` e de aí selecionar a última versão,
façamos com que devolva diretamente o texto recebido. Aproveitamos para mudar o
nome da função, que agora não devolve a última versão, mas sim informações sobre
todos os releases (em JSON sem parsear):

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

Vamos chamar nossa nova função `getNodeReleases()`:

```js
getNodeReleases()
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

Se não ocorrer nenhum erro de rede, isso deve resultar na invocação da função
passada para `.then ()` com o texto recebido do request e não o último `catch
()`. A saída deve ser algo como isto:

```text
[
{"version":"v9.4.0","date":"2018-01-10","files":["aix-ppc64","headers","linux-arm64","linux-armv6l","linux-armv7l","linux-ppc64le","linux-x64","linux-x86","osx-x64-pkg","osx-x64-tar","src","sunos-x64","sunos-x86","win-x64-7z","win-x64-exe","win-x64-msi","win-x64-zip","win-x86-7z","win-x86-exe","win-x86-msi","win-x86-zip"],"npm":"5.6.0","v8":"6.2.414.46","uv":"1.18.0","zlib":"1.2.11","openssl":"1.0.2n","modules":"59","lts":false},
{"version":"v9.3.0","date":"2017-12-12","files":["aix-ppc64","headers","linux-arm64","linux-armv6l","linux-armv7l","linux-ppc64le","linux-x64","linux-x86","osx-x64-pkg","osx-x64-tar","src","sunos-x64","sunos-x86","win-x64-7z","win-x64-exe","win-x64-msi","win-x64-zip","win-x86-7z","win-x86-exe","win-x86-msi","win-x86-zip"],"npm":"5.5.1","v8":"6.2.414.46","uv":"1.18.0","zlib":"1.2.11","openssl":"1.0.2n","modules":"59","lts":false},
...
]
```

Agora, para recuperar a funcionalidade que tínhamos antes, podemos encadear
chamadas a `.then()`, onde cada uma representa uma transformação, que pode ser
síncrona (simplesmente retornando um valor) ou assíncrona (retornando uma
promessa).

```js
getNodeReleases()
  .then(data => JSON.parse(data))
  .then(data => data.shift())
  .then(data => console.log(`Versão mais recente de Node.js: ${data.version}`))
  .catch(err => console.error(err));
```

O interessante, do ponto de vista do tratamento de erros, é que só é necessário
um `.catch()`. Se qualquer um dos `.then ()` retornar um erro à promessa que
resolve um erro, diretamente passamos para `.catch ()` (é feito um
_curto-circuito_ que impede o seguinte `.then ()` de executar).

Para completar o exemplo, implantaremos novamente a função
`getLatestNodeInfo()`, porém dessa vez fazendo uso de nessa nova função
`getNodeReleases()` e encadeando promessas.

```js
const getLatestNodeInfo = () =>
  getNodeReleases()
    .then(data => JSON.parse(data))
    .then(data => data.shift());
```

Esta nova implementação simplesmente encadeia algumas transformações através de
promessas que resolvem diretamente um valor e retornam uma promessa nova, o que
nos permitirá usar a função `getLatestNodeInfo ()` da mesma forma que no
primeiro exemplo desta leitura:

```js
getLatestNodeInfo()
  .then(data => console.log(`Versión más reciente de Node.js: ${data.version}`))
  .catch(err => console.error(err))
```

***

## Leituras complementares

* [Promises - Jake Archibald - Google
  Developers](https://developers.google.com/web/fundamentals/primers/promises)
