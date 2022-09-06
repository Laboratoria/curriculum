# Functional JavaScript

En este curso exploraremos el paradigma funcional en JavaScript así como varios
patrones, técnicas y convenciones asociadas a este paradigma, haciendo uso de
las nuevas características de ES2015.

La programación funcional es un paradigma de programación de suma relevancia hoy
en día, ya que se presta a resolver problemas de paralelización, asincronía y
programación reactiva entre otros. La programación funcional (_Functional
Programming_ o FP por sus siglas en inglés) no es realmente un paradigma nuevo,
existe desde hace medio siglo, pero recientemente, y en particular en el mundo
de JavaScript, se ha convertido en tanto una moda como una necesidad. Poco a
poco, desde la proliferación de librerías como [underscore][] y [lodash][],
después la adición de `map()`, `filter()`, `reduce()` y compañía, y ahora con
_frameworks_ como [React][] y [Redux][], conocer el paradigma funcional y estilo
declarativo se han convertido en una necesidad para cualquier desarrollador de
JavaScript.

Familiarizarnos con la programción funcional en JavaScript y ES2015 nos
permitirá más adelante desenvolvernos con naturalidad con herramientas como
React o Redux.

**_Tags_**: `functional`, `es6`, ...

## Público objetivo

Este curso está dirigido a desarrolladoras tanto _front-end_ como _back-end_.
JavaScript es un lenguaje de naturaleza funcional. En este curso aprenderás
sobre los principios de la programación funcional y cómo se reflejan en
JavaScript moderno.

## Requerimientos previos

Para poder llevar adelante este curso sin frustración, es recomendable los
siguientes conocimientos previos:

* Manejo de línea de comandos (\*nix) y `git`
* Manejo básico de `npm`
* Debes haber completado el curso de [paradigmas de programación](../paradigms).

## Aprenderás

* ES2015
* Funciones puras
* Inmutabilidad
* Recursión
* _Higher Order Functions_
* Composición de funciones

***

## Syllabus

### Unidad 01: [Evitando el estado compartido y cambiante](01-state)

En esta unidad veremos dos de los principios fundamentales de la programación
funcional: cómo evitar el estado compartido usando **funciones puras** y el
concepto de **inmutabilidad**.

|  # |  Tipo     | Formato    | Duración | Descripción
|----|-----------|------------|----------|------------
| 00 | lectura   | self-paced |  5min    | Apertura
| 01 | lectura   | self-paced | 30min    | Funciones puras
| 02 | practice  | self-paced | 10min    | Ejercicios de funciones puras
| 03 | lectura   | self-paced | 30min    | Inmutabilidad
| 04 | practice  | self-paced | 10min    | Ejercicios de inmutabilidad
| 05 | quiz      | self-paced | 20min    | Cuestionario
| 08 | lectura   | self-paced |  5min    | Cierre

### Unidad 02: [Higher Order Functions](03-hof)

Las **funciones de orden superior** (_Higher Order Functions_ en inglés), no son
más que funciones que reciben otras funciones como argumentos o que retornan una
función. En esta unidad veremos este tipo de funciones en acción, incluyendo
usos más avanzados como **aplicación parcial** y **currying**.

|  # |  Tipo     | Formato    | Duración | Descripción
|----|-----------|------------|----------|------------
| 00 | lectura   | self-paced |  5min    | Apertura
| 01 | lectura   | self-paced | 30min    | Higher Order Functions
| 02 | practice  | self-paced | 10min    | Ejercicios de HOF
| 03 | lectura   | self-paced | 10min    | Aplicación parcial
| 04 | practice  | self-paced | 10min    | Ejercicios de aplicación parcial
| 05 | lectura   | self-paced | 30min    | Currying
| 06 | practice  | self-paced | 10min    | Ejercicios de currying
| 07 | quiz      | self-paced | 20min    | Cuestionario
| 10 | lectura   | self-paced |  5min    | Cierre

### Unidad 03: [Control de flujo](05-flow-control)

Como paradigma declarativo, la programación funcional se caracteriza, entre
otras cosas, por expresar "repetición" usando recursión en vez de iteración. En
esta unidad veremos cómo reemplazar iteración con recursión o higher order
functions, así como las ventajas que ofrece el enfoque funcional para manejar
asincronía, que es una característica fundamental de JavaScript.

