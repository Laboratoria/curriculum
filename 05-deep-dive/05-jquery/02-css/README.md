# CSS

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

jQuery inclui uma maneira útil de obter e estabelecer propriedades `CSS` aos elementos. As propriedades `CSS` que incluem como separador um hífen, em JavaScript devem ser transformadas para o estilo *CamelCase*. Por exemplo, quando ela é utilizada como propriedade de um método, o estilo `CSS` `font-size` deverá ser informado como `fontSize`. Porém, esta regra não é aplicada quando passamos o nome da propriedade `CSS` para o método `$.fn.css`. Neste caso, os dois formatos (em *CamelCase* ou com o hífen) funcionarão.

## Obter propriedades CSS

```js
$('h1').css('fontSize'); // retorna uma cadeia de caracteres como "19px"
$('h1').css('font-size'); // também funciona
Estabelecer propriedades CSS
// estabelece uma propriedade individual CSS
$('h1').css('fontSize', '100px');
// estabelece múltiplas propriedades CSS
$('h1').css({ 'fontSize' : '100px', 'color' : 'red' });
```

Note que o estilo do argumento utilizado na segunda linha do exemplo é um objeto que contém múltiplas propriedades. Esta é uma forma comum de passar múltiplos argumentos para uma função e muitos métodos da biblioteca aceitam objetos para fixar várias propriedades de uma só vez.

## Utilizar classes para aplicar estilos CSS

Para obter valores dos estilos aplicados a um elemento, o método `$.fn.css` é muito útil, porém sua utilização como método estabelecedor deve ser evitada (já que, para aplicar estilos a um elemento, é possível fazer diretamente no `CSS`). Em seu lugar, o ideal é escrever regras `CSS` que sejam aplicadas a classes que descrevam os diferentes estados visuais dos elementos e em seguida mudar a classe do elemento para aplicar o estilo que se deseja mostrar.

## Trabalhar com classes

```js
var $h1 = $('h1');
$h1.addClass('big');
$h1.removeClass('big');
$h1.toggleClass('big');
if ($h1.hasClass('big')) { ... }
```
As classes também podem ser úteis para armazenar informação do estado de um elemento. Por exemplo, para indicar que um elemento foi selecionado.

## Dimensões

jQuery oferece uma variedade de métodos para obter e modificar valores de dimensões e posição de um elemento.

O código mostrado no exemplo "Métodos básicos sobre Dimensões" é só um breve resumo das funcionalidades relacionadas a dimensões em jQuery; para um detalhe completo você pode consultar api.jquery.com/category/dimensions.

## Métodos básicos sobre Dimensões

```js
$('h1').width('50px');  // estabelece a largura de todos os elementos H1
$('h1').width();        // obtém a largura do primeiro elemento H1
$('h1').height('50px'); // estabelece a altura de todos os elementos H1
$('h1').height();       // obtém a altura do primeiro elemento H1
// retorna um objeto contendo informação sobre a posição
// do primeiro elemento relativo ao "offset" (posição) do seu elemento pai
$('h1').position();
```
