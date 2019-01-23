# Redux

El manejo de estado en una aplicación es crítico, y desgraciadamente muchas
veces se hace de forma desordenada y sin mucha consistencia. `Redux` nos ofrece
un contenedor de estado que nos ayudará a manejar el estado de forma más
consistente y predecible.

Como referencia, `Redux` es una evolución de ideas presenadas por `Flux` de
Facebook.

En este curso veremos un ejemplo práctico **paso a paso** de como diseñar e
implementar una aplicación usando React y Redux.

Tags: `redux`, `react`, `react-redux`

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
* Deberías haber completado el curso [react](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/react).

## Aprenderás

* A conectar componentes de `React` con un store de `Redux`
* A crear un store de `Redux` y diseñar sus reductores (reducers)
* A diseñar e implementar acciones y _action creators_
* A aplicar todos estos conceptos juntos en el contexto del desarrollo de una aplicación

## Syllabus

### Unidad 01: [Conceptos básicos](01-basics)

En esta primera unidad revisaremos los 3 conceptos básicos de `redux`,
que articulan todo su funcionamiento:

- Una sóla fuente de verdad
- El estado es de "sólo-lectura"
- Los cambios de estado, se realizan a través de funciones puras

### Unidad 02: [Diseño y mockup](02-design-and-setup)

Una vez vistos los conceptos básicos, en esta unidad arrancamos con una
implementación de ejemplo, paso a paso, empezando con el _boceto
visual/conceptual_ (storyboarding) y el set up necesario para trabajar con
Redux y React.

### Unidad 03: [Store, state y connect](03-store)

En esta unidad continuamos con el ejemplo guiado, pasando a ahora a _diseñar_ el
estado de nuestra aplicación, implementarlo con un store y conectarlo a nuestros
componentes de React.

### Unidad 04: [Actions y reducers](04-actions-and-reducers)

Ahora que ya tenemos una descripción del estado de la aplicación, es hora de
centrarnos en las acciones (_actions_) y reductores (_reducers_) que nos
permitan expresar qué cambios pueden ocurrir y cómo se reflejan en el estado.

### Unidad 05: [Cierre](05-closing)

Por último recapitularemos todos los conceptos visitados, cuáles son
las conclusiones y recomendaciones generales

***

## Autor(es) / Colaboradores

* Mariano Crowe (autor)
* Lupo Montero (coordinador)

## Benchmarks

* Learn Redux from its creator:
  - [Part 1: Getting Started with Redux](https://egghead.io/series/getting-started-with-redux)
    (30 free videos)
  - [Part 2: Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
    (27 free videos)
* [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

## Lecturas complementarias

* [Getting Started with Redux - egghead.io](https://egghead.io/courses/getting-started-with-redux)
* [Redux - react community](https://github.com/reactjs/redux/blob/master/README.md)
* [Redux documentation - redux.js.org](http://redux.js.org/)
* [Getting Started with Redux - scotch.io](https://scotch.io/bar-talk/getting-started-with-redux-an-intro)
* [Getting Started with Redux - egghead.io](https://egghead.io/courses/getting-started-with-redux)
* [Getting Started With React Redux - codementor.io](https://www.codementor.io/mz026/getting-started-with-react-redux-an-intro-8r6kurcxf)
