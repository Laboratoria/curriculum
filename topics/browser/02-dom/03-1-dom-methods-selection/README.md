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

Por fim, tem recomendamos que prove os siguentes métodos replicando o código no
seu editor de texto.

### **getElementById()**

A função `getElementById()` é a mais utilizada quando desenvolvemos aplicações web dinâmicas. É a função preferida para acessar diretamente um nó e poder ler suas propriedades.

A função `getElementById()` retorna o elemento XHTML cujo atributo `id` coincide com o parâmetro informando na função. Como o atributo `id` deve ser único para cada elemento de uma mesma página, a função devolve somente o nó desejado.

```html
<body>
 <h2>Hola Laboratoria</h2>
 <h2>Hola Mundo</h2>
 <h2>Mis Hobbies</h2>
 <ul>
  <li id="highlight">Programar</li>
  <li class="bolded">Bailar</li>
  <li class="bolded">Ver peliculas</li>
 </ul>
</body>
```

```js
const firstItem = document.getElementById("highlight");
```


<!-- TODOOOOOO -->
<!-- Continuar a tradução a partir da aqui -->


### **getElementsByClassName()**

La función `getElementsByClassName()` devuelve una [lista de
 nodos](http://www.etnassoft.com/2011/08/09/las-listas-de-nodos-y-los-arrays-en-javascript/)
 XHTML cuyo atributo `class`coincide con el parámetro indicado en la función.

```html
<body>
 <h2>Hola Laboratoria</h2>
 <h2>Hola Mundo</h2>
 <h2>Mis Hobbies</h2>
 <ul>
  <li id="highlight">Programar</li>
  <li class="bolded">Bailar</li>
  <li class="bolded">Ver peliculas</li>
 </ul>
</body>
```

```js
const items = document.getElementsByClassName("bolded");
```

### **getElementsByTagName()**

Como sucede con todas las funciones que proporciona DOM, la función
`getElementsByTagName()` tiene un nombre muy largo, pero que lo hace
autoexplicativo.

La función `getElementsByTagName(nombreEtiqueta)` obtiene una [lista de
nodos](http://www.etnassoft.com/2011/08/09/las-listas-de-nodos-y-los-arrays-en-javascript/).
de la página XHTML cuya etiqueta sea igual que el parámetro que se le pasa a la
función.

```html
<body>
 <h2>Hola Laboratoria</h2>
 <h2>Hola Mundo</h2>
 <h2>Mis Hobbies</h2>
 <ul>
  <li id="highlight">Programar</li>
  <li class="bolded">Bailar</li>
  <li class="bolded">Ver peliculas</li>
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

Función que retorna el primer elemento que coincide con el selector CSS dado
como parámetro.

```html
<body>
 <h2>Hola Laboratoria</h2>
 <h2>Hola Mundo</h2>
 <h2>Mis Hobbies</h2>
 <ul>
  <li id="highlight">Programar</li>
  <li class="bolded">Bailar</li>
  <li class="bolded">Ver peliculas</li>
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
// Selector css - etiqueta
const title = document.querySelector('h2');
console.log(title);
```

### **querySelectorAll()**

Función que retorna una [lista de
nodos](http://www.etnassoft.com/2011/08/09/las-listas-de-nodos-y-los-arrays-en-javascript/)
que coinciden con el selector CSS dado como parámetro.

```html
<body>
 <h2>Hola Laboratoria</h2>
 <h2>Hola Mundo</h2>
 <h2>Mis Hobbies</h2>
 <ul>
  <li id="highlight">Programar</li>
  <li class="bolded">Bailar</li>
  <li class="bolded">Ver peliculas</li>
 </ul>
</body>
```

```js
// Selector css - etiqueta
const titles = document.querySelectorAll('h2');
console.log(titles);
```

```js
// Selector css - etiqueta
const items = document.querySelectorAll('.bolded');
console.log(items);
```

## Recapitulando

Prepara tu editor de código, replica lo que realiza Lulú en el siguiente video y
refuerza lo aprendido.

[![Métodos de Selección
DOM](https://img.youtube.com/vi/7iHu7s54vIk/0.jpg)](https://www.youtube.com/watch?v=7iHu7s54vIk)

También tenemos el
[link](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n#Qu.C3.A9_es_el_DOM.3F)
de la documentación oficial de Mozilla de qué es el DOM.

Otro
[link](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n#C.C3.B3mo_se_accede_al_DOM.3F)
de cómo acceder a elementos del DOM con JS de la documentación oficial.
