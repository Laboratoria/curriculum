# Redibujo del navegador

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

Con la llegada de las aplicaciones ricas de internet (RIA: Rich Internet
Applications), nuestras páginas requieren mejor experiencia de usuario, lo que
lleva a un mayor manejo del DOM con largas hojas de código `javascript`,
animaciones, etc. Pero esto lleva a un problema que no siempre se prevé antes
de desarrollar y de pronto todo empieza a funcionar lento o se come la memoria
de la maquina del cliente.

El problema con la web no es `javascript`, sino el DOM:

1 Cada vez que modificamos el DOM resultando en un lindo efecto visual, el

explorador realiza lo que se llama “re-flow”, re-dibujar el DOM.

2 Cada explorador maneja la memoria a su gusto, el DOM es peso en memoria que

no siempre se libera como lo esperamos, o ni siquiera pensamos en lo que va a
pesar después de que ejecute nuestra maravillosa función JS.

Para el caso 1 lo que se puede hacer es intentar reducir las animaciones y
modificaciones, eso soluciona el problema del re-flow pero no el hecho de que
ahora tenemos menos animaciones y efectos visuales. Si tienen la posibilidad
de utilizar HTML 5, una buena opción es la utlización de Canvas, lo que es
mucho menos pesado al momento de realizar animaciones. Podemos dibujar e
interactuar con los eventos del cliente, como ser mouse y teclado pero sin el
trabajo que requiere un re-flow ya que no usamos el DOM.

En el caso 2 jQuery puede ser de gran ayuda con sus funciones `empty()` y
`remove()`, las cuales nos liberan a través de selectores los elementos del
DOM.

Un ejemplo común es realizar llamadas ajax y refrescar una lista de elementos,
simulemos eso:

```js
var cantidadEjecuciones = 0;

function AgregarElementos(){
    cantidadEjecuciones++;

    $('#unDiv').html('');

    for(let i=0; i<100; i++) {
       $('#unDiv').append($('<p>').text('texto'));
    }

    //Si ejecutó menos de 5 veces, vuelvo a ejecutar.
    if (cantidadEjecuciones <= 5){
        setTimeout(function() {
            AgregarElementos();
        }, 2000);
    }
}

AgregarElementos();
```

La función anterior simula una carga de párrafos a un div cada 2 segundos, 5
veces. A simple vista la función es llamada, limpia el `div` y agrega 100
párrafos nuevos. El problema es que no se están liberando los objetos de
memoria, como parece y cada vez que ejecuto la función, se agregan 100 más.

```js
var cantidadEjecuciones = 0;

function AgregarElementos(){
    cantidadEjecuciones++;

    //Limpio el DOM con los elementos anteriores.
    $('#unDiv p').empty().remove();

    for(let i=0; i<100; i++) {
       $('#unDiv').append($('<p>').text('texto'));
    }

    //Si ejecutó menos de 5 veces, vuelvo a ejecutar.
    if (cantidadEjecuciones <= 5){
        setTimeout(function() {
            AgregarElementos();
        }, 2000);
    }
}

AgregarElementos();
```

De esta manera, justo antes de agregar los 100 nuevos párrafos limpio el dom
utilizando el `remove()` de jQuery y así también la memoria.

## Es útil entender cuándo se activan los re-flow

1 Adición, eliminación o cambio de elementos DOM visibles.

La primera es obvia, el uso de JavaScript para cambiar el DOM provocará un
re-flow.

2 Adición, eliminación o cambio de estilos CSS.

Del mismo modo, aplicar directamente estilos CSS o cambiar la clase puede
alterar el diseño. Cambiar el ancho de un elemento puede afectar a todos los
elementos de la misma rama DOM ya los que la rodean.

3 Animaciones y transiciones CSS3.

Cada marco de la animación causará un reflujo.

4 Uso de `offsetWidth` y `offsetHeight`.

Curiosamente, leer la propiedad `offsetWidth` y `offsetHeight` de un elemento
puede desencadenar un reflow inicial para calcular las cifras.

5 Acciones de usuario

Finalmente, el usuario puede activar los re-flow activando un efecto `hover`,
ingresando texto en un campo, cambiando el tamaño de la ventana, cambiando las
dimensiones de fuente, cambiando hojas de estilo o fuentes.

El caudal de flujo de procesamiento de re-flow variará. Algunos navegadores
son mejores que otros en ciertas operaciones. Algunos elementos generan más
re-flow que otros. Afortunadamente, hay varios consejos generales que puede
utilizar para mejorar el rendimiento, como el caso que vimos de ejemplo
anteriormente.
