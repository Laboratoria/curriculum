# React + Redux = Awesome

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Paso 4: Identifica tus acciones y agrega Inverse Data Flow (**State is read-only**)

Hasta ahora, tenemos una aplicación que configura su store de Redux, toma esos
valores y los pasa a la interfaz para renderizarlo. Ahora necesitamos conseguir
que la información fluya en la otra dirección: de los componentes al state. Como
habíamos definido al comienzo, en el mundo de Redux, la única forma de
conseguirlo es a través de actions.

Asi como en nuestro state inicial, definimos los "sustantivos" de nuestra
aplicación, las actions son nuestros "verbos".

Entonces, ¿cuáles son las acciones que un usuario puede realizar en nuestra
aplicación?

* escribir en el input
* seleccionar o limpiar el checkbox

Tomemos estas acciones y veamos como las definimos en Redux.

Lo primero que vamos a necesitar, es una archivo `lib/actions.js` donde
definiremos nuestros `action types` y `action creators` (funciones que devuelven
acciones).

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

Y luego necesitamos dotar a `SearchBar` de la capacidad para disparar estas
acciones. Para eso, vamos a crear un nuevo HOC `SearchBarWithRedux`.

> Nosotros podríamos crear un container que englobea todo el
> `FilterableProductTable`, pero hemos elegido hacerlo en `SearchBar` porque es
> el mínimo componente que recibe interacciones del usuario. A qué nivel tu
> defines tus contenedores es totalmente arbitrario y suele ser uno de los
> puntos más complicados si eres nuevx con HOCs y Redux. Como regla general
> considera cuál es el mínimo componente que es "dueño" del contexto.

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
  // Para esto necesitas llamar a la función `dispatch` del store.
  // Esto es lo que hace `mapDispatchToProps` mapea llamadas a `dispatch` para
  // tus `action creators`
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

Modificamos `FilterableProductTable` para que en lugar de usar el componente
`SearchBar` utilice el contenedor `SearchBarWithRedux`.

Y ahora si, hacemos que nuestro componente `SearchBar` entienda todas estas
nuevas capacidades:

```js
// lib/components/SearchBar
import React from 'react'
import PropTypes from 'prop-types'

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
            setInStockOnly(evt.target.checked)
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

> Ve a tu navegador y usa el checkbox y escribe en el input. Fijate que en tu
> interfaz nada cambia, pero si ves dentro de Redux Dev Tools, verás cómo las
> acciones se van disparando

***

Fuentes:

* [Thinking in React - Documentación oficial de React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Usage with React - Documentación oficial de Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
