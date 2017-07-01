# 09. Paradigmas de programación

## Lección 08: Object factories and object composition (FP)

* Formato: `lecturas/code` (self-paced)
* Duración: `1.5h`

En esta lección veremos en detalle cómo usar composición como una alternativa a
las jerarquías de herencia, y así poder comparar el enfoque funcional frente al
orientado a objetos en un ámbito concreto de arquitectura y reuso de código.

#### Lesson plan

### Objetivos de la lección

* ...

### Requisitos

* Es fundamental tener instalado y configurado `git` y `npm`
* Cuenta en [GitHub](https://github.com/)
* Instalar `coi` con el siguiente comando: `npm install -g Laboratoria/coi`
* Fork propio del repo de tu cohort

***

### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | lectura    |    3min  | Closures
|   1   | lectura    |    5min  | Factories
|   2   | lectura    |    5min  | Object.assign
|   3   | lectura    |   10min  | Composition over inheritance
|   4   | code       |   60min  | Ejercicios

***

### Closures

`lectura: 3min`

En JavaScript las _funciones_ no son sólo "funciones", también son _closures_.

En JavaScript, cuando declaramos una función, el cuerpo de la función tiene
acceso al scope dónde se declaró la funcíon además de su scope local. _Closure_
significa que las funciones se cierran alrededor de las variables a las que
tiene acceso. Por lo tanto, una función creada dentro de otra función tiene
acceso a las variables del scope de la función que la envuelve, incluso después
de que ésta haya retornado. Considera el siguiente snippet:

```js
const makeFunction = function () {
  var foo = true;
  return function () {
    return foo;
  };
};

var myFunc = makeFunction();
myFunc(); // true
```

En el ejemplo de arriba podemos ver que `makeFunction` es una función anónima
que retorna otra función anónima, y ésta última todavía tiene acceso a `foo`
después de que `makeFunction` ya ha retornado.

Los closures son un "feature" muy poderoso y nos van a permitir crear scopes
"privados" (sólo visibles para aquellas funciones creadas dentro de un scope
compartido.

Esto no sólo se aplica a variables declaradas dentro del scope, sino a todas las
variables "visibles" dentro de ese scope, incluyendo los argumentos de
invocación.

```js
// una función que crea un objeto, y sus métodos tienen acceso a los argumentos
// con los que se invocó la función que creó el objeto.
const createNote = text => ({
  print: () => console.log(text)
});

const note = createNote('lorem ipsum')
note.print() // Outputs: "lorem ipsum"


// una función que hace referencia a una variable declarada fuera de su scope
let name = 'Lupo';
function say() {
  console.log('Hola soy ' + name);
}
say(); // "Hola soy Lupo"
name = 'Pedro Picapiedra';
say(); // "Hola soy Pedro Picapiedra"
```

En un lenguaje sin "closures", a la hora de invocar `say()` en este ejemplo,
tendríamos que haber explícitamente pasado `name` como argumento. En JavaScript
la función `say()` tiene acceso al contexto exterior, incluso si invocáramos la
función desde otro lugar o como un callback de una operación asíncrona, siempre
va a recordar ese contexto exterior (outer scope) y puede hacer referencia a él.

Pero... por qué, para qué? Veamos un ejemplo.

```js
function fetchData() {
  var reqId = 123;
  $.get('/some-url', function () {
    alert('Request ' + reqId + ' completed');
  });
}
```

En el código de arriba la función `fetchData()` va a hacer una llamada AJAX
(usando jQuery), y cuando la llamada retorna (esto ocurre después de que
`fetchData` haya retornado) el callback todavía tiene acceso a `reqId`. Esto es
muy útil a la hora programar operaciones asíncronas.

### Factories

`lectura: 5min`

Las `factories` o `factory functions` son simplemente functiones que crean
objetos. Podemos usar factories como alternativa a los constructores, siendo más
simples y por la tanto más fácil visualizar lo que hacen. En la lección anterior
vimos una función `createNote` que creaba un objeto. Era una factory!

```js
const createNote = text => ({
  text,
  createdAt: new Date(),
  completed: false
});
```

Esta función es muy sencilla, pero comparada al constructor `Note`, que también
vimos en la lección pasada, le falta añadir la funcionalidad que le habíamos
añadido a los objetos creados con `Note` a través de `Note.prototype`. Para
solventar esto, podríamos añadir un método `toString` directamente sobre la
instancia que retorna nuestro factory:

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
completada, y `toString()`, sin necesidad de exponer sus estado interno. Lo cual
puede ser muy útil además de resultar en _interfaces_ más limpias.

### Object.assign()

`lectura: 5min`

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

```
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

### Composition over inheritance

`lectura: 10min`

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

### Referencias

Capítulos de libros:

* [Eloquent JavaScript - Chapter 3: Functions](http://eloquentjavascript.net/03_functions.html)
* [Eloquent JavaScript - Chapter 5: Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html)

Blog posts:

* [Why Learn Functional Programming in JavaScript? (Composing Software)]( https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257),
  Eric Elliott en Medium, Feb 20 2017
* [JavaScript and Functional Programming](https://bethallchurch.github.io/JavaScript-and-Functional-Programming/),
  Beth Allchurch, 29 of June, 2016
* [An introduction to functional programming](https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming),
  Mary Rose Cook
* [Introducción a programación funcional en JavaScript — Parte 1](https://medium.com/laboratoria-how-to/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-1-e0b1d0b2142e),
  Lupo Montero en Medium, Feb 15 2017

Videos:

* Playlist: [Object Creation in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub),
  `aprox. 3h`, [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q),
  2016
* [Learning Functional Programming with JavaScript- JSUnconf](https://www.youtube.com/watch?v=e-5obm1G_FY),
  `29:56`, Anjana Vakil,
  [JSConf](https://www.youtube.com/channel/UCzoVCacndDCfGDf41P-z0iA)
  2016

Otros recursos:

* [Declarative programming](https://en.wikipedia.org/wiki/Declarative_programming)
* [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming)
* [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [MDN - Function.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [MDN - Function.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
* [MDN - Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [MDN - Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
