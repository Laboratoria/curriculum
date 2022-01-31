# _Asserts_

* Tipo: `leitura`
* Formato: `individual`
* Duração: `30min`

***

Nas leituras anteriores vimos como usar `mocha` para construir a estrutura que
queremos verificar/testar, mas contudo ainda nos falta fazer as
comprovações/asserções que permitam verificar se o código que estamos testando
se comporta como esperamos.

Para haver isso usamos as _asserções_. Uma _asserção_ é um pedaço de código que
comprova se um valor é o esperado e no caso de não ser, avise-nos. Desta
maneira, se no futuro algo mudar no comportamento do código, os testes
permitirão ver exatamente o quê.

## Vanilla

Comecemos por implementar nossa própria _asserção_ de igualdade. Isso não é mais
do que uma função que compara dois valores para ver se são iguais. Em caso
negativo, exibe um erro com uma mensagem informativa.

```js
// Arquivo `isVowel.spec.js`

const isVowel = require('./isVowel');

const assertEqual = (value, expected) => {
  if (value !== expected) {
    throw new Error(`Expected '${value}' to equal '${expected}'`);
  }
};

describe('isVowel()', () => {

  it('Deveria retornar true para a letra a', () => {
    assertEqual(isVowel('a'), true);
  });

  it('Deveria retornar false para a letra b', () => {
    assertEqual(isVowel('b'), false);
  });

});
```

Executemos os testes novamente.

```sh
$ mocha ./isVowel.spec.js


  isVowel()
    ✓ Deveria retornar true para a letra a.
    ✓ Deveria retornar false para a letra b.


  2 passing (8ms)

```

Agora toda a saída que vemos é produzido pelo Mocha (já não existe uma saída
oriunda de nossos `console.log`'s) e vemos que ambos os testes passam.

Só para testar (e vale a redundância) modifiquemos (melhor dizer "quebremos") a
implementação de `isVowel()` para ver que nossos testes efetivamente reportam os
problemas.

```js
// Arquivo `isVowel.js`

const isVowel = function (char) {
  return ['b', 'e', 'i', 'o', 'u'].indexOf(char) > -1;
};

module.exports = isVowel;
```

Trocamos o `a` por um `b`. E nossos testes agora deveriam mostrar a saída como:

```sh
$ mocha ./isVowel.spec.js


  isVowel()
    1) Deveria retornar true para a letra a.
    2) Deveria retornar false para a letra b.


  0 passing (7ms)
  2 failing

  1) isVowel()
       Deveria retornar true para a letra a:
     Error: Expected 'false' to equal 'true'
      at assertEqual (05-deep-dive/03-testing/03-assertions/files/isVowel-vanilla-assert.spec.js:7:11)
      at Context.it (05-deep-dive/03-testing/03-assertions/files/isVowel-vanilla-assert.spec.js:14:5)

  2) isVowel()
       Deveria retornar false para a letra b:
     Error: Expected 'true' to equal 'false'
      at assertEqual (05-deep-dive/03-testing/03-assertions/files/isVowel-vanilla-assert.spec.js:7:11)
      at Context.it (05-deep-dive/03-testing/03-assertions/files/isVowel-vanilla-assert.spec.js:18:5)

```

Como podemos ver, os testes se comportam como esperávamos!

Este exemplo é ilustrativo, mas no mundo real provavelmente você não vai querer
implementar seu próprio código de asserções (não somente de igualdade, mas sim
todo o tipo de comparações). O mais comum é usar uma dependência externa (uma
biblioteca ou módulo) como veremos nos próximos exemplos.

## Módulo _assert_ de Node.js

Node.js contém seu próprio módulo de asserções sem necessidade de ter que
instalar nenhuma dependência. Se você estiver executando seus testes com
Node.js, é muito comum utilizar este módulo (`assert`), a menos que a biblioteca
ou _framework_ que estiver usando já contenham seus próprios sistemas de
asserções (por exemplo, `Jest`).

Troquemos nossa função `assertEqual` com o módulo `assert` de Node.js:

```js
// Arquivo `isVowel.spec.js`

const assert = require('assert');
const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('Deveria retornar true para a letra a', () => {
    assert.equal(isVowel('a'), true);
  });

  it('Deveria retornar false para a letra b', () => {
    assert.equal(isVowel('b'), false);
  });

});
```

[Documentação Assert - Node.js](https://nodejs.org/api/assert.html)

## Chai.assert

O Mocha não contém uma interface para asserções e no navegador não temos o
módulo `assert` de Node.js. Logo, é muito comum usar o Mocha em conjunto com
`Chai`, que é uma biblioteca de asserções que nos oferece várias interfaces.
Entre elas, uma muito parecida com o `assert` de Node.js:

```js
// Arquivo `isVowel.spec.js`

const { assert } = require('chai');
const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('Deveria retornar true para a letra a', () => {
    assert.equal(isVowel('a'), true);
  });

  it('Deveria retornar false para a letra b', () => {
    assert.equal(isVowel('b'), false);
  });

});
```

[Chai - Documentação oficial](http://chaijs.com/)

## Leituras complementares

* [BDD made simple in Node.JS with Mocha and Chai - @hbarcelos en
  medium.com](https://medium.com/@hbarcelos/bdd-made-simple-in-node-js-with-mocha-and-chai-3a3ce44ecce2)
