# 11. React

**React** es una tecnología realmente revolucionaria, que no sólo nos permite
crear interfaces a través de lindos componentes, sino que representa un cambio
de paradigma que va mucho más allá del navegador o incluso la web.

A medida que la web ha ido evolucionando y hemos pasado de páginas estáticas a
aplicaciones web cada vez más **interactivas y dinámicas**, sumado eso a la
aparición de los **clientes móbiles**, ha sido necesaria la creación de nuevas
estrategias y herramientas, que nos permitan lidiar con esta complejidad
creciente en el desarrollo de interfaces, de una manera **ordenada**,
**uniforme** y **sostenible**.

**React** representa una auténtica revolución, no sólo por la **practicidad** y
**simplicidad** de su enfoque, sino también porque nos permite usar **una misma
tecnología** para desarrollar interfaces, no importa si es una página web
estática, una single-page app, una aplicación de escritorio o una aplicación
móvil.

En este curso continuarás con el video juego que construimos en el curso
anterior, pero esta vez lo re-escribiremos usando React, y añadiremos
funcionalidad como "high scores", ...

***Tags***: `react`, componentes, `ui`, `stateless`, `HOCs`, `babel`,
encapsulamiento, modularización, `jsx`

## Público objetivo

Este curso está dirigido a personas con conocimientos previos de **programación
y desarrollo web**, que quieren aprender nuevas herramientas que les permitan
desarrollar interfaces web de una manera más **ágil**, **modular** y
**sostenible en el tiempo**.

## Requerimientos previos

Para poder llevar adelante este curso sin frustración, es recomendable los
siguientes conocimientos previos:

* Manejo de línea de comandos (\*nix) y git
* Javascript functional: es5, inmutabilidad, node y npm
* Desarrollo web standard: html y dom + css

