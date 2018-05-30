# 01 - DOM

## Document Object Model \(DOM\)

* Tipo: `leitura`
* Formato: `ritmo próprio`
* Duração: `30min`

### Objetivos de Aprendizagem

Nesta unidade aprenderemos:

* O que é o DOM e para que nos serve?
* Conhecer as seguintes propriedades:
  * `parentNode`
  * `childNodes`
  * `firstChild`
  * `lastChild`
  * `previousSibling`
  * `previousElementSibling`
  * `nextSibling`
  * `nextElementSibling`
* Conhecer os seguintes métodos:
  * `document.getElementById()`
  * `document.getElementsByTagName()`
  * `document.getElementsByClassName()`
  * `document.querySelector()`
  * `document.querySelectorAll()`

### O que é o DOM?

Nesta [leitura](http://librosweb.es/libro/javascript/capitulo_5/arbol_de_nodos.html) , podemos ver o que é o DOM. Esta informação é um extrato da LibrosWeb, pioneira na criação de conteúdo educacional para desenvolvimento web.

### Navegando no DOM \(DOM Tree\)

Cada tag wrapper e texto do documento HTML é o que é chamado de nó DOM.

Cada um dos nós é um **objeto** e, como nos lembramos, os objetos possuem **propriedades e métodos** . Esses objetos são organizados em uma estrutura de árvore, na qual o próprio documento HTML é a raiz da árvore de todos os nós.

| Website \(1\) | Árvore de nós do DOM\(2\) |
| --- | --- |
| [![Pagina web](https://camo.githubusercontent.com/6cae18aa784cf8e991153f5134c432bbe1543dc9/68747470733a2f2f707265766965772e6962622e636f2f6b515a476a352f7061675f5765625f53656e63696c6c612e706e67)](https://camo.githubusercontent.com/6cae18aa784cf8e991153f5134c432bbe1543dc9/68747470733a2f2f707265766965772e6962622e636f2f6b515a476a352f7061675f5765625f53656e63696c6c612e706e67) | [![DOM](https://camo.githubusercontent.com/7a21f3101ff04aa3d49b4bcc256ea71b70a44317/68747470733a2f2f707265766965772e6962622e636f2f6472766478512f726570726573656e746163696f6e646f6d2e706e67)](https://camo.githubusercontent.com/7a21f3101ff04aa3d49b4bcc256ea71b70a44317/68747470733a2f2f707265766965772e6962622e636f2f6472766478512f726570726573656e746163696f6e646f6d2e706e67) |

No esquema anterior \(2\), cada retângulo representa um nó \(objeto\) DOM, e as setas indicam relações familiares \(pai - filhos - irmãos\) entre nós. Sim, os nós têm relacionamentos familiares. Assim como você tem irmãos, pai ou filhos, **os nós do DOM também têm um relacionamento familiar** .

#### Relacionamento pais e filhos

**Analisemos esta imagem**

![&#xC1;rvore DOM](https://camo.githubusercontent.com/a36bf4c86203fbebd9aaf0a5c92dd40b5b9782bf/68747470733a2f2f7777772e77337363686f6f6c732e636f6d2f6a732f7069635f68746d6c747265652e676966)

* A raiz da árvore de nós de qualquer página da web é sempre a mesma: **um nó chamado document** que é o objeto `pai` dos demais objetos.
* O nó **html** é aquele pai dos objetos ou nós **head** e **body** \(mas **filho** do nó **document**\).
* O objeto ou nó do **body** é o `pai` de **a** e **h1**, portanto, esses rótulos são filhos do nó do **body**.
* O nó de texto **My header** é filho do nó **h1** .

**Irmãos de relacionamento**

Analisando a mesma imagem acima:

* Os nós `irmãos` referem-se aos nós que possuem o mesmo pai, ou seja, são nós do mesmo nível na árvore DOM.
* Os objetos ou nós **head** e **body** são `irmãos`, cujo pai é o objeto ou nó **html** .
* O nó de texto **My link** e o nó **attribute** são nós `irmãos`, cujo pai é o objeto ou nó **a** . \(Na imagem parece que **attribute** é o irmão do nó **a**, mas **a** é pai de **attribute**.\)

#### Os 2 tipos de nós mais usados 

Como você pode ver, a transformação da página da Web em uma árvore DOM gera dois tipos de nós: o primeiro é `nó do tipo elemento` e corresponde a uma tag HTML e o segundo é `nó de tipo texto` que contém o texto delimitado por uma tag HTML.

Então, a seguinte tag HTML:

```markup
<title>Página única</title>
```

gera os seguintes nós:

* `Nó de tipo elemento` pelo rótulo `title`.
* `Nó de tipo texto` para o texto `"Página única"`

Portanto, temos 1 nó de tipo elemento e 1 nó de tipo texto 

![](https://camo.githubusercontent.com/406bc43cdecc07177bb296f6679b7146648468ca/68747470733a2f2f696d6167652e6962622e636f2f67726b6445352f6e6f646f7469706f5f546578746f5f4e6f646f7469706f5f456c656d656e746f2e706e67)

Da mesma forma, a tag HTML:

```markup
<p> Esta página é <strong> muito simples </strong></p>
```

gera os seguintes nós:

* `Nó de tipo elemento` correspondente ao rótulo `p`.
* `Nó de tipo texto` para o conteúdo textual `"Esta página é"`.
* Como o conteúdo da tag `p` inclui uma tag `strong`, ele é transformado em um `nó de tipo elemento`.
* Finalmente, o conteúdo textual se torna um `nó de tipo texto` pelo texto `"muito simples"`.

Portanto, você tem 2 nós de tipo elemento e 2 nós de tipo texto.

![](https://camo.githubusercontent.com/2a1e05c3a59e3e821be53dbf078d7bf4f24591ec/68747470733a2f2f696d6167652e6962622e636f2f644642506e512f6e6f646f7469706f5f546578746f5f4e6f646f7469706f5f456c656d656e746f322e706e67)

**Algumas regras**

* Tags HTML sempre serão nós de tipo elemento.
* Se dentro das tags HTML houver conteúdo textual, será formado um nó de tipo texto, que por sua vez será um nó filho do primeiro.
* Se uma tag HTML estiver dentro de outra, o mesmo procedimento é seguido, mas os nós gerados serão nós filhos de sua tag pai.

**Mais tipos de nós**

Até agora, indicamos dois tipos de nós: de tipo elemento \(element\) e de tipo texto \(text\). No entanto, a especificação completa do DOM define 12 tipos de nós indicados abaixo:

| Nome do Nó | Significado | Tipo de nó |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
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

A partir dessa lista, concentrar-nos-emos nos cinco nós mais comuns com os quais podemos manipular páginas da Web por meio do DOM.

Vejamos mais especificamente suas características.

* Nó Element: representa cada uma das tags HTML. Podem ser filhos de outro nó de tipo _element_ e também ter filhos \(nó _element_ ou nó _text_\).

  ```markup
  Tags HTML

  <html></html><head></head><body></body><h1></h1><p></p><div></div>
  <form></form><a></a><img/><strong></strong>
  ```

  ```markup
  Nó Element com filhos Element

  <html>
    <head></head>
    <body></body>
  </html>

  3 nós de Element -> tags html, head e body
  ```

  ```markup
  Nó Element com filho text

  <h1>Olá,mundo</h1>

  1 nó Element -> tag h1
  1 nó Text -> olá mundo
  ```

* Nó Atr: um nó desse tipo é definido para representar cada um dos atributos das tags HTML. Esses nós são sempre filhos de um nó Elemento e não podem ter filhos.

  ```markup
  <img src="images/logo.png" alt="Logo Laboratoria"/>

  1 nó Element -> tag img
  2 nós Attr -> src e alt
  ```

* Nó Text: nó que contém o texto entre uma tag HTML. Esses nós são sempre filhos de um nó Element e não podem ter filhos.

  ```markup
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

* Nó Comment: representa os comentários incluídos na página HTML.

  ```markup
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

* Nó Document: representa o nó raiz do qual todos os outros nós na árvore DOM são derivados. Ele não tem pai e só tem um filho, que é o elemento HTML.

### Propriedades dos nós

Os nós DOM possuem propriedades básicas, que são:

* **nodeName** , indica o nome do nó.
* **nodeType** , é um número inteiro que descreve o tipo de nó: `1` para tags HTML, `3` para nós de tipo de texto, `8` para nós de tipo de comentário, `9` para nó de tipo de documento, etc.
* **nodeValue** , é o texto contido em um nó de texto. Esta propriedade é usada apenas para nós do tipo 3 e nós do tipo comentário `8`.

### Selecionando Elementos DOM

Nesta [leitura](http://librosweb.es/libro/javascript/capitulo_5/acceso_directo_a_los_nodos.html) , vemos como selecionar nós e o que é um nó no DOM.

### Recapitulando

Finalmente, veja o seguinte vídeo da Lulu onde ela menciona os conceitos de DOM.

[![Revis&#xE3;o DOM](https://camo.githubusercontent.com/bf7878ba954c96eea8a9d71705804d974d2939a1/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f376948753773353476496b2f302e6a7067)](https://www.youtube.com/watch?v=7iHu7s54vIk)

[![Visitando o DOM](https://camo.githubusercontent.com/e0376aceb048832e7a738464a5add1bd15d23e66/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f44393349505f6e366b6a382f302e6a7067)](https://www.youtube.com/watch?v=D93IP_n6kj8)

Também temos o [link](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n#Qu.C3.A9_es_el_DOM.3F) para a documentação oficial do Mozilla sobre o que é o DOM.

Outro [link](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n#C.C3.B3mo_se_accede_al_DOM.3F) de como acessar elementos do DOM com JS da documentação oficial.

