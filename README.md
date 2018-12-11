# Bootcamp @Laboratoria

[![All Contributors](https://img.shields.io/badge/all_contributors-45-orange.svg?style=flat-square)](#contributors)
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
**Common Core**, **Track** (Front End Dev y UX Designer) y **Electivos**.

```text
                         => Track de Front End Dev => Electivos
                       //
Admisión => Common Core
                       \\
                         => Track de UX Designer => Electivos
```

### Etapa 0: Admisión

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

#### Proyecto: [Data Lovers](projects/02-data-lovers)

En este proyecto tendrás tu primer acercamiento a transformar data en
información creando tu primera interfaz basada en data.

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

##### Proyecto: [Burger Queen WebApp](projects/04-burger-queen)

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

### Etapa 3: Capstone / Electivos

El último mes del Bootcamp - más o menos, cada una avanza a su ritmo - se espera
que construyas tu proyecto _final_ o _capstone_, que puede estar basado en los
tópicos/tecnologías vistas hasta el momento, o pueden cubrir algunos de los
tópicos sugeridos (electivos).

#### Front End Dev (JavaScripters)

##### Proyecto: [Burger Queen HTTP/JSON API](projects/05-bq-node)

El objetivo principal de aprendizaje es adquirir experiencia con **Node.js**
como herramienta para desarrollar _aplicaciones de servidor_, junto con una
serie de herramientas comunes usadas en este tipo de contexto (Express como
framework, MongoDB como base datos, ...).

En este proyecto tendrás que construir un servidor web que debe _servir_ `JSON`
sobre `HTTP`.

En este proyecto partimos de un _boilerplate_ que ya contiene una serie de
_endpoints_ (puntos de conexión o URLs) y nos piden completar la aplicación.
Esto implica que tendremos que partir por leer la implementación existente, y
familiarizarnos con el _stack_ elegido: [Node.js](https://nodejs.org/),
[Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/),
[mongoose](https://mongoosejs.com/), ...

* Duración estimada: 2 semanas.
* Equipos: 1 estudiante
* Tópicos: Node.js, Express, _rutas_ (_routes_), URLs, HTTP (verbs, request,
  response, headers, body, status codes...), JSON, MongoDB,
  _variables de entorno_, JWT (_JSON Web Tokens_)...

##### Proyecto: [Tic tac toe con React Native](projects/05-tic-tac-toe-rn)

El objetivo principal de aprendizaje es tener una primera experiencia en
desarrollo de aplicaciones nativas con React Native.

En este proyecto tendrás que construir una aplicación usando React Native y
Expo, y publicarla en tu cuenta de Expo, para que se pueda instalar en cualquier
dispositivo Android o iOS.

Para completar el proyecto tendrás que familiarizarte con conceptos como `View`,
`Text` o `TouchableOpacity`, además del flujo de desarrollo propio de apps
nativas.

* Duración estimada: 2 semanas.
* Equipos: 1 estudiante
* Tópicos: React Native, Expo, componentes nativos, touch events, ...

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

Muchas gracias a toda esta gente maravillosa ([leyenda de emojis](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/110297?v=4" width="100px;"/><br /><sub><b>Lupo Montero</b></sub>](https://www.youtube.com/user/lupomontero)<br />[💬](#question-lupomontero "Answering Questions") [🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Alupomontero "Bug reports") [💻](https://github.com/Laboratoria/curricula-js/commits?author=lupomontero "Code") [📖](https://github.com/Laboratoria/curricula-js/commits?author=lupomontero "Documentation") [💡](#example-lupomontero "Examples") [🤔](#ideas-lupomontero "Ideas, Planning, & Feedback") [🚇](#infra-lupomontero "Infrastructure (Hosting, Build-Tools, etc)") [🔌](#plugin-lupomontero "Plugin/utility libraries") [👀](#review-lupomontero "Reviewed Pull Requests") [⚠️](https://github.com/Laboratoria/curricula-js/commits?author=lupomontero "Tests") [🔧](#tool-lupomontero "Tools") [📹](#video-lupomontero "Videos") | [<img src="https://avatars3.githubusercontent.com/u/25286921?v=4" width="100px;"/><br /><sub><b>chamodev</b></sub>](https://github.com/chamodev)<br />[🤔](#ideas-chamodev "Ideas, Planning, & Feedback") [🌍](#translation-chamodev "Translation") | [<img src="https://avatars3.githubusercontent.com/u/9284690?v=4" width="100px;"/><br /><sub><b>Ivan Medina</b></sub>](https://www.facebook.com/medinadiazivan)<br />[💬](#question-ivandevp "Answering Questions") [🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Aivandevp "Bug reports") [💻](https://github.com/Laboratoria/curricula-js/commits?author=ivandevp "Code") [💡](#example-ivandevp "Examples") [👀](#review-ivandevp "Reviewed Pull Requests") | [<img src="https://avatars2.githubusercontent.com/u/211721?v=4" width="100px;"/><br /><sub><b>Mariano Crowe</b></sub>](https://github.com/merunga)<br />[💬](#question-merunga "Answering Questions") [🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Amerunga "Bug reports") [💻](https://github.com/Laboratoria/curricula-js/commits?author=merunga "Code") [📖](https://github.com/Laboratoria/curricula-js/commits?author=merunga "Documentation") [💡](#example-merunga "Examples") [🤔](#ideas-merunga "Ideas, Planning, & Feedback") [👀](#review-merunga "Reviewed Pull Requests") | [<img src="https://avatars0.githubusercontent.com/u/28717078?v=4" width="100px;"/><br /><sub><b>Diego</b></sub>](https://github.com/diegovelezg)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Adiegovelezg "Bug reports") [🤔](#ideas-diegovelezg "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/25916511?v=4" width="100px;"/><br /><sub><b>Ana Steph</b></sub>](https://anasalazar.github.io/)<br />[💬](#question-AnaSalazar "Answering Questions") [🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3AAnaSalazar "Bug reports") [💻](https://github.com/Laboratoria/curricula-js/commits?author=AnaSalazar "Code") | [<img src="https://avatars1.githubusercontent.com/u/8517182?v=4" width="100px;"/><br /><sub><b>Lalo Gonzalez</b></sub>](https://github.com/lalogf)<br />[💬](#question-lalogf "Answering Questions") [🎨](#design-lalogf "Design") [🤔](#ideas-lalogf "Ideas, Planning, & Feedback") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars3.githubusercontent.com/u/34700?v=4" width="100px;"/><br /><sub><b>Milton Mazzarri</b></sub>](http://milmazz.uno)<br />[💻](https://github.com/Laboratoria/curricula-js/commits?author=milmazz "Code") [💡](#example-milmazz "Examples") | [<img src="https://avatars3.githubusercontent.com/u/25906896?v=4" width="100px;"/><br /><sub><b>Ruth Abigail Salvador Zorrilla</b></sub>](https://github.com/RuthSalvador)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3ARuthSalvador "Bug reports") [🤔](#ideas-RuthSalvador "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/25912510?v=4" width="100px;"/><br /><sub><b>Maricarmen Rojas Tinco</b></sub>](https://maiarojas.github.io/Portafolio_v1/)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3AMaiaRojas "Bug reports") [💻](https://github.com/Laboratoria/curricula-js/commits?author=MaiaRojas "Code") [⚠️](https://github.com/Laboratoria/curricula-js/commits?author=MaiaRojas "Tests") | [<img src="https://avatars0.githubusercontent.com/u/14231402?v=4" width="100px;"/><br /><sub><b>María Inés Plaza Schwarck</b></sub>](https://github.com/MariPlaza)<br />[💻](https://github.com/Laboratoria/curricula-js/commits?author=MariPlaza "Code") [💡](#example-MariPlaza "Examples") | [<img src="https://avatars1.githubusercontent.com/u/20929277?v=4" width="100px;"/><br /><sub><b>Belén Recabal</b></sub>](https://github.com/brecabal)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Abrecabal "Bug reports") [🤔](#ideas-brecabal "Ideas, Planning, & Feedback") | [<img src="https://avatars2.githubusercontent.com/u/28201139?v=4" width="100px;"/><br /><sub><b>Lourdes Vílchez</b></sub>](https://github.com/developerVilchez)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3AdeveloperVilchez "Bug reports") [🤔](#ideas-developerVilchez "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/7809496?v=4" width="100px;"/><br /><sub><b>Fabian Alexis Bravo Abarca</b></sub>](https://github.com/FabianBravoA)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3AFabianBravoA "Bug reports") [💻](https://github.com/Laboratoria/curricula-js/commits?author=FabianBravoA "Code") [💡](#example-FabianBravoA "Examples") [🤔](#ideas-FabianBravoA "Ideas, Planning, & Feedback") [👀](#review-FabianBravoA "Reviewed Pull Requests") |
| [<img src="https://avatars3.githubusercontent.com/u/25911727?v=4" width="100px;"/><br /><sub><b>Amalia Rivera Castillejos</b></sub>](https://github.com/AmaliaRiveraC)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3AAmaliaRiveraC "Bug reports") [🤔](#ideas-AmaliaRiveraC "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/25912292?v=4" width="100px;"/><br /><sub><b>Shirley Silvana Suarez Startary</b></sub>](https://github.com/shirley-startary)<br />[💬](#question-shirley-startary "Answering Questions") [🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Ashirley-startary "Bug reports") [💻](https://github.com/Laboratoria/curricula-js/commits?author=shirley-startary "Code") [💡](#example-shirley-startary "Examples") [🤔](#ideas-shirley-startary "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/20868992?v=4" width="100px;"/><br /><sub><b>Alexandra Neira</b></sub>](https://github.com/nerdale)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Anerdale "Bug reports") [🤔](#ideas-nerdale "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/10764912?v=4" width="100px;"/><br /><sub><b>Michelle Seguil</b></sub>](https://michellesegv.github.io/)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Amichellesegv "Bug reports") [💻](https://github.com/Laboratoria/curricula-js/commits?author=michellesegv "Code") [💡](#example-michellesegv "Examples") [🤔](#ideas-michellesegv "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/28611099?v=4" width="100px;"/><br /><sub><b>Carolina Covarrubias</b></sub>](https://github.com/CaroLaboratoria)<br />[💬](#question-CaroLaboratoria "Answering Questions") [📖](https://github.com/Laboratoria/curricula-js/commits?author=CaroLaboratoria "Documentation") [🤔](#ideas-CaroLaboratoria "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/13588707?v=4" width="100px;"/><br /><sub><b>Joalbert Andrés González</b></sub>](https://github.com/joalbertg)<br />[🤔](#ideas-joalbertg "Ideas, Planning, & Feedback") | [<img src="https://avatars2.githubusercontent.com/u/3421560?v=4" width="100px;"/><br /><sub><b>Elizabeth Portilla</b></sub>](https://github.com/lizzie136)<br />[💬](#question-lizzie136 "Answering Questions") [🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Alizzie136 "Bug reports") [🤔](#ideas-lizzie136 "Ideas, Planning, & Feedback") |
| [<img src="https://avatars2.githubusercontent.com/u/25912346?v=4" width="100px;"/><br /><sub><b>Karla Nava </b></sub>](https://www.linkedin.com/in/karlanavamuci%C3%B1o/)<br />[🤔](#ideas-karlanavam "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/17767965?v=4" width="100px;"/><br /><sub><b>Allison Guzmán</b></sub>](https://medium.com/@BosqueInvierno)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Abosqueinvierno "Bug reports") [🤔](#ideas-bosqueinvierno "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/30906042?v=4" width="100px;"/><br /><sub><b>Alejandra Ramirez</b></sub>](https://github.com/alejandrarv)<br />[🤔](#ideas-alejandrarv "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/3615859?v=4" width="100px;"/><br /><sub><b>Alexander Ocsa</b></sub>](https://www.linkedin.com/in/aocsa/)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Aaocsa "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/29586691?v=4" width="100px;"/><br /><sub><b>Rocío Alberdi</b></sub>](https://github.com/rocioalberdi)<br />[🤔](#ideas-rocioalberdi "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/25912393?v=4" width="100px;"/><br /><sub><b>Ameli C. Gavante</b></sub>](https://memecast.github.io/)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Amemecast "Bug reports") [🤔](#ideas-memecast "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/25912534?v=4" width="100px;"/><br /><sub><b>IntiDev</b></sub>](https://github.com/IntiDev)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3AIntiDev "Bug reports") [🤔](#ideas-IntiDev "Ideas, Planning, & Feedback") |
| [<img src="https://avatars3.githubusercontent.com/u/5270810?v=4" width="100px;"/><br /><sub><b>Emmanuel Orozco</b></sub>](http://emmanuelorozco.com)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Aindie-rok "Bug reports") [💻](https://github.com/Laboratoria/curricula-js/commits?author=indie-rok "Code") [🤔](#ideas-indie-rok "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/1126193?v=4" width="100px;"/><br /><sub><b>Nicole Stein</b></sub>](http://www.nicolethenerd.com)<br />[💻](https://github.com/Laboratoria/curricula-js/commits?author=nicolethenerd "Code") [💡](#example-nicolethenerd "Examples") [🤔](#ideas-nicolethenerd "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/501129?v=4" width="100px;"/><br /><sub><b>Giancarlo Corzo</b></sub>](https://github.com/giancorzo)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Agiancorzo "Bug reports") [🤔](#ideas-giancorzo "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/9292999?v=4" width="100px;"/><br /><sub><b>Alejandro Rodriguez Cuellar</b></sub>](https://github.com/arcuellar88)<br />[💻](https://github.com/Laboratoria/curricula-js/commits?author=arcuellar88 "Code") [🤔](#ideas-arcuellar88 "Ideas, Planning, & Feedback") | [<img src="https://avatars2.githubusercontent.com/u/539819?v=4" width="100px;"/><br /><sub><b>Gonzalo Parra</b></sub>](https://github.com/gaposx)<br />[💬](#question-gaposx "Answering Questions") [🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Agaposx "Bug reports") [💡](#example-gaposx "Examples") [🤔](#ideas-gaposx "Ideas, Planning, & Feedback") [👀](#review-gaposx "Reviewed Pull Requests") | [<img src="https://avatars3.githubusercontent.com/u/25645113?v=4" width="100px;"/><br /><sub><b>Cristian K. Cárdenas</b></sub>](https://cristiancardenas.cl)<br />[💡](#example-ccardensa "Examples") | [<img src="https://avatars1.githubusercontent.com/u/25328635?v=4" width="100px;"/><br /><sub><b>Jonhks</b></sub>](https://github.com/Jonhks)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3AJonhks "Bug reports") [💻](https://github.com/Laboratoria/curricula-js/commits?author=Jonhks "Code") [🤔](#ideas-Jonhks "Ideas, Planning, & Feedback") |
| [<img src="https://avatars1.githubusercontent.com/u/16655830?v=4" width="100px;"/><br /><sub><b>Gabriela Segura</b></sub>](https://github.com/Gabx04)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3AGabx04 "Bug reports") [🤔](#ideas-Gabx04 "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/2304451?v=4" width="100px;"/><br /><sub><b>Rod Fuenzalida</b></sub>](https://rodrwan.github.io)<br />[🤔](#ideas-rodrwan "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/368578?v=4" width="100px;"/><br /><sub><b>Rodrigo Lazo</b></sub>](https://github.com/rlazo)<br />[💡](#example-rlazo "Examples") [🤔](#ideas-rlazo "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/497197?v=4" width="100px;"/><br /><sub><b>Aldo Román Nureña</b></sub>](https://github.com/aldo-roman)<br />[💡](#example-aldo-roman "Examples") [🤔](#ideas-aldo-roman "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/20929440?v=4" width="100px;"/><br /><sub><b>Nadia Tapia</b></sub>](https://github.com/nadiatapm)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Anadiatapm "Bug reports") [🤔](#ideas-nadiatapm "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/29587100?v=4" width="100px;"/><br /><sub><b>Daniela Sarzosa</b></sub>](https://github.com/danielasarzosa)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Adanielasarzosa "Bug reports") [🤔](#ideas-danielasarzosa "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/6402808?v=4" width="100px;"/><br /><sub><b>kkatzen</b></sub>](https://github.com/kkatzen)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3Akkatzen "Bug reports") [💡](#example-kkatzen "Examples") |
| [<img src="https://avatars1.githubusercontent.com/u/31043587?v=4" width="100px;"/><br /><sub><b>LucileBaratier</b></sub>](https://github.com/LucileBaratier)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3ALucileBaratier "Bug reports") | [<img src="https://avatars0.githubusercontent.com/u/32286663?v=4" width="100px;"/><br /><sub><b>Daniela Gonzales</b></sub>](https://danielalab.github.io/Daniela-Gonzales/)<br />[🐛](https://github.com/Laboratoria/curricula-js/issues?q=author%3ADanielalab "Bug reports") [🤔](#ideas-Danielalab "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/11894994?v=4" width="100px;"/><br /><sub><b>Rafael Cerri</b></sub>](https://github.com/rafaelbcerri)<br />[🌍](#translation-rafaelbcerri "Translation") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

Este proyecto sigue la especificación de
[all-contributors](https://github.com/kentcdodds/all-contributors). Todo tipo de
contribuciones son bienvenidas.

## Licencia & Copyright

Todos los materiales de este repo son (c) 2017-2018 [Laboratoria](http;//laboratoria.la/).

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

Este trabajo está publicado bajo la licencia [Creative commons
Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
