# Manejo del DOM

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

Ya aprendimos Javascript y por lo tanto, ya sabemos como manipular elementos
del DOM. jQuery entonces viene a ayudarnos a manipular y crear los elementos
que utilizaremos en nuestro sitio web.
Con jQuery, es posible cambiar, mover, remover y duplicar elementos. También
crear nuevos a través de una sintaxis simple.
Los siguientes son algunos de los métodos utilizados para manipular el DOM:

* `$.fn.html`: Obtiene o establece el contenido HTML de un elemento.

* `$.fn.text`: Obtiene o establece el contenido en texto del elemento; en caso

se pasarle como argumento código HTML, este es despojado.

* `$.fn.attr`: Obtiene o establece el valor de un determinado atributo.

* `$.fn.width`: Obtiene o establece el ancho en pixeles del primer elemento de

la selección como un entero.

* `$.fn.height`: Obtiene o establece el alto en pixeles del primer elemento de

la selección como un entero.

* `$.fn.val`: Obtiene o establece el valor (value) en elementos de formularios.

* `$.fn.insertAfter`: Coloca a el/los elementos seleccionados después del

elemento que se haya pasado como argumento.

* `$.fn.after`: Coloca al elemento pasado como argumento después del elemento

seleccionado.

* `$.fn.append`: Añade texto o código HTML al final del elemento seleccionado.

* `$.fn.prepend`: Añade texto o código html al principio del elemento seleccionado.

* `$.fn.remove`: se utiliza para remover por completo los elementos.

También es muy sencillo crear nuevos elementos para nuestro sitio.

```js
// creamos y guardamos el nuevo elemento en una variable
var myNewElement = $('<p>Nuevo elemento</p>');
// creamos e insertamos el nuevo elemento en su nodo padre
$('ul').append('<li>item de la lista</li>');
```
