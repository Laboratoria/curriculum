# Los tres principios de Redux

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Una sola fuente de verdad

> Single source of truth

**El estado ([state](http://redux.js.org/docs/Glossary.html#state)) de toda tu
aplicación se guarda en un objeto dentro de un único
[store](http://redux.js.org/docs/Glossary.html#store).**

```js
console.log(store.getState());

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

## El estado es de "solo-lectura"

> State is read-only

**La única forma de cambiar el estado, es disparando una
[acción](http://redux.js.org/docs/Glossary.html#action) (un objeto que describe
lo que sucedió).**

Esto garantiza que ni las vistas ni las llamadas a servicios externos puedas
realizar cambios en el _state_ directamente. En lugar de eso, expresan su
intención de cambiar el _state_ a través de un action. Como todo los cambios
están centralizados, y suceden en un orden estricto, no tenemos que preocuparnos
por casos raros o dificiles de reproducir.

```js
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1,
});

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED',
});

store.dispatch({
  type: 'ADD_TODO',
  text: 'Aprender Redux',
});
```

## Los cambios de estado, se realizan a través de funciones puras

> Changes are made with pure functions

**Para detallar la manera en la que cambia el state en respuesta a los actions,
usas un [reducer](http://redux.js.org/docs/Glossary.html#reducer) puro**

Los reducers son sólo funciones puras que toman el `state` anterior y el
`action` que se acaba de disparar, y retornan el nuevo `state`. Tanto el `state`
anterior como el `action` recibido, deben ser _inmutables_, por eso recuerda
**siempre retornar nuevos objetos**, en lugar de realizar cambios al `state`
original.

Veamos nuestro reducer `todos()` en más detalle como ejemplo:

```js
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // Retornamos un nuevo arreglo con todo lo que tenía `state` (usando el
      // operador de propagación), más un nuevo elemento.
      // De esta forma no mutamos el arreglo original, sino que creamos uno
      // nuevo.
      return [...state, { text: action.text, completed: false }];
      // Esto mismo lo podemos coneguir tembién con `.concat`:
      // return state.concat({ text: action.text, completed: false });
      // o también:
      // return [].concat(state, { text: action.text, completed: false });
    case 'COMPLETE_TODO':
      // El método `.map` produce un nuevo arreglo en vez de modificar el
      // original.
      return state.map((todo, index) => {
        if (index === action.index) {
          // También evitamos mutar los objetos dentro del arreglo `state`.
          // Para ello creamos un nuevo objeto, y a ese nuevo objeto le
          // asignamos las propiedades del `todo` original, pero con la
          // propiedad `completed` con el valor `true`.
          // Esto lo podemos hacer con el operador de propagación (...):
          return { ...todo, completed: true };
          // También lo podríamos hacer usando `Object.assign()`:
          // return Object.assign({}, todo, { completed: true });
        }
        return todo;
      });
    default:
      return state;
  }
};
```

Como comparación, vemos un ejemplo de lo que deberíamos evitar:

```js
// PELIGRO: Esta implementación muta el estado y está MAL!!!
const todosWithMutation = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // El método `.push` modifica el arreglo orignal!!!
      state.push({ text: action.text, completed: false });
    case 'COMPLETE_TODO':
      // OMG!! En la siguiente línea reasignamos el valor de `todo.completed`
      // mutando el objeto original!!!
      state[action.index].completed = true;
    default:
      // ...
  }

  return state;
};
```

Y eso es todo! Ahora ya tienes un panorama completo de qué se trata Redux. Si
quieres convertirte en un auténtico redux ninja chequea la documentación
oficial, algunos proyectos interesantes que extienden Redux con otros casos de
uso como [sagas](https://github.com/redux-saga/redux-saga),
[thunks](https://github.com/reduxjs/redux-thunk) o redux offline)

***

Fuentes:

* [Redux Core Concepts - redux.js.org](http://redux.js.org/docs/introduction/CoreConcepts.html)
* [Redux Three Principles - redux.js.org](http://redux.js.org/docs/introduction/ThreePrinciples.html)
