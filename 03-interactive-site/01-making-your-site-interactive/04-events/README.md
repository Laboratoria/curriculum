# Eventos

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `90min`

## Objetivos de Aprendizaje

En esta unidad aprenderemos:

1. ¿Qué es un evento y para qué nos sirve?
2. ¿Cómo usarlos?
3. Manejo y flujo de eventos (propagación).
4. Tipos de eventos

***

## ¿Qué es un evento?

Es la acción producto de la interacción entre el usuario y un software (en este
caso, nuestra web). A cada evento se le asocia un manejador (_conocido como
event handlers o event listeners_) el cual se ejecutará cuando ocurra el evento.

Aquí hay un video de referencia:

[Eventos en JavaScript](https://www.youtube.com/watch?v=gyICdb1iwII)

## ¿Cómo usar los eventos?

Para poder hacer uso de la magia de los eventos es necesario saber primero cómo
"escucharlos", esto se puede lograr mediante el método `.addEventListener()`.

La sintaxis es muy sencilla:

```javascript
elementoQueEscucha.addEventListener('evento', funcionAEjecutar);
```

Aquí un [link](http://www.codexexempla.org/curso/curso_4_3_e.php) de
referencia.

Existen diferentes formas de asociar un evento a elementos del DOM, para saber
más sobre ello visita este otro [link](http://librosweb.es/libro/javascript/capitulo_6/modelo_basico_de_eventos_2.html)
(a partir del punto 6.2).

## Manejo de eventos

Además de agregar el _listener_ al evento también se puede eliminar usando el
método `.removeEventListener()`, el cual funciona casi de la misma manera. La
sintaxis es la siguiente:

```javascript
elementoQueEscucha.removeEventListener('evento', funcionAEliminar);
```

Para que el método funcione correctamente es obligatorio mandar como parámetro
el callback (función) utilizado con addEventListener.

Ahora hablemos sobre `object event` que es otro tema de importancia en el
manejo de eventos. Cuando un evento ocurre, la función que se ejecutará
necesita información adicional sobre éste.

 El `object event` es el objeto que representa el evento que se ha producido. Se
 crea automáticamente cuando ocurre el evento y se destruye una vez se haya
 ejecutado su función manejadora. Este objeto tiene un conjunto de propiedades
 con información sobre el evento. En el siguiente código podrás encontrar un
 ejemplo.

```javascript
function helloWorld(event) {
  var objectEvent = window.event || event;
  alert('Hola Mundo.');
}

var button = document.getElementById('button');
button.addEventListener('click', helloWorld, false);
```

En ocasiones es necesario prevenir un cierto comportamiento que un evento tiene
por defecto, para ello existe `.preventDefault()`.

Este es el código para un formulario muy sencillo. Hay un input para ingresar el
nombre y otro para ingresar el apellido. Por último, hay un input de tipo
_submit_ (botón submit).

![Formulario](https://fotos.subefotos.com/a67120b81aed0a8a0d8f2ef44db9378ao.png).

```html
<form>
  <div>
    <label for="first-name">First name: </label>
    <input id="first-name" type="text">
  </div>
  <div>
    <label for="last-name">Last name: </label>
    <input id="last-name" type="text">
  </div>
  <div>
    <button id="submit" type="submit">Submit</button>
  </div>
</form>
<p id="warning"></p>
```

Ahora veamos la funcionalidad del JS:

En la primera parte se guardan en variables los elementos del formulario.
Después tenemos la función que detona el evento submit, esta función comprueba
si los campos están vacíos. Si la condición se cumple se ejecuta la función
`.preventDefault()` para el `objectEvent` (e), impidiendo que el formulario se
envíe automáticamente (acción que tiene por defecto este tipo de _botón_) para
mostrar al usuario un mensaje de error.

 ```javascript
var form = document.querySelector('form');
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var submit = document.getElementById('submit');
var warning = document.getElementById('warning');

form.onsubmit = function(e) {
  if (firstName.value === '' || lastName.value === '') {
    e.preventDefault();
    warning.textContent = 'You need to fill in both names!';
  }
}
```

## Flujo de eventos (Propagation)

Cuando un evento se ejecuta pasa por diferentes fases: _Capture phase_, _Target
phase_ y _Bubbling phase_, como se muestra en la siguiente imagen.

![Flujo de eventos](https://fotos.subefotos.com/c2bdbf4b16698bcaec0b705f4e422be2o.png)

Revisa el siguiente video, en donde encontrarás un ejemplo práctico del flujo
que siguen los eventos.

[Flujo de eventos](https://www.youtube.com/watch?v=lgkqf6hldEk)

## Tipos de eventos

Cuando el usuario interactúa con el navegador se pueden desencadenar múltiples
tipos de eventos, algunos de los más comunes son:

- Eventos del mouse (mouseEvent)
- Eventos del teclado (keyboardEvent)
- Eventos del formulario
- Eventos de la ventana

Para mayor información sobre todos los eventos visita este [link](https://sites.google.com/site/dwebtodojs/referencia/modelo-de-eventos-del-dom)
y también este otro [link](https://es.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/a/dom-event-types).

### Eventos populares

Estos son algunos de los eventos más utilizados:

- keyup/keydown
- mouse click
- mouse motion
- scroll
- focus
- load
- script execution timeline
- setting timers
- debouncing

[Aquí](https://codepen.io/michellesegv/pen/OOLXZV) podrás encontrar un ejemplo
sobre la interacción con los eventos.

> Guía de uso:
> 1. Nota como el fondo es de color blanco
> 2. Ahora haz click en el botón _Hacer magia :)_
> 3. Revisa el código y analiza la lógica de programación
> 4. Ahora intenta modificar el código para que reaccione con otros eventos,
> diviértete ;)

Finalmente, te adjuntamos el [link](https://developer.mozilla.org/es/docs/Web/Reference/Events)
de la documentación oficial explicando todo acerca de eventos.
