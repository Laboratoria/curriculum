# 08. JS Deep Dive

Programar en JavaScript te hace ver cool, conocer las particularidades del
lenguaje es aún mejor. Este curso no es una introducción a JavaScript, sino
una profundización en el lenguaje. Verás temas que probablemente ya conozcas
pero desde una perspectiva de performance y buenas prácticas conociendo ciertas
peculiaridades de JavaScript que lo hace distinto a los demás lenguajes de
programación.

Main tags: `types`, `operators`, `functions`, `objects`, `scope`, `closure`,
`execution-context`, `linter`.

Secondary Tags: `primitive-vs-reference`, `bitwise-operators`,
`function-statement`, `function-expression`, `callbacks`, `hoisting`, `iife`,
`apply`, `call`, `bind`, `this`.

## Público objetivo

Este curso asume que ya te has familiarizado con la programación en JavaScript y
quieres llevar tu conocimiento sobre el lenguage a otro nivel, entendiendo
sutilezas del lenguage e implicaciones de performance.

## Requerimientos previos

Experiencia básica usando JavaScript para manipular el DOM y familiaridad con
`git` y `GitHub`.

## Aprenderás

* Qué es JavaScript/ECMAScript
* Implicaciones de **performance** y uso de **memoria**
* **Buenas prácticas** en el uso de JavaScript
* Manejo de **errores**
* A escribir código siguiendo una **guía de estilos**
* A construir un **UI Library**
* A **trabajar sobre una base de código existente**
* A trabajar haciendo **pair programming**
* A sacarle el jugo a git y GitHub usando **issues**, **milestones**,
  **branches**, **forks** y **pull requests**

## Detalles logísticos

* Self-paced: 7 hrs
* Presencial: 11 hrs
* Total horas: 18

## Producto

