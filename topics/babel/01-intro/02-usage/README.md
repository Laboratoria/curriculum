# Guía de uso

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `20min`

***

En esta unidad haremos una introducción a todas las herramientas que
provee Babel.

> Si estás usando un framework en particular,
> seguramente alguien ya se encargó de crear una configuración de babel para ti.
> Chequea la [guia interactiva de setup](https://babeljs.io/setup.html) antes de
> comenzar desde cero.

## Overview

Esta guía te acompañará a través de los pasos necesarios para compilar
tu aplicación JavaScript que usa sintaxis ES2015+, en código que funcione
en navegadores actuales. Esto involucrará tanto transformar la nueva sintaxis, como
aplicar polyfills para las funcionalidades inexistentes.

El proceso completo para configurar esto implica lo siguiente:

1. Ejecutar los siguientes comandos para instalar los paquetes necesarios:

   ```sh
   npm install --save-dev @babel/core @babel/cli @babel/preset-env
   npm install --save @babel/polyfill
   ```

2. Crear un archivo de configuración `babel.config.js` en la raíz de tu
   proyecto con el siguiente contenido:

   ```js
   const presets = [
     [
       "@babel/env",
       {
         targets: {
           edge: "17",
           firefox: "60",
           chrome: "67",
           safari: "11.1",
         },
         useBuiltIns: "usage",
       },
     ],
   ];

   module.exports = { presets };
   ```

   > La lista de navegadores seleccionada, es completamente arbitraria.
   > Deberás adaptarla según tus propios requerimientos.

3. Y ejecutar el siguiente comando para compilar tu código del directoria `src`
   a `lib`:

   ```sh
   ./node_modules/.bin/babel src --out-dir lib
   ```

   > Puede usar el package runner que viene incluído en npm@5.2.0 para acortar
   > este comando, reemplazando `./node_modules/.bin/babel` por `npx babel`

Continúa leyendo para una explicación detallada de cada una de estos pasos.

## Uso básico de la línea de comando

Todos los módulos de Babel que vayas a necesitar, se encuentran publicados
como paquetes independientes de npm, dentro del namespace `@babel`
(desde la versión 7).
Este diseño modular expone diferentes heramientas, cada una diseñadas para un
uso específico. En esta sección analizaremos `@babel/core` y `@babel/cli`.

### Core Library

La funcionalidad central de Babel reside dentro del módulo
[@babel/core](https://babeljs.io/docs/en/babel-core). Luego de instalarlo:

```sh
npm install --save-dev @babel/core
```

puedes usar `require` directamente en tu programa
y usarlo de la siguiente forma:

```js
const babel = require("@babel/core");

babel.transform("code", optionsObject);
```

> Como usuario final, probablemente lo que quieras hacer es instalar otras
> herramientans que sirvan de interfaz con `@babel/core`. Inclusive si este
> es el caso, quizás todavia quieras chequear su documentación para aprender
> que opciones puede recibir.

### Línea de comando

[@babel/cli](https://babeljs.io/docs/en/babel-cli) es la herramienta que te
permite usar babel desde tu terminal. Aquí cómo instalarla y un ejemplo
básico de cómo usarla:

```sh
npm install --save-dev @babel/core @babel/cli

./node_modules/.bin/babel src --out-dir lib
```

Este comando se encargará de parsear todos los archivos JavaScript dentro del
directorio `src`, aplicar todas las transformaciones que hayamos configurado
y colocar cada archivo transformado dentro del directorio `lib`. Como todavía
no le hemos indicado qué transformaciones aplicar, el resultado será idéntico
al original (exceptuando el formato). Podemos especificar qué transformaciones
queremos aplicar, pasándolas como opciones.

Arriba usamos la opción `--out-dir`. Puedes ver el resto de opciones disponibles
pasando la opción`--help`. Pero las opciones más relevantes a esta altura son
`--plugins` y `--presets`.

## Plugins y Presets

Las transformaciones se presentan en forma de plugins, que son pequeños
programas en JavaScript, que le indican a Babel cómo transformar tu código.
Recuerda que puedes escribir tus propios plugins para aplicar las
transformaciones que quieras a tu código. Pero para transformar sintaxis
ES2015+ en ES5 te recomendamos utilizar plugins oficiales como por ejemplo
`@babel/plugin-transform-arrow-functions`:

```sh
npm install --save-dev @babel/plugin-transform-arrow-functions

./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```

Ahora cualquier función flecha en tu código será transformada en una
expresión compatible de ES5:

```js
const fn = () => 1;

// se convierte en

var fn = function fn() {
  return 1;
};
```

Buen comienzo! Pero hay otras funcionalidades de ES2015+ en nuestro código
que quermos transformar. Entonces en lugar de especificar los plugins que
queremos utilizar uno por uno, podemos usar un "preset" que ya viene con un
conjunto predeterminado de plugins a utilizar.

De la misma manera que con los plugins, tu puedes crear tus propios presets.
Para nuestro caso, hay un excelente preset llamado `env`.

```sh
npm install --save-dev @babel/preset-env

./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
```

Sin espeficifar ninguna configuración, por defecto, este preset incluirá todos
los plugins que dan soporte a código JavaScript moderno (ES2015, ES2016, etc.).
Pero además, los presets también pueden recibir opciones desde la terminal.
Veamos otra forma de pasar opciones: _archivos de configuración_.

## Configuración

> Existen algunas formas diferentes de usar archivos de configuración
> dependiendo de tus necesidades. Para más información asegúrate de leer la
> guía extendida sobre cómo
> [configurar Babel](https://babeljs.io/docs/en/configuration).

Por ahora comencemos creando un archivo que se llame `babel.config.js` con el
siguiente contenido:

```js
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
];

module.exports = { presets };
```

A diferencia de antes, ahora `env` sólo cargará los plugins de transformación
para las funcionalidades que ***no*** están disponibles en nuestros navegadores
objetivo. Y listo! Eso es todo lo que necesitamos en relación a sintaxis.
Ahora veamos `polyfills`.

## Polyfill

El módulo [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill) incluye
[core-js](https://github.com/zloirock/core-js) y un [regenerator runtime](https://github.com/facebook/regenerator/blob/master/packages/regenerator-runtime/runtime.js)
para emular un entorno ES2015+ completo.

Esto implica que puedes usar nuevas APIs como `Promise` o `WeakMap`,
métodos estáticos como `Array.from` o `Object.assign`, métodos de instancias
como `Array.prototype.includes`, y funciones generadoras (usando el plugin
[regenerator](https://babeljs.io/docs/en/babel-plugin-transform-regenerator)).
El polyfill logra esto inyectando nuevas funcionalidades en el scope
global y en los prototypes nativos, como por ejemplo `String`.

> Para los autores de librerías/herramientas quizás todo eso sea demasiado.
> Si no necesitas métodos de instancias como `Array.prototype.includes` puedes
> usar el plugin [transform runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
> en lugar de `@babel/polyfill` y así no contaminar el scope global.

Para ir un paso más allá, si tu sabes exáctamente para qué funcionalidades
necesitas un polyfill, puedes requerirlas directamente desde
[core-js](https://github.com/zloirock/core-js#commonjs).

Como en nuestro ejemplo estamos desarrollando una aplicación, entonces
instalaremos `@babel/polyfill`:

```sh
npm install --save @babel/polyfill
```

> Fíjate que instalamos este móduluo con la opción `--save` en lugar de
> `--save-dev` ya que esto es un polyfill que necesita inyectarse dentro de
> código fuente.

Por suerte para nosotros, estamos usando en preset `env` que tiene una opción
`"useBuiltIns"` que cuando la seteamos a `"usage"` va a incluir en cada archivo
sólo los polyfills necesarios que estén siendo usado. Con esta nueva opción
nuestra configuración queda de la siguiente manera:

```js
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```

Babel ahora va a inspeccionar tu código para encontrar las funcionalidades
faltantes en tus entornos objetivo e incluir sólo los polyfills necesarios.
Por ejemplo en el siguiente código:

```js
Promise.resolve().finally();
```

se transformará en esto (ya que Edge 17 no implementa
`Promise.prototype.finally`):

```js
require("core-js/modules/es.promise.finally");

Promise.resolve().finally();
```

Si no estuvieramos usando el preset `env` con la opción `"useBuiltIns"`
seteada a `"usage"` hubieramos tenido que hacer un `require` de todos los
polyfill _una sola vez_ en el punto de entrada de nuestro código.

```js
import "@babel/polyfill";
```

## Resumen

En esta unidad, usamos `@babel/cli` para correr Babel desde la terminal,
`@babel/polyfill` para inyectar los polyfills de todas las nuevas APIs de
JavaScript, y el preset `env` para sólo incluir las transformaciones y
polyfills de las funcionalidades faltantes en nuestros navegadores objetivo.

Para más información sobre cómo integrar Babel con tu propio entorno, IDE y
demás, recuerda visitar la [guía interactiva de setup](https://babeljs.io/setup.html).
