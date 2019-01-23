# Setup

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Setup

Antes que nada vamos a instalar nuestras nuevas dependencias.

```sh
yarn add redux react-redux
yarn add -D redux-devtools
```

Y desde tu navegador instala la [extensión](http://extension.remotedev.io/).

Luego, vamos a convertir a `lib/components/Main.js` en un componente puramente
presentacional:

```js
// lib/components/Main.js

import React from 'react';
import PropTypes from 'prop-types';

import Page from './Page';
import Header from './Header';
// Nos quitamos de encima el `MainSection`
// y ahora importamos nuestro nuevo componente
import FilterableProductTable from '../FilterableProductTable/components';
import Aside from './Aside';

// toda los datos que Main necesita, ahora los recibimos como props
const Main = ({ products, asideTitulo, asideLinks }) => {
  // TODO: Hack para que renderice. Quitar luego de setear Redux.
  products = [];
  asideLinks = [];

  return (
    <Page>
      <FilterableProductTable products={products} />
      <Aside titulo={asideTitulo} links={asideLinks} />
    </Page>
  );
};

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  asideTitulo: PropTypes.string.isRequired,
  asideLinks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Main;
```

`FilterableProductTable` va a ser nuestra librería, así que creamos un archivo
`lib/FilterableProductTable/components/index.js` con el siguiente contenido.

> Más adelante entederás por qué elegimos esta estructura de carpetas.

```js
import React from 'react';

const FilterableProductTable = () => {
  const style = {
    width: '70%',
    float: 'left'
  };
  return (
    <div style={style}>
      <h2>Filterable Product Table</h2>
    </div>
  );
};

export default FilterableProductTable;
```

y por últimos limpiamos un poco nuestro `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ejemplo React + Redux</title>
  </head>
  <body>
    <h1>Ejemplo React + Redux</h1>
    <div id="container">
      <p>
        Si ves esto React <strong>no</strong> está funcionando.
      </p>
  </body>
</html>
```

A esta altura tu aplicación se mostrará vacía (y habran algunos errores en tu
consola de props no indicadas) y esto es porque `Main` está esperando props que
todavia no le estamos proveyendo. Con esta base comenzamos nuestra
implementación.
