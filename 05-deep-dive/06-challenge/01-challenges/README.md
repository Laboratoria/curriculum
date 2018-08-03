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

## Requisitos

Todos los retos deben incluir por los menos los siguientes archivos:

* `README.md` con descripción del módulo, instrucciones de instalación, uso y
  documentación del API.
* `index.js`: Librería debe exportar una función u objeto al entorno global
  (`window`) y hacer uso de _features_ de ES6 donde sea apropiado.
* `index.html`: Página web de la librería con ejemplo funcionando.
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
* `.eslintrc` con configuración para linter (ver [guía de estilo de
  JavaScript](https://github.com/Laboratoria/js-style-guide))
* `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).

Hacker edition (opcional):

* Si la librería está dirigida al navegador, debe adherirse al patrón
  [UMD](https://github.com/umdjs/umd) para poder ser usado con AMD, CommonJS y
  como variable global del navegador.
* Integración continua con Travis o Circle CI

## Progreso

A modo orientativo te proponemos los siguientes _checklists_ de progreso para
cada semana:

### Semana 1

* Formar equipo.
* Elegir reto.
* Hacer fork de reto modelo o crear nuevo repo si has propuesto un reto no
  propuesto por Laboratoria.
* Escribir primera versión del `README.md` con una descripción general de la
  librería así como ejemplos (snippets) de uso y configuración (si fuera
  necesario).
* Crear issues y milestones que sirvan como hoja de ruta (roadmap)
* Inicializar proyecto con `npm init` y `git init`.
* Crear `index.html` con ejemplo principal de uso.

### Semana 2

* Agregar tests que describan la `API` de tu librería y los casos de uso
  esperados.
* Implementar funcionalidad esencial.
* Hacer code review con tus compañeras e instructorxs.

### Semana 3

* Completar implementación de librería y ejemplo principal (usando la librería).
* Hacer code review con tus compañeras e instructorxs.
* Preparar tu demo/presentación.
* Publicar el ejemplo principal (`index.html`) en GitHub pages.

## Retos modelo

Cada equipo tendrá que seleccionar uno de los siguientes retos, o proponer un
reto alternativo dentro del _scope_ de este curso. Si tienes alguna idea para
alguna librería que crees que te pueda ser útil en otros proyectos futuros, no
dudes en consultar con tus instructorxs para ver si tu propuesta puede valer
como reto.

### Reto 1: Validador de datos de tarjetas de crédito

Implementar un validador de datos de tarjeta de crédito. La librería debería
validar el número de tarjeta de crédito (usando algoritmo de Luhn), fecha de
vencimiento, codigo de verificación (cvv) y nombre completo que aparece en la
tarjeta.

[Repo](https://github.com/Laboratoria-learning/card-validator)

### Reto 2: Cardify (muestra alt en vez de imagen en hover)

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

[Repo](https://github.com/Laboratoria-learning/cardify)

### Reto 3: Extracer links de archivos markdown (Node.js)

Implementar un módulo de Node.js que reciba un string (en formato Markdown) y
extraiga todos los links encontrados. La implementación debe ser una función que
recibe un `string` y devuelve un arreglo de objetos como se muestra en el
este ejemplo:

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

[Repo](https://github.com/Laboratoria-learning/extract-links-from-md)
