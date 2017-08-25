# 09. Paradigmas de programación

Los **Paradigmas de Programación** (_Programming Paradigms_) son formas
diferentes de pensar en cómo se organiza un programa basado en una serie de
principios, los cuales resultan en estilos muy distintos y lenguages muy
diversos.

**JavaScript** es un leguage _híbrido_, por decirlo de alguna forma, y contiene
elementos propios de lenguages funcionales (por ejemplo funciones como objetos
de primera clase, lambdas, ...) pero no estamos limitados al paradigma
funcional, si no que en su dinamismo y rareza, **JavaScript nos permite
programar de forma _funcional_, _orientado a objetos_, _orientado a eventos_,
_por procedimientos_, ...**

Como desarrollador **Full Stack JS** es esencial entender los distintos
paradigmas de programación y cómo se traducen al mundo real en proyectos de
JavaScript.

Históricamente, el paradigma orientado a objetos (OOP) ha sido el predominante,
pero recientemente, y en particular en la comunidad de JavaScript, hay un
resurgir del paradigma funcional y sus bondades. **JavaScript es un lenguage de
corazón funcional**, así que conocer el paradigma, y cómo se compara a la
programación orientada a objetos, no sólo te hará una mejor coder, si no que
podrás entender cómo se pueden enfrentar los mismos problemas con enfoques
distintos, e identificar y adaptarse a bases de código existentes.

En este curso formarás parte de un equipo responsable de extender la
funcionalidad de un juego de dos dimensiones escrito en JavaScript. **Tu equipo
tendrá que dividir tareas, trabajar en parejas y en parelalo y hacer code
reviews**. Todo el flujo de trabajo será a través de un repositorio alojado en
GitHub. Durante la primera semana tu equipo tendrá que extender el juego
_heredando_ del prototipo de un constructor ya implementado, mientras que en la
segunda semana tendrán que refactorizar el código de la primera semana usando
el paradigma funcional.

## Público objetivo

Este curso está pensado para alumnas que ya se han familiarizado con la
programación en JavaScript y quieren llevar su conocimiento sobre el lenguage
a otro nivel, entendiendo diferentes formas de "pensar" en cómo se estructura
un programa.

## Requerimientos previos

Se asume que las alumnas ya han trabajado con variables, valores (tipos de
datos), arreglos, objetos y funciones así como estructuras de control de flujo
(bucles, condicionales, ...).

Durante este curso se hará uso de algunas características de **ES2015**, así que
un mínimo de familiaridad con `const`, `let`, _arrow-functions_,
_deconstrucción_ de objetos y la notación _shorthand_ de objetos son un plus.

## Aprenderás

* Qué son los **paradigmas de programación**
* Qué son **FP**, **OOP**, **EOP** y **PP** y cómo se comparan
* A entender las diferencias y entre el estilo **imperativo vs declarativo**
* Las diferencias entre **constructores** y **factories**
* Cómo implementar **herencia prototipal**
* Los principios básicos de la **programación funcional**
* A usar **composición** como alternativa a la _herencia_
* A **trabajar sobre una base de código existente**
* A trabajar haciendo **pair programming**
* A sacarle el jugo a git y GitHub usando **issues**, **milestones**,
  **branches**, **forks** y **pull requests**

## Detalles logísticos

* Self-paced: 7 horas
* Presencial: 11 horas
* Total: 18 horas

## Producto

