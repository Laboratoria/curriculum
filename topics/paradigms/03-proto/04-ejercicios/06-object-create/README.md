---
tracks:
  - web-dev
env: cjs
---

# Object.create

Como comentamos anteriormente, `__proto__` no es una manera estándar de asignar
prototipos. Una manera más sencilla es usando `Object.create()`,
disponible en ES5 y para navegadores antiguos podemos usar
[es5-shim](https://github.com/kriskowal/es5-shim).

```js
const alien = {
  kind: 'alien'
};

// creamos un nuevo objeto con `alien` como prototipo
const zack = Object.create(alien);

console.log(zack.kind); // => 'alien'
```

Podemos pasar un objeto a `Object.create` para añadir propiedades al nuevo
objeto:

```js
const zack = Object.create(alien, {age: {value:  13} });
console.log(zack.age); // => '13'
```

Sí, el objeto que tenemos que pasar es un poco complicado, pero así es. Puedes
ver más en la
[documentación oficial](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create).

## `Object.getPrototypeOf`

Puedes acceder al prototipo de un objeto usando `Object.getPrototypeOf`:

```js
const zack = Object.create(alien);
Object.getPrototypeOf(zack); //=> alien
```

## `Object.setPrototypeOf`

A partir de ES2015, también tenemos `Object.setPrototypeOf(object, prototype)`
como una alternativa oficial para cambiar la propiedad `__proto__`. Aún así,
no es recomendable alterar el prototipo durante la ejecución ya que es un
proceso lento. Siempre es mejor definir el prototipo *antes* de crear el objeto,
por ejemplo usando `Object.create()`.

## Desafío

El 'boilerplate' tiene las instrucciones y los
lugares donde añadir tu código debidamente señalados.
