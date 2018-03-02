# React + Redux = Awesome

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

En esta lectura vamos a hacer el proceso completo de diseñar una aplicación
usando React y Redux.

Usaremos como base nuestro proyecto de las lecciones anteriores, pero
reemplazaremos el `MainSection` por un nuevo componente `FilterableProductTable`
que nos muestre una tabla filtrable de productos.

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
  products = []
  asideLinks = []

  return (
    <Page>
      <FilterableProductTable products={products} />
      <Aside titulo={asideTitulo} links={asideLinks} />
    </Page>
  )
}

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  asideTitulo: PropTypes.string.isRequired,
  asideLinks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default Main
```

`FilterableProductTable` va a ser nuestra librería, así que creamos un archivo
`lib/FilterableProductTable/components/index.js` con el siguiente contenido.

> Más adelante entederás por qué elegimos esta estructura de carpetas.

```js
import React from 'react'

const FilterableProductTable = () => {
  const style = {
    width: '70%',
    float: 'left'
  }
  return (
    <div style={style}>
      <h2>Filterable Product Table</h2>
    </div>
  )
}

export default FilterableProductTable
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

## Implementación

Entonces vamos a simular un flujo habitual de tareas de la vida real.

## Paso 0: Comienza con un Mock

Imagina que ya tenemos un mock de nuestrx diseñadorx que se ve asi:

![Mockup](https://reactjs.org/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png)

Y nuestra API JSON nos devuelve data con la siguiente estructura:

```js
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```

## Paso 1: Divide la interfaz (UI) en una jerarquía de componentes

Lo primero que deberías hacer es dibujar cajitas alrededor de cada uno de los
componentes (y sub componentes) y les das nombres. Si trabajas con unx
diseñadrx, probablemente ya haya hecho esto asi ve a preguntarle! Si tu
diseñadorx es buenx con la semántica, entonces los nombres de los Layers de
Photoshop pueden ser buenos nombres para tus componentes de React!

Pero ¿cómo determino que debería tener su propio componente? Sólo usa los mismos
criterios que utilizas para decidir si debes crear una nueva función u objecto.
Una de éstas técnicas es la del [principio de única responsabilidad](https://en.wikipedia.org/wiki/Single_responsibility_principle),
que en React sería que un componente debe idealmente hacer una sola cosa. Si
comienza a crecer es hora de decomponerlos en componentes mas pequeños.

Como habitualmente estarás proyectando en la interfaz un objeto JSON, entenderás
que cuando has modelado correctamente tu `state`, tu UI (y con ella la
estructura de tus componentes) se amoldará si problemas. Esto es porque tu UI y
tu `state` suelen adherirse a la misma *arquitectura de la información*, lo que
implica que en general separar tu UI de tu data es trivial: divide tus
componentes de tal manera que representen exactamente una porción de la
información.

![Component diagram](https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png)

Aquí verás que tenemos 5 componentes:

1. **`FilterableProductTable` (naranja):** contiene el bloque completo
2. **`SearchBar` (azul):** recibe el *input del usuario*
3. **`ProductTable` (verde):** muestra y filtra la *colección* según el *input
   del usuario*
4. **`ProductCategoryRow` (turquesa):** muestra la cabecera para cada
   *categoría*
5. **`ProductRow` (rojo):** muestra una fila para cada *producto*

Si observas a `ProductTable`, verás que la cabecera de la tabla (que tiene los
labels "Name" y "Price") no están en su propio componente. Esto es según la
preferencia de cada uno. En este ejemplo, los dejamos como parte de
`ProductTable` porque es parte de la lógica de renderizado de la *colección*,
que es responsabilidad de `ProductTable`. Sin embargo si con el tiempo este
header crece y se complejiza (por ejemplo para permitir ordenamiento),
probablemente tenga sentido crearle su propio componente `ProductTableHeader`.

Ahora que hemos identificado cuáles son nuestro componentes, vamos a ordenarlos
en una jerarquía. Esto es simple, si un componente aparece dentro de otro
componente en el mock, entonces debería aparecer como hijo en la jerarquía:

* `FilterableProductTable`
  - `SearchBar`
  - `ProductTable`
    * `ProductCategoryRow`
    * `ProductRow`

***

Fuentes:

* [Thinking in React - Documentación oficial de React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Usage with React - Documentación oficial de Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
