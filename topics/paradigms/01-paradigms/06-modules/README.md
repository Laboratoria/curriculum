---
type: read
duration: 6min
---

# Modularidad

[![Paradigmas - Modularidad](https://embedwistia-a.akamaihd.net/deliveries/b1347a276a6b6796df7f2a7f7b9e20df06cd4ae8.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/ph5zkst0fv?wvideo=ph5zkst0fv)

Una de las consecuencias de estos cambios es el concepto de "modularidad". Esto
va a permitir que empecemos a escribir programas estructurados en módulos
independientes, que son más fáciles de entender, testear, mantener, ...

En JavaScript existen varios sistemas de módulos, principalmente **AMD**,
**Common JS** y **ES2015/ES6**. Para este ejemplo vamos a concentrarnos en
**Common JS**, que es el que usa **Node.js**, y que también podemos usar en el
navegador gracias a los _bundlers_. En nuestro ejemplo, ahora que nuestro código
vive dentro de una función, podríamos _exportar_ la función, lo que nos
permitiría usar esta función desde otros scripts u otros programas. Esto es
esencial para casi cuaquier programa o script hoy en día, con consecuencias que
damos por sentado como poder organizar nuestro código en archivos y carpetas
diferentes o tener dependecias de módulos externos.

Para exportar nuestra función `getIds` usando Common JS en Node.js, podemos
simplemente asignar nuestra función a `module.exports`.

```js
// al final del script
module.exports = getIds;
```

El objeto `module` es una variable local a cada script en Common JS. Si
asignamos algo a `module.exports`, éste será el valor que recibiremos cuando
requiramos nuestro "módulo". Por ejemplo, imaginemos que salvamos el script en
el archivo `src/getIds.js`, y ahora lo queremos usar desde otro script afuera de
`src/`:

```js
const getIds = require('./src/getIds');
// `getIds` tiene el valor que hemos exportado a través de `module.exports`
// en el script `src/getIds.js`
```

Common JS también nos ofrece la opción de exportar los valores que queramos
como propiedades del objeto `exports` (que es un alias de `module.exports`). Así
en vez de exportar sólo un valor (la función `getids`), podemos exporar varios
valores.

```js
exports.getIds = getIds;
exports.hasId = hasId;
```

Ahora cuando requerimos nuestro módulo desde otro script lo que recibimos es
un objeto (el objeto `exports`), que tiene dos propiedades, `getIds` y `hasId`.

```js
const myModule = require('./src/myModule');
// myModule.getIds()
// myModule.hasId()
```

***

## Referencias

Blog posts:

* [ECMAScript 6 modules: the final syntax](http://2ality.com/2014/09/es6-modules-final.html),
  Axel Rauschmayer, 07 Sep 2014
* [JavaScript Modules: A Beginner’s Guide](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc),
  Preethi Kasireddy (FreeCodeCamp), Jan 22 2016
