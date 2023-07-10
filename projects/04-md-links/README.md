# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Hitos](#6-hitos)
* [7. Hacker edition](#7-hacker-edition)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Para pedir project feedback](#9-para-pedir-project-feedback)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en
muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, etc.) y
es muy común encontrar varios archivos en ese formato en cualquier tipo de
repositorio (empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://github.com/Laboratoria/bootcamp/assets/12631491/fc6bc380-7824-4fab-ab8f-7ab53cd9d0e4)

## 2. Resumen del proyecto

En este proyecto desarrollarás una librería en Node.js que funcionará como
herramienta para analizar links dentro de archivos Markdown. Esta librería
estará disponible de dos formas: como un módulo publicado en GitHub, que las
usuarias podrán instalar e importar en otros proyectos, y como una interfaz
de línea de comandos (CLI) que permitirá utilizar la librería directamente
desde el terminal.

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, etc.

En esta oportunidad nos alejamos un poco del navegador para construir una
librería que interactua con el sistema archivos y un script que se ejecute
usando Node.js. Aprenderemos cómo buscar y leer archivos, cómo hacer consultas
de red, sobre procesos (`process.env`, `process.argv`, ...), etc.

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrolladora porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otras developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.
Al finalizar, podrás instalar esta librería utilizando NPM (Node Package
Manager), que facilita la búsqueda e instalación de librerías de Node a
través de su registro y también de GitHub. Una vez que hayas subido la
librería a tu repositorio público, será accesible para otras developers.

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será auomáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

* Este proyecto se debe "resolver" de manera individual.

* El rango de tiempo estimado para completar el proyecto es de 3 a 5 sprints.

* Consideramos los hitos 1 y 2 como los criterios de aceptación mínimos del proyecto.

* Enfócate en aprender y no solamente en "completar" todos los hitos del proyecto.

* Te sugerimos que no intentes saber todo de Node.js antes de empezar a codear.
  No es necesario tomar un curso de Node.js completo. Aprenderás a medida que
  avances en el proceso.

## 5. Consideraciones técnicas

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio.

* En este proyecto hay que adoptar las convenciones que los proyectos open
  source de software usan para hacer seguimiento. Vas a usar Github projects
  con **[issues](https://docs.github.com/es/issues)** y
  **[milestones](https://docs.github.com/es/issues/using-labels-and-milestones-to-track-work/about-milestones)**
  para priorizar y organizar el trabajo y hacer seguimiento de tu proceso.
  Dentro de cada milestone crearás los issues que
  consideres necesarios.

* La **librería** y el **script ejecutable** (herramienta de línea de comando -
  CLI) deben estar implementados en JavaScript para ser ejecutados con
  Node.js. **Está permitido usar librerías externas**.

* Tu módulo **debe ser instalable** via `npm install <github-user>/md-links`. Este
  módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea de
  comando como una interfaz que podamos importar con `require` para usarlo
  programáticamente.

* Los **tests unitarios** deben cubrir un mínimo del 70% de _statements_,
  _functions_, _lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/)
  para tus pruebas unitarias.

* Para este proyecto **no está permitido** utilizar `async/await`.

* Para este proyecto, te recomendamos utilizar los módulos CommonJS con
  `require`,  que es el formato de módulos original de Node.js. Si prefieres
  utilizar ES Modules `(import/export)`, puedes hacerlo, pero ten en cuenta que
  deberás configurar adecuadamente tu proyecto para que Node.js pueda utilizar
  este formato. Puedes encontrar más información al respecto
  [aquí](https://nodejs.org/api/esm.html#enabling). Algo a tener en
  consideración también, es el [soporte](https://jestjs.io/docs/ecmascript-modules)
  de Jest para ES Modules el mismo que aún es experimental.

* Para este proyecto, te recomendamos evitar el uso de la función síncrona
  `readFileSync` para leer archivos. En su lugar, te sugerimos abordar este
  desafío de manera asíncrona utilizando `readFile`. Además, si utilizas el
  módulo [require("fs/promises")](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html),
  podrás aprovechar las promesas con `readFile`.

* Para disminuir la complejidad de tu algoritmo recursivo, te recomendamos
  utilizar la versión síncrona de la función para leer directorios, `readdirSync`.

### Descripción de los archivos del proyecto

* `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
* `index.js`: Desde este archivo debes exportar **una** función (`mdLinks`).
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...), main, bin
* `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
* `.eslintrc` con configuración para linter. Este archivo contiene una
  configuración básica para ESLint, si deseas agregar reglas adicionales
  como Airbnb deberás modificar este archivo.
* `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
* `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Tu implementación debe pasar estos tests.

Este proyecto lo puedes ir construyendo por hitos. A continuación te sugerimos algunos:

## 6. Hitos

Recuerda que la mejor manera de abordar un problema es descomponiéndolo en
problemas más pequeños. Por esta razón, te recomendamos que completes este
proyecto trabajando por hitos. A continuación, encontrarás los hitos que puedes
seguir:

### **HITO 1:** Javascript API

Comienza haciendo la versión más sencilla de `mdlinks`. Crea una función que
devuelva una promesa con los links encontrados dentro de un archivo markdown
específico.

Esta función debe ser un módulo que puede **importarse** en otros scripts de
Node.js y debe ofrecer la siguiente interfaz:

`mdLinks(path)`

Argumento:

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
Si la ruta pasada es relativa, debe resolverse como relativa al directorio
desde donde se invoca node (transformar a absoluta).

Valor de retorno:

La función `mdLinks(path)` debe **retornar una promesa** que **resuelva a un**
**arreglo de objetos**, donde cada objeto representa un link y contiene las
siguientes propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link.
* `file`: Ruta del archivo donde se encontró el link.

Ejemplo:

(resultados como comentarios)

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
```

Test unitarios:

Los tests unitarios son una excelente forma de verificar si tus funciones están
funcionando correctamente mientras escribes el código. En este proyecto,
recuerda que no hay una interfaz gráfica de navegador, por lo tanto para
poderlo probar es necesario recurrir a los test unitarios.

Recuerda que es muy importante testear tus funciones puras, mientras
escribes la función `mdLinks`. Y cuando ésta esté terminada, también deberás
testearla  al final asegurándote que resuelva un arreglo con la
información esperada.

Ejemplo:

```js

describe('mdLinks', () => {
  it('debería retornar un arreglo con 3 links para un archivo .md con 3 links', ()=>{
    return mdLinks('miArchivo.md').then((result) => {
      expect...;
    });
  });
});

```

#### Tareas de este hito

* Crea una promesa

  El valor de retorno de nuestra librería es una _Promesa_ que resuelve un
  _array_. Prueba leyendo sobre las promesas y creando una por tu cuenta
  utilizando `new Promise()`

  Es importante que sepas qué es un callback pues las promesas los utilizarán.

* Transforma la ruta ingresada a absoluta

  Los módulos de node.js que utilizarás después, trabajan con rutas absolutas.
  Entonces, si a la función `mdlinks()`, se le pasa una ruta relativa, debes
  convertirla a absoluta primero. Puedes valerte del módulo `path`, con su
  método `resolve()`.

* Comprueba que la ruta existe en el computador

  Una vez que tienes la ruta absoluta, asegúrate que la ruta exista en el
  computador. Este paso es importante, ya que si la ruta ingresada es erronea
  la función `mdLinks()` deberá rechazarse con un error.

* Asegúrate que el archivo es markdown

  Como la ruta que se utilizará para este hito, será la ruta de un archivo
  en específico, aventúrate a conocer cuál es su extensión.

  Recuerda, las extensiones son esas letras al final del nombre de un archivo,
  por ejemplo: .js, .txt, .doc, etc

  Aquí podrá ser útil el módulo `path`.

  En caso de que la extensión del archivo no sea md, la promesa de la función
  mdLinks debería rechazarse con un error.

* Lee un archivo

  Ahora que sabes que el archivo es del tipo markdown, lee este archivo y
  retorna su contenido. Para ver este contenido puedes utilizar un
  `console.log()` al momento de ejecutar la función.

  El módulo `fs` (FileSystem) te será de utilidad. Como mencionamos en las
  consideraciones técnicas, preferimos que uses `readFile` (en lugar de
  `readFileSync`) y recomendamos el módulo `fs/promises` para utilizar estas
  funciones con promesas.

* Encuentra los links dentro del documento.

  Una vez tienes acceso al contenido del archivo, extrae los links que
  encuentres dentro del mismo. Estos links los tendrás que armar dentro de un
  arreglo para que la función de mdLinks los pueda resolver.

⚠️ Antes de pasar al siguiente hito, asegúrate de escribir los tests
correspondientes al código del hito actual.

***

### **HITO 2:** Javascript API con segundo parámetro opcional "validate"

Agrega un argumento más a la función `mdLinks`. El segundo parámetro recibirá
un booleano **validate**. Este segundo parámetro será opcional.

Ahora la función deberá ofrecer la siguiente interfaz:

`mdLinks(path, validate)`
  
Argumentos:

* path: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada
  es relativa, debe resolverse como relativa al directorio desde donde se
  invoca node (transformar a absoluta).

* validate: Booleano que determina si se desea validar los links encontrados.

**Valor que resuelve la promesa con validate = false ó undefined:**
Un arreglo con objetos que representan links. Cada objeto tiene las
propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

OJO: _el valor anterior es el mismo que el del hito 1_

**Valor que resuelve la promesa con validate = true:**
Un arreglo con objetos que representan links. Cada objeto tiene las
propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link.
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

Ejemplo:

(resultados como comentarios)

```js

const mdLinks = require("md-links");


mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);


mdLinks("./some/example.md", true )
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);


mdLinks("./some/example.md", false)
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

```

⚠️ **Test unitarios.** Antes de pasar al siguiente hito, asegúrate de hacer los
tests del hito actual. Los tests aquí van a mockear http, fecth o axios.

***

### **HITO 3:** Buscando dentro de una carpeta

Para este hito vas a trabajar con la misma función `mdLinks` pero esta vez la
usuaria será capaz de pasar una carpeta como ruta.

La función `mdLinks(path, validate)` debe recorrer todos los archivos
existentes en la carpeta y por cada archivo `.md` que encuentre deberá
extraer los links para mostrarlos en pantalla.

Debes tener en cuenta que la carpeta puede contener archivos con extensiones
que no sean md. En este caso debes la función debe ignorarlos. (Crea una
carpeta con archivos de diferentes extensiones para probar tu función)

Ejemplo:

(resultados como comentarios)

```js
const mdLinks = require("md-links");


mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);


mdLinks("./some/dir", true )
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);


