# Selectores

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

<iframe src="https://goo.gl/Fw6zEe" frameborder="0" width="684" height="430"
allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
</iframe>

jQuery permite obtener los elementos del DOM mediante selectores, de la misma
forma como lo hace el método `querySelectorAll`, con la diferencia que también
acepta selectores propios.

## Atributos

* `[name!="value"]`: Devuelve todos los elementos cuyo atributo de nombre

`name` no tiene el valor `value`.

* `:animated`: Devuelve los elementos que están siendo animados en ese instante

* `:eq(index)`: Devuelve el elemento que se encuentra en el índice.

seleccionado, dentro de un conjunto de elementos.

* `:even`: Devuelve los elementos cuyos índices sean pares, teniendo en cuenta

que el índice empieza en 0, por lo que selecciona los elementos en los índices

0, 2, 4 y sucesivos.

* `:first`: Devuelve el primer elemento de un conjunto de elementos.

* `:gt(index)`: Devuelve los elementos cuyos índices sean mayores al índice

seleccionado.

* `:header`: Devuelve todos los elementos que sean h1, h2, h3 y similares.

* `:last`: Devuelve el último elemento de un conjunto de elementos.

* `:lt(index)`: Devuelve los elementos cuyos índices sean menores al índice

seleccionado.

* `:odd`: Devuelve los elementos cuyos índices sean impares, teniendo en

cuenta que el índice empieza en 0, por lo que selecciona los elementos en los

índices 1, 3, 5 y sucesivos.

* `:has(selector)`: Devuelve todos los elementos que contienen los elementos

definidos en el segundo selector.

* `:parent`: Devuelve todos los elementos que tienen al menos un nodo hijo (ya

sea elemento o no).

* `:hidden`: Devuelve todos los elementos ocultos, los cuales pueden ser, por

tener `display`: `none` en sus estilos, ser elementos `<input type="hidden">`,

tener `width` y `height` en `0`, o si tiene algún elemento ancestro oculto.

* `:visible`: Devuelve todos los elementos que son visibles. En jQuery, un

elemento es considerado visible si ocupa espacio en la pantalla, por lo que

elementos con `visibility`: `hidden` u `opacity`: `0` en sus estilos son

considerados elementos visibles.
