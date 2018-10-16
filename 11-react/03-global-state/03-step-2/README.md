# React + Redux = Awesome

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

## Step 2: Construa uma versão estática no `React`

Agora que já temos os componentes é hora de começar a implementar a aplicação. O passo mais simples é começar com uma versão estática, sem interatividade. É melhor separar estes processos porque a construção da versão estática é mais codificar do que pensar e adicionar interatividade é mais pensar do codificar. Veremos o porquê.

Para construir uma versão estática você desejará construir componentes que reutilizem outros componentes passando informação entre um e outro utilizando suas `props`.

Você pode construir sua aplicação _top-down_ ou _bottom-up_. Isso quer dizer que você pode começar com os componentes mais acima na hierarquia (isto é, começar com `FilterableProductTable`) ou com os que estão mais abaixo (`ProductRow`). Em casos simples é geralmente mais rápido começar de cima para baixo e em projetos maiores, é mais simples começar de baixo e ir escrevendo testes a medida que você vai subindo pelas camadas.

Ao final desse processo você terá uma biblioteca de componentes reutilizáveis que renderizam seus dados. O componente mais acima na hierarquia (`FilterableProductTable`) receberá os dados como uma `prop`. Se você realizar uma mudança no JSON de produtos, estas mudanças serão imediatamente refletidas em sua interface. Esta é a maravilha do _**one-way data flow**_.

[Faça um teste no CodePen](https://codepen.io/merunga/pen/NvLbjX)

```js
// lib/FilterableProductTable/components/index.js
import React from 'react'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ({ products }) => {
  const style = {
    width: '70%',
    float: 'left'
  }

  return (
    <div style={style}>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable
```

```js
// lib/FilterableProductTable/components/SearchBar.js
import React from 'react'

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar
```

```js
// lib/FilterableProductTable/components/ProductTable.js
import React from 'react'

const ProductCategoryRow = ({ category }) => {
  return (
    <tr><th colSpan="2">{category}</th></tr>
  );
}

const ProductRow = ({ product }) => {
  const name = product.stocked ?
    product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;
  products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable
```

> Sua tarefa é indicar os `prop-types` correspondentes.

E agora que temos um `FilterableProductTable` mais interessante, vamos criar um pouco de dados fictícios para ver como aparece:

```js
// lib/components/Main.js
/* ... */
const Main = ({ products, asideTitulo, asideLinks }) => {
  asideTitulo = 'Links'
  asideLinks = [
    { href: '#', texto: 'Link 1'},
    { href: '#', texto: 'Link 2'},
    { href: '#', texto: 'Link 3'},
    { href: '#', texto: 'Link 4'},
    { href: '#', texto: 'Link 5'}
  ]

  // Definimos estaticamente os produtos:
  products = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$1666699.99', stocked: true, name: 'Nexus 7'}
  ];

  return (
    <Page>
      <FilterableProductTable products={products} />
      <Aside titulo={asideTitulo} links={asideLinks} />
    </Page>
  )
}
/* ... */
```

***

Fontes:

* [Thinking in React - Documentação oficial de React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Usage with React - Documentação oficial de Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
