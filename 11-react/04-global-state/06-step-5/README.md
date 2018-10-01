# React + Redux = Awesome

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

## Passo 5: Determine como reage seu state com suas ações disparadas

Já temos as ações sendo disparadas e agora analisemos como queremos que o `state` seja modificado a cada uma delas. Como estabelece nosso princípio de **Changes are made with pure functions**, vamos modificar nosso `reducer`.

```js
// lib/reducer.js

// importamos as `actionTypes` que definimos no passo anterior
import { actionTypes } from './actions'

// Suponhamos que estes são os produtos que recebemos de nossa API JSON
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$1699.99', stocked: true, name: 'Nexus 7'}
];

// O state inicial
const INIT_STATE = {
  originalProducts: PRODUCTS,
  filterText: '',
  inStockOnly: false,
  filteredProducts: PRODUCTS,
  asideTitulo: 'Links',
  asideLinks: [
   { href: '#', texto: 'Link 1'},
   { href: '#', texto: 'Link 2'},
   { href: '#', texto: 'Link 3'},
   { href: '#', texto: 'Link 4'},
   { href: '#', texto: 'Link 5'}
  ]
}

// nosso reducer
export default (state = INIT_STATE, action) => {
  switch(action.type) {
    // Se a ação é  `FILTER_TEXT_CHANGED`
    case actionTypes.FILTER_TEXT_CHANGED:
      state = {
        ...state,
        // atualizamos `filterText` no state com o `text` da ação
        filterText: action.text
      }
      break;
    // Se a ação é `IN_STOCK_ONLY_CHANGED`
    case actionTypes.IN_STOCK_ONLY_CHANGED:
      state = {
        ...state,
        // atualizamos `inStockOnly` no state  com o `value` da ação
        inStockOnly: action.value
      }
      break;
  }

  // E o que acontece com os `filteredProducts`?
  // `filteredProducts` é atualizado com qualquer das ações é executada
  if (
    action.type === actionTypes.FILTER_TEXT_CHANGED ||
    action.type === actionTypes.IN_STOCK_ONLY_CHANGED
  ) {
    const filteredProducts = state.originalProducts.filter(p => {
      const filterText =
        // se a ação é `FILTER_TEXT_CHANGED`
        (action.type === actionTypes.FILTER_TEXT_CHANGED ?
          // usamos o `text` da ação
          action.text :
          // si no usamos el `filterText` del `state`
          state.filterText).trim()
      const inStockOnly =
        // se a ação é `IN_STOCK_ONLY_CHANGED`
        action.type === actionTypes.IN_STOCK_ONLY_CHANGED ?
          // usamos o `value` da ação
          action.value :
          // se não usamos o `inStockOnly` do `state`
          state.inStockOnly

      // o produto `p` vai para a lista de `filteredProducts` se:
      return (
        // o checkbox está marcado e `p.stocked === true`
        // se o checkbox está marcado
        (inStockOnly ? p.stocked : true) &&
        // e o `p.name` casa com o `filterText` case insensitive
        p.name.match(new RegExp(filterText, 'ig'))
      )
    })

    state = {
      ...state,
      filteredProducts
    }
  }

  // Sempre, sempre, sempre, um reducer deve retornar um `state`.
  // No caso que não reaja à `action` atual, deve explicitamente
  // devolver o `state` anterior
  return state
}

```

***

Fontes:

* [Thinking in React - Documentação oficial de React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Usage with React - Documentação oficial de Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
