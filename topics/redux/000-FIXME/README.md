# Manejo de estado avanzado con Redux y React

[:construction: Este curso está en desarrollo :construction:]

El manejo de estado en una aplicación es crítico, y desgraciadamente muchas
veces se hace de forma desordenada y sin mucha consistencia. `Redux` nos ofrece
un contenedor de estado que nos ayudará a manejar el estado de forma más
consistente y predecible.

Como referencia, `Redux` es una evolución de ideas presenadas por `Flux` de
Facebook.

Tags: `redux`, `react`, `react-redux`, `reselect`, `redux-thunk`, `redux-saga`,
`redux-observable`, `rxjs`, `jest`, `enzyme`

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
* Debes haber completado el curso [11-react](https://github.com/Laboratoria/curricula-js/tree/master/11-react).

## Aprenderás

* A crear aplicaciones con `create-react-app`
* A conectar componentes de `React` con un store de `Redux`
* A crear un store de `Redux` y diseñar sus reductores (reducers)
* A dieseñar e implementar acciones y _action creators_
* A usar `redux-thunk` y `redux-saga` para manejar acciones asíncronas
* A usar `redux-observable` y `rxjs` como alternativa para manejar asincronía
* A usar `reselect` para implementar selectores y filtros así como a memoizar
  data precomputada
* A testear tus componentes y reductores usando `jest` y `enzyme`

## Producto

Durante este curso construirás un _Single Page App_ (SPA) con las siguientes
características:

* Estar desarrollada íntegramente en `ES6` y empaquetada de manera automatizada
  con `babel` y `webpack`
* Utilizando `react` y `redux`
* Con por lo menos 6 componentes que especifiquen todas sus props usando
  `prop-types`
* Por lo menos 1 componente _conectado_ al store de `redux`
* 3 reducers y por lo menos 3 acciones que desencadenen asíncronía (usando
  `thunk`, `saga` u `observable`).
* Contar con scripts `run`, `build` y `deploy`, que se encarguen de correr,
  empaquetar y desplegar la aplicación respectivamente.
* Despeglado en Github pages
* Haber administrado y documentado todo el proceso de creación de la aplicación
  en GitHub.
* Al día de la demo, la aplicación deberá estar publicada en una URL accesible
  universalmente.
* No es necesario implementar rutas
* No es necesario implementar persistencia

## Syllabus

### Unidad 01: Estado global vs estado de componentes

* Global state vs component state
* The Single Immutable State Tree
* Describing State Changes with Actions

### Unidad 02: Taller - proyecto

* Creación de equipos
* Selección de producto
* Brainstorming, storyboarding
* Identificación y división de tareas

### Unidad 03: Acciones asíncronas

* redux-thunk
* redux-saga
* redux-observable
* rxjs

### Unidad 04: Taller - proyecto

* Crear app con create-react-app
* Añadir dependencias
* Crear componentes (`App`, `TopBar`, `Main`, `List`, `ListItem`)
* Crear reductores
* Crear acciones
* Crear store
* Conectar `List` a store

### Unidad 05: Selectores, data precomputada, filtros y ordenado

* selectores
* filtrado y ordenado
* data precomputada
* reselect

### Unidad 06: Taller - proyecto

* crear selectores
* añadir filtrado y ordenado
* memoizar data precomputada

### Unidad 07: Code review, QA y tips para demos

Durante estas sesión realizaremos nuestra útlima revisión de código, donde ya
deberías haber cerrado tu proyecto, y deberías estar solamente ajustando
detalles, enfocada en tu demo.

Tendrás también una última oportunidad de aprovechar al máximo a nuestro equipo
técnico y resolver dudas de último minuto.

### Unidad 08: Taller - demos

Cada equipo tendrá 10 minutos para presentar su demo (5min presentación + 5min
preguntas).

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

* [Lupo Montero](https://github.com/lupomontero)
* Otros colaboradores?

## Libros

Cada curso debe de estar acompañado de una lista detallada de libros
relacionados con los temas tratados en el curso.

## Benchmarks

* [Getting Started with Redux - egghead.io](https://egghead.io/courses/getting-started-with-redux)

## Lecturas complementarias

Incluir una lista de capítulos de libros, blog posts, videos, y otros recursos
como links a wikipedia, documentación, ...