También debes haber completado el curso [10-funcional](https://github.com/Laboratoria/curricula-js/tree/master/10-functional).

## Aprenderás

* Fundamentos de **React**:
  - Virtual DOM
  - One-way data binding
  - Learn once, write anywhere
* Componentes `stateless` (sin estado)
* **ES2015**: Utiliza las últimas especificaciones y extensiones de javascript
  (es2015) de manera "universal", a través de la transpilación y el uso de
  polyfills. Herramientas: `yarn`, `FIXME: nodemon`, `babel`.
* **JSX**: Un lenguaje que extiende a javascript, permitiendo la inclusión de
  estructuras declarativas para construir interfaces.
* Definición de propiedades (`props`) para los componentes y sus tipos.
* Manejo de `state` global
* Componentes `statefull`:
  - Su ciclo de vida.
  - Manejo de `state` interno.
  - Referencias entre componentes (`refs`)

## Detalles logísticos

* Self-paced: x hrs
* Presencial: y hrs
* Total horas: z

## Formato del curso

En este curso proponemos una especia de "simulacro" de la vida real. Un enfoque
orientado al producto, desarrollando nuestro proyecto como se hace hoy por hoy
en los equipos de trabajo profesionales.

Haremos foco en el aprendizaje de React como herramienta profesional para el
desarrollo de interfaces (en este caso web), pero además practicaremos otras
capacidades, como pueden ser el análisis, la capacidad de trabajar en equipo y
auto-gestionarse, las prácticas de documentación, capacidad de comunicarse para
expresar puntos de vista e ideas, etc.

Todo esto buscaremos aprenderlo practicando, haciendo, golpéandonos la cabeza
contra el teclado, conversando con nuestrxs compañerxs, consultando a nuestrxs
tutorxs y los recursos online que ellxs nos recomienden, y principalmente,
dedicando muchas horas a desarrollar un producto del que podamos sentirnos
orgullosxs.

### Evaluación

En este curso no tendremos exámenes, tu puntaje final será conformado en un 60%
por el puntaje de tu producto y tu equipo y el 40% restante será determinado por
tu desempeño personal.

Para determinar el puntaje de tu equipo / producto contaremos con sesiones
períodicas de revisión de código durante todo el proceso y luego con el
desempeño del producto durante el dia de la demo, donde será evaluado por el
equipo técnico y el resto de los equipos.

Tu desempeño personal estará determinado por tu participación dentro de las
sesiones presenciales, tu actividad en github (escribiendo código, comentando,
creando issues, ...), tu actividad en slack/discourse/so (haciendo y/o
contestando preguntas), etc.

Todos los equipos deberán exponer sus resultados durante el día de la demo,
independientemente del estado de completitud del producto. Aquellos equipos que
no hayan completado sus productos, tendrán un período de gracia para hacerlo.

## Producto

Convertir video juego del curso [10-funcional](https://github.com/Laboratoria/curricula-js/tree/master/10-functional)
en una single app con las siguientes extensiones:

* Texto de introducción al juego
* High-scores
* ... (Depende de [#30](https://github.com/Laboratoria/curricula-js/issues/30))

Y además deberá contar con los siguientes requermientos técnicos:

* Estar desarrollada íntegramente en es6 y react, y empaquetada de manera
  automatizada con `babel` o `webpack`
* Contar con scripts `run`, `build` y `deploy`, que se encarguen de correr,
  empaquetar y desplegar la aplicación respectivamente.
* Haber administrado y documentado todo el proceso de creación de la aplicación
  en github.
* Al día de la demo, la aplicación deberá estar publicada en una URL accesible
  universalmente.

## Syllabus

### [Presentación del curso](00-presentacion/index.md)

15min (presencial)

Antes de comenzar, en esta "pre-lección" se hará una presentación sobre el curso
en sí, los objetivos de aprendizaje, el proyecto a entregar al fin del curso, la
metodología de aprendizaje, requisitos previos y metodología de evaluación.

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | charla     |   15min  |

### Lesson 1: [Intro a React](L01-intro/index.md)

60min (self-paced)

En esta primera lección veremos qué hace exactamente React. Veremos cómo
integrarlo en tiempo cero en una página web existente y cómo construir
interfaces con el.

Analizaremos su "propuesta", estructura y herramientas básicas.

#### Lesson plan

| Orden |  Tipo  | Duración | Descripción
|-------|--------|----------|------------
|   1   | texto  |    5min  | Conceptos básicos de React
|   2   | texto  |   20min  | Instalación y uso
|   3   | code   |   20min  | Ejercicio: Nuestra primera interfaz
|   4   | qa     |   15min  | Re-cap

### Lesson 2: [JSX](L02-jsx/index.md)

40min (self-paced)

React puede desarrollarse en es5, pero por su naturaleza declarativa, esto es
muy engorroso. Es por eso que React usa JSX como su `templating language` por
defecto.

En esta lección aprenderemos qué es `JSX`, qué beneficios introduce, por qué es
una pieza fundamental de `React`. Además construiremos nuestros primeros
componentes "de verdad".

#### Lesson plan

| Orden |     Tipo      | Duración | Descripción
|-------|---------------|----------|------------
|   1   | texto         |    5min  | Intro
|   2   | texto + code  |   10min  | Basics and expressions
|   3   | texto + code  |   10min  | Renderizado condicional
|   4   | texto + code  |   10min  | Listas y `key`s

### Lesson 3: [Babel](L03-babel/index.md)

30min (self-paced)

...

#### Lesson plan

| Orden |     Tipo      | Duración | Descripción
|-------|---------------|----------|------------
|   1   | texto + code  |   10min  | Babel basics
|   2   | texto + code  |    5min  | JSX Externo
|   3   | texto + code  |   10min  | Precompile


### Lesson 4: [Webpack](L04-webpack/index.md)

30min (self-paced)

...

#### Lesson plan

| Orden |     Tipo      | Duración | Descripción
|-------|---------------|----------|------------
|   1   | texto + code  |   15min  | Webpack config
|   2   | texto + code  |   10min  | Modularización

### Lesson 5: [Componentes (`stateless`) y sus `props`](L05-props/index.md)

50min (self-paced)

Gracias a los parámetros nombradors y al *desestructuring*, ya hemos aprendido
como especificar nuestras `props` en la signatura misma de nuestros componentes.
En esta lección nos vamos a enfocar la especificación de sus tipos, opcionalidad
y valores por defectos.

Luego analizaremos la propiedad especial `children` y como manipularla con
`.map` y `.filter`.

#### Lesson plan

| Orden |  Tipo  | Duración | Descripción
|-------|--------|----------|------------
|   1   | texto  |   10min  | Props: `propTypes` y `defaultProps`
|   2   | code   |   10min  | Ejercicio: `propTypes` y `defaultProps`
|   3   | texto  |   10min  | `children` property y `React.Children` utils
|   4   | code   |   10min  | Ejercicio: usando `children`
|   5   | qa     |   10min  | Re-cap

### Workshop 1: [Proyecto React: Kickstart, QA y Hackeo](#)

2h (presencial)

Es hora de convertir a tu proyecto en un proyecto React!

Durante la primera hora de esta sesión te encargarás de identificar las tareas
que tú y tu equipo deben realizar para cumplir con el objetivo del curso. Unas
vez identificadas estas tareas, las organizarán en el tiempo de duración del
curso y se las distribuirán de manera equitativa, según un criterio que ustedes
establezcan y acuerden usar.

Durante la segunda hora, deberían comenzar a programar. Aprovecha al máximo que
nuestro equipo estará a tu disposición para que los bombardees a preguntas y
solicitudes de recomendaciones.

A partir de ahora comienza a contar el reloj.

### Lesson 6: [HOCs y estado global](L06-hocs-global-state/index.md)

1.5h (self-paced)

Hasta aquí podemos decir que React puede ser una muy buena herramienta, pero
realmente no ofrece ningún valor diferencial en relación a otras que hacen algo
parecido.

En esta lección vamos a sumergirnos en lo que realmente hace a React y sus
amigos, un conjunto de herramientas **único**: un nuevo patrón de diseño de
aplicaciones, que ha desencadenado una auténtica revolución y el surgimiento de
todo un ecosistema de herramientas.

Veremos cómo diseñar nuestras aplicaciones orientadas al flujo de datos en una
sola dirección, separando nuestros componentes en dos categorías, definiendo el
estado de nuestros componentes con un estado global y disparando cambios de
manera homogénea a través de acciones con `redux`.

Luego haremos un ejemplo donde veremos desde el inicio al fin todas las etapas
de diseño e implementación de una librería de componentes con React y Redux.

#### Lesson plan

| Orden |  Tipo  | Duración | Descripción
|-------|--------|----------|------------
|   1   | texto  |   10min  | Higher-order components (HOC)
|   2   | texto  |   10min  | Redux
|   3   | texto  |   10min  | Componentes presentacionales vs Componentes contenedores
|   4   | texto  |   10min  | Ejercicio: Paso 1 - Jerarquía de componentes
|   5   | texto  |   10min  | Ejercicio: Paso 2 - Versión estática
|   6   | texto  |   10min  | Ejercicio: Paso 3 - Diseño del `state`
|   7   | texto  |   10min  | Ejercicio: Paso 4 - Definición de tus `actions`
|   8   | texto  |   10min  | Ejercicio: Paso 5 - Desarrollo de tus `reducers`

### Lesson 7: [React OOP: ciclo de vida, estado interno y refs](L07-oop/index.md)

45 min (self-paced)

React define sólo 9 métodos muy simples para controlar el ciclo de vida de los
componentes. En esta lección nos empaparemos de la compacta documentación de
React.

Luego analizaremos casos en los que necesitamos que los componentes tengan un
estado propio y encapsulado.

Y por último veremos casos en los que a dos componentes no les alcanza con
compartir un estado, sino que necesitan una referencia explícita de uno a otro.

#### Lesson plan

| Orden |  Tipo  | Duración | Descripción
|-------|--------|----------|------------
|   1   | texto  |   15min  | Ciclo de vida y estado local
|   2   | texto  |   10min  | `refs`
|   3   | code   |   20min  | Ejercicio: cuenta regresiva

### Workshop 2: [Proyecto React: Revisión de código, Hackeo y QA](#)

2h (presencial)

A partir de ahora ya es sólo profundizar en los conceptos aprendidos, practicar
y enfocarte en tu producto.

Durante esta sesión realizaremos nuestra primera revisión del código.
Identificaremos los retos a resolver durante la siguiente semana y podremos
hacer todas las preguntas que tengamos al equipo técnico.

Repensaremos los problemas pendientes y pasados con los nuevos conceptos que
hemos aprendido. Vamos a empezar a convertir a nuestra aplicación, en una
aplicación verdaderamente profesional.

### Lesson 8: [build y deploy scripts](L08-build-tools/index.md)

30min (self-paced)

Durante esta sesión revisaremos unas estrategias sencillas para hacer que tu día
a día desarrollando tu proyecto, sea un poco más placentero.

Intentaremos entender qué son las `tasks` (tareas), qué hacen exactamente estas
3 tareas en particular y qué rol cumplen en cada etapa del software, desde el
desarrollo a la publicación.

Nos enfocaremos en el uso de `npm scripts` para correr nuestras tareas y
`github pages` para publicar nuestro código

#### Lesson plan

| Orden |  Tipo  | Duración | Descripción
|-------|--------|----------|------------
|   1   | texto  |    5min  | Software life cycle: desarrollo, empaquetado y depliegue
|   5   | code   |   15min  | Hands-on: Crear scripts `build` y `deploy`

### Workshop 3: [Proyecto React: Revisión de código y QA](#)

1 (presencial)

Durante estas sesión realizaremos nuestra segunda y ante-ultima revisión del
código, veremos si hemos cumplido o no con lo planeado, y por qué.

Decidiremos si tenemos tiempo de terminar todo, y si no es asi, priorizaremos
las tareas que mayor efecto tengan en nuestro producto final.

### Workshop 4: [Tips para que tu demo sea un éxito](#)

30min (presencial)

Estés o no acostumbradx a hablar en público, siempre es bueno contar con algunas
ayudas para no cometer errores comunes a la hora de hacer una presentación.

Durante esta lección revisaremos un todo-list muy sencillo de cómo hacer una
presentación atractiva.

### Workshop 5: [Proyecto React: Revisión de código y QA](#)

1 (presencial)

Durante estas sesión realizaremos nuestra útlima revisión de código, donde ya
deberías haber cerrado tu proyecto, y deberías estar solamente ajustando
detalles, enfocado en tu demo.

Y tendrás una última oportunidad de aprovechar al máximo de nuestro equipo
técnico, y resolver dudas de último minuto.

### [Día de la demo](#)

2h (presencial)

Llegó el gran día, durante el día de la demo, cada equipo contará con 10 minutos
para hablar de su proyecto, 5 mins para hacer la demo y luego 5 mins para
preguntas del jurado y los miembros de los otros equipos.

El orden de presentación se determinará aleatoriamente y se dará a conocer el
mismo día.

Los jurados contarán con una tabla de punteo, para valuar a los equipos y sus
demos.

Luego de cotejados los puntos, se establecerá un equipo ganador (y si podemos
dar premios baratos pero cheveres estaria genial, e incluimos un 2ndo premio).

## Autor(es) / Colaboradores

* Mariano Crowe (autor)
* Lupo Montero (coordinador)
* Otros colaboradores?

## Libros

* [Learning React](http://shop.oreilly.com/product/0636920049579.do)
* [React: Up & Running: Building Web Applications](http://shop.oreilly.com/product/0636920042266.do)

## Benchmarks

* https://reacttraining.com/online/react-fundamentals
* https://thinkster.io/tutorials/getting-started-with-react
* https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b
* https://github.com/arkency/reactjs_koans
* https://github.com/mikechau/react-primer-draft#what-people-are-saying-about-react
* https://www.codeschool.com/courses/powering-up-with-react
* https://reactforbeginners.com/
* https://www.lynda.com/React-js-tutorials/Learn-React-js-Basics/519668-2.html
* https://frontendmasters.com/courses/react/

## Lecturas complementarias

* [React resources](https://x-team.com/react-resources/)
* [React - página oficial](https://facebook.github.io/react/)
* [React patterns](http://reactpatterns.com)
* [Functional React - Get your App outta my Component](https://medium.com/@adamterlson/functional-react-series-part-1-get-your-app-outta-my-component-92656ae13e25?ref=mybridge.co)
* [React in patterns](http://krasimirtsonev.com/blog/article/react-js-in-design-patterns)
* [Everything can be a component](https://speakerdeck.com/pedronauck/reactjs-keep-simple-everything-can-be-a-component)
* [30 days of react](https://github.com/fullstackreact/30-days-of-react)
* [Awesome React](https://github.com/enaqx/awesome-react)
* [Recursos para aprender React en español](https://github.com/jlobos/react-espanol)
