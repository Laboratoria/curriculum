# Modificando o DOM

* Tipo: `leitura`
* Formato: `individual`
* Duração: `120min`

## Objetivos de Aprendizagem

Nesta unidade aprenderemos:

* Métodos de seleção del DOM:
  - `document.getElementById()`
  - `document.getElementsByClassName()`
  - `document.getElementsByTagName()`
  - `document.querySelector()`
  - `document.querySelectorAll()`

***

## Seleção de nós com DOM

Uma vez construído automaticamente a árvore completa de nós do DOM, já é
possível utilizar as funções DOM para acessar de maneira direta qualquer nó da
árvore.

Como acessar um nó da árvore equivale a acessar "um pedaço" da página, uma vez
construída a árvore já é possível manipular de forma simples a página: acessar o
valor de um elemento, estabelecer o valor de um elemento, mover um elemento da
página, criar e adicionar novos elementos, etc.

DOM fornece dois métodos alternativos para acessar um nó específico: acesso por
meios de seus nós pais e acesso direto.

As funções que o DOM disponibiliza para acessar um nó por meio de seus nós pais
consistem em acessar o nó raiz da página e depois seus nós filhos e os nós
filhos desses filhos e assim sucessivamente até o último nó folha contendo o nó
procurado. Porém, quando queremos acessar um nó específico, é muito mais rápido
acessar diretamente esse nó e não chegar até ele caminhando por todos os seus
nós pais.

Por essa razão, não vamos apresentar as funções necessárias para o acesso
hierárquico dos nós e mostraremos somente as que permitem acesso os nós de forma
direta.

É importante lembrar que o acesso aos nós, sua modificação e sua eliminação
somente são possíveis quando a árvore do DOM estiver construída completamente,
ou seja, depois que a página XHTML estiver carregada completamente. Mais adiante
veremos como garantir que um código JavaScript só seja executado quando o
navegador tenha carregado toda a página XHTML.

Por fim, tem recomendamos que prove os seguintes métodos replicando o código no
seu editor de texto.

### **getElementById()**

A função `getElementById()` é a mais utilizada quando desenvolvemos aplicações
web dinâmicas. É a função preferida para acessar diretamente um nó e poder ler
suas propriedades.

A função `getElementById()` retorna o elemento XHTML cujo atributo `id` coincide
com o parâmetro informando na função. Como o atributo `id` deve ser único para
cada elemento de uma mesma página, a função devolve somente o nó desejado.

```html
<body>
 <h2>Hello Laboratoria</h2>
 <h2>Hello Mundo</h2>
 <h2>My Hobbies</h2>
 <ul>
  <li id="highlight">Programming</li>
  <li class="bolded">Dancing</li>
  <li class="bolded">Watch Netflix</li>
 </ul>
</body>
```

```js
const firstItem = document.getElementById("highlight");
```

### **getElementsByClassName()**

A função `getElementsByClassName()` retorna uma lista de nós da página `XHTML`
cuja o atributo `class` é igual ao parâmetro indicado na função.

```html
<body>
 <h2>Hello Laboratoria</h2>
 <h2>Hello Mundo</h2>
 <h2>My Hobbies</h2>
 <ul>
  <li id="highlight">Programming</li>
  <li class="bolded">Dancing</li>
  <li class="bolded">Watch Netflix</li>
 </ul>
</body>
```

```js
const items = document.getElementsByClassName("bolded");
```

### **getElementsByTagName()**

Como algumas funções do `DOM` , a função `getElementsByTagName()` tem o nome
muito grande, mas autoexplicativo.

A função `getElementsByTagName(tagName)` retorna uma lista de nós da página
`XHTML` cuja a _tag_ é igual ao parâmetro que foi passado na função.

```html
<body>
 <h2>Hello Laboratoria</h2>
 <h2>Hello Mundo</h2>
 <h2>My Hobbies</h2>
 <ul>
  <li id="highlight">Programming</li>
  <li class="bolded">Dancing</li>
  <li class="bolded">Watch Netflix</li>
 </ul>
</body>
```

```js
const titles = document.getElementsByTagName('h2');
console.log(titles[0]);
console.log(titles[1]);
console.log(titles[2]);

const listItems = document.getElementsByTagName('li');
console.log(listItems[0]);
console.log(listItems[1]);
console.log(listItems[2]);
```

### **querySelector()**

Está função retorna o primeiro elemento que coincide com o seletor `CSS` passado
como parâmetro.

```html
<body>
 <h2>Hello Laboratoria</h2>
 <h2>Hello Mundo</h2>
 <h2>My Hobbies</h2>
 <ul>
  <li id="highlight">Programming</li>
  <li class="bolded">Dancing</li>
  <li class="bolded">Watch Netflix</li>
 </ul>
</body>
```

```js
// Selector css - id
const item = document.querySelector('#highlight');
console.log(item);
```

```js
// Selector css - class
const item = document.querySelector('.bolded');
console.log(item);
```

```js
// Selector css - tag
const title = document.querySelector('h2');
console.log(title);
```

### **querySelectorAll()**

Está função retorna uma lista de nós que coincidem com o seletor `CSS` passado
como parâmetro.

```html
<body>
 <h2>Hello Laboratoria</h2>
 <h2>Hello Mundo</h2>
 <h2>My Hobbies</h2>
 <ul>
  <li id="highlight">Programming</li>
  <li class="bolded">Dancing</li>
  <li class="bolded">Watch Netflix</li>
 </ul>
</body>
```

```js
// Selector css - tag
const titles = document.querySelectorAll('h2');
console.log(titles);
```

```js
// Selector css - class
const items = document.querySelectorAll('.bolded');
console.log(items);
```

## Recapitulando

Prepare seueditor, replique o que Daniel realiza no seguinte vídeo e
reforce seu aprendizado.

[![Manipulando
HTML](https://img.youtube.com/vi/6mzK28lEZsI/0.jpg)](https://www.youtube.com/watch?v=6mzK28lEZsI)

Também recomendamos o
[link](https://developer.mozilla.org/pt-PT/docs/Gecko_DOM_Reference/Introduction)
da documentação oficinal do Mozilla sobre o DOM.
