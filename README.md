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
de complejidad y scope gradualmente más complejo.

En este issue puedes seguir y/o paricipar en la discusión abierta sobre el
modelo: [Aprendizaje orientado a _productos_](https://github.com/Laboratoria/curricula-js/issues/3)

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
el _bootcamp_ tendrán en cuenta que las alumnas estudia a tiempo completo, **no** dominan el idioma ingles y
dedican tiempo todos los días, mientras que los _cursos_ de _educación continua_
están dirigidos a un público que trabaja, y por lo tanto tiene mucho menos
disponibilidad de tiempo (aprox. 7h por semana).

Los _cursos_ se dividen en 3 _fases_: _prep_ (curso online de 1 mes), _bootcamp_
(cursos blended full-time o part-time, 6 meses) y _educación contunua_ (cursos
blended 7 horas por semana, 18 meses).

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
* [learnyouhtml](https://github.com/denysdovhan/learnyouhtml): Learn you how to
  create your first web-page.
* [git-it](https://github.com/jlord/git-it-electron): Git-it is a (Mac, Win,
  Linux) Desktop App for Learning Git and GitHub

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

***

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

* **Portfolio site**: El entregable final del curso será un website estático.
Cada alumna podrá sugerir el tema y scope de su proyecto, con la supervisión de
un instructor. Este portafolio lo seguirás iterando durante el curso y al final
se convertirá en tu portafolio real, necesario para el proceso de inserción
laboral.

#### [03. Server-less Single Page Apps: el reinado de JavaScript](#)

_Autor: ???_

Hoy en día la web no es sólo una plataforma para publicar contenido, sino que se
ha convertido en la plataforma de computación más grande! Esto significa que
las "páginas web" han ido evolucionando hasta convertirse en "aplicaciones".
Cada vez encontramos más funcionalidad e interacción, y en este contexto
JavaScript es la pieza que ha permitido el desarrollo de éstas aplicaciones.

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

Una vez completada to primera SPA en la lección anterior, ahora tendrás la
oportunidad continuar con su desarrollo, y a través de continuous enhancement
añadir nueva funcionalidad, como autenticación, múltiples usuarios y
almacenamiento de datos en un servicio cloud.

Node.js, AJAX, Testing, auth

* **Notes App: multi user, cloud data**: continúa con la aplicación iniciada en
el curso anterior. En esta iteración añadirás un back-end que permita hacer
autenticación, almacenar data, y así pasar a una experiencia multi-usuario.

Tags: `node.js`, `xhr`, `json`, `mocha`, `firebase`, `docs`, `cli`, `auth`,
`regular expressions`, `rest`

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

***

### Educación Continua

El programa de **Educación Continua** en principio se ofrece a egresadas de
nuestro Bootcamp. Tiene una duración de 18 meses durante los cuales se les
quiere ofrecer una selección de cursos que las ayude a seguir creciendo como
desarrolladoras, profundizar conocimientos y apoyarlas en el inicio de sus
carreras como developers.

#### [08. JS Deep Dive](#)

_Autor: ???_

El programa de _educación continua_ arranca con un curso que incluye un poco más
de teoría de lo habitual. Cubriremos `tipo`, `operadores`, `objetos` y
`funciones` en profundidad.

* **Calculadora**: en este curso construirás una calculadora que permita sumar,
restar, multiplicar, dividir y calcular potencias. La calculadora se
implementará como una web app escrita puramente en vanilla JS dentro del
navegador.

Tags: `tipos de datos`, `operadores`, `funciones`, `objetos`,
`execution context`, `es6`, ...

#### [09. Programming Paradigms](09-paradigms)

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
`composition`

#### [10. Functional JavaScript](10-functional)

_Autor: L. Montero_

En este curso te familiarizarás con los principios de la programación funcional,
tan de moda en el mundo de JavaScript.

* **Refactorizar video juego 2d**: como ejemplo de programación funcional
tendrás que refactorizar el juego con el que se ha estado trabajando en el curso
anterior. La versión refactorizada debe usar los principios de FP e incluir
tests exhaustivos.

Tags: `fp`, `hof`, `pure functions`, `immutability`, `side effects`, `es6`,
`testing`, `jest`

#### [11. Intro to React](11-react-intro)

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

#### [12. React Deep Dive](12-react-deep-dive)

_Autor: M. Crowe / L. Montero_

...

Tags: `react router`, `redux`, `raduim`, ...

#### [13. The Web Stack](#)

_Autor: ???_

Diseñar, construir y desplegar un site estático que use una API con CORS.

Tags: `html`, `css`, `js`, `http`, `url`, `xhr`, `json`, `rest`, `server`,
`client`, ...

#### [14. Command Line Foo](#)

_Autor: ???_

Tags: `shell arguments`, `filesystem`, ...

#### [15. Node.js](#)

_Autor: ???_

Tags: `npm`, `yarn`, `HTTP Server`, `filesystem`, ...

#### [16. Micro services?](#)

_Autor: ???_

Tags: `docker`, `containers`, `clusters`, `scalability`, `partitioning` ...

#### [17. Angular 2?](#)

_Autor: ???_

Tags: ...

#### [18. Análisis y visualización de datos](#)

_Autor: ???_

Tags: `estadística`, `map/reduce`, `d3`, `canvas`, ...

#### [18. WebOps/DevOps](#)

_Autor: ???_

Application deployment, management, maintenance, configuration and repair.

Tags: `devops`, `webops`, `deployment`, `maintenance`, `management`, `backup`,
`repair`, `debugging`, ...

#### [19. Algoritmos](#)

_Autor: ???_

Tags: `big-O`, `adhoc`, `search`, `sort`

#### [20. Estructuras de datos](#)

_Autor: ???_

Tags: `cs`, `arrays`, `objects`, `stacks`, `sets`, `queues`, `graphs`, `trees`

#### ...

***

## Guías de estilos

JavaScript:

* [Frontend: AirBnB](https://github.com/airbnb/javascript)
* [Node.js: Hapi](https://hapijs.com/styleguide)

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
