# 09. Paradigmas de programación

## Lección 04: OOP y herencia prototipal

* Formato: `video/code` (self-paced)
* Duración: `1h`

En esta lección aprenderás a implementar herencia prototipal en JavaScript.

### Objetivos de la lección

* Entender `this`
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
|   1   | script     |    6min  | `this` y `bind`
|   1   | script     |    6min  | `Object.create`
|   2   | script     |    6min  | Herencia prototipal
|   4   | code       |   40min  | Ejercicios [planetproto](https://github.com/sporto/planetproto)

***

### `this` y `bind`

`video: 6min`

Entender el concepto de `this` es fundamental para entender el modelo de
objetos de JavaScript.

`this` es una pseudo-variable que existe dentro de las funciones. `this`
("esto") no significa nada por sí mismo, sino que depende del "contexto". El
valor de `this` debe ser "inferido" del contexto donde aparece, y por eso puede
ser motivo de confusión.

```js
function talk() {
  console.log(this.sound); // qué valor tiene `this`?
}
```

Si invocamos la función `talk` veremos que imprime `undefined`. Pero qué es
`this`? Inspeccionemos un poco...

```js
function talk() {
  console.log(this); // el objeto global!!
}

talk();
```

Cuando ejecutámos nustro código ahora veremos algo así:

```
{ console: [Getter],
  DTRACE_NET_SERVER_CONNECTION: [Function],
  DTRACE_NET_STREAM_END: [Function],
  DTRACE_HTTP_SERVER_REQUEST: [Function],
  DTRACE_HTTP_SERVER_RESPONSE: [Function],
  DTRACE_HTTP_CLIENT_REQUEST: [Function],
  DTRACE_HTTP_CLIENT_RESPONSE: [Function],
  global: [Circular],
  process:
   process {
     title: 'node',
     version: 'v8.1.2',
     moduleLoadList:
      [ 'Binding contextify',
      ...
```

Qué es todo esto? De dónde salió? Cuando no se puede inferir el valor de `this`,
éste toma el valor del objeto global; `process` en Node.js o `window` en el
navegador.

En la lección anterior vimos cómo `this` tomaba un valor especial en caso de los
constructores. En ese contexto `this` hace referencia al nuevo objeto que crea
el constructor.

Pero hay otra manera más explícita de asignarle un valor a `this`:
`Function#bind`. Todas las funciones en JavaScript son objetos que heredan de
`Function.prototype`, y así heredan el método `bind()`, que nos permite crear
una copia de la función, pero con `this`, el "contexto", asignado
explícitamente a un valor.

"Bind" literalmente significa "ligar", "unir a" o "vincular con". Veamos un
ejemplo:

```js
const cat = { sound: 'meeow!' };
const boundToCat = talk.bind(cat);
boundToCat(); // meeow!
```

En este ejemplo `boundToCat` es una copia de `talk`, pero con su pseudo-variable
`this` asignada a `cat`. Por lo tanto, ahora siempre que invocamos `boundToCat`
el contexto está claro y no cambia dependiendo del contexto de invocación.

Pero qué pasaría si asignamos nuestra función `talk` a una propiedad de un
objeto?

```js
const cat = {
  talk: talk,
  sound: 'meeow!'
};

cat.talk(); // meeow!
talk(); // undefined
```

`talk` y `cat.talk` hacen referencia a exactamente la misma función, pero se
comportan de manera distinta por el contexto. Al asignar `talk` a una propiedad
de `cat`, ahora cuando invocamos `cat.talk()` JavaScript automáticamente infiere
que el contexto es `cat`. Nótese que la función `talk` no ha cambiado, sólo ha
cabiado el hecho de que ahora la estamos invocando como un método de un objeto.

Qué pasaría si ahora asignamos ese método a una variable?

```js
const balbucea = cat.talk
balbucea(); // undefined
```

Tanto `cat.talk` como `balbucea` hacen referencia a la misma función `talk`,
pero podemos ver claramente que se comportan de maneras distintas dependiendo
del contexto.

Veamos como `bind` nos puede ayudar a "aclarar" el contexto de una función y así
poder asegurar el valor de `this`:

```js
const cat = {
  sound: 'meeow!'
};

cat.talk = talk.bind(cat);

cat.talk(); // meeow!
talk(); // undefined

const catTalk = cat.talk;
catTalk(); // meeow!
```

Para terminar esta sección, veamos un último ejemplo confuso y enrevesado:

```js
function talk() {
  console.log(this.sound); // qué valor tiene `this`?
}

const cat = {
  talk: talk,
  sound: 'meeow!'
};

const dog = {
  talk: cat.talk,
  sound: 'woof!'
};

dog.talk(); // woof!

```

### Object.create()

`video: 6min`

En JavaScript todo objeto tiene un "prototipo", aunque no lo especifiquemos.
Cuando creamos un objeto literal, el prototipo del objeto por defecto es
`Object.prototype`.

```js
console.log(Object.prototype.isPrototypeOf({})); // true
console.log({} instanceof Object); // true
```

En la lección anterior vimos como podemos usar _constructores_ para crear
objetos con un prototipo determinado. Cuando usamos un constructor los objetos
nuevos tendrán como prototipo la propiedad `prototype` del constructor.

```js
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
determinado. Hay una manera más simple y más natural para el modelo prototipal:
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

A diferencia de los constructores, cuando usamos directamente `Object.create` no
tenemos dónde escribir lógica de inicialización. Para solventar esto podríamos
refactorizar el constructor anterior en una función que explícitamente crea un
nuevo objeto usando `Object.create()` y le asigna la propiedad `name`.

```js
function createRobot(name) {
  const obj = Object.create(robot);
  obj.name = name;
  return obj;
}
```

Como alternativa, una convención común cuando necesitamos lógica de constructor
es añadir un método `init` que se encargue de inicializar el objeto:

```js
const robot = {
  init: function (name) {
    this.name = name;
  },
  say: function () {
    console.log('Hi! I\'m ' + this.name + '!');
  }
};
```

***

PRO TIP:

Si nuestro métodod `init` retorna una referencia a `this`, podemos encadenar las
invocaciones:

```js
const robot = {
  init: function (name) {
    this.name = name;
    return this;
  },
  say: function () {
    console.log('Hi! I\'m ' + this.name + '!');
  }
};

const johnny = Object.create(robot).init('johnny');
```

***

Por ahora hemos invocado `Object.create()` con un solo argumento: el prototipo
que queremos que tenga el nuevo objeto. Pero `Object.create()` nos ofrece la
posibilidad de pasar un segundo argumento: un objeto cuyas propiedades serán
agregadas al objeto recién creado, con los nombres de propiedad
correspondientes. Estas propiedades corresponden al segundo argumento de
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

***

BONUS FACT:

`Object.create()` fue originalmente implementada y popularizada por [Douglas
Crockford](http://javascript.crockford.com/prototypal.html), el abuelito gruñón
del JavaScript, con la intención de aclarar los malos entendidos que generan los
constructores, que parecen clases pero no lo son, y en cambio se centra en los
prototipos. Hoy en día `Object.create()` ya es parte del lenguaje en sí.

***

### Herencia prototipal

`video: 6min`

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

```
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

```
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
* [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [MDN - Function.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [MDN - Function.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
* [MDN - Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
* [MDN - Object.defineProperties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
