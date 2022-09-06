# Array.prototype

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

Los arreglos (arrays) en JavaScript están implementados como objetos, lo cual
puede sonar un poco raro, pero en JavaScript casi todos los tipos de datos
(`Number`, `String`, `Array`, ...) están implementados como objetos, y como
tales, los valores de estos _tipos_ van a tener una serie de _métodos_ y
_propiedades_ asociados a ellos. Técnicamente heredan estos _métodos_ y
_propiedades_ de un _prototipo_.

En este curso no vamos a profundizar en el mecanismo de _herencia prototipal_
en JavaScript, pero sí necesitamos saber que todo arreglo en JavaScript es una
_instancia_ del _constructor_ `Array`, y por tanto hereda todos los _métodos_ y
_propiedades_ definidas en `Array.prototype`.

De hecho, todos los objetos tienen un _prototipo_... y por ejemplo, es a través
de estos prototipos que nuestros strings mágicamente tienen una _propiedad_
`length` o un método `toLowerCase()`. Los hereda de `String.prototype.length` y
`String.prototype.toLowerCase`.

Regresando a los arreglos... veamos un ejempo. Abre la consola del navegador y
escribe `[].`. Automáticamente debería salir una lista con todos los _métodos_ y
_propiedades_ que tiene nuestro arreglo vacío (`[]`).

![Array methods and props in browser console](https://user-images.githubusercontent.com/110297/37485550-c77d636e-2859-11e8-8b76-21fc103691e5.png)

## Propiedades `Array.prototype`

Antes de comenzar, recordemos cómo era nuestra función
que nos permitía comparar arrays

```js
const equal = (one, other) => JSON.stringify(one) === JSON.stringify(other);

```

La única propiedad que nos interesa por ahora de los arreglos es
`Array.prototype.length`, que es una propiedad de sólo lectura que siempre nos
muestra la longitud actual del arreglo. Por ejemplo:

```js
console.assert([].length === 0);
console.assert(['a'].length === 1);
console.assert([true, 0, 'foo'].length === 3);

```

## Métodos comunes de `Array.prototype`

JavaScript nos ofrece un montón de métodos para manipular arreglos, para iterar
sobre ellos, ... no te preocupes por memorizar la lista completa (no creo que
nadie la sepa de memoria), poco a poco con el uso irás familiarizándote y
aprendiendo a apreciar sus beneficios. Recuerda que siempre tienes la
[documentación oficial](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
disponible, haz uso de ella, es la mejor referencia.

Veamos algunos métodos comunes de los arreglos.

### `Array.prototype.push`

El método `Array.prototype.push` recibe un valor, lo agrega al final del
arreglo sobre el que se invocó y retorna la nueva longitud del arreglo.

```js
let arr = [0, 0, 0];
console.assert(arr.length === 3);
console.assert(typeof arr.push === 'function');
console.assert(arr.push(1) === 4);
console.assert(equal(arr, [0, 0, 0, 1]));

```

En este caso, la funcionalidad del método `push()` puede replicarse usando una
simple asignación:

```js
arr = [0, 0, 0];
console.assert(arr.length === 3);
arr[arr.length] = 1;
console.assert(equal(arr, [0, 0, 0, 1]));

```

La mayor diferencia es un tema de semántica y estilo/paradigma, quizás parezca
sútil, pero creanme, más adelante verán lo valiosa que es. En programación
muchas veces veremos que hay más de una manera de hacer las cosas, lo cual puede
crear confusión y frustración, pero al final son el reflejo de diferentes formas
de pensar en código, y cada una tiene su lugar. Por ejemplo, en _programación
funcional_ que veremos más adelante en el Bootcamp, favorecemos el cómputo a
través de la aplicación de argumentos a funciones y tratamos de evitar la
asignación y mutación de valores. En ese contexto, y en particular en JavaScript
moderno, vamos a ver que los métodos de los arreglos nos van a permitir escribir
código más expresivo, conciso y, por qué no, bonito.

### `Array.prototype.pop`

Éste método no recibe ningún argumento, simplemente extrae el último elemento
del arreglo y lo retorna (modificando el arreglo directamente - _in place_).

```js
arr = ['oh', 'my', 'god'];
console.assert(arr.pop() === 'god');
console.assert(equal(arr, ['oh', 'my']));

```

### `Array.prototype.slice`

`Array.prototype.slice` crea un nuevo arreglo con una copia superficial
(_shallow copy_) de una porción del arreglo obre el cual se invoca. Recibe dos
argumentos, `begin` y `end`, que indican que porción del arreglo queremos
copiar. `begin` es el índice a partir del cual queremos empezar a copiar, y
`end` hasta donde copiar (sin incluir el elemento con índice `end`).

El arreglo original no se ve modificado.

Ejecuta los siguientes ejemplos en la consola del navegador para que veas como
se comporta el método `slice()`.

```js
arr = [3, 2, 1];
console.assert(
  equal(arr.slice(0), [3, 2, 1]),
);
console.assert(
  equal(arr.slice(1), [2, 1]),
);
console.assert(
  equal(arr.slice(2), [1]),
);
console.assert(
  equal(arr.slice(-1), [1]),
);
console.assert(
  equal(arr.slice(0, 1), [3]),
);
console.assert(
  equal(arr, [3, 2, 1]),
);

```

### `Array.prototype.indexOf`

El método `indexOf()` recibe un valor, y devuelve el índice que contenga ese
valor si lo encuentra, si no devuelve `-1`. Este método se usa de forma muy
común para comprobar si un arreglo contiene un determinado valor.

```js
arr = ['foo', 'bar', 'baz'];
console.assert(arr.indexOf('foo') === 0);
console.assert(arr.indexOf('hmmm') === -1);

```

## Propiedades y métodos heredados de Object.prototype

Cabe mencionar que los arreglos también heredan de `Object.prototype`
indirectamente, al igual que todos los demás objetos en JavaScript, así que
nuestros arreglos también tendrán métodos como `toString()` o `isPrototypeOf()`.
En la próxima unidad (y cursos posteriores) iremos explorando
`Object.prototype`, el concepto de _herencia_ y la cadena de prototipos.

***

En esta lectura hemos visto algunos ejemplos de métodos que tienen todos los
arreglos, pero hay muchos más. Te recomendamos explorar la documentación oficial
de [Array.prototype en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype),
ahí podrás ver todos los _métodos_ y _propiedades_ disponibles y sus interfaces
(qué argumentos esperan, qué retornan, ...).

## Lecturas complementarias

- [Array en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Object.prototype en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
- [Array en javascript.info](https://javascript.info/array)
