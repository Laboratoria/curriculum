# Events handling

type: read
duration: 20min

***

<iframe
  src="https://goo.gl/wBwVRr"
  frameborder="0"
  width="684"
  height="430"
  allowfullscreen="true"
  mozallowfullscreen="true"
  webkitallowfullscreen="true"></iframe>

Un evento de JavaScript por sí mismo carece de utilidad. Para que los eventos
resulten útiles, se deben asociar funciones o código JavaScript a cada evento.
De esta forma, cuando se produce un evento se ejecuta el código indicado, por
lo que la aplicación puede responder ante cualquier evento que se produzca
durante su ejecución.

Las funciones o código JavaScript que se definen para cada evento se denominan
manejador de eventos (event handlers en inglés) y como JavaScript es un
lenguaje muy flexible, existen varias formas diferentes de indicar los
manejadores:

* Manejadores como atributos de los elementos XHTML
* Manejadores como funciones JavaScript externas
* Manejadores "semánticos"

## Manejadores como Atributos de XHTML

Se trata del método más sencillo y a la vez menos profesional de indicar el
código JavaScript que se debe ejecutar cuando se produzca un evento. En este
caso, el código se incluye en un atributo del propio elemento XHTML. En el
siguiente ejemplo, se quiere mostrar un mensaje cuando el usuario pinche con el
ratón sobre un botón:

```html
<input type="button" value="Pinchame y verás" onclick="console.log('Gracias por pinchar');" />
```

En este método, se definen atributos XHTML con el mismo nombre que los eventos
que se quieren manejar. El ejemplo anterior sólo quiere controlar el evento de
pinchar con el ratón, cuyo nombre es onclick. Así, el elemento XHTML para el que
se quiere definir este evento, debe incluir un atributo llamado onclick.

El contenido del atributo es una cadena de texto que contiene todas las
instrucciones JavaScript que se ejecutan cuando se produce el evento. En este
caso, el código JavaScript es muy sencillo

```js
(console.log('Gracias por pinchar');) // ya que solamente se trata de mostrar un mensaje.
```

En este otro ejemplo, cuando el usuario pincha sobre el elemento `<div>` se
muestra un mensaje y cuando el usuario pasa el ratón por encima del elemento,
se muestra otro mensaje:

```html
<div
  onclick="console.log('Has pinchado con el ratón');"
  onmouseover="console.log('Acabas de  pasar el ratón por encima');"
>
  Puedes pinchar sobre este elemento o simplemente pasar el ratón por encima
</div>
```

Este otro ejemplo incluye una de las instrucciones más utilizadas en las
aplicaciones JavaScript más antiguas:

```html
<body onload="console.log('La página se ha cargado completamente');">
 ...
</body>
```

El mensaje anterior se muestra después de que la página se haya cargado
completamente, es decir, después de que se haya descargado su código HTML, sus
imágenes y cualquier otro objeto incluido en la página.

El evento onload es uno de los más utilizados ya que, como se vio en el
capítulo de DOM, las funciones que permiten acceder y manipular los nodos del
árbol DOM solamente están disponibles cuando la página se ha cargado
completamente.

## Manejadores de eventos y variable `this`

JavaScript define una variable especial llamada this que se crea automáticamente
y que se emplea en algunas técnicas avanzadas de programación. En los eventos,
se puede utilizar la variable this para referirse al elemento XHTML que ha
provocado el evento. Esta variable es muy útil para ejemplos como el siguiente:

Cuando el usuario pasa el ratón por encima del `<div>`, el color del borde se
muestra de color negro. Cuando el ratón sale del `<div>`, se vuelve a mostrar el
borde con el color gris claro original.

```html
<div id="contenidos" style="width:150px; height:60px; border:thin solid silver">
  Sección de contenidos...
</div>
```

Si no se utiliza la variable this, el código necesario para modificar el color
de los bordes, sería el siguiente:

```html
<div
  id="contenidos"
  style="width:150px; height:60px; border:thin solid silver"
  onmouseover="document.getElementById('contenidos').style.borderColor='black';"
  onmouseout="document.getElementById('contenidos').style.borderColor='silver';"
>
  Sección de contenidos...
</div>
```

El código anterior es demasiado largo y demasiado propenso a cometer errores.
Dentro del código de un evento, JavaScript crea automáticamente la variable
`this`, que hace referencia al elemento XHTML que ha provocado el evento. Así,
el ejemplo anterior se puede reescribir de la siguiente manera:

```html
<div
  id="contenidos"
  style="width:150px; height:60px; border:thin solid silver"
  onmouseover="this.style.borderColor='black';"
  onmouseout="this.style.borderColor='silver';"
>
  Sección de contenidos...
</div>
```

El código anterior es mucho más compacto, más fácil de leer y de escribir y
sigue funcionando correctamente aunque se modifique el valor del atributo id
del `<div>`.

## Manejadores de eventos como funciones externas

La definición de manejadores de eventos en los atributos XHTML es un método
sencillo pero poco aconsejable para tratar con los eventos en JavaScript. El
principal inconveniente es que se complica en exceso en cuanto se añaden
algunas pocas instrucciones, por lo que solamente es recomendable para los
casos más sencillos.

