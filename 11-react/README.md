# React

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

En este curso continuarás construirás un Single Page App (SPA), usando React,
JSX, Babel, Webpack y Redux.

***Tags***: `react`, `components`, `ui`, `stateless`, `HOCs`, `babel`,
`encapsulamiento`, `modularización`, `jsx`, `webpack`, `redux`

## Público objetivo

Este curso está dirigido a personas con conocimientos previos de **programación
y desarrollo web**, que quieren aprender nuevas herramientas que les permitan
desarrollar interfaces web de una manera más **ágil**, **modular** y
**sostenible en el tiempo**.

## Requerimientos previos

Para poder llevar adelante este curso sin frustración, es recomendable los
siguientes conocimientos previos:

* Manejo de línea de comandos (\*nix) y git
* JavaScript functional: es5, inmutabilidad, node y npm
* Desarrollo web standard: html y dom + css

También debes haber completado el curso **JavaScript Funcional**.

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

## Evaluación

En este curso no tendremos exámenes, tu puntaje final será conformado en un 60%
por el puntaje de tu producto y tu equipo y el 40% restante será determinado por
tu desempeño personal.

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

## Producto

Durante este curso construirás un "Single page app" con las siguientes
características:

* Estar desarrollada íntegramente en `ES6` y empaquetada de manera automatizada
  con `babel` o `webpack`
* Utilizando `React` y `Redux`
* Con por lo menos 10 componentes que especifiquen todas sus props, 3 reducers
  no atomicos (JSON) y 3 actions
* Contar con scripts `run`, `build` y `deploy`, que se encarguen de correr,
  empaquetar y desplegar la aplicación respectivamente.
* Despeglado en Github pages
* Haber administrado y documentado todo el proceso de creación de la aplicación
  en github.
* Al día de la demo, la aplicación deberá estar publicada en una URL accesible
  universalmente.
* No es necesario implementar rutas
* No es necesario implementar persistencia
* No es necesario implementar conexiones remotas

## Syllabus

### Unidad 01: [Intro a React y JSX](01-intro)

En esta primera unidad veremos qué hace exactamente `React`, cómo integrarlo en
tiempo cero en una página web existente y cómo construir interfaces con el.

React puede desarrollarse en ES5, pero por su naturaleza declarativa, esto es
muy engorroso. Es por eso que `React` usa `JSX` como su `templating language`
por defecto.

En esta unidad también introduciremos `JSX`, qué beneficios introduce, por qué
es una pieza fundamental de `React`. Además construiremos nuestros primeros
componentes "de verdad".

|  # | Tipo      | Formato    | Duración | Descripción
|----|-----------|------------|----------|------------
| 00 | seminario | guiado     |    5min  | Apertura
| 01 | lectura   | self-paced |    4min  | ¿Qué es React?
| 02 | lectura   | self-paced |   12min  | Instalación y uso
| 03 | práctica  | self-paced |   10min  | Ejercicio: Nuestra primera interfaz
| 04 | lectura   | self-paced |    4min  | JSX Basics and expressions
| 05 | práctica  | self-paced |   10min  | Ejercicio: Migrar a JSX
| 06 | lectura   | self-paced |   10min  | Renderizado condicional
| 07 | lectura   | self-paced |   10min  | Listas y `key`s
| 08 | seminario | guiado     |   40min  | Re-cap
| 09 | seminario | guiado     |    5min  | Cierre

### Unidad 02: [Proyecto: Kickstart](02-workshop)

Es hora de convertir a tu proyecto en un proyecto React!

En este primer taller del proyecto nos centraremos en definir el alcance del
proyecto, organizar los equipos, decidir qué productos construir, e identificar
las tareas que tú y tu equipo deben realizar para cumplir con el objetivo del
curso.

### Unidad 03: [Babel y Webpack](03-babel-and-webpack)

Ahora que ya has tenido la oportunidad de ver lo básico de `React` en acción,
en esta unidad veremos `Babel` y `Webpack`, que son dos herramientas muy
comunmente usadas junto con `React`. `Babel` nos permite transpilar nuestro
código y `Webpack` empaquetar nuestra aplicación.

