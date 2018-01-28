# CSS

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

jQuery incluye una manera útil de obtener y establecer propiedades `CSS` a los
elementos.
Las propiedades `CSS` que incluyen como separador un guión del medio, en
JavaScript deben ser transformadas a su estilo CamelCase. Por ejemplo, cuando
se la utiliza como propiedad de un método, el estilo CSS `font-size` deberá ser
expresado como `fontSize`. Sin embargo, esta regla no es aplicada cuando se
pasa el nombre de la propiedad `CSS` al método `$.fn.css` en este caso, los dos
formatos (en CamelCase o con el guión del medio) funcionarán.

## Obtener propiedades CSS

```js
$('h1').css('fontSize'); // devuelve una cadena de caracteres como "19px"
$('h1').css('font-size'); // también funciona
Establecer propiedades CSS
// establece una propiedad individual CSS
$('h1').css('fontSize', '100px');
// establece múltiples propiedades CSS
$('h1').css({ 'fontSize' : '100px', 'color' : 'red' });
```

Notar que el estilo del argumento utilizado en la segunda línea del ejemplo es
un objeto que contiene múltiples propiedades. Esta es una forma común de pasar
múltiples argumentos a una función, y muchos métodos establecedores de la
biblioteca aceptan objetos para fijar varias propiedades de una sola vez.

## Utilizar clases para aplicar estilos CSS

Para obtener valores de los estilos aplicados a un elemento, el método
`$.fn.css` es muy útil, sin embargo, su utilización como método establecedor
se debe evitar (ya que, para aplicar estilos a un elemento, se puede hacer
directamente desde CSS). En su lugar, lo ideal, es escribir reglas CSS que se
apliquen a clases que describan los diferentes estados visuales de los
elementos y luego cambiar la clase del elemento para aplicar el estilo que se
desea mostrar.

## Trabajar con clases

```js
var $h1 = $('h1');
$h1.addClass('big');
$h1.removeClass('big');
$h1.toggleClass('big');
if ($h1.hasClass('big')) { ... }
```

Las clases también pueden ser útiles para guardar información del estado de un
elemento, por ejemplo, para indicar que un elemento fue seleccionado.

## Dimensiones

jQuery ofrece una variedad de métodos para obtener y modificar valores de
dimensiones y posición de un elemento.

El código mostrado en el ejemplo "Métodos básicos sobre Dimensiones" es solo
un breve resumen de las funcionalidades relaciones a dimensiones en jQuery;
para un completo detalle puede consultar api.jquery.com/category/dimensions.

## Métodos básicos sobre Dimensiones

```js
$('h1').width('50px');  // establece el ancho de todos los elementos H1
$('h1').width();        // obtiene el ancho del primer elemento H1
$('h1').height('50px'); // establece el alto de todos los elementos H1
$('h1').height();       // obtiene el alto del primer elemento H1
// devuelve un objeto conteniendo información sobre la posición
// del primer elemento relativo al "offset" (posición) de su elemento padre
$('h1').position();
```
