# Extrayendo el código js a su propio archivo

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `5min`

***

## Intro

Imagínate una aplicación realmente compleja, con cientos de componentes, hojas
de estilos e imágenes. Así son las aplicaciones en el mundo real, con miles de
líneas de código.

La estrucutra de nuestra aplicación hasta ahora consta de un solo archivo
`html`, que contiene todo nuestro código.

Como te imaginarás, a medida que la complejidad de nuestra aplicación crece,
tener todo nuestro código junto en un solo archivo, deja de ser una alternativa
válida y mantenible.

En esta lectura veremos cómo separar nuestro código `html` de nuestro código
`javascript`.

## Setup

Para poder referenciar archivos externos a procesar desde nuestra aplicación, ya
no nos alcanza con cargar el archivo estáticamente, sino que necesitamos
configurar un servidor local para servir los archivos en cuestión.

Para esto lo primero que vamos a hacer es convertir a nuestro proyecto en una
aplicación de `node`.

Para eso, desde el root de aplicación, ejecutamos el siguiente comando:

```sh
yarn init
```

Sigue las instrucciones y completa la información que se te va solicitando.

Esto creará un archivo `package.json` que contiene la configuración que acabas
de detallar.

Ahora, vamos a instalar una dependencia que nos permita levantar un servidor
local. Para ello vamos a usar el paquete [`node-static`](https://github.com/cloudhead/node-static)
y vamos a crear nuestro primer `npm script` (`start`) que se encargue de llamar
al paquete.

Entonces, primero instalamos la dependencia con `yarn`.

```sh
yarn add node-static
```

Y luego abrimos el archivo `package.json` y agregamos la siguiente propiedad:

```json
{
  "scripts": {
    "start": "static"
  }
}
```

Y por último para levantar tu servidor, solo tienes que ejecutar el siguiente
comando:

```sh
yarn start
```

... y visitar la siguiente url: [127.0.0.1:8080](http://127.0.0.1:8080/)

Aquí unos recursos para entender más sobre el archivo
[`package.json`](https://docs.npmjs.com/files/package.json) y los
[`npm scripts`](https://docs.npmjs.com/misc/scripts).

## Ejercicio

Ahora que ya tienes tu aplicación configurada, extrae todo el código de tu tag
`script` a su propio archivo `page.js` y referencialo desde tu `html` como
harías con cualquier `js` externo:

```html
<script type="text/babel" src="page.js" ></script>
```

En la próxima lectura vamos a ver cómo se utiliza `babel` en el "mundo real".
