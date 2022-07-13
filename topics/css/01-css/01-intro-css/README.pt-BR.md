# CSS

- Tipo: `leitura`
- Formato: `individual`
- Duração: `4h`

***

## Objetivos de Aprendizagem

- Entender o que é CSS e como funciona
- Conhecer as diferentes maneiras de adicionar estilos à sua web
- Aprender a sintaxe CSS
- Aprender o que são os seletores e quais são os seletores mais usados
- Entender como funcionam as regras de cascata e herança do CSS
- Aprender os valores usuais de CSS e suas unidades

## O que é CSS e como funciona?

CSS significa _Cascading Style Sheets_ \(em português: folhas de estilo em
cascata\). É uma linguagem usada para definir e criar a apresentação de um
documento escrito em HTML. CSS descreve como os elementos na estrutura do
documento devem ser apresentados na tela. Com CSS, damos estilo e design à
páginas da web. Nós mudamos cores, tamanhos, espaços, adicionamos animações,
etc.

Existem três opções para incluir CSS em um documento HTML:

### 1. CSS Inline

Já vimos como adicionar estilos aos nossos elementos HTML com o atributo
_style_. Por exemplo:

```html
<h1 style="color: blue;
background-color: yellow;
border: 1px solid black;">Olá Mundo!</h1>
```

No navegador, o título anterior ficaria assim:

