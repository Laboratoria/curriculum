# Redux: introdução

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

`Redux` é um manipulador previsível de estados para aplicações JavaScript.

Ele ajuda a escrever aplicações que:

* Se comportam consistentemente;
* Executam em diferentes ambientes (cliente, servidor e nativo);
* São fáceis de testar.

E além disso, fornece uma grande experiência de desenvolvimento com, por exemplo, [*"live coding"* e *"time traveling debugger"*](https://github.com/gaearon/redux-devtools).

Como `Redux` é uma biblioteca, você pode manipular o estado de qualquer tipo de aplicação em JavaScript, e se necessitar de `React` para funcionar, `React` + `Redux` formam um par perfeito. Além disso, `Redux` é uma biblioteca enxuta (2kb).

O padrão de projeto de "_UI manager_" + "_State manager_" é muito popular atualmente na comunidade JavaScript porque demonstrou que é uma forma consistente de organizar nossas aplicações.

Atualmente existe uma infinidade de bibliotecas para escolher e, por exemplo, poderíamos mudar `React` por outra biblioteca para UI como [Vue](https://github.com/vuejs/vue) ou [Polymer](https://github.com/Polymer/polymer). E da mesma forma com `Redux`, poderíamos usar [mobx](https://github.com/mobxjs/mobx) ou
[cerebral](https://github.com/cerebral/cerebral).

`Redux` está fortemente inspirado em [Flux](http://facebook.github.io/flux/), que podemos dizer que é seu antecessor, mas simplificando o enfoque original utilizando conceitos de [Elm](https://github.com/evancz/elm-architecture-tutorial/). Começar a utilizar `Redux` leva somente alguns minutos.

## Conceitos base

`Redux` em si é muito simples.

Imagina que você tenha uma aplicação que controla suas tarefas pendentes: uma versão simplificada do popular [Todo](http://todomvc.com). Agora descrevamos o estado dessa aplicação como um objeto em JavaScript. Por exemplo, ela poderia ter essa forma:

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

Este é seu `state` e em `Redux` este objeto é _read-only_. Isso é assim para que as diferentes partes de seu código não possam mudar o estado arbitrariamente, causando bugs difícies de reproduzir. 

Portanto, para mudar algum valor do `state`, a única maneira de fazê-lo é disparando uma ação (_action_). As ações por sua vez são objetos que descrevem o que aconteceu. Por exemplo:

```js
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

Por convenção todas as _actions_ precisam de uma propriedade `type` de tipo string. Esse é o identificador de sua ação e das ações que conceitualmente possam ser distintas mas tenham um mesmo valor de type. Logo, são consideradas do mesmo tipo. Use tipos claros que expressem claramente qual é sua intenção e que sejam difíceis de repetir, inclusive se possuírem muitos caracteres.

Forçando que todas as mudanças devam ser descritas como uma ação, isso permite ter uma ideia clara de que é o que está acontencendo em nossa aplicação. Se algo muda, sabemos exatamente por que mudou. As ações vão deixando rastro de cada coisa que aconteceu.

E por último, para relacionar o estado com as _actions_, escrevemos funções puras que chamaremos **reducers**. De novo, nenhuma mágica. Um *reducer* é uma função que recebe o `state` e uma `action` como parâmetros e retorna o novo `state` da aplicação. Cada vez que acontece uma _action_, **todos** os *reducers* de seu armazenamento são executados com a _action_ como parâmetro.

Seria bem complicado escrever somente uma função para manipular todo o estado de uma aplicação grande. É por isso que escrevemos funções menores para as diferentes partes do `state`:

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

E escrevemos um último _reducer_ que manipula o estado completo de nossa aplicação utilizando os _reducers_ anteriores:

```js
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
```

E basicamente isto é `Redux`. Observe que para fazer isso não usamos nenhuma função da biblioteca. `Redux` fornece algumas _ferramentas_ que facilitam o trabalho com este padrão, mas a ideia principal é que você possa escrever como o _estado_ de sua aplicação vai se alterando em resposta às _actions_. Em torno de 90% de seu código será _Vanilla JavaScript_ sem utilizar nenhuma funcionalidade de `Redux`.

### Os três princípios de Redux

### Somente uma fonte de verdade

> _Single source of truth_

**O [_state_](http://redux.js.org/docs/Glossary.html#state) de toda sua aplicação é armazenado em um objeto dentro de um único [store](http://redux.js.org/docs/Glossary.html#store).**

```js
console.log(store.getState())
```

### O estado é de "somente-leitura"

> _State is read-only_.

**A única maneira de mudar o estado é disparando uma [ação](http://redux.js.org/docs/Glossary.html#action) (um objeto descrevendo o que aconteceu)**

Isso garante que não as visualizações nem as chamadas a serviços externos podem realizar mudanças no _state_ diretamente. No lugar disso, expressam sua intenção de alterar o _state_ por meio de uma _action_. Como todas as mudanças estão centralizadas e ocorrem em uma ordem específica, não temos que nos preocupar com situações raras ou difíceis de reproduzir.

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

### As mudanças de estados são realizadas por meio de funções puras.

> _Changes are made with pure functions_.

**Para detalhar a maneira na qual se muda o _state_ em resposta às _actions_, utilize um [reducer](http://redux.js.org/docs/Glossary.html#reducer) puro**.

Os _reducers_ simplesmente são funções puras que tomam o _state_ anterior e a ação que foi disparada e retornam o novo estado. Tanto o _state_ anterior como a _action_ recebida devem ser imutáveis. Por isso, lembre-se de **sempre retornar novos objetos** ao invés de fazer mudanças no estado original.

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

E isso é tudo! Agora você já tem um panorama completo do que é `Redux`. Se você quiser se tornar uma autêntica _ninja redux_ verifique a documentação oficial que contém alguns projetos interessantes que estendem `Redux` com outros casos de uso como sagas, _thunks_ ou _redux offline_.

## Referências complementares

* Learn Redux from its creator:
  - [Part 1: Getting Started with Redux](https://egghead.io/series/getting-started-with-redux)
    (30 free videos)
  - [Part 2: Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
    (27 free videos)
* [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

***

Fontes:

* [Redux - react community](https://github.com/reactjs/redux/blob/master/README.md)
* [Redux Core Concepts - redux.js.org](http://redux.js.org/docs/introduction/CoreConcepts.html)
* [Redux Three Principles - redux.js.org](http://redux.js.org/docs/introduction/ThreePrinciples.html)

Referências:

* [Redux documentation - redux.js.org](http://redux.js.org/)
* [Getting Started with Redux - scotch.io](https://scotch.io/bar-talk/getting-started-with-redux-an-intro)
* [Getting Started with Redux - egghead.io](https://egghead.io/courses/getting-started-with-redux)
* [Getting Started With React Redux - codementor.io](https://www.codementor.io/mz026/getting-started-with-react-redux-an-intro-8r6kurcxf)
