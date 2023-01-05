---
type: read
duration: 10min
---

# Object.create()

[![Paradigmas - Proto: Object.create()](https://embedwistia-a.akamaihd.net/deliveries/276361587ebe2506d327117feaee304949c0601f.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/y3ka2dold6?wvideo=y3ka2dold6)

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

## Referencias

Videos:

* [Prototype basics - Object Creation in JavaScript P3 - FunFunFunction #46](https://www.youtube.com/watch?v=YkoelSTUy7A),
  `19:19`, [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q),
  22 ago. 2016

Otros recursos:

* [MDN - Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
* [MDN - Object.defineProperties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
