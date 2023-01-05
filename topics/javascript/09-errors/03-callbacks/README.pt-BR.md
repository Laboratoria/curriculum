---
type: read
duration: 15min
---

# Erros em callbacks

Na unidade anterior vimos como a sentença `try...catch` nos permite cercar
código que poderia resultar em uma exceção e assim evitar que a exceção
interrompa a execução do programa.

Porém, o que acontece quando o erro ocorre em uma operação assíncrona? Vejamos
um exemplo. Vamos imaginar que em um script escrito para Node.js temos uma
função chamada `getLatestNodeInfo()`, e que esta é uma função assíncrona (deve
haver uma consulta por HTTP para verificar qual é a versão mais recente do
Node.js) que recebe um _callback_ como argumento.

```js
getLatestNodeInfo((err, data) => {
  if (err) {
    return console.error(err);
  }

  console.log(data);
});
```

No mundo do Node.js é muito comum que os callbacks tenham esta sintaxe `(err,
data)`, onde o primeiro argumento é um erro (caso ocorra algum) e o segundo
argumento é a `data` ou o _resultado_ caso a operação se complete com sucesso.

Ao implementar funções assíncronas, onde vamos comunicar o _resultado_ através
de um _callback_, evitamos lançar erros com `throw`; ao invés disso, os
comunicamos como argumento a uma função callback. Isto nos permite "prender" um
erro assíncrono (que ocorreu em outro contexto de execução) e tratar erros que
de outra forma não poderíamos.

Considere a seguinte implementação da função `getLatestNodeInfo()`:

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

Nesta implementação (por enquanto incompleta e incorreta) estamos lançando um
erro com `throw` dentro de uma _callback_. Vendo a sentença `throw`, poderíamos
pensar que é possível usar `try...catch` para cercar o erro. Algo assim:

```js
// tentativa falha de pegar o erro lançado com `throw` dentro de uma callback
try {
  getLatestNodeInfo(() => {
    // ...
  });
} catch (err) {
  console.log('erro pego com try...catch', err);
}
```

Neste caso, se ocorrer a condição do erro (pode-se mudar `statusCode !== 200`
para `statusCode === 200` temporariamente para causar o erro), vemos que a
exceção não é pega no bloco `catch`; a execução do programa termina sem que
tenhamos a oportunidade de tratar o erro. Isto se dá porque a exceção está sendo
jogada a partir de uma callback que se executa em outro contexto, mais adiante
no tempo. Este `try...catch` só pega erros que possam ocorrer na parte síncrona
da função, antes que seja feito o request.

É por isso que as funções assíncronas evitam lançar erros com `throw` e sempre
comunicam os erros através de argumentos passados a _callbacks_, seja em uma
callback com vários argumentos onde o primeiro seja o possível erro, ou em
callbacks dedicadas, como por exemplo o _handler_ que passamos por request no
exemplo anterior:

```js
http
  .get(url, successCallback)
  .on('error', errorCallback);
```

Agora sim, completemos nossa implementação de `getLatestNodeInfo()`, porém dessa
vez passando os erros através da _callback_ recebida do usuário ao invés de
utilizar `throw`. Nota-se também que a implementação utiliza `try...catch`
internamente para cercar erros que poderiam acontecer durante o _parseamento_ da
data recebida (utilizando `JSON.parse()`), que é uma operação síncrona que
devemos evitar que gere um erro, já que não poderia ser tratado de fora da
função. Para solucionar isso, primeiro pegamos o erro e depois o devolvemos como
argumento para a _callback_.

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

Esta nova implementação nos assegura que os erros que possam ocorrer na função
sempre sejam passados como argumentos para a _callback_ recebida pelo usuário.
