# `connect` HOC

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Conectando el `state` con usando el HOC `connect`

Si vienes siguiendo los pasos anteriores, ahora tenemos la data de productos en
dos sitios distintos: en `src/App.js` (la pusimos acá temporalmente para hacer
la versión estática), y en `src/reducer.js`.

Quitemos la data de `App` y conectemos el componente al `store` para acceder a
la data que ya está en el estado del store (la que inicializamos en
`src/reducer.js`).

Para ello, vamos a usar el _HOC_ (_Higher-Order Component_) `connect`, que
cepta dos argumentos (`mapStateToProps` y `mapDispatchToProps`) y retorna una
función a la que le pasamos el componente que queremos _conectar_ al store y a
su vez retorna un nuevo componente (el ya conectado).

```js
import React from 'react';
import { connect } from 'react-redux';
import FilterableProductTable from './components/FilterableProductTable';

const App = ({ products }) => (
  <div className="App">
    <FilterableProductTable products={products} />
  </div>
);

const mapStateToProps = ({ AppReducer }) => ({
  products: AppReducer.products,
});

export default connect(mapStateToProps)(App);
```

Fíjate que ya no _exportamos_ `App` directamente, sino que exportamos el
resultado de invocar el HOC que creamos invocando a `connect` (pasándole
`mapStateToProps`). Podríamos decir que estamos exportando _ConnectedApp_ o el
componente `App` ya conectado, en este caso con acceso al valor
`state.AppReducer.products`, que tiene disponible a través de sus `props`.

> Prueba de cambiar los valores de INIT_STATE en `./lib/reducer.js` y fíjate
> cómo eso se refleja en tu interfaz!
