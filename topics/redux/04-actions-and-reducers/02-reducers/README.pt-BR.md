# Reducers

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Determina cómo reacciona tu estado a las acciones

Ya tenemos a las acciones disparándose, ahora analicemos cómo queremos que el
`state` se modifique ante cada una de ellas. Como lo establece nuestro principio
de **Changes are made with pure functions**, vamos a modificar nuestro
`reducer`.

Antes que nada _importamos_ nuestros _action types_. Después agregamos una nueva
propiedad a nuestro estado inicial (`INIT_STATE`) para guardar la lista de
productos ya filtrados (`filteredProducts`) y renombramos `products` a
`originalProducts`.

```js
const filterProducts = (products, filterText, inStockOnly) => products.filter(
  product => (
    // incluimos solo aquellos elementos que:
    // si el checkbox esta prendido y `p.stocked === true`
    // si el checkbox esta apagado siempre true
    (inStockOnly ? product.stocked : true) &&
    // y el `p.name` matchea `filterText` (case insensitive)
    product.name.match(new RegExp(filterText.trim(), 'ig'))
  ),
);
```

```js
// src/reducer.js
import { actionTypes } from './actions';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$1699.99', stocked: true, name: 'Nexus 7'},
];

const INIT_STATE = {
  originalProducts: PRODUCTS,
  filterText: '',
  inStockOnly: false,
  filteredProducts: PRODUCTS,
};

const filterProducts = (products, filterText, inStockOnly) => products.filter(
  product => (
    (inStockOnly ? product.stocked : true) &&
    product.name.match(new RegExp(filterText.trim(), 'ig'))
  ),
);

export default (state = INIT_STATE, action) => {
  switch(action.type) {
    case actionTypes.FILTER_TEXT_CHANGED:
      return {
        ...state,
        filterText: action.text,
        filteredProducts: filterProducts(
          state.originalProducts,
          action.text,
          state.inStockOnly,
        ),
      };
    case actionTypes.IN_STOCK_ONLY_CHANGED:
      return {
        ...state,
        inStockOnly: action.value,
        filteredProducts: filterProducts(
          state.originalProducts,
          state.filterText,
          action.value,
        ),
      };
    default:
      return state;
  }
};
```

Finalmente, ya solo nos faltaría actualizar nuestro componente `App` para que
haga uso de `filteredProducts`.

```js
// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import FilterableProductTable from './components/FilterableProductTable';

const App = ({ products }) => (
  <div className="App">
    <FilterableProductTable products={products} />
  </div>
);

const mapStateToProps = ({ AppReducer }) => ({
  products: AppReducer.filteredProducts,
});

export default connect(mapStateToProps)(App);
```
