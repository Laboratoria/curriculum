---
type: read
duration: 20min
---

# Qué es un test?

Cuando hablamos de **tests** (pruebas), podríamos ponernos a pensar en
herramientas de testing, como `Mocha`, `Jest`, `Jasmine`, ... o metodologías de
desarrollo como TDD o BDD. Todo esto puede ser super confuso. En esta unidad
trataremos de desmitificar un poco este tema empezando desde el principio. Para
ello pensemos en pruebas simplemente como el acto de ejecutar algo en la
computadora y después comprobar que efectivamente ocurrió lo que esperábamos.

El test más sencillo posible:

```js
const a = 5;
console.log(a);
```

Podríamos decir que nuestro amigo `console.log` es la herramienta de testing más
básica de todas. Al imprimir un valor a la consola, lo podemos ver con nuestros
ojos y _comprobar_ qué es ese valor (de una forma visual). Estamos probando (o
comprobando) que efectivamente la variable `a` tomó el valor `5`, que era
exactamente lo que esperábamos.

Este proceso nos permite ir viendo qué está ocurriendo en el código mientras lo
escribimos. Usa `console.log`, y úsalo mucho. Pero obviamente tiene sus
limitaciones. En este caso dependemos de que una persona ejecute el comando, vea
el _output_ (salida) y en su cabeza haga la comprobación. Muy útil para uno
mismo, pero no es automatizable ni escalable.

Por suerte, somos programadorxs, así que podemos escribir un poco de código (y/o
usar código de otrxs) para atacar estos problemas :rocket:

***

Para seguir esta unidad, te recomendamos que crees una carpeta en algún lugar de
tu computadora y vayas creando los archivos y codeando mientras avanzamos. Todo
el código de esta lección lo puedes ejecutar con `node`.

***

Ahora imaginemos que queremos una función que dado un caracter, nos diga si es
una vocal o no (debería retornar `true` para las vocales y `false` para
cualquier otro caracter). Antes de implementar la función podríamos plantear
unos _tests_. Crea un archivo con el nombre `isVowel.spec.js` y escribe el
siguiente código:

```js
// Archivo `isVowel.spec.js`:

const isVowel = require('./isVowel');

console.log('debería devolver true para letra a');
if (isVowel('a') === true) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería devolver false para letra b');
if (isVowel('b') === false) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}
```

Ejecutemos nuestros tests con `node` en la línea de comando:

```sh
$ node ./isVowel.spec.js
module.js:557
    throw err;
    ^

Error: Cannot find module './isVowel'
    at Function.Module._resolveFilename (module.js:555:15)
    at Function.Module._load (module.js:482:25)
    at Module.require (module.js:604:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/lupo/work/laboratoria/curricula-js/05-deep-dive/03-testing/01-basics/files/isVowel.spec.js:1:79)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
    at Function.Module._load (module.js:505:3)
```

Como vemos recibimos un error: `Error: Cannot find module './isVowel'`. Los
errores pueden ser un poco crípticos al principio, y hay que aprender a
_leerlos_. El mensaje de error en sí dice que no se pudo encontrar el módulo
`./isVowel`, y debajo tenemos una serie de líneas con el
[stack trace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack),
que nos muestra la pila de llamadas donde ocurrió el error. En este caso podemos
ver que se menciona nuestro script (`/Users/lupo/work/laboratoria/curricula-js/05-deep-dive/03-testing/01-basics/files/isVowel.spec.js:1:79`),
y al final de la ruta al archivo vemos que aparecen dos números separados por
dos puntos (`:`). Estos números nos dicen en qué línea y qué columna (posición
dentro de la línea) está el código en cuestión. La línea `1` contiene
`require('./isVowel')`, que es la responsable del error.

Esto es porque hemos tratado de importar un modulo del archivo `./isVowel.js` en
el mismo directorio que nuestro script con los tests, pero obviamente no existe,
así que creémoslo y declaremos una función con el nombre `isVowel`:

```js
// Archivo `isVowel.js`

const isVowel = function (char) {
  // ...
};
```

Si volvemos a ejecutar los tests, ahora el output mostrado en la consola debería
verse algo así:

```sh
$ node ./isVowel.spec.js
debería devolver true para letra a
/Users/lupo/work/laboratoria/curricula-js/05-deep-dive/03-testing/01-basics/files/isVowel.spec.js:4
if (isVowel('a') !== true) {
    ^

TypeError: isVowel is not a function
    at Object.<anonymous> (/Users/lupo/work/laboratoria/curricula-js/05-deep-dive/03-testing/01-basics/files/isVowel.spec.js:6:5)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
    at Function.Module._load (module.js:505:3)
    at Function.Module.runMain (module.js:701:10)
    at startup (bootstrap_node.js:194:16)
    at bootstrap_node.js:618:3
```

Esto quiere decir que ahora sí se ha podido cargar el módulo (el error de antes
ya no aparece), pero ahora recibimos un nuevo error: `TypeError: isVowel is not
a function`. Si nos fijamos en la línea justo abajo del mensaje de error, vemos
que el error se produjo en el archivo `isVowel.spec.js` en la línea `6` y
columna `5`). Si nos fijamos en el código, veremos que línea `6` y columna `5`
es donde está `isVowel('a')`. En esta línea es la primera vez que invocamos la
función `isVowel`, y parece que no es lo que esperábamos (una función, doh!).

El motivo por el que vemos este error es porque a pesar de que hemos creado el
archivo `isVowel.js` y hemos declarado una función con el nombre `isVowel`, no
la hemos _exportado_.

Más adelante veremos más detalles sobre como _exportar_ usando tanto CommonJS
(`require`, `module`, `module.exports`) como módulos de ES6 (`import`,
`export`). Por ahora no vamos a detenernos con estos detalles. Lo importante por
ahora es saber que estamos ejecutando nuestro código con `node`, con lo cual
vamos a usar el sistema de módulos de `node` (CommonJS). Cuando usamos este
sistema, podemos _exportar_ cualquier valor asignándolo a la propiedad `exports`
del objeto global `module` (`module.exports`). `Node.js` se encarga de que el
objeto `module` exista en el ámbito global.

```js
// Archivo `isVowel.js`

const isVowel = function (char) {
  // ...
};

module.exports = isVowel;
```

Ejecutemos los _tests_ una vez más:

```sh
$ node ./isVowel.spec.js
debería devolver true para letra a
✗ fail
debería devolver false para letra b
✗ fail
```

Yay! Finalmente nuestro script de tests corre sin _errores_, pero vemos que la
implementación de `isVowel()` todavía no pasa ninguno de los dos tests que
escribimos.

Ahora sí, implementamos la funcionalidad esperada en `isVowel()`:

```js
// Archivo `isVowel.js`

const isVowel = function (char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) > -1;
};

module.exports = isVowel;
```

Y volvemos a ejecutar los tests una vez más:

```sh
$ node ./isVowel.spec.js
debería devolver true para letra a
✓ ok
debería devolver false para letra b
✓ ok
```

***

<!--
... pedacitos chiquitos que puedan ser probados de forma aislada...
-->

## Lecturas complementarias

[Unit Test - Martin Fowler](https://martinfowler.com/bliki/UnitTest.html)
