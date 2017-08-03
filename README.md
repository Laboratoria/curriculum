# Full Stack JavaScript

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
Este mapa es un mapa vivo, se basa en feedback de empleadores, profes y alumnas.
Si tienes alguna sugerencia o comentario no dudes en
[abrir un issue](https://github.com/Laboratoria/curricula-js/issues) ;-)

![mapa de topicos](https://user-images.githubusercontent.com/110297/27301108-c25bf836-54f7-11e7-9ce0-3346ff435926.png)

Fuente: https://github.com/Laboratoria/curricula-js/issues/25

## Los _cursos_

Cada curso debe tener un _dueño_ o _autor_, quien es responsable del curso
como unidad atómica. Estos _autores_ podrán ser personal de Laboratoria así
como profesionales y expertos de la industria.

Cada curso tendrá una duración de aprox. 4 semanas. Los _cursos_ diseñados para
el _bootcamp_ tendrán en cuenta que las alumnas estudian medio tiempo, **no**
dominan el idioma ingles y dedican tiempo todos los días, mientras que los
_cursos_ de _educación continua_ están dirigidos a un público que trabaja, y por
lo tanto tiene mucho menos disponibilidad de tiempo (aprox. 7h por semana).

Los _cursos_ se dividen en 3 _fases_: _prep_ (curso online de 1 mes), _bootcamp_
(cursos blended part-time, 6 meses) y _educación continua_ (cursos blended 7
horas por semana, 18 meses).

***

### Prep

Por ahora sólo hay un _curso_ en la _fase_ `prep`. La idea es que son cursos
dirigidos a gente que nunca ha tenido contacto con la programación, o
principiantes que quieran iniciarse en el viaje del Full Stack JS.

#### [00. Cursos/tutoriales de terceros](#)

Recomendamos a todas las interesadas que descarguen y sigan los siguientes
cursos interactivos creados por la comunidad [nodeschool](http://nodeschool.io).
Estos cursos te darán una oportunidad de familiarizarte no sólo con JavaScript,
HTML y git, que son conocimientos esenciales, si no que lo harás en el entorno
de la línea de comando (tu nuevo mejor amigo).

* [javascripting](https://github.com/workshopper/javascripting): Learn
  JavaScript by adventuring around in the terminal.
* [learnyouhtml](https://github.com/denysdovhan/learnyouhtml): Learn how to
  create your first web-page.
* [git-it](https://github.com/jlord/git-it-electron): Git-it is a (Mac, Windows,
  Linux) Desktop App for Learning Git and GitHub.

#### [01. Introducción a la programación en JS](01-intro)

_Autor: R. Prieto_

Este curso será requisito para acceder al resto de los cursos.

Tags: `javascript`, `html`, `css`, `http`, `url`, `variables`, `tipos de datos`,
`estructuras de datos`, `operadores`, `condicionales`, `ciclos`, `funciones`.

Durante este curso se harán productos como:

* **Cajero automático**: crea un programa que un cajero automático pueda
utilizar para determinar el número mínimo de billetes a entregar dado un
monto solicitado.

* **¿Es una tarjeta de crédito falsa?**: crea un programa que confirme si
una tarjeta de crédito es válida según el algoritmo de Luhn.

* **Posts encriptados** en Facebook: crea y despliega una web que publica
mensajes encriptados en Facebook, que tus amigos solo pueden decifrar
regresando a tu web.

***

### Bootcamp

El **Bootcamp** tiene una duración de 6 meses, a tiempo parcial. Las chicas
postularán cuando hayan completado el curso de "Introducción a la programación".
Una vez dentro, llevarán durante 9 semanas una serie de temas a la que denominamos
**Common Core**, a partir de ahí podrán especializarse en 3 perfiles (`tracks`): `Front-End Developer`, `Maquetadora Web` y `UX Designer`.

#### Common Core

En este espacio, las estudiantes experimentarán un poco de los diversos tracks con
la intención de descubrir su afinidad, no se verán todos los temas a profundidad,
pero si lo necesario para poder entender en que track especializarse.

##### [02. Building an Static and Dynamic Site](#)

_Autor: Iván Medina & ???_

En este primer curso se construirá un sitio dinámico desde cero pasando por las
diversas fases del desarrollo de un producto web. A lo largo de este curso, se
verán temas de maquetación (HTML y CSS), lógica (JS), herramientas de flujo de
trabajo (Git), además de interacción con el DOM para agregar dinamismo a través
de eventos.

* **Data Dashboard**: El entregable final del curso será una web app en la que deberán
diseñar la experiencia del producto que consiste en mostrar el progreso de un listado de
estudiantes, manipulando data almacenada en un arreglo de objetos y agregando funcionalidad
que requiere algoritmos básicos como un filtro de búsqueda y ordenamiento.

Main tags: `html`, `css`, `ux`, `git`, `js`, `logic`, `dom`, `eventos`.

Secondary tags: `semantic markup`, `box model`, `selectors`, `display`, `positioning`, `layout`, `grid-system`, `problem solving`, `dom`,
`eventos`, `git`, `unix shell`, `github-pages`, `flows`, `sketching`.

Tiempo estimado: _4 semanas_.

##### [03. How to optimize your workflow through common Libraries/Frameworks](#)

_Autor: Iván Medina & ???_

En este curso se realizará la versión 2 del primer producto mejorando su
visualización a través de diversos dispositivos y haciendo uso de librerías
y frameworks que permitan optimizar el flujo del desarrollo.

* **Data Dashboard v2**: El entregable final del curso será la versión 2 del
primer producto, esto consiste en desarrollar el UI haciendo uso de librerías y
frameworks que hagan el flujo más cercano al campo laboral, además, contiene
retos técnicos como conectarse a APIs y visualización de datos.

Main Tags: `basic-algorithms`, `scrum`, `mobile-first`, `bootstrap`, `jquery`, `ux`.

Secondary tags: `big-o`, `time-complexity`, `sorting`, `searching`, `git-workflow`, `google-charts/d3`, `api`, `json`, `usability`, `information-architecture`.

Tiempo estimado: _4 semanas_.


#### Front-End Development

En este track se encontrarán las estudiantes que sientan una mayor afinidad con la programación
y JavaScript de tal manera que puedan especializarse en `Front-End Development`.

##### [04. Really get to know JavaScript by building your own library](#)

_Autor: Belén Recabal & Iván Medina_

Este curso incluye un poco más de teoría de lo habitual, entender las particularidades
de JavaScript como lenguaje de programación, esto permitirá que nos preocupemos por el
performance de nuestras aplicaciones escribiendo un mejor código sacando provecho del
lenguaje.

* **UI Library**: El entregable final de este curso será construir una librería para
desarrollo de interfaces, teniendo en cuenta el performance y manejo de memoria, que se
usará para desarrollar una réplica de _[Pinterest](http://pinterest.com/)_.

Main tags: `values`, `types`, `operators`, `variables`, `control-flow`,
`functions`, `objects`, `arrays`, `linter`.

Secondary Tags: `es6`, `primitive-vs-reference`, `bitwise-operators`,
`function-statement`, `function-expression`, `callbacks`, `hoisting`,
`execution-context`, `iife`, `closure`, `apply`, `call`, `bind`,
`this`, `scope`.

Tiempo estimado: _3 semanas_.

##### [05. Building a Multi User Single Page App using Remote Data](#)

_Autor: Iván Medina_

En este curso se verán temas de `network` para entender qué es lo que sucede
por detrás de la web (arquitectura cliente-servidor), para luego profundizar en
temas de diseño de APIs para luego poder consumirlos o desarrollarlos.

* **AIRDNA clone**: El entregable final de este curso es el desarrollo de un sitio como
_[AIRDNA](https://www.airdna.co/investment-explorer)_ que muestre datos estadísticos
en base a ubicaciones integrando el API de Google Maps y personalizando tanto el
mapa como marcadores.

Main tags: `http`, `browser-apis`, `api`, `json`, `rest`, `xhr`, `firebase`,
`deployment`.

Secondary Tags: `tcp-ip`, `dns`, `networking`, `geolocation`, `web-storage`,
`web-sockets`, `web-workers`, `web-rtc`, `auth`, `microservices`, `broadcasting`,
`progressive-web-apps`, `cloud computing`, `saas-paas-iaas`.

Tiempo estimado: _3 semanas_.

##### [06. What every Front-End Developer needs to know about Back-End](#)

_Autor: Iván Medina_

En este curso vas a salir de JS, y vas a entender como integrar tu front-end
con un back-end y aprovecharemos Ruby como lenguaje de programación aprovechando
la sencillez de su framework Rails que integra a Sass como pre-procesador de CSS
El desarrollo Front End es un mundo muy amplio tal como lo es el desarrollo Back End,
y trabajar estos en conjunto es algo aun muy común en el desarrollo de software, por
lo cual veremos como implementar lo que ya conocemos hasta el momento dentro de un
framework Back End que puede estar realizado en cualquier lenguaje, pero que sigue un
patrón muy similar.

* **Fiverr clone**: El entregable final de este curso es replicar la experiencia del
sitio de _[Fiverr](http://embed.wistia.com/deliveries/0677cb185a93d97d366095fb2886dadbe1a70ec2/file.mp4)_
teniendo un Back End que se encarga del enrutamiento y la data, pero pendiente de la
implementación del Front End.

Main tags: `sass`, `rails`, `mv* back-end architecture`, `database`, `routing`.

Secondary Tags: `mvc`, `orm`, `migrations`, `templating`.

Tiempo estimado: _3 semanas_.

##### [07. Programming Paradigms in the real world](09-paradigms)

_Autor: L. Montero_

Los **Paradigmas de Programación** (_Programming Paradigms_) son formas diferentes
de pensar en cómo se organiza un programa basado en una serie de principios, los
cuales resultan en estilos muy distintos y lenguages muy diversos.

* **Extender video juego 2d**: En este curso formarás parte de un equipo
responsable de extender la funcionalidad de un juego 2d. **Tu equipo tendrá que
dividir tareas, trabajar en parejas y hacer code reviews**. Durante la primera
semana tu equipo tendrá que extender el juego _heredando_ del prototipo de un
constructor ya implementado, mientras que en la segunda semana tendrán que
refactorizar el código de la primera semana usando el paradigma funcional.

* **Refactorizar video juego 2d**: como ejemplo de programación funcional
tendrás que refactorizar el juego con el que se ha estado trabajando en el curso
anterior. La versión refactorizada debe usar los principios de FP e incluir
tests exhaustivos.

Main Tags: `oop`, `fp`, `bundlers`, `prototype`, `inheritance`, `composition`,
`immutability`, `testing`, `task-runner`.

Secondary Tags: `constructors`, `factories`, `hof`, `pure-functions`, `es6`,
`side effects`, `jest`, `gulp`.

Tiempo estimado: _3 semanas_.

##### [08. React](#)

_Autor: M. Crowe_

**React** es una tecnología realmente revolucionaria, que no sólo nos permite
encapsular nuestro código en lindos componentes, si no que representa un cambio
de paradigma que va mucho más allá del navegador o incluso la web. **React** es
una forma de pensar y construir interfaces, y no está ilimitado a una sóla
plataforma; a través de la abstracción de los renderers podemos escribir
interfaces nativas para web, mobile, desktop, tv, ...

* **Slack clone**: El entregable de este curso será desarrollar una aplicación de mensajería
como _[Slack clone](http://embed.wistia.com/deliveries/3adeb0732ada4a32af209d5f4326cb45609ba9f9/file.mp4)_
en la que se haga uso de React para la creación de componentes y además combine
todo lo visto a lo largo del bootcamp.

Main Tags: `react`, `jsx`, `webpack`, `babel`, `jest`.

Secondary Tags: `es6`, `fp`, `components`, `virtual-dom`.

Tiempo estimado: _2 semanas_.

##### [09. Hackathon: Front-End Frameworks - Self-learning Experience](#)

_Autor: ???_

El desarrollo de productos con JavaScript involucra muchos conceptos y mucho código,
sin embargo, hay soluciones que ya han sido probadas en el desarrollo de diversos
proyectos que nos dan una estructura y flujo definido, de tal manera que implementarlo
nos permite despreocuparnos de algunos detalles, a esto se conoce como Framework, y
como todo en tecnología, no hay solo una alternativa, sino, una gama de diversas
opciones que nos permiten llegar a la mejor solución. Como curso final del track de
`Front End Development`, se verán 2 conceptos fundamentales: `Data Binding` y
`Virtual DOM`, con esto durante una semana se llevará a cabo una hackathon en la
cual el reto será desarrollar un producto (debajo se muestra un ejemplo de complejidad)
usando alguna librería y/o framework moderno de JS.

* **Kickstarter clone**: El entregable de este curso será la réplica del flujo del sitio
_[Punchstarter](http://embed.wistia.com/deliveries/0c6b0cd041525381d97cd13d43357ec1ddc48520/file.mp4)_
en el cual debido a la cantidad de vistas y dependencias involucradas en este
proyecto, notaremos la necesidad de usar herramientas que hagan nuestro flujo más
rápido y eficiente.

Tags: `angular`, `vue`, `typescript`, `api`, `real-time`.

Tiempo estimado: _2 semanas_.

#### UX Design

En este track se encontrarán las estudiantes que sientan una mayor afinidad con el diseño
de experiencia de usuario.

#### Maquetadoción Web

En este track se encontrarán las estudiantes que sientan una mayor afinidad con el desarrollo
y diseño de interfaces sin necesidad de profundizar tanto en la lógica de programación.

#### Capstone Project

En este último paso, se dará un espacio para que los diversos tracks se junten y desarrollen
productos juntos, enlazando todos los skills aprendidos e integrándolos.

***

### Educación Continua

El programa de **Educación Continua** en principio se ofrece a egresadas de
nuestro Bootcamp. Tiene una duración de 18 meses durante los cuales se les
quiere ofrecer una selección de cursos que las ayude a seguir creciendo como
desarrolladoras, profundizar conocimientos y apoyarlas en el inicio de sus
carreras como developers.

##### [09. Programming Paradigms](09-paradigms)

_Autor: L. Montero_

Los **Paradigmas de Programación** (_Programming Paradigms_) son formas diferentes
de pensar en cómo se organiza un programa basado en una serie de principios, los
cuales resultan en estilos muy distintos y lenguages muy diversos.

* **Extender video juego 2d**: En este curso formarás parte de un equipo
responsable de extender la funcionalidad de un juego 2d. **Tu equipo tendrá que
dividir tareas, trabajar en parejas y hacer code reviews**. Durante la primera
semana tu equipo tendrá que extender el juego _heredando_ del prototipo de un
constructor ya implementado, mientras que en la segunda semana tendrán que
refactorizar el código de la primera semana usando el paradigma funcional.

Tags: `oop`, `fp`, `constructors`, `prototype`, `inheritance`, `factories`,
`composition`.

##### [10. Functional JavaScript](10-functional)

_Autor: L. Montero_

En este curso te familiarizarás con los principios de la programación funcional,
tan de moda en el mundo de JavaScript.

* **Refactorizar video juego 2d**: como ejemplo de programación funcional
tendrás que refactorizar el juego con el que se ha estado trabajando en el curso
anterior. La versión refactorizada debe usar los principios de FP e incluir
tests exhaustivos.

Tags: `fp`, `hof`, `pure functions`, `immutability`, `side effects`, `es6`,
`testing`, `jest`.

#### [11. React](11-react)

_Autor: M. Crowe_

**React** es una tecnología realmente revolucionaria, que no sólo nos permite
encapsular nuestro código en lindos componentes, si no que representa un cambio
de paradigma que va mucho más allá del navegador o incluso la web. **React** es
una forma de pensar y construir interfaces, y no está ilimitado a una sóla
plataforma; a través de la abstracción de los renderers podemos escribir
interfaces nativas para web, mobile, desktop, tv, ...

* **Convertir video juego 2d en React app**: Convertir video juego en app con
interfaz más completa, high scores, ...

Tags: `react`, `jsx`, `webpack`, `babel`, `jest`

#### [12. Redux](#)

_Autor: M. Crowe / L. Montero_

...

Tags: `react router`, `redux`, `raduim`, ...

#### [13. The Web Stack](13-web-stack)

_Autor: ???_

La web es un ecosistema de estándares, protocolos, lenguajes y software. Pocas
veces nos paramos a pensar en todas las piezas que componen este ecosistema
vivo, desde el modelo TCP/IP o sistemas operativos, hasta HTML/CSS/JS, pasando
por DNS, HTTP (servidores, clientes, proxys), URLs, dominios, ...

Al final del curso habrás construido y desplegado una aplicación usando un
dominio de verdad (?) y presentarás una demo donde explicarás la experiencia, lo
aprendido y cómo encajan las diferentes piezas del web stack en el producto.

Tags: `html`, `css`, `js`, `http`, `url`, `xhr`, `json`, `server`, `client`, ...

#### [14. Building HTTP servers with Node.js](14-nodejs)

_Autor: ???_

Node.js es sin lugar a dudas una de las tecnologías más de moda en Silicon
Valley y el mundo. Como desarrolladoras Full Stack JavaScript, Node.js es una de
las principales herramientas con las que contamos en nuestro arsenal. Node nos
permite llevar nuestro conocimiento de JavaScript más allá del navegador.

En este curso construirás un servidor web que sirva contenido estático además de
algunos endpoints dinámicos que sirvan data en formato JSON.

Tags: `node`, `npm`, `yarn`, `http-server`, `filesystem`, `static-server`, ...

#### [15. Modelando y persistiendo data con NoSQL](15-nosql)

_Autor: ???_

Las bases de datos no relacionales (NoSQL) son una nueva generación de bases de
datos diseñadas específicamente para enfrentar desafíos de escalabilidad y
agilidad en el desarrollo moderno.

En este curso contruirás una aplicación que use una base de datos no relacional
de documentos JSON (MongoDB o CouchDB). Los usuarios de esta aplicación deberán
poder crear "documentos" de varios tipos que podrán salvar, editar, borrar y
sincronizar.

Tags: `nosql`, `data`, `model`, `json`, `concurrency`, `locking`,
`partitioning`, `search` ...

#### [16. Command Line Foo](16-cli)

_Autor: ???_

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

##### [17. NodeJS](#)

_Autor: ???_

Tags: `http`, `file-system`, `express`, `api-development`, `deployment`.


##### [18. Databases](#)

_Autor: ???_

Tags: `schema-design`, `sql`, `no-sql`, `querying`, `performance`, `orm`.

##### [19. ME*N Stack](#)

_Autor: ???_

Tags: `web-stack`, `fullstack-framework`, `routing`, `mv*`, `orm`.

#### [20. Micro services?](#)

_Autor: ???_

Tags: `docker`, `containers`, `clusters`, `scalability`, `partitioning` ...

#### [21. Análisis y visualización de datos](#)

_Autor: ???_

Tags: `estadística`, `map/reduce`, `d3`, `canvas`, ...

#### [22. WebOps/DevOps](#)

_Autor: ???_

Application deployment, management, maintenance, configuration and repair.

Tags: `devops`, `webops`, `deployment`, `maintenance`, `management`, `backup`,
`repair`, `debugging`, ...

#### [23. Algoritmos](#)

_Autor: ???_

Tags: `big-O`, `adhoc`, `search`, `sort`


##### [24. Estructuras de datos](#)

_Autor: ???_

La ciencia de la computación consiste en el estudio de sistemas computacionales
sobretodo relacionado con software, esto incluye su teoría, diseño, desarrollo y
aplicación, dicho esto, en este curso se verán estructura de datos más avanzadas
que las ya vistas (arreglo y objetos) con el objetivo de entender dónde se aplican
y bajo que condiciones.

* **SCM like Git**: Construcción de un `Source Code Manager` al estilo de git
que permita la navegación a través del historial de cambios.

Tags: `time complexity`, `big-o`, `searching`, `sorting`, `stacks`, `queues`,
`graphs`, `binary-trees`.

#### ...

***

## Contribuciones

Toda contribución es **gratamente bienvenida**.

Pero **POR FAVOR** no olvides leer detalladamente la
[guía para contribuidores](CONTRIBUTING.md) antes de enviar un PR.

## Licencia & Copyright

Todos los materiales de este repo son (c) 2017 [Laboratoria](http;//laboratoria.la/).

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
  <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
</a>

Este trabajo está publicado bajo la licencia <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">Creative commons Attribution-ShareAlike 4.0</a>.
