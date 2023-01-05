---
type: read
duration: 10min
---

# Composition over inheritance

Por lo general, a la hora de "diseñar" programas tratamos de favorecer la
composición con respecto a la herencia. El motivo principal es la flexibilidad
de no estar amarrado a una jerarquía rígida de herencia, que además debe existir
desde el principio del desarrollo, a veces obligándonos a modelar un problema
que todavía no conocemos.

La composición se concentra en la "funcionalidad", los métodos que implementa
un objeto, y para ello en vez de heredar, simplemente "tenemos" otros objetos
a partir de los cuales vamos a componer una nueva interfaz.

En programación funcional tratamos de evitar el estado compartido, y para ello
normalmente vamos a enviar todo lo que necesitemos explícitamente como
argumentos.

Ahora que hemos abstraido el estado a un objeto y ya conocemos
`Object.assign()`, podemos descomponer nuestra implementación de `createNote` en
diferentes funciones puras, cada una responsable de una parte de la
funcionalidad, y así poder componer nuestro objeto a partir de varios objetos.

```js
const serializer = state => ({
  toString: _ => '[' + (state.completed ? 'X' : ' ') + '] | ' +
    state.createdAt.toDateString() + ' | ' + state.text,
  toJSON: _ => Object.assign({}, state)
});

const completer = state => ({
  complete: bool => typeof bool !== 'undefined' ?
    state.completed = !!bool : state.completed
});

const createNote = text => {
  const state = {
    text,
    createdAt: new Date(),
    completed: false
  };
  return Object.assign({}, completer(state), serializer(state));
};

const note = createNote('comprar arroz');

console.log(note);
console.log(note.complete()); // false
console.log(note.complete(true)); // true
console.log(note.complete()); // true

console.log(note.toString());
console.log(note.toJSON());
```

Continuando el paralelo con herencia prototipal, implementemos ahora una función
que cree objetos que extiendan la funcionalidad de nuestras notas:

```js
const createImageNote = url => {
  const note = createNote('an image');
  return Object.assign({}, note, {
    toString: () => note.toString() + ' | ' + url,
    toJSON: () => Object.assign(note.toJSON(), { url: url })
  });
};


const imageNote = createImageNote('http://foo.com/bar.png');

console.log(imageNote.complete()); // false
console.log(imageNote.complete(true)); // true
console.log(imageNote.complete()); // true

console.log(imageNote.toString());
console.log(imageNote.toJSON());
```

La función `createImageNote` simplemente usa un objeto creado con `createNote`
internamente (`note`) y de ahí reemplaza los métodos `toString` y `toJSON`, los
cuales a su vez hacen uso de los métodos de `note`.

Nótese que podríamos usar muchos otros objetos con los componer la interfaz de
los objetos creados con `createImageNote`. No estamos limitados a heredar de
un sólo objeto (o jerarquía de objetos).

Como conclusión, la mayor diferencia entre composición y herencia es que cuando
pensamos en herencia nos concentramos en "qué" es un objeto, a qué familia
pertenece, mientreas que cuando usamos composición nos centramos en qué
funcionalidad implementa. En herencia pensamos en "qué es un objeto" (es un X),
mientras que en composición pensamos en "lo que tiene", independientemente de
cadenas de herencia. De esta forma, usando composición tenemos mucho más
flexibilidad a la hora de "componer" objetos, ya que no estamos amarrados a una
jerarquía de herencia que quizás nos obligue a heredar funcionalidad que no
necesitamos además de no permitirnos heredar de jerarquías separadas.

***

## Referencias

Videos:

* Playlist: [Object Creation in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub),
  `aprox. 3h`, [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q),
  2016
