# Modificando o DOM

* Tipo: `leitura`
* Formato: `individual`
* Duração: `120min`

***

## Objetivos de Aprendizagem

Nesta unidade aprenderemos:

* Como manipular os nós no DOM
* Como criar, adicionar e eliminar nós no DOM
  - `document.createTextNode()`
  - `document.createElement()`
  - `.appendChild()`
  - `.removeChild()`
* Conhecer as seguintes propriedades:
  - `.innerHTML`
  - `.textContent`
  - `.innerText`
  - `.value`
* Conhecer sobre os seguintes métodos:
  - `.replaceChild()`
  - `.insertBefore()`

## Modificando elementos e conteúdo do DOM

No tópico anterior vimos o que é o DOM e como selecionar nós usando JavaScript.
Desta vez vamos usar o DOM para modificar o documento HTML usando JavaScript.

## Criação de nós

O DOM nos oferece uma série de métodos para adicionar nós a árvore de um
documento, os métodos mais básicos são `.createElement()`, para criar um
elemento e `.createTextNode()`, para criar um nós de texto.

Criar e adicionar a uma página um novo elemento é simples, você precisa de
apenas quatro passos:

1. Criar um nó do tipo `Element` que represente o elemento.
2. Criar um nós do tipo `Text` que presente o conteúdo do elemento.
3. Adicionar o nós `Text` como filho do nós `Element`.
4. Adicionar nós `Element` na página.

Este processo de criação de novos nós implica na utilização de três funções de
DOM:

1. `createElement(tag)`

    Cria um nós do tipo `Element` que representa um elemento XHTML cuja a _tag_
    é passada como parâmetro.

2. `createTextNode(conteúdo)`

    Criar um nós do tipo `Text` que armazena o conteúdo de texto dos elementos.

3. `nóPai.appendChild(nóFilho)`

    Adiciona o `nóFilho` dentro do `nóPai`.

Desta maneira, se quiser adicionar um parágrafo no final de um página, é
necessário incluir o seguinte código JavaScript.

```js
// Cria o nó do tipo Element
const paragraph = document.createElement("p");
// Cria o nó do tipo Text
const content = document.createTextNode("Hola Mundo!");
// Adiciona o nó Text como filho do nós Element
paragraph.appendChild(content);
// Adiciona o nó Element como filho da página
document.body.appendChild(paragraph);
```

Temos que lembrar que o DOM é uma interface que conecta o documento HTML com o
JavaScript. É por isso que ao utilizar `.createElement()`, o nó não ficará
visível, ele será uma espécie de fantasma dentro do documento. Isso ocorre da
mesma maneira com a função `.createTextNode()` e o texto passado como parâmetro.
Para que esses elementos sejam visíveis na tela, temos que lembrar de utilizar
alguma função como `.appendChild()` para adicionar esses elementos ao documento
HTML.

## Remover nós do DOM

Como podemos incluir novos filhos em um nó, faz sentido eliminá-los. Para isso,
existe o seguinte método:

### `removeChild()`

Para remover um nó do documento, temos que selecionar o pai do nó e, a partir
daí, remover o nó desejado.

Se não soubermos o pai do nó, podemos selecionar diretamente o nó, obter o pai
\(com `.parentElement`\) e usar `.removeChild()` para excluí-lo.

Sintaxis:

```js
  pai.removeChild(nóParaEliminacao);
```

```js
const container = document.getElementById('container');
const paragraph = document.getElementById('paragraph');
container.removeChild(paragraph);

/*
 * Com o nó selecionado utilizamos '.parentElement'
 * para selecionar o pai. A partir do pai utilizamos
 * '.removeChild()' para eliminar o nó selecionado.
 */

const paragraph = document.getElementById('paragraph');
paragraph.parentNode.removeChild(paragraph);
```

Cuando se elimina un nodo, también se eliminan automáticamente todos los nodos
hijos que tenga, por lo que no es necesario borrar manualmente cada nodo hijo.

## Más funciones para manipulación de DOM

A cima mostramos algumas funções com as quais você pode começar a praticar, mas
é importante mencionar que na hora de programar não existe apenas uma única
maneira de fazer ou uma única solução possível. Pensando nisso vamos te
apresentar alguns outros métodos e propriedade para você praticar.

Os atributos `.textContent` e `.innerHTML` funcionam como propriedades para
obter e modificar o valor de um elemento específico.

### `textContent`

