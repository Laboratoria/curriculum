---
type: read
duration: 5min
---

# Object.assign()

Llegado a este punto, probablemente te estés preguntando cómo podemos acceder
ahora a `text` y `createdAt`. En nuestro caso, estas propiedades no necesitan
ser "privadas", así que vamos a "exponerlas". Para ello, en vez de exponerlas
directamente sobre el objeto, vamos a añadir un método que nos de una "copia"
del estado, y así asegurar la immutabilidad del estado desde afuera. Vamos a
llamar a éste nuevo método `toJSON`.

```js
const createNote = text => {
  const state = {
    text,
    createdAt: new Date(),
    completed: false
  };

  return {
    complete: bool => typeof bool !== 'undefined' ?
      state.completed = !!bool : state.completed,
    toString: () => '[' + (state.completed ? 'X' : ' ') + '] | ' +
      state.createdAt.toDateString() + ' | ' + state.text,
    toJSON: () => Object.assign({}, state)
  };
};

const note = createNote('comprar arroz');
console.log(note.toJSON());
```

En la consola deberías de ver algo así:

```text
{ text: 'comprar arroz',
  createdAt: 2017-07-01T07:06:24.345Z,
  completed: false }
```

En la implementación de `toJSON` hemos usado `Object.assign()`. Esto significa
que retornamos un nuevo objeto, al cual le hemos copiado todas las propiedades
de `state`. `Object.assign(destino, fuente1, fuente2, ... fuenteN)` se utiliza
para copiar los valores de todas la _propiedades enumerables_ de uno o más
objetos fuente a un objeto destino, y retorna el objeto destino. Esto nos
permite fácilmente "mezclar" objetos o simplemente copiar un objeto.

```js
const obj = { foo: 'bar', baz: true };
const objCopy = Object.assign({}, obj);
console.log(objCopy); // { foo: 'bar', baz: true }

objCopy.foo = 'aaaa';
console.log(objCopy); // { foo: 'aaaa', baz: true } MODIFICADO!
console.log(obj); // { foo: 'bar', baz: true } NO MODIFICADO!

// como comparación, en el caso de los arrays usamos `Array#slice` para esto
const arr = [1, 2, 3];
const arrCopy = arr.slice(0);
console.log(arrCopy); // [1, 2, 3]

arrCopy.push(4);
console.log(arrCopy); // [1, 2, 3, 4] MODIFICADO!
console.log(arr); // [1, 2, 3] NO MODIFICADO!
```

***

## Referencias

Otros recursos:

* [MDN - Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
