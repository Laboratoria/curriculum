# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Entregables](#6-entregables)
* [7. Hacker edition](#7-hacker-edition)
* [8. Evaluación](#8-evaluación)
* [9. Pistas, tips y lecturas complementarias](#9-pistas-tips-y-lecturas-complementarias)
* [10. Checklist](#10-checklist)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Resumen del proyecto

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa
que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el
sistema archivos, con el entorno (_proceso_, _env_, _stdin/stdout/stderr_), ...

En este proyecto crearás una herramienta de línea de comando (CLI) así como tu
propia librería (o biblioteca - library) en JavaScript.

## 3. Objetivos de aprendizaje

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrollador porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otros developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

A continuación puedes ver los objetivos de aprendizaje de este proyecto:

### Javascript

* [ ] Uso de callbacks
* [ ] Consumo de Promesas
* [ ] Creacion de Promesas
* [ ] Modulos de JS (CommonJS vs ES Modules)
* [ ] Recursión

### Node

* [ ] Sistema de archivos ([fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html))
* [ ] [package.json](https://docs.npmjs.com/files/package.json)
* [ ] crear módulos [(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
* [ ] Instalar y usar módulos ([npm](https://www.npmjs.com/))
* [ ] [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [ ] CLI (Command Line Interface - Interfaz de Línea de Comando)
* [ ] [http.get](https://nodejs.org/api/http.html#http_http_get_options_callback)

### Testing

* [ ] Testeo de tus funciones
* [ ] Testeo asíncrono
* [ ] Uso de librerias de Mock
* [ ] Mocks manuales
* [ ] Testeo para multiples Sistemas Operativos

### Git y Github

* [ ] Organización en Github

### Buenas prácticas de desarrollo

* [ ] Modularización
* [ ] Nomenclatura / Semántica
* [ ] Linting

***

## 4. Consideraciones generales

* Este proyecto se debe "resolver" de manera individual.

* La librería y script ejecutable (herramienta de línea de comando -
  CLI) debe estar implementada en JavaScript para ser ejecutada con
  Node.js. **Está permitido usar librerías externas**.

* Tu módulo debe ser instalable via `npm install <github-user>/md-links`. Este
  módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea de
  comando como una interfaz que podamos importar con `require` para usarlo
  programáticamente.

* Los tests unitarios deben cubrir un mínimo del 70% de _statements_,
  _functions_, _lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/)
  para tus pruebas unitarias.

* Para este proyecto no está permitido utilizar `async/await`.

* Para este proyecto es opcional el uso de ES Modules `(import/export)`, en el
  caso optes utilizarlo deberás de crear un script de `build` en el `package.json`
  que los transforme en `requires` y `module.exports` con ayuda de babel.

## 5. Criterios de aceptación mínimos del proyecto

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

Antes de comenzar a codear, es necesario crear un plan de acción. Esto debería
quedar detallado en el `README.md` de tu repo y en una serie de _issues_
y _milestones_ para priorizar y organizar el trabajo, y para poder hacer
seguimiento de tu progreso.

Dentro de cada _milestone_ se crearán y asignarán los _issues_ que cada quien
considere necesarios.

### Archivos del proyecto

* `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
* `index.js`: Desde este archivo debes exportar una función (`mdLinks`).
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
* `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
* `.eslintrc` con configuración para linter. Este archivo no
  se debe cambiar.
* `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
* `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Tu inplementación debe pasar estos tets.

### JavaScript API

El módulo debe poder importarse en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

* `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, debe resolverse como relativa al directorio desde donde se invoca
  node - _current working directory_).
* `options`: Un objeto con las siguientes propiedades:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función debe retornar una promesa (`Promise`) que resuelva a un arreglo
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

#### Ejemplo

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

### CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

## 6. Entregables

Módulo instalable via `npm install <github-user>/md-links`. Este módulo debe
incluir tanto un ejecutable como una interfaz que podamos importar con `require`
para usarlo programáticamente.

## 7. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Puedes agregar la propiedad `line` a cada objeto `link` indicando en qué línea
  del archivo se encontró el link.
* Puedes agregar más estadísticas.
* Integración continua con Travis o Circle CI.

## 8. Evaluación

NOTA: Esta sección incluye una lista de habilidades que se podrán tener en
cuenta a la hora de evaluar el proyecto. Los niveles esperados son _sugerencias_
así como _guías_ en el diseño curricular, pero no reglas absolutas.

Te aconsejamos revisar [nuestra rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada _habilidad_ y cada _nivel_. Te
recomendamos también que trates de aplicarte la rúbrica a tí misma y/o a los
proyectos de tus compañeras a lo largo del Bootcamp para ir viendo tu evolución.

### Habilidades Blandas (Soft Skills)

| Habilidad                                       | Nivel esperado |
|-------------------------------------------------|----------------|
| Planificación, organización y manejo del tiempo | 4              |
| Autoaprendizaje                                 | 4              |
| Presentaciones                                  | 4              |
| Adaptabilidad                                   | 4              |
| Solución de problemas                           | 4              |
| Responsabilidad                                 | 4              |
| Dar y recibir feedback                          | 4              |
| Comunicación eficaz                             | 4              |

### Habilidades Técnicas (Front-end)

| Habilidad                       | Nivel esperado |
| --------------------------------|----------------|
| **Computer Science (CS)**                        |
| Lógica / Algoritmia             | 2              |
| Arquitectura                    | 3              |
| **Source Code Management (SCM)**                 |
| Git                             | 3              |
| GitHub                          | 3              |
| **JavaScript**                                   |
| Estilo (linter js)              | 3              |
| Nomenclatura / semántica        | 3              |
| Uso de funciones / modularidad  | 4              |
| Estructuras de datos            | 3              |
| Tests                           | 3              |

## 9. Pistas, tips y lecturas complementarias

### FAQs

#### ¿Cómo hago para que mi módulo sea _instalable_ desde GitHub?

Para que el módulo sea instalable desde GitHub solo tiene que:

* Estar en un repo público de GitHub
* Contener un `package.json` válido

Con el comando `npm install githubname/reponame` podemos instalar directamente
desde GitHub. Ver [docs oficiales de `npm install` acá](https://docs.npmjs.com/cli/install).

Por ejemplo, el [`course-parser`](https://github.com/Laboratoria/course-parser)
que usamos para la currícula no está publicado en el registro público de NPM,
así que lo instalamos directamente desde GitHub con el comando `npm install
Laboratoria/course-parser`.

### Sugerencias de implementación

La implementación de este proyecto tiene varias partes: leer del sistema de
archivos, recibir argumentos a través de la línea de comando, analizar texto,
hacer consultas HTTP, ... y todas estas cosas pueden enfocarse de muchas formas,
tanto usando librerías como implementando en VanillaJS.

Por poner un ejemplo, el _parseado_ (análisis) del markdown para extraer los
links podría plantearse de las siguientes maneras (todas válidas):

* Usando un _módulo_ como [markdown-it](https://github.com/markdown-it/markdown-it),
  que nos devuelve un arreglo de _tokens_ que podemos recorrer para identificar
  los links.
* Siguiendo otro camino completamente, podríamos usar
  [expresiones regulares (`RegExp`)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions).
* También podríamos usar una combinación de varios _módulos_ (podría ser válido
  transformar el markdown a HTML usando algo como [marked](https://github.com/markedjs/marked)
  y de ahí extraer los link con una librería de DOM como [JSDOM](https://github.com/jsdom/jsdom)
  o [Cheerio](https://github.com/cheeriojs/cheerio) entre otras).
* Usando un _custom renderer_ de [marked](https://github.com/markedjs/marked)
  (`new marked.Renderer()`).

No dudes en consultar a tus compañeras, coaches y/o el [foro de la comunidad](http://community.laboratoria.la/c/js)
si tienes dudas existenciales con respecto a estas decisiones. No existe una
"única" manera correcta :wink:

### Tutoriales / NodeSchool workshoppers

* [learnyounode](https://github.com/workshopper/learnyounode)
* [how-to-npm](https://github.com/workshopper/how-to-npm)
* [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Otros recursos

* [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
* [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
* [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
* [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
* [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
* [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
* [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
* [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
* [Asíncronía en js](https://carlosazaustre.com/manejando-la-asincronia-en-javascript/)
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
* [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
* [Path](https://nodejs.org/api/path.html)
* [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)

## 10. Checklist

### General

* [ ] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

* [ ] Un board con el backlog para la implementación de la librería.
* [ ] Documentación técnica de la librería.
* [ ] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

* [ ] El módulo exporta una función con la interfaz (API) esperada.
* [ ] Implementa soporte para archivo individual
* [ ] Implementa soporte para directorios
* [ ] Implementa `options.validate`

### CLI

* [ ] Expone ejecutable `md-links` en el path (configurado en `package.json`)
* [ ] Se ejecuta sin errores / output esperado
* [ ] Implementa `--validate`
* [ ] Implementa `--stats`

### Pruebas / tests

* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [ ] Pasa tests (y linters) (`npm test`).
