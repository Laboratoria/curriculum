---
type: read
duration: 30min
---

# Aserciones

En las lecturas anteriores hemos visto como usar `mocha` para construir la
estructura de qué queremos probar/testear, pero todavía nos falta hacer las
comprobaciones/aserciones que nos permitan verificar si el código que estamos
probando se comporta como esperamos.

Para hacer esto usamos las _aserciones_. Una _aserción_ no es más que un
pedacito de código que comprueba si un valor es el esperado, y en caso de que no
lo sea lo reporte. De esta forma, si en el futuro cambiara algo en el
comportamiento del código, los tests nos permitirían ver exactamente qué.

## Vanilla

Empecemos por implementar nuestra propia _aserción_ de igualdad. Esto no es más
que una función que compara dos valores para ver si son iguales, y en caso de
que no lo sean bota un error con un mensaje informativo.

```js
// Archivo `isVowel.spec.js`

const isVowel = require('./isVowel');

const assertEqual = (value, expected) => {
  if (value !== expected) {
    throw new Error(`Expected '${value}' to equal '${expected}'`);
  }
};

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    assertEqual(isVowel('a'), true);
  });

  it('debería devolver false para letra a', () => {
    assertEqual(isVowel('b'), false);
  });

});
```

Ejecutemos los tests otra vez.

```sh
$ mocha ./isVowel.spec.js


  isVowel()
    ✓ debería devolver true para letra a
    ✓ debería devolver false para letra a


  2 passing (8ms)

```

Ahora todo el output que vemos es producido por Mocha (ya no hay output que
provenga de nuestros `console.log`s), y vemos que ambos tests pasan.

Solo para probar (y valga la redundancia) modifiquemos (mejor dicho rompamos) la
implementación de `isVowel` para ver que nuestros tests efectivamente reporten
los problemas.

```js
// Archivo `isVowel.js`

const isVowel = function (char) {
  return ['b', 'e', 'i', 'o', 'u'].indexOf(char) > -1;
};

module.exports = isVowel;
```

Hemos cambiado la `a` por una `b`. Y nuestros tests ahora debería mostrar output
como:

```sh
$ mocha ./isVowel.spec.js


  isVowel()
    1) debería devolver true para letra a
    2) debería devolver false para letra b


  0 passing (7ms)
  2 failing

  1) isVowel()
       debería devolver true para letra a:
     Error: Expected 'false' to equal 'true'
      at assertEqual (05-deep-dive/03-testing/03-assertions/files/isVowel-vanilla-assert.spec.js:7:11)
      at Context.it (05-deep-dive/03-testing/03-assertions/files/isVowel-vanilla-assert.spec.js:14:5)

  2) isVowel()
       debería devolver false para letra b:
     Error: Expected 'true' to equal 'false'
      at assertEqual (05-deep-dive/03-testing/03-assertions/files/isVowel-vanilla-assert.spec.js:7:11)
      at Context.it (05-deep-dive/03-testing/03-assertions/files/isVowel-vanilla-assert.spec.js:18:5)

```

Como vemos los tests se comportan como esperábamos!

Este ejemplo es ilustrativo, pero en el mundo real probablemente no vas a querer
implementar tu propio código de aserciones (no solo de igualdad, si no todo tipo
de comparaciones). Lo más común es usar una dependencia externa (una librería o
módulo) como veremos en los próximos ejemplos.

## Módulo assert de Node.js

Node.js incluye su propio módulo de aserciones sin necesidad de tener que
instalar ninguna dependencia. Si estás corriendo tus tests en Node.js, es muy
común usar este módulo (`assert`), a menos de que la librería o framework que
estés usando ya incluya su propio sistema de aserciones (por ejemplo `Jest`).

Reemplacemos nuestra función `assertEqual` con el módulo `assert` de Node.js:

```js
// Archivo `isVowel.spec.js`

const assert = require('assert');
const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    assert.equal(isVowel('a'), true);
  });

  it('debería devolver false para letra a', () => {
    assert.equal(isVowel('b'), false);
  });

});
```

[Assert - Node.js Documentation](https://nodejs.org/api/assert.html)

## Chai.assert

Mocha no incluye una interfaz para aserciones, y en el navegador no tenemos el
módulo `assert` de Node.js. Así que es muy común usar Mocha en conjunto con
`Chai`, que es una librería de aserciones que nos ofrece varias interfaces,
entre ellas una muy parecida al `assert` de Node.js:

```js
// Archivo `isVowel.spec.js`

const { assert } = require('chai');
const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    assert.equal(isVowel('a'), true);
  });

  it('debería devolver false para letra a', () => {
    assert.equal(isVowel('b'), false);
  });

});
```

[Chai - Documentación oficial](http://chaijs.com/)

## Lecturas complementarias

* [BDD made simple in Node.JS with Mocha and Chai - @hbarcelos en medium.com](https://medium.com/@hbarcelos/bdd-made-simple-in-node-js-with-mocha-and-chai-3a3ce44ecce2)
