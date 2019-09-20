# Store & State

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Identifica la representación mínima (pero completa) del estado de tu UI

Piensa en cuál es el mínimo conjunto de datos mútuamente excluyentes que
necesita tu aplicación. La clave aquí es DRY: *Don't Repeat Yourself*.
Identifica la representación absolutamente mínima del `state` de tu aplicación y
toda la información derivada la calculas bajo demanda. Por ejemplo si en nuestro
ejemplo quisieramos mostrar la suma total de items disponibles, solo necesitamos
tener la lista de productos e iterarla para contabilizar la disponibilidad, sin
necesidad de tener otra propiedad en nuestro `state` para guardar el cálculo.

A veces uno pensaría que es ineficiente recomputar un valor cada vez que se
necesita, pero el impacto en performance es mínimo en relación a la complejidad
de mantener dos propiedades de nuestro estado sincronizadas a través del tiempo.
Recuerda, identifica el *mínimo conjunto* de datos que necesita tu *aplicación*,
y *solo eso*, ni una propiedad más en el `state`.

Entonces, con eso en mente, piensa en el conjunto mínimo de piezas de
información, que tiene que tener nuestra aplicación, para ser completamente
funcional:

* La lista de productos
* El texto de búsqueda que ingresa el usuario
* El valor del checkbox

> Uno podría decir que es necesario mantener dos copias de la lista: la original
> y la filtrada. Pero recuerda que el conjunto es el mínimo, la lista filtrada
> de productos se obtiene filtrando la lista original, segun el valor del
> checkbox, es decir que es una propiedad derivada de otras dos, por lo tanto no
> pertenece al `state`.

Ahora hacemos la integración de React con Redux para comenzar con este estado
global.

> No esperamos que entiendas todo lo que está sucediendo aquí, sólo que puedas
> luego desarrollar tus propios _actions_ y _reducers_ 😉

Aquí es donde entra en acción Redux.

## Configurando el store

Creamos un nuevo archivo `lib/store.js` que contendrá
la configuración de nuestro `store`

```js
// src/store.js
import { createStore, combineReducers } from 'redux';
import AppReducer from './reducer';

const rootReducer = combineReducers({
  // aquí puedes ir agregando entradas de tu store
  AppReducer,
});

const store = createStore(
  rootReducer,
  // inyectamos la capacidad de usar Redux Dev Tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
```

y luego creamos nuestro `lib/reducer.js` que contendrá el estado inicial de
nuestra aplicación, como lo definimos más arriba.

```js
// src/reducer.js

// Supongamos que estos son los productos que recibimos de nuestra API JSON
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$1699.99', stocked: true, name: 'Nexus 7'},
];

const INIT_STATE = {
  // La de productos
  products: PRODUCTS,
  // El texto de búsqueda que ingresa el usuario
  filterText: '',
  // El valor del checkbox
  inStockOnly: false,
};

// nuestro reducer todavía no reacciona a ninguna acción, pero ya tiene un valor
// inicial
export default (state = INIT_STATE, action) => {
  switch(action.type) {
    // ...
    default:
      return state;
    }
};
```

y modificamos el `index.js` para que haga el setup inicial del store.

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}> {/* <---- wrapping con el store */}
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

Si chequeas Redux Dev Tools verás como el state de la aplicación ya cuenta con
la info indicada en INIT_STATE

![State en Redux Dev Tools](https://user-images.githubusercontent.com/110297/51624686-5dc6ff00-1f09-11e9-9206-9012534201d8.png)
