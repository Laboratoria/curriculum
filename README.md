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
* Tópicos: [JavaScript Basics](topics/javascript/01-basics),
  [HTML Intro](topics/html/01-intro), [CSS](topics/css/01-css).

### Etapa 1: Common core

Una vez admitida a nuestro Bootcamp, todas comienzan con el _common core_. En
esta etapa completarás los siguientes _proyectos_ en orden, cada uno
desbloqueando el siguiente. Al final del _common core_ las estudiantes
participan en una serie de _hackathones_ trabajando en proyectos más chicos
propuestos por empresas/empleadores externos.

#### Proyecto: [Cipher](projects/01-cipher)

* Duración estimada: 2 semanas.
* Equipos: 1 estudiante
* Tópicos: [Flow control](topics/javascript/02-flow-control),
  [Strings](topics/javascript/06-strings), [Testing](topics/testing),
  [HTML](topics/html), [SCM](topics/scm), [Shell](topics/shell),
  [Intro a UX Design](https://github.com/Laboratoria/curricula-ux/tree/master/00-topics/00-intro-ux).

#### Proyecto: [Data Dashboard](projects/02-data-dashboard)

* Duración estimada: 3 semanas.
* Equipos: 2 estudiantes
* Tópicos: [Arrays](topics/javascript/04-arrays),
  [Objects](topics/javascript/05-objects), [DOM](topics/browser/02-dom),
  [XHR/fetch](topics/browser/04-xhr), [Visual Design](https://github.com/Laboratoria/curricula-ux/tree/master/00-topics/02-diseno-visual).

#### Proyecto: [Social Network](projects/03-social-network)

* Duración estimada: 3 semanas.
* Equipos: 3 estudiantes
* Tópicos: **Mobile first**, [Responsive](topics/css/02-responsive),
  [URL](topics/the-web/04-url), [HTTP](topics/the-web/05-http),
  [Async](topics/javascript/08-async), Múltiples vistas, Routing, Escritura de
  datos, `localStorage`, [Firebase](https://firebase.google.com/).

### Etapa 2: Deep dive

Después del _common core_ cada grupo se separa en _tracks especializados_:
_JavaScripters_ y _UXers_. Durante esta etapa las estudiantes trabajarán en dos
proyectos en paralelo.

#### Front End Dev (JavaScripters)

Tópicos comunes (independientes de proyecto): [Paradigmas](topics/paradigms),
[JavaScript Funcional](topics/functional).

##### Proyecto: [Burger Queen](projects/04-burger-queen) (wip)

* Duración estimada: 4 semanas.
* Equipos: 2-3 estudiantes
* Tópicos: **Offline first**, Service Workers, Módulos, Serverless, Cloud
  Functions, Frameworks, React, Redux, Vue, Angular.

##### Proyecto: [Markdown Links](projects/04-md-links) (wip)

* Duración estimada: 4 semanas.
* Equipos: 1 estudiante
* Tópicos: Node.js, NPM, File System, Semver, Parsing, Markdown, CLI, HTTP,
  Módulos, [Errores](topics/javascript/09-errors),
  [Depuración](topics/javascript/10-debugging).

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

* Duración estimada: 4 semanas.
* Tópicos: Node server?, Mobile?, Open Source?, Data?, WebOps?, Backend (Rails,
  Django, Laravel)? (tbd)

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
* [Intro a UX Design](https://github.com/Laboratoria/curricula-ux/tree/master/00-topics/00-intro-ux)
* [Visual Design](https://github.com/Laboratoria/curricula-ux/tree/master/00-topics/02-diseno-visual)

Work in progress:

* Algorithms
* Angular
* Chatbot?
* Data Structures
* Databases
* Editors
* ESNext
* Modules
* Node
* React
* Redux
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
