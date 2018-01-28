# Creación de Plugin

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

Tras un tiempo trabajando con jQuery es frecuente que empecemos a tener
funciones de javascript propias que siempre usamos.
Una buena forma de integrar dichos trozos de código en jQuery es crear una
librería con un plugin, de forma que a partir de ese momento podremos importar
la librería en nuestros proyectos y que este siempre disponible.
Los desarrolladores de jQuery tienen definida una API y un listado de buenas
prácticas que deberemos seguir a la hora de crear un plugin.

## Creación de un método

Crear un método que se integre con jQuery es tan fácil como añadir una función
al objeto jQuery.fn de la siguiente manera.

```js
jQuery.fn.nombreDelPlugin = function (args) {
  // Código a ejecutar por el plugin
}
```

También se puede sustituir el objeto jQuery por el objeto dólar ($) si
incluimos la creación del plugin en una función de invocación inmediata (IIFE
– Immediately Invoked Function Expression) en la que mapeemos el objeto jQuery
a dicho símbolo.

```js
(function ($) {
  $.fn.nombreDelPlugin = function (args) {
    // Código a ejecutar por el plugin
  };
})(jQuery);
```

Sólo queda mencionar que en el ámbito inmediato de aplicación del plugin, la
palabra clave this hace referencia al objeto de jQuery y no al objeto nativo
del DOM, de forma que no es necesario encapsularlo como se hace al usarlo, por
ejemplo, en un callback. Es decir, se usará this en lugar de $(this) y aun así
tendremos acceso a los métodos de jQuery.

## Invocación del plugin

Una vez que sabemos cómo se define el plugin es hora de escribir el código que
se ejecutará cuando sea invocado.

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

Este plugin devuelve la altura del elemento más alto entre los elementos
coincidentes.
Para invocarlo, la sintaxis es la misma que para cualquier otro método de
jQuery.

```js
//Esto devolverá la altura del div más alto del documento.
var tallest = $('div').maxHeight();
```

## Mantener los métodos encadenables

Por convenio, todos los métodos de jQuery devuelven el objeto desde el cual
han sido llamados siempre que no necesiten devolver otro dato. Es aconsejable
mantener este comportamiento en los plugins y hacer que devuelvan el objeto
que los invoca.

```js
(function ($) {
  $.fn.setBackgroundRed = function (args) {
    this.css("background", "red");
    return this;
  };
})(jQuery);
```

Este plugin podría ser encadenado de la siguiente manera, haciendo que el
segundo método siguiere afectando al objeto original.

```js
$("div").setBackgroundRed().height(500);
```

## Opciones en los plugins

Es recomendable que los plugins que necesiten parametrización no tengan un
gran número de argumentos, sino que tengan como parámetro un único objeto JSON
con todas las propiedades a establecer. De esta forma podremos definir una
configuración por defecto y extenderla ($.extend) con las opciones
especificadas por el usuario, sobreescribiendo sólo las propiedades que hayan
sido especificadas.

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

Como resultado de esta invocación, la configuración resultante en el plugin
sería la siguiente.

```css
{
  background : "red",
  textColor : "white",
  textSize : 26,
  lineHeight: 22
}
```

## Espacios de nombres

Es importante mantener un correcto espacio de nombres que reduzcan las
posibilidades de que nuestro plugin sea sobreescrito por un plugin de terceros.
Para ello es una buena idea usar prefijos o sufijos, como por ejemplo el
nombre de nuestra empresa.

```js
(function ($) {
  $.fn.companyNameCreateStuff = function (options) {
    // ...
  };
})(jQuery);
```
