# React + Redux = Awesome

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Paso 3: Identifica la representación mínima (pero completa) del estado de tu UI

Piensa en cuál es el mínimo conjunto de datos mutables que necesita tu
aplicación. La clave aquí es DRY: *Don't Repeat Yourself*. Identifica la
representación absolutamente mínima del `state` de tu aplicación y toda la
información derivada la calculas bajo demanda. Por ejemplo si en nuestro ejemplo
quisieramos mostrar la suma total de items disponibles, sólo nos alcanza con
tener la lista de productos e iterarla para contabilizar la disponibilidad, sin
necesidad de tener otra propiedad en nuestro `state` para guardar el calculo.

Piensa en todas las piezas de información que tiene nuestra aplicación:

* La lista original de productos
* El texto de búsqueda que ingresa el usuario
* El valor del checkbox
* La lista filtrada de productos

Ahora hacemos la integración de React con Redux para comenzar con este estado
global.

> No esperamos que entiendas todo lo que está sucediendo aquí, sólo que puedas
> luego desarrollar tus propios actions y reducers

Aquí es donde entra en acción Redux.

Primero (3.1) creamos un nuevo archivo `lib/store.js` que contendrá la
configuración de nuestro Redux store

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

y luego creamos nuestro `lib/reducer.js` que contendrá el estado inicial de
nuestra aplicación, como lo definimos más arriba.

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

// nuestro reducer todavía no reacciona a ninguna acción, pero ya tiene un valor
// inicial
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

Si chequeas Redux Dev Tools verás como el state de la aplicación ya cuenta con
la info indicada en INIT_STATE

![State en Redux Dev Tools](https://github.com/merunga/curricula-js/raw/master/11-react/L06-hocs-global-state/static/redux-dev-tools.jpg)

Luego (3.2), quitemos el hack que colocamos en `lib/components/Main.js` e
inyectemos la magia de Redux a nuestros componentes.

Para ello necesitamos hacer solamente dos cosas. Primero vamos a crear nuestro
HOC a la altura de la carpeta `components` que se encargará de setear la data
que necesita `lib/components/Main.js`, lo crearemos en `lib/Main.js`

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

Y lo segundo es indicar en `index.js` que ya no queremos usar
`lib/components/Main`, sino su versión mejorada `lib/Main`.

> Prueba de cambiar los valores de INIT_STATE en `./lib/reducer.js` y fíjate
> cómo eso se refleja en tu interfaz!

***

Fuentes:

* [Thinking in React - Documentación oficial de React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Usage with React - Documentación oficial de Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
