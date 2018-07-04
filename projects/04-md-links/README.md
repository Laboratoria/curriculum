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

[sobre node, filesystem, parsing, markdown, open source, ...]

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

Tópicos: [Semver](https://semver.org/), [Node.js](https://nodejs.org/en/),
[File System](https://nodejs.org/api/fs.html), Parsing,
[Markdown](https://daringfireball.net/projects/markdown/syntax), CLI, HTTP, ...

## Consideraciones generales

Este proyecto se debe "resolver" en parejas.

La librería debe estar implementada en JavaScript para ser ejecutada con
Node.js. Está permitido usar librerías externas y te recomendamos echar un
vistazo a [marked](https://github.com/markedjs/marked).

La aplicación debe exponer un ejecutable que podamos invocar en la línea de
comando, además de una API programático para poder usar el módulo como
dependencia desde otros scripts.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

Una vez creados los equipos, es hora de crear un plan de acción. Esto debería
quedar detallado en el `README.md` de tu repo así como en una serie de _issues_
y _milestones_ para coordinar el trabajo y poder hacer seguimiento del progreso.

Dentro de cada _milestone_ se crearán y asignarán los _issues_ que cada equipo
considere necesario. Como parte del proyecto, tendrás que:

* Hacer un _pre-release_ (una versión _alpha_ o _beta_)
* Conseguir que algunos _usuarios_ usen la herramienta (valga la redundancia)
* Recibir feedback (feature requests, bugs, ...) y actuar sobre ese feedback
* Preparar un primer release estable (`v1.0.0`)

## Parte obligatoria

### Documentación

[tbd]

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

## Pistas / Tips

## Checklist
