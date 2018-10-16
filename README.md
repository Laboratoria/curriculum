# Bootcamp @Laboratoria

[![Build Status](https://travis-ci.org/Laboratoria/curricula-js.svg?branch=master)](https://travis-ci.org/Laboratoria/curricula-js)

## Introducción

Nuestro _bootcamp_ es un programa de formación inmersivo de 6 meses enfocado en
**Front End Development** y **UX Design**. Nuestra metodología de aprendizaje
trata de imitar el entorno de trabajo real y se centra en completar una serie de
_proyectos_ de complejidad gradualmente creciente.

Cada _proyecto_ se acompaña con una serie de _tópicos_ sugeridos incluyendo
materiales de aprendizaje por cuenta propia (_self-paced_).

Los proyectos son evaluados por _coaches_ y _pares_ (_peers_) usando una
[rúbrica](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml#)
estandarizada que siempre incluye componentes _generales_, _habilidades
blandas_, _habilidades técnicas_ y _ux_.

## Mapa de aprendizaje

El _mapa de aprendizaje/proyectos_ se divide en 4 _etapas_: **Admisión**,
**Common Core**, **Deep dive** (tracks de Front End Dev y UX Designer) y
**Capstone**.

```text
                         => Front End Dev => Capstone
                       //
Admisión => Common Core
                       \\
                         => UX Designer => Capstone
```

### Etapa 0: Admission

La etapa de _admisión_ empieza _antes_ de ser aceptada a nuestro Bootcamp. Al
final de cada _proceso de admisión_ invitaremos a candidatas seleccionadas a
completar un _proyecto_ presencialmente en una de nuestras sedes.

#### Proyecto: Trivia (necesita refactorización)

* Duración estimada: 1 semana.
* Equipos: 1 estudiante
* Tópicos: [JavaScript Basics](topics/javascript/01-basics),
  [HTML Intro](topics/html/01-intro), [CSS](topics/css/01-css).

### Etapa 1: Common core

Una vez admitida a nuestro Bootcamp, todas comienzan con el _common core_. En
esta etapa completarás los siguientes _proyectos_ en orden, cada uno
desbloqueando el siguiente. Al final del _common core_ las estudiantes
participan en una serie de _hackathones_ trabajando en proyectos más chicos
propuestos por empresas/empleadores externos.

#### Proyecto: [Cipher](projects/01-cipher)

En este _proyecto_ implementarás una aplicación web basada un boilerplate que
permita cifrar y descifrar texto usando la técnica del _cifrado césar_.

El objetivo principal de aprendizaje de este proyecto es tener tu primera
experiencia construyendo una aplicación web usando tus conocimientos de **User
Experience Design** y de **JavaScript**. Esto incluye diseñar un producto
pensando en los usuarios, construir una interfaz, escuchar eventos básicos del
DOM, escribir lógica para llevar a cabo el cifado/descifrado, tests unitarios
básicos para comprobar (y documentar) dicha lógica, y finalmente manipulación
del DOM para mostrar (escribir) los resultados.

* Duración estimada: 2 semanas.
* Equipos: 1 estudiante
* Tópicos: [Flow control](topics/javascript/02-flow-control),
  [Strings](topics/javascript/06-strings), [Testing](topics/testing),
  [HTML](topics/html), [SCM](topics/scm), [Shell](topics/shell),
  [Intro a UX Design](https://github.com/Laboratoria/curricula-ux/tree/master/00-topics/00-intro-ux).

#### Proyecto: [Data Dashboard](projects/02-data-dashboard)

En este proyecto tendrás tu primer acercamiento a transformar data en
información creando tu primer **data dashboard**.

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
_interfaz web_ donde podamos visualizar y manipular data.

Esperamos que puedas pensar en el usuario, entender cuál es la mejor manera de
visualizar la data según sus necesidades, y plasmar todo eso en tu diseño en la
web.

Además, este proyecto se debe "resolver" en parejas, por lo que un objetivo
importante es ganar experiencia en trabajos colaborativos con entrega grupal.

* Duración estimada: 3 semanas.
* Equipos: 2 estudiantes
* Tópicos: [Arrays](topics/javascript/04-arrays),
  [Objects](topics/javascript/05-objects), [DOM](topics/browser/02-dom),
  [XHR/fetch](topics/browser/04-xhr), [Visual Design](https://github.com/Laboratoria/curricula-ux/tree/master/00-topics/02-diseno-visual).

#### Proyecto: [Social Network](projects/03-social-network)

En este _proyecto_ partimos del supuesto que una empresa nos ha pedido hacer un
prototipo para una _red social_, y nos dan a elegir un tema que nos interese
para la _red social_ entre algunas sugerencias.

El objetivo principal de aprendizaje de este proyecto es construir un sitio web
[_responsive_](https://github.com/Laboratoria/curricula-js/tree/master/topics/css/02-responsive)
con más de una vista (página), y en el que podamos leer y escribir datos, además
de entender las necesidades de los usuarios para los que crearás el producto.

* Duración estimada: 3 semanas.
* Equipos: 3 estudiantes
* Tópicos: **Mobile first**, [Responsive](topics/css/02-responsive), URL, HTTP,
  [Async](topics/javascript/08-async), Múltiples vistas, Routing, Escritura de
  datos, `localStorage`, [Firebase](https://firebase.google.com/).

#### Proyecto: [Coworking Visitors](projects/03-visitors)

En este _proyecto_ tendrás que implementar un sistema web de registro de
visitantes para un _coworking_.

El objetivo principal de este proyecto es que pongas en práctica todo lo
aprendido durante el common core, con foco en la calidad, trabajando en un
equipo multifuncional y presentando tu solución a una audiencia.

* Duración estimada: 1 semana
* Equipos: 3 estudiantes
* Tópicos: Todo lo visto hasta este punto.

### Etapa 2: Deep dive

Después del _common core_ cada grupo se separa en _tracks especializados_:
_JavaScripters_ y _UXers_. Durante esta etapa las estudiantes trabajarán en dos
proyectos en paralelo.

#### Front End Dev (JavaScripters)

Tópicos comunes (independientes de proyecto): [Paradigmas](topics/paradigms),
[JavaScript Funcional](topics/functional).

##### Proyecto: [Applying for a job](projects/04-job-application)

En este _proyecto_ simulamos una postulación a una empresa como Front-end
Developer.

El objetivo principal de este reto es que conozcas un proceso de reclutamiento
para una posición de Front-End development y estés preparada para enfrentar los
meses de colocación laboral. El 100% de las preguntas, retos, desafíos, etc. que
se plantean en este proyecto son casos reales de empresas que han contratado y/o
entrevistado a egresadas de Laboratoria.

* Duración estimada: ?
* Equipos: 1 estudiante
* Tópicos: Todo lo visto en el _common core_.

##### Proyecto: [Burger Queen](projects/04-burger-queen)

En este _proyecto_ tendrás que implementar un sistema para que lxs meserxs de un
restautante (_Burger Queen_) puedan tomar nota de los pedidos usando una
_tablet_.

El objetivo principal de aprendizaje de este proyecto es construir una
_interfaz web_ usando un _framework_ (React, Vue o Angular).

Como objetivo secundario, la implementación debe además seguir las
recomendaciones para PWAs (_Progressive Web Apps_), lo cual incluye conceptos
como **offline**.

* Duración estimada: 3 semanas.
* Equipos: 1-2 estudiantes
* Tópicos: Frameworks, [React](topics/react), Vue, Angular, PWA, Offline first,
  Service Workers, Serverless.

##### Proyecto: [Markdown Links](projects/04-md-links)

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

El objetivo práctico de este proyecto es que aprendas cómo crear tu propia
**librería** (o biblioteca - _library_) en JavaScript.

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrollador porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otros developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

* Duración estimada: 3 semanas.
* Equipos: 1 estudiante
* Tópicos: Node.js, NPM, File System, Semver, Parsing, Markdown, CLI, HTTP,
  Módulos, [Errores](topics/javascript/09-errors).

#### UX

##### Proyecto: (tbd)

* Duración estimada: 4 semanas.
* Tópicos: (tbd)

### Etapa 3: Capstone / Elective

El último mes del Bootcamp - más o menos, cada una avanza a su ritmo - se espera
que construyas tu proyecto _final_ o _capstone_, que puede estar basado en los
tópicos/tecnologías vistas hasta el momento, o pueden cubrir algunos de los
tópicos sugeridos (electivos).

#### Front End Dev (JavaScripters)

##### Proyecto: Capstone

* Duración estimada: 2 semanas.
* Tópicos: Node server?, Mobile?, Open Source?, Data?, WebOps?, Backend? (tbd)

#### UX

##### Proyecto: (tbd)

* Duración estimada: 4 semanas.
* Tópicos: (tbd)

***

## Índice de tópicos

En uso (`v2.x`):

* [JavaScript](topics/javascript)
* [HTML](topics/html)
* [CSS](topics/css)
* [Browser](topics/browser)
* [SCM: Git + GitHub](topics/scm)
* [UNIX Shell](topics/shell)
* [Paradigmas de programación](topics/paradigms)
* [JavaScript Funcional](topics/functional)
* [React](topics/react)
* [Intro a UX Design](https://github.com/Laboratoria/curricula-ux/tree/master/00-topics/00-intro-ux)
* [Visual Design](https://github.com/Laboratoria/curricula-ux/tree/master/00-topics/02-diseno-visual)

Work in progress:

* Node
* Redux

Wish list:

* Algorithms
* Angular
* Data Structures
* Databases
* Editors
* ESNext
* Modules
* Serverless
* Styleguides
* The web stack

***

## Contribuciones

Toda contribución es **gratamente bienvenida**.

Pero **POR FAVOR** no olvides leer detalladamente la
[guía para contribuidores](CONTRIBUTING.md) antes de enviar un PR.

## Licencia & Copyright

Todos los materiales de este repo son (c) 2017-2018 [Laboratoria](http;//laboratoria.la/).

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

Este trabajo está publicado bajo la licencia [Creative commons
Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
