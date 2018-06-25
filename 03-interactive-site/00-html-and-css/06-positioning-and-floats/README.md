# Positioning e Floats

- Tipo: `leitura`
- Formato: `individual`
- Duração: `2h`

## Objetivos de Aprendizagem

* Aprender como fazer layout em html/css usando _positioning_
* Aprender como fazer layout em html/css usando _floats_
* Reconhecer quando é melhor usar cada um

***

## 1. Fluxo do Documento

> Em seguida, a tradução para o português do artigo [MDN - Posicionamento](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning):

_**Positioning**_ é um tema muito complexo, portanto, antes de mergulhar no código, analisaremos algumas coisas sobre o fluxo do documento que vimos até agora.

Em primeiro lugar, vimos que os elementos individuais são como "caixas" que são apresentadas tomando seu conteúdo e adicionando preenchimento, borda e margem em torno deles - o modelo da caixa que vimos na lição anterior.

Também vimos que, por padrão, o conteúdo de um elemento de tipo de **bloco** é 100% da largura do elemento pai e tão alto quanto seu conteúdo. Pelo contrário, os elementos do tipo **inline** são tão altos e tão amplos quanto seu conteúdo. Não é possível definir a largura ou a altura dos elementos _inline_

- Os elementos _inline_ são simplesmente colocados dentro do conteúdo dos
  elementos de nível de bloco. Se você quiser controlar o tamanho de um elemento
  _inline_ você deve configurá-lo para se comportar como um elemento de tipo de
  bloco com `display: block;`.

Isso explica os elementos individuais, mas como os elementos interagem **uns** com **os outros**? Até agora vimos que o fluxo normal \(por padrão ou configurado\) é que o tipo de elementos de bloco são dispostos verticalmente, um abaixo do outro, isto é, cada um aparecerá em uma nova linha abaixo da última e separados por qualquer margem estabelecida neles.

Os elementos em linha se comportam de maneira diferente: eles não aparecem em novas linhas; em vez disso, eles ficam na mesma linha que o outro e qualquer conteúdo de texto adjacente \(ou encapsulado\), desde que haja espaço para eles fazerem isso na largura do elemento de nível de bloco pai. Se não houver espaço, o texto ou os elementos que transbordarão serão movidos para uma nova linha.

Se dois elementos adjacentes tiverem margem aplicada e as duas margens estiverem em contato, o maior dos dois permanecerá e o menor desaparecerá - isso é chamado de _colapso da margem_.

Vejamos um exemplo:

```html
<h1>Basic document flow</h1>

<p>I am a basic block level element. My adjacent block level elements sit on
new lines below me.</p>

<p>By default we span 100% of the width of our parent element, and we are as
tall as our child content. Our total width and height is our content + padding
+ border width/height.</p>

<p>We are separated by our margins. Because of margin collapsing, we are
separated by the width of one of our margins, not both.</p>

<p>inline elements <span>like this one</span> and <span>this one</span> sit on
the same line as one another, and adjacent text nodes, if there is space on
the same line. Overflowing inline elements will <span>wrap onto a new line if
possible (like this one containing text)</span>, or just go on to a new line
if not, much like this image will do: <img
src="https://mdn.mozillademos.org/files/13360/long.jpg"></p>
```

```css
body {  width: 500px;  margin: 0 auto;}p {  background: aqua;  border: 3px solid blue;  padding: 10px;  margin: 10px;}span {  background: red;  border: 1px solid black;}
```

![Fluxo B&#xE1;sico de Documentos](https://github.com/Laboratoria/curricula-js/raw/441a522e53ff2f34843e1ca740c01ea526fe8c19/03-interactive-site/00-html-and-css/04-positioning-and-floats/img-normal-flow.png?raw=true)

## 2. Positioning

O propósito do  _positioning_ é nos permitir sobrescrever o comportamento normal do fluxo do documento descrito acima, para produzir efeitos interessantes. E se você quiser alterar ligeiramente a posição de algumas caixas dentro de um desenho para dar uma sensação um pouco peculiar e angustiada? _Positioning_ é sua ferramenta. Ou se você quiser criar uma interface de usuário, na qual um elemento flutua em cima de outras partes da página e/ou sempre fica no mesmo lugar dentro da janela do navegador, não importa como a página é exibida? O  _positioning_  faz com que essa estrutura funcione \(layout\).

A propriedade `position` do CSS é a mais usada quando queremos definir a localização de um elemento em nosso documento. Ela especifica o _tipo de posicionamento_ que o elemento terá. Deve-se notar que tudo isso varia dependendo das características que têm o valor `position` que colocamos. Ou seja, usaremos um valor diferente dependendo de como queremos posicionar esse elemento.

O significado de cada um dos valores possíveis da propriedade `position` é o seguinte:

### Static

É o posicionamento normal ou estático, que é aplicado pelo navegador de uma maneira predefinida a todos os elementos de uma página. Isto significa que eles aparecem de acordo com a sua ordem em _HTML_, e para mostrar cada elemento considera apenas o seu `display` \(ou seja, em linha, bloco, etc.\). Nada novo :\)


<!-- Este valor não utiliza um eixo de coordenadas, por isso não leva em conta as propriedades `left`, `right`, `top` y `bottom`; se as pusermos, nada acontecerá com o elemento.

