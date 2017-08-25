---
sources:
  - https://facebook.github.io/react/docs/thinking-in-react.html
---

# React + Redux = Awesome!!!

En esta lectura vamos a hacer el proceso completo de diseñar una aplicación usando React y Redux.

Usaremos como base nuestro proyecto de las lecciones anteriores, pero reemplazaremos el `MainSection` por un nuevo componente `FilterableProductTable` que nos muestre una tabla filtrable de productos.

## Setup

Antes que nada vamos a instalar nuestras nuevas dependencias.

```
yarn add redux react-redux
yarn add -D redux-devtools
```

Y desde tu navegador instala la [extensión](http://extension.remotedev.io/).

Y luego dentro de `main.js` reemplazamos
```
import MainSection from './lib/main-section';
```
por
```
import FilterableProductTable from './lib/FilterableProductTable';
```

y reemplazamos la definición de `Main` para que se vea así:

```js
/* ... */
const Main = () => {
  const asideTitulo = 'Links'
  const asideLinks = [
    { href: '#', texto: 'Link 1'},
    { href: '#', texto: 'Link 2'},
    { href: '#', texto: 'Link 3'},
    { href: '#', texto: 'Link 4'},
    { href: '#', texto: 'Link 5'}
  ]

  return (
    <Page>
      <FilterableProductTable />
      <Aside titulo={asideTitulo} links={asideLinks} />
    </Page>
  )
}
/* ... */

```

y creamos un archivo `lib/FilterableProductTable.js` con el siguiente contenido
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

## Diseño

Entonces vamos a simular el flujo habitual en la vida real. Comenzamos con un 