|  # |  Tipo     | Formato    | Duración | Descripción
|----|-----------|------------|----------|------------
| 00 | lectura   | self-paced |  5min    | Apertura
| 01 | lectura   | self-paced | 50min    | Recursión
| 02 | practice  | self-paced | 10min    | Ejercicios de recursión
| 03 | lectura   | self-paced | 30min    | Asincronía
| 04 | practice  | self-paced | 10min    | Ejercicios de asincronía
| 05 | quiz      | self-paced | 20min    | Cuestionario
| 08 | lectura   | self-paced |  5min    | Cierre

***

## Autor(es) / Colaboradores

* Milton Mazzarri (autor)
* Lupo Montero (coordinador)
* Ana Rangel (colaboradora)

## Libros

* [Functional JavaScript](http://shop.oreilly.com/product/0636920028857.do) de
  Michael Fogus
* [Eloquent JavaScript](http://eloquentjavascript.net/)

## Benchmarks

Cursos similares que sirven como referencia:

* [Introduction to Functional Programming](http://shop.oreilly.com/product/0636920052463.do),
  How to Think Functionally in (Almost) Any Language, Barry Burd, November 2016,
  O'Reilly Media

## Referencias

Capítulos de libros:

* [Eloquent JavaScript - Chapter 3: Functions](http://eloquentjavascript.net/03_functions.html)
* [Eloquent JavaScript - Chapter 5: Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html)

Blog posts:

* [Why Learn Functional Programming in JavaScript? (Composing Software)]( https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257),
  Eric Elliott en Medium, Feb 20 2017
* [Master the JavaScript Interview: What is Functional Programming?]( https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0),
  Eric Elliott en Medium, Jan 3 2017
* [Functional Programming In JavaScript — With Practical Examples (Part 1)]( https://medium.freecodecamp.com/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276),
  Free Code Camp, @rajaraodv, Nov 14 2016
* [JavaScript and Functional Programming](https://bethallchurch.github.io/JavaScript-and-Functional-Programming/),
  Beth Allchurch, 29 of June, 2016
* [An introduction to functional programming](https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming),
  Mary Rose Cook
* [Functional Programming in Javascript (Part 2)](https://medium.com/@y_kishino/functional-programming-in-javascript-part-2-78078df327a5)
  [@yyyk](https://medium.com/@y_kishino), Apr 16 2017 (needs review)
* [One webpack config to rule them all — environments that is](https://medium.com/@ryandrewjohnson/one-webpack-config-to-rule-them-all-environments-that-is-277457769779),
  [Ryan Johnson](https://medium.com/@ryandrewjohnson), Feb 12 2017
* [What are NPM, Yarn, Babel, and Webpack; and how to properly use them?](https://medium.com/front-end-hacking/what-are-npm-yarn-babel-and-webpack-and-how-to-properly-use-them-d835a758f987),
  [Gasim Gasimzada](https://medium.com/@GasimGasimzada), May 9 2017 (needs review)

Videos:

* [Functional programming in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84),
  Mattias Petter Johansson.
* [Learning Functional Programming with JavaScript](https://www.youtube.com/watch?v=e-5obm1G_FY),
  Anjana Vakil, JSUnconf 2016
* [Functional programming and curry cooking in JS](https://www.youtube.com/watch?v=6Qx5ZAbfqjo),
  Stefanie Schirmer, JSConf EU 2015
* [Practical functional programming: pick two]( http://2014.jsconf.eu/speakers/james-coglan-practical-functional-programming-pick-two.html),
  James Coglan, JSConf EU 2014
* [Pure JavaScript](https://vimeo.com/49384334), Christian Johansen (@cjno), Sep
  13 2012

Otros recursos:

* [Glosario de términos de programación funcional](https://github.com/hemanth/functional-programming-jargon),
  @hemanth en GitHub.

[underscore]: http://underscorejs.org/
[lodash]: https://lodash.com/
[React]: https://facebook.github.io/react/
[Redux]: http://redux.js.org/
