# Construye una versión estática en React

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

Ahora que ya tenemos una base es hora de comenzar a implementar la aplicación.
El siguiente paso va a ser _construir una versión estática_, sin interactividad.
Es mejor separar estos procesos porque la construcción de la versión estática es
más que nada tipear pero no pensar, en cambio agregar interacciones require más
de pensar que de tipear. Veremos por qué.

Para construir una versión estática querrás construir componentes que reusen
otros componentes pasando información entre unos y otros usando sus `props`.

Puedes construir tu aplicación top-down o bottom-up. Esto quiere decir que
puedes comenzar con los componentes más arriba en la jerarquía (i.e. comenzar
con `FilterableProductTable`) o con los que están mas abajo (`ProductRow`). En
casos simples es generalmente más rápido comenzar de arriba hacia abajo, y en
proyectos mas grandes, es más simple comenzar por abajo e ir escribiendo tests a
medida que vas subiendo escalones.

Al final de este proceso tendras una serie de componentes reusables que
renderizan tus datos. El componente más arriba en la jerarquía
(`FilterableProductTable`) recibirá la data como una prop. Si realizas un
cambio en el JSON de productos, estos cambios se verán inmediatamente reflejados
en tu interfaz. Esta es la maravilla del **one-way data flow**.

[Pruébalo en CodePen](https://codepen.io/merunga/pen/NvLbjX)

Habíamos visto en nuestro _mock up_ que el componente `FilterableProductTable`
debe contener a su vez a `SearchBar` y `ProductTable`. Creemos dos archivos para
estos componentes:

```sh
touch src/components/FilterableProductTable/SearchBar.js
touch src/components/FilterableProductTable/ProductTable.js
```

Implementemos el componente `SearchBar`:

```js
// src/components/FilterableProductTable/SearchBar.js
import React from 'react';

const SearchBar = () => (
  <form>
    <input type="text" placeholder="Search..." />
    <p>
      <input type="checkbox" />
      {' '}
      Only show products in stock
    </p>
  </form>
);

export default SearchBar;
```

Ahora pasemos al componente `ProductTable`, que a su vez hace uso de
`ProductCategoryRow` y `ProductRow`. En este caso, hemos decidido mantener estos
componentes dentro de un mismo archivo (`src/components/FilterableProductTable/ProductTable.js`).

```js
// src/components/FilterableProductTable/ProductTable.js
import React from 'react';

const ProductCategoryRow = ({ category }) => (
  <tr><th colSpan="2">{category}</th></tr>
);

const ProductRow = ({ product }) => (
  <tr>
    <td>
      {product.stocked
        ? product.name
        : <span style={{color: 'red'}}>{product.name}</span>}
    </td>
    <td>{product.price}</td>
  </tr>
);

const ProductTable = ({ products }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {products.reduce(
        (memo, product, idx) => (
          (!idx || product.category !== products[idx - 1].category)
            ? [
              ...memo,
              <ProductCategoryRow category={product.category} key={product.category} />,
              <ProductRow product={product} key={product.name} />
            ]
            : [
              ...memo,
              <ProductRow product={product} key={product.name} />
            ]
        ),
        [],
      )}
    </tbody>
  </table>
);

export default ProductTable;
```

Ya tenemos los componentes `SearchBar` y `ProductTable`, así que actualicemos
`FilterableProductTable` para que haga uso de estos componentes, y de paso
agreguemos `products` como `prop`, donde esperamos que nos pasen el arreglo
(array) de productos, y que a su vez estaremos pasando a `ProductTable`.

```js
// src/components/FilterableProductTable/index.js
import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = ({ products }) => (
  <div>
    <SearchBar />
    <ProductTable products={products} />
  </div>
);

export default FilterableProductTable;
```

> Tu tienes como tarea indicar los prop-types correspondientes

Y ahora que tenemos un `FilterableProductTable` mas interesante, vamos a crear
un poco de data ficticia para ver cómo se muestra:

```js
// src/App.js
import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
];

const App = () => (
  <div className="App">
    <FilterableProductTable products={products} />
  </div>
);

export default App;
```
