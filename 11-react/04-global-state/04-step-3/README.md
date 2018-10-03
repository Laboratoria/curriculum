# React + Redux = Awesome

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

## Passo 3: Identifique a representação mínima (mas completa) do estado de sua UI

Pense em qual é o mínimo conjunto de dados mutuamente excludentes que sua aplicação precisa. A chave aqui é DRY: *Don't repeat yourself*. Identifique a representação absolutamente mínima do `state` de sua aplicação e toda a informação derivada que você calcula sob demanda. Por exemplo, se em nosso exemplo quiséssemos mostrar a soma total de itens disponíveis, nós só temos que ter uma lista de produtos e iterá-la para considerar a disponibilidade, sem necessidade de ter outra propriedade em nosso `state` para armazenar o cálculo.

Às vezes alguém pensaria que é ineficiente recalcular um valor cada vez que seja necessário, mas o impacto em desempenho é mínimo em relação à complexidade de manter duas propriedades de nosso estado sincronizadas ao longo do tempo. Lembre-se, identifique o *conjunto mínimo* de dados que sua *aplicação* precisa e *somente esse conjunto*, nem uma propriedade a mais no `state`.

Então, com isso em mente, pense no conjunto mínimo de peças de informação que nossa aplicação precisa ter para ser completamente funcional:

* A lista de produtos;
* O texto de busca que o usuário digita;
* O valor do *checkbox*.

> Alguém poderia dizer que é necessário manter duas cópias da lista: a original e a filtrada. Mas lembre-se que o conjunto é o mínimo: a lista filtrada de produtos
é obtida filtrando a lista original, de acordo com o valor do _checkbox_. Ou seja, é uma propriedade derivada de outras duas e portanto não pertence ao `estado`.

Agora fazemos a integração do `React` com `Redux` para começar com este estado global.

> Não esperamos que você entenda tudo que está acontecendo aqui, mas entenda que você pode desenvolver suas próprias _actions_ e _reducers_. 

Aqui é onde entra em ação o `Redux`.

Primeiro (3.1) criamos um novo arquivo `lib/store.js` que conterá a configuração de nosso `Redux store`:

```js
// lib/store.js

import { createStore, combineReducers } from 'redux';

import AppReducer from './reducer';

const rootReducer = combineReducers({
  // Aqui você pode ir adicionando entrada de sua store.
  AppReducer,
});

const store = createStore(
  rootReducer,
  // Injetamos a capacidade de usar Redux Dev Tools.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
```

Em seguida criamos nosso `lib/reducer.js` que conterá o estado inicial de nossa aplicação, como definimos mais acima.

```js
// lib/reducer.js

// Suponhamos que estes são os produtos que recebemos de nossa API JSON.
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$1699.99', stocked: true, name: 'Nexus 7'},
];

const INIT_STATE = {
  // A de produtos:
  products: PRODUCTS,
  // O texto de busca que o usuário digita:
  filterText: '',
  // O valor do checkbox:
  inStockOnly: false,

  // E herdamos as propriedades para a barra lateral:
  asideTitulo: 'Links',
  asideLinks: [
   { href: '#', texto: 'Link 1'},
   { href: '#', texto: 'Link 2'},
   { href: '#', texto: 'Link 3'},
   { href: '#', texto: 'Link 4'},
   { href: '#', texto: 'Link 5'},
 ],
};

// Nosso reducer contudo não realiza nenhuma ação, mas já possui um valor inicial.
export default (state = INIT_STATE, action) => {
  switch(action.type) {

  default:
    return state;
  }
};
```

E modificamos o `index.js` para que faça o setup inicial do `store`.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// O componente Provider que expõe `react-redux`:
import { Provider } from 'react-redux';
// O que acabamos de criar:
import store from './lib/store';

import Main from './lib/components/Main';

require("./styles.css");

const render = (Component, props = {}) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}> {/* <---- wrapping con o store */}
        <Component {...props} />
      </Provider>
    </AppContainer>,
    document.getElementById('container'),
  );
};

render(Main);

if (module.hot) {
  module.hot.accept('./lib/components/Main', () => {
    const newApp = require('./lib/components/Main').default;
    render(newApp);
  });
}
```

Se verificar o `Redux Dev Tools` você verá como o estado da aplicação já conta com a informação indicada no INIT_STATE.

![State en Redux Dev Tools](https://user-images.githubusercontent.com/110297/37154993-b3cfd14e-22af-11e8-9336-7ba13ab31815.png)

Em seguida (3.2), vamos remover o _hack_ que colocamos em `lib/components/Main.js` e injetemos a magia de `Redux` em nossos componentes.

Para isso necessitamos fazer somente duas coisas. Primeira vamos criar nosso _HOC_ no nível da pasta `components` que será encarregado de setar o dado que `lib/components/Main.js` necessita  e criaremos em `lib/Main.js`

```js
// lib/Main.js

// Lembra que falamos de `connect` no começo da lição?
// Finalmente esta aqui!!!
import { connect } from 'react-redux';
// E o componente puramente de apresentação de Main, já sem o hack:
import MainComponent from './components/Main';

const MainWithRedux = connect(
  // `connect` recebe dois parâmetros. O primeiro deles é
  // `mapStateToProps` que faz justamente o mapeamento de valores do state para 
  // as props que receberão `MainComponent`.
  function mapStateToProps(state) {
    // Buscamos os 3 valores que nos interessam:
    const {
      filteredProducts,
      asideTitulo,
      asideLinks,
    } = state.AppReducer;

    // E retornamos as novas props.
    return {
      // Observe que os produtos filtrados no store se chamam `filteredProducts`,
      // mas que as props do componente `Main` se chamam `products`.
      products: filteredProducts,
      asideTitulo,
      asideLinks,
    };
  }
)(MainComponent);

export default MainWithRedux;
```

E a segunda coisa é indicar no `index.js` que já não queremos utilizar `lib/components/Main` mas sim sua versão melhorada `lib/Main`.

> Teste a mudança dos valores de INIT_STATE no `./lib/reducer.js` e observe como isso se reflete em sua interface!

***

Fontes:

* [Thinking in React - Documentação oficial de React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Usage with React - Documentação oficial de Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
