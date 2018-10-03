# React + Redux = Awesome

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

Nesta leitura faremos o processo completo de projetar uma aplicação utilizando `React` e `Redux`.

Usaremos como base nosso projeto das lições anteriores, mas substituiremos o `MainSection` por um novo componente `FilterableProductTable` que nos mostre uma tabela filtrável de produtos.

## Setup

Antes de tudo, instalemos nossas novas dependências.

```sh
yarn add redux react-redux
yarn add -D redux-devtools
```

E a partir de seu navegador instale a [_extension_](http://extension.remotedev.io/).

Em seguida, converteremos a `lib/components/Main.js` em um componente puramente de apresentação:

```js
// lib/components/Main.js

import React from 'react';
import PropTypes from 'prop-types';

import Page from './Page';
import Header from './Header';
// Substituímos a `MainSection`
// e agora importamos nosso novo componente.
import FilterableProductTable from '../FilterableProductTable/components';
import Aside from './Aside';

// Todos os dados que Main precisa recebemos agora via `props`
const Main = ({ products, asideTitulo, asideLinks }) => {
  // TODO: Hack para renderizar. Remover após setar Redux.
  products = []
  asideLinks = []

  return (
    <Page>
      <FilterableProductTable products={products} />
      <Aside titulo={asideTitulo} links={asideLinks} />
    </Page>
  )
}

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  asideTitulo: PropTypes.string.isRequired,
  asideLinks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default Main
```

`FilterableProductTable` será nossa biblioteca. Logo, criamos um arquivo `lib/FilterableProductTable/components/index.js` com o seguinte conteúdo:

> Mais adiante você entenderá porque escolhemos esta estrutura de pastas.

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

e por fim limpamos um pouco nosso `index.html`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Exemplo de React + Redux</title>
  </head>
  <body>
    <h1>Exemplo de React + Redux</h1>
    <div id="container">
      <p>
        Se você vir isto, React <strong>não</strong> está funcionando.
      </p>
  </body>
</html>
```

A esta altura sua aplicação estará vazia (e haverá alguns erros no console de `props` não indicados) e isso é porque `Main` está esperando `props` que contudo não estamos informando. Com esta base iniciamos nossa implementação.

## Implementação

Então vamos simular um fluxo habitual de tarefas da vida real.

## Passo 0: Comece com um _Mock_

Imagine que já temos um mock de nossa desenvolvedora que está assim:

![Mockup](https://reactjs.org/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png)

E nossa API JSON retorna dados com a seguinte estrutura:

```js
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```

## Passo 1: Divida a interface (UI) em uma hierarquia de componentes.

A primeira coisa que você deveria fazer é desenhar caixinhas em torno de cada um dos componentes (e sub-componentes) e dar-lhes nomes. Se você trabalha com uma designer, provavelmente ela já fez isso então pergunte para ela! Se sua designer é boa com a semântica, então os nomes das _layers_ do Photoshop podem ser bons nomes para seus componentes de `React`!

Mas como determino quem deveria possuir seu próprio componente? Simplesmente use os mesmos critérios que você utilizar para decidir se deve criar uma nova função ou objeto. Uma destas técnicas é o [princípio de única responsabilidade](https://en.wikipedia.org/wiki/Single_responsibility_principle), que em `React` seria que um componente deve idealmente fazer somente uma coisa. Se começar a crescer é hora de decompô-los em componentes menores.

Como usualmente você estará projetando um objeto JSON na interface, você entenderá que quando houver modelado corretamente seu `state`, sua UI (e com ela a estrutura de seus componentes) será ajustada sem problemas. Isso porque sua UI e seu `state` normalmente utilizam a mesma  "arquitetura da informação", o que implica que geralmente separar sua UI de seus dados é trivial: divida seus componentes de tal forma que representem exatamente uma parte da informação.


![Component diagram](https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png)

Aqui você verá que temos 5 componentes:

1. **`FilterableProductTable` (laranja):** contêm o bloco completo.
2. **`SearchBar` (azul):** recebe o *input do usuário*.
3. **`ProductTable` (verde):** exibe e filtra a *coleção* de acordo com o *input do usuário*.
4. **`ProductCategoryRow` (turquesa):** mostra o cabeçalho para cada *categoria*.
5. **`ProductRow` (vermelho):** mostra uma fila para cada *produto*.

Se você observar a `ProductTable`, verá que o cabeçalho da tabela (que possui os nomes "Name" e "Price") não estão em seu próprio componente. Isso vai da preferência de cada um. Neste exemplo, deixamos como parte de `ProductTable` porque é parte da lógica de renderização da *coleção*, que é responsabilidade de `ProductTable`. Contudo se com o tempo este cabeçalho cresce e se torna complexo (por exemplo, para permitir ordenação), provavelmente haverá sentido em criar seu próprio componente `ProductTableHeader`.

Agora que identificamos quais são nossos componentes, vamos organizá-los em uma hierarquia. Isso é simples. Se um componente aparece dentro de outro componente no _mock_, então deveria aparecer como filho na hierarquia:

* `FilterableProductTable`
  - `SearchBar`
  - `ProductTable`
    * `ProductCategoryRow`
    * `ProductRow`

***

Fontes:

* [Thinking in React - Documentação oficial de React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Usage with React - Documentação oficial de Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
