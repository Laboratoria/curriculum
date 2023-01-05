---
type: read
duration: 30min
---

# Frameworks

Ya hemos visto un poco de qué hacemos cuando testeamos y por qué lo hacemos.
Ahora vamos a ir introduciendo algunas herramientas para facilitar ese proceso
de tener que ejecutar algo y comprobar si ha ocurrido lo que esperábamos.

Hay un montón de frameworks y librerías buenísimas de testing para JavaScript:
[Mocha](https://mochajs.org/), [Jest](https://facebook.github.io/jest/),
[Jasmine](https://jasmine.github.io/), [Tape](https://github.com/substack/tape),
... por mencionar algunas de las más populares.

> Unit testing involves breaking your program into pieces, and subjecting each
> piece to a series of tests.
>
> Usually tests are run as separate programs, but the method of testing varies,
> depending on the language, and type of software (GUI, command-line, library).
>
> Most languages have unit testing frameworks, you should look into one for
> yours.
>
> Tests are usually run periodically, often after every change to the source
> code. The more often the better, because the sooner you will catch problems.
>
> Fuente: [Stack Overflow](https://stackoverflow.com/a/652309/374331)

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
puedes ejecutar en tu terminal. Podemos usar el comando `which` para ver si se
encuentra el ejecutable:

```sh
$ which mocha
/usr/local/bin/mocha
```

Si `mocha` no estuviera instalado en tu `PATH` el comando `which` no mostraría
nada. Por otro lado, ahora que sabemos que tenemos el ejecutable de `mocha`
disponible, podemos ver la ayuda del comando ejecutando `mocha --help`:

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

Ahora que ya tenemos instalado `mocha`, podemos usar el comando para ejecutar
scripts con nuestros tests, usando todo lo que nos ofrece la librería.

Para comenzar nos vamos a limitar a dos funciones que `mocha` inyecta en el
entorno: `describe()` e `it()`. Estas dos funciones nos va a permitir construir
la estructura de qué queremos testear.

En el ejemplo que venimos viendo, nuestros test dicen algo como: comprueba que
_isVowel()_:

* retorna `true` cuando se invoca con el valor `a` (`isVowel('a') === true`)
* retorna `false` cuando se invoca con el valor `b` (`isVowel('b') === false`)

Esta lógica la podemos expresar usando `describe()` e `it()`. Con `describe()`
vamos a decir qué cosa estamos testeando, y con `it()` vamos a ir especificando
que características o comportamientos queremos comprobar/afirmar.

Reescribamos nuestros tests usando esta API (`describe` e `it`). El primer paso
es indicar qué queremos testear (la función `isVowel()` en nuestro caso) usando
una llamada a `describe()`, que recibe dos argumentos, un string informativo
para darle un nombre al grupo de tests y una función que contendrá todos los
tests y aserciones para esta cosa que estamos testeando.

```js
// Archivo `isVowel.spec.js`

describe('isVowel()', () => {
  // Acá van los tests que describen el compartamiento de `isVowel()`
});
```

Salva esto en el archivo `isVowel.spec.js` y ejecútalo con `mocha`:

```sh
$ mocha ./isVowel.spec.js


  0 passing (2ms)

```

No recibimos ningún error pero tampoco pasa nada interesante... solo vemos que
`0` tests pasaron. A la hora de escribir tests (ya sea antes o después de
implementar el código que queremos testear), es muy común plantear tests sin
darles una implementación todavía. En nuestro caso, sabemos que queremos probar
que `isVowel()`:

* retorna `true` cuando se invoca con el valor `a`
* retorna `false` cuando se invoca con el valor `b`

Esto traducido a la semántica de BDD en Mocha, lo podemos expresar así:

```js
// Archivo `isVowel.spec.js`

describe('isVowel()', () => {
  it('debería devolver true para letra a');
  it('debería devolver false para letra b');
});
```

Volvamos a ejecutar los tests con el comando `mocha`:

```sh
$ mocha ./isVowel.spec.js


  isVowel()
    - debería devolver true para letra a
    - debería devolver false para letra b


  0 passing (5ms)
  2 pending

```

Verás de que todavía no hemos especificado cómo hacer las comprobaciones, pero
hemos ido igualmente describiendo el comportamiento esperado, y más tarde
podemos ir rellenando la implementación según avancemos. Esto es super útil
tanto para _documentar_ el comportamiento de nuestro código, como para ver el
nivel de completitud de la implementación y qué casos tiene en cuenta (o no).

En el snippet anterior invocamos `it()` con un string que nos permite describir
la característica o comportamiento esperado. Lo más común es que estos strings
comiencen con la palabra _debería..._. De es forma se va articulando la
semántica que después _leeremos_ como _is isVowel() debería ...._.

Mocha nos muestra los tests que añadimos con `it()` pero nos dice que están
_pendientes_. Esto es porque les dimos un nombre, pero no les dimos una
implementación. Para añadir el código que de verdad ejecuta la prueba en sí,
`it()` recibe un segundo argumento, una función que será invocada para ejecutar
el test en cuestión.

```js
// Archivo `isVowel.spec.js`

const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    // Acá invocamos `isVowel()` y verificamos el resultado
  });

  it('debería devolver false para letra b', () => {
    // Acá invocamos `isVowel()` y verificamos el resultado
  });

});
```

Bueno, ya tenemos una estructura lista para implementar nuestros tests. Para
continuar gradualmente con el ejemplo, simplemente copia las comprobaciones que
hacíamos en la primera versión de los tests (lectura anterior) dentro de nuestra
nueva estructura:

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

  it('debería devolver false para letra b', () => {
    if (isVowel('b') !== false) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

});
```

Ejecutemos los tests otra vez:

```sh
$ mocha ./isVowel.spec.js


  isVowel()
✓ ok
    ✓ debería devolver true para letra a
✓ ok
    ✓ debería devolver false para letra b


  2 passing (6ms)

```

Hmmm... como puedes ver se ejecutaron nuestras comprobaciones, pero Mocha y
nuestro código no parecen estar comunicándose. Eso es porque Mocha espera que
hagamos las comprobaciones usando _aserciones_, que puedan comunicar si una
comprobación pasó o no a mocha para que este pueda manejar los resultados, en
vez de tener que _manualmente_ imprimir mensajes a la consola.

En la siguiente lectura veremos como usar _aserciones_ en tus tests, tanto en
versión vanilla, con `assert` de Node.js y con `Chai.assert`.
