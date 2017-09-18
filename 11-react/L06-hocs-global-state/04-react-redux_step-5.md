---
sources:
  - https://facebook.github.io/react/docs/thinking-in-react.html
  - http://redux.js.org/docs/basics/UsageWithReact.html
---

# React + Redux = Awesome!!!

## Paso 5: Determina cómo reacciona tu state a las actions disparadas (**Changes are made with pure functions**)

Ya tenemos a las acciones disparándose, ahora analicemos cómo queremos que el state se modifique ante cada una de ellas. Como lo establece nuestro principio de **Changes are made with pure functions**, vamos a modificar nuestro reducer.

```js
// lib/reducer.js

// importamos los `actionTypes` que definimos en el paso anterior
import { actionTypes } from './actions'

// Supongamos que estos son los productos que recibimos de nuestra API JSON
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$1699.99', stocked: true, name: 'Nexus 7'}
];

// El state inicial
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

// nuestro reducer
export default (state = INIT_STATE, action) => {
  switch(action.type) {
    // Si el action es `FILTER_TEXT_CHANGED`
    case actionTypes.FILTER_TEXT_CHANGED:
      state = {
        ...state,
        // actualizamos `filterText` en el state con el `text` del action
        filterText: action.text
      }
      break;
    // Si el action es `IN_STOCK_ONLY_CHANGED`
    case actionTypes.IN_STOCK_ONLY_CHANGED:
      state = {
        ...state,
        // actualizamos `inStockOnly` en el state con el `value` del action
        inStockOnly: action.value
      }
      break;
  }
  
  // Y que sucede con los `filteredProducts`?
  // `filteredProducts` se actualiza cuando cualquiera de las dos acciones
  // es ejecutada
  if (
    action.type === actionTypes.FILTER_TEXT_CHANGED ||
    action.type === actionTypes.IN_STOCK_ONLY_CHANGED
  ) {
    const filteredProducts = state.originalProducts.filter(p => {
      const filterText =
        // si el action es `FILTER_TEXT_CHANGED`
        (action.type === actionTypes.FILTER_TEXT_CHANGED ?
          // usamos el `text` del action
          action.text :
          // si no usamos el `filterText` del `state`
          state.filterText).trim()
      const inStockOnly =
        // si el action es `IN_STOCK_ONLY_CHANGED`
        action.type === actionTypes.IN_STOCK_ONLY_CHANGED ?
          // usamos el `value` del action
          action.value :
          // si no usamos el `inStockOnly` del `state`
          state.inStockOnly
      
      // el producto `p` va a la lista de `filteredProducts` si:
      return (
        // el checkbox esta prendido y `p.stocked === true`
        // si el checkbox esta apagado siempre true 
        (inStockOnly ? p.stocked : true) &&
        // y el `p.name` matchea `filterText` case insensitive
        p.name.match(new RegExp(filterText, 'ig'))
      )
    })

    state = {
      ...state,
      filteredProducts
    }
  }
  
  // Siempre, siempre, siempre, un reducer debe retornar un `state`.
  // En el caso que no reaccione al `action` actual, debe explícitamente
  // devolver el `state` anterior
  return state
}

```

## Wrap up

Esta lección ha sido intensa, con varios conceptos nuevos y mágicamente útiles. Mientras vas agarrando práctica en Redux, intenta de realizar conscientemente los pasos que hemos visto en esta lección.

Si lo piensas, en realidad, React y Redux no son más que un montón de funciones y objetos JSON que organizados de una manera específica, te permiten realizar tareas muy complejas de la misma manera que realizas las simples. El secreto radica en el diseño de tus componentes.

> Pasas muchas horas al día en el transporte público? Usa ese tiempo para diseñar tu aplicación en papel y lapiz!!!
> Antes de comenzar a picar como unx locx, detente un segundo para diseñar tu aplicación:
> - Define la jerarquía de tus componentes
> - Define sus interfaces con sus props y prop-types
> - Diseña la forma y partes de tu state
> - Piensa en las actions que pueden suceder en tu app
> - Y por último considera cómo evoluciona tu state: qué propiedades de tu state reccionan a qué actions
>
> Cuando tengas todo esto claro, verás que el desarrollo será mucho más fluido y claro, resumido solamente a escribir bloques de markup o lógica muy simple.
