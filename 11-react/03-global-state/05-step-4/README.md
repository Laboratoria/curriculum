# React + Redux = Awesome

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

## Passo 4: Identifique suas ações e agregue _Inverse Data Flow_ (_**State is read-only**_)

Até agora, temos uma aplicação que configura sua _store_ de `Redux`, recebe esses valores e os transfere para a interface para renderização. Agora necessitamos conseguir que a informação flua na outra direção: dos componentes para o `state`. Como havíamos definido no começo, no mundo do `Redux` a única forma de conseguir é por meio de _actions_.

Assim como em nosso `state` inicial, definimos os "substantivos" de nossa aplicação, as _actions_ são nossos "verbos".

Então, quais são as ações que um usuário pode realizar em nossa aplicação?

* Escrever o input;
* Selecionar ou limpar o checkbox.

Tomemos estas ações e vejamos como as definimos no `Redux`.

A primeira coisa que vamos precisar é de um arquivo `lib/actions.js` no qual definiremos nossos `action types` e `action creators` (funções que retornam funções).

```js
export const actionTypes = {
  FILTER_TEXT_CHANGED: 'FILTER_TEXT_CHANGED',
  IN_STOCK_ONLY_CHANGED: 'IN_STOCK_ONLY_CHANGED'
}

export const filterTextChanged = text => ({
  type: actionTypes.FILTER_TEXT_CHANGED,
  text
})

export const inStockOnlyChanged = value => ({
  type: actionTypes.IN_STOCK_ONLY_CHANGED,
  value
})
```

E em seguida precisamos fazer a `SearchBar` disparar essas ações. Para isso, criaremos um novo _HOC_ `SearchBarWithRedux`.

> Nós poderíamos criar um contêiner que englobasse todo o `FilterableProductTable`, mas escolhemos fazê-lo no `SearchBar` porque é o menor componente que recebe interação do usuário. O nível que você define seus contêineres é totalmente arbitrário e normalmente é um dos pontos mais complicados se você for novata com _HOCs_ e `Redux`. Como regra geral, considere qual é o menor componente que é "dono" do contexto.

```js
// lib/FilterableProductTable/SearchBar
import { connect } from 'react-redux'
import SearchBarComponent from './components/SearchBar'
import { filterTextChanged, inStockOnlyChanged } from '../actions'

const SearchBarWithRedux = connect(
  function mapStateToProps(state) {
    // Buscamos os valores que nos interessam para a SearchBar.
    // Observe que a SearchBar não tem porque saber nada dos produtos.
    const {
      filterText,
      inStockOnly
    } = state.AppReducer

    // E devolvemos as novas props:
    return {
      filterText,
      inStockOnly
    }
  },
  // O segundo parâmetro de `connect` é `mapDispatchToProps`.
  // No mundo `Redux` ao chamar um 'criador de ação' a única coisa que conseguimos é
  // um objeto que representa que teve sucesso, mas não dispara a ação.
  // Para isso precisa chamar a função `dispatch` do `store`.
  // Isso é o que o `mapDispatchToProps` faz, mapeando chamadas de `dispatch` para
  // seus `action creators`.
  function mapDispatchToProps(dispatch) {
    return {
      setFilterText(newFilterText) {
        dispatch(filterTextChanged(newFilterText))
      },
      setInStockOnly(newValue) {
        dispatch(inStockOnlyChanged(newValue))
      }
    }
  }
)(SearchBarComponent)

export default SearchBarWithRedux
```

Modificamos `FilterableProductTable` para que ao invés de usar o componente `SearchBar` utilize o conteúdo `SearchBarWithRedux`.

E agora sim, fazemos com que nosso componente `SearchBar` entenda todas esta novas capacidades:

```js
// lib/components/SearchBar
import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({
  // Os dados de que nossa SearchBar precisam:
  filterText, inStockOnly,
  // As ações que pode realizar:
  setFilterText, setInStockOnly
}) => {
  return (
    <form>
      <input
        type="text" placeholder="Search..."
        value={filterText}
        onChange={evt => {
          setFilterText(evt.target.value)
        }}
        />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={evt => {
            setInStockOnly(evt.target.checked)
          }}
          />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  setFilterText: PropTypes.func.isRequired,
  setInStockOnly: PropTypes.func.isRequired
}
// Quais os componentes são "controlados" por um contêiner, o valor por padrão das `props` é determinado pelo state e é por isso que normalmente é uma boa prática estabelecer todas suas props obrigatórias.

export default SearchBar
```

> Vá ao seu navegador, use o checkbox e escreva no input. Observe que em sua interface nada muda, mas dentro se você vir pelo Redux Dev Tools, verá como as ações vão sendo disparados.

***

Fontes:

* [Thinking in React - Documentação oficial de React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Usage with React - Documentação oficial de Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