![static](https://cdn-images-1.medium.com/max/800/1*oNAAc_CUeTsAqPpOZjRwKA.png) -->

### Relative

É muito semelhante ao posicionamento estático, exceto que uma vez que o elemento posicionado tomou o seu lugar no arranjo de fluxo normal, pode modificar a sua posição final \(inclusive causando sobreposições com outros elementos da página\) por meio das propriedades: `top`, `bottom`, `left` e `right`.

Leia mais sobre a posição relativa aqui:

* [Posicionamento relativo - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/position#Relative_positioning)

### Absolute

Um elemento de posição absoluta não existe mais no fluxo normal do documento. O elemento fica em sua própria camada separada de todo o resto. Sua posição é definida em relação às arestas do primeiro ancestral **no-static** que ele possui. Se você não tiver ancestrais **no-static**, sua posição será definida em relação às arestas do `body`. Como posição _relative_, podemos modificar a posição final do elemento por meio das propriedades: `top`, `bottom`, `left` e `right`.

<!-- ![absolute-code](https://cdn-images-1.medium.com/max/800/1*I-L5xJ7P8HLPs8b
PfbMWTQ.png)
![absolute](https://cdn-images-1.medium.com/max/800/1*j1j32f4xx26URfN99BjTmw.
png) -->

Leia mais da posição absoluta aqui:

* [Posicionamento absoluto - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/position#Absolute_positioning)

### Fixed

Esse valor deixa o elemento fixo no documento. Seu eixo de coordenadas está relacionado à janela do navegador. Quando você rola, o elemento estará sempre no mesmo lugar.

_Fixed_ funciona da mesma maneira como o posicionamento _absolute_, com uma diferença fundamental: enquanto o posicionamento _absolute_ fixa um elemento no lugar com relação ao &lt;html&gt; ou seu antecessor posicionado mais próximo, o elemento _fixed_ fixa em relação à janela do navegador em si.

Leia mais da posição _fixed_ aqui:

* [Posicionamento Fixo - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/position#Fixed_positioning)

<!-- >A propriedade position não permite controlar o posicionamento flutuante, que se estabelece com outra propriedade chamada float e que explicamos mais adiante.
Além disso, a propriedade position só indica como se posiciona uma caixa, e não o deslocamento. -->

## 3. Floats

Float é uma propriedade de posicionamento em CSS, ou seja, como os elementos estão localizados em um documento HTML. O float faz os elementos se ajustarem à direita ou à esquerda. É inspirado em revistas nas quais os textos se encaixam em torno das imagens.

<!-- Podemos observar um exemplo de float em um documento do word quando “enquadramos” a imagen, ou seja, que o texto se ajuste ao redor da imagem. Um exemplo:

imagen -->

Elementos flutuantes ainda fazem parte do fluxo de documentos. Isso é claramente diferente dos elementos que usam posicionamento absoluto. Elementos de página com posição absoluta são removidos do fluxo da página da web. Elementos de página com posição absoluta não afetarão a posição de outros elementos e outros elementos não os afetarão, sejam eles tocados ou não.

Leia sobre os floats [aqui](https://developer.mozilla.org/pt-BR/docs/Web/CSS/float)

### Valores de float

- **none**: o elemento não flutua. Este é o valor inicial.
- **left**: o elemento flutua à esquerda do bloco do contêiner
- **right**: o elemento flutua à direita do bloco do contêiner
- **inherit**: o elemento herda a direção flutuante de seu pai

### Float vs Position: Absolute
Os elementos flutuantes ainda fazem parte do fluxo da página da Web. Isso é claramente difere dos elementos de página que usam posicionamento absoluto. Elementos da página com posição absoluta são removidos do fluxo de página, como quando a caixa de texto no design do impressão foi dita para ignorar o wrapper da página.

### clear
É uma propriedade usada para controlar o comportamento de elementos flutuantes.
Como já sabemos, os elementos depois de um elemento flutuante flutuarão ao seu redor
Caso não queiramos que isso aconteça, com clear especificamos que um elemento não suporta um float à sua esquerda, à sua direita ou de ambos os lados.

#### Valores de clear

- **none**: default, permite elementos flutuantes em ambos os lados.
- **left**: elementos flutuantes não são permitidos no lado esquerdo.
- **right**: elementos flutuantes não são permitidos no lado direito.
- **both**: elementos flutuantes não são permitidos no lado esquerdo ou direito.
- **inherit**: herda o valor de seu elemento pai.

### Clearfix
O maravilhoso hack clearfix serve-nos para arrumar os elementos que contêm elementos flutuantes.

Leia sobre o porque usar e como usar _clearfix_ aqui:

* [Para o que serve o clearfix? - Origamid](https://www.origamid.com/codex/para-que-serve-o-clearfix/)
* [CSS Clearfix](https://blog.samuelsimoes.com/html-css/2013/05/12/css-clearfix.html)


## Leituras complementares

Position:

* [Position CSS - Devmedia](https://www.devmedia.com.br/position-css-definindo-a-posicao-de-elementos-com-fixed-relative-e-absolute/37700)
* [Posicionamento relativo e absoluto - Maujor](http://www.maujor.com/tutorial/absrel.php)

Float:

* [All about floats - CSS Tricks](https://css-tricks.com/all-about-floats/)

Flexbox:

* [Conheça o Flexbox](http://desenvolvimentoparaweb.com/css/flexbox/)
* [Guia de Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Guia Flexbox - Origamid](https://origamid.com/projetos/flexbox-guia-completo/)
* [Posicionamento elementos e o Flebox - Caelum](http://blog.caelum.com.br/o-drama-do-posicionamento-de-elementos-na-tela-e-o-flexbox/)
* [Flexbox Froggy](https://flexboxfroggy.com/)
* [Flexbox Defense](http://www.flexboxdefense.com/)

Grid:

* [Grid CSS - Tableless](https://tableless.com.br/entendendo-sistemas-de-grid-css-do-zero/)
* [Grid Layout - Chief Of Design](https://www.chiefofdesign.com.br/css-grid-layout/)
