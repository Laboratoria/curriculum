# JS Deep Dive: Crea tu propia librería usando JavaScript

Programar en JavaScript te hace ver _cool_, conocer las particularidades del
lenguaje es aún mejor. Este curso no es una introducción a JavaScript, sino
una profundización en el lenguaje. Verás temas que probablemente ya conozcas
pero desde una perspectiva de performance y buenas prácticas conociendo ciertas
peculiaridades de JavaScript que lo hace distinto a los demás lenguajes de
programación.

El objetivo práctico de este curso es que aprendas como crear tu propia librería
(o biblioteca - _library_) en JavaScript. Como desarrolladorxs, estamos
constantemente usando _módulos_ de terceros, ya sean librerías, frameworks o la
_librería estándar_ (standard library) tanto del lenguaje en sí como el
entorno/motor de ejecución (el navegador, node.js, ...).

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrollador ya que te obliga a pensar en la interfaz (API) de tus módulos,
cómo serán usados por otras personas, ... y tener especial consideración en
peculiaridades del lenguaje, convenciones y buenas prácticas.

En este curso se presentarán una serie de retos que requieren la implementación
de una o más librerías.

Main tags: `types`, `operators`, `functions`, `objects`, `scope`, `closure`,
`execution-context`, `linter`.

## Público objetivo

Este curso asume que ya te has familiarizado con la programación en JavaScript y
quieres llevar tu conocimiento sobre el lenguage a otro nivel, entendiendo
sutilezas del lenguage e implicaciones de performance.

## Requerimientos previos

Experiencia básica usando JavaScript para manipular el DOM y familiaridad con
`git` y `GitHub`.

## Aprenderás

* Un poco de **historia sobre JavaScript/ECMAScript**
* A diseñar e implementar un **UI Library**
* A diseñar enfocado en **tests**
* Implicaciones de **performance** y uso de **memoria**
* **Buenas prácticas** en el uso de JavaScript
* Manejo de **errores**
* A escribir código siguiendo una **guía de estilos**
* A **documentar** tu código/librería
* A trabajar haciendo **pair programming**
* A sacarle el jugo a git y GitHub usando **issues**, **milestones**,
  **branches**, **forks** y **pull requests**

## Producto

El producto/reto en el que trabajaras es una pequeña librería para desarrollo de
interfaces (UI Library), teniendo en cuenta el performance y consumo de memoria,
además de buscar que pueda ser reusable para cualquier proyecto y mantenible a
lo largo del tiempo.

Participar en el proyecto involucra lo siguiente:

* Tener una cuenta en GitHub
* Formar un equipo de trabajo (en parejas)
* Elegir/proponer un reto
* Crear un repositorio en GitHub para alojar tu producto
* Mapear y dividir el trabajo con tu equipo
* Implementar las funcionalidades listadas en el repo del proyecto
* Enviar pull requests
* Hacer code review y merges
* Presentar el trabajo final con una demo

***

## Syllabus

### Unidad 01: [Reto](01-challenge)

Antes de empezar con la teoría o la práctica, en esta "pre-lección" se hará una
presentación sobre el curso en sí, los objetivos de aprendizaje, el proyecto, la
metodología de aprendizaje, requisitos previos y metodología de evaluación.

`challenges`, `teams`, `proposals`, ...

### Unidad 02: [Entorno de desarrollo](02-env)

`sh`, `git`, `npm`, `editor`

### Unidad 03: [Unit Testing / Pruebas unitarias](03-testing)

`mocha`, `assert`, `chai`, `karma`

<!--
### Unidad 04: [Paquetes y módulos](04-packages)

`package.json`, `require`, `module`, `exports`, `import`, `export`, ...

### Unidad 05: [Fundamentos de JavaScript](05-foundations)

Si bien los fundamentos de JavaScript se vieron desde el primer curso de
Laboratoria, ahora profundizaremos en entender todo lo que sucede por detrás, de
esta manera veremos un poco de compiladores y profundización en los temas como
`variables`, `valores`, `tipos de datos`, `control de flujo`, `funciones`,
`scope`, `arreglos`, `objetos`, `strings`, `built-ins`, ...

### Unidad 06: [Asincronía: Callbacks, eventos y promesas](06-async)

...

### Unidad 07: [Manejo de errores](07-errors)

...

### Unidad 08: [Browser APIs](08-browser-apis)

DOM, BOM, HTML5 APIs, ...

### Unidad 09: [Code reviews](09-code-reviews)

...

### Unidad 10: [Hacking y Demos](10-demos)

...
-->

<!--
### Unidad 03: [ECMAScript 6](03-es6)

JavaScript es el lenguaje de programación, pero la especificación (estándar) del
lenguaje es ECMAScript, en esta lección veremos algunas nuevas características
de JS a nivel de sintaxis para comenzar a utilizarlo a lo largo del curso.

### Unidad 05: [Funciones](05-functions)

Veremos a profundidad el tema de funciones, aprovechando que JavaScript tiene
una orientación por la programación funcional desde su diseño, características
importantes como asignar funciones a una variable, pasar como parámetro de otra
función, cambiar el scope de variables, asignar como valor de una propiedad de
un objeto, etc.

### Unidad 06: [Estructura de Datos](06-data-structures)

En ES5, las estructuras de datos por defecto eran Objetos y Arreglos, los cuales
profundizaremos en esta lección, sin embargo, en ES6 se agregan ciertas
estructura de datos que veremos como sacar provecho de ellas.

### Unidad 07: [Manejo de Excepciones](07-manejo-de-excepciones)

El manejo de errores es importante dentro de todo desarrollo de software, y mas
aun cuando se piensa en construir un producto que se espera sea reusable y
mantenible. En esta lección veremos cómo manejar errores en las diversas partes
de nuestro código.

### Unidad 08: [Document Objet Model (DOM)](08-dom)

Cuando el navegador obtiene el HTML de una página, construye un modelo de la
estructura del documento y lo usa para dibujar la página en la pantalla. Esta
representación del documento es accedido a través de JavaScript y hace posible
agregar interactividad a nuestros sitios web, aun así, es necesario tener en
cuenta el performance del navegador.

### Unidad 09: [Manejo de Eventos](09-event-handling)

Manipular el HTML a través del DOM es genial, sin embargo, en el desarrollo de
aplicaciones web, estas alteraciones se realizan luego de cierta interacción
por parte del usuario a través de `eventos`. En esta lección nos enfocaremos en
entender aspectos importantes del comportamiento de eventos y como manejarlos.

### Unidad 10: [jQuery](10-jquery)

jQuery es una librería enfocada a hacer la manipulación del DOM más sencilla
entre otras funcionalidades, en esta lección no veremos la sintaxis de las
propiedades y métodos que esta librería nos brinda, sino, veremos aspectos
importantes para mejorar el performance en el uso de esta librería además de
consideraciones para el encapsulamiento de código a través de la creación de
`plugins`.
-->

***

## Autor(es) / Colaboradores

* Belén Recabal
* Iván Medina
* Lupo Montero

## Libros

* [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do),
  Douglas Crockford, O'Reilly Media
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS), Kyle Simpson,
  O'Reilly Media
* [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](https://www.amazon.com/Effective-JavaScript-Specific-Software-Development/dp/0321812182/ref=as_li_ss_tl?ie=UTF8&redirect=true&linkCode=ll1&tag=eejs-20&linkId=4c5500843ce7dc958e290bdaeebd739b),
  David Herman, 2013
* [JavaScript: The Definitive Guide](http://shop.oreilly.com/product/9780596805531.do),
  David Flanagan, O'Reilly Media
