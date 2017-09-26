# Eventos
- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `30min`

## Objetivos de Aprendizaje

En esta unidad aprenderemos:
1. ¿Qué es un evento y para qué nos sirve?
2. ¿Cómo usarlos?
* Manejo y flujo de eventos (propagación).
3. Tipos

***

Referencia:
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
* http://eloquentjavascript.net/14_event.html

## ¿Qué es un evento?
Es cuando el usuario realiza una acción permitiéndole interactuar con el programa. A cada evento se le asocia un manejador (*conocido como eventHandlers o eventListener*) el cual, se ejecutará cuando ocurra el evento.

###### Referencia: https://www.youtube.com/watch?v=gyICdb1iwII

## ¿Cómo usar los eventos?

Para poder hacer uso de la magia de los eventos es necesario saber primero como escucharlos, esto se puede lograr mediante el método __addEventListener__.

La sintaxis es muy sencilla:
```javascript
  elemento_que_escucha.addEventListener('evento', funcion_a_ejecutar);
```
###### Referencia: http://www.codexexempla.org/curso/curso_4_3_e.php

Existen diferentes formas de asociar un evento a elementos del DOM, para saber más sobre ello visita este [link](http://librosweb.es/libro/javascript/capitulo_6/modelo_basico_de_eventos_2.html) (apartir del punto 6.2).

### Manejo de eventos

Además de agregar el *listener* al evento también se puede eliminar usando el método __removeEventListener__, el cual funciona casi de la misma manera. La sintaxis es d ela siguiente manera:

```javascript
  elemento_que_escucha.removeEventListener('evento', funcion_a_eliminar);
```
Para que el método funcione correctamente es obligatorio mandar como parámetro el callback (función) utilizado con addEventListener.

Ahora hablemos sobre __objectEvent__ que es otro tema de importancia en el manejo de eventos. Cuando un evento ocurre, la función que se ejecutará necesita información adicional sobre este.

 __objectEvent__ es el objeto que representa el evento que se ha producido. Se crea automáticamente cuando ocurre el evento y se destruye una vez se haya ejecutado su función manejadora. Este objeto tiene un conjunto de propiedades con información sobre el evento. En el siguiente código podras encontrar un ejemplo.

```javascript
function holaMundo(event){
  var evento = window.event || event;
  alert('Hola Mundo.');
}

var boton = document.getElementById('boton');
boton.addEventListener('click', holaMundo, false);
```
En ocasiones es necesario prevenir un cierto comportamiento que un evento tiene por defecto, para ello existe __preventDefault__, a continuación un ejemplo:

> Este es el código para un formulario muy sencillo
> Hay un input para ingresar el nombre y otro para ingresar el apellido
> Por último, hay un input de tipo *submit* (botón enviar)

```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text">
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text">
  </div>
  <div>
     <input id="submit" type="submit">
  </div>
</form>
<p></p>
```
> Ahora veámos la funcionalidad del JS:
> En la primera parte se guardan en variables los elementos del formulario
> Después tenemos la función que detona el evento submit
> Esta función comprueba si los campos están vacios
> Si la condición se cumple se ejecuta la función *preventDefault* para el *eventObject* (e)
> Impidiendo que el formulario se envíe automáticamente (acción que tiene por defecto este tipo de "botón") para mostrar al usuario un mensaje de error.

 ```javascript
 var form = document.querySelector('form');
 var fname = document.getElementById('fname');
 var lname = document.getElementById('lname');
 var submit = document.getElementById('submit');
 var para = document.querySelector('p');

 form.onsubmit = function(e) {
   if (fname.value === '' || lname.value === '') {
     e.preventDefault();
     para.textContent = 'You need to fill in both names!';
   }
 }
  ```
###### Referencia: * https://sites.google.com/site/dwebtodojs/referencia/modelo-de-eventos-del-dom
* https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events


### Flujo de eventos (Propagation)
Cuando un evento se ejecuta pasa por diferentes fases: *Capture phase*, *Target phase* y *Bubbling phase*, como se muestra en la siguiente imagen.

![flow-event](DOM-event-flow.PNG)

Revisa este [video](https://youtu.be/lgkqf6hldEk?t=15m5s) en donde encontrarás un ejemplo práctico del flujo que siguen los eventos.

## Tipo de eventos
Cuando el usuario interactua con el navegador se pueden desencadenar múltiples tipos de eventos, algunos de los más comunes son:

* Eventos del ratón (mouseEvent)
* Eventos del teclado (keyboardEvent)
* Eventos del formularios
* Eventos de la ventana

###### Referencia: https://es.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/a/dom-event-types

Para mayor información sobre todos los eventos visita este [link](https://sites.google.com/site/dwebtodojs/referencia/modelo-de-eventos-del-dom).

### Key Events
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


[Aquí](https://codepen.io/Inti_Developer/pen/EvGMKG) podrás encontrar un ejemplo sobre la interacción con los eventos.

> Guía de uso:
> 1. Nota como el fondo es de color blanco
> 2. Ahora haz click en el botón *Hacer magia :)*
> 3. Revisa el código y analiza la lógica de programación
> 4. Ahora intenta modificar el código para que reaccione con otros eventos, diviertete ;)

***

[Continuar]( )
