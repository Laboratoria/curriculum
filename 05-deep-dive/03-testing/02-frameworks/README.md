# Frameworks

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

Ya hemos visto un poco de qué hacemos cuando testeamos y por qué lo hacemos.
Ahora vamos a ir introduciendo algunas herramientas para facilitar ese proceso
de tener que ejecutar algo y comprobar si ha ocurrido lo que esperábamos.

Hay un montón de frameworks y librerías buenísimas de testing para JavaScript:
[Mocha](https://mochajs.org/), [Jest](https://facebook.github.io/jest/),
[Jasmine](https://jasmine.github.io/), [Tape](https://github.com/substack/tape),
... por mencionar algunas de las más populares.

En este curso nos vamos a concentrar en **Mocha**, y en particular en la
interfaz [BDD](https://mochajs.org/#bdd), que implementa una API para hacer
[Behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development).

## Instalando Mocha

Para empezar instalemos `mocha` globalmente usando `npm`.

```sh
npm install --global mocha
```

Alternativamente, si te gustan las abreviaciones, puedes usar este otro comando,
que hace exactamente lo mismo que el anterior, pero usando todos los atajos.

```sh
npm i -g mocha
```

Si recibes un error que dice algo como `Error: EACCES: permission denied ...`,
esto probablemente significa que no tienes permisos sobre la carpeta donde está
instalado `Node.js` globalmente. En ese caso puedes probar a ejecutar el comando
usando `sudo`:

```sh
sudo npm i -g mocha
```

Si todo ha ido bien, ya deberías tener `mocha` instalado como un comando que
puedes ejecutar en tu terminal:

```sh
$ which mocha
/usr/local/bin/mocha
```

```sh
$ mocha --help

  Usage: mocha [debug] [options] [files]


  Options:

    -V, --version                           output the version number
    -A, --async-only                        force all tests to take a callback (async) or return a promise
    -c, --colors                            force enabling of colors
    -C, --no-colors                         force disabling of colors
    -G, --growl                             enable growl notification support
    -O, --reporter-options <k=v,k2=v2,...>  reporter-specific options
    -R, --reporter <name>                   specify the reporter to use
    -S, --sort                              sort test files
    -b, --bail                              bail after first test failure
    ...


  Commands:

    init <path>  initialize a client-side mocha setup at <path>
```

## Nuestros primeros tests con la interfaz BDD

```js
// Archivo `isVowel.spec.js`

describe('isVowel()', () => {
  it('debería devolver true para letra a');
  it('debería devolver false para letra a');
});
```

...

```js
// Archivo `isVowel.spec.js`

const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    // ...
  });

  it('debería devolver false para letra a', () => {
    // ...
  });

});
```

...

```js
// Archivo `isVowel.spec.js`

const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    if (isVowel('a') !== true) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

  it('debería devolver false para letra a', () => {
    if (isVowel('b') !== false) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

});
```

## Aserciones

### Vanilla

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

```sh
$ mocha ./isVowel.spec.js


  isVowel()
    ✓ debería devolver true para letra a
    ✓ debería devolver false para letra a


  2 passing (8ms)

```

### Módulo assert de Node.js

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

### Chai.assert

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
