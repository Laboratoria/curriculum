# 11. React

**React** es una tecnología realmente revolucionaria, que no sólo nos permite crear interfaces a través de lindos componentes, sino que representa un cambio de paradigma que va mucho más allá del navegador o incluso la web.

A medida que la web ha ido evolucionando y hemos pasado de páginas estáticas a aplicaciones web cada vez más **interactivas y dinámicas**, sumado eso a la aparición de los **clientes móbiles**, ha sido necesaria la creación de nuevas estrategias y herramientas, que nos permitan lidiar con esta complejidad creciente en el desarrollo de interfaces, de una manera **ordenada**, **uniforme** y **sostenible**.

**React** representa una auténtica revolución, no sólo por la **practicidad** y **simplicidad** de su enfoque, sino también porque nos permite usar **una misma tecnología** para desarrollar interfaces, no importa si es una página web estática, una single-page app, una aplicación de escritorio o una aplicación móvil.

En este curso continuarás con el video juego que construimos en el curso
anterior, pero esta vez lo re-escribiremos usando React, y añadiremos
funcionalidad como "high scores", ...

***Tags***: `react`, componentes, `ui`, `stateless`, `HOCs`, `babel`, `webpack`, encapsulamiento, modularización, `jsx`

## Público objetivo

Este curso está dirigido a personas con conocimientos previos de **programación y desarrollo web**, que quieren aprender nuevas herramientas que les permitan desarrollar interfaces web de una manera más **ágil**, **modular** y **sostenible en el tiempo**.

## Requerimientos previos

Para poder llevar adelante este curso sin frustración, es recomendable los siguientes conocimientos previos:
* Manejo de línea de comandos (\*nix) y git
* Javascript functional: es5, inmutabilidad, node y npm
* Desarrollo web standard: html y dom + css

