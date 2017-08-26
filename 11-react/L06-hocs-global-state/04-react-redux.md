---
sources:
  - https://facebook.github.io/react/docs/thinking-in-react.html
  - http://redux.js.org/docs/basics/UsageWithReact.html
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

Luego, vamos a convertir a `lib/components/Main.js` en un componente puramente presentacional:

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

`FilterableProductTable` va a ser nuestra librería, así que creamos un archivo `lib/FilterableProductTable/components/index.js` con el siguiente contenido.

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

A esta altura tu aplicación se mostrará vacía (y habran algunos errores en tu consola de props no indicadas) y esto es porque `Main` está esperando props que todavia no le estamos proveyendo. Con esta base comenzamos nuestra implementación.

## Implementación

Entonces vamos a simular un flujo habitual de tareas de la vida real.

## Paso 0: Comienza con un Mock

Imagina que ya tenemos un mock de nuestrx diseñadorx que se ve asi:

![Mockup](https://facebook.github.io/react/img/blog/thinking-in-react-mock.png)

Y nuestra API JSON nos devuelve data con la siguiente estructura:

```
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

Lo primero que deberías hacer es dibujar cajitas alrededor de cada uno de los componentes y (y sub componentes) y los nombras. Si trabajas con unx diseñadrx, probablemente ya haya hecho esto asi ve a preguntarle! Si tu diseñadorx es buenx con la semántica, entonces los nombres de los Layers de Photoshop pueden ser buenos nombres para tus componentens de React!

Pero ¿cómo determino que debería tener su propio componente? Sólo usa los mismos criterios que utilizas para decidir si debes crear una nueva función u objecto. De de éstas técnicas es la del [principio de única responsabilidad](https://en.wikipedia.org/wiki/Single_responsibility_principle), que en React sería que un componente debe idealmente hacer una sola cosa. Si comienza a crecer es hora de decomponerlos en componentes mas pequeños.

Como habitualmente estarás proyectando en la interfaz un objeto JSON, entenderás que cuando has modelado correctamente tu `state`, tu UI (y con ella la estructura de tus componentes) se amoldará si problemas. Esto es porque tu UI y tu `state` suelen adherirse a la misma *arquitectura de la información*, lo que implica que en general separar tu UI de tu data es trivial: divide tus componentes de tal manera que representen exactamente una porción de tu data.

![Component diagram](https://facebook.github.io/react/img/blog/thinking-in-react-components.png)

Aquí verás que tenemos 5 componentes:

  1. **`FilterableProductTable` (naranja):** contiene el bloque completo
  2. **`SearchBar` (azul):** recibe el *input del usuario*
  3. **`ProductTable` (verde):** muestra y filtra la *colección* según el *input del usuario*
  4. **`ProductCategoryRow` (turquesa):** muestra la cabecera para cada *categoría*
  5. **`ProductRow` (rojo):** muestra una fila para cada *producto*

Si observas a `ProductTable`, verás que la cabecera de la tabla (que tiene los labels "Name" y "Price") no están en su propio componente. Esto es según la preferencia de cada uno. En este ejemplo, los dejamos como parte de `ProductTable` porque es parte de la lógica de renderizado de la *colección*, que es responsabilidad de `ProductTable`. Sin embargo si con el tiempo este header crece y se complejiza (por ejemplo para permitir ordenamiento), probablemente tenga sentido crearle su propio componente `ProductTableHeader`.

Ahora que hemos identificado cuáles son nuestro componentes, vamos a ordenarlos en una jerarquía. Esto es simple, si un componente aparece dentro de otro componente en el mock, entonces debería aparecer como hijo en la jerarquía:

  * `FilterableProductTable`
    * `SearchBar`
    * `ProductTable`
      * `ProductCategoryRow`
      * `ProductRow`

## Step 2: Construye una versión estática en React

Ahora que ya tenemos los componentes es hora de comenzar a implementar la aplicación. El paso más simple es comenzar con una versión que recibe usa el `state` real pero sin interactividad. Es mejor separar estos procesos porque la construcción de la versión estática es mas que nada tipear pero no pensar, en cambio agregar interacciones require más de pensar que de tipear. Veremos por qué.

Para construir una versión estática que renderice nuestro `state`, querrás contruir componentes que reusen otros componentes pasando información entre unos y otros usando sus `props`.

Puedes construir tu aplicación top-down o bottom-up. Esto quiere decir que puedes comenzar con los componentes más arriba en la jerarquía (i.e. comenzar con `FilterableProductTable`) o con los que están mas abajo (`ProductRow`). En ejemplos simples es generalmente más simple comenzar de arriba hacia abajo, y en proyectos mas grandes, es más simple comenzar por abajo e ir escribiendo test a medida que vas subiendo escalones.

Al final de este proceso tendras una librería de componentes reusables que renderizan tus datos. El componente más arriba en la jerarquía (`FilterableProductTable`) recibirá la data como una prop. Si realizas un cambio en el JSON de productos, estos cambios se verán inmediatamente reflejados en tun interfaz. Esta es la maravilla del **one-way data flow**.

<p data-height="600" data-theme-id="0" data-slug-hash="vXpAgj" data-default-tab="js" data-user="lacker" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/merunga/pen/NvLbjX">Thinking In React: Step 2</a> on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

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
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
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

Y ahora que tenemos un `FilterableProductTable` mas interesante, vamos a crear un poco de data ficticia para ver cómo se ver

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

## Paso 3: Identifica la representación mínima (pero completa) del estado de tu UI (**Single source of truth**)

Piensa en cuál es el mínimo conjunto de datos mutables que necesita tu aplicación. La clave aquí es DRY: *Don't Repeat Yourself*. Identifica la representación absolutamente mínima del `state` de tu aplicación y toda la información derivada la calculas bajo demanda. Por ejemplo si en nuestro ejemplo quisieramos mostrar la suma total de items disponibles, sólo nos alcanza con tener la lista de productos e iterarla para contabilizar la disponibilidad, sin necesidad de tener otra propiedad en nuestro `state` para guardar el calculo.

Piensa en todas las piezas de información que tiene nuestra aplicación:

  * La lista original de productos
  * El texto de búsqueda que ingresa el usuario
  * El valor del checkbox
  * La lista filtrada de productos
  
Ahora hacemos la integración de React con Redux para comenzar con este estado global.

> No esperamos que entiendas todo lo que está sucediendo aquí, sólo que puedas luego desarrollar tus propios actions y reducers

Aquí es donde entra en acción Redux. 

Primero creamos un nuevo archivo `lib/store.js` que contendrá la configuración de nuestro Redux store

```js
// lib/store.js

import { createStore, combineReducers } from 'redux';

import AppReducer from './reducer'

const rootReducer = combineReducers({
  // aquí puedes ir agregando entradas de tu store
  AppReducer
});

const store = createStore(
  rootReducer,
  // inyectamos la capacidad de usar Redux Dev Tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
```

y luego creamos nuestro `lib/reducer.js` que contendrá el estado inicial de nuestra aplicación, como lo definimos más arriba.

```js
// lib/reducer.js

// Supongamos que estos son los productos que recibimos de nuestra API JSON
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$1699.99', stocked: true, name: 'Nexus 7'}
];

const INIT_STATE = {
  // La lista original de productos
  originalProducts: PRODUCTS,
  // El texto de búsqueda que ingresa el usuario
  filterText: '',
  // El valor del checkbox
  inStockOnly: false,
  // La lista filtrada de productos
  filteredProducts: PRODUCTS,
  
  // y heredamos las propiedades para la barra lateral
  asideTitulo: 'Links',
  asideLinks: [
   { href: '#', texto: 'Link 1'},
   { href: '#', texto: 'Link 2'},
   { href: '#', texto: 'Link 3'},
   { href: '#', texto: 'Link 4'},
   { href: '#', texto: 'Link 5'}
  ]
}

// nuestro reducer todavía no reacciona a ninguna acción, pero ya tiene un valor inicial
export default (state = INIT_STATE, action) => {
  switch(action.type) {
      
  default:
    return state
  }
}
```

y modificamos el `index.js` para que haga el setup inicial del store.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// El componente Provider que expone `react-redux`
import { Provider } from 'react-redux';
// El que acabamos de crear
import store from './lib/store'

import Main from './lib/components/Main';

require("./styles.css");

const render = (Component, props = {}) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}> {/* <---- wrapping con el store */}
        <Component {...props} />
      </Provider>
    </AppContainer>,
    document.getElementById('container'),
  );
};

render(Main);

if (module.hot) {
  module.hot.accept('./lib/components/Main', () => {
    const newApp = require('./lib/components/Main').default;
    render(newApp);
  });
}
```

Si chequeas Redux Dev Tools verás como el state de la aplicación ya cuenta con la info indicada en INIT_STATE
![State en Redux Dev Tools](redux-dev-tools.jpg)

Luego, quitemos el hack que colocamos en `lib/components/Main.js` e inyectemos la magia de Redux a nuestros componentes.

Para ello necesitamos hacer solamente dos cosas. Primero vamos a crear nuestro HOC a la altura de la carpeta `components` que se encargará de setear la data que necesita `lib/components/Main.js`, lo crearemos en `lib/Main.js`

```js
// lib/Main.js

// te acuerdas que hablamos de `connect` al comienzo de la lección?
// Finalmente esta aquí!!!
import { connect } from 'react-redux'
// Y el componente puramente presentacional de Main, ya sin hack
import MainComponent from './components/Main'

const MainWithRedux = connect(
  // `connect` recibe dos parámetros. El primero de ellos es
  // `mapStateToProps` que justamente lo que haces es mapear valores del state
  // a props que recibirá `MainComponent`
  function mapStateToProps(state) {
    // buscamos los 3 valores que nos interesan
    const {
      filteredProducts,
      asideTitulo,
      asideLinks
    } = state.AppReducer

    // y devolvemos las nuevas props
    return {
      // fijate q los productos filtrados en el state se llaman `filteredProducts`
      // pero que la props del componente `Main` se llama `products`
      products: filteredProducts,
      asideTitulo,
      asideLinks
    }
  }
)(MainComponent)

export default MainWithRedux
```

Y lo segundo es indicar en `index.js` que ya no queremos usar `lib/components/Main`, sino su versión mejorada `lib/Main`.

> Prueba de cambiar los valores de INIT_STATE en `./lib/reducer.js` y fíjate cómo eso se refleja en tu interfaz!

## Paso 4: Identifica tus acciones y agrega Inverse Data Flow (**State is read-only**)

Hasta ahora, tenemos una aplicación que configura su store de Redux, toma esos valores y los pasa a la interfaz para renderizarlo. Ahora necesitamos conseguir que la información fluya en la otra dirección: de los componentes al state. Como había definido al comienzo, en el mundo de Redux, la única forma de conseguirlo es a través de actions.

Asi como en nuestro state inicial, definimos los "sustantivos" de nuestra aplicación, las actions son nuestros "verbos".

Entonces, ¿cuáles son las acciones que un usuario puede realizar en nuestra aplicación?
- escribir en el input
- seleccionar o limpiar el checkbox

Tomemos como ejemplo la acción de "escribir en el input" y veamos como la definimos en Redux.

Lo primero que vamos a necesitar, es una archivo `lib/actions.js` donde definiremos nuestros `action types` y `action creators` (funciones que devuelven acciones).

```js
export const actionTypes = {
  FILTER_TEXT_CHANGED: 'FILTER_TEXT_CHANGED',
  IN_STOCK_ONLY_CHANGED: 'IN_STOCK_ONLY_CHANGED'
}

export const filterTextChanged = text => ({
  type: actionTypes.FILTER_TEXT_CHANGED,
  text
})

export const inStockOnlyChanged = value => ({
  type: actionTypes.IN_STOCK_ONLY_CHANGED,
  value
})
```

Y luego necesitamos dotar a `SearchBar` de la capacidad para disparar estas acciones. Para eso, vamos a crear un nuevo HOC `SearchBarWithRedux`.

```js
// lib/FilterableProductTable/SearchBar
import { connect } from 'react-redux'
import SearchBarComponent from './components/SearchBar'
import { filterTextChanged, inStockOnlyChanged } from '../actions'

const SearchBarWithRedux = connect(
  function mapStateToProps(state) {
    // buscamos los valores que nos interesan para el SearchBar
    // fíjate que el SearchBar no tiene por qué saber nada de los productos
    const {
      filterText,
      inStockOnly
    } = state.AppReducer

    // y devolvemos las nuevas props
    return {
      filterText,
      inStockOnly
    }
  },
  // El segundo parámetro de `connect` es `mapDispatchToProps`.
  // El el mundo Redux al llamar a un `action creator` lo único que obtenemos
  // es un objeto que expresa que es lo que ha sucedido, pero no dispara la acción.
  // Para esto necesitas llamas a la función `dispatch` del store.
  // Esto es lo que hace `mapDispatchToProps` mapea llamadas a `dispatch` para tus `action creators`
  function mapDispatchToProps(dispatch) {
    return {
      setFilterText(newFilterText) {
        dispatch(filterTextChanged(newFilterText))
      },
      setInStockOnly(newValue) {
        dispatch(inStockOnlyChanged(newValue))
      }
    }
  }
)(SearchBarComponent)

export default SearchBarWithRedux
```

Modificamos `FilterableProductTable` para que en lugar de usar el componente `SearchBar` utilice el contenedor `SearchBarWithRedux`.

Y ahora si, hacemos que nuestro componente `SearchBar` entienda todas estas nuevas capacidades:
```js
// lib/components/SearchBar
import React from 'react'

const SearchBar = ({
  // Los datos que necesita nuestro SearchBar
  filterText, inStockOnly,
  // Las acciones que puede realizar
  setFilterText, setInStockOnly
}) => {
  return (
    <form>
      <input
        type="text" placeholder="Search..."
        value={filterText}
        onChange={evt => {
          setFilterText(evt.target.value)
        }}
        />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={evt => {
            setInStockOnly(evt.target.value === 'on' ? true : false)
          }}
          />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  setFilterText: PropTypes.func.isRequired,
  setInStockOnly: PropTypes.func.isRequired
}
// Cuando los componentes son "controlados" por un contenedor, el valor por defecto
// de las props, es determinado por el state, es por eso
// que suele ser buena práctica establecer todas tus props como required

export default SearchBar
```

> Ve a tu navegador y usa el checkbox y escribe en el input. Fijate que en tu interfaz nada cambia, pero si ves dentro de Redux Dev Tools, verás cómo las acciones se van disparando

## Paso 5: Determina cómo reacciona tu state a las actions disparadas (**Changes are made with pure functions**)

Ya tenemos a las acciones disparandose, ahora analicemos cómo queremos que el state se modifique ante cada una de ellas. Como lo establece nuestro principio de **Changes are made with pure functions**, vamos a modificar nuestro reducer


## And That's It

Hopefully, this gives you an idea of how to think about building components and applications with React. While it may be a little more typing than you're used to, remember that code is read far more than it's written, and it's extremely easy to read this modular, explicit code. As you start to build large libraries of components, you'll appreciate this explicitness and modularity, and with code reuse, your lines of code will start to shrink. :)

