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

El **Bootcamp** tiene una duración de X meses, a tiempo parcial. Las chicas
postularán una vez completado el curso de "Introducción a la programación". 
Una vez dentro, llevarán durante X semanas una serie de temas a la que denominamos 
**Common Core**, a partir de ahí podrán especializarse en 4 perfiles (`tracks`): `UI Developer`, 
`UX Designer`, `Front-End Developer` y `Back-End Developer`.

#### Common Core

En este espacio, las estudiantes experimentarán un poco de los diversos tracks con
la intención de descubrir su afinidad, no se verán todos los temas a profundidad,
pero si lo necesario para poder entender en que track especializarse.

##### [02. Web Development: Getting Started](#)

_Autor: ???_

En este primer curso se construirá un sitio estático desde cero, empezando por entender 
los diversos roles que intervienen en el desarrollo de un producto web. Luego, se verán 
temas como HTML semántico, arquitectura de información, estilos (CSS), agregando interactividad 
con JavaScript a través del DOM y eventos, control de versionamiento de código con git, 
subiendo proyectos a Github y haciendo deployment a GitHub Pages, todo esto acompañado 
de talleres de UX que nos provean de una visión de creación productos eficientes.

Durante este curso, se buscará que todos los temas sean involucrados en la práctica, es 
decir, HTML, CSS, JS y Git será usado en todos los proyectos en proporciones significativas 
con la finalidad de que se encuentren en constante práctica.

* **Portfolio site**: El entregable final del curso será un website estático.
Cada alumna podrá sugerir el tema y scope de su proyecto, con la supervisión de
un instructor. Este portafolio evolucionará durante el transcurso del bootcamp 
y al final se convertirá en tu portafolio real, necesario para el proceso de inserción
laboral.

Tags: `html5`, `semantic markup`, `css3`, `box model`, `selectors`, `display`, `positioning`,
`layout`, `grid-system`, `js`, `es6`, `problem solving (logic)`, `dom`, `eventos`, `git`, 
`unix shell`, `github-pages`, `ux`, `design-thinking`, `lean`, `design-sprint`, `discovery`, 
`research`.

##### [03. Web Development: Getting Deeper](#)

Debido a que los perfiles son afines, el siguiente paso es ver herramientas que se
usan en el desarrollo web de manera profesional. Aquí se verán temas como: Agile (Scrum),
Test Driven Development, Progressive Enhancement (Mobile First), CSS Frameworks,
DOM JavaScript libraries (e.g. jQuery), Git Workflow para equipos.

Tags: `scrum`, `tdd`, `unit-testing`, `mocha`, `media-queries`, `bootstrap`, `flexbox`,
`data-attributes`, `jquery`, `git-workflow`, `synthetiz-and-define`, `sketch`. 

* **Portfolio v2**: El entregable final del curso será un website aun estático pero 
con herramientas que hacen un producto con mayor calidad, agregando herramientas usadas 
en el mercado como CSS Frameworks y JS libraries, además de usar metodologías 
de trabajo colaborativo y enfocado a pruebas.

#### JS Core

En este track se encontrarán las estudiantes que sientan una mayor afinidad con la programación 
y JavaScript de tal manera que puedan especializarse en `Front-End Development` o `Back-End 
Development`.

##### [04. JS Deep Dive](#)

_Autor: ???_

Este curso incluye un poco más de teoría de lo habitual. Cubriremos `tipos de datos`, `operadores`, 
`objetos` y `funciones` en profundidad.

* **Calculadora**: en este curso construirás una calculadora que permita sumar,
restar, multiplicar, dividir y calcular potencias. La calculadora se
implementará como una web app escrita puramente en vanilla JS dentro del
navegador.

Tags: `tipos de datos`, `operadores`, `funciones`, `objetos`, `execution context`, `es6`, ...

##### [05. Programming Paradigms](09-paradigms)

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

##### [06. Computer Science](#)

_Autor: ???_