También debes haber completado el curso [10-funcional](#).

## Aprenderás

* Fundamentos de **React**:
  - Virtual DOM
  - One-way data binding
  - Learn once, write anywhere
* Componentes `stateless` (sin estado)
* **ES2015**: Utiliza las últimas especificaciones y extensiones de javascript (es2015) de manera "universal", a través de la transpilación y el uso de polyfills. Herramientas: `yarn`, `webpack`, `babel`.
* **JSX**: Un lenguaje que extiende a javascript, permitiendo la inclusión de estructuras declarativas para construir interfaces. Herramientas: `webpack`, `react`.
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
En este curso proponemos una especia de "simulacro" de la vida real. Un enfoque orientado al producto, desarrollando nuestro proyecto como se hace hoy por hoy en los equipos de trabajo profesionales.

Haremos foco en el aprendizaje de React como herramienta profesional para el desarrollo de interfaces (en este caso web), pero además practicaremos otras capacidades, como pueden ser el análisis, la capacidad de trabajar en equipo y auto-gestionarse, las prácticas de documentación, capacidad de comunicarse para expresar puntos de vista e ideas, etc.

Todo esto buscaremos aprenderlo practicando, haciendo, golpéandonos la cabeza contra el teclado, conversando con nuestrxs compañerxs, consultando a nuestrxs tutorxs y los recursos online que ellxs nos recomienden, y principalmente, dedicando muchas horas a desarrollar un producto del que podamos sentirnos orgullosxs.

### Evaluación
En este curso no tendremos exámenes, tu puntaje final será conformado en un 60% por el puntaje de tu producto y tu equipo y el 40% restante será determinado por tu desempeño personal.

Para determinar el puntaje de tu equipo / producto contaremos con sesiones períodicas de revisión de código durante todo el proceso y luego con el desempeño del producto durante el dia de la demo, donde será evaluado por el equipo técnico y el resto de los equipos.

Tu desempeño personal estará determinado por tu participación dentro de las sesiones presenciales, tu actividad en github (escribiendo código, comentando, creando issues, ...), tu actividad en slack/discourse/so (haciendo y/o contestando preguntas), etc.

Todos los equipos deberán exponer sus resultados durante el día de la demo, independientemente del estado de completitud del producto. Aquellos equipos que no hayan completado sus productos, tendrán un período de gracia para hacerlo.

## Producto

Convertir video juego del curso [10-funcional](#) en una single app con las siguientes extensiones:
* Texto de introducción al juego
* High-scores
* ... (Depende de [#30](https://github.com/Laboratoria/curricula-js/issues/30))

Y además deberá contar con los siguientes requermientos técnicos:
- Estar desarrollada íntegramente en es6 y react, y empaquetada con webpack
- Contar con scripts `run`, `build` y `deploy`, que se encarguen de correr, empaquetar y desplegar la aplicación respectivamente.
- Haber administrado y documentado todo el proceso de creación de la aplicación en github.
- Al día de la demo, la aplicación deberá estar publicada en una URL accesible universalmente.

## Syllabus

### Lesson 1: [Presentación del curso](01-intro.md)

15min (presencial)

Antes de comenzar, en esta "pre-lección" se hará una presentación sobre el curso en sí, los objetivos de aprendizaje, el proyecto a entregar al fin del curso, la metodología de aprendizaje, requisitos previos y metodología de evaluación.

#### Lesson plan

| Orden |  Tipo      | Duración | Descripción
|-------|------------|----------|------------
|   1   | charla     |   15min  | 


### Lesson 2: [Intro a React](#)

40min (self-paced)

En esta primera lección veremos qué hace exactamente React. Veremos cómo integrarlo en tiempo cero en una página web existente y cómo construir interfaces con el.

Analizaremos su "propuesta", estructura y herramientas básicas.

#### Lesson plan

| Orden |  Tipo  | Duración | Descripción
|-------|--------|----------|------------
|   1   | texto  |   15min  | Conceptos básicos de React
|   2   | texto  |    5min  | Instalación y uso
|   4   | video  |    5min  | Nuestro primer componente
|   5   | code   |   10min  | Ejercicio: Nuestro primer componente
|   6   | qa     |    5min  | Re-cap


### Lesson 3: [JSX, Babel y React](#)

25min (self-paced)

React puede desarrollarse en es5, pero por su naturaleza declarativa, esto es muy engorroso. Es por eso que React usa JSX como su `templating language` por defecto.

En esta lección aprenderemos qué es JSX, qué beneficios introduce, por qué es una pieza fundamental de React y cómo se integra con `babel` y `webpack` (un transpilador y una herramienta de empaquetado, respectivamente). Además construiremos nuestros primeros componentes e instalaremos algunas herramientas que nos permitan debuggear nuestro código.

#### Lesson plan

| Orden |  Tipo  | Duración | Descripción
|-------|--------|----------|------------
|   1   | texto  |   10min  | El ecosistema React: JSX, Babel y Webpack
|   1   | video  |   4min   | Integrando todo
|   2   | code   |   10min  | Ejercicio: Nuestro primer componente empaquetado
|   3   | qa     |    5min  | Re-cap


### Lesson 4: [Componentes (`stateless`) y `props`](#)

1h (self-paced)

En esta lección vamos a aprender al detalle qué es, cómo se declara y cómo se usa un Componente. Veremos en qué se convierte nuestro código jsx una vez empaquetado, para entender mejor la relación entre react, js y jsx.

Luego veremos cómo podemos pasarle parámetros a los componentes a través de sus `props`.

Revisaremos todas las herramientas que nos da React para definir, especificar y validar estas props, y por qué es tan importante hacerlo.

#### Lesson plan

| Orden |  Tipo  | Duración | Descripción
|-------|--------|----------|------------
|   1   | texto  |    5min  | Componentes stateless: Creando interfaces con funciones.
|   2   | texto  |   10min  | One-direction dataflow y props
|   3   | code   |   10min  | Ejercicio: Composición de componentes stateless
|   4   | texto  |    5min  | Props: propTypes y defaultProps
|   5   | code   |   10min  | Ejercicio: propTypes y defaultProps
|   6   | texto  |   5min   | `children` property
|   7   | code   |   10min  | Ejercicio: usando .map y .filter
|   8   | qa     |    5min  | Re-cap


### Workshop 1: [Proyecto React: Kickstart, QA y Hackeo](#)

2h (presencial)

Es hora de convertir a tu proyecto en un proyecto React!

Durante la primera hora de esta sesión te encargarás de identificar las tareas que tú y tu equipo deben realizar para cumplir con el objetivo del curso. Unas vez identificadas estas tareas, las organizarán en el tiempo de duración del curso y se las distribuirán de manera equitativa, según un criterio que ustedes establezcan y acuerden usar.

Durante la segunda hora, deberían comenzar a programar. Aprovecha al máximo que nuestro equipo estará a tu disposición para que los bombardees a preguntas y solicitudes de recomendaciones.

A partir de ahora comienza a contar el reloj.


### Lesson 5: [HOCs y estado global](#)

1h (self-paced)

Hasta aquí podemos decir que React puede ser una muy buena herramienta, pero realmente no ofrece ningún valor diferencial en relación a otras que hacen algo parecido.

En esta lección vamos a sumergirnos en lo que realmente hace a React y sus amigos, un conjunto de herramientas **único**: un nuevo patrón de diseño de aplicaciones, que ha desencadenado una auténtica revolución y el surgimiento de todo un ecosistema de herramientas.

Veremos cómo diseñar nuestras aplicaciones orientadas al flujo de datos en una sola dirección, extrayendo el estado de nuestros componentes a un estado global y disparando cambios de manera homogénea a través de acciones.

#### Lesson plan

| Orden |  Tipo  | Duración | Descripción
|-------|--------|----------|------------
|   1   | texto  |    7min  | Higher order components (HOC)
|   2   | code   |    8min  | Ejercicio: Higher order components (HOC)
|   3   | texto  |    7min  | Data injection y middlewares
|   4   | code   |    8min  | Ejercicio: Data injection y middlewares
|   5   | texto  |    7min  | `function` props (aka actions)
|   6   | code   |    8min  | Ejercicio: Actions
|   3   | code   |   10min  | Ejercicio de integración
|   5   | qa     |    5min  | Re-cap


### Lesson 6: [React OOP: ciclo de vida, estado interno y referencias](#)

1h (self-paced)

React define sólo 9 métodos muy simples para controlar el ciclo de vida de los componentes. En esta lección nos empaparemos de la compacta documentación de React.

Luego analizaremos casos en los que necesitamos que los componentes tengan un estado propio y encapsulado.

Y por último veremos casos en los que a dos componentes no les alcanza con compartir un estado, sino que necesitan una referencia explícita de uno a otro.


#### Lesson plan

| Orden |  Tipo  | Duración | Descripción
|-------|--------|----------|------------
|   1   | texto  |    5min  | Componentes modelados como objetos
|   2   | code   |    5min  | Ejercicio: Componentes modelados como objetos
|   3   | texto  |    7min  | Local mutable state
|   4   | code   |    8min  | Ejercicio: Local mutable state
|   5   | texto  |   10min  | Ciclo de vida de un componente
|   6   | code   |   15min  | Ejercicio de integración: file upload component with progress bar
|   7   | qa     |    5min  | Re-cap


### Workshop 2: [Proyecto React: Revisión de código, Hackeo y QA](#)

2h (presencial)

A partir de ahora ya es sólo profundizar en los conceptos aprendidos, practicar y enfocarte en tu producto.

Durante esta sesión realizaremos nuestra primera revisión del código. Identificaremos los retos a resolver durante la siguiente semana y podremos hacer todas las preguntas que tengamos al equipo técnico.

Repensaremos los problemas pendientes y pasados con los nuevos conceptos que hemos aprendido. Vamos a empezar a convertir a nuestra aplicación, en una aplicación verdaderamente profesional.

### Lesson 7: [run, build y deploy scripts](#)

30min (self-paced)

Durante esta sesión revisaremos unas estrategias sencillas para hacer que tu día a día desarrollando tu proyecto, sea un poco más placentero.

Intentaremos entender qué son las `tasks` (tareas), qué hacen exactamente estas 3 tareas en particular y qué rol cumplen en cada etapa del software, desde el desarrollo a la publicación.

Nos enfocaremos en el uso de `npm scripts` para correr nuestras tareas y `github pages` para publicar nuestro código

#### Lesson plan

| Orden |  Tipo  | Duración | Descripción
|-------|--------|----------|------------
|   1   | texto  |    5min  | Software life cycle: dev, build, deploy
|   2   | texto  |    5min  | Npm as a task runner
|   3   | texto  |    5min  | Github pages
|   5   | code   |   15min  | Ejercicio: Crear scripts de start, build y deploy


### Workshop 3: [Meetup](#)

1.5h (presencial)

Para distendernos un poco del proyecto, y abrir un poco la cancha, haremos una sesión de preguntas y respuestas abiertas, donde lxs alumnxs podrán hacer preguntas sobre tecnología, pero en un ámbito general, no restringido a lo que estamos aprendiendo.

Pueden ser problemas que tengan en el trabajo, en proyectos personales o mera curiosidad. Contaremos con algunos hackers senior que les darán sus impresiones y recomendaciones.


### Workshop 4: [Proyecto React: Revisión de código y QA](#)

1 (presencial)

Durante estas sesión realizaremos nuestra segunda y ante-ultima revisión del código, veremos si hemos cumplido o no con lo planeado, y por qué.

Decidiremos si tenemos tiempo de terminar todo, y si no es asi, priorizaremos las tareas que mayor efecto tengan en nuestro producto final.


### Workshop 5 [Tips para que tu demo sea un éxito](#)

30min (presencial)

Estés o no acostumbradx a hablar en público, siempre es bueno contar con algunas ayudas para no cometer errores comunes a la hora de hacer una presentación.

Durante esta lección revisaremos un todo-list muy sencillo de cómo hacer una presentación atractiva.


### Workshop 6: [Proyecto React: Revisión de código y QA](#)

1 (presencial)

Durante estas sesión realizaremos nuestra útlima revisión de código, donde ya deberías haber cerrado tu proyecto, y deberías estar solamente ajustando detalles, enfocado en tu demo.

Y tendrás una última oportunidad de aprovechar al máximo de nuestro equipo técnico, y resolver dudas de último minuto.


### [Día de la demo](#)

2h (presencial)

Llegó el gran día, durante el día de la demo, cada equipo contará con 10 minutos para hablar de su proyecto, 5 mins para hacer la demo y luego 5 mins para preguntas del jurado y los miembros de los otros equipos.

El orden de presentación se determinará aleatoriamente y se dará a conocer el mismo día.

Los jurados contarán con una tabla de punteo, para valuar a los equipos y sus demos.

Luego de cotejados los puntos, se establecerá un equipo ganador (y si podemos dar premios baratos pero cheveres estaria genial, e incluimos un 2ndo premio).

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


## Lecturas complementarias

* [React - página oficial](https://facebook.github.io/react/)
* [React patterns](http://reactpatterns.com)
* [Functional React - Get your App outta my Component](https://medium.com/@adamterlson/functional-react-series-part-1-get-your-app-outta-my-component-92656ae13e25?ref=mybridge.co)
* [React in patterns](http://krasimirtsonev.com/blog/article/react-js-in-design-patterns)
* [Everything can be a component](https://speakerdeck.com/pedronauck/reactjs-keep-simple-everything-can-be-a-component) https://hackernoon.com/understanding-state-and-props-in-react-94bc09232b9c
* [30 days of react](https://github.com/fullstackreact/30-days-of-react)
* [Awesome React](https://github.com/enaqx/awesome-react)
* [Recursos para aprender React en español](https://github.com/jlobos/react-espanol)


