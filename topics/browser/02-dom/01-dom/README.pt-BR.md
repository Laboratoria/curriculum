# Document Object Model (DOM)

* Tipo: `leitura`
* Formato: `individual`
* Duração: `30min`

***

## Objetivos de Aprendizagem

Nesta unidade aprenderemos:

* O que é o DOM e para que nos serve?
* Conhecer as seguintes propriedades:
  - `parentNode`
  - `childNodes`
  - `firstChild`
  - `lastChild`
  - `previousSibling`
  - `previousElementSibling`
  - `nextSibling`
  - `nextElementSibling`
* Conhecer os seguintes métodos:
  - `document.getElementById()`
  - `document.getElementsByTagName()`
  - `document.getElementsByClassName()`
  - `document.querySelector()`
  - `document.querySelectorAll()`

## O que é o DOM?

A criação do _Document Object Model_ o `DOM` é uma das inovações que mais
influênciou o desenvolvimento de sites e de aplicações mais complexas.

`DOM` é uma ferrramente que permite que permite os programadoes a acessar e
manipular as páginas XHTML como se fossem documentos XML. Na verdade, o `DOM`
foi projetado originalmente para manipular o XML de forma mais simples.

Apesar de suas origens, o `DOM` virou uma utilidade disponível para a maioria
das linguagens de programação (Java, PHP, JavaScript) com a única forma sendo a
maneira de implementar.

Uma das tarefas mais comuns da programação web com JavaScript consiste em
manipular as páginas web. Desta forma, é comum obter o valor armazenado em
alguns elementos (por exemplo os elementos de um formulário), criar um elemento
(`<p>`, `<div>`) de forma dinâmica e adicionar ele na página, inserir uma
animação com um elemento (fazer aparecer e desaparecer, fazer se mover, etc).

Todas essas tarefas comuns são muito simples de realizar graças ao `DOM`, sem
dificuldades, para poder realizar estas tarefas é necessário "transformar" a
página original.

Uma página `HTML` não é mais do que uma sequência de caracteres, por isso que é
um formato difícil de manipular, os navegadores web (Chrome, Mozilla, IE, etc)
transformam automaticamente todas as páginas web em uma estrutura mais eficiente
de manipular.

Está transformação é realizada por todos os navegadores de forma automática e
que nos permite utilizar as ferramentas do `DOM` de forma simples.

`DOM` transforma todos os documentos `XHTML` em um conjunto de elementos
chamados `nós`, que estão interconectados e que representam o conteúdo da página
web e a relação entre eles. Por causa de seu formato, a união de todos os nós é
chamado de `árvore de nós` como mostrado na imagem.

Página Web (1)| Árbol de Nodos DOM (2)
-- | --
![Página web][x] | ![DOM][y]  |

[x]:https://user-images.githubusercontent.com/11894994/58907326-48968400-86e4-11e9-87e8-8026b6063636.png

[y]:https://user-images.githubusercontent.com/11894994/58907322-459b9380-86e4-11e9-9677-bb17626dd546.png

## Tipos de Nós

A transformação automática de uma página em uma árvore de nós sempre segue as
mesmas regras.

* `As etiquetas XHTML se transformar em nós`

> O primeira é a própria tag e o segundo nó é o filho do primeiro e consistem no
> conteúdo de texto da tag.

* `Se uma etiqueta XHTML se encontra dentro da outra`

> Segue o mesmo procedimento anterior, mas os nós gerados serão nós filhos das
> tags pai.

Como se pode supor, as páginas XHTML normalmente produzem árvores com milhares
de nós. Mesmo assim, o processo de transformação é rápido e automático, sendo as
funções fornecidas pelo DOM (que serão vistas posteriormente) as únicas que
permitem o acesso a qualquer nó da página de forma simples e imediata.

A especificação completa de `DOM` define 12 tipos de nós, que estão detalhados
abaixo:

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

Embora as páginas XHTML que iremos gerenciar possam ser manipuladas manipulando
apenas quatro ou cinco tipos desses nós:

