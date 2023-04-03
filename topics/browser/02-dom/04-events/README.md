---
type: read
duration: 30min
---

# Eventos

## Objetivos de Aprendizaje

En esta unidad aprenderemos:

1. ¿Qué es un evento y para qué nos sirve?
2. ¿Cómo usarlos?
3. Manejo y flujo de eventos (propagación).
4. Tipos

***

## ¿Qué es un evento?

Un _evento_ representa la idea de que algo ha pasado en nuestro programa, y
tenemos la oportunidad de _hacer algo_ o _reaccionar_ a esa cosa que ha ocurrido
(el _evento_).

Por ejemplo, la interacción con el usuario se hace através de eventos. Cuando el
usuario realiza una acción como hacer un `click`, esto _dispara_ un evento que
nos va a permir reaccionar, y así agregar interacción al programa. A cada evento
se le asocian una o más funciones que serán ejecutadas cuando ocurra dicho
evento. A estas funciones las llamamos _manejadores_ o _manejadores de eventos_
(conocidos en inglés como _event handlers_ o _event listeners_).

Aquí hay un [video](https://www.youtube.com/watch?v=gyICdb1iwII) de referencia.

## ¿Cómo usar los eventos?

Para poder hacer uso de la magia de los eventos es necesario saber primero como
"escucharlos", esto se puede lograr mediante el método __addEventListener__.

La sintaxis es muy sencilla:

```javascript
  elemento_que_escucha.addEventListener('evento', funcion_a_ejecutar);
```

Aquí un [link](http://www.codexexempla.org/curso/curso_4_3_e.php) de
referencia.

Existen diferentes formas de asociar un evento a elementos del DOM, para saber
más sobre ello visita éste [link](http://librosweb.es/libro/javascript/capitulo_6/modelo_basico_de_eventos_2.html)
(a partir del punto 6.2).

### Manejo de eventos

Además de agregar el _listener_ al evento también se puede eliminar usando el
método __removeEventListener__, el cual funciona casi de la misma manera. La
sintaxis es de la siguiente manera:

```javascript
  elemento_que_escucha.removeEventListener('evento', funcion_a_eliminar);
```

Para que el método funcione correctamente es obligatorio mandar como parámetro
el callback (función) utilizado con addEventListener.

Ahora hablemos sobre __objectEvent__ que es otro tema de importancia en el
manejo de eventos. Cuando un evento ocurre, la función que se ejecutará
necesita información adicional sobre éste.

 __objectEvent__ es el objeto que representa el evento que se ha producido. Se
 crea automáticamente cuando ocurre el evento y se destruye una vez se haya
 ejecutado su función manejadora. Éste objeto tiene un conjunto de propiedades
 con información sobre el evento. En el siguiente código podrás encontrar un
 ejemplo.

```javascript
const holaMundo = (event) => {
  const evento = window.event || event;
  alert('Hola Mundo.');
};

const boton = document.getElementById('boton');
boton.addEventListener('click', holaMundo, false);
```

En ocasiones es necesario prevenir un cierto comportamiento que un evento tiene
por defecto, para ello existe __preventDefault__, a continuación un ejemplo:

> Este es el código para un formulario muy sencillo
> Hay un input para ingresar el nombre y otro para ingresar el apellido
> Por último, hay un input de tipo _submit_ (botón enviar)

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
> Si la condición se cumple se ejecuta la función _preventDefault_ para el
_eventObject_ (e)
> Impidiendo que el formulario se envíe automáticamente (acción que tiene por
defecto este tipo de "botón") para mostrar al usuario un mensaje de error.

```javascript
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');
const para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}
```

### Flujo de eventos (Propagation)

Cuando un evento se ejecuta pasa por diferentes fases: _Capture phase_, _Target
phase_ y _Bubbling phase_, como se muestra en las siguientes imágenes.

![Event propagation tree](https://user-images.githubusercontent.com/110297/120246086-d60a0180-c234-11eb-9c38-0535154be569.png)

![Event propagation markup](https://user-images.githubusercontent.com/110297/120246026-9e02be80-c234-11eb-8ce5-c73e13ae900d.png)

Revisa éste [video](https://youtu.be/lgkqf6hldEk?t=15m5s) en donde encontrarás
un ejemplo práctico del flujo que siguen los eventos.

## Tipo de eventos

Cuando el usuario interactúa con el navegador se pueden desencadenar múltiples
tipos de eventos, algunos de los más comunes son:

- Eventos del ratón (mouseEvent)
- Eventos del teclado (keyboardEvent)
- Eventos del formularios
- Eventos de la ventana

Para mayor información sobre todos los eventos visita éste [link](https://sites.google.com/site/dwebtodojs/referencia/modelo-de-eventos-del-dom)
y también éste otro [link](https://es.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/a/dom-event-types).

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

[Aquí](https://codepen.io/intidev/pen/rNOQVyO) podrás encontrar un
ejemplo sobre la interacción con los eventos.

> Guía de uso:
>
> 1. Nota como el fondo es de color blanco
> 2. Ahora haz click en el botón _Hacer magia :)_
> 3. Revisa el código y analiza la lógica de programación
> 4. Ahora intenta modificar el código para que reaccione con otros eventos,
  diviertete ;)

Finalmente, te adjuntamos el [link](https://developer.mozilla.org/es/docs/Web/Reference/Events)
de la documentación oficial explicando todo acerca de eventos:
