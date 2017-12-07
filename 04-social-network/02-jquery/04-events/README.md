# Eventos

- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `90min`

***

## Objetivos de aprendizaje

- Aprender como podemos trabajar los eventos a través de jQuery.

### Eventos con jQuery

jQuery provee métodos para asociar controladores de eventos
(en inglés _event handlers_) a selectores. Cuando un evento ocurre, la función
provista es ejecutada.

```js
$('selector').evento(function() {
  Instrucciones que serán ejecutadas al momento de ocurrir el evento
});
```

En este ejemplo vemos que estamos seleccionando a todos los párrafos que
podamos tener en nuestro HTML, enseguida le asignamos el evento que vamos a
usar y por ultimo la serie de instrucciones que deben ocurrir.

```js
$('p').click(function() {
    console.log('click');
});
```

Los eventos que son usados con más frecuencia son:

| EVENTO | DESCRIPCIÓN |
| ------ | ----------- |
|.click() | pulsar una vez el ratón sobre un elemento|
|.mouseenter() | El ratón se sitúa encima de un elemento|
|.mouseleave() | El ratón, que estaba situado encima de un elemento, sale de él|
|.mousedown() | Momento en que presiona el botón, independientemente de si se suelta o no, vale tanto para el botón izquierdo como para el derecho.|
| .mouseup() | soltar un botón del ratón después de hacer click. El evento se produce sólo en el momento de soltar el botón. |
|.keydown() | El evento se produce en el momento que se presiona una tecla, independientemente de si se libera la presión o se mantiene. Se produce una única vez en el momento exacto de la presión.|
|.keypress() | Se produce al tener pulsada una tecla, Si se mantiene pulsada, el evento se produce varias veces, de la misma manera que se escriben varios caracteres al mantenerla pulsada. Se corresponde con el hecho de tener la tecla pulsada.|
|.keyup() | El evento se produce en el momento de dejar de presionar una tecla que teníamos pulsada.|
|.focus() | El elemento tiene el foco de la aplicación. igual que el evento "onfocus" de javascript.|

En esta ocasión revisaremos los 2 siguientes enlaces, no es necesario que los entendamos al 100%, ya que sólo leyendo se nos puede dificultar un poco pero a la hora que lo pongamos en práctica nos ayudará a entender diferentes comportamientos de nuestros eventos.

[Inicia aquí](http://librosweb.es/libro/fundamentos_jquery/capitulo_5.html) y continua con este [siguiente](http://librosweb.es/libro/fundamentos_jquery/capitulo_5/el_objeto_del_evento.html)

Y aquí tenemos una lista de todos los eventos que se pueden usar en JQuery, para ejecutar métodos y funciones.
![lista-eventos](https://github.com/AnaSalazar/curricula-js/blob/04-social-network/04-social-network/02-jquery/04-events/lista-eventos.png?raw=true)
