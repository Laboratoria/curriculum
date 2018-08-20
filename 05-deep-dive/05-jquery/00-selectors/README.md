# Seletores

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

<iframe src="https://goo.gl/Fw6zEe" frameborder="0" width="684" height="430"
allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
</iframe>

jQuery permite obter os elementos do DOM por meio de seletores, da mesma forma como faz o método `querySelectorAll`, com a diferença que também aceita seletores próprios.

## Atributos

* `[name!="value"]`: Retorna todos os elementos cujo atributo de nome `name` possuam o valor `value`.

* `:animated`: Retorna os elementos que estão sendo animados neste instante.

* `:eq(index)`: Retorna o elemento está no índice selecionado, dentro de um conjunto de elementos.

* `:even`: Retorna os elementos cujos índices sejam pares, levando em conta que o índice começa com 0, motivo pelo qual seleciona os elementos dos índice 0, 2, 4 e seguintes.

* `:first`: Retorna o primeiro elemento de um conjunto de elementos.

* `:gt(index)`: Retorna os elementos cujos índices sejam maiores que o índice selecionado.

* `:header`: Retorna todos os elementos que sejam `h1`, `h2`, `h3` e similares.

* `:last`: Retorna o último elemento de um conjunto de elementos.

* `:lt(index)`: Retorna os elementos cujos índices sejam menores que o índice selecionado.

* `:odd`: Retorna os elementos cujos índices sejam ímpares, tendo em conta o que o índice começa com 0, motivo pelo qual seleciona os elementos dos índices 1, 3, 5 e seguintes.

* `:has(selector)`: Retorna os elementos que contém os elementos definidos no segundo seletor.

* `:parent`: Retorna os elementos que têm ao menos um nó filho (seja elemento ou não).

* `:hidden`: Retorna todos os elementos ocultos, os quais podem ser por terem `display:none` em seus estilos, serem elements `<input type="hidden">`, terem `width` e `height` com `0`, ou se têm algum elemento pai oculto.

* `:visible`: Retornar todos os elementos que são visíveis. Em jQuery, um elemento é considerado visível se ocupa espaço na tela, motivo pelo qual elementos com `visibility:hidden` ou `opacity:0` em seus estilos sejam considerados elementos visíveis.