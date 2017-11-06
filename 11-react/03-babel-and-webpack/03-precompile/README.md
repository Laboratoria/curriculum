# Babel: caso de uso real

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Intro

Tomemonos un segundo para analizar qué hace y cómo está funcionando `babel`

1. Primero importamos la versión para navegadores de `babel`:
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>
   ```
   Esto carga un versión de babel que se encarga de "escuchar" por cualquier tag
   `script` que esté marcado como `text/babel`. Ten en cuenta que estos tags no
   serán procesados por tu navegador, ya que su tipo no está configurado como uno
   de los "entendibles" por defecto.
2. Luego cargamos un archivo externo procesándolo con la versión de `babel`
   importada en el punto anterior
   ```html
   <script type="text/babel" src="page.js" ></script>
   ```
   Cuando el parser encuentra un tag `script` marcado como `text/babel` lo
   relega al `babel`, quien se encarga de transpilarlo y ejecutarlo.

Si te pones a pensar, te darás cuenta que este proceso es poco eficiente, ya que
cada vez que se carga la página, `babel` vuelve a transpilar el script, a pesar
de que nada cambia entre dos cargas consecutivas de la página.

En esta lectura vamos configurar nuestra aplicación para re-transpilar nuestro
código sólo cuando haya un cambio y que nuestra página `html` sólo se encargue
de importar el archivo generado por `babel`

## Setup

1. Primero vamos a eliminar de nuestro `html` el import de `babel`.

2. Luego, convertimos a `babel` en una dependencia de nuestra aplicación a
   través de `package.json`

   ```sh
   yarn add -D babel-cli babel-preset-react
   ```

   > el parámetro `-D` indica que son dependencias de desarrollo

3. Creamos un `npm script` `build` para que:

   - ejecute `babel` sobre nuestro archivo `page.js`
   - usando el [--preset `react`](https://babeljs.io/docs/plugins/preset-react/)
   - y coloque el resultado en la carpeta `build` ([`our-dir`](https://babeljs.io/docs/usage/cli/#babel-compile-files))

   Todo lo anterior lo expresamos con el siguiente comando:

   ```sh
   babel page.js --presets react --out-dir=build
   ```

4. Y por último vamos a modificar nuestro `html` para que importe el archivo
   transpilado y no el original, reemplazando:

   ```html
   <script type="text/babel" src="page.js" ></script>
   ```

   por

   ```html
   <script src="build/page.js"></script>
   ```

5. Ejecuta `yarn start` y visita tu aplicación

Ahora cada vez que tu realices un cambio en el código de page, debes ejecutar
`yarn build` para que la última versión se vea reflejada en tu página.

## Ejercicio

Investiga sobre el parámetro `--watch` de `babel-cli` y úsalo para no tener que
ejecutar `yarn build` cada vez que realizas un cambio y poder deshacernos de la
dependencia `node-static`.

En la próxima lectura vamos a ver cómo podemos utilizar `webpack`, para que
nuestra experiencia de desarrollo sea más disfrutable.
