# Modelo de Caixa e Display

- Tipo: `leitura`
- Formato: `individual`
- Duração: `1h`

## Objetivos de Aprendizagem

- Aprender o `modelo da caixa` e suas propriedades
- Entender a diferença entre  _padding_, _border_ e  _margin_; e suas
  propriedades
- Utilizar corretamente a propriedade `box-sizing`
- Aprender os diferentes tipos de `display`
- Conhecer a diferença entre `display: none` e `visibility: hidden`

***

## O modelo da caixa

É hora de conhecer um dos fundamentos mais importantes do CSS: `box model`
\(modelo da caixa\). É muito fácil, mas entendê-lo bem é vital para poder fazer
um bom layout do site.

![modelo de caixa](https://camo.githubusercontent.com/9ea328b7d3e738e996f6a9e0f9482b5a1234c0aa/68747470733a2f2f666f746f732e73756265666f746f732e636f6d2f65313030316466376432313861396138613836373064383836323866306363356f2e706e67)

### O que é o modelo da caixas?

Retornando à nossa fonte MDN, no capítulo tutorial do [modelo da
caixa](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model),
ela explica o seguinte:

> O modelo de caixa é a base do design da web - cada elemento é representado
> como uma caixa retangular, com seu conteúdo, preenchimento \(espaço interno\),
> borda e margem construídas uma sobre a outra, como as camadas de uma cebola. O
> navegador, para interpretar o design de uma página, processa os estilos que
> serão aplicados a cada caixa, o tamanho das camadas da cebola e a localização
> de algumas caixas em relação a outras. Antes de entender como criar designs
> CSS, precisamos entender o modelo de caixas - que é o que veremos neste
> artigo.

Em outras palavras, o modelo de caixa CSS é essencialmente uma caixa retangular
que envolve cada elemento HTML. Cada vez que uma tag HTML é inserida, é criada
uma nova caixa, que inclui o conteúdo desse elemento.

Como um exemplo, temos o seguinte quadro, que mostra três caixas retangulares
que são criados pelos três tags HTML usados: `<p>`, `<strong>` e novamente
`<p>`.

![modelo de caixa](https://user-images.githubusercontent.com/11894994/57650283-daf1af00-75a0-11e9-9b8b-25eaa772a485.png)

### Elementos que compõem o modelo de caixas

As partes que compõem cada caixa consistem no **conteúdo real**, o
**preenchimento**, as **bordas** e as **margens**; podemos ver a imagem abaixo
que ilustra o modelo de caixa:

![modelo de caixa](https://camo.githubusercontent.com/59ebe79e4a36ae634e28968835b896c40370816b/687474703a2f2f696d6167652e6962622e636f2f63515a7854772f6d6f64656c6f5f44655f43616a612e706e67)

Explicação de cada parte que compõe cada caixa:

- **Content \(_conteúdo_\):** Este é o conteúdo HTML do elemento \(as palavras
  de um parágrafo, uma imagem, o texto de uma lista de elementos, etc.\)
- **Padding \(_preenchimento_\):** espaço livre opcional entre o conteúdo e a
  borda.
- **Border \(_borda_\):** Linha que inclui o conteúdo e o preenchimento.
- **Margin \(_margem_\):** separação opcional entre a caixa e o resto das caixas
  adjacentes.

### Propriedades dos elementos da caixa

CSS define 4 propriedades para controlar os elementos da caixa \(com exceção de
_width_ e  _height_\).

- **Top**: lado superior
- **Right**: lado direito
- **Bottom**: lado inferior
- **Left**: lado esquerdo

![modelo de caixa](https://camo.githubusercontent.com/351982c1d9ce3a34111ee1fb238c3408be735ba8/68747470733a2f2f666f746f732e73756265666f746f732e636f6d2f34366364393962383561646561376633313036373030636439666661343733666f2e706e67)

## Preenchimento, Borda e Margem

### Preenchimento

_Padding_ é o **preenchimento**, ou seja, o espaço livre opcional entre o
_conteúdo_ e a _borda_.

![preenchimento](https://user-images.githubusercontent.com/11894994/57650391-12605b80-75a1-11e9-9aec-7c643f9a802b.png)

Seu valor pode ser definido em: **unidades de medida**, **porcentagem** ou com o
valor `inherit` \(especifica que o _padding_ deve ser herdado do elemento pai\).

O CSS define quatro propriedades para controlar cada um dos espaços de
preenchimento horizontal e vertical de um elemento:

- `padding-top`: preenchimento superior
- `padding-right`: preenchimento direito
- `padding-bottom`: preenchimento inferior
- `padding-left`: preenchimento esquerdo

Também podemos usar a propriedade do tipo _shorthand_ chamada de `padding`para
definir os quatro preenchimentos de um elemento simultaneamente.

Isso significa que ele suporta entre um e quatro valores, com o seguinte
significado:

- Se apenas **um valor** for indicado:

  * **Todos** os preenchimentos têm esse valor

  ```css
  div {
     padding: 2em;
  }

  /* Todos os preenchimentos são 2em */
  ```

- Se **dois valores** forem indicados:

  * O **primeiro** é atribuído ao preenchimento **superior e inferior**
  * O **segundo** é atribuído à **direita e esquerda**

  ```css
  div {
     padding: 1em 2em;
  }

  /*
   * Superior e inferior = 1em,
   * Esquerda e direita = 2em
   */
  ```

- Se **três valores** são indicados :

  * O **primeiro** é atribuído ao preenchimento **superior**
  * O **segundo** valor é atribuído à **direita e esquerda**
  * O **terceiro** é atribuído ao preenchimento **inferior**

  ```css
  div {
     padding: 1em 2em 3em;
  }

  /*
   * Superior = 1em, Direita = 2em,
   * Inferior = 3em, Esquerda = 2em
   */
  ```

- Se os **quatro valores** forem indicados :

  * Os preenchimentos serão atribuídos em **ordem horária**, da seguinte
    maneira:

    superior, direita, inferior e esquerda.

  ```css
  div {
     padding : 1em 2em 3em 4em ;
  }

  /*
   * Superior = 1em, Direita = 2em,
   * Inferior = 3em, Esquerda = 4em
   */
  ```

### Border

É a **linha** que contém o _conteúdo_ e o _preenchimento_. É aplicável a todos
os elementos.

![borda](https://user-images.githubusercontent.com/11894994/57650430-2ad07600-75a1-11e9-9b78-e770ee6206bf.png)

Para cada borda você pode definir sua largura ou espessura, sua cor e seu
estilo, portanto, o CSS  define diferentes propriedades relacionadas às bordas.

#### Largura ou espessura

Define a **espessura** de cada uma das quatro bordas dos elementos.

A largura das bordas é indicada por uma **unidade de medida** ; por
palavras-chave `thin` \(borda fina\), `medium` \(borda normal\) e `thick`
\(borda larga\); ou o valor `inherit`.

#### Estilo

O **estilo** das bordas só pode ser indicado por algumas das palavras reservadas
definidas pelo CSS. Como o valor padrão dessa propriedade é `none` \(sem
borda\), os elementos não mostram nenhuma borda visível, a menos que um estilo
de borda seja explicitamente definido.

Na imagem a seguir podemos ver os diferentes estilos de borda e a _palavra
reservada_ para cada um deles:

![estilos das bordas](https://camo.githubusercontent.com/5e32931f4471bd9bea864c69dae9c77765b3e925/68747470733a2f2f6c656e6775616a656373732e636f6d2f702f6373732f70726f70696564616465732f626f726465722d7374796c65732e706e67)

#### Cor

Define a **cor** de cada uma das quatro bordas dos elementos.

Os valores que podem tomar são: [**valores de
cor**](https://www.htmlprogressivo.net/2014/02/Cores-CSS-Propriedade-color-RGB-Hexadecimal-nome-Tutorial.html),
`transparent` ou `inherit`.

#### Propriedade shorthand "border"

CSS define a propriedade de tipo _shorthand_ para definir o valor de todos os
atributos de todas as bordas de forma direta: `border`.

Seu valor pode ser definido em: **largura da borda + estilo da borda + cor da
borda** ou `inherit` \(especifica que a borda deve ser herdada do elemento
pai\). Vejamos o seguinte exemplo:

```css
div {
   border: 1px solid blue;
}
```

> Desta forma, com a propriedade `border`, atribuímos a **largura**, o
> **estilo** e a **cor** da borda para todos os quatro lados da caixa do
> elemento `div`.

Além disso, temos a possibilidade de atribuir os valores \(largura, estilo e
cor\) a um determinado lado da seguinte maneira:

```css
div {
  border-top : 1px solid blue;
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  border-left: 1px solid blue;
}
```

> [Saiba mais sobre
> bordas.](https://javabeat.net/border-radius-box-shadow-css3/)

### Margin (**margem**)

É a **separação opcional** existente entre a caixa e o resto das caixas
adjacentes.

![margem](https://i.imgur.com/HaprJW7.png)

Seu valor pode ser definido em: **Unidades de medida**, **porcentagem** ou
`inherit` \(especifica que a margem deve ser herdada do elemento pai\).

CSS define quatro propriedades para controlar cada um dos espaços de margem
horizontal e vertical de um elemento:

- `margin-top`: margem superior
- `margin-right`: margem direita
- `margin-bottom`: margem inferior
- `margin-left`: margem esquerda

Também podemos usar a propriedade de tipo "_shorthand_" `margin` para definir as
quatro margens de um elemento simultaneamente. Isso significa que ele admite
entre um e quatro valores, assim como a propriedade `padding`, que vimos
anteriormente.

```css
div {
   margin: 5em  4em  3em  2em;
}

/*
 * Superior = 5em, Direita = 4em,
 * Inferior = 3em, Esquerda = 2em
 */
```

### Outras propriedades

#### Background image (imagem de fundo)

É a imagem que é exibida por trás do _conteúdo_ e o espaço do _preenchimento_.

#### Background color (cor de fundo)

É a cor que é exibida atrás do _conteúdo_ e o espaço do _preenchimento_.

> Padding e Margin são transparentes, o espaço ocupado pelo preenchimento mostra
> a imagem ou a cor de fundo \(se elas estiverem definidas\) e no espaço ocupado
> pela margem a imagem ou a cor de fundo de seu elemento pai é exibida \(se
> forem definidos\). Se uma caixa define uma cor e uma imagem de fundo, a imagem
> tem mais prioridade e é a que é exibida.

## Largura e Altura

### Width (_largura_)

Controla a largura da caixa ou um elemento.

![largura](https://user-images.githubusercontent.com/11894994/57650537-6a975d80-75a1-11e9-92ea-02d5fca1aa15.png)

O seu valor pode ser definido em: **unidades de medida**, **porcentagem**,
`auto` ou `inherit`. Sendo como valor inicial `auto`. A propriedade **width**
não suporta valores negativos e os valores percentuais são calculados a partir
da largura de seu elemento pai.

```css
div {
   width: 200px ;
}
```

### Height (_altura_)

Controla a altura da caixa ou um elemento.

![altura](https://user-images.githubusercontent.com/11894994/57650560-76831f80-75a1-11e9-92cb-644752f5ed93.png)

Seu valor pode ser definido em: **Unidades de Medida**, **porcentagem**, `auto`
ou `inherit`. Sendo como valor inicial `auto`. Como em _width_, a propriedade
**height** não suporta valores negativos. Se uma **porcentagem** for indicada, a
altura do elemento pai será tomada como referência.

```css
div {
   height: 400px;
}
```

## Box sizing

A propriedade `box-sizing` é usada para informar ao navegador quais devem ser as
propriedades de tamanho \(largura e altura\).

Também indicamos se queremos incluir o preenchimento, a borda e/ou a margem.

### Valores

#### Valor "content-box"

Para o valor `content-box` as propriedades _width_ e _height_ incluem apenas o
conteúdo, elas não incluem o _padding_, _border_ ou _margin_. Este é o valor
padrão.

```css
div {
   box-sizing: content-box;
}
```

![content-box](https://camo.githubusercontent.com/b47d9eaa6f87d7dd118ecc89a2b7b740404b7e67/68747470733a2f2f666f746f732e73756265666f746f732e636f6d2f39393538656561303032366636643930616531636439626530663437663265626f2e706e67)

#### Valor "border-box"

Para o valor `border-box` as _propriedades width_ e _height_ incluem _padding_ e
_border_, mas não _margin_.

```css
div {
   box-sizing: border-box;
}
```

![border-box](https://camo.githubusercontent.com/55fe809da8e037eed91bf118eaaed6ba27eb3829/687474703a2f2f696d6167652e6962622e636f2f6e41626354772f626f726465725f626f782e706e67)

> Também podemos usar o valor `inherit`, que é o valor que herda essa
> propriedade de seu elemento pai.

## Display

### O que é a propriedade _display_?

Estabelece o tipo de caixa gerada por um elemento.
![display](https://camo.githubusercontent.com/184399b861f114f11d1af8295354091b5b570dde/68747470733a2f2f666f746f732e73756265666f746f732e636f6d2f37666664346330633333666166623464383938613136613839333561303639376f2e706e67)

### Valores

#### Valor "Inline"

A propriedade `display: inline` faz com que o elemento tenha como natureza se
posicionar em linha, ou seja, um elemento é colocado ao lado do outro e,
portanto, ocupa apenas o espaço necessário para mostrar seu conteúdo:

![inline](https://camo.githubusercontent.com/0091dbe812aea6ab13f3aea0c048b307d236ac7e/68747470733a2f2f666f746f732e73756265666f746f732e636f6d2f34366464633864623661646463616332356161663564316237393237353233326f2e706e67)

Suas características são:

- Ajusta-se ao fluxo do texto
- Não pula para a próxima linha
- Você pode aplicar a propriedade `white-space`
- Ignorará as margens _top_ e _bottom_, só é possível pode utilizar _left_ e
  _right_ e qualquer _padding_
- Se a propriedade _floating_ for usada, elas se convertem em `block`
- Você pode aplicar a propriedade `vertical-align`

#### Valor "block"

A propriedade `display: block` faz com que o elemento tenha uma natureza
posicionada em blocos, para que sempre inicie em uma nova linha e ocupe todo o
espaço disponível na linha, mesmo que seu conteúdo não ocupe todo o site:

![block](https://camo.githubusercontent.com/949a1bd1cbf2d1fc40fd17d3e56b81c16f595363/68747470733a2f2f666f746f732e73756265666f746f732e636f6d2f30613762323138346165373635373530653339323961663634383234373362666f2e706e67)

Suas características são:

- Se não houver largura definida, eles se expandem para preencher o espaço do
  seu contêiner pai
- Eles podem ter margens e preenchimentos
- Se a altura não for definida, elas crescerão para conter seus filhos
- Por padrão, faz uma quebra de linha
- Ignoram a propriedade `vertical-align`

#### Valor "inline-block"

A propriedade `display: inline-block` combina o melhor dos dois mundos, fazendo
com que os elementos se posicionem em linha, mas mantendo sua natureza de bloco,
ou seja, eles podem ser alinhados:

![inline-block](https://camo.githubusercontent.com/49ca770293bb31c21cb1713524f11e80702daf56/68747470733a2f2f666f746f732e73756265666f746f732e636f6d2f37383932663037363339313561353836353238643336353539643736613435316f2e706e67)

#### Valor "none"

A propriedade `display: none` remove o elemento para que ele não seja exibido na
tela.

#### Qual é a diferença entre "display: none" e "visibility: hidden"?

Ambos os atributos permitem "ocultar" um elemento no navegador. No entanto, há
uma diferença muito importante:

- `display: none` remove o elemento definitivamente do espaço ocupado e é
  substituído pelos elementos adjacentes, como se o elemento não existisse mais.

  ![none](https://user-images.githubusercontent.com/11894994/57650731-d37ed580-75a1-11e9-9e09-d5561152782f.png)

- `visibility: hidden` oculta o elemento, mas ainda mantém o espaço ocupado,
  enquanto os elementos adjacentes mantêm sua localização.

  ![hidden](https://user-images.githubusercontent.com/11894994/57650732-d37ed580-75a1-11e9-857b-8dbe55ad294c.png)

#### Resumo das características do Display

![Resumo do display](https://user-images.githubusercontent.com/11894994/57650733-d37ed580-75a1-11e9-902f-4830eca6fb9c.png)

## Leituras complementares

Continue lendo e aprendendo sobre o modelo de caixa e diplay com os seguintes
recursos:

- [Modelo da caixa - W3S](https://www.w3schools.com/css/css_boxmodel.asp)
- [Display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
- [Display - CSS
  Tricks](https://css-tricks.com/almanac/properties/d/display/)