![Estilo Inline](https://user-images.githubusercontent.com/11894994/57649406-851c0780-759e-11e9-96b9-e7ff01870593.png)

Esta maneira de adicionar CSS é chamada de **CSS Inline**, mas não é muito
recomendada. Sua manutenção é complicada, já que poderíamos ter que atualizar as
mesmas informações várias vezes ao longo do documento. Além disso, estamos
misturando informações de estilo com informações HTML estruturais, tornando o
CSS difícil de ler e entender. Manter os diferentes tipos de código separados e
puros facilitará a tarefa para aqueles que posteriormente trabalharão no código.
Lembre-se de que você deve sempre pensar em organizar seu código de uma maneira
que torne mais fácil para os outros entenderem o que você está fazendo.

### 2. CSS no head

Outra opção é colocar os estilos dentro de um elemento html `<style>` que
colocamos no `head`. Por exemplo, para representar os mesmos estilos do `h1`
anterior, teríamos o seguinte:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Entendendo CSS</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <h1>Olá Mundo!</h1>
  </body>
</html>
```

Este método também é ineficiente. O que acontece se tivermos estilos semelhantes
em outras páginas do meu site? Eu teria que repetir os estilos em cada página. E
lembre-se que não gostamos de nos repetir: DRY! :\)

### 3. Folha de estilos externa CSS

A maneira ideal de adicionar estilos ao seu sítio da Web é ter um arquivo CSS
separado do arquivo HTML. Todos os estilos estão incluídos neste arquivo CSS
externo, que as páginas HTML vinculam usando a tag html `<link>`.

Vale ressaltar que este link externo pode ser um arquivo que está no seu
computador ou um link de um arquivo externo da Internet \(um endereço HTTP\).

No caso do nosso exemplo anterior com os estilos para ele `h1`, teríamos dois
arquivos:

#### Arquivo `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Entendendo CSS</title>
    <!--Link para o arquivo que está no mesmo computador-->
    <link rel="stylesheet" href="style.css">
    <!--Link para o arquivo que está na internet-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
  </body>
</html>
```

#### Arquivo `style.css`

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}
```

A tag `<link>` tem o atributo `rel` para indicar o relacionamento do documento
vinculado ao atual. O uso mais comum desse atributo é especificar o link para
uma folha de estilos externa: o atributo `rel` é definido com o valor
`stylesheet`. O atributo `href` é definido com o caminho para a folha de estilo
externa para formatar a página. No exemplo acima, uma vez que o arquivo para
ligação está em nosso próprio ambiente, nós simplesmente colocar o nome do
arquivo: `style.css`.

## Sintaxe CSS

Como vimos na lição anterior, para especificar o estilo, usamos os pares
`propriedades : valores`.

- Propriedades: são identificadores que indicam às pessoas qual recurso de
  estilo \(largura, cor de fundo, fonte\) queremos alterar.
- Valores: cada propriedade recebe um valor, que indica como queremos alterar
  essa característica \(por exemplo, qual fonte, qual largura ou qual cor
  usar\).

O par formado por uma propriedade e um valor é chamado de **instrução** CSS.
Várias instruções juntas formam um **bloco de instruções**. Para definir para
qual elemento da página da web o estilo especificado pelo bloco de declaração
deve ser aplicado, usamos um **seletor**. O seletor informa ao navegador para
qual elemento \(ou elementos\) de uma Web deve aplicar um determinado estilo.
Por exemplo, um seletor pode ser um título, um parágrafo, uma imagem etc. Blocos
de declaração CSS combinados com seletores formam **regras CSS**.

Por exemplo, uma regra de css seria:

```css
seletor
|
p { color:red; font-size:15px ; }
      |    |       |      |
     prop  valor  prop   valor
     ___________  ______________
          |             |
      declaração    declaração
     ___________________________
                 |
         bloco de instruções

/ * exemplo de uma regra css * /
```

A convenção para representar o exemplo anterior é a seguinte \(é mais fácil ler
quando colocamos as instruções uma abaixo da outra\):

```css
p {
   color: red;
   font-size: 15px ;
}
```

Em resumo, o bloco de instruções indica o que precisa ser feito e o seletor
indica a quem deve ser aplicado. Portanto, os seletores são essenciais para
aplicar corretamente estilos CSS em uma página. Várias regras CSS podem ser
aplicadas ao mesmo elemento HTML e cada regra CSS pode ser aplicada a um número
ilimitado de elementos.

## Seletores

Existem vários seletores. Leia a documentação a seguir para aprender mais sobre
seletores:

- [CSS Básico -
  MDN](https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/CSS_basico)
- [Seletores -
  MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Seletores_CSS)
- [Combinação de Seletores-
  W3im](http://www.w3im.com/pt/css/css_combinators.html)
- [Pseudo Seletores -
  MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes)

No final da sua pesquisa, você deve saber o que é e como usar:

- Seletor universal
- Seletor de elementos \(de tipo\)
- Seletores de classe
- Seletores ID
- Seletor descendente
- Seletor filho
- Seletores de atributo

## Pseudo-seletores

Os pseudo seletores são palavras chaves que alteram o estado de um elemento. Os
pseudo seletores não são encontrados sozinhos. Estão sempre acompanhados de um
seletor e são precedidos por `:`. Os pseudo seletores ou pseudo classes
apresentam a seguinte sintaxe:

```css
button:hover {
  color: red;
}
```

### :hover

O `:hover` é um pseudo seletor que altera o estilo de um elemento quando passamos
o mouse em cima dele. O uso desse pseudo seletor é bastante comum. Não
precisamos ir muito longe para ver ele sendo usado na prática. Aqui mesmo no LMS
ao realizarmos o login nos deparamos com o seguinte:

![hover](https://user-images.githubusercontent.com/11894994/57649699-489cdb80-759f-11e9-9af3-9159fa166124.gif)

Note que ao passar do mouse os elementos adquirem estilos novos. Isso é feito
através do `:hover`.

### :active

Esse pseudo seletor é utilizado para alterar o estado de links ativos. Mas o que
seriam links ativos? Os links se tornam ativos no momento do clique.

```css
button {
  color: black;
  background-color: yellow;
}

button:active {
  color: white;
  background-color: #ff008f;
}
```

![active](https://user-images.githubusercontent.com/11894994/57649729-59e5e800-759f-11e9-812e-dfaf0184c0f8.gif)

Perceba que no exemplo, o estilo do botão é apenas alterado quando estamos
clicando. Quando não está mais ocorrendo o evento de clique o botão assume o
estilo aplicado sem o pseudo seletor `:active`.

### :focus

O `:focus` é um pseudo seletor que se aplica particularmente aos elementos que
recebem eventos como entrada de texto, ou outros inputs de usuário, como por
exemplo, os inputs e textareas.

```css
input:focus {
  background-color: yellow;
}
```

![focus](https://user-images.githubusercontent.com/11894994/57649768-6f5b1200-759f-11e9-9a09-d62f500aaa5b.gif)

## Regras de cascata e herança

Como vimos, regras CSS diferentes podem ser aplicadas a um número ilimitado de
elementos. Isso pode gerar estilos que entram em conflito: instruções com
diferentes estilos afetando o mesmo elemento. Felizmente O CSS possui um
mecanismo conhecido como **cascata** que rege como os estilos interagem e quais
estilos têm preferência quando há um conflito. Na verdade, esse mecanismo em
cascata é a razão pela qual o CSS tem o seu nome:  _Cascading Style Sheets_ \(em
português: folhas de estilo em cascata\).

Outra característica do CSS é a **herança** de estilos. Herança é o processo
pelo qual algumas instruções CSS aplicadas a um elemento passam automaticamente
para os elementos que estão aninhados \(seus descendentes\).

Leia o artigo a seguir para entender os conceitos de cascata e herança em CSS:

- [Especificidade, Herança e Efeito Cascata - Emanuel G de
  Souza](https://medium.com/emanuelg-blog/entendendo-a-preced%C3%AAncia-de-estilo-em-css-especificidade-heran%C3%A7a-e-efeito-cascata-a437c4929173)

Quando você terminar sua pesquisa, você deve ser capaz de entender os 3 fatores
que determinam o mecanismo de cascata. Em particular, responda o seguinte:

- Qual ordem prevalece para atribuir um estilo? a última? a primeira?
- O que significa que um seletor é mais específico que outro? Dê um exemplo;
- O estilo se aplica com mais ou menos especificidade?
- Como a especificidade é calculada?
- O que isso significa `!important`? Por que **não** devemos usá-lo a menos que
  seja estritamente necessário?
- Todos os estilos em CSS são herdados? Por quê?
- O que é e para que serve `inherit`?

## Valores e unidades

Existe uma grande variedade de valores de CSS, que podem ser expressos com
diferentes unidades. Por exemplo: a altura, largura e margem de um elemento
podem ser definidas em milímetros, centímetros, polegadas ou pixels. A cor pode
ser definida com palavras-chave \(como `red`\), com valores ou com o padrão RGB.

Faça sua pesquisa dos recursos a seguir e aprenda as várias maneiras de
representar valores em CSS:

- [Unidades e
  medidas](https://helio.me/quais-medidas-css-usar-e-quando-usar-8dfeed9f42f5)
- [Unidades - W3](https://www.w3.org/Style/Examples/007/units.pt_BR.html)
- [Cores - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value)
- [Gerador de Cores - W3](https://www.w3schools.com/colors/colors_mixer.asp)

No final desta leitura, você deve saber como responder às seguintes perguntas:

- Dê um exemplo de uma unidade absoluta e uma relativa
- Para que serve `line-height`?
- Para que servem valores em porcentagens? Dê um exemplo
- O tamanho de fonte padrão que os navegadores usam antes de aplicar CSS é...
- Que unidade é `#ff0000`? Que cor representa?
- RGB é uma função?
- Que cor representa `rgb(0,0,255)`?
- Como damos opacidade à cor?
- Quando os valores são usados sem unidades?
- Quais são as recomendações gerais para o uso de unidades?

## Comentários em CSS

Como é uma boa prática comentar seu código `html` e seu código `js`, é
recomendável comentar seu CSS. Comentários em CSS são feitos da seguinte forma:

- O começo é indicado pelos caracteres `/*`. O fim do comentário é indicado por
  `*/`

Vejamos um exemplo:

```text
/ * Comentário no CSS * /
```

## Continuando a página de Grace Hopper da wikipedia

Agora que você sabe mais sobre a profundidade CSS você pode acompanhar a
Palomita no vídeo a seguir no qual ela termina de desenvolver a página de Grace
Hopper, usando uma estrutura semântica e todos os benefícios do CSS para
representar o projeto o mais fiel possível.

[![Grace
Hopper](https://img.youtube.com/vi/CJtJbWs3qjQ/0.jpg)](https://www.youtube.com/watch?v=CJtJbWs3qjQ)
