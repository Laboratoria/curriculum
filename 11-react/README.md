# React

**React** é uma tecnologia realmente revolucionária, que além de permitir a criação de interfaces utilizando lindos componentes, também apresenta uma mudança de paradigma que vai muito além do navegador e da web.

A medida que a web foi evoluindo e passamos de páginas estáticas para aplicações web cada vez mais **interativas e dinâmicas**, incluindo também o surgimento dos **clientes *mobiles***, foi necessária a criação de novas estratégias e ferramentas que nos permitam lidar com esta complexidade crescente no desenvolvimento de interfaces de uma maneira **ordenada**, **uniforme** e **escalável**.

**React** representa uma verdadeira revolução, não só pela **praticidade** e **simplicidade** de sua abordagem, como também porque permite usar **uma mesma tecnologia** para desenvolver interfaces, seja uma página web estática, uma *single-page app*, uma aplicação comercial ou uma aplicação móvel.

Neste curso você construirá uma Single Page App (SPA), usando [React](https://reactjs.org/), [JSX](https://facebook.github.io/jsx/), [Babel](https://babeljs.io/), [Webpack](https://webpack.js.org/) e [Redux](https://redux.js.org/).

***Tags***: `react`, `components`, `ui`, `stateless`, `HOCs`, `babel`, `encapsulamento`, `modularização`, `jsx`, `webpack`, `redux`

## Público alvo

Este curso é destinado a pessoas com conhecimentos prévios de **programação e desenvolvimento web** que queiram aprender novas ferramentas que lhes permitam desenvolver interfaces web de uma maneira mais **ágil**, **modular** e **escalável**.

## Requisitos prévios

Para seguir adiante com este curso sem frustração é recomendável os seguintes conhecimentos prévios:

* Manipulação de linha de comandos (\*nix) e git;
* JavaScript funcional: ES6, imutabilidade, nodeJS e npm;
* Desenvolvimento web padrão: HTML e DOM + CSS.

Também recomendamos ter completado nosso curso  **JavaScript Funcional**.

## Você aprenderá

* Fundamentos de **React**:
  - Virtual DOM;
  - One-way data binding;
  - Learn once, write anywhere;
* Componentes `stateless` (sem estado).
* **ES2015**: Utilizar as últimas especificações e extensões de Javascript (ES2015) de maneira "universal" por meio das transpilação e o uso de *polyfills*. Ferramentas: `yarn`, `babel`.
* **JSX**: Uma linguagem que estende JavaScript permitindo a inclusão de estruturas declarativas para construir interfaces.
* Definição de propriedades (`props`) para os componentes e seus tipos.
* Manipulação de `state` global.
* Componentes `statefull`:
  - Seu ciclo de vida.
  - Manipulação de `state` interno.
  - Referências entre componentes (`refs`).

## Formato do curso

Neste curso propomos uma espécie de "simulação" da vida real. Um enfoque orientado ao produto, desenvolvendo nosso projeto como se faz hoje pelas equipes de trabalho profissionais.

Teremos o foco na aprendizagem de `React` como uma ferramenta profissional para o desenvolvimento de interfaces (neste caso web), mas também praticaremos outras habilidades, como a análise de requisitos, a capacidade de trabalhar em equipe e auto-gerenciamento, as práticas de documentação, capacidade de comunicação para expressar pontos de vista e ideias, etc.

Tudo isso vamos aprender praticando, fazendo, batendo a cabeça no teclado, conversando com nossas companheiras, consultando nossas tutoras e os recursos *online* que elas nos recomendarem e, principalmente, dedicando muitas horas ao desenvolvimento de um produto que nos fará orgulhosas.

## Produto

Neste curso você construirá uma "Single page app" com os seguintes requisitos:

* Ser totalmente desenvolvida em `ES6` e empacotada de maneira automatizada com `babel`  ou `webpack`;
* Utilizando `React` e `Redux`;

## Syllabus

### Unidade 01: [Introdução a React e JSX](00-intro)

Nesta primeira unidade veremos o que o `React` faz exatamente, como integrá-lo em tempo zero em uma página web existente e como construir interfaces com ele.

`React` pode ser desenvolvido em ES5, mas por sua natureza declarativa, se torna muito pesado. É por isso que `React` usa `JSX` por padrão como sua `templating language`.

Nesta unidade também introduziremos `JSX`, quais benefícios oferece e por que é uma peça fundamental de `React`. Além disso, construiremos nossos primeiros componentes "de verdade".

### Unidade 02: [Babel e Webpack](01-babel-and-webpack)

Agora que você já teve a oportunidade de ver o básico de `React` em ação, nesta unidade veremos `Babel` e `Webpack`, que são duas ferramentas muito comumente usadas com `React`. `Babel` permite transpilar nosso código e `Webpack` empacotar nossa aplicação.

### Unidade 03: [Componentes](02-components)

Graças aos parâmetros de nomeação e ao  *desestructuring*, já aprendemos como especificar nossas `props` na assinatura de nossos componentes. Nesta unidade focaremos na especificação de seus tipos, opcionalidade e valores por padrão.

Logo analisaremos a propriedade especial `children` e como manipulá-la com `.map` e `.filter`.

### Unidade 04: [Estado global](03-global-state)

Até aqui podemos dizer que `React` pode ser uma ferramenta muito boa, mas realmente não oferece nenhum valor diferencial em relação às outras que fazem algo parecido.

Nesta unidade vamos mergulhar no que realmente faz o `React` e seus amigos um conjunto de ferramentas **único**: um novo padrão de projeto de aplicações que desencadeou uma autêntica revolução e o surgimento de todo um ecossistema de ferramentas.

Veremos como projetar nossas aplicações orientadas ao fluxo de dados em uma única direção, separando nossos componentes em duas categorias, definindo o estado de nossos componentes com um estado global e disparando alterações de maneira homogênea por meio de ações com `redux`.

Então faremos um exemplo em que veremos do início ao fim todas as etapas de projeto e implementação de uma biblioteca de componentes com `React` e `Redux`.

### Unidade 05: [React OOP: ciclo de vida, estado interno e `refs`](04-oop)

`React` define só 9 métodos muito simples para controlar o ciclo de vida dos componentes. Nesta unidade mergulharemos na compacta documentação de `React`.

Então analisaremos casos em que precisamos que os componentes tenham um estado próprio e encapsulado.

E, finalmente, veremos casos em que dois componentes não compartilham um estado, mas precisam de uma referência explícita de um para outro.

### Unidade 06: [*build* e *deploy* scripts](05-build-tools)

Nesta sessão revisaremos algumas estratégias simples para fazer com que seu dia-a-dia de desenvolvimento seja um pouco mais prazeroso.

Tentaremos entender o que as `tasks` (tarefas) fazem exatamente e que papel cumprem em cada etapa do software, desde o desenvolvimento até a publicação.

Teremos enfoque no uso de `npm scripts` para executar nossas tarefas e `GitHub pages` para publicar nosso código.

***

## Autores / Colaboradores

* Mariano Crowe (autor)
* Lupo Montero (coordenador)

## Livros

* [Learning React](http://shop.oreilly.com/product/0636920049579.do)
* [React: Up & Running: Building Web Applications](http://shop.oreilly.com/product/0636920042266.do)

## Benchmarks

* [React fundamentals - reacttraining.com](https://reacttraining.com/online/react-fundamentals)
* [Getting started with React - thinkster.io](https://thinkster.io/tutorials/getting-started-with-react)
* [React JS Tutorials Playlist - LearnCode.academy en YouTube](https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)
* [arkency/reactjs_koans - GitHub](https://github.com/arkency/reactjs_koans)
* [What people are saying about React - @mikechau on GiHub](https://github.com/mikechau/react-primer-draft#what-people-are-saying-about-react)
* [Powering up with React - codeschool.com](https://www.codeschool.com/courses/powering-up-with-react)
* [reactforbeginners.com](https://reactforbeginners.com/)
* [Learn React.js Basics - lynda.com](https://www.lynda.com/React-js-tutorials/Learn-React-js-Basics/519668-2.html)
* [React - frontendmasters.com](https://frontendmasters.com/courses/react/)

## Leituras complementares

* [React resources](https://x-team.com/react-resources/)
* [React - página oficial](https://facebook.github.io/react/)
* [React patterns](http://reactpatterns.com)
* [Functional React - Get your App outta my Component](https://medium.com/@adamterlson/functional-react-series-part-1-get-your-app-outta-my-component-92656ae13e25?ref=mybridge.co)
* [React in patterns](http://krasimirtsonev.com/blog/article/react-js-in-design-patterns)
* [Everything can be a component](https://speakerdeck.com/pedronauck/reactjs-keep-simple-everything-can-be-a-component)
* [30 days of react](https://github.com/fullstackreact/30-days-of-react)
* [Awesome React](https://github.com/enaqx/awesome-react)
* [Recursos para aprender React en espanhol](https://github.com/jlobos/react-espanol)
