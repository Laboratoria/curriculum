# Manipulação do DOM

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

Já aprendemos JavaScript e portanto, já sabemos como manipular elementos do DOM. jQuery então vem a nos ajudar a manipular e criar os elementos que utilizaremos em nosso sítio web. Com jQuery, é possível mudar, mover, remover e duplicar elementos. Também criar novos por meio de sintaxe simples. Os seguintes são alguns dos métodos utilizados para manipular o DOM:

* `$.fn.html`: Obtém ou estabelece o conteúdo HTML de um elemento.

* `$.fn.text`: Obtém ou estabelece o conteúdo de texto do elemento; em caso de ser passado como argumento um código HTML, este é ignorado.

* `$.fn.attr`: Obtém ou estabelece o valor de um determinado atributo.

* `$.fn.width`: Obtém ou estabelece a largura em pixels do primeiro elemento da seleção como um todo.

* `$.fn.height`: Obtém ou estabelece a altura em pixels do primeiro elemento da seleção como um todo.

* `$.fn.val`: Obtém ou estabelece o valor (`value`) nos elementos de formulários.

* `$.fn.insertAfter`: Coloca o(s) elemento(s) selecionado(s) depois do elemento que foi passado como argumento.

* `$.fn.after`: Coloca o elemento passado como argumento depois do elemento selecionado.

* `$.fn.append`: Adiciona texto ou código HTML ao final do elemento selecionado.

* `$.fn.prepend`: Adiciona texto o código HTML ao início do elemento selecionado.

* `$.fn.remove`: é utilizado para remover por completo os elementos.

Também é muito simples criar novos elementos para nosso sítio.

```js
// criamos e armazenamos o novo elemento em uma variável
var myNewElement = $('<p>Novo elemento</p>');
// criamos e inserimos o novo elemento em seu pai
$('ul').append('<li>item da lista</li>');
```
