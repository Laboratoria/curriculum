# Rehaciendo tu red social usando librerías y frameworks

## Preámbulo

[React](https://reactjs.org/), [Angular](https://angular.io/) y [Vue](https://vuejs.org/)
son algunos de los _frameworks_ de JavaScript más utilizados por lxs
desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir una _framework_ para nuestra interfaz, nos apoyamos en una serie de
convenciones e implementaciones _probadas_ y _documentadas_ para resolver un
problema común a toda interfaz web. Esto nos permite concentrarnos mejor
(dedicar más tiempo) en las caractrísticas _específicas_ de nuestra aplicación.

Cuando elegimos un _framework_ no solo importamos un pedacito de código para
reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, ...

Como desarrolladora Front-end, los _frameworks_ pueden resultarte de gran ayuda
para implementar rápidamente características de los proyectos en los que trabajes.

![caracoles](http://www.animated-photography.com/images/portfolio/full/Evolution.jpg)

## Introducción

En este proyecto tendrás la oportunidad de _re-escribir_ tu proyecto anterior de
la _red social_, pero esta vez usando un _framework_.

Creemos que la mejor manera de enfrentarte a estos _frameworks_ es
eliminando de la ecuación el hecho de que tengas que entender un proyecto desde
cero, su alcance, sus particularidads, el flujo, las validaciones, etc.
Concéntrate en aprender y utilizar estas nuevas tecnologías.

El alcance del proyecto y el detalle de sus características es exactamente
[el mismo que el original](https://github.com/Laboratoria/curricula-js/tree/v2.x/projects/03-social-network),
incluyendo la parte de Hacker Edition.

## Objetivos

El objetivo principal de aprendizaje es familiarizarse con el desarrollo web
usando el _framework_ elegido, y todo lo que ello conlleva: **documentación**,
**arquitectura**, **principios de diseño**, **paradigma**, **abstracciones**,
**vocabulario**, **herramientas**, **comunidad**, ...

Por otro lado, tener que _re-escribir_ un programa es una experiencia de
aprendizaje muy valiosa en sí misma, llevándonos a re-evaluar e iterar sobre
un producto o prototipo. Dada la velocidad a la que evoluciona la tecnología
web, es muy común tener que enfrentarse a este tipo de escenario donde decidimos
(o alguien decide por nosotros) que lo mejor para seguir evolucionando una
aplicación es re-escribirla usando un nuevo _framework_ o tecnología.

## Consideraciones generales

Este proyecto se debe "resolver" en duplas.

Discutan y pónganse de acuerdo sobre cuál de los proyectos van a hacer desde cero.
Si no se pueden poner de acuerdo en 10 minutos, [aquí hay algo que puede ayudar](https://justflipacoin.com/)

Investiguen un poco sobre estos tres _frameworks_ y elijan con cuál
quieren trabajar.

TBD

Para comenzar tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Parte obligatoria

Ver [03-social-network](https://github.com/Laboratoria/curricula-js/tree/v2.x/projects/03-social-network#parte-obligatoria).

## Hacker edition

Ver [03-social-network](https://github.com/Laboratoria/curricula-js/tree/v2.x/projects/03-social-network#hacker-edition).

## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

## Evaluación

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 3
| Nomenclatura/semántica | 3
| Funciones/modularidad | 2
| Estructuras de datos | 2
| Tests | 2
| **HTML** | |
| Validación | 3
| Estilo | 3
| Semántica | 3
| SEO | n/a
| **CSS** | |
| DRY | 3
| Responsive | 3
| **SCM** | |
| Git | 3
| GitHub | 3
| **CS** | |
| Lógica | 2
| Arquitectura | 2
| Patrones/paradigmas | n/a

### UX

| Habilidad | Nivel esperado |
|-----------|----------------|
| User Centricity | 3
| Entrevistas | 2 |
| Testing | 2
| User Flow | 2
| Jerarquía | 3
| Alineación | 3
| Contraste | 3
| Color | 3
| Tipografía | 3

### Habilidades Blandas

Para este proyecto esperamos que ya hayas alcanzado el nivel 3 en todas tus
habilidades blandas. Te aconsejamos revisar la rúbrica:

| Habilidad | Nivel esperado |
|-----------|----------------|
| Planificación y organización | 3
| Autoaprendizaje | 3
| Solución de Problemas | 3
| Dar y recibir feedback | 3
| Adaptabilidad | 3
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | 3
| Comunicación eficaz | 3
| Presentaciones | 3

***

## Pistas / Tips / Lecturas complementarias

* [The deepest reason why modern JavaScript frameworks exist](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445)
* [Should I use frameworks or libraries such as Angular, React, or VueJS or not?](https://dev.to/ericpaulbasbas/should-i-use-frameworks-or-libraries-such-as-angular-react-or-vuejs-or-not-3dp)

## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Definición del producto.
* [ ] Benchamark de las principales redes sociales.
* [ ] Resumen de entrevistas con usuarios.
* [ ] Link/screenshots prototipo de alta fidelidad.
* [ ] Conclusiones de pruebas del prototipo con usuarios.
* [ ] Conclusiones de pruebas con el producto en HTML.

### Pruebas / tests

* [ ] Tests unitarios cubren un mínimo del 70% de statements, functions, lines,
  y branches.
* [ ] Pasa tests (y linters) (`npm test`).

### Creación de cuenta (sign up)

* [ ] Permite crear cuenta.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [ ] Permite iniciar sesión.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Muro (wall/feed)

* [ ] Muestra _muro_.
* [ ] Permite publicar nuevos posts.
* [ ] Permite eliminar posts.
* [ ] Pide confirmación antes de borrar posts.
* [ ] Permite editar posts (in place).
* [ ] Permite filtrar posts por público/amigos.
* [ ] Permite marcar posts como _gustados_ (like).

### Despliegue

* [ ] webpack
* [ ] Configura entorno de desarrollo
* [ ] Configura entorno de producción