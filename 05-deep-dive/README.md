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
* **Buenas prácticas** en el uso de JavaScript
* A escribir código siguiendo una **guía de estilos**
* A **documentar** tu código/librería
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

### Unidade 01: [Como a internet funciona](00-how-the-web-works)

Esta unidad es una introdución a la web, el objetivo es tener claro algunos
conceptos sobre qué es la WWW (World Wide Web), qué es una  URL, HTTP y en
qué nos ayuda entender esto al momento de realizar una Web App.


### Unidad 02: [Ambiente de desenvolvimento](01-env)

Una vez introducido el curso y los retos, nos concentraremos en el entorno de
desarrollo, con una breve introducción/repaso de conceptos sobre `sh`, `git`,
`npm` y tu `editor` de texto favorito.


### Unidad 03: [Fundamentos de JavaScript](02-foundations)

Si bien los fundamentos de JavaScript se vieron desde el primer curso de
Laboratoria, ahora profundizaremos en entender todo lo que sucede por detrás, de
esta manera veremos un poco de compiladores y profundización en los temas como
`variables`, `valores`, `tipos de datos`, `control de flujo`, `funciones`,
`scope`, `arreglos`, `objetos`, `strings`, `built-ins`, ...

En esta unidad veremos tambien algunas nuevas características de ES6 a nivel de
sintaxis para comenzar a utilizarlo a lo largo del curso.


### Unidad 04: [Unit Testing / Pruebas unitarias](03-testing)

En este curso pondremos especial énfasis en el diseño orientado a pruebas (Test
Driven Development - TDD). En esta unidad podrás seguir los pasos necesarios
para escribir tus primeros tests y entender el valor tan grande que aportan.

Como herramientas de ejemplo usaremos `mocha`, `assert`, `chai` y `karma`.


### Unidad 05: [Autoaprendizagem - Browser APIs](04-browser-apis)

En esta unidad nos enfocaremos en las APIs que nos ofrece el navegador para
interactuar con el `DOM` así como algunos objetos globales como
`window.navigator`, `window.console`, `window.location`, `window.history` y
otras APIs introducidas por HTML5.


### Unidad 06: [Autoaprendizagem - jQuery](05-jquery)

jQuery es una librería enfocada a hacer la manipulación del DOM más sencilla
entre otras funcionalidades, en esta lección no veremos la sintaxis de las
propiedades y métodos que esta librería nos brinda, sino, veremos aspectos
importantes para mejorar el performance en el uso de esta librería además de
consideraciones para el encapsulamiento de código a través de la creación de
`plugins`.


### Unidad 07: [Desafio - Biblioteca](06-challenge)

***

## Evaluación

En este curso no tendremos exámenes, tu puntaje final será conformado en un 60%
por el puntaje de tu producto/reto y tu equipo y el 40% restante será
determinado por tu desempeño personal.

Para determinar el puntaje de tu equipo/producto contaremos con sesiones
períodicas de revisión de código durante todo el proceso y luego con el
desempeño del producto durante el día de la demo, donde será evaluado por el
equipo técnico y el resto de los equipos.

Tu desempeño personal estará determinado por tu participación dentro de las
sesiones presenciales, tu actividad en github (escribiendo código, comentando,
creando issues, ...), tu actividad en slack (haciendo y/o contestando
preguntas), etc.

Todos los equipos deberán exponer sus resultados durante el día de la demo,
independientemente del estado de completitud del producto. Aquellos equipos que
no hayan completado sus productos, tendrán un período de gracia para hacerlo.

Los ejercicios fuera de lo que es el proyecto/producto no serán calificados.

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