* `DOCUMENT_NODE`, nó raíz que deriva todos os outros nodes da árvore.

* `ELEMENT_NODE`, representa cada uma das tags XHTML. Podem ser filhos de outro
  nó de tipo _element_ e também ter filhos \(nó _element_ ou nó _text_\).

  ```html
  <html>
    <head></head>
    <body></body>
  </html>

  3 nós de Element -> tags html, head e body
  ```

* `ATTRIBUTE_NODE`, um nó desse tipo é definido para representar cada um dos
  atributos das tags XHTML. Esses nós são sempre filhos de um nó Elemento e não
  podem ter filhos.

  ```html
  <img src="images/logo.png" alt="Logo Laboratoria"/>

  1 nó Element -> tag img
  2 nós Attr -> src e alt
  ```

* `TEXT_NODE`, nó que contém o texto entre uma tag HTML. Esses nós são sempre
  filhos de um nó Element e não podem ter filhos.

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

* `COMMENT_NODE`, representa os comentários incluídos na página XHTML.

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
  2 nós Comment -> <!--Olá, este é um comentário -->
  <!-- Por favor, coloque uma foto -->
  ```

Existem outros tipos de nós que não vamos mostrar aqui, como por exemplo:
`DocumentType`, `CDataSection`, `DocumentFragment`, `Entity`, `EntityReference`,
`ProcessingInstruction` e `Notation`.

## Relação entre nós

Os nós do `DOM` se relacionam entre si, tendo em conta quem é o nós pai, quem
são os irmão e filhos. Assim como você tem irmãos, pais e filhos, **todos os
nós do DOM também tem alguma relação familiar**.

### Analisemos esta imagem

![DOM
Tree](https://user-images.githubusercontent.com/11894994/58907764-4bde3f80-86e5-11e9-8c73-2fa2831dc891.gif)

* A raiz da árvore de nós de qualquer página da web é sempre a mesma: **um nó
  chamado document** que é o objeto `pai` dos demais objetos.
* O nó **html** é aquele pai dos objetos ou nós **head** e **body** \(mas
  **filho** do nó **document**\).
* O objeto ou nó do **body** é o `pai` de **a** e **h1**, portanto, esses
  rótulos são filhos do nó do **body**.
* O nó de texto **My header** é filho do nó **h1** .

### Irmãos de relacionamento

Analisando a mesma imagem acima:

* Os nós `irmãos` referem-se aos nós que possuem o mesmo pai, ou seja, são nós
  do mesmo nível na árvore DOM.
* Os objetos ou nós **head** e **body** são `irmãos`, cujo pai é o objeto ou nó
  **html** .
* O nó de texto **My link** e o nó **attribute** são nós `irmãos`, cujo pai é o
  objeto ou nó **a** . \(Na imagem parece que **attribute** é o irmão do nó
  **a**, mas **a** é pai de **attribute**.\)

## Propriedades dos nós

Primeiro, cada vez que falamos em `nós` na realidade estão nos referindo a um
_objeto_ e como você lembra, os objetos possuem _propriedades e métodos_. Com
isso os `nós` tem também tem propriedades e métodos que irão te ajudar a
identificá-los.

Os nós DOM possuem propriedades básicas, que são:

* **nodeName** , indica o nome do nó.
* **nodeType** , é um número inteiro que descreve o tipo de nó: `1` para tags
  HTML, `3` para nós de tipo de texto, `8` para nós de tipo de comentário, `9`
  para nó de tipo de documento, etc.
* **nodeValue** , é o texto contido em um nó de texto. Esta propriedade é usada
  apenas para nós do tipo 3 e nós do tipo comentário `8`.

## Recapitulando

Prepare seu editor, replique o que Daniel realiza no vídeo a seguir e reforce
seu aprendizado.

[![Navegando no
DOM](https://img.youtube.com/vi/3UE4ndfUQVk/0.jpg)](https://www.youtube.com/watch?v=3UE4ndfUQVk)
