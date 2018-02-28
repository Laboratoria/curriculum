import { actionTypes } from './actions';

// Supongamos que estos son los productos que recibimos de nuestra API JSON
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$1699.99', stocked: true, name: 'Nexus 7'}
];

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
};

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
    };
  }

  // Siempre, siempre, siempre, un reducer debe devolver un `state`
  // en el caso que no reaccione al `action` actual, debe explícitamente
  // devolver el `state` anterior
  return state;
}
