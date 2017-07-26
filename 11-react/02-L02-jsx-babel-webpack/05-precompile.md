# `Babel`: caso de uso real

## Intro

Tomemonos un segundo para analizar qué hace y cómo está funcionando `babel`
1. Primero importamos la versión para navegadores de `babel`:
  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>
  ```
  Esto carga un versión de babel que se encarga de "escuchar" por cualquier tag `script` que esté marcado como `text/babel`. Ten en cuenta que estos tags no serán procesados por tu navegador, ya que su tipo no está configurado como uno de los "entendibles" por defecto.

2. Luego cargamos un archivo externo procesándolo con la versión de `babel` importada en el punto anterior
  ```html
  <script type="text/babel" src="page.js" ></script>
  ```
  Cuando el parser encuentra un tag `script` marcado como `text/babel` lo relega al `babel`, quien se encarga de transpilarlo y ejecutarlo.
  
Si te pones a pensar, te darás cuenta que este proceso es poco eficiente, ya que cada vez que se carga la página, `babel` vuelve a transpilar el script, a pesar de que nada cambia entre dos cargas consecutivas de la página.

En esta lectura vamos configurar nuestra aplicación para re-transpilar nuestro código sólo cuando haya un cambio y que nuestra página `html` sólo se encargue de importar un archivo con código es5

## Setup

1. Lo primero que vamos a hacer es quitar la dependencia a 'node-static', que ya no lo vamos a necesitar
  ```
  yarn remove node-static
  ```

2. Luego vamos a eliminar de nuestro `html` el import de `babel`.

3. Convertimos a `babel` en una dependencia de nuestra aplicación a través de `package.json`
  ```
  yarn add -D babel-cli babel-preset-react
  ```
  > el parámetro `-D` indica que son dependencias de desarrollo

4. Modificamos el `npm script` `start` para que:
  - ejecute `babel` sobre nuestro archivo `page.js`
  - usando el [--preset `react`](https://babeljs.io/docs/plugins/preset-react/)
  - cada vez que haya un cambio ([`watch`](https://babeljs.io/docs/usage/cli/#babel-compile-files))
  - y coloque el resultado en la carpeta `build` ([`our-dir`](https://babeljs.io/docs/usage/cli/#babel-compile-files))

  Todo lo anterior lo expresamos con el siguiente comando:
  ```
  babel page.js --presets react --watch --out-dir=build
  ```
  
5. Y por último vamos a modificar nuestro `html` para que importe el archivo transpilado y no el original, reemplazando:
```html
<script type="text/babel" src="page.js" ></script>
```
por
```html
<script src="build/page.js"></script>
```

## Ejercicio

Ejecuta desde tu terminal el script `start` para chequear que todo sigue funcionando.

> ¿Te has dado cuenta que ahora ya no necesitas levantar un servidor para ver correctamente el resultado? ¿Por qué crees que es? La respuesta radica en el punto **5** del **setup**

En la próxima lectura vamos a ver cómo podemos utilizar `webpack`, para que nuestra experiencia de desarrollo sea mas disfrutable.
