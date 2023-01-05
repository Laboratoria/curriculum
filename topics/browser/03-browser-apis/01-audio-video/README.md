---
type: read
duration: 30min
---

# Media: Audio & Video

## Objetivos de Aprendizaje

Aprender a grandes rasgos cómo usar el API de Audio y Video.

## Audio y video en la web

> Lxs desarrolladorxs web han querido usar video y audio desde hace mucho tiempo,
> a inicio de los 2000, cuando empezamos a tener un ancho de banda lo
> suficientemente rápido para soportar cualquier tipo de video (los archivos de
> video son más grandes que texto o incluso imágenes). Al principio, las
> tecnologías web nativas como HTML no tenían la habilidad para embeber video o
> audio en la web, así que tecnologías propietarias (o basadas en plugins) como
> Flash (y posteriormente Silverlight) se volvieron muy populares para manejar
> este tipo de contenido. Estas tecnologías funcionaron bien, pero tenían un gran
> número de problemas, incluyendo que no funcionaban bien con HTML/CSS, seguridad
> y problemas de accesibilidad.
>
> Una solución nativa resolvería esto si se hiciera bien. Afortunadamente, unos
> años después, la especificación de HTML5 incluiría estos _features_ con los
> elementos `<video>` y `<audio>`, y algunas JavaScript APIs para controlarlos.

Este es un extracto de [la documentación de MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
sobre las etiquetas de audio y video, para entrar en contexto de lo genial que
fue agregar soporte nativo desde HTML5 con su API de media.

## Insertando contenido multimedia a nuestra web

Para insertar contenido multimedia en nuestra web, debemos usar las etiquetas
`<video>` y `<audio>`. A continuación te mostramos unos ejemplos de cómo
insertarlos:

<iframe
  height='265'
  scrolling='no'
  title='Video Tag'
  src='//codepen.io/ivandevp/embed/gvMPjW/?height=265&theme-id=0&default-tab=html,result&embed-version=2'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'
>
  See the Pen [Video Tag](https://codepen.io/ivandevp/pen/gvMPjW/) by Ivan
  ([@ivandevp](https://codepen.io/ivandevp)) on [CodePen](https://codepen.io).
</iframe>

<iframe
  height='265'
  scrolling='no'
  title='Audio Tag'
  src='//codepen.io/ivandevp/embed/PQzNoE/?height=265&theme-id=0&default-tab=html,result&embed-version=2'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'
>
  See the Pen [Audio Tag](https://codepen.io/ivandevp/pen/PQzNoE/) by Ivan
  ([@ivandevp](https://codepen.io/ivandevp)) on [CodePen](https://codepen.io).
</iframe>

¿Te diste cuenta de lo sencillo que es agregarlo? Bueno, adicional a esto,
debemos de tener en cuenta lo siguiente:

- Atributos, en los ejemplos la etiqueta video y audio cuentan con un atributo
  `controls`, ¿te imaginas qué pasa si se lo quitas?. Así como este atributo hay
  muchos más, conforme vayas necesitando irás reconociendo qué otros existen.
- Soporte entre navegadores, si te diste cuenta, solo usamos un video con
  extensión `.mp4` y un audio con extensión `.mp3`. No todos los navegadores
  soportan el mismo formato, para garantizar que nuestro audio y/o video
  funcione en cualquier formato, debemos de agregarlo nuestro recurso en
  diversos formatos, eso lo logramos con la etiqueta `<source>`.

## ¿Dónde encuentro la lista de atributos y formatos soportados?

La W3Schools (uno de tus mejores amigos en este momento) tiene una serie de
recursos que te pueden ayudar a obtener esta información.

- [HTML `<audio>` Tag](https://www.w3schools.com/tags/tag_audio.asp), aquí
  puedes encontrar la lista de atributos que soporta esta etiqueta y formatos
  de audio que cada navegador soporta.
- [HTML `<video>` Tag](https://www.w3schools.com/tags/tag_video.asp), aquí
  puedes encontrar la lista de atributos que soporta esta etiqueta y formatos
  de video que cada navegador soporta.
- [HTML Audio/Video DOM Reference](https://www.w3schools.com/tags/ref_av_dom.asp),
  no olvidar que al ser etiquetas de HTML, éstas pueden ser manipuladas por el
  DOM, y por lo tanto cuentan con métodos y eventos que podemos utilizar. Esto
  tenlo como referencia, no es necesario que te memorices todo esto ahora mismo.

## ¿Y cómo interactúo con la API?

Interactuamos a través de la interfaz `HTMLMediaElement`, ésta agrega las
propiedades y métodos necesarios para soportar capacidades básicas relacionados
a elementos multimedia (audio y video).

Ejemplo:

<iframe
  height='265'
  scrolling='no'
  title='HTMLMediaElement JS'
  src='//codepen.io/ivandevp/embed/KQMWMy/?height=265&theme-id=0&default-tab=js,result&embed-version=2'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'
>
  See the Pen [HTMLMediaElement JS](https://codepen.io/ivandevp/pen/KQMWMy/) by
  Ivan ([@ivandevp](https://codepen.io/ivandevp)) on [CodePen](https://codepen.io).
</iframe>

¿Cómo te imaginas que sería con el audio? ¿Básicamente lo mismo no? Esperamos lo
intentes y veas el resultado.

¿Y cómo sería con jQuery?

<iframe
  height='265'
  scrolling='no'
  title='HTMLMediaElement jQuery'
  src='//codepen.io/ivandevp/embed/XZKMjx/?height=265&theme-id=0&default-tab=js,result&embed-version=2'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'
>
  See the Pen [HTMLMediaElement jQuery](https://codepen.io/ivandevp/pen/XZKMjx/)
  by Ivan ([@ivandevp](https://codepen.io/ivandevp)) on
  [CodePen](https://codepen.io).
</iframe>

Si bien jQuery nos permite manipular el DOM con mayor facilidad, no provee
soporte para `HTMLMediaElement`s, y lo que nos queda por hacer es obtener el
elemento del DOM usando el método `.get` y debido a que es un único elemento
(por lo tanto, el primero), hacemos `$video.get(0)` para poder interactuar con
el API de video. Otro detalle interesante a notar es que, al estar esperando que
el DOM esté listo a través de `$(document).ready` no significa necesariamente
que el video haya cargado como tal, por eso, para obtener la duración, fue
necesario agregar un evento que nos indique que los datos del video se han
terminado de cargar (`video.onloadeddata`).

## Recursos

Si deseas hacer una aplicación con audio y/o video, pero no se te ocurre de
dónde obtener dicho audio y/o video, puedes obtener algunos gratuitos desde los
siguientes enlaces:

- [Coverr](https://coverr.co/)
- [Pexels](https://videos.pexels.com/)
- [Clyp.it](https://clyp.it/)

Si en alguna no te deja descargar, recuerda que eres una desarrolladora web y
tienes superpoderes para inspeccionar elementos y obtener los enlaces desde
tu Dev Tools ;).