Ao usar `textContent` em um nó, ele mostrará o conteúdo do texto que existe no
nó e seus filhos. Se houver tags HTML, elas serão ignoradas. Se um valor for
atribuído, ele substituirá todo o conteúdo do nó pela _string_ atribuída a ele.
Se a _string_ contiver tags HTML, elas serão interpretadas e exibidas como
texto. As alterações feitas não serão permanentes, o documento retornará ao seu
estado original assim que o site for recarregado.

![textContent](https://user-images.githubusercontent.com/11894994/59518266-b5a3d980-8e9b-11e9-8ee1-1624d0047213.png)

#### innerHTML

Funciona de maneira semelhante ao textContent, mas, além de mostrar o texto que
existe no nó selecionado e nos filhos, ele mostrará as tags HTML que podem
existir. Se um valor for atribuído a ele, o conteúdo do nó será substituído,
incluindo seus filhos, pela sequência de texto atribuída a ele. Ao contrário
do`textContent`, se as tags HTML existirem na _string_ atribuída, elas serão
exibidas no navegador. As alterações feitas não serão permanentes, o documento
retornará ao seu estado original assim que o site for recarregado.

![textContent](https://user-images.githubusercontent.com/11894994/59518324-cf452100-8e9b-11e9-82a0-99a3895f5ad1.png)

No vídeo a seguir, vemos de uma maneira prática, como usar `.innerHTML` e
`.textContent`:

[Modificando, substituindo e excluindo nós](https://www.youtube.com/watch?v=jWpUT_dF8EA)

#### value

A propriedade `value` retorna o valor do atributo `value` de um elemento HTML,
sempre e quando existir a propriedade `value` no elemento. Algunas das _tags_
que contém a propriedade `value` são os elementos de formulário.

Sintaxis

* Retorna a propriedade **value**: `elemento.value`;
* Modifica a propriedade **value**: `elemento.value = texto`;

> Nota: o valor de retorno é uma _string_, que representa o valor do campo de texto.

Você pode ver um exemplo mais claro neste
[pen](https://codepen.io/Si7v4n4/pen/prBzoX?editors=1010#0) .

### insertBefore

 Permite escolher um nó do documento e incluir outro antes dele.

```javascript
pai.insertBefore(novoNo, noDeReferencia);
```

 Se tivéssemos um fragmento de um documento como este:

```html
<div id="container">
    <p>Primeiro parágrafo</p>
    <p>Segundo paragráfo</p>
</div>
```

e quiséssemos adicionar um novo parágrafo antes do segundo, faríamos assim:

```javascript
// Criamos o novo parágrafo com seu texto filho
const newParagraph = document.createElement('p');
const paragraphText = document.createTextNode('Novo parágrafo.');
newParagraph.appendChild(paragraphText);

// Armazenamos em uma variável o pai e em outra variável o segundo parágrafo
const container = document.getElementById('container');
const secondParagraph = container.getElementsByTagName('p')[1];

// Agora inserimos
container.insertBefore(newParagraph, secondParagraph);
```

### replaceChild

Este método é usado para substituir um nó secundário por outro. Tome como
argumentos dois nós: um novo nó e o nó a ser substituído. O nó substituído deve
ser um filho do elemento para o qual o método é chamado.

Sintaxe:

```javascript
    pai.replaceChild(novoNo, noParaSubstituir);
```

Com o mesmo HTML do exemplo de `.insertBefore()`, se quiséssemos substituir o
segundo parágrafo pelo qual criamos, faríamos assim:

```javascript
container.replaceChild(newParagraph, secondParagraph);
```

> Note que tanto `.replaceChild()` tanto quanto `.insertBefore()` esperam que o
> novo nó seja o primeiro argumento.

## Vamos praticar

Nos vídeos a seguir vamos colocar em prática a parte teórica já que eles usam os
métodos como criar, adicionar e eliminar os nós do DOM por meio do Javascript e
assim poder criar páginas dinâmicas. sugerimos que você faça o exercício junto
com o vídeo e se necessário, você pode ir pausando.

[![Criando nós
DOM](https://img.youtube.com/vi/fDz1IgduZxA/0.jpg)](https://www.youtube.com/watch?v=fDz1IgduZxA)

* Este outro vídeo adiciona os nós criados ao DOM.

[![Adicionando nós
DOM](https://img.youtube.com/vi/7MKCrho0nho/0.jpg)](https://www.youtube.com/watch?v=7MKCrho0nho)
