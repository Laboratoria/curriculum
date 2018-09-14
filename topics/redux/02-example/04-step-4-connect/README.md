# Ejemplo Redux + React - Paso 4: `connect` HOC

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Paso 4: Conectamos el `state` con usanod el HOC `connect`

Quitemos el hack que colocamos en `lib/components/Main.js` e
inyectemos la magia de Redux a nuestros componentes.

Para ello necesitamos hacer solamente dos cosas. Primero vamos a crear nuestro
HOC a la altura de la carpeta `components` que se encargará de setear la data
que necesita `lib/components/Main.js`, lo crearemos en `lib/Main.js`

```js
// lib/Main.js

// te acuerdas que hablamos de `connect` al comienzo de la lección?
// Finalmente esta aquí!!!
import { connect } from 'react-redux';
// Y el componente puramente presentacional de Main, ya sin hack
import MainComponent from './components/Main';

const MainWithRedux = connect(
  // `connect` recibe dos parámetros. El primero de ellos es
  // `mapStateToProps` que justamente lo que haces es mapear valores del state
  // a props que recibirá `MainComponent`
  function mapStateToProps(state) {
    // buscamos los 3 valores que nos interesan
    const {
      filteredProducts,
      asideTitulo,
      asideLinks,
    } = state.AppReducer;

    // y devolvemos las nuevas props
    return {
      // fijate q los productos filtrados en el state se llaman `filteredProducts`
      // pero que la props del componente `Main` se llama `products`
      products: filteredProducts,
      asideTitulo,
      asideLinks,
    };
  }
)(MainComponent);

export default MainWithRedux;
```

Y lo segundo es indicar en `index.js` que ya no queremos usar
`lib/components/Main`, sino su versión mejorada `lib/Main`.

> Prueba de cambiar los valores de INIT_STATE en `./lib/reducer.js` y fíjate
> cómo eso se refleja en tu interfaz!
