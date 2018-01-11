# Retos

* Tipo: `seminario`
* Formato: `guiado`
* Duración: `30min`

***

El objetivo central de este curso es construir una librería (_library_) que
responda a los requisitos de uno de los retos detallados más abajo.

El reto se hará en grupos de dos alumnas y será presentado al final del curso en
una demo al resto de la clase. A lo largo del curso tus instructorxs te guiarán
en el proceso así como tus compañeras.

Todos los retos deberán cumplir los siguientes requisitos:

* `README.md` con descripción del módulo, instrucciones de instalación, uso y
  documentación del API.
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
* `.eslintrc` con configuración para linter
* `.gitignore` ...
* Si la librería está dirigida al navegador, debe adherirse al patrón
  [UMD](https://github.com/umdjs/umd) para poder ser usado con AMD, CommonJS y
  como variable global del navegador.
* Integración continua con Travis o Circle CI (opcional)

Cada equipo tendrá que seleccionar uno de los siguientes retos:

## Reto 1: Pinterestify

Implementar un plugin para `jQuery` que ...

```js
$('.gallery').pinterestify();
```

## Reto 2: Image cards (show alt instead of image on hover)

```js
$('.gallery').cardify();
```

## Reto 3: Extract links from markdown (Node.js)

```js
const extractLinksFromMd = require('extract-links-from-md');
const str = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

const links = extractLinksFromMd(str);

console.log(links);
// [
//   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//   { href: 'http://foo.com', text: 'foo' },
// ]
```

CLI

```sh
$ extract-links-from-md ./file.md
```

Output

```text
labore https://en.wiktionary.org/wiki/labore
dolore https://en.wiktionary.org/wiki/dolore
foo http://foo.com
```
