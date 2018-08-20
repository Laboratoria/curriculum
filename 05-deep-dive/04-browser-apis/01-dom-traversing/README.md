# Viagem pelo DOM

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

A criação do *Document Object Model*, o `DOM`, é uma das inovações que mais influenciaram no desenvolvimento de páginas web dinâmicas e de aplicações web mais complexas.

`DOM` permite aos programadores web acessar e manipular as páginas XHTML como se fossem documentos XML. De fato, DOM foi projetado originalmente para manipular de forma mais simples os documentos XML.

Apesar de suas origens, o `DOM` se converteu em uma funcionalidade disponível para a maioria das linguagens de programação (Java, PHP, JavaScript) e cujas únicas diferenças estão na forma de implementá-lo.

Uma das tarefas cotidianas na programação de aplicações web com JavaScript consiste na manipulação de páginas web. Desta maneira, é comum obter o valor armazenado por alguns elementos (por exemplo, os elementos de um formulário), criar um elemento (parágrafos, `<div>`, etc.) de forma dinâmica e adicioná-lo à página, aplicar uma animação a um elemento (que apareça/desapareça, que se mova, etc.).

Todas estas tarefas habituais são muito simples de se fazer graças ao `DOM`. Porém, para poder utilizar as funcionalidades de `DOM` é preciso "transformar" a página original. Uma página HTML normal não é mais que uma sucessão de caracteres e cujo formato é muito difícil de manipular. Por meio dele, os navegadores web transforma automaticamente todas as páginas web em uma estrutura mais eficiente para manipulação.

Esta transformação é realizada por todos os navegadores de maneira automática e permite utilizar as ferramentas do `DOM` de maneira bastante simples. O motivo pelo qual essa transformação é feita internamente é que ela condiciona o comportamento do `DOM` e logo, a maneira como as páginas são manipuladas.

`DOM` transforma todos os documentos XHTML em um conjunto de elementos chamados nós, que estão interligados e representam os conteúdos das páginas web e as relações entre eles. Por sua características, a união de todos os nós se chama "árvore de nós".

A transformação automática da página em uma árvore de nós sempre segue as mesmas regras.

## As tags XHTML se transformam em dois nós

O primeiro é a própria tag e o segundo nó é filho do primeiro e consiste no conteúdo textual da etiqueta.

## Se uma tag XHTML está dentro de outra

O mesmo procedimento anterior é respeitado, mas os nós gerados serão nós filhos de sua tag pai.

Como podemos supor, as páginas XHTMl usuais produzem árvores com milhares de nós. Ainda assim, o processo de transformação é rápido e automático, sendo as funções fornecidas pelo DOM (que veremos mais adiante) são as únicas que permite acessar qualquer nó da página de forma simples e rápida.

A especificação completa de `DOM` define 12 tipos de nós, embora as páginas XHTML usuais possam ser manipuladas utilizando somente quatro ou cinco tipos de nós:

1. `Document`: nó raiz do qual derivam todos os demais nós da árvore.

2. `Element`: representa cada uma das tags XHTML. É o único nó que pode conter atributos e o único do qual podem derivar outros nós.

3. `Attr`: um nó deste tipo é definido para representar cada um dos atributos das tags XHTML, ou seja, um para para atributo=valor. 

4. `Text`: nó que contém o texto contido em uma tag XHTML.

5. `Comment`: representa os comentários incluídos na página XHTML.

Os outros tipos de nós existentes que não vamos considerar são `DocumentType`, `CDataSection`, `DocumentFragment`, `Entity`, `EntityReference`, `ProcessingInstruction` e `Notation`.
