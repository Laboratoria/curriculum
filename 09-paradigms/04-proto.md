# 09. Paradigmas de programación

## Lección 04: OOP y herencia prototipal

* Formato: `video/code` (self-paced)
* Duración: `1h`

En esta lección aprenderás a implementar herencia prototipal en JavaScript.

### Objetivos de la lección

* Entender el concepto de "prototipo"
* Aprender a implementar herencia prototipal

### Requisitos

* Es fundamental tener instalado y configurado `git` y `npm`
* Cuenta en [GitHub](https://github.com/)
* Instalar `planetproto` con el siguiente comando: `npm install -g planetproto`

***

### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | script     |   10min  | Object.create
|   2   | script     |   10min  | Herencia prototipal
|   4   | code       |   40min  | Ejercicios [planetproto](https://github.com/sporto/planetproto)

***

### Object.create()

`video: 10min`

En JavaScript todo objeto tiene un "prototipo", aunque no lo especifiquemos.
Cuando creamos un objeto literal, el prototipo del objeto por defecto es
`Object.prototype`.

```js
// objetos literales tienen `Object.prototype` como prototipo
console.log(Object.prototype.isPrototypeOf({})); // true
console.log({} instanceof Object); // true
```

En la lección anterior vimos como podemos usar _constructores_ para crear
objetos con un prototipo determinado.

```js
// cuando usamos un constructor los objetos nuevos tendrán como prototipo la
// propiedad `prototype` del constructor.
function Robot(name) {
  this.name = name;
}

Robot.prototype.say = function () {
  console.log('Hi! I\'m ' + this.name + '!');
};

const ada = new Robot('ada');
ada.say(); // Hi! I'm ada!

console.log(ada instanceof Robot); // true
console.log(Robot.prototype.isPrototypeOf(ada)); // true
```

Los constructores son comunes porque se parecen a las "clases" que hay en otros
lenguajes, pero no son la única manera de crear objetos con un prototipo
determinado. Hay una manera más simple:
[`Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create).

```js
// otra manera de asignar el prototipo: `Object.create()`
const robot = {
  say: function () {
    console.log('Hi! I\'m ' + this.name + '!');
  }
};

const johnny = Object.create(robot);
johnny.name = 'johnny';
johnny.say(); // Hi! I'm johnny!

const betty = Object.create(robot);
betty.name = 'betty';
betty.say(); // Hi! I'm betty!

console.log(robot.isPrototypeOf(johnny)); // true
console.log(robot.isPrototypeOf(betty)); // true
```

JavaScript implementa "herencia" a través de prototipos, lo que quiere decir que
no heredamos de una clase, sino de un objeto. Así que podemos concentrarnos en
los prototipos sin necesidad de un constructor, `new` y `Function#prototype`.
Como ejemplo, podríamos refactorizar el constructor anterior en una función que
explícitamente crea un nuevo objeto usando `Object.create()` y le asigna la
propiedad `name`.

```js
function createRobot(name) {
  const obj = Object.create(robot);
  obj.name = name;
  return obj;
}
```

Por ahora hemos invocado `Object.create()` con un solo argumento: el prototipo
que queremos que tenga el nuevo objeto. Pero `Object.create()` nos ofrece la
posibilidad de pasar un segundo argumento: un objeto cuyas propiedades serán
agregadas al objeto recien creado, con los nombres de propiedad correspondiente.
Estas propiedades corresponden al segundo argumento de
[`Object.defineProperties`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties).

```js
function createRobot(name) {
  return Object.create(robot, {
    name: {
      value: name,
      enumerable: true
    }
  });
}

const grace = createRobot('grace');
grace.say(); // Hi! I'm grace!
console.log(grace); // { name: 'grace' }
```

### Herencia prototipal

`video: 10min`

Hasta ahora nos hemos concetrado en el concepto de prototipo y cómo crear
objetos con un prototipo determinado. También hemos mencionado el concepto
de _cadena de prototipos_ y cómo JavaScript "resuleve" (busca) las propiedades
de un objeto empezando por aquellas definidas directamente sobre la instacia,
después el prototipo, de ahí el prototipo del prototipo y así sucesivamente.

También hemos hablado de cómo el concepto de "herencia" y las "jerarquías de
herencia" son fundamentales en la programación orientada a objetos. Ahora es la
hora de ver cómo usamos lo que hemos aprendido de prototipos y `Object.create`
para implementar una jerarquía de herencia, dónde un objeto hereda de un objeto
que a su vez hereda de otro.

Para heredar de un objeto existente, podemos crear un nuevo constructor y
a su prototipo asignarle un objeto que tenga como prototipo el prototipo del
constructor que queremos "extender". Para crear ese objeto que podamos usar como
prototipo del nuevo constructor vamos a usar `Object.create()`, que nos permite
crear un nuevo objeto especificando su prototipo.

Implementemos un nuevo tipo de nota que herede de `Note`.

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

Hemos creado un constructor `ImageNote`, y antes de fijarnos en el cuerpo del
constructor veamos primero el mecanismo de herencia. A `ImageNote.prototype` le
asignamos un objeto nuevo que tiene `Note.prototype` como prototipo usando
`Object.create()`.

Ahora instanciemos nuestro objeto y veamos como se comporta:

```js
const imageNote = new ImageNote('http://foo.bar/baz.jpg');

console.log(imageNote);
console.log(imageNote.toString());

console.log(note instanceof ImageNote); // false
console.log(imageNote instanceof Note); // true
console.log(imageNote instanceof ImageNote); // true

console.log(Note.prototype.isPrototypeOf(imageNote)); // true
console.log(ImageNote.prototype.isPrototypeOf(note)); // false
console.log(ImageNote.prototype.isPrototypeOf(imageNote)); // true
```

***

### Referencias

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

* [Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming)
* [MDN - instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
* [MDN - Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
* [MDN - Object.defineProperties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
