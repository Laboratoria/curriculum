---
tracks:
  - web-dev
env: cjs
---

# Notes (FP)

## Tarea

Implementa tres funciones con las siguientes "firmas":

### `createNote(text)`

Esta función debe crear un objeto literal con tres propiedades (ver retorno).

#### Argumentos

* `text`: un string con el texto de la nota

#### Retorno

Un objeto con 3 propiedades:

* `text`: el texto de la nota.
* `createdAt`: objeto tipo `Date` creado cuando se invoca `createNote`.
* `completed`: un booleano con valor `false` por defecto.

### `createNotes(array)`

Crea un arreglo de objetos a partir de un arreglo de strings. Cada objeto en el
nuevo arreglo será creado usando `createNote`.

#### Argumentos

* `array`: Un array de strings con los textos de las notas.

#### Retorno

Un arreglo de objetos donde cada objeto tiene la estructura esperada de nota.

### `notesToString(notes)`

Convierte un arreglo de notas (objetos con la estructura que hemos visto) en un
string. Para ello debe invocar `noteToString` para cada elemento en el array.

#### Argumentos

* `notes`: Un arreglo de objetos (notas).

#### Retorno

Un string donde tenemos una línea por cada nota.

## Ejemplo

```js
const notes = createNotes(['hola', 'mundo']);

console.log(notes);

// [ { text: 'hola',
//    createdAt: 2017-06-15T17:40:56.093Z,
//    completed: false },
//  { text: 'mundo',
//    createdAt: 2017-06-15T17:40:56.093Z,
//    completed: false } ]

console.log(notesToString(notes));

// [ ] | Mon Jun 12 2017 | mundo
// [ ] | Mon Jun 12 2017 | hola

notes[0].completed = true;

console.log(notesToString(notes));

// [ ] | Mon Jun 12 2017 | mundo
// [X] | Mon Jun 12 2017 | hola
```

## Requisitos

* Tu módulo debe exportar cuatro funciones: `createNote`, `noteToString`,
  `createNotes` y `notesToString`.
* Tus funciones deben de ser "puras" (no side effects).
* Evita usar asignación dentro del cuerpo de las funciones.
* Usa `Array#map` para implementar `createNotes` y `notesToString`.
* Todas las funciones deben ser "arrow functions"

## Bonus points

* Evita usar el "keyword" `return` cuando puedas usar retorno implícito.

## Recursos

* [Arrow functions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Array#map - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Array#join - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
* [Date - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
