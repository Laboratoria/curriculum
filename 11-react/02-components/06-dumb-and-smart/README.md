# Componentes de apresentação vs. Componentes contêineres

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

A forma em que integramos `React` e `Redux` é baseada na ideia da **separação entre componentes meramente de apresentação e componentes contêineres**.

Com a prática no `React`, você notará que é muito mais fácil reutilizar e projetar seus componentes se os classificar em duas categorias. Formalmente essas categorias são os *Componentes de apresentação* e os *Componentes contêineres*, mas também são usados os termos de componentes **Magros e Gordos (*Fat and Skinny*)**, **Espertos e Burros (*Smart and Dumb*)**, *Stateless* e *Stateful*, Componentes e *Screens*, etc. Nem todos se referem exatamente ao mesmo, mas a ideia central é a mesma.

## Componentes de apresentação

Quais características um componente de apresentação possui?

* São responsáveis por como as coisas **são vistas**.
* Normalmente são compostos usando outros componentes (de apresentação ou contêineres) e geralmente contêm *markup* e estilos.
* Normalmente fazem uso da `prop` `children`.
* Não possuem dependências com o resto da aplicação.
* Não especificam como obtém a informação que utilizam nem como a modificam, somente a usam.
* Tudo o que sabem e podem fazer o fazem por meio de suas `props`.
* Predomina o código **JSX**.

## Componentes contêineres

Como posso reconhecer um componente contêiner?

* São responsáveis por como as coisas **funcionam**.
* Normalmente são compostos utilizando outros componentes (de apresentação ou contêineres), mas geralmente não possuem markup (excetuando talvez `divs` para `wrapping`) e nunca contêm estilos.
* Fornecem os dados e o comportamento para componentes de apresentação e a outros contêineres.
* Utiliza *actions* de `Redux` para injetar *callbacks* nos eventos do componentes de apresentação.
* São *stateful* quando se conectam ao `state` de `Redux`.
* E no nosso caso, são geradas usando a função `connect()` de `Redux`.
* Predomina o código **JavaScript**.

## Benefícios deste enfoque

* **Melhor separação de interesses (*separation of concerns*):** Possui um entendimento melhor de sua aplicação e de sua interface desenvolvendo desta maneira.
* **Maior reusabilidade:**  Você pode reutilizar seus componentes de apresentação com diferentes *data sources* e criar assim novos componentes que por sua vez podem ser reutilizados...
* **Os componentes de apresentação são a "cara" de sua aplicação.** Você pode extraí-los todos em uma única tela e assim os projetistas podem modificar o *template* sem alterar a lógica de sua aplicação.
* Força você a extrair componentes puramente de *Layout* como os `Sidebar`, `Header` ou `Footer` e a usar `children` no lugar de duplicar esse *markup* em diferentes contêineres.

É importante que você se lembre que os componentes não têm a obrigação de retornar *markup*, somente uma função que siga as regras de `React`.

## Componentes de apresentação vs. Componentes contêineres

```html
<table>
  <thead>
    <tr>
      <th></th>
      <th scope="col" style="text-align:left">De Apresentação (*components*)</th>
      <th scope="col" style="text-align:left">Contêineres (*containers*)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="text-align:right">Propósito</th>
      <td>Como <b>vemos</b> as coisas  (<i>markup</i>, estilos)</td>
      <td>Como <b>funcionam</b> as coisas (<i>data fetching</i>, *state updates*)</td>
    </tr>
    <tr>
      <th scope="row" style="text-align:right">Sabem de Redux</th>
      <td>Não</th>
      <td>Sim</th>
    </tr>
    <tr>
      <th scope="row" style="text-align:right"><i>Data sourcing</i></th>
      <td>`props`</td>
      <td>`Redux state`</td>
    </tr>
    <tr>
      <th scope="row" style="text-align:right">Para modificar o dado</th>
      <td><i>Callbacks</i> muitas vezes por meio das `props`</td>
      <td><i>Dispatch Redux actions</i></td>
    </tr>
    <tr>
      <th scope="row" style="text-align:right">Definição</th>
      <td>Desenvolvidas "manualmente"</td>
      <td>Geradas com `react-redux`</td>
    </tr>
  </tbody>
</table>
```

Quando um contêiner se torna muito complexo (por exemplo se houver muitos componentes aninhados e receber uma grande quantidade de propostas para somente transferi-las aos seus múltiplos `children`), introduza um novo contêniner em algum ponto da sub-árvores para reduzir a complexidade como é explicado na [FAQ de Redux](http://redux.js.org/docs/faq/ReactRedux.html#react-multiple-components).

***

Fontes:

* [Documentação oficial de Redux - Usage with React](http://redux.js.org/docs/basics/UsageWithReact.html)
* [Smart and dump components - @dan_abramov en Medium](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
