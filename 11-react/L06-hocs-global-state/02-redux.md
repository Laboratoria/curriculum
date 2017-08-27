---
sources:
  - https://github.com/reactjs/redux/blob/master/README.md
  - http://redux.js.org/docs/introduction/CoreConcepts.html
  - http://redux.js.org/docs/introduction/ThreePrinciples.html
refs:
  - http://redux.js.org/
  - https://egghead.io/courses/getting-started-with-redux
  - https://scotch.io/bar-talk/getting-started-with-redux-an-intro
  - https://www.codementor.io/mz026/getting-started-with-react-redux-an-intro-8r6kurcxf
---

# Redux: introducción

Redux es un manejador de estados predecible para aplicaciones JavaScript.

Nos ayuda a escribir aplicaciones que:
- se comportan consistentemente
- corren en diferentes entornos (cliente, servidor, and nativo)
- son fáciles de testear

Y además nos provee de una gran experiencia de desarrollo con, por ejemplo, [*"live coding"* y *"time traveling debugger"*](https://github.com/gaearon/redux-devtools).

Como Redux es una librería, puede manejar el estado de cualquier tipo de aplicación en JavaScript, y si bien no necesita de React para funcionar, React + Redux forman el tandem perfecto. Y además redux es una librería diminuta (2kb)

> El patrón de diseño de "UI manager" + "State manager" es muy popular actualmente en la comunidad de javascript, porque ha demostrado que es una forma consistente de organizar nuestras aplicaciones.
>
> Hoy por hoy hay infinidad de librerías para elegir y por ejemplo podríamos cambiar React por otra librería para UI como [Vue](https://github.com/vuejs/vue) o [Polymer](https://github.com/Polymer/polymer). Y de la misma manera con Redux, podríamos usar [mobx](https://github.com/mobxjs/mobx) o [cerebral](https://github.com/cerebral/cerebral)

Redux está fuertemente inspirado en [Flux](http://facebook.github.io/flux/), que podemos decir es su predecesor, pero simplificando el enfoque orignal usando conceptos de Elm](https://github.com/evancz/elm-architecture-tutorial/). Sepas o no que son Flux y Elm, comenzar con Redux solo toma unos minutos.

> ## Referencias complementarias
> - Learn Redux from its creator:**  
  > **[Part 1: Getting Started with Redux](https://egghead.io/series/getting-started-with-redux) (30 free videos)**<br>
  > **[Part 2: Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux) (27 free videos)**
>
> - **[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**

## Conceptos base

Redux en si es muy simple.

Imagina que tienes una aplicación que lleva tracking de tus tareas pendientes: una versión simplificada del popular [Todo](http://todomvc.com). Ahora describamos el estado de esta app como un objeto JSON. Por ejemplo, podría tener esta forma:

```js
{
  todos: [
    {
      text: 'Eat food',
      completed: true
    },
    {
      text: 'Exercise',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

Este es tu `state`, y en Redux este objeto es read-only, esto es así para que las diferentes partes de tu código no puedan cambiar el estado arbitrariamente, causando bugs díficiles de reproducir.

Entonces, para cambiar algún valor del `state`, la única forma de hacerlo es disparando una acción (action). Las acciones a su vez, son objetos JSON que describen que ha sucedido. Por ejemplo:

```js
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

> Por convención todas las actions necesitan de un `type` de tipo string. Este es el identificador de tu action y dos actions que conceptualmente puedan ser distintas, pero tienen un mismo valor de type, son consideradas el mismo tipo. Usa tipos claros, que expresen claramente cual es su intención y que sean dificiles de repetir, inclusive si tienen muchos caracteres

Forzando que todos los cambios deban ser descritos como una acción, nos permite tener una idea clara de qué es lo que esta sucediendo en nuestra aplicación. Si algo cambia, sabemos exactamente por qué cambió. Las actions van dejando rastro de cada cosa que ha sucedido.

Y por último, para relacionar el estado con las actions, escribimos funciones puras que llamaremos ***reducers***. De nuevo, ninguna magia, un reducer es una función que recibe el state y una action como parámetros y retorna el nuevo state de la aplicación. Cada vez que sucede un action, **todos** los reducers de tu store se ejecutan con el action como parametro.

Sería bien complicado escribir una sola función para manejar todo el estado de una aplicación grande, es por eso que escribimos funciones mas pequeñas para las diferentes partes del state:

```js
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }])
    case 'TOGGLE_TODO':
      return state.map(
        (todo, index) =>
          action.index === index
            ? { text: todo.text, completed: !todo.completed }
            : todo
      )
    default:
      return state
  }
}
```

Y escribimos un último reducer que maneja el estado completo de nuestra aplicación, usando los dos reducers anteriores:

```js
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
```

Y esto es basicamente Redux. Fíjate que para hacer esto no hemos usado ni una sola función de la librería. Redux provee algunas utilities que facilitan trabajar con este patrón, pero la idea principal es que puedas describir como va evolucionando el state de tu aplicación en respuesta a los actions. Alrededor del 90% de tu código será Javascript Vanilla, sin usar ninguna funcionalidad de Redux.

### Los tres principios de Redux

### Una sóla fuente de información (Single source of truth)

**El [state](http://redux.js.org/docs/Glossary.html#state) de toda tu aplicación es guardado en un objeto dentro de un único [store](http://redux.js.org/docs/Glossary.html#store).**

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

### El state es read-only (State is read-only)

**La única forma de cambiar el state, es disparando un [action](http://redux.js.org/docs/Glossary.html#action), un objeto describiendo qué es lo que sucedió.**

Esto garantiza que ni las vistas ni las llamadas a servicios externos puedas realizar cambios en el state directamente. En lugar de eso, expresan su intención de cambiar el state a través de un action. Como todo los cambios están centralizados, y suceden en un orden estricto, no tenemos que preocuparnos por casos raros o dificiles de reproducir.

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

### Los cambios de state, se realizan a través de funciones puras (Changes are made with pure functions)

**Para detallar la manera en la que cambia el state en respuesta a los actions, usas un [reducer](http://redux.js.org/docs/Glossary.html#reducer) puro**

Los reducers son sólo funciones puras que toman el state anterior y el action que se acaba de disparar, y retornan el nuevo state. Tanto el state anterior como el action recibido, deben ser inmutables, por eso recuerda **siempre retornar nuevos objetos**, en lugar de realizar cambios al state original.

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

Y eso es todo! Ahora ya tienes un panorama completo de qué se trata Redux. Si quieres convertirte en un auténtico redux ninja chequea la documentación oficial, algunos proyectos interesantes que extienden Redux con otros casos de uso como sagas, thunks o redux offline)

