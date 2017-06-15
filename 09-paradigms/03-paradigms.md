# 09. Paradigmas de programación

## Lección 03: Introducción a Paradigmas de Programación

* Formato: `video/code` (self-paced)
* Duración: `1h`

En esta lección aprenderás las características y diferencias entre los
paradigmas más relevantes para **JavaScript**, que es un lenguaje
multi-paradigma y nos permite programar en varios estilos: imperativo, por
procedimientos, orientado a objetos (OOP), funcional (FP), orientado a eventos,
...

### Objetivos de la lección

* Entender el concepto de "paradigma"
* Entender y reconocer las diferencias entre los paradigmas más comunes


### Requisitos

* Es fundamental tener instalado y configurado `git` y `npm`
* Cuenta en [GitHub](https://github.com/)
* Instalar `learnyouparadigms` con el siguiente comando: `npm install -g Laboratoria/learnyouparadigms`

***

### Lesson plan

| Orden |  Tipo  | Duración | Descripción
|-------|--------|----------|------------
|   1   | video  |    3min  | [¿Qué son los paradigmas de programación?](#qué-son-los-paradigmas-de-programación)
|   2   | video  |    3min  | [Historia](#historia)
|   3   | video  |    4min  | [Declarativo vs Imperativo](#declarativo-vs-imperativo)
|   4   | code   |    5min  | [Ejercicio imperativo](#ejercicio-paradigma-imperativo)
|   5   | video  |    5min  | [Por procedimientos](#programación-por-procedimientos)
|   6   | code   |    8min  | [Ejercicio por procedimientos](#ejercicio-paradigma-por-procedimientos)
|   7   | video  |    5min  | [Programacion Orientada a Objetos](#oop)
|   8   | code   |   10min  | [Ejercicio OOP](#ejercicio-oop)
|   9   | video  |    5min  | [Funcional](#fp)
|  10   | code   |   10min  | [Ejercicio funcional](#ejercicio-fp)
|  11   | qa     |    5min  | Re-cap

***

### ¿Qué son los paradigmas de programación?

`video: 3min`

Los **Paradigmas de Programación** (_Programming Paradigms_) son formas
diferentes de pensar en cómo se organiza un programa basado en una serie de
principios, los cuales resultan en estilos muy distintos y lenguajes muy
diversos.

Consideremos la siguiente función:

```js
function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
```

La función `sum(array)` recibe un array de números y retorna la suma de todos
los elementos del array. Para llevar a cabo la suma, usamos la variable `total`,
la cual vamos a ir actualizando (mutando) mientras vamos recorriendo el arreglo
con un bucle (`for` en este caso). Estas características son típicas del estilo
imperativo.

Ahora, podemos implementar exactamente la misma funcionalidad usando un enfoque
completamente distinto.

```js
function sum(array) {
  if (!array.length) {
    return 0;
  }
  return array[0] + sum(array.slice(1));
};
```

En esta segunda implementación, la función `sum(array)` sigue teniendo la misma
interfaz (recibe los mismos argumentos y retorna lo mismo), pero claramente
podemos ver que la lógica se expresa de una manera muy diferente. En la versión
recursiva hemos reemplazado el bucle `for` por recursión, y además podemos ver
que no hay asignación ni mutación de variables, el "cómputo" se hace por
aplicación de argumentos a funciones. Este tipo de características son propias
del paradigma funcional.

***

PRO TIP:

Haciendo uso de ES2015 podemos refactorizar la versión funcional de `sum` de
esta manera:

```js
const sum = array => !array.length ? 0 : array[0] + sum(array.slice(1));
```

***

Cuando hablamos de **Paradigmas de Programación** inevitablemente tenemos que
hablar de lenguajes de programación. Algunos lenguajes, como JavaScript, son
_multi-paradigma_, lo que quiere decir que nos permiten programar en diferentes
paradigmas, mientras que otros se enfocan específicamente en uno.

**JavaScript** es un leguage _híbrido_, por decirlo de alguna forma, y contiene
elementos propios de lenguajes funcionales (por ejemplo funciones como objetos
de primera clase, lambdas, ...) pero no estamos limitados al paradigma
funcional. **JavaScript nos permite programar de forma _funcional_, _orientado a
objetos_, _orientado a eventos_, _por procedimientos_, ...**

También veremos que los "paradigmas" son "estilos" de programación que no son
necesariamente exclusivos. De hecho, algunos son complementarios o evoluciones
de paradigmas más antiguos o con un nivel de abstracción más bajo. Así, la
programación procedural y orientada a objetos, por ejemplo, ambas son
imperativas, ya que comparten una raíz común.

### Historia

`video: 3min`

Para tener una idea general de los paradigmas y sus peculiaridades, es útil
repasar brevemente su historia.

El primer paradigma en aparecer, primera mitad de los años 50, es el
**imperativo**, que se caracteriza por un nivel bajo de abstracción. Por lo
tanto el código está enfocado en las instrucciones que la computadora debe
seguir, y no necesariamente en la semántica o lógica de la funcionalidad que
estamos implementando (el cómo nosotros pensamos en lo que hace el programa).

Veamos un ejemplo de `Assembly`, el primer lenguaje "moderno", que apareció en
el año 1949, y que sigue vivo a día de hoy, eso sí, para cosas muy específicas,
que nos son necesariamente lo que vemos los desarrolladores web, pero que sirve
para este ejemplo ;-)

```
section .text             ;section declaration

                          ;we must export the entry point to the ELF linker or
  global  _start          ;loader. They conventionally recognize _start as their
                          ;entry point. Use ld -e foo to override the default.

_start:

                          ;write our string to stdout

  mov     edx,len         ;third argument: message length
  mov     ecx,msg         ;second argument: pointer to message to write
  mov     ebx,1           ;first argument: file handle (stdout)
  mov     eax,4           ;system call number (sys_write)
  int     0x80            ;call kernel

                          ;and exit

  mov     ebx,0           ;first syscall argument: exit code
  mov     eax,1           ;system call number (sys_exit)
  int     0x80            ;call kernel

section .data             ;section declaration

msg db    "Hello, world!",0xa    ;our dear string
len equ   $ - msg                ;length of our dear string
```

http://www.tldp.org/HOWTO/Assembly-HOWTO/hello.html

El snippet de arriba es un "hello world" escrito en `Assembly` (una versión
moderna, pero muy parecido a lo que hubieras visto en los años 50). Lo único que
hace este programa es imprimir el string `Hello, world!`. El equivalente a todo
el código de arriba en JavaScript sería:

```js
console.log('Hello, world!');
```

En nuestro caso, JavaScript tiene un nivel de abstracción mucho más alto. Con lo
cual, no tenemos que preocuparnos de muchos detalles que JavaScript ya abstrae
para nosotros, como manejo de memoria, instrucciones del procesador, etc. Esto
nos permite expresar de forma más "humana" la intención de nuestro programa, y
con mucho menos código.

Regresamos a los años 50. Según la programación va evolucionando, y los
programas creciendo, vemos cómo van a ir surgiendo diferentes formas de
"abstraer", "organizar" y "reusar" el código. A finales de los años 50 vemos
como aparecen **Fortran II** y **Lisp**, introduciendo la programación
**procedural** y **funcional**. Con ambos enfoques pasamos a nuevos nieveles de
abstracción y mejora en el reuso de código.

En los años 70 y 80 se da el boom de la programación orientada a objetos,
primero con **Smalltalk** y después **C++**.

**JavaScript** nace en 1995, el mismo año que **Java**, **Ruby** y **PHP**. La
década de los 90 se caracteriza por los lenguajes multi-paradigma. En ese
contexto JavaScript destaca por su dinamismo y su naturaleza funcional. De hecho
a nivel conceptual, JavaScript está fuertemente inspirado por **Scheme**, que es
un lenguaje funcional, y los prototipos de **Self**, aunque por necesidades del
mercado, la sintáxis se parece más a la familia de lenguajes de **C** y
**Java**, que son imperativos. Por esta razón, JavaScript se considera muchas
veces [el lenguaje más
incomprendido](http://javascript.crockford.com/javascript.html), y quizás
confuso.

Como referencia, abajo podemos ver una tabla con algunos de los lenguajes más
significativos a nivel de cambios de paradigma, y el conexto en el que aparece
JavaScript.

| Año  | Lenguaje   | Paradigma  |
|------|------------|------------|
| 1949 | [Assembly](https://en.wikipedia.org/wiki/Assembly_language) | imperativo |
| 1957 | [Fortran](https://en.wikipedia.org/wiki/Fortran) | imperativo |
| 1958 | [Fortran II](https://en.wikipedia.org/wiki/Fortran#FORTRAN_II) | imperativo, procedural |
| 1958 | [Lisp](https://goo.gl/ZbUXeg) | funcional |
| 1965 | [Simula](https://en.wikipedia.org/wiki/Simula) | orientado a objetos |
| 1972 | [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk) | orientado a objetos |
| 1972 | [Prolog](https://en.wikipedia.org/wiki/Prolog) | lógico |
| 1972 | [C](https://goo.gl/4bnEHY) | imperativo, procedural, estructurado |
| 1975 | [Scheme](https://goo.gl/x2WMht) | funcional
| 1983 | [C++](https://en.wikipedia.org/wiki/C%2B%2B) | imperativo, procedural, estructurado, orientado a objetos |
| 1987 | [Perl](https://en.wikipedia.org/wiki/Perl) | imperativo, procedural, funcional, orientado a objetos, orientado a eventos
| 1991 | [Python](https://goo.gl/bJ9Wcg) | imperativo, procedural, funcional, orientado a objetos
| 1995 | [Ruby](https://goo.gl/PhfLjJ) | imperativo, funcional, orientado a objetos
| 1995 | [Java](https://goo.gl/aWjoSR) | imperativo, orientado a objetos
| 1995 | [PHP](https://en.wikipedia.org/wiki/PHP) | imperativo, procedural, orientado a objetos
| 1995 | [JavaScript](https://en.wikipedia.org/wiki/JavaScript) | imperativo, funcional, orientado a objetos, orientado a eventos

### Declarativo vs Imperativo

`video: 4min`

Hemos mencionado que los primeros lenguajes de programación eran imperativos, y
que se centraban en el "cómo" más que en el "qué". Como contrapartida, el estilo
declarativo se caracteriza por lo contrario, enfocarse más en "qué" queremos
hacer, desde el punto de vista de un ser humano, en vez de cómo lo debe ejecutar
la computadora. Por ende, cuanto más declarativo, más alejado del hardware.

Algunos paradigmas son más imperativos y otros más declarativos. Por ejemplo,
la programación orientada a procedimientos, o la programación orientada objetos,
van a tener un caracter imperativo, mientras que la programación funcional tiene
un caracter mucho más declarativo.

Imáginemos que tenemos la siguiente data en un array de objetos:

```js
var array = [
  {id: 'uno', name: 'el primero'},
  {id: 'dos', name: 'el segundo'},
  {name: 'no tengo id'}
];
```

A partir de esta data, ahora nos piden extraer los `id` de cada un de los
objetos y amacenarlos en un nuevo arreglo (`names`). Si nos planteamos el
problema desde un enfoque imperativo, podríamos implementar una solución así:

```js
const names = [];

for (var i = 0; i < array.length; i++) {
  if (array[i].id) {
    names.push(array[i].id);
  }
}

console.log(names); // ['uno', 'dos']
```

En el código anterior, probablemente puedas identificar claramente el estilo
imperativo. Las variables como "contadores" y "acumuladores", son típicos del
estilo imperativo. En este estilo el principal mecanismo de cómputo se lleva a
cabo a través de la asignación de valores en variables. Veremos así uso de
variables globales y mutación de los valores asignados a variables a través del
tiempo.

JavaScript nos ofrece utilidades para afrontar este tipo problemas desde el
enfoque funcional. Así, los arrays (gracias a `Array.prototype`) tienen una
serie de métodos para manipular su data a través de "higher order functions",
que en este caso son funciones que aceptan otra función como argumento, como por
ejemplo `Array.prototype.filter` o `Array.prototype.map`. Veamos cómo podemos
usar estas herramientas para implementar la misma lógica:

```js
const names = array
  .filter(item => typeof item.id === 'string')
  .map(item => item.id);

console.log(names); // ['uno', 'dos']
```

En esta nueva versión hacemos lo siguiente:

1. Usamos `Array#filter` para crear un nuevo arreglo sólo con aquellos elementos
   que tengan un `id` que sea un string (`typeof item.id === 'string'`).
2. Usamos `Array#map` para transformar cada elemento del arreglo y crear un
   nuevo arreglo con los resultados.

De esta forma los detalles de la iteración quedan escondidos detrás de
`Array#filter` y `Array#map`, haciendo nuestro código más declarativo.

También podemos ver cómo "encadenamos" (method chaining) las invocaciones de
`filter` y `map` ya que ambas retornan un array, que a su vez tiene todos los
métodos de `Array.prototype`.

El estilo declarativo depende de que el lenguaje (o librerías) nos ofrezcan este
tipo de herramientas o abstracciones con las que poder expresar nuestra lógica
sin preocuparnos tanto sobre los detalles de implementación.

Para terminar esta sección, cabe mencionar que HTML es un lenguaje declarativo!
Muchos se quejarían diciendo que HTML no es un lenguaje de programación, sino un
lenguaje de marcado (_markup language_). Pero podemos considerear a HTML como un
lenguaje declarativo muy restringido, no de uso general, donde sólo podemos
crear un árbol de nodos a partir de una estructura de etiquetas (_tags_) con una
sintáxis y semántica predefinida. Es declarativo en el sentido de que no le
estamos diciendo a la computadora cómo convertir nuestro código en
instrucciones, sino que describimos de formal declarativa lo que queremos que
ocurra (el compilador o intérprete se encarga del resto).

### Ejercicio paradigma imperativo

`code: 5min`

Hacer fork de repo...

En el terminal, escribe `paradigms` y después [Enter] para abrir la aplicación
en la que haremos los ejercicios.

### Programación por procedimientos

`video: 5min`

La programación por procedimientos (_procedural programming_) pertenece a la
rama del estilo _imperativo_. Antes mencionamos que a finales de los años 50
Fortran II introduce la programación por procedimientos, y de esa forma
empezamos a "organizar", "abstraer" y "reusar" nuestro código.

Cuando programamos orientados a procedimientos, lo cual puede ser un enfoque
válido para ciertos programas o scripts, nos concentramos en agrupar código
en procedimientos o funciones, e invocar estos procedimientos con diferentes
argumentos o parámetros. En este sentido es parecido a la programación
funcional, pero con la diferencia de que nos mantenemos en la rama imperativa,
describiendo acciones como pasos secuenciales, que podrían tener efectos
secundarios y donde el output no está necesariamente deterinado por los
argumentos de entrada. Mientras que la programación funcional es más abstracta,
se basa en funciones puras sin efectos secundarios, evitar el estado compartido,
y otros principios específicos de la programación funcional.

Refactoricemos el ejemplo anterior donde sacábamos la propiedad `id` de una
lista de objetos. Empecemos por envolver el código en una función:

```js
function getIds(inputArray) {
  const names = [];

  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].id) {
      names.push(inputArray[i].id);
    }
  }

  return names;
}

console.log(getIds(array)); // ['uno', 'dos']
```

Este cambio parece menor, pero añade una capa de abstracción que nos da un
montón de flexibilidad. Ahora nuestro código está _encapsulado_ dentro de su
propio _scope_ y podemos reusar la lógica para otros arrays (podemos invocar la
función cuantas veces queramos).

Pero vayamos un paso más allá. Ahora que estamos ordenando nuestro código usando
funciones, aprovechemos a abstraer y mejorar la comprobación que hacíamos para
saber si un objeto tiene una propiedad `id`.

```js
function hasId(obj) {
  return obj && typeof obj.id === 'string';
}

function getIds(inputArray) {
  const names = [];

  for (var i = 0; i < inputArray.length; i++) {
    if (hasId(inputArray[i])) {
      names.push(inputArray[i].id);
    }
  }

  return names;
}

console.log(getIds(array)); // ['uno', 'dos']
console.log(hasId()); // false
console.log(hasId({name: 'foo'})); // false
console.log(hasId({id: 'uno'})); // true
```

En esta nueva versión hemos partido el código en dos funciones, y al hacerlo
hemos tenido que dar nombres a estas funciones. Estos nombres representan de
alguna forma esa capa de abstracción. Ahora podemos hablar de `hasId()`
cuando queremos referirnos a ese pedacito de lógica. Así, poco a poco vamos
creando una semántica que nos permite alejarnos de los detalles de
implementación.

Una de las consecuencias de estos cambios es el concepto de "modularidad". Esto
va a permitir que empecemos a escribir programas estructurados en módulos
independientes, que son más fáciles de entender, testear, mantener, ...

En JavaScript existen varios sistemas de módulos, principalmente **AMD**,
**Common JS** y **ES2015/ES6**. Para este ejemplo vamos a concentrarnos en
**Common JS**, que es el que usa **Node.js**, y que también podemos usar en el
navegador gracias a los _bundlers_. En nuestro ejemplo, ahora que nuestro código
vive dentro de una función, podríamos _exportar_ la función, lo que nos
permitiría usar esta función desde otros scripts u otros programas. Esto es
esencial para casi cuaquier programa o script hoy en día, con consecuencias que
damos por sentado como poder organizar nuestro código en archivos y carpetas
diferentes o tener dependecias de módulos externos.


Para exportar nuestra función `getIds` usando Common JS en Node.js, podemos
simplemente asignar nuestra función a `module.exports`.

```js
// al final del script
module.exports = getIds;
```

El objeto `module` es una variable local a cada script en Common JS. Si
asignamos algo a `module.exports`, éste será el valor que recibiremos cuando
requiramos nuestro "módulo". Por ejemplo, imaginemos que salvamos el script en
el archivo `src/getIds.js`, y ahora lo queremos usar desde otro script afuera de
`src/`:

```js
const getIds = require('./src/getIds');
// `getIds` tiene el valor que hemos exportado a través de `module.exports`
// en el script `src/getIds.js`
```

Common JS también nos ofrece la opción de exportar los valores que queramos
como propiedades del objeto `exports` (que es un alias de `module.exports`). Así
en vez de exportar sólo un valor (la función `getids`), podemos exporar varios
valores.

```js
exports.getIds = getIds;
exports.hasId = hasId;
```

Ahora cuando requerimos nuestro módulo desde otro script lo que recibimos es
un objeto (el objeto `exports`), que tiene dos propiedades, `getIds` y `hasId`.

```js
const myModule = require('./src/myModule');
// myModule.getIds()
// myModule.hasId()
```

### Ejercicio paradigma por procedimientos

`code: 8min`

En el terminal, escribe `paradigms` y después [Enter] para abrir la aplicación
en la que haremos los ejercicios.

### OOP

`video: 5min`

La **Programación Orientada a Objetos** (_Object Oriented Programming_ - OOP)
representa un cambio de paradigma bastante grande con respecto al paradigma por
procedimientos que acabamos de ver. Cuando programamos por procedimientos nos
concentramos en funciones, que representan acciones, y así nuestra semántica
está orientada a acciones antes que a estructuras de datos.

En la programación orientada a objetos le damos la vuelta a la tortilla, y en
vez de pensar en acciones nos enfocamos en definir los "tipos" de datos primero,
y después decidimos que interacciones van a tener. En OOP diseñamos objetos, que
van a tener una data (un estado) y una serie de operaciones que pueden realizar.

A la hora de construir aplicaciones nos vemos obligados a pensar en cómo
"modelar" o representar en código cosas del mundo real o conceptos útiles para
un ser humano (un usuario, un documento, ...) y la programación orientada a
objetos propone crear tipos de objetos para representar estas cosas.

Imaginemos que tenemos que escribir una aplicación de "notas" donde el usuario
puede crear diferentes tipos de "notas", marcarlas como completadas, ... Si
vamos a seguir el estilo orientado a objetos, normalmente empezaríamos por
modelar el "tipo de objeto" que con el que vamos a representar una "nota".
Podríamos empezar con algo así:

```js
function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}
```

Hemos declarado una función (`Note`) que hace uso de una _pseudo variable_
llamada `this`. La presencia de `this`, junto con la convención de usar la
primera letra en mayúscula, nos indican que esta función está escrita
para ser invocada con el _keyword_ `new`. Este tipo de función es lo que
conocemos como un _constructor_. Los constructores son funciones cuyo propósito
es crear un objeto, inicializarlo y ofrecernos una manera de especificar el
prototipo que tendrán los objetos creados con este constructor. Dicho de otra
manera, menos correcta pero más común, los constructores son lo más parecido a
clases en JavaScript (por lo menos hasta ES6).

JavaScript es un lenguaje dinámicamente tipado (_dynamically typed_), pero a
diferencia de la mayoría de lenguajes de su generación, usa herencia prototipal
en vez de clases, lo cual suele confundir a muchos programadores con experiencia
en otros lenguajes orientados a objetos.

Cuando invocamos un constructor precedido de `new`, la pseudo-variable `this` es
una referencia al nuevo objeto creado al invocar el constructor. Creemos un
objeto para ver que significa todo esto:

```js
const note = new Note('comprar arroz');
console.log(note);
```

En la consola deberías de ver algo así:

```
Note {
  text: 'comprar arroz',
  createdAt: 2017-06-14T22:39:51.987Z,
  completed: false }
```

Podemos ver que `note` es un objeto con tres propiedades (`text`, `createdAt` y
`completed`). Estas tres propiedades están declaradas directamente sobre la
instancia.

Cuando usamos constructores, es importante acordarnos de usar `new` a la hora de
invocarlos, si no, el constructor retornará `undefined`.

```js
const note = Note('comprar arroz');
console.log(note); // undefined
```

Hemos dicho que una de las características fundamentales de OOP es que empezamos
por definir los tipos de datos (ya sea con clases, constructores, prototipos,
...), lo cual nos permite inspeccionar los objetos creados para saber si son
una instacia de un constructor (con el operador `instanceof`) o comprobar si un
objeto está en la cadena de prototipos de otro objeto
(`Object.prototype.isPrototypeOf`).

```js
console.log(note instanceof Note); // true
console.log(Note.prototype.isPrototypeOf(note)); // true
```

Ahora que ya hemos definido un constructor que inicializa una serie de
propiedades, podemos usar el prototipo del constructor (`Note.prototype`) para
añadir funcionalidad. Todo lo que le añadamos a `Note.prototype` será parte del
prototipo de los objetos creados por `new Note()`. Añadamos un método al
prototipo de `Note`:

```js
Note.prototype.toString = function () {
  let str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};
```

Hemos añadido el método `Note.prototype.toString`, que simplemente retorna una
representación de nuestro objeto como string. Ahora todos los objetos que
creemos con `new Note()` deberían de "heredar" un método `toString`. Si hacemos
`console.log(note)` veremos las tres propiedades que seteamos en el constructor,
pero qué pasó con el método `toString` que le habíamos  añadimo al prototipo de
`Note`?

Inspeccionemos un poco...

```js
console.log(note.prototype); // undefined
console.log(note.__proto__); // Note { toString: [Function] }
console.log(note.toString); // [Function]
```

El objeto `note` sí tiene el método `toString`, pero no directamente sobre la
instancia, si no que está en su prototipo. Cuando tratamos de acceder a una
propiedad que no existe en un objeto, JavaScript va a buscar a ver si hay una
propiedad con ese nombre en el prototipo del objeto, si la encuentra usará esa,
si no buscará en el prototipo del prototipo, y así irá recorriendo lo que
conocemos como la cadena de prototipos (prototype chain).

En la programación orientada a objetos el principal mecanismo de reuso de código
es la "herencia", donde un objeto "hereda" una serie de propiedades y métodos
de otro objeto o clase (en herencia prototipal heredamos directamente de un
objeto en vez de una clase).

En la próxima lección de este curso exploraremos los detalles de cómo
implementar jerarquías de herencia usando prototipos. Por el momento nos
quedamos con estos conceptos.

### Ejercicio OOP

`code: 10min`

En el terminal, escribe `paradigms` y después [Enter] para abrir la aplicación
en la que haremos los ejercicios.

### FP

`video: 5min`

Mecanismo principal de cómputo es aplicar argumentos a funciones.

```js
const noteToString = note => [
  '[' + (note.completed ? 'X' : ' ') + ']',
  ' | ' + note.createdAt.toDateString(),
  ' | ' + note.text
].join('');

console.log(noteToString({text: 'hola', createdAt: new Date()}));
```

### Ejercicio FP

`code: 10min`

En el terminal, escribe `paradigms` y después [Enter] para abrir la aplicación
en la que haremos los ejercicios.

***

### Referencias

Blog posts:

* [Six programming paradigms that will change how you think about coding](http://www.ybrikman.com/writing/2014/04/09/six-programming-paradigms-that-will/),
  Yevgeniy Brikman, Apr 09 2014
* [Introducción a programación funcional en JavaScript — Parte 1](https://medium.com/laboratoria-how-to/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-1-e0b1d0b2142e),
  Lupo Montero en Medium, Feb 15 2017

Videos:

* [Programming Paradigms](https://www.youtube.com/watch?v=sqV3pL5x8PI),
  `10:43`, [Computerphile](https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA),
  30 Aug 2013
* [HTML IS a Programming Language (Imperative vs Declarative)](https://www.youtube.com/watch?v=4A2mWqLUpzw),
  `8:27`, [Computerphile](https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA),
  Jun 28 2016
* [Qué es un paradigma de programación](https://www.video2brain.com/mx/tutorial/que-es-un-paradigma-de-programacion),
  `5:15`, José Dimas Luján Castillo, [video2brain](https://www.video2brain.com/),
  8 Mar 2017

Otros recursos:

* [Definición de Programming_paradigm en Wikipedia](https://en.wikipedia.org/wiki/Programming_paradigm)
* [Comparativa de paradigmas de programación en Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms)
* [History of programming languages](https://en.wikipedia.org/wiki/History_of_programming_languages)
* [Declarative programming](https://en.wikipedia.org/wiki/Declarative_programming)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
* https://css-tricks.com/understanding-javascript-constructors/
