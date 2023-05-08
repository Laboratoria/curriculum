---
type: read
duration: 5min
---

# Factories

Las `factories` o `factory functions` son simplemente funciones que crean
objetos. Podemos usar factories como alternativa a los constructores, siendo más
simples y por la tanto más fácil visualizar lo que hacen. Nada de `this`, `new`
o `Function.prototype`. En la lección anterior vimos una función `createNote`
que creaba un objeto. Era una factory!

```js
const createNote = text => ({
  text,
  createdAt: new Date(),
  completed: false
});
```

Esta función es muy sencilla, pero comparada al constructor `Note`, que también
vimos en la lección pasada, le falta añadir la funcionalidad que le habíamos
añadido a los objetos creados con `Note` a través de `Note.prototype` (habíamos
añadido un método `Note.prototype.toString`). Para solventar esto, podríamos
añadir el método `toString` directamente sobre la instancia que retorna nuestro
factory:

```js
const createNote = text => ({
  text,
  createdAt: new Date(),
  completed: false,
  toString: () => {}
});
```

Pero, cómo hacemos referencia a `createdAt` y `completed` desde `toString`?
Closures al rescate!

```js
const createNote = text => {
  let createdAt = new Date();
  let completed = false;

  return {
    text,
    createdAt,
    completed,
    toString: () => '[' + (completed ? 'X' : ' ') + '] | ' +
      createdAt.toDateString() + ' | ' + text
  }
};

console.log(createNote('hahah').toString());
// [ ] | Sat Jul 01 2017 | hahah
```

Esta nueva implementación hace uso de un closure para dar acceso a `text`,
`createdAt` y `completed` a todos los métodos del objeto que crea nuestra
factory.

Vayamos un paso más allá. Cuando usábamos constructores resultaba cómodo tener
las propiedades del objeto creado disponibles en `this`, de esa manera
compartíamos "estado" entre los métodos de nuestro objeto. Organicemos el
"estado" de nuestra nota en un objeto, y ahora sólo expongamos métodos en el
objeto que retorna nuestra factory. Esto nos va a permitir esconder esta data
y tratarla como privada. Esto es una gran ventaja con respecto a los
constructores, ya que nos permite decidir qué data queremos que se pueda acceder
y cómo.

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
      state.createdAt.toDateString() + ' | ' + state.text
  };
};

const note = createNote('comprar arroz');

console.log(note.complete()); // false
console.log(note.complete(true)); // true
console.log(note.complete()); // true

console.log(note.toString());
// [X] | Sat Jul 01 2017 | comprar arroz
```

En esta nueva versión el objeto retornado por `createNote` tiene los métodos
`complete()`, que nos permite marcar la nota como completada y comprobar si está
completada, y `toString()`, sin necesidad de exponer sus estado interno, lo cual
puede ser muy útil además de resultar en _interfaces_ más limpias.

***

## Referencias

Videos:

* Playlist: [Object Creation in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub),
  `aprox. 3h`, [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q),
  2016

Otros recursos:

* [MDN - Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
