# Guía de configuración

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

Babel se puede configurar! Y de varias maneras. En esta unidad visitaremos
todas las alternativas de configuración que Babel provee y veremos ejemplos
simples para cada caso.

Hay varias otras herramientas que tienen esquemas
similares de configuración: ESLint (`.eslintrc`), Prettier (`.prettierrc`).

## ¿Cuál es tu caso de uso?

* ¿Quieres crear la configuración programáticamente?
* ¿Quieres compilar `node_modules`?

**Entonces [`babel.config.js`](#babelconfigjs) es para tí!**

* ¿Tienes una configuración estática que solo aplica
  para tu única aplicación/módulo?

**Entonces [`.babelrc`](#babelrc) es lo que necesitas!**

> Babel recomienda el uso del formato [`babel.config.js`](config-files.md#project-wide-configuration).
> [Babel mismo lo utiliza](https://github.com/babel/babel/blob/master/babel.config.js).

## `babel.config.js`

Crea un archivo `babel.config.js` con el siguiente contenido en el
directorio raiz de tu proyecto (a la altura de `package.json`).

```js
module.exports = function () {
  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    presets,
    plugins
  };
}
```

Consulta la [documentación de `babel.config.js`](https://babeljs.io/docs/en/config-files#project-wide-configuration)
para ver todas las opciones de configuración.

## `.babelrc`

Crea en tu proyecto, un archivo `.babelrc` con el siguiente contenido:

```json
{
  "presets": [...],
  "plugins": [...]
}
```

Revisa la [documentación de `.babelrc`](https://babeljs.io/docs/en/config-files#file-relative-configuration)
para ver todas las opciones de configuración.

### `package.json`

Alternativamente, puedes elegir especificar tu configuración de [`.babelrc`](#babelrc)
dentro del mismo `package.json` usando la entrada `babel`:

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
}
```

### `.babelrc.js`

Esta configuración es análoga a [`.babelrc`](#babelrc), sólo que escrita
en usando JavaScript.

```js
const presets = [ ... ];
const plugins = [ ... ];

module.exports = { presets, plugins };
```

Aquí puedes acceder a todas las APIs de Node.js, por ejemplo para crear una
configuración dinámica basada en las variables de entorno:

```js
const presets = [ ... ];
const plugins = [ ... ];

if (process.env["ENV"] === "prod") {
  plugins.push(...);
}

module.exports = { presets, plugins };
```

## Usando la línea de comandos (`@babel/cli`)

```sh
babel --plugins @babel/plugin-transform-arrow-functions script.js
```

Revisa la [documentación de `@babel/cli`](https://babeljs.io/docs/en/babel-cli)
para ver todas las opciones de configuración.

## Usando la API (`@babel/core`)

```js
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-arrow-functions"]
});
```

Revisa la [documentación de `@babel/core`](https://babeljs.io/docs/en/babel-core)
para ver todas las opciones de configuración.
