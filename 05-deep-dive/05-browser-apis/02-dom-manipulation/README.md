# Manipulação do DOM

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

Uma vez construído automaticamente a árvore completa de nós do DOM, já é possível utilizar as funções DOM para acessar de maneira direta qualquer nó da árvore. Como acessar um nó da árvore equivale a acessar "um pedaço" da página, uma vez construída a árvore já é possível manipular de forma simples a página: acessar o valor de um elemento, estabelecer o valor de um elemento, mover um elemento da página, criar e adicionar novos elementos, etc.

DOM fornece dois métodos alternativos para acessar um nó específico: acesso por meios de seus nós pais e acesso direto.

As funções que o DOM disponibiliza para acessar um nó por meio de seus nós pais consistem em acessar o nó raiz da página e depois seus nós filhos e os nós filhos desses filhos e assim sucessivamente até o último nó folha contendo o nó procurado. Porém, quando queremos acessar um nó específico, é muito mais rápido acessar diretamente esse nó e não chegar até ele caminhando por todos os seus nós pais.

Por essa razão, não vamos apresentar as funções necessárias para o acesso hierárquico dos nós e mostraremos somente as que permitem acesso os nós de forma direta.

Por fim, é importante lembrar que o acesso aos nós, sua modificação e sua eliminação somente são possíveis quando a árvore do DOM estiver construída completamente, ou seja, depois que a página XHTML estiver carregada completamente. Mais adiante veremos como garantir que um código JavaScript só seja executado quando o navegador tenha carregado toda a página XHTML.

## getElementsByTagName()

Como acontece com todas as funções que o DOM disponibiliza, a função `getElementsByTagName` possui um nome comprido, mas que o deixa autoexplicativo. 

A função `getElementsByTagName(nomeDaTag)` obtém todos os elementos da página XHTML cuja tag seja igual ao parâmetro que é passado na função. 

O exemplo seguinte mostra como obter todos os parágrafos de uma página XHTML:

```js
var paragrafos = document.getElementsByTagName("p");
```
O valor que indicamos antes do nome da função (neste caso, `document`) é o nó a partir do qual será feita a busca dos elementos. Neste caso, como queremos obter todos os parágrafos da página, utilizamos o valor `document` como ponto de partida da busca.

O valor que a função retorna é um vetor com todos os nós que cumprem a condição de que sua tag coincida com o parâmetro informado. O valor retornado é um vetor de nós DOM, não um array de cadeias de texto ou um vetor de objetos normais. Por outro lado, devemos processar cada valor do vetor da maneira que é mostrada nas seções a seguir.

Desta maneira, podemos obter o primeiro parágrafo da página da seguinte forma:

```js
var primeiroParagrafo = paragrafos[0];

for(var i = 0; i < paragrafos.length; i++) {
  var paragrafo = paragrafos[i];
}
```

Da mensa forma, poderíamos percorrer todos os parágrafos da página.

A função `getElementsByTagName()` pode ser aplicada de forma recursiva sobre cada um dos nós retornados pela função. No exemplo a seguir, são obtidos todos os links do primeiro parágrafo da página:

```js
var paragrafo = document.getElementsByTagName("p");
var primeiroParagrafo = paragrafo[0];
var links = primerParrafo.getElementsByTagName("a");
```

## getElementsByName()

A função `getElementsByName()` é similar à anterior, mas neste caso buscamos os elementos cujo atributo `name` seja igual ao parâmetro informado. No exemplo a seguir, obtêm-se diretamente o único parágrafo com o nome indicado:

```js
var paragrafoEspecial = document.getElementsByName("especial");
```

```html
<p name="prova">...</p>
<p name="especial">...</p>
<p>...</p>
```

Normalmente o atributo `name` é único para os elementos HTML que o definem e, portanto, é um método muito prático para acessar diretamente o nó desejado. No caso dos elementos HTML `radiobutton`, o atributo `name` é comum a todos os `radiobutton`'s que estejam relacionados, motivo pelo qual a função retorna uma coleção de elementos.