Cuando el código de la función manejadora es más complejo, como por ejemplo la
validación de un formulario, es aconsejable agrupar todo el código JavaScript
en una función externa que se invoca desde el código XHTML cuando se produce
el evento.

De esta forma, el siguiente ejemplo:

```html
<input
  type="button"
  value="Pinchame y verás"
  onclick="console.log('Gracias por pinchar');"
/>
```

Se puede transformar en:

```js
function muestraMensaje() {
  console.log('Gracias por pinchar');
}
```

```html
<input type="button" value="Pinchame y verás" onclick="muestraMensaje()" />
```

En las funciones externas no es posible utilizar la variable this de la misma
forma que en los manejadores insertados en los atributos XHTML. Por tanto, es
necesario pasar la variable this como parámetro a la función manejadora:

```js
function resalta(elemento) {
  switch(elemento.style.borderColor) {
    case 'silver':
    case 'silver silver silver silver':
    case '#c0c0c0':
      elemento.style.borderColor = 'black';
      break;
    case 'black':
    case 'black black black black':
    case '#000000':
      elemento.style.borderColor = 'silver';
      break;
  }
}
```

```html
<div
  style="padding: .2em; width: 150px; height: 60px; border: thin solid silver"
  onmouseover="resalta(this)" onmouseout="resalta(this)"
>
  Sección de contenidos...
</div>
```

En el ejemplo anterior, a la función externa se le pasa el parámetro this, que
dentro de la función se denomina elemento. Al pasar this como parámetro, es
posible acceder de forma directa desde la función externa a las propiedades
del elemento que ha provocado el evento.

Por otra parte, el ejemplo anterior se complica por la forma en la que los
distintos navegadores almacenan el valor de la propiedad borderColor. Mientras
que Firefox almacena (en caso de que los cuatro bordes coincidan en color) el
valor simple `black`, Internet Explorer lo almacena como `black` `black` `blac`
`black` y Opera almacena su representación hexadecimal `#000000`.

## Manejadores de eventos semánticos

Utilizar los atributos XHTML o las funciones externas para añadir manejadores
de eventos tiene un grave inconveniente, "ensucian" el código XHTML de la
página.

Como es conocido, al crear páginas web se recomienda separar los contenidos
(XHTML) de la presentación (CSS). En lo posible, también se recomienda separar
los contenidos (XHTML) de la programación (JavaScript). Mezclar JavaScript y
XHTML complica excesivamente el código fuente de la página, dificulta su
mantenimiento y reduce la semántica del documento final producido.

Afortunadamente, existe un método alternativo para definir los manejadores de
eventos de JavaScript. Esta técnica consiste en asignar las funciones externas
mediante las propiedades DOM de los elementos XHTML. Así, el siguiente ejemplo

```html
<input
  id="pinchable"
  type="button"
  value="Pinchame y verás"
  onclick="console.log('Gracias por pinchar');"
/>
```

Se puede transformar en:

```js
function muestraMensaje() {
  console.log('Gracias por pinchar');
}

document.getElementById('pinchable').onclick = muestraMensaje;
```

```html
<input id="pinchable" type="button" value="Pinchame y verás" />
```

El código XHTML resultante es muy "limpio", ya que no se mezcla con el código
JavaScript. La técnica de los manejadores semánticos consiste en:

* Asignar un identificador único al elemento XHTML mediante el atributo id
* Crear una función de JavaScript encargada de manejar el evento
* Asignar la función a un evento concreto del elemento XHTML mediante DOM
* Otra ventaja adicional de esta técnica es que las funciones externas pueden
  utilizar la variable this referida al elemento que original el evento.
* Asignar la función manejadora mediante DOM es un proceso que requiere una
  explicación detallada. En primer lugar, se obtiene la referencia del elemento
  al que se va a asignar el manejador:

```js
document.getElementById('pinchable');
```

A continuación, se asigna la función externa al evento deseado mediante una
propiedad del elemento con el mismo nombre del evento:

```js
document.getElementById('pinchable').onclick = ...
```

Por último, se asigna la función externa. Como ya se ha comentado en capítulos
anteriores, lo más importante (y la causa más común de errores) es indicar
solamente el nombre de la función, es decir, prescindir de los paréntesis al
asignar la función:

```js
document.getElementById('pinchable').onclick = muestraMensaje;
```

Si se añaden los paréntesis al final, en realidad se está invocando la función
y asignando el valor devuelto por la función al evento `onclick` de elemento.

El único inconveniente de este método es que los manejadores se asignan
mediante las funciones DOM, que solamente se pueden utilizar después de que la
página se ha cargado completamente. De esta forma, para que la asignación de
los manejadores no resulte errónea, es necesario asegurarse de que la página
ya se ha cargado.

Una de las formas más sencillas de asegurar que cierto código se va a ejecutar
después de que la página se cargue por completo es utilizar el evento `onload`

```js
window.onload = function () {
  document.getElementById('pinchable').onclick = muestraMensaje;
}
```

La técnica anterior utiliza una función anónima para asignar algunas
instrucciones al evento onload de la página (en este caso se ha establecido
mediante el objeto `window`). De esta forma, para asegurar que cierto código
se va a ejecutar después de que la página se haya cargado, sólo es necesario
incluirlo en el interior de la siguiente construcción

```js
window.onload = function () {
  // ...
}
```
