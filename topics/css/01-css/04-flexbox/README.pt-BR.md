# Flexbox

- Tipo: `leitura`
- Formato: `individual`
- Duração: `2h`

## Objetivos de aprendizagem

- Aprender os fundamentos da ferramenta do CSS  _flexbox_ para alinhamento e
  posicionamento, e como utilizar as funcionalidades corretamente.

***

## O que é o _Flexbox_

Por muito tempo, as únicas ferramentas disponíveis para a criação de leiautes
em CSS e posicionar elementos com boa compatibilidade entre browsers eram
`float` e `position`. Porém, essas ferramentas possuem algumas limitações muito
frustrantes, especialmente no que diz respeito à responsividade. Algumas
tarefas que consideramos básicas em um leiaute, como centralização vertical de
uma div-filha com relação a uma div-mãe, fazer com que divs-filhas ocupem a
mesma quantidade de espaço e colunas terem o mesmo tamanho independente da
quantidade de conteúdo interno, eram impossíveis ou muito difíceis de serem
manejadas com floats ou position, ao menos de forma prática e _flexível_.

A ferramenta Flexbox (de Flexible Box) foi criada para tornar essas tarefas
mais simples e funcionais: as filhas de um elemento com Flexbox podem se
posicionar em qualquer direção e pode ter dimensões flexíveis para se adaptar.

## Elementos

**Flex container** é o elemento que envolve sua estrutura. Você define que um
elemento é um Flex Container com a propriedade `display` e valores `flex` ou
`inline-flex`.

```html
  <div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
```

```css
  .flex-container {
    display: flex;
  }
```

**Flex Item** são elementos-filhas do flex container.

**Eixos ou Axes** são as duas direções básicas que existem em um Flex Container:
_main axis_, que seria o eixo horizontal ou o eixo principal, e _cross axis_
que seria o eixo vertical.

## Propriedades para o elemento-mãe

![container flex](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)

Quando utilizamos o _Flexbox_, é muito importante saber quais propriedades são
declaradas no elemento-mãe (por exemplo, uma `div` que irá conter os elementos
a serem alinhados) e quais serão declaradas nos elementos-filhas. Abaixo,
seguem algumas propriedades que devem ser declaradas utilizando o elemento-mãe
como seletor (para alinhar elementos-filhas):

**flex-direction** determina a origem e o término do fluxo dos itens. Eles
seguem o vetor estabelecido pelo modo tradicional de escrita: esquerda para
direita em `row`, cima para baixo em `column`, ou no sentido inverso utilizando
`-reverse`.

```css
  .flex-container {
    flex-direction: row | row-reverse | column | column-reverse;
  }
```

![flex-direction](https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg)

Você pode definir se os elementos serão forçados a ficar em uma mesma linha ou
se eles irão quebrar em várias linhas com a propriedade **flex-wrap**.

```css
  .flex-container {
    flex-wrap: nowrap | wrap | wrap-reverse;
  }
```

![flex-wrap](https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg)

A propriedade **flex-flow** é uma propriedade _shorthand_ (uma mesma declaração
inclui vários valores relacionados a uma mesma propriedade) que inclui
`flex-direction` e `flex-wrap`. Determina a ordem do fluxo em que os elementos
aparecerão.

O **justify-content** define o alinhamento das filhas ao longo do eixo principal.

```css
  .flex-container {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  }
```

![justify-content](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)

**align-items** define o comportamento padrão de como _flex items_ são
alinhados de acordo com o eixo vertical (_cross axis_). De certa forma,
funciona de forma similar ao `justify-content`, porém no eixo perpendicular.

```css
  .flex-container {
    align-items: stretch | flex-start | flex-end | center | baseline;
  }
```

![align-items](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)

**align-content** alinha o conteúdo dentro do container quando há espaço extra
no eixo vertical, similar à forma que `justify-content` alinha itens
individuais dentro do eixo principal.

```css
  .flex-container {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  }
```

![align-content](https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg)

## Propriedades para elementos-filhas

A seguir, veremos propriedades que devem ser declaradas tendo como seletor
elementos-filhas, ou seja:

```html
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>
```

Isso significa que, onde existe um elemento-mãe com propriedade _flex_, é
possível atribuir propriedades flex específicas também para as filhas.

_Importante!_

- O CSS só enxerga a hierarquia mãe-filha; não vai aplicar as propriedades flex
  para elementos HTML que não estejam diretamente relacionados;
- Para que as propriedades funcionem nos elementos-filhas, as mães devem ter
  propriedade _flex_.
- As propriedades `float`, `clear` e `vertical-align` não têm efeito em
  flex-items.

A propriedade **order** determina o lugar que os elementos aparecerão.

```css
  .flex-item {
    order: <numero>; /* o valor default(padrão) é 0 */
  }
```

![order](https://css-tricks.com/wp-content/uploads/2018/10/order.svg)

**flex-grow** define a habilidade de um elemento-filha de "crescer" e ocupar
uma área maior, se necessário. Por exemplo, se em uma lista de 3 filhas, 2
delas têm propriedade `flex-grow: 1` e 1 delas tem `flex-grow:2`, essa última
crescerá para ocupar o dobro do tamanho das irmãs.

```css
  .flex-item {
    flex-grow: <numero>; /* o valor default(padrão) é 0 */
  }
```

![grow](https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg)

**align-self** permite que o alinhamento padrão (definido por `align-items`)
seja sobrescrito para itens individuais.

```css
  .flex-item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
  }
```

![align-self](https://css-tricks.com/wp-content/uploads/2018/10/align-self.svg)

Existem outras propriedades para as filhas, como `flex-shrink`, `flex-basis` e
a shorthand `flex`, você pode pesquisar sobre elas para aumentar seu repertório.

## Vamos praticar?

[Flexbox Froggy](https://flexboxfroggy.com/)

## Links úteis

Assim como qualquer outra nova funcionalidade que aprendemos, é imprescindível
praticar bastante e pesquisar sempre que temos dúvidas. A seguir, alguns links
úteis.

Este conteúdo se baseia em grande parte no tutorial da [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/),
guarde nos seus favoritos para consultar sempre que precisar!

- [Flexbox explicado com gifs (em inglês)](https://medium.freecodecamp.org/even-more-about-how-flexbox-works-explained-in-big-colorful-animated-gifs-a5a74812b053)

- [Tutorial da tableless (em português)](https://tableless.com.br/flexbox-organizando-seu-layout/)

- [Flexbox no MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

- [Flexbox no W3C](https://www.w3schools.com/csS/css3_flexbox.asp)

- [Tabela com algumas funcionalidades do flexbox](https://internetingishard.com/html-and-css/flexbox/flexbox-layouts-7abd58.png)
