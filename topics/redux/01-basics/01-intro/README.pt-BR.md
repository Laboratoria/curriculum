# Introducción

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

`Redux` es un manejador de estado predecible para aplicaciones JavaScript.

Nos ayuda a escribir aplicaciones que:

* se comportan consistentemente
* corren en diferentes entornos (cliente, servidor, and nativo)
* son fáciles de testear

Y además nos provee de una gran experiencia de desarrollo con, por ejemplo,
[*"live coding"* y *"time traveling debugger"*](https://github.com/gaearon/redux-devtools).

Como `Redux` es una librería, puede manejar el estado de cualquier tipo de
aplicación en JavaScript, y si bien no necesita de `React` para funcionar,
`React` + `Redux` forman el tandem perfecto. Y además `Redux` es una librería
diminuta (2kb).

El patrón de diseño de "UI manager" + "State manager" es muy popular actualmente
en la comunidad de JavaScript, porque ha demostrado que es una forma consistente
de organizar nuestras aplicaciones.

Hoy por hoy hay infinidad de librerías para elegir, y por ejemplo podríamos
cambiar `React` por otra librería para UI como [Vue](https://github.com/vuejs/vue)
o [Polymer](https://github.com/Polymer/polymer). Y de la misma manera con
`Redux`, podríamos usar [mobx](https://github.com/mobxjs/mobx) o
[cerebral](https://github.com/cerebral/cerebral)

`Redux` está fuertemente inspirado en [Flux](http://facebook.github.io/flux/),
que podemos decir es su predecesor, pero simplificando el enfoque orignal usando
conceptos de [Elm](https://github.com/evancz/elm-architecture-tutorial/). Sepas
o no que son `Flux` y `Elm`, comenzar con `Redux` solo toma unos minutos.

## Conceptos base

`Redux` en sí es muy simple.

Imagina que tienes una aplicación que lleva tracking de tus tareas pendientes:
una versión simplificada del popular [Todo](http://todomvc.com). Ahora
describamos el estado de esta app como un objeto en JavaScript. Por ejemplo
podría tener esta forma:

```js
const state = {
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
  visibilityFilter: 'SHOW_COMPLETED',
};
```

Este es tu _estado_, y en `Redux` este objeto es _read-only_, esto es así para
que las diferentes partes de tu código no puedan cambiar el estado
arbitrariamente, causando bugs díficiles de reproducir.

Entonces, para cambiar algún valor del `state`, la única forma de hacerlo es
disparando una acción (_action_). Las acciones a su vez, son objetos que
describen que ha sucedido. Por ejemplo:

```js
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

Por convención todas las _actions_ necesitan de una propiedad `type` de tipo
string. Este es el identificador de tu acción y dos acciones que conceptualmente
puedan ser distintas, pero tengan un mismo valor de type, son consideradas el
mismo tipo. Usa tipos claros, que expresen claramente cual es su intención y que
sean dificiles de repetir, inclusive si tienen muchos caracteres.

Forzando que todos los cambios deban ser descritos como una acción, nos permite
tener una idea clara de qué es lo que está sucediendo en nuestra aplicación. Si
algo cambia, sabemos exactamente por qué cambió. Las actions van dejando rastro
de cada cosa que ha sucedido.

Y por último, para relacionar el estado con las _actions_, escribimos funciones
puras que llamaremos **reducers**. De nuevo, ninguna magia, un reducer es una
función que recibe el `state` y una `action` como parámetros y retorna el nuevo
`state` de la aplicación. Cada vez que sucede un action, **todos** los reducers
de tu store se ejecutan con el action como parámetro.

Sería bien complicado escribir una sola función para manejar todo el estado de
una aplicación grande, es por eso que escribimos funciones mas pequeñas para las
diferentes partes del estado:

```js
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }]);
    case 'TOGGLE_TODO':
      return state.map((todo, index) => (
        (action.index === index)
          ? { text: todo.text, completed: !todo.completed }
          : todo
      ));
    default:
      return state;
  }
};
```

Y escribimos un último _reducer_ que maneja el estado completo de nuestra
aplicación, usando los dos reducers anteriores:

```js
const todoApp = (state = {}, action) => ({
  todos: todos(state.todos, action),
  visibilityFilter: visibilityFilter(state.visibilityFilter, action)
});
```

Y esto es básicamente `Redux`. Fíjate que para hacer esto no hemos usado ni una
sola función de la librería. Redux provee algunas _herramientas_ que facilitan
trabajar con este patrón, pero la idea principal es que puedas describir como va
evolucionando el _estado_ de tu aplicación en respuesta a los actions. Alrededor
del 90% de tu código será _Vanilla Javascript_, sin usar ninguna funcionalidad
de `Redux`.
