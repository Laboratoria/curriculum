# Los tres principios de Redux

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Una sóla fuente de verdad

> Single source of truth

**El [state](http://redux.js.org/docs/Glossary.html#state) de toda tu aplicación
es guardado en un objeto dentro de un único
[store](http://redux.js.org/docs/Glossary.html#store).**

```js
console.log(store.getState())

/* Prints
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/
```

## El estado es de "sólo-lectura"

> State is read-only

**La única forma de cambiar el estado, es disparando una
[acción](http://redux.js.org/docs/Glossary.html#action) (un objeto describiendo
qué es lo que sucedió).**

Esto garantiza que ni las vistas ni las llamadas a servicios externos puedas
realizar cambios en el _state_ directamente. En lugar de eso, expresan su
intención de cambiar el _state_ a través de un action. Como todo los cambios
están centralizados, y suceden en un orden estricto, no tenemos que preocuparnos
por casos raros o dificiles de reproducir.

```js
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
```

## Los cambios de estado, se realizan a través de funciones puras

> Changes are made with pure functions

**Para detallar la manera en la que cambia el state en respuesta a los actions,
usas un [reducer](http://redux.js.org/docs/Glossary.html#reducer) puro**

Los reducers son sólo funciones puras que toman el state anterior y el action
que se acaba de disparar, y retornan el nuevo state. Tanto el state anterior
como el action recibido, deben ser inmutables, por eso recuerda **siempre
retornar nuevos objetos**, en lugar de realizar cambios al state original.

```js
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

import { combineReducers, createStore } from 'redux'
const reducer = combineReducers({ visibilityFilter, todos })
const store = createStore(reducer)
```

Y eso es todo! Ahora ya tienes un panorama completo de qué se trata Redux. Si
quieres convertirte en un auténtico redux ninja chequea la documentación
oficial, algunos proyectos interesantes que extienden Redux con otros casos de
uso como sagas, thunks o redux offline)

***

Fuentes:

* [Redux Core Concepts - redux.js.org](http://redux.js.org/docs/introduction/CoreConcepts.html)
* [Redux Three Principles - redux.js.org](http://redux.js.org/docs/introduction/ThreePrinciples.html)
