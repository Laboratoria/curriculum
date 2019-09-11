# Setup

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Setup

Ahora que ya tenemos una idea de cómo debe ser nuestra interfaz, qué componentes
necesitamos implementar y cómo se ve nuestra data, estamos listos para empezar
con la implementación!

Por simplicidad, para nuestro ejemplo vamos a crear un proyecto nuevo usando
[`create-react-app`](https://github.com/facebook/create-react-app).

```sh
# instala `create-react-app` globalmente usando `npm`
npm i -g create-react-app

# una vez inatalado `create-react-app` (y disponible en tu PATH), creamos un
# nuevo proyecto...
create-react-app react-redux-example

# entramos dentro de la carpeta del proyecto
cd react-redux-example

# abrimos carpeta en editor de texto
atom . # o `code .`, `vim .`, ...

# arrancamos aplicación
yarn start
```

![image](https://user-images.githubusercontent.com/110297/51616819-e9845f80-1ef8-11e9-83b5-e3ece013c54d.png)

Ahora instalemos `redux`, `react-redux` y `redux-devtools` como dependencias.

```sh
yarn add redux react-redux
yarn add -D redux-devtools
```

Y desde tu navegador instala la [extensión](http://extension.remotedev.io/).

En la lectura anterior habíamos decidido que nuestro componente principal se
iba a llamar `FilterableProductTable`, así que empecemos por crear un archivo
donde implementar nuestro componente.

```sh
mkdir -p src/components/FilterableProductTable
touch src/components/FilterableProductTable/index.js
```

> Más adelante irá quedando más claro por qué elegimos esta estructura de
> carpetas.

Agreguemos una implementación _dummy_ de nuestro componente:

```js
// src/components/FilterableProductTable/index.js
import React from 'react';

const FilterableProductTable = () => (
  <div>
    <h2>Filterable Product Table</h2>
  </div>
);

export default FilterableProductTable;
```

Simplificamos el componente `App` y quitamos el _boilerplate_ de
`create-react-app`.

```js
// src/App.js
import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';

const App = () => (
  <div className="App">
    <FilterableProductTable />
  </div>
);

export default App;
```

Borramos archivos innecesarios:

```sh
rm src/logo.svg src/App.css
```

y por últimos limpiamos un poco nuestro `public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Ejemplo React + Redux</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Si vemos la aplicación en el navegador, usando [`react-devtools`](https://github.com/facebook/react-devtools),
deberíamos ver como nuestro componente aparece dentro de `App`.

![image](https://user-images.githubusercontent.com/110297/51619171-c27c5c80-1efd-11e9-96ec-9e05c2c3e213.png)

Con esta base comenzamos nuestra implementación.
