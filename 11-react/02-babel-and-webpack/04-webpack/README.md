# Webpack

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

## Intro

Si miras hacia atrás verás las diferentes transformaciones que hemos ido
aplicando a nuestro código. La anterior y las dos lecturas que siguen, ya no se
enfocan en el código como tal, sino en la estructura de nuestra aplicación y el
proceso de desarrollo.

Si te pones a analizar, verás que tenemos una aplicación fragmentada:

* por un lado tenemos un archivo `js` super moderno, transpilado y empaquetado
  por `babel`, con todo lo que necesita
* y por el otro tenemos nuestro `html` recontra vieja escuela, que se encarga de
  importar el estilo por un lado, el código empaquetado por el otro, las
  dependencias de react y además definir el `container` para los componentes de
  `React`.

## ¿Qué es `Webpack` y para qué sirve?

`Webpack` es un empaquetador (`bundler`) de módulos y archivos (`assets`) para
aplicaciones JavaScript modernas. Cuando `webpack` procesa tu aplicación crea un
grafo de dependencias donde está incluído cada módulo usado, así como todos los
archivos estáticos referenciados, y crea un único archivo por tipo, con todo lo
necesario para ejecutar tu aplicación.

![webpack](https://raw.githubusercontent.com/Laboratoria/curricula-js/11-react/11-react/03-babel-and-webpack/static/images/webpack.jpg)

De esta manera proporciona una sola vía para importar y transformar todos los
recursos de nuestra aplicación, independientemente de si es código `js`, una
hoja de estilos, `html`, web fonts, data o imágenes.

`Webpack` es extremadamente configurable, pero para el alcance de esta lección,
solo vamos a hacer incapié en sus 4 conceptos principales:

* ## Entry
  Estos archivos establecen el punto de entrada de la aplicación. Estos son los
  nodos iniciales, desde los cuales se comienza a armar el grafo de
  dependencias. Suelen ser archivos `js`.

* ## Output
  Nos permite configurar el destino de la aplicación empaquetada.

* ## Loaders
  Los `loaders` nos permiten interpretar e incorporar diferentes tipos de
  archivos a nuestro *`bundle`*, como por ejemplo estilos en `css`, `sass` o
  `less`, imágenes de cualquier tipo (`jpg`, `png`, `svg`...), `html`, data en
  cualquier formato (`csv`, `json`, `yml`...) etc.

* ## Plugins
  Permiten extender la funcionalidad de `webpack` procesando el resultado del
  empaquetado en casi cualquier forma imaginable, antes de generar el `output`.

***

**PRO TIP**:

Al igual que `babel` y `es6`, `webpack` es una herramienta que va mucho más
allá de `React`. Si quieres saber más de `webpack`, visita su
[página oficial](https://webpack.js.org), que contiene toda la información
necesaria para entender y dominar esta herramienta tan útil y versátil.

Si quieres saber todo lo que puedes hacer con `webpack`, chequea la lista de
[`loaders`](https://webpack.js.org/loaders/) y [`plugins`](https://webpack.js.org/plugins/)

***

## Setup

`Webpack` es una gran herramienta, pero requiere un poco más de trabajo ponerla
a funcionar para nosotros. Asi es que mejor comenzamos.

1. Lo primero que vamos a hacer es instalar las dependencias a `React` como
   `node` manda.
   ```sh
   yarn add react react-dom
   ```
2. Luego, instalamos `babel` y sus `presets` como dependencias de desarrollo
   (sumadas a las que ya teníamos anteriormente)
   ```sh
   yarn add -D babel-core babel-preset-es2015 babel-preset-react-boilerplate
   ```
3. Instalamos `webpack`, sus `plugins`, `loaders` y utils, también como
   dependencias de desarrollo
   ```sh
   yarn add -D \
     webpack \
     babel-loader \
     style-loader \
     css-loader \
     html-webpack-plugin \
     open-browser-webpack-plugin \
     webpack-dev-server \
     react-hot-loader@3.0.0-beta.6
   ```
4. Para decirle a `babel` cuáles `presets` utilizar, creamos un archivo
   `.babelrc` en el root de nuestra aplicación, con el siguiente contenido:
   ```json
   {
     "presets": [
       "es2015",
       "react",
       "react-boilerplate"
     ],
     "plugins": [
       "react-hot-loader/babel"
     ]
   }
   ```
5. Limpiamos nuestro `html` hasta que quede de la siguiente forma
   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8">
       <title>Ejemplo básico empaquetado con Webpack</title>
     </head>
     <body>
       <div id="container"></div>
     </body>
   </html>
   ```
6. Modificamos `page.js` para que importe a `React` en el scope, para que ya
   *no* se encargue de inyectar el resultado en el DOM, y para que se convierta
   en un módulo independiente, que exporte `Page` y `defaultPageProps`. En
   React, por convención los archivos donde viven los componentes, se llaman
   de la misma manera que los componentes que contienen. Entonces vamos a
   renombrar `page.js` por `Page.js`.
   ```js
   // page.js
   import React from 'react'

   // ... aqui va la definicion de tu componentes
   // y los `pageProps` por defecto

   // Quitamos el siguiente codigo
   /*
   ReactDOM.render(
     <Page {...pageProps} />,
     document.getElementById('container')
   );
   */

   // exportamos las propiedades dinámicas por defecto de la página
   // con el nombre "defaultPageProps"
   export const defaultPageProps = pageProps

   // exportamos por defecto el componente `Page`
   export default Page
   ```
7. Creamos un archivo `index.js` que configuraremos como `entry` de `webpack`.
   El será el encargado de renderizar `Page` e inyectar el resultado en el `DOM`
   ```js
   // main.js
   import React from 'react';
   import ReactDOM from 'react-dom';

   // Usamos un componente padre, para poder desarrollar mas agilmente
   import { AppContainer } from 'react-hot-loader';

   // Importamos el componente `Page` y las `defaultPageProps`
   import Page, { defaultPageProps  } from './page';

   // Aquí vemos un poco de la magia de webpack
   // esta instrucción se encargara de inyectar el codigo de `styles.css`
   // dentro de un tag `<style>` en nuestro `html` resultante
   require("./styles.css");

   // Creamos una funcion utilitaria para renderizar todos nuestros componentes
   // usando el componente padre, previamente importado
   const render = (Component, props = {}) => {
     ReactDOM.render(
       <AppContainer>
         <Component {...props} />
       </AppContainer>,
       document.getElementById('container'),
     );
   };

   // renderizamos la página
   render(Page, defaultPageProps);

   // y si hay algún cambio, recargamos la página "on-the-fly"
   // sin necesidad de que refresquemos el navegador
   if (module.hot) {
     module.hot.accept('./page', () => {
       const newApp = require('./page').default;
       render(newApp);
     });
   }
   ```
8. Creamos el archivo de configuración de `webpack`: `webpack.config.js`
   ```js
   // webpack.config.js

   const { resolve } = require('path');

   // importamos webpack
   const webpack = require('webpack');
   // ... y los plugins que habiamos instalado
   const OpenBrowserPlugin = require('open-browser-webpack-plugin');
   const HtmlWebpackPlugin = require('html-webpack-plugin');

   const config = {
     devtool: 'cheap-module-eval-source-map',

     // definimos las entradas de nuestra aplicacion
     entry: [
       // las 3 primeras son para el hot reload
       'react-hot-loader/patch',
       'webpack-dev-server/client?http://localhost:8080',
       'webpack/hot/only-dev-server',
       // este es la que definimos en el punto anterior
       './main.js'
     ],

     // establecemos el output
     output: {
       filename: 'bundle.js',
       path: resolve(__dirname, 'build'),
       publicPath: '/',
     },

     // configuramos el servidor local de desarrollo
     devServer: {
       hot: true,
       contentBase: resolve(__dirname, 'build'),
       publicPath: '/'
     },

     // y establecemos qué tipo de archivos vamos a procesar y cómo
     module: {
       rules: [
         {
           test: /\.js$/, // todos los `js`
           loaders: [
             'babel-loader', // los procesamos con el loader de `babel`
           ],
           exclude: /node_modules/, // ignoramos archivos dentro de node_modules
         },

         // luego
         {
           test: /\.css$/, // todos los archivos `csss`
           use: [
             { loader: "style-loader" }, // primero creamos un tag `style`
             { loader: "css-loader" } // y le injetamos el `css`
           ]
         }
       ]
     },

     // ... finalmente
     plugins: [
       // concatena los modulos importados
       new webpack.optimize.ModuleConcatenationPlugin(),
       // abre un navegador con la ruta de desarrollo
       new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
       // habilita la opcion de hot module replacement (hot reload)
       new webpack.HotModuleReplacementPlugin(),
       // y por ultimo, inyecta el codigo dentro del `index.html`
       new HtmlWebpackPlugin({
         template: './index.html',
         filename: 'index.html',
         inject: 'body'
       })
     ]
   };

   module.exports = config;
   ```
9. Reemplazas el `npm script` `start`, con el siguiente comando
   `webpack-dev-server`
10. Desde tu terminal ejecutas `yarn start`

## Ejercicio

Esto sí que ha sido una travesía, lo has conseguido. Ahora chequea en tu
navegador a través de los `devtools` (`ctrl + shift + i`), qué forma tiene tu
`DOM`, cómo se han inyectado los estilos y cuál es la forma de tu `bundle`.

En la próxima y última lección veremos con organizar tu código de una manera
más ordenada.
