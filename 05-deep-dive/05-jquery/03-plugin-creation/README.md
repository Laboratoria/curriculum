# Criação de Plugin

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

Depois de um tempo trabalhando com jQuery é frequente que comecemos a ter funções de JavaScript próprias que sempre usamos. Uma boa forma de integrar tais pedaços de código em jQuery é criar uma biblioteca com um plugin, de maneira que a partir desse momento poderemos importar a biblioteca em nossos projetos e ela estará sempre disponível. Os desenvolvedores de jQuery têm definida uma API e uma lista de boas práticas que deveremos seguir quando criarmos um plugin.

## Criação de um método

Criar um método que se integra com jQuey é tão fácil como adicionar uma função ao objeto jQuery.fn da seguinte maneira:

```js
jQuery.fn.nomeDoPlugin = function (args) {
  // Código a executar pelo plugin.
}
```

Também é possível substituir o objeto jQuery por o objeto dólar($) se incluímos a criação do plugin de uma função de invocação imediata (IIFE - *Immediately Invoked Function Expression*) na qual mapeamos o objeto jQuery ao símbolo.

```js
(function ($) {
  $.fn.nomeDoPlugin = function (args) {
    // Código a executar pelo plugin
  };
})(jQuery);
```
É importante mencionar que no escopo imediato da aplicação do plugin, a palavra chave `this` faz referência ao objeto de jQuery e não ao objeto nativo do DOM, de maneira que não é necessário encapsulá-lo como se faz ao usá-lo, por exemplo, em um *callback*. Isto é, usaremos `this` no lugar de `$(this)` e ainda assim teremos acesso aos métodos de jQuery.

## Invocação do plugin

Uma vez que sabemos como se define o plugin, é hora de escrever o código que será executado quando ele for invocado.

```js
(function ($) {
  $.fn.maxHeight = function (args) {
    var max = 0;
    this.each(function () {
      max = Math.max(max, $(this).height());
    });
    return max;
  };
})(jQuery);
```

Este plugin retorna a altura do elemento mais alto entre os elementos coincidentes. Para invocá-lo, a sintaxe é a mesma que para qualquer outro método de jQuery.

```js
//Isto devolverá a altura do div mais alto do documento.
var tallest = $('div').maxHeight();
```

## Manter os métodos encadeáveis

Por convenção, todos os métodos de jQuery retornam o objeto a partir do qual foi chamado sempre que não necessitem devolver outro dado. É aconselhável manter este comportamento nos plugins e fazer que devolvam o objeto que os invoca.

```js
(function ($) {
  $.fn.setBackgroundRed = function (args) {
    this.css("background", "red");
    return this;
  };
})(jQuery);
```
Este plugin poderia ser encadeado da seguinte maneira, fazendo o segundo método seguir afetando o objeto original.

```js
$("div").setBackgroundRed().height(500);
```

## Opções nos plugins

É recomendável que os plugins que precisem de parâmetros não tenham um grande número de argumentos, mas tenham como parâmetro um único objeto JSON com todas a propriedades necessárias. Desta forma poderemos definir uma configuração por padrão e extendê-la (`$.extend`) com as opções especificadas pelo usuário, sobrescrevendo somente as propriedades que tenham sido especificadas. 

```js
(function ($) {
  $.fn.customPlugin = function (options) {
    var defaults = {
      background : "red",
      textColor : "black",
      textSize : 16,
      lineHeight: 22
    };
    var settings = $.extend(defaults, options);
  };
})(jQuery);

$("div").customPlugin({ textSize : 26, textColor : "white" });
```

Como resultado desta invocação, a configuração resultante no plugin seria a seguinte:

```css
{
  background : "red",
  textColor : "white",
  textSize : 26,
  lineHeight: 22
}
```

## Tamanho de nomes

É importante manter um tamanho de nomes correto que reduzam as possibilidades de que nosso plugin seja reescrito por um plugin de terceiros. Para isso é uma boa ideia usar prefixos e sufixos, como por exemplo o nome de nossa empresa.

```js
(function ($) {
  $.fn.companyNameCreateStuff = function (options) {
    // ...
  };
})(jQuery);
```