La ciencia de la computación consiste en el estudio de sistemas computacionales 
sobretodo relacionado con software, esto incluye su teoría, diseño desarrollo y 
aplicación, dicho esto, en este curso se verán temas como algoritmos, notación 
asintótica, estructura de datos, patrones de diseño aplicados al desarrollo web. 

* **SCM like Git**: Construcción de un `Source Code Manager` al estilo de git 
que permita la navegación a través del historial de cambios.

Tags: `searching`, `sorting`, `stacks`, `queues`, `graphs`, `binary-trees`,
`solid`, `mvc`, `singleton`.

##### [07. Internet Deep Dive](#)

_Autor: ???_

En este curso se verán temas de `network` para entender qué es lo que sucede 
por detrás de la web (arquitectura cliente-servidor), para luego profundizar en 
temas de diseño de APIs para luego poder consumirlos o desarrollarlos.

* ** AirBnB **: Construcción de un que permita registrar lugares de hospedaje a 
través de un API y que luego puedan ser consumidas en una aplicación cliente que
haga el proceso de búsqueda y reserva.

Tags: `http`, `tcp-ip`, `dns`, `networking`, `json`, `api`, `rest`, `auth`, `xhr`, 
`microservices`.


#### Front-End Development


##### [08. JS Next Steps](#)

_Autor: ???_

Tags: `browser-apis`, `geolocation`, `web-storage`, `web-sockets`, `web-workers`,  
`web-rtc`, `progressive-web-apps`.

##### [09. Functional JavaScript](10-functional)

_Autor: L. Montero_

En este curso te familiarizarás con los principios de la programación funcional,
tan de moda en el mundo de JavaScript.

* **Refactorizar video juego 2d**: como ejemplo de programación funcional
tendrás que refactorizar el juego con el que se ha estado trabajando en el curso
anterior. La versión refactorizada debe usar los principios de FP e incluir
tests exhaustivos.

Tags: `fp`, `hof`, `pure functions`, `immutability`, `side effects`, `es6`,
`testing`, `jest`

##### [10. Build Tools](#)

_Autor: ???_

Tags: `package-manager`, `babel`, `bundlers`, `pre-processors`, `linter`, `testing`, 
`task-runner`.


##### [11. Front-End Frameworks](#)

_Autor: ???_

Tags: `react`, `angular`, `vue`, `typescript`, `flow`.

#### Back-End Development

##### [08. NodeJS](#)

_Autor: ???_

Tags: `http`, `file-system`, `express`, `api-development`, `deployment`.


##### [09. Databases](#)

_Autor: ???_

Tags: `schema-design`, `sql`, `no-sql`, `querying`, `performance`, `orm`.

##### [10. ME*N Stack](#)

_Autor: ???_

Tags: `web-stack`, `fullstack-framework`, `routing`, `mv*`, `orm`.

#### UX Design

En este track se encontrarán las estudiantes que sientan una mayor afinidad con el diseño 
de experiencia de usuario.

#### UI Developer

En este track se encontrarán las estudiantes que sientan una mayor afinidad con el desarrollo 
de interfaces sin necesidad de profundizar tanto en la lógica de programación.

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

#### [17. Micro services?](#)

_Autor: ???_

Tags: `docker`, `containers`, `clusters`, `scalability`, `partitioning` ...

#### [18. Análisis y visualización de datos](#)

_Autor: ???_

Tags: `estadística`, `map/reduce`, `d3`, `canvas`, ...

#### [19. WebOps/DevOps](#)

_Autor: ???_

Application deployment, management, maintenance, configuration and repair.

Tags: `devops`, `webops`, `deployment`, `maintenance`, `management`, `backup`,
`repair`, `debugging`, ...

#### [20. Algoritmos](#)

_Autor: ???_

Tags: `big-O`, `adhoc`, `search`, `sort`

#### [21. Estructuras de datos](#)

_Autor: ???_

Tags: `cs`, `arrays`, `objects`, `stacks`, `sets`, `queues`, `graphs`, `trees`

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
