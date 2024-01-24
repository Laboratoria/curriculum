---
tracks:
  - web-dev
env: cjs
---

# Prototipos de funciones

Toda función en JavaScript tiene una propiedad especial llamada `prototype`.

```js
function Alien() {}

Alien.prototype;
```

Aunque parezca confuso, esta propiedad `prototype` no es el prototipo real
(`__proto__`) de la función.

```js
Alien.__proto__ === Alien.prototype; //=> false
```

Esto obviamente genera mucha confusión a la hora de usar el término "prototipo"
para refererirnos a cosas diferentes.

Una buena acalaración es siempre usar '__prototipo de función__' para
refererirnos a este `prototype` especial, y nunca simplemente "prototype".

Este `prototype` apunta al objeto que será asignado como el prototipo de
instancias creadas con la función (el constructor) cuando se use con `new`.

Confundida? Veamos un ejemplo:

```js
function Alien(name) {
  this.name = name;
}

// la función Alien tiene una propiedad prototype
// podemos añadir propiedades al prototipo de la función
Alien.prototype.kind = 'alien';

// creamos un objeto usando `new`
const zippy = new Alien('Zippy');

// el __proto__ del nuevo objeto apunta a Alien.prototype
zippy.__proto__ == Alien.prototype; //=> true

// en el nuevo objeto tenemos acceso a las propiedades definidas en Alien.prototype
zippy.kind; //=> alien
```

Acá puedes ver un [diagrama que muestra esta relación](https://docs.google.com/drawings/d/1AKJcvxs0t3iGtqkRV8rFAWlo7tojkOSwjfhr1NWaTb0/pub?w=889&h=482).

Así que si tienes dos instancias de `Alien`, ambas recibirán `Alien.prototype`
como su `__proto__`. Lo que pongas ahí será compartido por todas las instancias.

Esto es casi todo lo que hay que saber sobre el "JavaScript object model".
Entender cómo se relacionan `__proto__` y `function.prototype` te dará
incontables momentos de alegría y satisfacción. O quizás no ;-)

## Desafío

El 'boilerplate' tiene las instrucciones y los
lugares donde añadir tu código debidamente señalados.