O Internet Explorer 6.0 não implementa de maneira correta esta função, já que só a considera para os elementos do tipo `<input>` e `<img>`. Além disso, também considera os elementos cujo atributo `id` seja igual ao parâmetros da função.

## getElementById()

A função `getElementById()` é a mais utilizada quando desenvolvemos aplicações web dinâmicas. É a função preferida para acessar diretamente um nó e poder ler suas propriedades.

A função `getElementById()` retorna o elemento XHTML cujo atributo `id` coincide com o parâmetro informando na função. Como o atributo `id` deve ser único para cada elemento de uma mesma página, a função devolve somente o nó desejado.

```js
var cabecalho = document.getElementById("cabecalho");
```

```html
<div id="cabecalho">
  <a href="/" id="logo">...</a>
</div>
```

A função `getElementById()` é tão importante e tão utilizada em todas as aplicações web que quase todos os exemplos e exercícios a seguir a utilizam constantemente.

Internet Explorer 6.0 também interpreta incorretamente esta função, já que devolve também aqueles elementos cujo atributo `name` coincida com o parâmetro informado na função.

Acessar todos os nós e suas propriedades (que veremos mais adiante) é só uma parte das manipulações habituais nas páginas. As outras operações comuns são criar e eliminar nós da árvore DOM, ou seja, criar e eliminar "pedaços" da página web.

## Criação de elementos XHTML simples

Como já vimos, um elemento XHTML simples, como por exemplo um parágrafo, gera dois nós: o primeiro nó é do tipo `Element` e representa a tag `<p>` e o segundo nó é do tipo `Text` e representa o conteúdo textual da tag `<p>`.

Por esta razão, criar e adicionar um novo elemento XHTML simples na página consiste em quatro passos diferentes:

1. Criação de um nó do tipo `Element` que represente o elemento.

2. Criação de um nó do tipo `Text` que represente o conteúdo do elemento.

3. Adicionar o nó `Text` como nó filho do nó `Element`.

4. Adicionar o nó `Element` na página, como um nó filho correspondente ao lugar que se quer inserir o elemento.

Desta forma, se você quiser adicionar um parágrafo simples ao final de uma página XHTML, é necessário incluir o seguinte código JavaScript:

```js
// Criar um nó do tipo Element
var paragrafo = document.createElement("p");
// Criar um nó do tipo Text
var conteudo = document.createTextNode("Olá Mundo!");
// Adicionar o nó Text como filho do nó Element
paragrafo.appendChild(conteudo);
// Adicionar o nó Element como filho da página
document.body.appendChild(paragrafo);
```
O processo de criação de novos nós pode ser tedioso, já que implica na utilização de três funções do DOM:

1. `createElement(tag)`

Cria um nó do tipo `Element` que representa o elemento XHTML cuja tag é informada como argumento.

2. `createTextNode(conteudo)`

Cria um nó do tipo `Text` que armazena o conteúdo textual dos elementos XHTML.

3. `noPai.appendChild(noFilho)`

Adiciona um nó como filho de outro nó. Deve ser utilizado ao menos duas vezes com os nós habituais: primeiro se adicionar o nó `Text` como nó filho da pagina.

## Eliminação de nós

Felizmente, eliminar um nó da árvore DOM da página é muito mais simples do que adicioná-lo. Neste caso, só é necessário utilizar a função `removeChild()`:

```js
var paragrafo = document.getElementById("provisional");
paragrafo.parentNode.removeChild(paragrafo);
```

```html
<p id="provisional">...</p>
```
A função `removeChild()` exige como parâmetro o nó que será eliminado. Além disso, esta função deve ser invocada a partir do elemento pai do nó que se queira eliminar. A forma mais segura e rápida de acessar ao nó pai de um elemento é pela propriedade `noFilho.parentNode`.

Assim, para eliminar um nó de uma página XHTML, invocamos a função `removeChild()` a partir do valor do `parentNode` do nó que queremos eliminar. Quando um nó é eliminado, também são eliminados automaticamente todos os nós filhos que ele tenha, não sendo necessário apagar manualmente cada nó filho.