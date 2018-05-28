# Data Dashboard

## Preámbulo

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al desempeño de las estudiantes para
apoyarlas en su aprendizaje.

Desde hace unos meses tenemos un sistema donde nuestras estudiantes acceden a
contenidos de aprendizaje (lecturas, ejercicios, quizzes, ...), nuestro LMS, el
cual acumula data sobre quién leyó qué, qué ejercicios se han completado y los
resultados de los quizzes, ...

Al ser todavía una aplicación en su infancia, el LMS por ahora no implementa una
visualización de esta data que permita a las TMs ver fácilmente el avance de las
estudiantes con respecto a estos contenidos. Así que nos han pedido que
construyamos una interfaz donde pueden _ver_ y _usar_ esa data y que así puedan
tomar decisiones de una forma más informada. Para ello hemos propuesto crear un
data dashboard.

## Introducción

Sí pensamos en un dashboard podemos pensar en el tablero de control de un auto
o el de un avión. Un espacio desde el cuál un usuario puede tener acceso a la
información y controles más relevantes, en este caso, del vehículo que está
utilizando. El dashboard de un auto le permite a quien conduce saber a qué
velocidad está yendo, qué cambio está utilizando, cuánto combustible tiene
disponible, qué tan caliente está el motor, cuántas revoluciones por minuto
dan las ruedas, cuánta distancia has recorrido, etc.