|  # | Tipo      | Formato    | Duración | Descripción
|----|-----------|------------|----------|------------
| 00 | seminario | guiado     |   10min  | Apertura
| 01 | lectura   | self-paced |   10min  | Babel basics
| 02 | lectura   | self-paced |    5min  | JSX Externo
| 03 | lectura   | self-paced |   10min  | Precompile
| 04 | lectura   | self-paced |   15min  | Webpack config
| 05 | lectura   | self-paced |   10min  | Modularización
| 06 | seminario | guiado     |   10min  | Cierre

### Unidad 04: [Componentes](04-components)

Gracias a los parámetros nombradors y al *desestructuring*, ya hemos aprendido
como especificar nuestras `props` en la signatura misma de nuestros componentes.
En esta lección nos vamos a enfocar la especificación de sus tipos, opcionalidad
y valores por defectos.

Luego analizaremos la propiedad especial `children` y como manipularla con
`.map` y `.filter`.

|  # |  Tipo     | Formato    | Duración | Descripción
|----|-----------|------------|----------|------------
| 00 | seminario | guiado     |   15min  | Apertura
| 01 | lectura   | self-paced |   10min  | Props: `propTypes` y `defaultProps`
| 02 | práctica  | self-paced |   10min  | Ejercicio: `propTypes` y `defaultProps`
| 03 | lectura   | self-paced |   10min  | `children` y `React.Children`
| 04 | práctica  | self-paced |   10min  | Ejercicio: usando `children`
| 05 | seminario | guiado     |   10min  | Re-cap
| 06 | lectura   | self-paced |   10min  | Higher-order components (HOC)
| 07 | lectura   | self-paced |   10min  | Componentes presentacionales vs contenedores
| 08 | seminario | guiado     |   10min  | Cierre

### Unidad 05: [Proyecto: Revisión de código, Hackeo y QA](05-workshop)

A partir de ahora ya es sólo profundizar en los conceptos aprendidos, practicar
y enfocarte en tu producto.

Durante esta sesión realizaremos nuestra primera revisión del código.
Identificaremos los retos a resolver durante la siguiente semana y podremos
hacer todas las preguntas que tengamos al equipo técnico.

Repensaremos los problemas pendientes y pasados con los nuevos conceptos que
hemos aprendido. Vamos a empezar a convertir a nuestra aplicación, en una
aplicación verdaderamente profesional.

### Unidad 06: [Estado global](06-global-state)

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

|  # |  Tipo     | Formato    | Duración | Descripción
|----|-----------|------------|----------|------------
| 00 | seminario | guiado     |   15min  | Apertura
| 01 | lectura   | self-paced |   10min  | Redux
| 02 | lectura   | self-paced |   10min  | Ejercicio: Paso 1 - Jerarquía de componentes
| 03 | lectura   | self-paced |   10min  | Ejercicio: Paso 2 - Versión estática
| 04 | lectura   | self-paced |   10min  | Ejercicio: Paso 3 - Diseño del `state`
| 05 | lectura   | self-paced |   10min  | Ejercicio: Paso 4 - Definición de `actions`
| 06 | lectura   | self-paced |   10min  | Ejercicio: Paso 5 - Desarrollo de `reducers`
| 07 | seminario | guiado     |   10min  | Cierre

### Unidad 07: [React OOP: ciclo de vida, estado interno y refs](07-oop)

`React` define sólo 9 métodos muy simples para controlar el ciclo de vida de los
componentes. En esta lección nos empaparemos de la compacta documentación de
React.

Luego analizaremos casos en los que necesitamos que los componentes tengan un
estado propio y encapsulado.

Y por último veremos casos en los que a dos componentes no les alcanza con
compartir un estado, sino que necesitan una referencia explícita de uno a otro.

|  # |  Tipo     | Formato    | Duración | Descripción
|----|-----------|------------|----------|------------
| 00 | seminario | guiado     |   15min  | Apertura
| 01 | lectura   | self-paced |   15min  | Ciclo de vida y estado local
| 02 | lectura   | self-paced |   10min  | `refs`
| 03 | práctica  | self-paced |   20min  | Ejercicio: cuenta regresiva
| 04 | seminario | guiado     |   10min  | Cierre

