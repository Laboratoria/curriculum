# Full Stack JavaScript

Este repositorio es el lugar donde vamos a ir continuamente _dieñando_ nuestro
programa de formación en **JavaScript**.

En este repo se irán _ordenando_, _desarrollando_, _discutiendo_ y
_proponiendo_ todo lo que tenga que ver con el diseño de la _malla curricular_
y _cursos_.

## La _malla curricular_

Cuando decimos _malla curricular_ nos referimos al _big picture_, el
_hilo conductor_ que conecta el conjunto de _cursos_.

Nuestra propuesta de _modelo de aprendizaje_ pretende atacar de frente el
desafío de cómo hacer que la teoría se aprenda a través de la práctica. Por
ello, la currícula está _imaginada_ como una serie de _productos_ completos,
de complejidad y scope gradualmente más complejo.

En este issue puedes seguir y/o paricipar en la discusión abierta sobre el
modelo: [Aprendizaje orientado a _productos_](https://github.com/Laboratoria/curricula-js/issues/3)

Inicialmente, los encargados oficiales de la _malla curricular_ son
[Lupo Montero](https://github.com/lupomontero),
[Iván Medina](https://github.com/ivandevp) y
[Rodulfo Prieto](https://github.com/chamodev), pero está abierta a sugerencias
(issues, pull requests, ...) de todo el equipo de formación de Laboratoria así
como de la comunidad en general. Queremos hacer una malla abierta.

## Los _cursos_

Cada curso debe tener un _dueño_ o _autor_, quien es responsable del curso
como unidad atómica. Estos _autores_ podrán ser personal de Laboratoria así
como profesionales y expertos de la industria.

### Prep

Por ahora sólo hay un _curso_ en la _fase_ `prep`. La idea es que son cursos
dirigidos a gente que nunca ha tenido contacto con la programación, o
principiantes que quieran iniciarse en el viaje del Full Stack JS.

#### [01. Introducción a la programación en JS](01-intro)

_Autor: R. Prieto_

Este curso será requisito para acceder al resto de los cursos.

Tags: `javascript`, `html`, `css`, `http`, `url`, `variables`, `tipos de datos`,
`estructuras de datos`, `operadores`, `condicionales`, `ciclos`, `funciones`,
`xhr`, `json`.

Durante este curso se harán productos como:

* **Posts encriptados** en Facebook: crea y despliega una web que publica
mensajes encriptados en Facebook, que tus amigos solo pueden decifrar
regresando a tu web.

* **Developers más activos**: crea y despliega una web que se conecte al API
de meetup para determinar los developers más activos de tu ciudad.

* **Laboratoria Coders**: crea y despliega una web que se conecte al API de
Laboratoria para visualizar la data de las coders.

### Bootcamp

El **Bootcamp** tiene una duración de 6 meses, a tiempo completo. Las chicas
postularán una vez completado el curso de "Introducción a la programación".

#### [02. Tu primer website: de idea a proyecto publicado](#)

_Autor: ???_

En este curso construirás un sitio web estático desde cero, y en el proceso
aprenderás sobre: HTML semántico, arquitectura de información, interfaces
interactivas, manipulación del DOM, administración de código fuente con git,
cómo trabajar en equipo usando GitHub, y finalmente cómo desplegar tu proyecto.

Durante este curso también estudiarás fundamentos de programación y asistirás
a diversas charlas sobre HTML, CSS y JavaScript.

Tags: `git`, `github`, `markdown`, `html5`, `css3`, `dom`, `eventos`,
`despliegue`, `github-pages`, `unix shell`

* **Portfolio site**: ...

#### [03. Server-less Single Page Apps: el reinado de JavaScript](#)

_Autor: ???_

Durante este curso construirás un SPA (Single Page App), que es básicamente una
aplicación que corre completamente dentro del navegador.

Como temas teóricos complementarios estudiarás sobre module bundlers,
templating y browser APIs.

* **Notes App: single user, local data**: crea una aplicación de "notas" que
permita al usuario guardar textos cortos e imágenes, ordenarlas, etiquetarlas...
Esta aplicación guardará toda su data localmente en un entorno "sin servidor".

Tags: `spa`, `npm`, `gulp`, `es6`, `handlebars`, `fonts`, `bootstrap`,
`localStorage`, `sessionStorage`, `history`, `shell scripts`

#### [04. Data Driven Single Page Apps](#)

_Autor: ???_

* **Notes App: multi user, cloud data**: continúa con la aplicación iniciada en
el curso anterior. En esta iteración añadirás un back-end que permita hacer
autenticación, almacenar data, y así pasar a una experiencia multi-usuario.

Tags: `node.js`, `xhr`, `json`, `mocha`, `firebase`, `docs`, `cli`, `auth`,
`docker`, `regular expressions`, `rest`

#### [05. Servidores con Node.js y Mobile first](#)

_Autor: ???_

* **Notes App: mobile ui**: ...

Tags: `media-queries`, `express|hapi|restify`, `webpack`, `flexbox`, `http`,
`css3-animations`, `databases`, `touch events`, `gestures`, `ci`

#### [06. Desplegando en el mundo real y Offline first](#)

_Autor: ???_

* **Notes App: offline, sync**: ...

Tags: `app-cache`, `jest`, `enzyme`, `yarn`, `web standards`, `svg`, `nginx`,
`automated deployment`

#### [07. Capstone project](#)

_Autor: ???_

Tags: ...

### Educación Continua

El programa de **Educación Continua** en principio se ofrece a egresadas de
nuestro Bootcamp. Tiene una duración de 18 meses durante los cuales se les
quiere ofrecer una selección de cursos que las ayuden a seguir creciendo como
desarrolladoras, profundizar conocimientos y apoyarlas en el inicio de sus
carreras como developers.

#### [08. JS Deep Dive](08-deep-dive)

_Autor: ???_

Calculadora?

#### [09. Programming Paradigms](09-paradigms)

_Autor: L. Montero_

Extender un video juego 2d

#### [10. Functional JavaScript](10-functional)

_Autor: L. Montero_

Refactorizar un video juego 2d

#### [11. Intro to React](11-react-intro)

_Autor: M. Crowe / L. Montero_

Convertir video juego en app con interfaz más completa, high scores, ...

#### [12. React Deep Dive](12-react-deep-dive)

_Autor: M. Crowe / L. Montero_

...

#### [13. The Web Stack](13-web-stack)

_Autor: ???_

#### [14. Node.js](14-node)

_Autor: ???_

#### [15. Algoritmos](15-algorithms)

_Autor: ???_

#### [16. Estructuras de datos](16-data-structures)

_Autor: ???_

#### ...

***

## Guías de estilos

JavaScript:

* [Frontend: AirBnB](https://github.com/airbnb/javascript)
* [Node.js: Hapi](https://hapijs.com/styleguide)

***

## Ideas para otros cursos:

* Databases? (SQL vs NoSQL)
* Build a Rest api with Express/Hapi/Restify
* Angular 2?
* Patrones de diseño?
* Seguridad

***

## Notas bootcamp:

Temas a cubrir a través de la práctica

* Dev Environment (browser, cli, node...)
* Testing (proving that it works)
* DOM/BOM
* Eventos
* Functions: Scope, Closures, ...
* Async / Callbacks / HOF / Promises
* Recursión
* Clean Code / DRY
* HTML: Semantic HTML, HTML5, ...
* CSS: Buenas práctivas, Herencia, CSS3, ...
* JSON
* AJAX
* APIs
* jQuery
* TDD
* Node
* Modules...
* ...
