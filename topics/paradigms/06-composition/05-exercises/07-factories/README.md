---
tracks:
  - web-dev
env: cjs
---

# Object factories

Las factories o factory functions son simplemente functiones que crean objetos.
Podemos usar factories como alternativa a los constructores, siendo más simples
y por la tanto más fácil visualizar lo que hacen.

## Tarea

Implementa una función que se llame `createStore`. Esta función no recibe ningún
argumento y retorna un objeto con los siguientes métodos:

* `get(key)`: retorna el valor guardado en la "llave" (`key`).
* `set(key, value)`: guarda el valor (`value`) en la "llave" (`key`) del store y
    retorna el valor guardado.
* `keys()`: retorna un array con las llaves que tiene el store.
* `clear()`: borra todas las llaves/valores del store.

Ejemplo:

```js
const store = createStore();
console.log(store.keys()); // => []
console.log(store.get('foo')); // => undefined
console.log(store.set('foo', 'lalala')); // => lalala
console.log(store.get('foo')); // => lalala
console.log(store.keys()); // => ['foo']
console.log(store.clear()); // => {}
console.log(store.keys()); // => []
console.log(store.get('foo')); // => undefined
```

## Pistas

Puedes usar `Object.keys()` para obtener un arreglo con las propiedades de un
objeto.
