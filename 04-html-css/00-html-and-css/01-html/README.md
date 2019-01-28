# HTML

- Tipo: `leitura`
- Formato: `individual`
- Duração: `4h`

***

## Objetivos de Aprendizagem

* Conhecer os elementos HTML mais comuns
* Entenda o conceito de aninhamento de HTML
* Conheça as diferenças no comportamento bloco e inline de elementos HTML
* Saiba quais são os atributos dos elementos HTML e para que servem
* Conheça elementos HTML semânticos

## O que é HTML?

No decorrer da `Introdução à Programação` você criou seu primeiro site. Você aprendeu a criar um arquivo HTML e vinculá-lo ao seu arquivo JavaScript. Nesta lição, nos aprofundaremos no HTML.

Analisando diretamente a documentação da [Mozilla Developer Network](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started), temos o seguinte:

> HTML \(HyperText Markup Language\) **não** é uma linguagem de programação, é uma _linguagem de marcação_ utilizada para dizer ao seu navegador como estruturar a página web que você visita. A página pode ser tanto complicada como simples quanto o desenvolvedor web desejar que seja.
>
> O HTML consiste em uma série de elementos que você usa para anexar, envolver ou marcar diferentes partes do conteúdo para que apareça ou aja de uma certa maneira. O fechamento das tags pode transformar uma parte do conteúdo dentro do elemento em um link para direcionar à uma outra página web, colocar as palavras em itálico, e assim por diante.

## Anatomia de um elemento HTML

Lembre-se de que, com algumas exceções \(por exemplo `<!DOCTYPE html>`\), os elementos `html` começam com um `tag de abertura ou início` e terminam com um `tag de fechamento (ou fim)`. Por exemplo, o elemento `p` começa com a tag inicial `<p>` e termina com a tag final `</p>`. O texto entre as tags de abertura e fechamento é o _conteúdo_ do elemento.

