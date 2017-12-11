# Full Stack JavaScript

[![Build Status](https://travis-ci.org/Laboratoria/curricula-js.svg?branch=master)](https://travis-ci.org/Laboratoria/curricula-js)

Este repositorio es el lugar donde vamos a ir continuamente _diseñando_ nuestro
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
de complejidad y scope incremental.

En este issue puedes seguir y/o participar en la discusión abierta sobre el
modelo: [Aprendizaje orientado a _productos_](https://github.com/Laboratoria/curricula-js/issues/3).

Inicialmente, los encargados oficiales de la _malla curricular_ son
[Lupo Montero](https://github.com/lupomontero),
[Iván Medina](https://github.com/ivandevp) y
[Rodulfo Prieto](https://github.com/chamodev), pero está abierta a sugerencias
(issues, pull requests, ...) de todo el equipo de formación de Laboratoria así
como de la comunidad en general. Queremos hacer una malla abierta.

## Mapa de conceptos, tecnologías y herramientas

Como guía en el proceso de diseño de la malla estamos usando un "mapa" de
_conceptos_, _tecnologías_ y _herramientas_ que queremos cubrir en la currícula.
Este mapa es un mapa vivo, se basa en feedback de empleadores, instructores y
alumnas. Si tienes alguna sugerencia o comentario no dudes en
[abrir un issue](https://github.com/Laboratoria/curricula-js/issues) ;-)

![mapa de topicos](https://user-images.githubusercontent.com/110297/27301108-c25bf836-54f7-11e7-9ce0-3346ff435926.png)

## Los _cursos_

Cada curso debe tener un _dueño_ o _autor_, quien es responsable del curso
como unidad atómica. Estos _autores_ podrán ser personal de Laboratoria así
como profesionales y expertos de la industria.

Los _cursos_ se dividen en 3 _fases_:

* [**Prep**](#i-prep): cursos online, de 20 a 30 horas, que se toman **antes**
  de ingresar a Laboratoria como parte del proceso de selección
* [**Bootcamp**](#ii-bootcamp): cursos de 2 a 4 semanas, a tiempo parcial, que
  requieren de 35 horas de estudio por semana: 25 horas presenciales (5hrs/día) +
  10 horas remoto (2hrs/día)
* [**Educación continua**](#iii-educación-continua): cursos de 4 semanas, blended,
  que requieren de 4 horas de estudio por semana: 3 horas/semana presenciales
  (1 sesión de 3hrs cada semana) + 1 hora/semana remoto

***

## I. Prep

Cursos dirigidos a personas que nunca han tenido contacto con la programación, o
principiantes que quieran iniciarse en el viaje del **Full Stack JavaScript**.

### 00. Cursos/tutoriales de terceros

Recomendamos a todas las interesadas que descarguen y sigan los siguientes
cursos interactivos creados por la comunidad de [nodeschool](http://nodeschool.io).
Estos cursos te darán una oportunidad de familiarizarte no sólo con
**JavaScript**, **HTML** y **Git**, que son conocimientos esenciales, si no que
lo harás en el entorno de la línea de comando (tu nuevo mejor amigo).

* [javascripting](https://github.com/workshopper/javascripting): Aprende
  **JavaScript** aventurándote en el terminal.
* [learnyouhtml](https://github.com/denysdovhan/learnyouhtml): Aprende cómo
  crear tu primera **página web**.
* [git-it](https://github.com/jlord/git-it-electron): Git-it es una aplicación
  de escritorio (Mac, Windows, Linux) que te ayuda a aprender **Git y GitHub**.

### [01. Introducción a la programación con JS](01-intro)

Autor: [Rodulfo Prieto](https://github.com/chamodev)

En un mundo que rápidamente se está digitalizando, aprender a programar abre
nuevas (y muchas veces mejores) oportunidades. Con este curso darás tus primeros
pasos hacia el mundo de la programación. Empezaremos desde cero, enseñándote los
fundamentos de `JavaScript`, el lenguaje de programación más popular de la Web.

Main Tags: `variables`, `tipos datos`, `operadores`, `condicionales`, `loops`,
`funciones`

***

## II. Bootcamp

El **bootcamp** es un programa de 24 semanas y consiste en una serie de cursos
de 2 a 4 semanas de duración cada uno. Los _cursos_ diseñados para el
**bootcamp** tendrán en cuenta que las alumnas estudian a medio tiempo,
dedicando 35 horas por semana (5hrs/día de forma presencial más 2hrs/día
de estudio remoto) y **no** dominan el idioma inglés. El bootcamp empieza con
una serie común de cursos para todas las alumnas, que forman parte del
`Common Core`, y luego continúa en uno de dos tracks de especialización:
`Front-End Developer` y `UX Designer`.

### [02. Programación básica con JavaScript](02-basic-programming)

* Track: _Common Core_
* Autor: [Rodulfo Prieto](https://github.com/chamodev)
* Tiempo estimado: _2 a 3 semanas_

En este curso aprenderás mejores formas de estructurar y manipular la data de
tu programa haciendo uso de estructuras de datos básicas: `arreglos` y
`objetos`. Además, aprenderás a utilizar dos programas esenciales para una
developer: la línea de comandos y el controlador de versiones.

Main Tags: `arrays`, `objects`, `CLI`, `Git`, `Github`.

Secondary Tags: `algorithms`, `ascii`, `searching`, `sorting`, `properties`,
`methods`

Con este curso desarrollarás dos programas que tienen una aplicación en nuestra
vida cotidiana:

1. **Tarjeta de crédito válida**: crearás un programa que pueda validar si una
   tarjeta de crédito es válida según el
   [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn)
2. **Caesar Cipher**: crearás un programa que encripte y decifre mensajes según
   el [algoritmo de cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar).

### [03. Creando tu primer sitio web interactivo](03-interactive-site)

* Track: _Common Core_
* Autor: [Iván Medina](https://github.com/ivandevp) & [Lalo Gonzalez](https://github.com/lalogf)
* Tiempo estimado: _3 a 4 semanas_

En este curso se construirá un sitio dinámico desde cero pasando por las
diversas fases del desarrollo de un producto web. A lo largo de este curso, se
verán temas de maquetación (`HTML` y `CSS`), lógica (`JS`), herramientas de
flujo de trabajo (`git`), además de interacción con el `DOM` para agregar
dinamismo a través de `eventos`.

* **Data Dashboard**: El entregable final del curso será una web app en la que
  deberán diseñar la experiencia del producto que consiste en mostrar el
  progreso de un listado de estudiantes, manipulando data almacenada en un
  arreglo de objetos y agregando funcionalidad que requiere algoritmos básicos
  como un filtro de búsqueda y ordenamiento.

Main tags: `html`, `css`, `ux`, `git`, `js`, `logic`, `dom`, `eventos`.

Secondary tags: `semantic markup`, `box model`, `selectors`, `display`,
`positioning`, `problem solving`, `dom`, `eventos`,
`git`, `unix shell`, `github-pages`, `flows`, `sketching`.

### [04. Crea tu propia red social](04-social-network)

* Track: _Common Core_
* Autor: [Iván Medina](https://github.com/ivandevp) & [Lalo Gonzalez](https://github.com/lalogf)
* Tiempo estimado: _3 a 4 semanas_

En este curso crearás una **red social**. Para ello deberás aprender a
desarrollar una interfaz que se pueda visualizar correctamente en varios
dispositivos (`responsive`) y deberás hacer uso de librerías y frameworks que
permitan optimizar el flujo del desarrollo.

Main Tags: `mobile-first`, `bootstrap`, `jquery`, `ux research`,
`grid-system`, `web layouting`, `responsive`, `usability`.

Secondary tags: `big-o`, `time-complexity`,
`git-workflow`, `google-charts/d3`, `api`, `json`, `information-architecture`.

### [05. Crea tu propia librería usando JavaScript: JS Deep Dive](https://github.com/Laboratoria/curricula-js/tree/08-deep-dive/08-deep-dive)

* Track: _Front-End Development_
* Autor: [Belén Recabal](https://github.com/brecabal) & [Iván Medina](https://github.com/ivandevp)
* Tiempo estimado: _3 semanas_

En este curso construirás tu propia librería usando JavaScript, lo cual nos
permitirá explorar las particularidades del lenguaje y entender como funciona
por dentro, haciendo incapié en temas de performance, uso de memoria y
optimización.

* **UI Library**: El entregable final de este curso será construir una librería
  para desarrollo de interfaces, teniendo en cuenta el performance y manejo de
  memoria, que se usará para desarrollar una réplica de
  _[Pinterest](http://pinterest.com/)_.

Main tags: `types`, `operators`, `functions`, `objects`, `scope`, `closure`,
`execution-context`, `linter`.

Secondary Tags: `primitive-vs-reference`, `bitwise-operators`,
`function-statement`, `function-expression`, `callbacks`, `hoisting`, `iife`,
`apply`, `call`, `bind`, `this`.

### [06. Construye una _Single Page App (SPA)_ multi-usuario consumiendo data remota](06-spa)

* Track: _Front-End Development_
* Autor: [Iván Medina](https://github.com/ivandevp)
* Tiempo estimado: _3 semanas_

En este curso se verán temas de `network` para entender qué es lo que sucede
por detrás de la web (arquitectura cliente-servidor). Profundizaremos en
temas de diseño de APIs para luego poder consumirlos o desarrollarlos.

* **AIRDNA clone**: El entregable final de este curso es el desarrollo de un
  sitio como _[AIRDNA](https://www.airdna.co/investment-explorer)_ que muestre
  datos estadísticos en base a ubicaciones integrando el API de Google Maps y
  personalizando tanto el mapa como marcadores.

Main tags: `http`, `browser-apis`, `api`, `json`, `rest`, `xhr`, `firebase`,
`deployment`.

Secondary Tags: `tcp-ip`, `dns`, `networking`, `geolocation`, `web-storage`,
`web-sockets`, `web-workers`, `web-rtc`, `auth`, `microservices`,
`broadcasting`, `progressive-web-apps`, `cloud computing`, `saas-paas-iaas`.

### 07. Lo que todo Front-End debe saber del Back-End

* Track: _Front-End Development_
* Autor: [Iván Medina](https://github.com/ivandevp)
* Tiempo estimado: _3 semanas_

En este curso vas a salir de JavaScript, y vas a entender como integrar tu
front-end con un back-end. Usaremos `Ruby` como lenguaje de programación
aprovechando la sencillez de su framework `Ruby on Rails` que integra a `Sass`
como _pre-procesador_ de CSS.

El desarrollo Front End es un mundo muy amplio tal como lo es el desarrollo
Back End, y trabajar éstos en conjunto es algo aún muy común en el desarrollo de
software. Veremos cómo implementar lo que ya conocemos hasta el momento dentro
de un framework Back End que podría estar realizado en cualquier lenguaje, pero
que sigue un patrón muy similar.

* **Fiverr clone**: El entregable final de este curso es replicar la experiencia
  del sitio de _[Fiverr](http://embed.wistia.com/deliveries/0677cb185a93d97d366095fb2886dadbe1a70ec2/file.mp4)_
  teniendo un Back End que se encarga del enrutamiento y la data, pero pendiente
  de la implementación del Front End.

Main tags: `sass`, `rails`, `mv* back-end architecture`, `database`, `routing`.

Secondary Tags: `mvc`, `orm`, `migrations`, `templating`.

### [08. Paradigmas de la programación y Functional JavaScript](09-paradigms)

* Track: _Front-End Development_
* Autor: [Lupo Montero](https://github.com/lupomontero) & [Milton Mazzarri](https://github.com/milmazz)
* Tiempo estimado: _3 semanas_

Los **Paradigmas de Programación** (_Programming Paradigms_) son formas
diferentes de pensar en cómo se organiza un programa basado en una serie de
principios, los cuales resultan en estilos muy distintos y lenguages muy
diversos.

En este curso formarás parte de un equipo responsable de extender la
funcionalidad de un juego de dos dimensiones escrito en JavaScript. Tu equipo
tendrá que dividir tareas, trabajar en parejas y en parelalo y hacer code
reviews. Todo el flujo de trabajo será a través de un repositorio alojado en
GitHub. Durante la primera semana tu equipo tendrá que extender el juego
heredando del prototipo de un constructor ya implementado, mientras que en la
segunda semana tendrán que refactorizar el código de la primera semana usando
el paradigma funcional.

* **Extender video juego 2d**: En este curso formarás parte de un equipo
  responsable de extender la funcionalidad de un juego 2d. **Tu equipo tendrá
  que dividir tareas, trabajar en parejas y hacer code reviews**. Durante la
  primera semana tu equipo tendrá que extender el juego _heredando_ del
  prototipo de un constructor ya implementado, mientras que en la segunda semana
  tendrán que refactorizar el código de la primera semana usando el paradigma
  funcional.

* **Refactorizar video juego 2d**: como ejemplo de programación funcional
  tendrás que refactorizar el juego con el que se ha estado trabajando en el
  curso anterior. La versión refactorizada debe usar los principios de FP e
  incluir tests exhaustivos.

Main Tags: `oop`, `fp`, `bundlers`, `prototype`, `inheritance`, `composition`,
`immutability`, `testing`, `task-runner`.

Secondary Tags: `constructors`, `factories`, `hof`, `pure-functions`, `es6`,
`side effects`, `jest`, `gulp`.

### [09. Introducción a React](11-react)

* Track: _Front-End Development_
* Autor: [Mariano Crowe](https://github.com/merunga)
* Tiempo estimado: _1 a 2 semanas_

**React** es una tecnología realmente revolucionaria, que no sólo nos permite
encapsular nuestro código en lindos componentes, si no que representa un cambio
de paradigma que va mucho más allá del navegador o incluso la web. **React** es
una forma de pensar y construir interfaces, y no está ilimitado a una sóla
plataforma; a través de la abstracción de los renderers podemos escribir
interfaces nativas para web, mobile, desktop, tv, etc.

* **Slack clone**: El entregable de este curso será desarrollar una aplicación
  de mensajería como _[Slack clone](http://embed.wistia.com/deliveries/3adeb0732ada4a32af209d5f4326cb45609ba9f9/file.mp4)_
  en la que se haga uso de React para la creación de componentes y además
  combine todo lo visto a lo largo del bootcamp.

Main Tags: `react`, `jsx`, `webpack`, `babel`, `jest`.

Secondary Tags: `es6`, `fp`, `components`, `virtual-dom`.

### 10. Hackathon: Auto-aprendizaje Front-End Frameworks

* Track: _Front-End Development_
* Autor: _???_
* Tiempo estimado: _1 a 2 semanas_

El desarrollo de productos con JavaScript involucra muchos conceptos y mucho
código, sin embargo, hay soluciones que ya han sido probadas en el desarrollo
de diversos proyectos que nos dan una estructura y flujo definido, de tal
manera que implementarlo nos permite despreocuparnos de algunos detalles, a
esto se conoce como Framework, y como todo en tecnología, no hay solo una
alternativa, sino, una gama de diversas opciones que nos permiten llegar a la
mejor solución. Como curso final del track de `Front End Development`, se
verán 2 conceptos fundamentales: `Data Binding` y `Virtual DOM`, con esto
durante una semana se llevará a cabo una hackathon en la cual el reto será
desarrollar un producto (debajo se muestra un ejemplo de complejidad) usando
alguna librería y/o framework moderno de JS.

* **Kickstarter clone**: El entregable de este curso será la réplica del flujo
  del sitio _[Punchstarter](http://embed.wistia.com/deliveries/0c6b0cd041525381d97cd13d43357ec1ddc48520/file.mp4)_
  en el cual debido a la cantidad de vistas y dependencias involucradas en este
  proyecto, notaremos la necesidad de usar herramientas que hagan nuestro flujo
  más rápido y eficiente.

Tags: `angular`, `vue`, `typescript`, `api`, `real-time`.

### 11. Capstone Project

* Track: _Front-End Development_
* Autor: _???_
* Tiempo estimado: _1 a 2 semanas_

Ahora que ya eres una Front-End Developer crack, dedica un par de semanas para
crear algo nuevo. ¡Eres libre para crear lo que quieras!

***

## III. Educación Continua

Los _cursos_ de **educación continua** están dirigidos a un público que
trabaja, y por lo tanto tiene mucho menos disponibilidad de tiempo. Los cursos
de educación continua se diseñan pensando en la modalidad `4x4`: 4 semanas de
duración, dedicando 4hrs/semana: 3hrs/semana presenciales + 1hr/semana de
estudio remoto.

El programa de **Educación Continua** ofrece una selección de cursos que ayude
a las egresadas del bootcamp a seguir creciendo como
desarrolladoras, profundizar conocimientos y apoyarlas en el inicio de sus
carreras como developers.

Como parte de Educación Continua también ofrecemos algunos cursos del Bootcamp
para aquellas personas que quieran repasar el contenido nuevamente para
consolidar conceptos, o para aquellas personas de otros tracks
(e.g. UX Design) que quieran aprender más de JavaScript.

Los cursos que se dictan en el Bootcmap y se vuelven a abrir en Educación
Continua son:

* [Crea tu propia librería usando JavaScript / JS Deep Dive](https://github.com/Laboratoria/curricula-js/tree/08-deep-dive/08-deep-dive)
* [Programming Paradigms](09-paradigms)
* [Functional JavaScript](10-functional)
* [Introducción a React](11-react)

Los cursos que se dictan únicamente en Educación Continua son:

### [12. Manejo de estado avanzado con React y Redux](12-redux)

Autores: [Rod Fuenzalida](https://github.com/rodrwan) & [Lupo Montero](https://github.com/lupomontero)

[:construction: Este curso está en desarrollo :construction:]

El manejo de estado en una aplicación es crítico, y desgraciadamente muchas
veces se hace de forma desordenada y sin mucha consistencia. `Redux` nos ofrece
un contenedor de estado que nos ayudará a manejar el estado de forma más
consistente y predecible.

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

Tags: `redux`, `react`, `reselect`, `redux-thunk`, `redux-saga`,
`redux-observable`, `rxjs`, `jest`, `enzyme`

### 13. Construye un juego multijugador con Angular y Firebase

Autor: [Aldo Román](https://github.com/aldo-roman)

Este curso presenta los fundamentos para comprender y utilizar
[Angular](https://angular.io) como plataforma de desarrollo web.

Construiremos un juego multijugador basado en [Cadáver Exquisito](https://es.wikipedia.org/wiki/Cad%C3%A1ver_exquisito).

> Es una técnica usada por los surrealistas en 1925, (...) en el cual los
> jugadores escriben por turno en una hoja de papel, la doblan para cubrir parte
> de la escritura, y después la pasan al siguiente jugador para otra
> colaboración.
>
> Los teóricos y asiduos al juego (...) sostenían que la creación, en especial
> la poética, debe ser anónima y grupal, intuitiva, espontánea, lúdica y en lo
> posible automática.

El juego consiste en escribir un texto de manera colaborativa. Cada jugador
escribe un texto corto sin poder ver los textos de los demás jugadores. Luego de
que todos los jugadores han participado, se unen los textos uno tras otro y se
lee el resultado completo.

El backend estará hospedado en [Firebase](https://firebase.google.com/).

Tags: `angular`, `typescript`, `firebase`

### 14. Crea un chatbot en la nube y despliégalo en Azure

Autor: [Jorge Castañeda](https://github.com/jcastanedacano)

En este curso contruirás un _chat bot_ y lo desplegarás en la nube, usando
Azure.

Tags: `bot`, `azure`

### 15. Despliega aplicaciones Node.js como contenedores en AWS

Autor: TBD (_help needed_)

En este curso construirás una aplicación usando `Node.js` y `MongoDB`, para ser
empaquetada usando `Docker` y desplegada en `AWS` EC2 Container Service.

Node.js es sin lugar a dudas una de las tecnologías más de moda en Silicon
Valley y el mundo. Como desarrolladoras Full Stack JavaScript, Node.js es una de
las principales herramientas con las que contamos en nuestro arsenal. Node nos
permite llevar nuestro conocimiento de JavaScript más allá del navegador.

En este curso construirás un servidor web que sirva contenido estático además de
algunos endpoints dinámicos que sirvan data en formato JSON.

Tags: `devops`, `webops`, `deployment`, `maintenance`, `management`, `backup`,
`aws`, `nodejs`, `mongodb`, `docker`, `containers`

### 16. Construye una aplicación serverless usando Firebase

Autor: TBD (_help needed_)

En este curso construirás una aplicación usando Firebase como backend. Tu
aplicación tendrá las siguientes características:

* Usar autenticación con Firebase
* Leer y escribir data de la base de datos a tiempo real de Firebase
* Desplegar por lo menos dos funciones cloud
* Contar con scripts `run`, `build` y `deploy`, que se encarguen de correr,
  empaquetar y desplegar la aplicación respectivamente.
* Despeglado en Firebase hosting
* Haber administrado y documentado todo el proceso de creación de la aplicación
  en GitHub.
* Al día de la demo, la aplicación deberá estar publicada en una URL accesible
  universalmente.

Tags: `cloud`, `serverless`, `cloud-functions`, `cors`, `gcp`, `firebase`,
`auth`

### [17. Modelando y persistiendo data con NoSQL](17-nosql)

Autor: TBD (_help needed_)

Las bases de datos no relacionales (NoSQL) son una nueva generación de bases de
datos diseñadas específicamente para enfrentar desafíos de escalabilidad y
agilidad en el desarrollo moderno.

En este curso contruirás una aplicación que use una base de datos no relacional
de documentos JSON (MongoDB o CouchDB). Los usuarios de esta aplicación deberán
poder crear "documentos" de varios tipos que podrán salvar, editar, borrar y
sincronizar.

Tags: `nosql`, `data`, `model`, `json`, `concurrency`, `locking`,
`partitioning`, `search` ...

### 18. SQL Databases

[:bulb: Idea para curso :bulb:]

Autor: TBD (_help needed_)

Tags: `schema-design`, `sql`, `no-sql`, `querying`, `performance`, `orm`.

### [19. The web stack](19-web-stack)

Autor: TBD (_help needed_)

TBD

### [20. Command Line Foo](20-cli)

Autor: TBD (_help needed_)

La primera `unix shell` apareció en 1971, con la primera versión de Unix. A
pesar de sus más de 40 años de edad, sigue siendo una tecnología totalmente
vigente, y de alguna forma se ha convertido en el estándar para la interacción
con servidores y sistemas operativos "Unix-like" (GNU/Linux, BSD, MacOS,
Android, ...).

En este curso aprenderás a escribir shell scripts además de construir un
programa con `Node.js` para ser usado desde la lína de comando.

Tags: `cli`, `shell`, `bash`, `filesystem`, `profile`, `history`, `envirnoment`,
`process`, `argv`, `pipes`, `stdin`, `stdout`, `stderr`, `nodejs`, `npm`,
`npm-scripts`.

### 21. ME*N Stack

[:bulb: Idea para curso :bulb:]

Autor: TBD (_help needed_)

Tags: `web-stack`, `fullstack-framework`, `routing`, `mv*`, `orm`.

### 22. Análisis y visualización de datos

[:bulb: Idea para curso :bulb:]

Autor: TBD (_help needed_)

Tags: `estadística`, `map/reduce`, `d3`, `canvas`, ...

### 23. Algoritmos

[:bulb: Idea para curso :bulb:]

Autor: TBD (_help needed_)

Tags: `big-O`, `adhoc`, `search`, `sort`

### 24. Estructuras de datos

[:bulb: Idea para curso :bulb:]

Autor: TBD (_help needed_)

La ciencia de la computación consiste en el estudio de sistemas computacionales
sobretodo relacionado con software, esto incluye su teoría, diseño, desarrollo y
aplicación, dicho esto, en este curso se verán estructura de datos más avanzadas
que las ya vistas (arreglo y objetos) con el objetivo de entender dónde se
aplican y bajo que condiciones.

* **SCM like Git**: Construcción de un `Source Code Manager` al estilo de git
  que permita la navegación a través del historial de cambios.

Tags: `time complexity`, `big-o`, `searching`, `sorting`, `stacks`, `queues`,
`graphs`, `binary-trees`.

***

## Contribuciones

Toda contribución es **gratamente bienvenida**.

Pero **POR FAVOR** no olvides leer detalladamente la
[guía para contribuidores](CONTRIBUTING.md) antes de enviar un PR.

## Licencia & Copyright

Todos los materiales de este repo son (c) 2017 [Laboratoria](http;//laboratoria.la/).

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

Este trabajo está publicado bajo la licencia [Creative commons
Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