El _producto_ en el que trabajarás es un
[videojuego de ejemplo](https://laboratoria.github.io/game-oop/), con una
[base de código](https://github.com/Laboratoria/game-oop) existente y que
funciona. La idea es que un jefe ficticio le ha pedido a tu equipo que añada
una serie de _personajes_ y _niveles_ nuevos.

Participar en el proyecto involucra lo siguiente:

* Tener una cuenta en **GitHub**
* Hacer un **fork** del repo _upstream_
* **Mapear y dividir el trabajo** con tu equipo
* Setear **milestones**
* Implementar nuevos personajes y mapas usando **herencia**
* Implementar nuevos personajes y mapas usando **composición**
* Enviar **pull requests**
* Hacer **code review** y **merges**
* Presentar el trabajo final al resto del grupo con una **demo**

El juego está inspirado en el ejemplo de
[js-tiles de mozdevs](https://github.com/mozdevs/gamedev-js-tiles).

***

## Syllabus

### Lesson 0: [Presentación del curso](01-intro/01-welcome.md)

15min (presencial)

Antes de empezar con la teoría o la práctica, en esta "pre-lección" se hará una
presentación sobre el curso en sí, los objetivos de aprendizaje, el proyecto, la
metodología de aprendizaje, requisitos previos y metodología de evaluación.

### Workshop 1: [Entorno y metodología de trabajo](02-env)

1h (presencial)

Durante esta sesión nos aseguraremos que todas tienen git y node instalado,
acceso al repo, su propio fork, ...

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | workshop   |   20min  | [Entorno: Git + GitHub](02-env/01-git+github.md)
|   2   | workshop   |   20min  | [Entorno: Node.js + npm](02-env/02-node+npm.md)
|   3   | workshop   |   20min  | [Ejemplo: Workshopper (paradigms)](02-env/03-workshopper.md)

### Lesson 1: [Introducción a Paradigmas de Programación](03-paradigms)

1.5h (self-paced)

En esta lección aprenderás las características y diferencias entre los
paradigmas más relevantes para **JavaScript**, que es un lenguaje
multi-paradigma y nos permite programar en varios estilos: imperativo, por
procedimientos, orientado a objetos (OOP), funcional (FP), ...

#### Lesson plan

| Orden |  Tipo   | Duración | Descripción
|-------|---------|----------|------------
|   1   | video   |    4min  | [¿Qué son los paradigmas de programación?](03-paradigms/01-overview.md)
|   2   | video   |    3min  | [Historia](03-paradigms/02-history.md)
|   3   | video   |   12min  | [Declarativo vs Imperativo](03-paradigms/03-declarative-vs-imperative.md)
|   4   | code    |    5min  | [Ejercicio Imperativo](03-paradigms/04-imperative-exercise.md)
|   5   | video   |    6min  | [Por procedimientos](03-paradigms/05-procedural.md)
|   6   | video   |    6min  | [Modularidad](03-paradigms/06-modules.md)
|   7   | code    |   10min  | [Ejercicio por procedimientos](03-paradigms/07-procedural-exercise.md)
|   8   | video   |   12min  | [Orientado a objetos](03-paradigms/08-oop.md)
|   9   | code    |   10min  | [Ejercicio OOP](03-paradigms/09-oop-exercise.md)
|  10   | lectura |   10min  | [Funcional](03-paradigms/10-fp.md)
|  11   | code    |   10min  | [Ejercicio funcional](03-paradigms/11-fp-exercise.md)

### Lesson 2: [OOP y herencia prototipal](04-proto)

1.5h (self-paced)

Después de haber completado la introducción a paradigmas, te introdicirás en los
detalles de cómo usar contructores y prototipos para crear jerarquías de
herencia.

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | video      |   10min  | [`this` y `bind`](04-proto/01-this-and-bind)
|   1   | video      |   10min  | [`Object.create`](04-proto/02-object-create.md)
|   2   | video      |   12min  | [Herencia prototipal](04-proto/03-prototypal-inheritance.md)
|   4   | code       |   60min  | [Ejercicios planetproto](04-proto/04-ejercicios-planetproto.md)

### Workshop 2: [Solucionario y ejercicios guiados](05-solucionario/01-learnyouparadigms-planetproto.md)

1h (presencial)

Ahora que ya has tenido un primer acercamiento a los paradigmas en general, OOP
en particular, y herencia prototipal, en esta lección solucionaremos los
ejercicios de `planetproto` y `learnyouparadigms` todos juntos con la ayuda de
los instructores.

### Workshop 3: [Proyecto (implementación OOP)](06-game-oop/01-hacking.md)

3h (presencial)

En esta sesión te dedicarás a hackear :construction:! Junto con una compañera,
tendrás que extender el video juego añadiendo 2 ó más personajes. La
implementación será usando herencia prototipal.

### Workshop 4: [Demos de proyectos OOP](07-game-oop-demo/01-demo.md)

1h (presencial)

Cada equipo (dos alumnas) tendrá 5 minutos para presentar su demo.

### Lesson 3: [Object factories and composition](08-composition)

1.5h (self-paced)

En esta lección veremos en detalle cómo usar composición como una alternativa a
las jerarquías de herencia, y así poder comparar el enfoque funcional frente al
orientado a objetos en un ámbito concreto de arquitectura y reuso de código.

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | lectura    |    3min  | [Closures](08-composition/01-closures.md)
|   2   | lectura    |    5min  | [Factories](08-composition/02-factories.md)
|   3   | lectura    |    5min  | [Object.assign](08-composition/03-object-assign.md)
|   4   | lectura    |   10min  | [Composition over inheritance](08-composition/04-composition-over-inheritance.md)
|   5   | code       |   60min  | [Ejercicios](08-composition/05-exercises.md)

### Workshop 5: [Ejercicios guiados, ayudantías](09-solucionario/01-coi.md)

1h (presencial)

En esta lección nos concentraremos en solucionar los ejercicios de
`Laboratoria/coi` todos juntos con la ayuda de los instructores.

### Workshop 6: [Proyecto (implementación FP)](10-game-fp/01-hacking.md)

3h (presencial)

En esta sesión te dedicarás a hackear :construction:! Junto con una compañera,
tendrás que extender el video juego añadiendo 2 ó más personajes. La
implementación será usando el estilo funcional (composición).

### Workshop 7: [Demos de proyectos FP](11-game-fp-demo/01-demo.md)

1h (presencial)

Cada equipo (dos alumnas) tendrá 5 minutos para presentar su demo.

***

## Contributors

* Lupo Montero (autor)
* Mariano Crowe (technical review)

## Libros

* [Object-Oriented vs. Functional Programming]( http://www.oreilly.com/programming/free/object-oriented-vs-functional-programming.csp),
  Richard Warburton, O'Reilly Media
* [Eloquent JavaScript](http://eloquentjavascript.net/), Marijn Haverbeke, 2014
* [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes),
  Kyle Simpson, O'Reilly Media, Jul 2014
* [Programming Paradigms for Dummies: What Every Programmer Should Know](https://www.info.ucl.ac.be/~pvr/VanRoyChapter.pdf),
  Peter Van Roy, Université Catholique de Louvain, Bélgica, circa 2010.

## Benchmarks

Cursos similares que sirven como referencia:

* [Fundamentos de la programación: Paradigmas de programación](https://www.video2brain.com/mx/cursos/fundamentos-de-la-programacion-paradigmas-de-programacion),
  José Dimas Luján Castillo, video2brain, 8 Mar 2017
* [Object-Oriented JavaScript](https://www.udacity.com/course/object-oriented-javascript--ud015),
  Hack Reactor en Udacity
* [Ejercicio de ejemplo del curso de Hack Reactor](https://github.com/madbernard/blinky-dance-party)
* [Overview of the four main programming paradigms](http://people.cs.aau.dk/~normark/prog3-03/html/notes/paradigms_themes-paradigm-overview-section.html),
  Kurt Nørmarks, Aalborg University, Dinamarca.

## Referencias

Capítulos de libros:

* [Eloquent JavaScript - Chapter 3: Functions](http://eloquentjavascript.net/03_functions.html)
* [Eloquent JavaScript - Chapter 5: Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html)
* [Eloquent JavaScript - Chapter 6: The Secret Life of Objects](http://eloquentjavascript.net/06_object.html)

Blog posts:

* [Six programming paradigms that will change how you think about coding](http://www.ybrikman.com/writing/2014/04/09/six-programming-paradigms-that-will/),
  Yevgeniy Brikman, Apr 09 2014
* [Understanding JavaScript Constructors](https://css-tricks.com/understanding-javascript-constructors/),
  Faraz Kelhini, CSS Tricks, Sep 24 2015
* [ECMAScript 6 modules: the final syntax](http://2ality.com/2014/09/es6-modules-final.html),
  Axel Rauschmayer, 07 Sep 2014
* [JavaScript Modules: A Beginner’s Guide](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc),
  Preethi Kasireddy (FreeCodeCamp), Jan 22 2016
* [Why Learn Functional Programming in JavaScript? (Composing Software)]( https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257),
  Eric Elliott en Medium, Feb 20 2017
* [JavaScript and Functional Programming](https://bethallchurch.github.io/JavaScript-and-Functional-Programming/),
  Beth Allchurch, 29 of June, 2016
* [An introduction to functional programming](https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming),
  Mary Rose Cook
* [Introducción a programación funcional en JavaScript — Parte 1](https://medium.com/laboratoria-how-to/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-1-e0b1d0b2142e),
  Lupo Montero en Medium, Feb 15 2017

Videos:

* [Programming Paradigms](https://www.youtube.com/watch?v=sqV3pL5x8PI),
  `10:43`, [Computerphile](https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA),
  30 Aug 2013
* [HTML IS a Programming Language (Imperative vs Declarative)](https://www.youtube.com/watch?v=4A2mWqLUpzw),
  `8:27`, [Computerphile](https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA),
  Jun 28 2016
* [Qué es un paradigma de programación](https://www.video2brain.com/mx/tutorial/que-es-un-paradigma-de-programacion),
  `5:15`, José Dimas Luján Castillo, [video2brain](https://www.video2brain.com/),
  8 Mar 2017
* [Prototypal Inheritance](https://frontendmasters.com/courses/javascript-jquery-dom/prototypal-inheritance/),
  `8:52`, Justin Meyer, [Frontend Masters](https://frontendmasters.com/)
* Playlist: [Object Creation in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub),
  `aprox. 3h`, [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q),
  2016
* [Prototypes in JavaScript - FunFunFunction #16](https://www.youtube.com/watch?v=riDVvXZ_Kb4),
  `11:55`, [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q),
  25 Jan 2016
* [Prototype basics - Object Creation in JavaScript P3 - FunFunFunction #46](https://www.youtube.com/watch?v=YkoelSTUy7A),
  `19:19`, [funfunfunction](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q),
  22 ago. 2016
* [Learning Functional Programming with JavaScript- JSUnconf](https://www.youtube.com/watch?v=e-5obm1G_FY),
  `29:56`, Anjana Vakil,
  [JSConf](https://www.youtube.com/channel/UCzoVCacndDCfGDf41P-z0iA)
  2016

Otros recursos:

* [Definición de Programming_paradigm en Wikipedia](https://en.wikipedia.org/wiki/Programming_paradigm)
* [Comparativa de paradigmas de programación en Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms)
* [History of programming languages](https://en.wikipedia.org/wiki/History_of_programming_languages)
* [Declarative programming](https://en.wikipedia.org/wiki/Declarative_programming)
* [Procedural programming](https://en.wikipedia.org/wiki/Procedural_programming)
* [Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming)
* [MDN - instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
* [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [MDN - Function.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [MDN - Function.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
* [MDN - Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [MDN - Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
