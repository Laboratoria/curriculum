---
type: read
duration: 12min
---

# Herencia prototipal

[![Paradigmas - Proto: herencia](https://embedwistia-a.akamaihd.net/deliveries/14abe4ad4d31440501e622abd03b433d842aed94.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/6p1jbpi4qk?wvideo=6p1jbpi4qk)

Hasta ahora nos hemos concetrado en el concepto de prototipo y cómo crear
objetos con un prototipo determinado. También hemos mencionado el concepto
de _cadena de prototipos_ y cómo JavaScript "resuleve" (busca) las propiedades
de un objeto empezando por aquellas definidas directamente sobre la instacia,
después el prototipo, de ahí el prototipo del prototipo y así sucesivamente.

También hemos hablado de cómo el concepto de "herencia" y las "jerarquías de
herencia" son fundamentales en la programación orientada a objetos. Ahora es la
hora de ver cómo usamos lo que hemos aprendido de prototipos y `Object.create`
para implementar una jerarquía de herencia, donde un objeto hereda de otro
objeto que a su vez hereda de otro.

Para heredar de un objeto existente, podemos crear un nuevo constructor y
a su prototipo asignarle un objeto que tenga como prototipo el prototipo del
constructor que queremos "extender". Para crear ese objeto que podamos usar como
prototipo del nuevo constructor vamos a usar `Object.create()`, que nos permite
crear un nuevo objeto especificando su prototipo.

Continuando con el ejemplo de la lección anterior, implementemos un nuevo tipo
de nota que herede de `Note`.

```js
//
// Note (constructor base que vamos a extender, copiado de la lección anterior)
//
function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

Note.prototype.toString = function () {
  let str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};

//
// ImageNote (constructor que hereda de Note)
//
function ImageNote(url) {
  this.url = url;
}

// Heredamos de `Note.prototype`
ImageNote.prototype = Object.create(Note.prototype);

console.log(new ImageNote('http://foo.com/bar.png'));
// Note { url: 'http://foo.com/bar.png' }
```

Hemos creado un constructor `ImageNote`, y antes de fijarnos en el cuerpo del
constructor veamos primero el mecanismo de herencia. A `ImageNote.prototype` le
asignamos un objeto nuevo que tiene `Note.prototype` como prototipo usando
`Object.create()`.

Nuestra implementación de `ImageNote` todavía está incompleta, pero ya podemos
ver cómo hemos preparado el escenario para que herede de `Note.prototype`. En el
caso de `Note`, habíamos asignado propiedades a `Note.prototype`, pero no
habíamos asignado el objeto `Note.prototype` en sí. Ahora en `ImageNote` hacemos
algo muy distinto: usamos `Object.create()` para crear un nuevo objeto que tenga
como prototipo `Note.prototype`, y éste nuevo objeto lo asignamos a
`ImageNote.prototype`. Lo que estamos haciendo es construir una cadena de
prototipos. Los objetos creados con `new ImageNote()` tendrán como prototipo un
objeto que a su vez tiene `Note.prototype` como prototipo. Esto puede sonar
bastante confuso al principio. Tómate tu tiempo para entender lo que está
pasando.

Hemos dicho que nuestra implementación no está completa. Si nos fijamos en el
constructor `Note` vemos que inicializa el nuevo objeto con tres propiedades:
`text`, `createdAt` y `completed`. Podríamos "duplicar" la lógica dentro del
constructor `ImageNote`, pero si estamos usando herencia, es precisamente para
poder reusar código y evitar repetición!

Antes hemos visto como podemos usar `bind` para definir de forma explícita el
valor de `this`. Ahora veamos cómo otro método de las funciones nos permite
"invocar" una función asignando `this` a lo que queramos.

```js
function ImageNote(url) {
  this.url = url;
  Note.call(this, 'an image note');
}

// Heredamos de `Note.prototype`
ImageNote.prototype = Object.create(Note.prototype);

console.log(new ImageNote('http://foo.com/bar.png'));
```

En la consola deberías ver algo así:

```text
Note {
  url: 'http://foo.com/bar.png',
  text: 'an image note',
  createdAt: 2017-06-22T15:05:21.013Z,
  completed: false }
```

Dentro de nuestro constructor `ImageNote` hemos añadido una invocación al
constructor `Note`. De esa forma podemos reusar la lógica del constructor
`Note`, y para asegurarnos de que `Note` opera sobre el `this` de la nueva nota
creada con `ImageNote` usamos `call()`. `Function.prototype.call` es muy
parecida a `Function.prototype.bind`, pero en vez de retornar una función con
el contexto fijado, lo que hace es invocar la función con el contexto deseado.

También podemos ver, al hacer `console.log`, que el objeto aparece como de
"tipo" `Note` y no `ImageNote`. Eso es porque el prototipo de una función guarda
una referencia a su constructor en una propiedad llamada `constructor`. Al
reemplazar el prototipo de `ImageNote` con el objeto creado con `Object.create`,
la propiedad `constructor` ahora resuleve al constructor de `Note`. Podemos
corregir esto explícitamente asignando `ImageNote.prototype.constructor`:

```js
function ImageNote(url) {
  this.url = url;
  Note.call(this, 'an image note');
}

// Heredamos de `Note.prototype`
ImageNote.prototype = Object.create(Note.prototype);
// Asignamos constructor al nuevo prototipo
ImageNote.prototype.constructor = ImageNote;

console.log(new ImageNote('http://foo.com/bar.png'));
```

En la consola deberías ver algo así:

```text
ImageNote {
  url: 'http://foo.com/bar.png',
  text: 'an image note',
  createdAt: 2017-06-22T15:12:40.163Z,
  completed: false }
```

Yay! Ya tenemos un constructor que hereda de `Note`! Ahora vamos a modificar la
funcionalidad del método `Note#toString` para que se adapte a `ImageNote` y nos
muestre la url de la imagen:

```js
function ImageNote(url) {
  this.url = url;
  Note.call(this, 'an image note');
}

// Heredamos de `Note.prototype`
ImageNote.prototype = Object.create(Note.prototype);
ImageNote.prototype.constructor = ImageNote;

// Sobreescribimos el método `toString` para instancias de `ImageNote`
ImageNote.prototype.toString = function () {
  return Note.prototype.toString.call(this) + ' | ' + this.url;
};
```

Hemos declarado un nuevo método `toString` sobre el prototipo de `ImageNote`, y
en la implementación de ese método estamos reusando `Note.prototype.toString`,
haciendo uso de `Function#call` otra vez ;-)

Ahora instanciemos nuestro objeto y veamos como se comporta:

```js
const imageNote = new ImageNote('http://foo.bar/baz.jpg');

console.log(imageNote);
console.log(imageNote.toString());
// [ ] | Thu Jun 22 2017 | an image note | http://foo.bar/baz.jpg

console.log(note instanceof ImageNote); // false
console.log(imageNote instanceof Note); // true
console.log(imageNote instanceof ImageNote); // true

console.log(Note.prototype.isPrototypeOf(imageNote)); // true
console.log(ImageNote.prototype.isPrototypeOf(note)); // false
console.log(ImageNote.prototype.isPrototypeOf(imageNote)); // true
```

***

## Referencias

Capítulos de libros:

* [Eloquent JavaScript - Chapter 6: The Secret Life of Objects](http://eloquentjavascript.net/06_object.html)

Blog posts:

* [Understanding JavaScript Constructors](https://css-tricks.com/understanding-javascript-constructors/),
  Faraz Kelhini, CSS Tricks, Sep 24 2015

Videos:

* [Prototypal Inheritance](https://frontendmasters.com/courses/javascript-jquery-dom/prototypal-inheritance/),
  `8:52`, Justin Meyer, [Frontend Masters](https://frontendmasters.com/)
* Playlist: [Object Creation in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub),
  `aprox. 3h`, [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q),
  2016
* [Prototypes in JavaScript - FunFunFunction #16](https://www.youtube.com/watch?v=riDVvXZ_Kb4),
  `11:55`, [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q),
  25 Jan 2016
* [Prototype basics - Object Creation in JavaScript P3 - FunFunFunction #46](https://www.youtube.com/watch?v=YkoelSTUy7A),
  `19:19`, [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q),
  22 ago. 2016

Otros recursos:

* [MDN - instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
* [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [MDN - Function.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [MDN - Function.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
* [MDN - Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
* [MDN - Object.defineProperties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