mdLinks("./some/dir", false)
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

```

#### Tareas de este hito

* Obtén el contenido de un directorio

  Este hito consiste en buscar archivos en un directorio (o carpeta). Para eso,
  hay que leer el directorio, osea ver que está dentro.

  El módulo de `fs` también te será útil aquí. Recomendamos `readdirSync`.

  Intenta imprimir en consola la lista de archivos en una carpeta para probar
  como funciona.

* Une dos rutas

  Para poder acceder a carpetas y archivos será necesario que indiques en qué
  lugar de tu computadora se encuentran, a esto le llamamos rutas.

  Usa el módulo path para unir dos segmentos de ruta a una ruta completa, por
  ejemplo, si queremos unir:

  /home/Laboratoria/

  ./test

  El resultado sería: /home/Laboratoria/test

⚠️ **Test unitarios.** Te recomendamos antes de pasar al siguiente hito hacer
los tests del hito actual

### **HITO 4:** - Interfaz de Línea de comando

En este hito, crearás un paquete ejecutable de tu código, el mismo que
internamente ejecutará la función mdLinks que acabas de crear.

Este paquete deberá estar documentado en un repositorio público con un package.json
para poderlo instalar a con npm.

La instalación sería de la siguiente manera:

```shell
npm install `<github-user>/md-links`.
```

Este módulo debe incluir tanto un ejecutable que podamos invocar en la
línea de comando como una interfaz que podamos importar con require para
usarlo programáticamente.

El ejecutable de tu aplicación debe poder correr de la siguiente manera a
través de la terminal:

```shell
`md-links <path-to-file> [options]`
```

Por ejemplo:

![mdlinks-example](https://github.com/Laboratoria/bootcamp/assets/123121338/7dcc83c4-873e-4ef8-b7d0-a15adb102680)

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto que hay
dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

![mdlinks-example-validate](https://github.com/Laboratoria/bootcamp/assets/123121338/502cbafc-b4ac-4734-85b3-1734f67af1d3)

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

![mdlinks-example-stats](https://github.com/Laboratoria/bootcamp/assets/123121338/910720c6-aa3f-4d08-b076-c1add13c95f1)

También podemos combinar `--validate` y `--stats` para obtener estadísticas que
necesiten de los resultados de la validación.

![mdlinks-example-stats-validate](https://github.com/Laboratoria/bootcamp/assets/123121338/9d9971a0-866a-4c64-a890-4c62c3df3700)

Para ejecutar tu script utilizando el comando `mdlinks`, debes vincular este
comando al sistema. Sin embargo, antes de vincular el comando, puedes desarrollar
tu interfaz de línea de comandos (CLI) invocándola con node. Por ejemplo,
puedes usar el siguiente comando:

`node <RUTA_DE_TU_CLI.js> ruta options`

### **HITO 5:** - Buscando dentro de subcarpetas

Misma funcionalidad que el HITO 3 pero ahora la usuaria será capaz de pasar una
carpeta como ruta con más carpetas dentro además de posibles archivos.

La función `mdLinks(path, validate)` tendrá que recorrer todas las carpetas
existentes en la ruta y buscar los links en todos los archivos markdown que
encuentre.

Para resolver este hito te recomendacón leer acerca del concepto de
recursividad y ver algunos ejemplos (ojo con concepto de casos base)

¿Por qué utilizaremos la recursividad aquí?

La recursividad se utiliza en este caso porque no conocemos de antemano la
cantidad de carpetas y archivos que tendremos que recorrer antes de finalizar.
Cuando recibimos una ruta de carpeta, no sabemos si dentro de ella hay más
carpetas que también debemos abrir y leer, y estas a su vez pueden contener más
carpetas. Este tipo de problema se resuelve de manera eficiente utilizando un
proceso recursivo.

Entre los [recursos](#hito-5) de este proyecto hay una página
que te ayudará.

⚠️ **Test unitarios.** Antes de dar el proyecto por terminado, recuerda hacer
los tests del hito actual.

## 7. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Puedes agregar la propiedad `line` a cada objeto `link` indicando en qué línea
  del archivo se encontró el link.
* Puedes agregar más estadísticas.
* Integración continua con Travis o Circle CI.

***

## 8. Pistas, tips y lecturas complementarias

### **Inicia con un diagrama de flujo y/o pseudocódigo**

Este proyecto difiere de los anteriores en los que has trabajado, ya que no
implica una interfaz web. Todo el desarrollo se llevará a cabo en tu editor
y en la consola/terminal.

El proyecto se basa en un proceso lógico compuesto por diferentes pasos. Para
comprender mejor lo que debes hacer y planificar tus tareas y objetivos, se
recomienda desglosar el proceso en pasos y visualizarlo mediante un diagrama
de flujo o escribiendo pseudocódigo

### **Sugerencias de implementación**

La implementación de este proyecto tiene varias partes: leer del sistema de
archivos, recibir argumentos a través de la línea de comando, analizar texto,
hacer consultas HTTP, ... y todas estas cosas pueden enfocarse de muchas
formas, tanto usando librerías como implementando en VanillaJS.

Por poner un ejemplo, el parseado (análisis) del markdown para extraer los
links podría plantearse de las siguientes maneras (todas válidas):

* Usando un módulo como
  [markdown-it](https://www.npmjs.com/package/markdown-it), que nos devuelve
  un arreglo de tokens que podemos recorrer para identificar los links.

* También podríamos usar una combinación de varios módulos (podría ser válido
  transformar el markdown a HTML usando algo como [marked](https://github.com/markedjs/marked)
  y de ahí extraer los links con una librería de DOM como [JSDOM](https://www.npmjs.com/package/jsdom)
  o [Cheerio](https://cheerio.js.org/) entre otras).

* Usando un custom renderer de la librería marked (new marked.Renderer()).

* Siguiendo otro camino completamente diferente, podríamos usar expresiones
  regulares (RegExp).

No dudes en consultar a tus compañeras, coaches y/o el foro de la comunidad
si tienes dudas existenciales con respecto a estas decisiones. No existe una
"única" manera correcta 😉 Lo importante es que entiendas el código que escribes
para lograr la tarea.

### **¿CommonJS Modules o ES Modules, cual debería usar?**

Desde el principio, es importante que tomes una decisión respecto a qué tipo de
módulos utilizarás: ES Modules (import/export) o CommonJS Modules
(require/module.exports). Ambos cumplen el mismo propósito de modularizar y
compartir código. Hasta ahora, Node.js ha empleado mayormente los CommonJS
Modules (require) y funcionan sin necesidad de configuraciones adicionales.
Sin embargo, en las versiones más recientes de Node.js, también puedes optar
por utilizar ES Modules, aunque esto requerirá algunos pasos de configuración
adicionales. Si decides utilizar ES Modules, asegúrate de investigar cómo
configurar tu proyecto según la versión de Node que estés utilizando. Ten en
cuenta esta decisión desde el inicio de tu proyecto, ya que afectará la forma
en que importas y exportas módulos en tu código.

### **¿Cuáles son partes de node son relevantes para este proyecto?**

Node ofrece una amplia gama de módulos y funciones, pero no es necesario
conocerlos todos antes de comenzar a programar. Los hitos se refieren a partes
específicas de Node que puedes explorar, como los módulos fs (readFile,
readdirSync) y path.
Estos módulos son útiles para realizar operaciones de lectura y escritura de
archivos, así como para manipular y trabajar con rutas de archivos en tu código.
A medida que avanzas en tu proyecto, puedes investigar más sobre estos módulos
y cómo utilizar sus funciones para lograr tareas específicas. ¡No dudes en
sumergirte en la programación y explorar los partes relevantes de Node mientras
avanzas en tu proyecto!

### **¿Cómo hago para que mi módulo sea instalable con npm?**

Para que el módulo sea instalable desde GitHub solo tiene que:

* Estar en un repo público de GitHub
* Contener un `package.json` válido

Con el comando `npm install githubname/reponame` podemos instalar directamente

Por ejemplo, el [`curriculum-parser`](https://github.com/Laboratoria/curriculum-parser)
que usamos para la currícula no está publicado en el registro público de NPM,
así que lo instalamos directamente desde GitHub con el comando `npm install
Laboratoria/curriculum-parser`.

### Recursos

#### Hito 1

* [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
* [Node.js path - Documentación oficial](https://nodejs.org/api/path.html)
* [Cómo crear promesas - javascript.info](https://es.javascript.info/promise-basics)

#### Hito 2

* [Validación de URLs con peticiones http - luisrrleal.com](https://luisrrleal.com/blog/como-hacer-peticiones-http-en-javascript)

#### Hito 3

* [Cómo iterar un arreglo de promesas - mozilla.org](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

#### Hito 4

* [Tú, yo y package.json](https://medium.com/noders/t%C3%BA-yo-y-package-json-9553929fb2e3)
* [Cómo crear y publicar packpage - npmjs.com](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Una guía para crear un paquete de línea de comandos NodeJS - medium.com](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)

#### Hito 5

* [Qué es la recursividad y cómo crear funciones recursivas - javascript.info](https://es.javascript.info/recursion)

### Otros recursos

* [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
* [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [Asíncronía en js](https://carlosazaustre.es/manejando-la-asincronia-en-javascript)
* [Patrones para coincidencia de caracteres con expresiones regulares - mozilla.org](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions)

## 9. Para pedir project feedback

* [ ] Un board en github projects con el backlog para la implementación de la
  librería.

* [ ] un `README.md` con documentación técnica de la librería y una guía de
  uso e instalación de la librería.

* [ ] un API `mdLinks(path, validate)` con los siguientes requisitos mínimos:

  - El módulo debe exportar una función que cumpla con la interfaz (API)
    requerida. (Hito 1)
  - Deberá implementar el soporte para archivos individuales. (Hito 1)
  - Deberá implementar la funcionalidad de validación. (Hitos 1 y 2)
  - Deberá ofrecer soporte para directorios. (Hitos 1 al 3)
  - Ofrecerá un CLI(Command Line Interface) instalable de través de NPM(Node
    Package Manager). (Hitos 1 al 4)
  - Deberá ofrecer soporte para directorios que pueden contener otros
    directorios. (Hitos 1 al 5)

* [ ] un CLI que se ejecuta sin errores y tiene el output esperado. Además
  acepta los parámetros `--validate` y `--stats`. Y expone un ejecutable
  md-links en el path (configurado en el package.json)
* [ ] Pasa tests y linters (`npm test`). Tests unitarios cubren un mínimo
  del 70% de coverage tests, es decir statements, functions, lines y branches.
