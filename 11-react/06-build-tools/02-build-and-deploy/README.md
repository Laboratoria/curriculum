# Build & deploy

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Build

1 - Así como creamos un `webpack.config.js` para nuestro entorno de
*desarrollo*, crearemos nuestro `webpack.config.prod.js` para nuestro entorno
de *producción*.

```js
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  // ahora el entry es exclusivamente al archivo principal
  entry: [
    './main.js'
  ],

  // el contexto se mantiene igual
  context: resolve(__dirname, 'src'),

  // establecemos a qué carpeta y con qué nombre de archivo se creará nuestro
  // `bundle`; en nuestro caso `./dist/bundle.js`
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'), // `dist` de "distribution"
    publicPath: '',
  },

  plugins: [
    // concatena los modulos importados
    new webpack.optimize.ModuleConcatenationPlugin(),
    // inyecta el codigo dentro del `index.html`
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body'
    }),
    // optimizacion 1
    new webpack.optimize.OccurrenceOrderPlugin(),
    // optimizacion 2
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    // optimizacion 3
    new webpack.optimize.UglifyJsPlugin({
      beautify: false
    }),
    // definimos variable global de **entorno de producción**
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  // las reglas siguen siendo las mismas
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  }
};

module.exports = config;
```

2 - Crearemos un `npm script` con el nombre `build` dentro de `package.json` que
se encargue de ejecutar `webpack` con la configuración del punto anterior.

```js
// package.json
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack --config webpack.prod.config.js --progress --profile --colors"
}
```

¿Qué hacen esos parámetros de `progress`, `profile` y `colors`? Para no quedarte
con dudas te recomendamos que eches un vistazo a la [documentación oficial de la
herramienta de línea de comando (CLI) de `webpack`](https://webpack.js.org/api/cli/).

## Deploy

3 - Instalaremos un [módulo](https://github.com/tschaub/gh-pages) que nos
permite desplegar fácilmente a `gh-pages` (`yarn add -D gh-pages`). Gihub
pages publicará en una url de la siguiente forma
`http://username.github.io/repo-name` el contenido que se encuentre en el
branch `gh-pages` de nuestro repo

4 - Crearemos un `npm script` con el nombre `deploy` que primero ejecute `build`
y luego publique el contenido de la  carpeta `dist`, usando el módulo
`gh-pages`.

```js
// package.json
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack --config webpack.prod.config.js --progress --profile --colors",
  "deploy": "yarn build && gh-pages -d dist"
}
```

Ejecuta `yarn deploy` y chequea los resultados en github.

***

**NOTA**:

El proceso de desarrollo es un ciclo constante de desarrollo, prueba,
empaquetado y despliegue. Encapsular estos pasos con scripts para `start`,
`build` y `deploy`, no sólo contribute a nuestra DX, sino que además permite
automatizar los procesos de `empaquetado` y `despliegue` para llegar a lo que se
llama en la industria como ***[delivery continuo](https://en.wikipedia.org/wiki/Continuous_delivery)***.
