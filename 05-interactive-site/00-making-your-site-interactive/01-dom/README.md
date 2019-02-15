# Document Object Model (DOM)

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

## Objetivos de Aprendizagem

Nesta unidade aprenderemos:

- O que é o DOM e para que nos serve?
- Conhecer as seguintes propriedades:
  * `parentNode`
  * `childNodes`
  * `firstChild`
  * `lastChild`
  * `previousSibling`
  * `previousElementSibling`
  * `nextSibling`
  * `nextElementSibling`
- Conhecer os seguintes métodos:
  * `document.getElementById()`
  * `document.getElementsByTagName()`
  * `document.getElementsByClassName()`
  * `document.querySelector()`
  * `document.querySelectorAll()`

***

## O que é o DOM?

Nesta
[leitura](https://tableless.com.br/entendendo-o-dom-document-object-model/) ,
podemos ver o que é o DOM.

## Navegando no DOM (DOM Tree)

Cada tag wrapper e texto do documento HTML é o que é chamado de nó DOM.

Cada um dos nós é um **objeto** e, como nos lembramos, os objetos possuem
**propriedades e métodos** . Esses objetos são organizados em uma estrutura de
árvore, na qual o próprio documento HTML é a raiz da árvore de todos os nós.

Página Web (1)| Árbol de Nodos DOM (2)
-- | --
![Página web][x] | ![DOM][y]  |

[x]:https://preview.ibb.co/kQZGj5/pag_Web_Sencilla.png

[y]:https://preview.ibb.co/drvdxQ/representaciondom.png

No esquema anterior \(2\), cada retângulo representa um nó \(objeto\) DOM, e as
setas indicam relações familiares \(pai - filhos - irmãos\) entre nós. Sim, os
nós têm relacionamentos familiares. Assim como você tem irmãos, pai ou filhos,
**os nós do DOM também têm um relacionamento familiar** .

### Relação pais e filhos

#### Vamos analisar está imagem

![Árvore DOM](https://www.w3schools.com/js/pic_htmltree.gif)

- A raiz da árvore de nós de qualquer página da web é sempre a mesma: **um nó
  chamado document** que é o objeto `pai` dos demais objetos.
- O nó **html** é aquele pai dos objetos ou nós **head** e **body** \(mas
  **filho** do nó **document**\).
- O objeto ou nó do **body** é o `pai` de **a** e **h1**, portanto, esses
  rótulos são filhos do nó do **body**.
- O nó de texto **My header** é filho do nó **h1** .

#### Irmãos de relacionamento

Analisando a mesma imagem acima:

- Os nós `irmãos` referem-se aos nós que possuem o mesmo pai, ou seja, são nós
  do mesmo nível na árvore DOM.
- Os objetos ou nós **head** e **body** são `irmãos`, cujo pai é o objeto ou nó
  **html** .
- O nó de texto **My link** e o nó **attribute** são nós `irmãos`, cujo pai é o
  objeto ou nó **a** . \(Na imagem parece que **attribute** é o irmão do nó
  **a**, mas **a** é pai de **attribute**.\)

### Os 2 tipos de nós mais usados

Como você pode ver, a transformação da página da Web em uma árvore DOM gera dois
tipos de nós: o primeiro é `nó do tipo elemento` e corresponde a uma tag HTML e
o segundo é `nó de tipo texto` que contém o texto delimitado por uma tag HTML.

Então, a seguinte tag HTML:

```html
<title>Página única</title>
```

gera os seguintes nós:

- `Nó de tipo elemento` pelo rótulo `title`.
- `Nó de tipo texto` para o texto `"Página única"`

Portanto, temos 1 nó de tipo elemento e 1 nó de tipo texto

![nó tipo texto - nó tipo
elemento](https://image.ibb.co/grkdE5/nodotipo_Texto_Nodotipo_Elemento.png)

Da mesma forma, a tag HTML

```html
<p> Esta página é <strong> muito simples </strong></p>
```

gera os seguintes nós:

- `Nó de tipo elemento` correspondente ao rótulo `p`.
- `Nó de tipo texto` para o conteúdo textual `"Esta página é"`.
- Como o conteúdo da tag `p` inclui uma tag `strong`, ele é transformado em um
  `nó de tipo elemento`.
- Finalmente, o conteúdo textual se torna um `nó de tipo texto` pelo texto
  `"muito simples"`.

Portanto, você tem 2 nós de tipo elemento e 2 nós de tipo texto.

![nó tipo texto - nó tipo
elemento](https://image.ibb.co/dFBPnQ/nodotipo_Texto_Nodotipo_Elemento2.png)

#### Algumas regras

- Tags HTML sempre serão nós de tipo elemento.
- Se dentro das tags HTML houver conteúdo textual, será formado um nó de tipo
  texto, que por sua vez será um nó filho do primeiro.
- Se uma tag HTML estiver dentro de outra, o mesmo procedimento é seguido, mas
  os nós gerados serão nós filhos de sua tag pai.

#### Mais tipos de nós

Até agora, indicamos dois tipos de nós: de tipo elemento \(element\) e de tipo
texto \(text\). No entanto, a especificação completa do DOM define 12 tipos de
nós indicados abaixo:

| Nome do Nó | Significado | Tipo de Nó |
| :--- | :---: | ---: |
| ELEMENT\_NODE | Nó do tipo `Element` | 1 |
| ATTRIBUTE\_NODE | Nó do tipo `Attr` | 2 |
| TEXT\_NODE | Nó do tipo `Text` | 3 |
| CDATA\_SECTION\_NODE | Nó do tipo `CDATASection` | 4 |
| ENTITY\_REFERENCE\_NODE | Nó do tipo `EntityReference` | 5 |
| ENTITY\_NODE | Nó do tipo `Entity` | 6 |
| PROCESSING\_INSTRUCTION\_NODE | Nó do tipo `ProcessingInstruction` | 7 |
| COMMENT\_NODE | Nó do tipo `Comment` | 8 |
| DOCUMENT\_NODE | Nó do tipo `Document` | 9 |
| DOCUMENT\_TYPE\_NODE | Nó do tipo `DocumentType` | 10 |
| DOCUMENT\_FRAGMENT\_NODE | Nó do tipo `DocumentFragment` | 11 |
| NOTATION\_NODE | Nó do tipo `Notation` | 12 |

A partir dessa lista, concentrar-nos-emos nos cinco nós mais comuns com os quais
podemos manipular páginas da Web por meio do DOM.

Vejamos mais especificamente suas características.

- Nó Element: representa cada uma das tags HTML. Podem ser filhos de outro nó de
  tipo _element_ e também ter filhos \(nó _element_ ou nó _text_\).

  ```html
  Tags HTML

  <html></html><head></head><body></body><h1></h1><p></p><div></div>
  <form></form><a></a><img/><strong></strong>
  ```

  ```html
  Nó Element com filhos Element

  <html>
    <head></head>
    <body></body>
  </html>

  3 nós de Element -> tags html, head e body
  ```

  ```html
  Nó Element com filho text

  <h1>Olá,mundo</h1>

  1 nó Element -> tag h1
  1 nó Text -> olá mundo
  ```

- Nó Atr: um nó desse tipo é definido para representar cada um dos atributos das
  tags HTML. Esses nós são sempre filhos de um nó Elemento e não podem ter
  filhos.

  ```html
  <img src="images/logo.png" alt="Logo Laboratoria"/>

  1 nó Element -> tag img
  2 nós Attr -> src e alt
  ```

- Nó Text: nó que contém o texto entre uma tag HTML. Esses nós são sempre filhos
  de um nó Element e não podem ter filhos.

  ```html
  <h1>Futuramente eu serei uma programadora da Laboratoria</h1>
  <h2>O que devo fazer?</h2>
  <ul>
    <li>Mentalidade do crescimento</li>
    <li>Praticar muito</li>
    <li>Autoaprendizagem e perguntar sempre</li>
  </ul>

  6 Nós Element -> tags h1, h2, ul, li,
  5 nós Text -> 'Futuramente eu serei uma programadora da Laboratoria',
  'O que devo fazer?', 'Mentalidade de crescimento',
  'praticar muito', 'Autoaprendizagem e perguntar sempre'
  ```

- Nó Comment: representa os comentários incluídos na página HTML.

  ```html
  <html>
    <head>
      <title>Página única</title>
    </head>
    <body>
       <!-- Olá, este é um comentário -->
      <h1>Olá mundo</h1>
       <!-- Por favor, coloque uma foto -->
      <img  src="images/logo.png"  alt="Logo Laboratoria"/>
    </body>
  </html>

  6 Nós Element -> tag html, head, title, body, h1, img
  2 nós Text -> 'Página simples', 'Olá mundo'
  2 nós Attr -> src e alt
  2 nós Comment -> <!--Olá, este é um comentário -->  <!-- Por favor, coloque uma
    foto -->
  ```

- Nó Document: representa o nó raiz do qual todos os outros nós na árvore DOM
  são derivados. Ele não tem pai e só tem um filho, que é o elemento HTML.

## Propriedades dos nós

Os nós DOM possuem propriedades básicas, que são:

- **nodeName** , indica o nome do nó.
- **nodeType** , é um número inteiro que descreve o tipo de nó: `1` para tags
  HTML, `3` para nós de tipo de texto, `8` para nós de tipo de comentário, `9`
  para nó de tipo de documento, etc.
- **nodeValue** , é o texto contido em um nó de texto. Esta propriedade é usada
  apenas para nós do tipo 3 e nós do tipo comentário `8`.

## Recapitulando

Finalmente, veja os seguintes vídeos do Rafa e do Daniel, onde eles mencionam os
conceitos de DOM.

[![Selecionando Elementos do
DOM](https://img.youtube.com/vi/p6bFYISoD3s/hqdefault.jpg)](https://www.youtube.com/watch?v=p6bFYISoD3s)

[![Manipulando o HTML (parte
1)](https://i.ytimg.com/vi/6mzK28lEZsI/hqdefault.jpg)](https://www.youtube.com/watch?v=6mzK28lEZsI)

[![Manipulando o HTML (parte
2)](https://i.ytimg.com/vi/fDz1IgduZxA/hqdefault.jpg)](https://www.youtube.com/watch?v=fDz1IgduZxA)

[![Manipulando o HTML (parte
3)](https://i.ytimg.com/vi/7MKCrho0nho/hqdefault.jpg)](https://www.youtube.com/watch?v=7MKCrho0nho)
