# Markdown Links

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un leguaje de marcado
ligero muy popular entre developers, y es usado en un montón de plataformas que
manejan texto plano en la web (GitHub, foros, blogs, ...).

Es muy común encontrar varios archivos en formato `Markdown` en cualquier tipo
de repositorio (empezando por el tradicional `README.md`). Estos archivos
`Markdown` normalmente contienen _links_ (vínculos), y desgraciadamente a veces
estos links están rotos o ya no son válidos.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/) para leer y analizar archivos
en formato `Markdown` y verificar los links, así como reportar una serie de
estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## Introducción

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecura JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema operativo, sistema de archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa
que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el
sistema archivos, con el entorno (proceso, env, stdin/stdout/stderr), ...

## Objetivos

El objetivo práctico de este reto es que aprendas cómo crear tu propia librería
(o biblioteca - _library_) en JavaScript. Como desarrolladorxs, estamos
constantemente usando _módulos_ de terceros, ya sean librerías, frameworks o la
_librería estándar_ (standard library) tanto del lenguaje en sí como el
entorno/motor de ejecución (el navegador, Node.js, ...).

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrollador ya que te obliga a pensar en la interfaz (API) de tus módulos,
cómo serán usados por otras personas, ... y tener especial consideración en
peculiaridades del lenguaje, convenciones y buenas prácticas.

Tópicos: [Node.js](https://nodejs.org/en/),
[modules (CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html),
[file system](https://nodejs.org/api/fs.html),
[http.get](https://nodejs.org/api/http.html#http_http_get_options_callback),
parsing,
[markdown](https://daringfireball.net/projects/markdown/syntax), CLI,
[npm-scripts](https://docs.npmjs.com/misc/scripts),
[semver](https://semver.org/), ...

## Consideraciones generales

Este proyecto se debe "resolver" de forma individual.

La librería debe estar implementada en JavaScript para ser ejecutada con
Node.js. Está permitido usar librerías externas y te recomendamos echar un
vistazo a [marked](https://github.com/markedjs/marked). En particular, este
módulo nos ofrece el método [`marked.lexer(str)`](https://github.com/markedjs/marked/blob/master/docs/USING_PRO.md#access-to-lexer-and-parser),
que recibe un string con el texto en formato markdown y retorna un arreglo de
`tokens` que podemos iterar para encontrar los _links_.

```js
const marked = require('marked');

const data = `# Some markdown file

Blah blah blah [blah](http://blah.blah/blah) blah.

* blah
* blah lbah
* blah blah blah

Blah blah: [blah.blah](blah.blah)
`;

const tokens = marked.lexer(data);

tokens.forEach(console.log);
```

Pueden ver un ejemplo real de este método [acá](https://github.com/Laboratoria/course-parser/blob/master/lib/common.js#L296)
:wink:.

La aplicación debe exponer un [ejecutable](https://docs.npmjs.com/files/package.json#bin)
que podamos invocar en la línea de comando, además de una API programático para
poder usar el módulo como dependencia desde otros scripts.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/) para
tus pruebas unitarias.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

Una vez creados los equipos, es hora de crear un plan de acción. Esto debería
quedar detallado en el `README.md` de tu repo así como en una serie de _issues_
y _milestones_ para coordinar el trabajo y poder hacer seguimiento del progreso.

Dentro de cada _milestone_ se crearán y asignarán los _issues_ que cada
estudiante considere necesario. Como parte del proyecto, tendrás que:

* Hacer un _pre-release_ (una versión _alpha_ o _beta_)
* Conseguir que algunos _usuarios_ usen la herramienta (valga la redundancia)
* Recibir feedback (feature requests, bugs, ...) y actuar sobre ese feedback
* Preparar un primer release estable (`v1.0.0`)

## Parte obligatoria

### Archivos

* `README.md` con descripción del módulo, instrucciones de instalación, uso y
  documentación del API.
* `index.js`: Desde este archivo debes exportar una función (`mdLinks`).
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
* `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
* `.eslintrc` con configuración para linter (ver [guía de estilo de
  JavaScript](https://github.com/Laboratoria/js-style-guide)). Este archivo no
  se debe cambiar.
* `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
* `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. A este archivo le puedes agregar nuevos tests, pero no debes
  modificar los tests que ya vienen en _boilerplate_ (tu inplementación debe
  pasar estos tets).

### JavaScript API

El módulo debe poder importarse en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

* `path`: Ruta absoluta o relativa al archivo markdown o directorio donde buscar
  archivos markdown de forma recursiva. Si la ruta pasada es relativa, debe
  resolverse como relativa al directorio desde donde se invoca node - _current
  working directory_).
* `options`: Un objeto con las siguientes propiedades:
  - `validate`: ...
  - `exclude`: ...

##### Valor de retorno

La función debe retornar una promesa (`Promise`) que resuelva a un arreglo
(`Array`) de objetos (_Object_), donde cada objeto representa un link y contiene
las siguientes propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `line`: Línea donde se encontró el link dentro del archivo.

#### Ejemplo

```js
const mdLinks = require('md-links');

mdLinks('./some/dir')
  .then((links) => {
    // => [{ href, text, file, line }]
  })
  .catch(console.error);

mdLinks('./some/dir', { validate: true })
  .then((links) => {
    // => [{ href, text, file, line, status, ok }]
  })
  .catch(console.error);
```

### CLI

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera:

`md-links <path-to-dir-or-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/dir/
./some/dir/README.md:30 http://algo.com/2/3/ Link a algo
./some/dir/README.md:44 https://otra-cosa.net/algun-doc.html algún doc
./some/dir/CONTRIBUTING.md:12 http://google.com/ Google
```

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe recorrer el sistema de archivos (a partir de la ruta que recibe como
argumento), analizar los archivos Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece, la línea y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/dir/ --validate
./some/dir/README.md:30 http://algo.com/2/3/ ok 200 Link a algo
./some/dir/README.md:44 https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/dir/CONTRIBUTING.md:12 http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/dir/ --stats
Total: 3
Unique: 3
Domains: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/dir/ --stats --validate
Total: 3
Unique: 3
Domains: 3
Broken: 1
```

## Hacker edition

* Integración continua con Travis o Circle CI
* Coverage con Coveralls
* Más estadísticas?
* Browser compatible (input as string)?

## Entregables

Módulo instalable via `npm install <github-user>/md-links`. Este módulo debe
incluir tanto un ejecutable como una interfaz que podamos importar con `require`
para usarlo programáticamente.

## Evaluación

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 4
| Nomenclatura/semántica | 3
| Funciones/modularidad | 3
| Estructuras de datos | 2
| Tests | 4
| **HTML** | |
| Validación | n/a
| Estilo | n/a
| Semántica | n/a
| SEO | n/a
| **CSS** | |
| DRY | n/a
| Responsive | n/a
| **SCM** | |
| Git | 3
| GitHub | 3
| **CS** | |
| Lógica | 3
| Arquitectura | 3
| Patrones/paradigmas | n/a

### Habilidades Blandas

Para este proyecto esperamos que ya hayas alcanzado el nivel 3 en todas tus
habilidades blandas. Te aconsejamos revisar la rúbrica:

| Habilidad | Nivel esperado |
|-----------|----------------|
| Planificación y organización | 4
| Autoaprendizaje | 4
| Solución de Problemas | 4
| Dar y recibir feedback | 4
| Adaptabilidad | 4
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | 4
| Comunicación eficaz | 4
| Presentaciones | 4

## Pistas / Tips

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

## Checklist
