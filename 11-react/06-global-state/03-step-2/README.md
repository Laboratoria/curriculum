# React + Redux = Awesome

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Step 2: Construye una versión estática en React

Ahora que ya tenemos los componentes es hora de comenzar a implementar la
aplicación. El paso más simple es comenzar con una versión estática, sin
interactividad. Es mejor separar estos procesos porque la construcción de la
versión estática es mas que nada tipear pero no pensar, en cambio agregar
interacciones require más de pensar que de tipear. Veremos por qué.

Para construir una versión estática querrás contruir componentes que reusen
otros componentes pasando información entre unos y otros usando sus `props`.

Puedes construir tu aplicación top-down o bottom-up. Esto quiere decir que
puedes comenzar con los componentes más arriba en la jerarquía (i.e. comenzar
con `FilterableProductTable`) o con los que están mas abajo (`ProductRow`). En
casos simples es generalmente más rápido comenzar de arriba hacia abajo, y en
proyectos mas grandes, es más simple comenzar por abajo e ir escribiendo test a
medida que vas subiendo escalones.

Al final de este proceso tendras una librería de componentes reusables que
renderizan tus datos. El componente más arriba en la jerarquía
(`FilterableProductTable`) recibirá la data como una prop. Si realizas un
cambio en el JSON de productos, estos cambios se verán inmediatamente reflejados
en tu interfaz. Esta es la maravilla del **one-way data flow**.

[Pruébalo en CodePen](https://codepen.io/merunga/pen/NvLbjX)

```js
// lib/FilterableProductTable/components/index.js
import React from 'react'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ({ products }) => {
  const style = {
    width: '70%',
    float: 'left'
  }

  return (
    <div style={style}>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable
```

```js
// lib/FilterableProductTable/components/SearchBar.js
import React from 'react'

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar
```

```js
// lib/FilterableProductTable/components/ProductTable.js
import React from 'react'

const ProductCategoryRow = ({ category }) => {
  return (
    <tr><th colSpan="2">{category}</th></tr>
  );
}

const ProductRow = ({ product }) => {
  const name = product.stocked ?
    product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;
  products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable
```

> Tu tienes como tarea indicar los prop-types correspondientes

Y ahora que tenemos un `FilterableProductTable` mas interesante, vamos a crear
un poco de data ficticia para ver cómo se muestra:

```js
// lib/components/Main.js
/* ... */
const Main = ({ products, asideTitulo, asideLinks }) => {
  asideTitulo = 'Links'
  asideLinks = [
    { href: '#', texto: 'Link 1'},
    { href: '#', texto: 'Link 2'},
    { href: '#', texto: 'Link 3'},
    { href: '#', texto: 'Link 4'},
    { href: '#', texto: 'Link 5'}
  ]

  // Definimos estaticamente los productos
  products = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$1666699.99', stocked: true, name: 'Nexus 7'}
  ];

  return (
    <Page>
      <FilterableProductTable products={products} />
      <Aside titulo={asideTitulo} links={asideLinks} />
    </Page>
  )
}
/* ... */
```

***

Fuentes:

* [Thinking in React - Documentación oficial de React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Usage with React - Documentación oficial de Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