### Unidad 08: [Proyecto: Revisión de código y QA](08-workshop)

Durante estas sesión realizaremos nuestra segunda y ante-ultima revisión del
código, veremos si hemos cumplido o no con lo planeado, y por qué.

Decidiremos si tenemos tiempo de terminar todo, y si no es asi, priorizaremos
las tareas que mayor efecto tengan en nuestro producto final.

### Unidad 09: [build y deploy scripts](09-build-tools)

Durante esta sesión revisaremos unas estrategias sencillas para hacer que tu día
a día desarrollando tu proyecto, sea un poco más placentero.

Intentaremos entender qué son las `tasks` (tareas), qué hacen exactamente estas
3 tareas en particular y qué rol cumplen en cada etapa del software, desde el
desarrollo a la publicación.

Nos enfocaremos en el uso de `npm scripts` para correr nuestras tareas y
`github pages` para publicar nuestro código.

|  # |  Tipo     | Formato    | Duración | Descripción
|----|-----------|------------|----------|------------
| 00 | seminario | guiado     |   10min  | Apertura
| 01 | lectura   | self-paced |    5min  | Desarrollo, empaquetado y depliegue
| 02 | práctica  | self-paced |   15min  | Hands-on: Crear scripts `build` y `deploy`
| 03 | seminario | guiado     |   10min  | Cierre

### Unidad 10: [Proyecto: Revisión de código, QA y Tips para demos](10-workshop)

Durante estas sesión realizaremos nuestra útlima revisión de código, donde ya
deberías haber cerrado tu proyecto, y deberías estar solamente ajustando
detalles, enfocado en tu demo.

Y tendrás una última oportunidad de aprovechar al máximo de nuestro equipo
técnico, y resolver dudas de último minuto.

|  # |  Tipo     | Formato | Duración | Descripción
|----|-----------|---------|----------|------------
| 00 | seminario | guiado  |   10min  | Apertura
| 01 | taller    | guiado  |   45min  | Revisión de código
| 02 | taller    | guiado  |   45min  | QA
| 03 | seminario | guiado  |   30min  | Tips para que tu demo sea un éxito
| 04 | seminario | guiado  |   10min  | Cierre

### Unidad 11: [Día de la demo](11-demos)

Llegó el gran día, durante el día de la demo, cada equipo contará con 10 minutos
para hablar de su proyecto, 5 mins para hacer la demo y luego 5 mins para
preguntas del jurado y los miembros de los otros equipos.

El orden de presentación se determinará aleatoriamente y se dará a conocer el
mismo día.

Los jurados contarán con una tabla de punteo, para valuar a los equipos y sus
demos.

Luego de cotejados los puntos, se establecerá un equipo ganador (y si podemos
dar premios baratos pero cheveres estaria genial, e incluimos un 2ndo premio).

***

## Autor(es) / Colaboradores

* Mariano Crowe (autor)
* Lupo Montero (coordinador)

## Libros

* [Learning React](http://shop.oreilly.com/product/0636920049579.do)
* [React: Up & Running: Building Web Applications](http://shop.oreilly.com/product/0636920042266.do)

## Benchmarks

* [React fundamentals - reacttraining.com](https://reacttraining.com/online/react-fundamentals)
* [Getting started with React - thinkster.io](https://thinkster.io/tutorials/getting-started-with-react)
* [React JS Tutorials Playlist - LearnCode.academy en YouTube](https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)
* [arkency/reactjs_koans - GitHub](https://github.com/arkency/reactjs_koans)
* [What people are saying about React - @mikechau on GiHub](https://github.com/mikechau/react-primer-draft#what-people-are-saying-about-react)
* [Powering up with React - codeschool.com](https://www.codeschool.com/courses/powering-up-with-react)
* [reactforbeginners.com](https://reactforbeginners.com/)
* [Learn React.js Basics - lynda.com](https://www.lynda.com/React-js-tutorials/Learn-React-js-Basics/519668-2.html)
* [React - frontendmasters.com](https://frontendmasters.com/courses/react/)

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
