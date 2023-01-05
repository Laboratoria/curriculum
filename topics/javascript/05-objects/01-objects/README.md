---
type: read
duration: 60min
---

# Objetos en JavaScript

## Objetivos de Aprendizaje

- Aprender qué son `objects` y para qué sirven
- Aprender a crear, acceder y modificar la información de un `object`
- Entender la diferencia entre un `array` y un `object`

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 4 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](https://github.com/hectorip), y del capítulo 3
de [JavaScript for kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf),
Nick Morgan, 2015.

***

## ¿Qué es un object en JavaScript?

Los `objects` en JavaScript son muy similares a los `arrays`, pero con dos
importantes diferencias:

1. Como hemos visto, para acceder a información dentro de un `array` utilizamos
   un número correspondiente al _index_; es decir, la posición en la que se
   ubica el valor. Los `objects`, por su parte, utilizan `strings` en lugar de
   números para acceder a los diferentes elementos. Estos `strings` se denominan
   _keys_ (llaves) o propiedades, y los elementos a los que apuntan son llamados
   _valores_. Juntas, estas piezas de información se llaman _pares key-value_.

2. Dado que en los `arrays` se requiere del _index_ para acceder a la
   información, es importante mantener un determinado orden de los valores. En
   el caso de los `objects` los _pares key-value_ de información pueden estar en
   cualquier orden.

Mientras que los `arrays` se utilizan sobre todo para representar listas de
cosas múltiples, los objetos son a menudo usado para representar cosas simples
pero con **múltiples características, o atributos**. Por ejemplo, si quisiéramos
agrupar los títulos de nuestras películas preferidas, utilizaríamos un `array`,
así:

```js
const favoriteMovies = [
  'The Big Fish',
  'The Lord of the Rings',
  'The Empire Strikes Back',
  'The Artist',
  'The Godfather',
  'Back to the Future',
];

```

¿Pero qué sucede si quisiéramos almacenar diferentes piezas de información sobre
una **misma** película? Aquí es donde entra la utilidad de un `object`.

## Creando Objetos

Almacenemos diferentes piezas de información de la película `Back to the Future`
en un solo lugar, por medio de un `object`:

```js
let movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  plot: 'Marty McFly, a 17-year-old high school student, ' +
    'is accidentally sent 30 years into the past in a time-traveling DeLorean ' +
    'invented by his close friend, the maverick scientist Doc Brown.',
  oscar: 1,
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
};

```

En el ejemplo anterior hemos creado una variable llamada `movie` y le hemos
asignado un objeto con 6 _pares key-value_. Para crear un objeto utilizamos las
llaves `{}`, en lugar de los corchetes `[]` que usamos para crear `arrays`.
Dentro de las llaves colocamos los _pares key-value_ separados por una coma.
Como se muestra en el ejemplo, no necesitamos colocar una coma después del
último par _key-value_.

La sintaxis de cada par _key-value_ es la siguiente:

```js
{ key : value }
```

Cuando se crea un `object`, el _key_ va antes de los dos puntos `:`, y el
_value_ va después. Los dos puntos actúan un poco como un signo igual (`=`); es
decir, los valores de la derecha se asignan a los nombres de la izquierda, al
igual que cuando se crean variables.

### Keys (strings) con o sin comillas

Como hemos visto, los _keys_ son `strings`. Como muestra el ejemplo anterior, no
es necesario colocar los _keys_ entre comillas. Esto es porque Javascript sabe
que los _keys_ son `strings`. Sin embargo, es también válido colocar los _keys_
entre comillas. Por ejemplo, el objeto a continuación también es válido:

```js
const person = {
  age: 18,
  name: 'Michelle',
  friends: ['Alexandra', 'Ana'],
};

```

Si no colocamos las comillas, los _keys_ deben seguir las mismas reglas de
nombramiento de variables. Por ejemplo, no deben tener espacios. Pero si
colocamos los _keys_ entre comillas, entonces sí podemos usar el nombre que
queramos. Por ejemplo, si queremos agregar un _key_ del año en que salió la
película ('year of release'), haríamos:

```js
movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  plot: 'Marty McFly, a 17-year-old high school student, ' +
    'is accidentally sent 30 years into the past in a time-traveling DeLorean ' +
    'invented by his close friend, the maverick scientist Doc Brown.',
  oscar: 1,
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
};

```

Es importante resaltar que aunque los _keys_ son siempre `strings`, los _values_
pueden ser cualquier valor JavaScript - inclusive pueden ser una variable que
contiene, o mejor dicho "agarra" (con sus tentáculos) un valor.

## Accediendo información de un object

Podemos acceder a los valores de un `object` de dos maneras:

1. La primera es usando los corchetes `[]`, tal como lo hacemos para los
   `arrays`. La única diferencia es que, en lugar de usar el _index_ (un
   `number`), utilizamos el _key_ (un `string`), siempre entre comillas.
2. La segunda es usando el punto (`.`) con el nombre del _key_ inmediatamente
   después, **sin** comillas. A esto se le llama `dot notation`. Al igual que en
   la declaración de los _keys_, si utilizamos `dot notation`, el _key_ debe
   obligatoriamente cumplir con las reglas de nombres válidos (por ejemplo, no
   deben contener espacios).

Veamos algunos ejemplos para aclarar cuándo se usa una o la otra:

```js
movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
};

console.assert(movie['title'] === 'Back to the Future');
console.assert(movie.title === movie['title']);

```

```js
let error = false;
try {
  console.assert(movie[title] === 'Back to the Future');
} catch (e) {
  error = e.message;
}
console.assert(error === 'title is not defined');

```

```js
console.assert(movie.'title' === 'Back to the Future');
// → Uncaught SyntaxError: Unexpected string
```

Analicemos los dos errores:

1. Cuando utilizamos los corchetes **sin** comillas, JavaScript piensa que title
   es una variable y como en nuestro programa no existe una variable llamada
   title, se genera un error de referencia y JavaScript nos devuelve que title
   no está definida: `Uncaught ReferenceError: title is not defined`
2. Cuando utilizamos `dot notation` **con** comillas, JavaScript nos devuleve un
   error de sintaxis, dado que `dot notation` no se debe utilizar con un
   `string`. Por eso nos devuelve: `Uncaught SyntaxError: Unexpected string`.

¿Qué pasa cuando le pedimos un _key_ que no tiene el `object`? JavaScript nos
devuelve `undefined`. Veamos un ejemplo:

```js
movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  plot: 'Marty McFly, a 17-year-old high school student, ' +
    'is accidentally sent 30 years into the past in a time-traveling DeLorean ' +
    'invented by his close friend, the maverick scientist Doc Brown.',
  oscar: 1,
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
};

console.assert(movie['producer'] === undefined);

```

¿Y cómo hacemos para obtener uno de los actores (stars) de la película? Para
esto tenemos que entrar a la _key_ `'stars'` del object `movie`, que nos va a
devolver un `array` y luego acceder a uno de los elementos del `array` a través
de los corchetes `[]` y el _index_. Veamos un ejemplo:

```js
movie = {
  title: 'Back to the Future',
  stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
};

console.assert(movie.stars[0] === 'Michael J. Fox');
console.assert(movie['stars'][1] === 'Christopher Lloyd');
console.assert(movie.stars[2] === 'Lea Thompson');

```

Fíjate que hemos usado `movie.stars` y `movie['stars']` para hacer énfasis de
que ambas maneras funcionan, como parte de la experiencia educativa. Pero
cuidado, esto **no** es una buena práctica. Solo lo hemos hecho por dar el
ejemplo. Cuando escribamos programas, sean los retos de código, nuestros
ejercicios de clase o en proyectos personales, lo correcto es escoger una opción
y ser consistente a lo largo del código. Recomendamos, en particular,
`movie.stars` ya que es más corto y fácil de leer. Recuerda que lo mismo sucede
con las comillas de los `strings`, se pueden usar simples o dobles, pero de
manera consistente.

## Definiendo o cambiando los elementos de un object

Al igual que con los `arrays`, podemos añadir o cambiar los elementos de un
`object` utilizando los corchetes y _keys_ o `dot notation`.

Veamos un ejemplo que empieza con un `object` vacío y se le va añadiendo y
modificando elementos.

```js
/* creando un object vacío */
const student = {};

/* añadiendo elementos al object con corchetes y comillas */
student['name'] = 'Carolina';
student['points'] = 2500;

/* añadiendo elementos al object con dot notation */
student.courses = ['Intro a JS', 'Intro a UX'];
student.isActive = true;

/* resucitamos nuestra función comparadora */

const equal = (one, other) => JSON.stringify(one) === JSON.stringify(other);

console.assert(equal(
  student,
  {
    name: 'Carolina',
    points: 2500,
    courses: ['Intro a JS', 'Intro a UX'],
    isActive: true,
  },
));

/* actualizando los puntos */
student['points'] = 3500;

console.assert(equal(
  student,
  {
    name: 'Carolina',
    points: 3500,
    courses: ['Intro a JS', 'Intro a UX'],
    isActive: true,
  },
));

```

A continuación Michelle nos explica los conceptos principales de `objects` con
un ejemplo:

[![ejemplo de crear y modificar un object](https://img.youtube.com/vi/J6U0gDzWsUg/0.jpg)](https://www.youtube.com/watch?v=J6U0gDzWsUg)
