# This vs event.target

* Formato: `lectura`
* Duración: `10min`

***

Los eventos permiten comunicar acciones realizadas tanto por el navegador como
por el usuario, y ayudan a mejorar la interacción entre una persona y un sitio
o aplicación web como lo vimos en la lectura anterior. Para recordar: cuando
un usuario hace clic en un enlace, se puede capturar el evento `click` de ese
elemento y lanzar una acción diferente a la habitual (la cual es enviar al
usuario al documento enlazado). Otro ejemplo es validar formularios antes de
ser enviados, capturando el evento submit de el elemento `<form>`.

Todos los elementos del DOM, además de `window`, heredan de la interfaz
`eventTarget`, el cual permite enlazar eventos a `callbacks` definidos dentro
de la aplicación. La interfaz `eventTarget` tiene 3 métodos: `addEventListener
, `removeEventListener` y `dispatchEvent`.

## `addEventListener`

Para enlazar un evento a un `callback` se utiliza `addEventListener`:

```javascript
window.addEventListener('load', function(e) {
  console.log('window:load', e);
});
```

El ejemplo anterior agrega un `listener` al evento `load` de `window`, donde el
`callback` pasado como segundo parámetro es la función que se ejecutará cuando
el evento se dispare (que es cuando el navegador termina de cargar el
documento).

Todos los `callbacks` enlazados a eventos toman un solo parámetro (en este
caso,`e`). Este parámetro puede ser instancia de `focusEvent`, `mouseEvent`,
`keyboardEven`, dependiendo del evento que sea lanzado.
Todos los eventos heredan de la interfaz `event`.

## removeEventListener

Para eliminar un `listener` de un elemento se utiliza el método
`removeEventListener`, que toma los mismos valores de `addEventListener`. Esto
quiere decir que, para eliminar un `listener` de un elemento, es obligatorio
mandar como parámetro el mismo `callback` utilizado en `addEventListener`.

En este ejemplo el evento no se eliminará, puesto que los `callbacks` son
diferentes.

```javascript
window.addEventListener('load', function(e) {
  console.log('window:load', e);
});
window.removeEventListener('load', function(e) {
  console.log('window:load', e);
});
```

Por eso, es necesario guardar el `callback` utilizado en `addEventListener` en
una variable para utlizarla luego en `removeEventListener`:

```javascript
var windowOnLoad = function(e) {
  console.log('window:load', e);
};
window.addEventListener('load', windowOnLoad);
window.removeEventListener('load', windowOnLoad);
```

***