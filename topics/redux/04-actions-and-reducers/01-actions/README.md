# Actions

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Identifica tus acciones y agrega Inverse Data Flow (**State is read-only**)

Hasta ahora, tenemos una aplicación que configura su `store` de Redux, toma esos
valores y los pasa a la interfaz para renderizarlo. Ahora necesitamos conseguir
que la información fluya en la otra dirección: de los componentes al `state`.
Como habíamos definido al comienzo, en el mundo de Redux, la única forma de
conseguirlo es a través de _actions_.

Así como en nuestro `state` inicial definimos los "sustantivos" de nuestra
aplicación, las actions (acciones) son nuestros "verbos".

Entonces, ¿cuáles son las acciones que un usuario puede realizar en nuestra
aplicación?

* escribir en el input
* seleccionar o limpiar el checkbox

Tomemos estas acciones y veamos como las definimos en Redux.

Lo primero que vamos a necesitar, es una archivo `src/actions.js` donde
definiremos nuestros `action types` y `action creators` (funciones que devuelven
acciones).

```js
export const actionTypes = {
  FILTER_TEXT_CHANGED: 'FILTER_TEXT_CHANGED',
  IN_STOCK_ONLY_CHANGED: 'IN_STOCK_ONLY_CHANGED',
};

export const filterTextChanged = text => ({
  type: actionTypes.FILTER_TEXT_CHANGED,
  text,
});

export const inStockOnlyChanged = value => ({
  type: actionTypes.IN_STOCK_ONLY_CHANGED,
  value,
});
```

Y luego necesitamos dotar a `SearchBar` de la capacidad para disparar estas
acciones. Para eso, vamos a crear un nuevo HOC con `connect`.

> Podríamos también conectar el componente `FilterableProductTable`, pero hemos
> elegido hacerlo en `SearchBar` porque es el mínimo componente que recibe
> interacciones del usuario. A qué nivel defines tus contenedores es totalmente
> arbitrario y suele ser uno de los puntos más complicados si eres nuevx con
> HOCs y Redux. Como regla general considera cuál es el mínimo componente que es
> "dueño" del contexto.

```js
// src/components/FilterableProductTable/SearchBar.js
import React from 'react';
import { connect } from 'react-redux';
import { filterTextChanged, inStockOnlyChanged } from '../../actions';

const SearchBar = ({
  // Los datos que necesita nuestro SearchBar
  filterText, inStockOnly,
  // Las acciones que puede realizar
  setFilterText, setInStockOnly,
}) => (
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
          setInStockOnly(evt.target.checked)
        }}
        />
      {' '}
      Only show products in stock
    </p>
  </form>
);

const mapStateToProps = ({ AppReducer }) => ({
  // buscamos los valores que nos interesan para el SearchBar
  // fíjate que el SearchBar no tiene por qué saber nada de los productos
  filterText: AppReducer.filterText,
  inStockOnly: AppReducer.inStockOnly,
});

// El segundo parámetro de `connect` es `mapDispatchToProps`. En el mundo Redux
// al llamar a un `action creator` lo único que obtenemos es un objeto que
// expresa que es lo que ha sucedido, pero no dispara la acción. Para esto
// necesitas llamar a la función `dispatch` del store. Esto es lo que hacemos
// por medio de `mapDispatchToProps`, que mapea llamadas a `dispatch` para tus
// `action creators`.
const mapDispatchToProps = dispatch => ({
  setFilterText: text => dispatch(filterTextChanged(text)),
  setInStockOnly: value => dispatch(inStockOnlyChanged(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
```

Y ahora si, hacemos que nuestro componente `SearchBar` entienda todas estas
nuevas capacidades:

> Ve a tu navegador y usa el checkbox y escribe en el input. Fijate que en tu
> interfaz nada cambia, pero si ves dentro de Redux Dev Tools, verás cómo las
> acciones se van disparando.
