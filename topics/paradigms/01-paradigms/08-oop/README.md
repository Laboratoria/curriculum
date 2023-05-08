---
type: read
duration: 15min
---

# OOP

[![Paradigmas - Programación Orientada a Objetos (OOP)](https://embedwistia-a.akamaihd.net/deliveries/38e39ef424004f87bb6766c6e2da5f510d88e0d2.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/8id6wdxrdn?wvideo=8id6wdxrdn)

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

```text
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

En la próxima unidad de este curso exploraremos los detalles de cómo implementar
jerarquías de herencia usando prototipos. Por el momento nos quedamos con estos
conceptos.

Ahora que hemos visto qué es la programación orientada a objetos en el contexto
de JavaScript, concluyamos con una lista de características que definen a OOP de
forma más general, por el propio Alan Kay, creador del término OOP y Smalltalk:

> Traducido al español:
>
> * Todo es un objeto
> * Los objetos se comunican enviando y recibiendo mensajes (en términos de objetos)
> * Los objetos deben tener su propia memoria (en términos de objetos)
> * Todo objeto es una instancia de una clase (que debe ser un objeto)
> * La clase tiene el comportamiento compartido para las instancias (como objetos
>   en un programa)
> * Para evaluar un programa, se pasa el control al primer objeto y el resto se
>   trata como su mensaje.
>
> Original en inglés:
>
> * Everything Is An Object
> * Objects communicate by sending and receiving messages (in terms of objects).
> * Objects have their own memory (in terms of objects).
> * Every object is an instance of a class (which must be an object).
> * The class holds the shared behavior for its instances (in the form of objects
>   in a program list)
> * To eval a program list, control is passed to the first object and the
>   remainder is treated as its message.
>
> Fuente [Alan Kays Definition Of Object Oriented](http://wiki.c2.com/?AlanKaysDefinitionOfObjectOriented)

***

## Referencias

Blog posts:

* [Understanding JavaScript Constructors](https://css-tricks.com/understanding-javascript-constructors/),
  Faraz Kelhini, CSS Tricks, Sep 24 2015

Otros recursos:

* [Alan Kays Definition Of Object Oriented](http://wiki.c2.com/?AlanKaysDefinitionOfObjectOriented)
* [Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming)
* [MDN - instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