![car dashboard](https://img.buzzfeed.com/buzzfeed-static/static/2017-02/7/12/enhanced/buzzfeed-prod-fastlane-03/original-17515-1486490056-3.jpg?crop=2041:1068;80,248)

En el mundo de la web, también se utilizan dashboards, de hecho wikipedia nos
dice que un dashboard puede ser un resumen gráfico de varias piezas de
información importante, generalmente utilizadas para dar una visión general de
una empresa o de un servicio. Así tenemos dashboards como el de
[Google Analytics](https://assets.econsultancy.com/images/resized/0003/3813/mobile_commerce_dashboard-blog-full.png)
o el de [Mailchimp.](https://blog.mailchimp.com/wp-content/uploads/2016/11/Dashboard-view-3-Copy-1008x768.jpg)

**Para el proyecto #2 del bootcamp propondrás y crearás un dashboard.**

## Objetivos

El objetivo principal de aprendizaje de este proyecto es construir una
_interfaz_ web donde podamos visualizar y manipular data.

Tópicos: [arrays](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/javascript/04-arrays),
[objects](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/javascript/05-objects),
[dom](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/browser/02-dom),
[xhr](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/browser/04-xhr),
...

Habilidades blandas:

* Esperamos que en este proyecto puedas pensar en el cliente, entendiendo cuál
  es mejor sistema de visualización del data dashboard según sus necesidades.
* Nos interesa que logres entender a las necesidades de los usuarios para los
  que crearás el producto y los ayudes a resolver esas necesidades.
* Además, que puedas trabajar de manera colaborativa con tu pareja, buscando
  feedback constante para realizar el proyecto.

## Consideraciones generales

Este proyecto se debe "resolver" en parejas.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) usando el
comando `npm test`.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── data
│   ├── cohorts
│   │   └── lim-2018-03-pre-core-pw
│   │       ├── progress.json
│   │       └── users.json
│   └── cohorts.json
├── package.json
├── src
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    ├── data.spec.js
    ├── fixtures.js
    ├── headless.js
    └── index.html
```

La carpeta `data/` dentro del _boilerplate_ incluye un extracto de la data que
podemos usar tanto en los tests como en la interfaz en sí.

## Parte obligatoria

### Definición del producto

En el `README.md` cuéntanos cómo pensaste y te acercaste a los usuarios al
desarrollar tu producto y cuál fue tu proceso para definir el producto final a
nivel de experiencia y de interfaz. Si tienes fotos de entrevistas,
cuestionarios y/o sketches compártelos. Además, detalla:

* quiénes son los principales usarios de producto
* cuáles son los objetivos de estos usarios en relación con el producto
* cuáles son los dato más relevantes que el usuario quiere ver en la interfaz y
  por qué. Cómo los descubriste.
* cuándo es que el usuario revisar normalmente estos datos
* cómo crees que el producto que estás creando les está resolviendo sus
  problemas
* cómo fue tu proceso de diseño

### UI

La interfaz debe permitir al usuario:

* Listar/seleccionar cohorts
* Dentro de cada cohort:
  - Listar alumnas
  - Para cada alumna:
    + Calcular porcentaje de completitud de todos los _cursos_ por alumna.
    + Calcular grado de completitud de _lecturas_, _ejercicios autocorregidos_,
      y _quizzes_.
  - Ordenar alumnas por completitud _general_ (porcentaje consumido/completado
    de todos los cursos del cohort en cuestión), de _lecturas_, _ejercicios
    autocorregidos_ y _quizzes_ (tanto por completitud - cuántos quizzes ha
    completado del total - como por puntuación promedio de los quizzes
    completados).
  - Filtrar/buscar alumnas por nombre
* Mostrar los datos más relevantes primero
* Utiliza la interfaz sin problemas desde distintos tamaños de pantallas:
  móviles, tablets, desktops

Además, la interfaz deberá seguir los fundamentos de visual design como
contraste, alineación, jerarquía, entre otros.

## Implementación

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos y
objetos. La idea de este archivo es contener toda la funcionalidad
que corresponda a obtener, procesar y manipular datos.

Parte de un buen proyecto es que esté ordenado y que otras programadoras puedan
acceder a el código rápidamente. Es por esto que este orden no es casualidad y
es una convención donde tratamos de separar responsabilidades entre diferentes
componentes o partes de nuestra aplicación, como por ejemplo en el patrón MVC o
Modelo Vista Controlador.

El _boilerplate_ incluye tests que esperan que implementes las
siguientes 4 funciones y las _exportes_ al entorno global (`window`) dentro del
script `src/data.js`, ten en cuenta que esto es solo lo básico, si necesitas más
funciones puedes hacerlo:

#### `computeUsersStats(users, progress, courses)`

Esta función es la responsable de "crear" la lista de usuarios (estudiantes)
que vamos a "pintar" en la pantalla. La idea es "recorrer" el arreglo de
usuarios (`users`) y calcular los indicadores necesarios de progreso para cada
uno. La función debe devolver un nuevo arreglo de usuarios donde a cada objeto
de usuario se le debe agregar una _propiedad_ con el nombre `stats` con las
estadísticas calculadas.

##### Argumentos

* `users`: Arreglo de objetos obtenido de la data en bruto.
* `progress`: Objeto de progreso en bruto. Contiene una llave para cada usuario
  (`uid`) con un objeto que contiene el progreso del usuario para cada curso.
* `courses`: Arreglo de _strings_ con los _ids_ de los cursos del cohort en
  cuestión. Esta data se puede extraer de la propiedad `coursesIndex` de los
  objetos que representan los _cohorts_.

##### Valor de retorno

Un arreglo de objetos _usuario_ con la propiedad `stats`, la cual debe ser un
objeto con las siguientes propiedades:

* `percent`: Número entero entre 0 y 100 que indica el porcentaje de completitud
  general del usuario con respecto a todos los cursos asignados a su cohort.
* `exercises`: Objeto con tres propiedades:
  - `total`: Número total de ejercicios autocorregidos presentes en cursos del
    cohort.
  - `completed`: Número de ejercicios autocorregidos completados por el usuario.
  - `percent`: Porcentaje de ejercicios autocorregidos completados.
* `reads`: Objeto con tres propiedades:
  - `total`: Número total de lecturas presentes en cursos del cohort.
  - `completed`: Número de lecturas completadas por el usuario.
  - `percent`: Porcentaje de lecturas completadas.
* `quizzes`: Objeto con cinco propiedades:
  - `total`: Número total de quizzes presentes en cursos del cohort.
  - `completed`: Número de quizzes completadas por el usuario.
  - `percent`: Porcentaje de quizzes completadas.
  - `scoreSum`: Suma de todas las puntuaciones (score) de los quizzes
    completados.
  - `scoreAvg`: Promedio de puntuaciones en quizzes completados.

#### `sortUsers(users, orderBy, orderDirection)`

La función `sortUsers()` se encarga de _ordenar_ la lista de usuarios creada con
`computeUsersStats()` en base a `orderBy` y `orderDirection`.

##### Argumentos

* `users`: Arreglo de objetos creado con `computeUsersStats()`.
* `orderBy`: String que indica el criterio de ordenado. Debe permitir ordenar
  por nombre, porcentaje de completitud total, porcentaje de ejercicios
  autocorregidos completados, porcentaje de quizzes completados, puntuación
  promedio en quizzes completados, y porcentaje de lecturas completadas.
* `orderDirection`: La dirección en la que queremos ordenar. Posibles valores:
  `ASC` y `DESC` (ascendiente y descendiente).

##### Valor de retorno

Arreglo de usuarios ordenado.

#### `filterUsers(users, search)`

##### Argumentos

* `users`: Arreglo de objetos creado con `computeUsersStats()`.
* `search`: String de búsqueda.

##### Valor de retorno

Nuevo arreglo de usuarios incluyendo solo aquellos que complan la condición de
filtrado, es decir, aquellos que contengan el string _search_ en el nombre
(`name`) del usuario.

#### `processCohortData(options)`

Esta función es la que deberíamos estar al seleccionar un cohort y cada vez que
el usuario cambia los criterios de ordenado y filtrado en la interfaz. Esta
función debe invocar internamente a `computeUsersStats()`, `sortUsers()` y
`filterUsers()`.

##### Argumentos

* `options`: An object with the following keys:
  - `cohort`: Objeto cohort (de la lista de cohorts)
  - `cohortData`: Objeto con dos propiedades:
    + `users`: Arreglo de usuarios miembros del cohort.
    + `progress`: Objeto con data de progreso de cada usuario en el contexto de
      un cohort en particular.
  - `orderBy`: String con criterio de ordenado (ver `computeUsersStats`).
  - `orderDirection`: String con dirección de ordenado (ver `computeUsersStats`).
  - `search`: String de búsqueda (ver `filterUsers`)

##### Valor de retorno

Nuevo arreglo de usuarios _ordenado_ y _filtrado_ con la propiedad `stats`
añadida (ver `computeUsersStats`).

### `src/main.js`

Ten en cuenta también que existe otro archivo `src/main.js` que no está solo por
casualidad en la estructura del proyecto. En general es una buena idea ir
separando la funcionalidad en varios archivos, ya que a medida que un proyecto
crece, se vuelve insostenible dejar todo en un solo archivo. En este caso puedes
usar `main.js` para todo tu código que tenga que ver con mostrar los datos en la
pantalla, y `data.js` para todas las funciones que vimos que obtienen y
manipulan los datos.

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/index.html`

Al igual que en el proyecto anterior, también existe un archivo `index.html`.
Como ya sabrás, acá va la página que se mostrará al usuario de este tablero de
información. También nos sirve para indicar qué scripts se usarán y unir todo lo
que hemos hecho.

### `data/`

En esta carpeta están los datos de prueba del proyecto, contiene información
sobre los cohortes (grupos de alumnas de una generación y rama en particular),
estudiantes y su progreso en cada uno de los cursos que son parte de cada
cohorte. Para poder usar cada uno de los archivos JSON, puedes ocupar el mismo
método que usarías si es que estuvieses haciendo una llamada HTTP o a una API,
pero usando una dirección **relativa**, ejemplo:

```
"../data/cohorts.json"
```

### `test/`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en `src/data.js`, que encontrarás en el archivo `data.spec.js`.
Si te fijas bien en la carpeta también encontrarás otros archivos, que
detallaremos a continuación:

#### `test/index.html`

No confundas este archivo con tu `index.html` del proyecto, este archivo es
especial para los test y es una manera de ver el resultado de tus pruebas
unitarias, pero en el navegador. Para arrancar las pruebas de esta forma,
escribe en tu consola:

```
npm run test-browser
```

Una página se abrirá en tu navegador conteniendo los resultados de las pruebas.

#### `test/fixtures.js`

Muy importante archivo, aunque no siempre estará (depende del proyecto). Acá es
donde está el set de datos de prueba que se usarán para correr las pruebas.

### Habilidades blandas

Para completar este proyecto deberás realizar una planificación general del
proyecto, donde esperamos logres generar un plan paso a paso de cómo resolverás
el proyecto. Deberás considerar las distintas secciones del data dashboard, los
recursos y el tiempo que dispones.

Para lograrlo, deberás trabajar de manera colaborativa con tu compañera, para
esto tienen que coordinarse en la construcción del producto, viendo de qué
manera quieren trabajar y qué responsabilidades tendrá cada una para que así
cumplan con los tiempos de entrega y ejecución.

Para este proyecto busca instancias de code review, donde deberás buscar
feedback de tu código con otro dupla, para que puedas mejorar el producto.
Mientras más feedback recibas, mejor será su producto.

Nos interesa ver tu capacidad de autoaprendizaje, por lo que esperamos que
logren realizar el hacker edition, de esta manera podrás llevar tu producto al
siguiente nivel.

Para finalizar, deberás presentar su data dashboard al resto del curso, para
esto necesitarás que tu demo tenga acceso desde cualquier computador y que
puedas realizar una presentación que permita a todos comprender lo realizado.
Sabemos que puede ser una instancia difícil, esperamos que logres mostrar su
trabajo y los demás lo comprendan.

## Hacker edition

Desde Laboratoria creemos que para llevar tu data dashboard al siguiente nivel
necesitas trabajar en equipo y buscar feedback.

Para eso buscas instancias de feedback o code review, entregando tu opinión a
los demás de forma constructiva, fundamentada y coherente con el fin de ayudar a
los demás. Escuchas y valoras los comentarios y críticas de los demás,
rescatando aspectos que te sirvan para su mejora.

Además, realizas un excelente trabajo con tu pareja y squad. Trabajas de manera
coordinada y contribuyes al objetivo común, entregando ideas para la
construcción del producto, respetando el trabajo de tu compañera. Además,
entregas tu trabajo a tiempo y colaboras con el objetivo final del data
dashboard, ayudando a tu compañera con los pendientes, con el fin de entregar un
proyecto de calidad.

Para el lado de UX Design, puedes crear y testesar un prototipo usando
softwares de diseño y prototipado como Marvel, Invision, Figma, entre otros.

Features/características extra sugeridas:

* [Live API](https://api.laboratoria.la/)
* Gráficas
* Detalle de progreso de cada alumna (por curso)
* Estadísticas de progreso de todo el cohort

## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages.

## Evaluación

### Tech

[tbd]

### UX

Para este proyecto queremos que intentes llegar al nivel 3 del skill User
Centricity en tus UX skills. Adicionalmente, buscamos que llegues al nivel 2 en
3 de las habilidades de visual design detalladas aquí y al nivel 3 en 2 de
ellas. Te aconsejamos revisar la rúbrica.

* **User centricity:** entiendes al usuario a través de la investigación,
  realizas entrevistas y observas al usuario en ambientes controlados.
* **Contraste:** diferencias colores de fondo y de texto en los componentes más
  importantes como títulos y botones, diferenciándolos por su contraste.
* **Alineación:** alineas los componentes más importantes como títulos, imágenes
  y botones.
* **Jerarquías:**  diferencias la importancia de algunos componentes en la
  interfaz. Sin embargo, no hay consistencia en las jerarquías cuando se cambian
  los tamaños de pantallas.
* **Tipografías:** utilizas tipografías distintas a las que vienen por defecto.
* **Color:** utilizas colores distintos a los que vienen por defecto. Usas
  distintos colores para textos, botones, fondos, etc.
* **Usabilidad:** aplicas al menos 3 de las 10 heurísticas de usabilidad de NN.

### Habilidades blandas

Para este proyecto esperamos que ya hayas alcanzado el nivel 2 en todas tus
habilidades blandas. También esperamos que alcances nivel 3 en por lo menos tres
de estas habilidades. Sabemos que no siempre es fácil pero puedes lograrlo.

* **Trabajo en equipo:** trabajas de manera coordinada y contribuyes al objetivo
  común, entregando ideas para la construcción del producto. Entregas tu trabajo
  a tiempo y colaboras con el objetivo final del trabajo, con el fin de entregar
  un producto de calidad.
* **Dar y recibir feedback:** escuchas y valoras los comentarios y críticas de
  los demás, rescatando aspectos que le sirvan para su mejora. Además, entregas
  tu opinión a los demás de forma constructiva, fundamentada y coherente con el
  fin de ayudar a tu squad o compañeras.
* **Autoaprendizaje:** realizas preguntas sobre la materia, buscando aclarar
  conceptos y resolver dudas. Además pides referencia de materiales que pueden
  ser de utilidad para tu aprendizaje.
* **Solución de problemas:** buscas soluciones alternativas a problemas de
  diversa complejidad, a pesar de que no todas las soluciones puedan ser
  correctas, buscas distintas fuentes para resolver el problema. Comienzas a
  aplicar tu propia creatividad para resolver problemas independientemente.
* **Planificación y manejo del tiempo:** utilizas herramientas de planificación,
  como un calendario, trello, papelógrafo u otras, creando un plan paso a paso
  de cómo quiere abarcar el reto o problema. Realizas una estimación realista
  del tiempo.
* **Adaptabilidad:** ante cambios inesperados o nuevos desafíos los recibes con
  una actitud positiva, te adaptas y logras proponer soluciones creativas para
  encontrar una nueva estrategia. De esta manera, logras asumir retos, enfrentas
  los cambios repentinos, como trabajar con nuevos equipos o cambios en el
  proyecto.
* **Comunicación eficaz:** logras comunicar sus ideas a los demás, teniendo
  capacidad de síntesis y articulando sus ideas con claridad.
* **Presentaciones:** cualquier persona puede acceder al demo desde cualquier
  equipo. El demo se ve y funciona correctamente, logrando priorizar qué mostrar
  en el demo, pudiendo enseñar algunas veces menos elementos pero funcionales.
  Realizas algún contacto visual con la audiencia, te apropias del espacio
  físico y hablas con un volumen y ritmo que no interfieren con el entendimiento
  de la audiencia.

***

## Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
  condiciones, algo como [Atom](https://atom.io/) o
  [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
  [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
  que es un programita que interpreta líneas de comando (command-line
  interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
  instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
  ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
  también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
  aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
  del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo
  privado y te darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
  tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
  install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
  incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
  pruebas unitarias (unit tests) con el comando `npm test`.
7. A codear se ha dicho! :rocket:

## Tips / Pistas

* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