El producto en el que trabajaras es una pequeña librería para desarrollo de
interfaces (UI Library), teniendo en cuenta el performance y consumo de memoria,
además de buscar que pueda ser reusable para cualquier proyecto y mantenible a
lo largo del tiempo. Este producto tendrá una aplicación visual en la creación
de una réplica de _[Pinterest](http://pinterest.com/)_.

Participar en el proyecto involucra lo siguiente:

* Tener una cuenta en GitHub
* Hacer un fork del repositorio
* Mapear y dividir el trabajo con tu equipo
* Implementar las funcionalidades listadas en el repo del proyecto
* Enviar pull requests
* Hacer code review y merges
* Presentar el trabajo final con una demo ante jurado

***

## Syllabus

### Lección 01: [Presentación del curso](01-intro/00-welcome.md)

15min (presencial)

Antes de empezar con la teoría o la práctica, en esta "pre-lección" se hará una
presentación sobre el curso en sí, los objetivos de aprendizaje, el proyecto, la
metodología de aprendizaje, requisitos previos y metodología de evaluación.

### Lección 02: [Entorno y metodología de trabajo](02-env)

45min (presencial)

Durante esta sesión nos aseguraremos que todas tienen git y node instalado,
acceso al repo, su propio fork, ...

#### Lesson plan

| Orden | Tipo     | Duración | Descripción
|-------|----------|----------|-------------
|   1   | workshop |   30min  | [Entorno: Git + GitHub](02-env/00-git+github.com)
|   2   | workshop |   15min  | [Entorno: Node.js + npm](02-env/00-node+npm.com)

### Lección 03: [ECMAScript 6](03-es6)

45min (presencial)

JavaScript es el lenguaje de programación, pero la especificación (estándar) del
lenguaje es ECMAScript, en esta lección veremos algunas nuevas características
de JS a nivel de sintaxis para comenzar a utilizarlo a lo largo del curso.

| Orden | Tipo      | Duración | Descripción
|-------|-----------|----------|-------------
|   1   |  lectura  |   3min   | [ECMAScript 2015](03-es6/00-overview.md)
|   2   |  lectura  |   5min   | [Block Scoped Declarations](03-es6/01-block-scoped-declarations.md)
|   3   |  lectura  |   5min   | [Template Strings](03-es6/02-template-strings.md)
|   4   |  workshop |   10min  | [Ejercicios](03-es6/03-exercises.md)
|   5   |  lectura  |   5min   | [Destructuring](03-es6/04-destructuring.md)
|   6   |  lectura  |   7min   | [Arrow Functions](03-es6/05-arrow-functions.md)
|   7   |  workshop |   10min  | [Ejercicios](03-es6/06-exercises.md)

### Lección 04: [Fundamentos de JavaScript](04-foundations)

1hr (self-paced)

Si bien los fundamentos de JavaScript se vieron desde el primer curso de
Laboratoria, ahora profundizaremos en entender todo lo que sucede por detrás, de
esta manera veremos un poco de compiladores y profundización en los temas como
`tipos de datos`, `operadores`, `objetos preconstruidos`, etc.

| Orden | Tipo     | Duración  | Descripción
|-------|----------|-----------|------------
|   1   | lectura  |   20min   | [Fundamentos](04-foundations/00-overview.md)
|   2   | lectura  |   15min   | [Variables, Tipos de Datos y Operadores](04-foundations/01-variables-and-data-types.md)
|   3   | lectura  |   15min   | [Control de Flujo](04-foundations/02-control-flow.md)
|   4   | lectura  |   10min   | [Objetos Preconstruidos](04-foundations/03-built-in-objects.md)
|   5   | workshop |   20min   | [Ejercicios](04-foundations/04-exercises.md)

### Lección 05: [Funciones](05-functions)

1hr (presencial)

Veremos a profundidad el tema de funciones, aprovechando que JavaScript tiene
una orientación por la programación funcional desde su diseño, características
importantes como asignar funciones a una variable, pasar como parámetro de otra
función, cambiar el scope de variables, asignar como valor de una propiedad de
un objeto, etc.

| Orden | Tipo     | Duración  | Descripción
|-------|----------|-----------|-------------
|   1   | lectura  |   15min   | [Intro](05-functions/00-overview.md)
|   2   | lectura  |   15min   | [Funciones](05-functions/01-functions.md)
|   3   | workshop |   15min   | [Ejercicios](05-functions/02-exercises.md)
|   4   | lectura  |   15min   | [Scope](05-functions/03-scope.md)
|   5   | workshop |   15min   | [Ejercicios](05-functions/04-exercises.md)

### Lección 06: [Estructura de Datos](06-data-structures)

40min (presencial)

En ES5, las estructuras de datos por defecto eran Objetos y Arreglos, los cuales
profundizaremos en esta lección, sin embargo, en ES6 se agregan ciertas
estructura de datos que veremos como sacar provecho de ellas.

| Orden | Tipo     | Duración  | Descripción
|-------|----------|-----------|-------------
|   1   | lectura  |   20min   | [Estructura de Datos](06-data-structures/00-overview.md)
|   2   | lectura  |   20min   | [Objetos](06-data-structures/01-objects.md)
|   3   | workshop |   20min   | [Ejercicios](06-data-structures/02-exercises.md)
|   4   | lectura  |   15min   | [Arreglos](06-data-structures/03-arrays.md)
|   5   | workshop |   20min   | [Ejercicios](06-data-structures/04-exercises.md)

### Lección 07: [Manejo de Excepciones](07-manejo-de-excepciones)

30min (self-paced)

El manejo de errores es importante dentro de todo desarrollo de software, y mas
aun cuando se piensa en construir un producto que se espera sea reusable y
mantenible. En esta lección veremos cómo manejar errores en las diversas partes
de nuestro código.

| Orden | Tipo  | Duración  | Descripción
|-------|------ |-----------|-------------
|   1   |lectura|   10min   | [Modo Estricto](07-manejo-de-excepciones/00-modo-estricto.md)
|   2   |lectura|   10min   | [try...catch](07-manejo-de-excepciones/01-try-catch.md)

### Lección 08: [Document Objet Model (DOM)](#)

Cuando el navegador obtiene el HTML de una página, construye un modelo de la
estructura del documento y lo usa para dibujar la página en la pantalla. Esta
representación del documento es accedido a través de JavaScript y hace posible
agregar interactividad a nuestros sitios web, aun así, es necesario tener en
cuenta el performance del navegador.

| Orden | Tipo | Duración | Descripción
|-------|------|----------|-------------
|   1   |      |   Xmin   | [Recorrido del DOM](#)
|   2   |      |   Xmin   | [Manipulación del DOM](#)
|   3   |      |   Xmin   | [Redibujo del navegador](#)

### Lección 09: [Manejo de Eventos](#)

Manipular el HTML a través del DOM es genial, sin embargo, en el desarrollo de
aplicaciones web, estas alteraciones se realizan luego de cierta interacción
por parte del usuario a través de `eventos`. En esta lección nos enfocaremos en
entender aspectos importantes del comportamiento de eventos y como manejarlos.

| Orden | Tipo | Duración | Descripción
|-------|------|----------|-------------
|   1   |      |   Xmin   | [Manejador de Eventos](#)
|   2   |      |   Xmin   | [Bubbling vs. Capturing](#)
|   3   |      |   Xmin   | [this vs. event.target](#)

### Lección 10: [jQuery](#)

jQuery es una librería enfocada a hacer la manipulación del DOM más sencilla
entre otras funcionalidades, en esta lección no veremos la sintaxis de las
propiedades y métodos que esta librería nos brinda, sino, veremos aspectos
importantes para mejorar el performance en el uso de esta librería además de
consideraciones para el encapsulamiento de código a través de la creación de
`plugins`.

| Orden | Tipo | Duración | Descripción
|-------|------|----------|-------------
|   1   |      |   Xmin   | [Selectores](#)
|   2   |      |   Xmin   | [Manejo del DOM](#)
|   3   |      |   Xmin   | [CSS](#)
|   4   |      |   Xmin   | [Creación de Plugin](#)

## Autor(es) / Colaboradores

* Belén Recabal
* Iván Medina

## Libros

* [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do),
  Douglas Crockford, O'Reilly Media
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS), Kyle Simpson,
  O'Reilly Media
* [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](https://www.amazon.com/Effective-JavaScript-Specific-Software-Development/dp/0321812182/ref=as_li_ss_tl?ie=UTF8&redirect=true&linkCode=ll1&tag=eejs-20&linkId=4c5500843ce7dc958e290bdaeebd739b),
  David Herman, 2013
* [JavaScript: The Definitive Guide](http://shop.oreilly.com/product/9780596805531.do),
  David Flanagan, O'Reilly Media

## Benchmarks

Incluir una lista de cursos similares que sirvan como referencia.

## Lecturas complementarias

Incluir una lista de _capítulos de libros_, _blog posts_, _videos_, y otros
recursos como links a wikipedia, documentación, ...
