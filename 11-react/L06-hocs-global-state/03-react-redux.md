---
sources:
  - http://redux.js.org/docs/basics/UsageWithReact.html
  - https://facebook.github.io/react/docs/thinking-in-react.html
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

Y luego dentro de `main.js` reemplazamos
```
import MainSection from './lib/main-section';
```
por
```
import FilterableProductTable from './lib/FilterableProductTable';
```

y reemplazamos la definición de `Main` para que se vea así:

```js
/* ... */
const Main = () => {
  const asideTitulo = 'Links'
  const asideLinks = [
    { href: '#', texto: 'Link 1'},
    { href: '#', texto: 'Link 2'},
    { href: '#', texto: 'Link 3'},
    { href: '#', texto: 'Link 4'},
    { href: '#', texto: 'Link 5'}
  ]

  return (
    <Page>
      <FilterableProductTable />
      <Aside titulo={asideTitulo} links={asideLinks} />
    </Page>
  )
}
/* ... */

```

y creamos un archivo `lib/FilterableProductTable.js` con el siguiente contenido
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


The whole state of your app is stored in an object tree inside a single *store*.  
The only way to change the state tree is to emit an *action*, an object describing what happened.  
To specify how the actions transform the state tree, you write pure *reducers*.

That's it!

```js
import { createStore } from 'redux'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
```

Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called *actions*. Then you write a special function called a *reducer* to decide how every action transforms the entire application's state.

If you're coming from Flux, there is a single important difference you need to understand. Redux doesn't have a Dispatcher or support many stores. Instead, there is just a single store with a single root reducing function. As your app grows, instead of adding stores, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root component in a React app, but it is composed out of many small components.

This architecture might seem like an overkill for a counter app, but the beauty of this pattern is how well it scales to large and complex apps. It also enables very powerful developer tools, because it is possible to trace every mutation to the action that caused it. You can record user sessions and reproduce them just by replaying every action.