# `this` vs `event.target`

type: read
duration: 10min

***

Cuando empezamos a tener aplicaciones con mucho Javascript pueden empezar a
surgir pequeños problemas de optimización, como que la aplicación tarde en
responder o que tenga un consumo excesivo de memoria. Uno de esos problemas
puede estar en los eventos asignados al DOM.
Supongamos que tenemos una lista bastante grande de elementos. Al hacer `click`
en cada uno de esos elementos se ejecutará una función que muestra la
información del item elegido.
El código que implementemos recogerá todos los elementos de la lista, la
recorre mediante un bucle y asigna a cada elemento un evento.
Es ahí donde podemos tener problemas. A cada elemento se le está asignando un
evento, que a su vez está recibiendo una función anónima. Esto quiere decir
que si tenemos una lista de 1000 elementos, estaremos asignando 1000
eventos, incrementando el uso de RAM de nuestra aplicación.

Para optimizar esto podemos hacer un solo evento sobre la lista completa, y
cuando se haga click comprobar el elemento que se ha pulsado. Podemos obtener
ese elemento con `event.target`.

Ya saben que cuando queremos escuchar eventos en JavaScript (por ejemplo,
cuando se hace click en un botón), la sintaxis es la siguiente.

```js
//vaniila
el.addEventListener('eventType', () =>
  // eventHandler
);
// jQuery
$('elSelector').on('eventType', () =>
  // eventHandler
);
```

Donde `eventType` es un tipo de evento (o puedes encontrar en la documentación
de JS) y el `eventHandler` es la función que se ejecutará cuando el `eventType`
se dispare.

Hasta ahi, perfecto. Sin embargo, si quieres que varios elementos escuchen el
mismo `eventType` y ejecuten el mismo `eventHandler` (por ejemplo, en una
galería de fotos poder hacer clic en cualquiera de las miniaturas para mostrar
la versión ampliada), nuestro primer razonamiento sería iterar sobre ellos.

```js
var galleryImg = document.querySelectorAll('.gallery-item');
for(let i = 0; i < galleryImg.length; i++) {
  galleryImg[i].addEventListener('eventType', () =>
    // eventHandler
  )
}
```

Si usamos jQuery, es más sencillo aún, pues hace la iteración por nosotros

```js
$('.gallery-item').on('eventType', () =>
  // eventHandler
)
```

Sin embargo, el principal problema con estos enfoques es que solo aplica a los
elementos existentes en el DOM al cargar la página. Con lo cual, si añadimos
elementos dinámicamente, estos no se verán afectados por el evento. Por otro
lado, si evitamos la iteración, podemos ganar rendimiento. Para eso utilizamos
la Delegación de eventos que consiste en escuchar el evento en el elemento
padre solamente para luego capturarlo cuando ocurra en sus hijos. Esto gracias
a un comportamiento de los eventos que vimos en la lectura pasada `Bubbling`.

## Recordemos Bubbling

`Bubbling` (burbujeo) es una fase de los eventos (la otra es capturing y ambos
dan para un próximo post en más detalle) que significa que cuando un evento
ocurre en el DOM, es capturado en el elemento HTML más profundo posible, y de
ahí se va elevando hacia sus padres en orden de jerarquía hasta llegar al
objeto global (`window`). Por lo tanto, cuando un evento ocurre en un elemento,
también está ocurriendo en sus padres.

## Delegación de eventos

Ahora que sabemos que si un evento ocurre  en un hijo, también está ocurriendo
en sus padres. Volvamos al ejemplo de la galería. Ahora no necesitamos iterar
sobre los elementos, sino escuchar el evento en el padre.

Tomemos en cuenta el siguiente HTML

```html
<div class="gallery-container">
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
  <a href="" class="gallery-item"><img src="" alt=""></a>
</div>
```

Tenemos nueve elementos gallery-item. Pero podrían ser más. Sin embargo, como
ya conocemos la delegación, escucharemos el evento una sola vez en el padre.
Recuerda que podemos pasar el objeto Event como parámetro (lo nombraremos `e`
en nuestros ejemplos), al `eventHandler` para así obtener el `target` que es
el elemento que dispara el evento.

```js
let gallery = document.querySelector('.gallery-item');
gallery.addEventListener('eventType', e =>
  console.log(e.target) // nos imprime en consola el elemento que dispara el
  evento
);
```

Y como en nuestro caso queremos capturar el evento en todos los elementos con
la clase gallery-item, lo haremos así:

```js
// vanilla
let gallery = document.querySelector('gallery-container');
gallery.addEventListener('eventType', e => {
  if(e.target.classList.contains('gallery-item')){
    //...
  }
});
// jQuery
$('.gallery-container').on('eventType', '.gallery-item', () =>
  //...
);
```

## Sobre ES6 y this

En esta lectura estamos usando `ES6` (si no lo estás usando, deberías). Ten en
cuenta que si usas una `arrow function` para el `eventHandler` no podrás
capturar el elemento que dispara el evento usando `this` (como en `ES5`) por
eso se recomienda usar `e.target`