![Etiqueta de exemplo](https://github.com/Laboratoria/curricula-js/raw/632783f957accef3442934c87cecd254a202f2db/03-interactive-site/00-html-and-css/01-html/img-tag-sample.png?raw=true)

## Aninhamento de HTML

Um elemento pode conter outros elementos ou tags HTML em seu conteúdo. Isso é chamado de _aninhamento_.

Lembre-se da estrutura básica de um documento HTML que estamos usando na maioria dos nossos exercícios e inclua alguns elementos adicionais:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Aninhado</title>
  </head>
  <body>
    <h1>Laboratoria</h1>
    <p>Código <em>que</em> <strong>transforma</strong></p>
  </body>
</html>
```

Observe como certos elementos "aninham" outros. Ou seja, alguns elementos estão "contidos" nos outros. Por exemplo, o elemento `body` tem dois elementos aninhados \(ou filhos\) que são o título `h1` e o parágrafo `p`. Por sua vez, o parágrafo `p` contém dois elementos adicionais \(outras crianças\): `em` ou `strong`.

Podemos visualizar esse conceito de _aninhamento_ de html da seguinte maneira:

![Aninhamento HTML](http://www.mrinitialman.com/Library/HTML/Pictures/HTML-Markup_Basics/html_nesting.png)

Neste exemplo, vemos elementos que já devem ser familiares para você. Você sabe sobre a tag `DOCTYPE`, elementos `head`, `body`, `title`, `h1` e `p` \( se você precisa de uma revisão sobre eles, sugerimos que leia novamente a lição sobre [criar seu primeiro site](https://lms.laboratoria.la/cohorts/spl-2018-05-bc-js-front-end-developer/courses/intro-pt/01-introduction/03-your-first-website) do curso _Introdução à Programação\)_. Alguns elementos adicionais que adicionamos são: o `em` que faz com que seu conteúdo seja exibido como texto em _itálico_ e `strong` que faz com que seu conteúdo seja exibido como texto em _negrito_.

Ao abrir este documento no navegador, teremos o seguinte:

![HTML aninhado](https://github.com/Laboratoria/curricula-js/blob/632783f957accef3442934c87cecd254a202f2db/03-interactive-site/00-html-and-css/01-html/img-nested-html.png?raw=true)

##  Elementos em bloco vs. inline

Vamos voltar para a leitura sobre HTML da [Mozilla Developer Network](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started):

> Há duas categorias importantes no HTML, que você precisa conhecer — elementos em bloco e elementos inline.
>
> **Elementos em bloco** formam um bloco visível na página. Eles aparecerão em uma nova linha logo após qualquer elemento que venha antes dele, e qualquer conteúdo depois de um elemento em bloco também aparecerá em uma nova linha. Elementos em bloco geralmente são elementos estruturais na página que representam, por exemplo: parágrafos, listas, menus de navegação, rodapés etc. Um elemento em bloco não seria aninhado dentro de um elemento inline, mas pode ser aninhado dentro de outro elemento em bloco.
>
> **Elementos inline \(na linha\)** são aqueles que estão contidos dentro de elementos em bloco, envolvem apenas pequenas partes do conteúdo do documento e não parágrafos inteiros ou agrupamentos de conteúdo. Um elemento inline não fará com que uma nova linha apareça no documento: os elementos inline geralmente aparecem dentro de um parágrafo de texto, por exemplo: um elemento `<a>` \(hyperlink\) ou elementos de ênfase como `<em>` ou `<strong>`.

Vamos ver um exemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Aninhado</title>
  </head>
  <body>
    <em>primeiro</em><strong>segundo</strong><em>terceiro</em>
    <p>quarto</p><p>quinto</p><p>sexto</p>
  </body>
</html>
```

Ao visualizar o documento anterior no navegador, teremos:

![Bloco vs. inline](https://github.com/Laboratoria/curricula-js/raw/632783f957accef3442934c87cecd254a202f2db/03-interactive-site/00-html-and-css/01-html/img-block-inline.png?raw=true)

Tanto `em` quanto eles `strong` são elementos online. Portanto, os primeiros três elementos são colocados na mesma linha, um após o outro, sem espaço entre eles. Por outro lado, `p` é um elemento no nível do bloco, então cada elemento aparece em uma nova linha, com espaço acima e abaixo de cada um `p`.

## Elementos HTML

Você tem à sua disposição vários elementos HTML para criar sites na web. Investigue você mesmo \(usando seu excelente parceiro do Google\) e saiba como adicionar o seguinte a um website:

1. Cabeçalhos de títulos e legendas \(dica:  _headings_\)
2. Um link
3. Uma tabela
4. Uma lista
5. Uma imagem
6. Uma linha divisória \(dica:  _horizontal rule_\)
7. Uma data
8. Realçar um texto \(dica: mark\)

Para cada elemento anterior, entenda se ele se comporta como `inline` ou como `block`.

## Atributos

Em sua pesquisa, você certamente se deparou com [o elemento `a` para adicionar um link ao seu site:](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/a) e você deve ter notado que uma série de informações aparece na _tag_ de abertura:

```html
<a href="http://laboratoria.la/" target="_blank" title="Página inicial da Laboratoria">Ir para Laboratoria</a>
```

Essas informações são **atributos**. Os atributos nos fornecem informações adicionais sobre o conteúdo de um elemento que não queremos que apareça no conteúdo atual. Em alguns casos, eles adicionam recursos e/ou comportamento ao seu elemento HTML. Os atributos aparecem na **tag de abertura do** elemento e consistem em duas partes: um nome e um valor, separados por um sinal de igual \(`=`\).

No caso do exemplo anterior, podemos visualizar três atributos: o atributo `href`, o atributo `target` e o atributo `title`.

* O atributo `href` especifica o endereço da web para o qual você deseja que o link aponte; isto é, aonde o navegador navega quando é clicado. Neste exemplo, vemos que aponta para a página inicial da Laboratoria: [http://laboratoria.la/](http://laboratoria.la/)
* O atributo `target` especifica o contexto de navegação que será usado para exibir o link. Por exemplo, `target="_blank"` mostrará o link em uma nova guia. Se você quiser mostrar o link na aba atual, apenas omita este atributo.
* O atributo `title` especifica informações extras sobre o link, como qual página você está vinculando. No nosso exemplo, diz "Página inicial da Laboratoria". Isso aparecerá como informação quando o mouse estiver sobre o link.

## Atributo _style_

Existem muitos atributos comuns a todos os elementos html e existem atributos específicos associados a um determinado elemento. Um atributo que se aplica a quase todos os elementos html é o atributo `style` que permite dar estilos ao seu elemento. Por exemplo, se quisermos que o conteúdo dentro de um elemento `p` seja vermelho em um fundo amarelo e com uma borda preta, fazemos:

```html
<p style="color:red; background-color: yellow; border: 1px solid black;">Código <em>que</em> <strong>transforma</strong></p>
```

Ao visualizar o documento anterior no navegador, teremos:

![Exemplo de estilo](https://github.com/Laboratoria/curricula-js/raw/632783f957accef3442934c87cecd254a202f2db/03-interactive-site/00-html-and-css/01-html/img-style-attribute.png?raw=true)

Um atributo de estilo pode conter uma ou mais instruções. Cada instrução é composta de uma **propriedade** \(como cor\) seguida por dois pontos e um **valor** \(como vermelho\). Quando temos mais de uma declaração, cada uma deve ser separada por ponto e vírgula \(`;`\). Por exemplo: `"color:red; background-color: yellow;"`.

Há muitos aspectos que podem ser influenciados pelo estilo. Por exemplo, a propriedade `display` controla se um item é exibido como um bloco ou em linha, ou até mesmo não exibido:

```html
<p>
  Um texto pode ser <strong>em linha</strong>,
  <strong style="display: block">como bloco</strong>, y
  <strong style="display: none">ou oculto</strong>.
</p>
```

A visão no navegador disto seria:

![Exemplo de estilo](https://github.com/Laboratoria/curricula-js/raw/632783f957accef3442934c87cecd254a202f2db/03-interactive-site/00-html-and-css/01-html/img-display.png?raw=true)

O texto _"em linha"_ é exibido em linha \(ou seja, na mesma linha do texto anterior _"Um texto pode ser exibido"_ \) porque lembramos que o elemento _strong_ é do tipo em linha. O texto _"como um bloco"_ terminará em sua própria linha, uma vez que os elementos do tipo bloco não são mostrados de acordo com o texto ao redor. Lembre-se de que quando um item é do tipo bloco, ele aparecerá em uma nova linha de qualquer conteúdo que tenha vindo antes, e qualquer conteúdo que vier depois também aparecerá em uma nova linha. O texto _"ou oculto"_ não _é_ exibido porque é atribuído o valor de `none` para `display` impedir que um item apareça na tela. Esta é uma maneira de esconder elementos.

Na próxima lição sobre `css` aprofundaremos o conceito de estilizar seus elementos html.

## Tags vazias

Em sua pesquisa, você certamente se deparou com [o elemento `<img>` para adicionar uma imagem ao seu site](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/img) e você notou que ele não tem uma tag de fechamento e, portanto, não tem "conteúdo":

```html
<img src="http://cde.2.trome.pe/ima/0/1/1/8/5/1185397.jpg">
```

Algumas tags não contêm conteúdo diretamente; em vez disso, eles recebem uma _fonte_ da qual obter o conteúdo. Isto é o que acontece com o elemento `img`. O atributo `src` fornece o caminho do conteúdo. Neste caso, ao ir para o endereço [http://cde.2.trome.pe/ima/0/1/1/8/5/1185397.jpg](http://cde.2.trome.pe/ima/0/1/1/8/5/1185397.jpg) vamos encontrar a foto de Mariana com Mark e Barack :\)

![Foto de Mari](http://cde.2.trome.pe/ima/0/1/1/8/5/1185397.jpg)

Outro item que não tem uma tag de fechamento é `br`. [Leia a documentação do MDN sobre `br`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/br). Para que serve `br`?

## Comentários em HTML

Assim como podemos comentar nosso código `javascript` para torná-lo mais compreensível, também podemos adicionar comentários ao nosso código HTML. Para definir um comentário em um arquivo HTML, usamos os marcadores `<!--` para abrir o comentário e `-->` para fechá-lo.

```html
<!-- Isto é um comentário. Não será visto na página, mas sim em meu código. -->
```

## Recriando a página de Grace Hopper da Wikipédia

Agora que você tem uma ideia dos elementos `html` mais comuns, seu comportamento \(em linha ou em bloco\) e seus principais atributos, Michelle explicará como construir uma réplica da [página da Wikipédia de Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper) :

[![Grace Hopper](https://img.youtube.com/vi/9w5ITAr2hlQ/0.jpg)](https://www.youtube.com/watch?v=9w5ITAr2hlQ)

## Os elementos `div`e`span`

Muitas vezes, ao criar nossa estrutura HTML, torna-se necessário "agrupar" elementos para dividir nossa página web em seções ou partes lógicas. Por exemplo, se no _footer_ \(ou rodapé\) do nosso site, queremos mostrar os ícones de nossas redes sociais com links de contato, é útil agrupar todos os ícones em uma seção e os links em outra seção, e que ambos os grupos estejam contidos no _footer_.

Para fazer esses agrupamentos, podemos usar os elementos `div` e `span`. Os elementos `div` e `span` são como "contêineres" vazios que preenchemos com outros elementos e conteúdo.

* O elemento div define uma divisão ou uma seção em um documento HTML. É usado para agrupar elementos de **bloco**. É frequentemente usado como um contêiner para outros elementos. A `div` é um bloco, o que significa que há uma quebra de linha antes e depois.
* O elemento `span` é usado como um contêiner para textos. É do tipo **em linha**; isto é, aparece entre as linhas, como parte de um parágrafo.

Vejamos um exemplo:

```html
<!DOCTYPE html>
<html>
  <body>
    <div style="background-color: green; color: white">
      <h2>Cidade do México</h2>
      <p>A Cidade do México, anteriormente conhecida como Distrito Federal,
        é uma das 32 unidades federativas do México, assim como a capital
        dos <span style="color: yellow">Estados Unidos Mexicanos</span>.
      </p>
    </div>
    <div style="background-color: red; color: white">
      <h2>Lima</h2>
      <p>Lima é a capital da <span style="color: yellow">República do
        Perú</span> e da província homônima. Situa-se na costa central do país,
        às magens do Oceano Pacífico, contendo uma extensa e populosa
        área urbana conhecida como Lima Metropolitana, cercada pelo
        deserto costeiro e extendida sobre os vales dos rios Chillón,
        Rímac e Lurín.
      </p>
    </div>
    <div style="background-color: blue; color: white">
      <h2>Santiago</h2>
      <p>Santiago, chamada também de Santiago do Chile, é a capidal do
        <span style="color: yellow">Chile</span> e da região Metropolitana
        de Santiago. É o principal núcleo urbano do país e sua área
        metropolitana também é conhecida pelo nome de Grande Santiago.
      </p>
    </div>
  </body>
</html>
```

Ao visualizar o exemplo anterior no navegador, temos:

![Div e Span](https://github.com/Laboratoria/curricula-js/raw/632783f957accef3442934c87cecd254a202f2db/03-interactive-site/00-html-and-css/01-html/img-div-and-span.png?raw=true)

Veja como agrupamos tudo relacionado a um país em um `div`. Isso é útil porque ele cria seções que seguem uma ordem lógica. Mas, mais importante, ter essas seções separadas permite que você forneça estilos diferentes para cada seção: a cor do plano de fundo e a cor da fonte variam para cada país. O mesmo acontece com as palavras que mostramos em amarelo. Graças a `span` nós podemos fazer com que certas partes do texto tenham um estilo diferente.

## HTML semântico

Como vimos, `div` é um excelente recurso para agrupar o conteúdo de uma maneira lógica e com a capacidade de fornecer estilos específicos a determinadas seções. Por muitos anos, `div` usado como o único recurso para agrupar conteúdo. No entanto, muitos sites tendem a ter uma estrutura semelhante e conter elementos comuns. Por exemplo, quase todos os produtos na Web têm um cabeçalho, um menu de navegação, um conteúdo principal, um conteúdo secundário, um rodapé etc.

Revendo a documentação do MDN sobre [estrutura e documentação da web](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure), podemos extrair:

> Em nosso código HTML, podemos criar seções de conteúdo baseadas em sua funcionalidade - utilizando elementos que representam diferentes secções do conteúdo descrito acima, sem ambiguidades, para que tecnologias assistivas e leitores de tela possam reconhecer esses elementos e ajudar em tarefas como "encontrar o menu de navegação" ou "encontrar o conteúdo principal".

Para implementar essas seções semânticas, o HTML possui tags apropriadas que podemos usar para representar essas seções. Verifique o link anterior e investigue o uso dos seguintes elementos semânticos:

* `<header>`
* `<nav>`
* `<main>`
* `<aside>`
* `<article>`
* `<section>`
* `<footer>`
