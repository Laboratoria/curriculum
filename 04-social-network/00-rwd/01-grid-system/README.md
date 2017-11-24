# Grid System

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `40min`

***

## Objetivos de Aprendizaje

- Entender qué es el layout
- Conocer una forma sistemática de implementar un layout (grid system)
- Crear nuestro propio sistema de grillas

## Intro

Hola! Espero te encuentres muy bien y contenta luego de todo este tiempo de
sufrimiento y felicidad a la vez :). Nadie dijo que sería fácil pero no
imposible ;). Bueno, pongámonos serios, en esta lectura (self-learning)
aprenderemos sobre el sistema de grillas (grid system). Para empezar, lee el
siguiente artículo escrito por nuestra querida amiga Arabela (egresada de
Laboratoria) para entender de qué trata y luego detallaremos los conceptos
claves de la lectura.

[100% dividios: Grid System y su secuaz el layout](https://medium.com/laboratoria-how-to/cien-por-ciento-divididos-grid-system-y-su-secuaz-el-layout-545e8a90d63e)

Interesante lectura, ¿verdad?. Cosas a resaltar que resultan muy importantes
tener en cuenta son el concepto de layout y la importancia de un grid system.
A continuación resaltaremos los conceptos más importantes.

## ¿Qué es un layout?

Es la estructura visual de nuestra página web. Así de simple, esto implica el
ordenamiento y posicionamiento (distribución) de los elementos que mostraremos
en la web.

Hay distintos tipos de layouts, si quieres conocer algunos detalles de estos,
puedes leer [este blogpost](http://www.4rsoluciones.com/blog/conociendo-los-distintos-tipos-de-layout-en-diseno-web-2/).

> Ten en cuenta que es un post del 2014, por lo cual no es el más actualizado
> pero te puede dar una idea, también recuerda que es para profundizar un poco
> más, así que puedes estar segura que en este momento no es tan necesario :).

Hasta el momento, ¿qué técnicas de CSS has utilizado para crear tu layout? Tal
vez box model (margin, padding), positioning, floats... Toma un momento de tu
vida y reflexiona al respecto :)

![Layout Design Cheatsheet](https://i.pinimg.com/564x/5e/fd/1b/5efd1b49c0aa5e8e231cd00e5b1dc7de.jpg)

## ¿Qué es Grid System?

Una de las formas más sencillas de lograr un diseño organizado es aplicar un
Grid System (sistema de cuadrículas/grillas). Es una técnica que se originó en
el diseño gráfico para impresión de textos.

El grid system ayuda a alinear elementos de página basados ​​en columnas y filas
secuenciadas. Utilizamos esta estructura basada en columnas para colocar texto,
imágenes y funciones de manera consistente a lo largo del diseño. Cada elemento
tiene su lugar que podemos ver al instante y reproducir en otro lugar. Imagina
que las grid son como las cuadrículas que encontramos en los mapas. Las islas,
pueblos y lagos aparecerán en una parte exacta de un mapa, en un conjunto de
coordenadas Norte-Sur/Este-Oeste. Siempre aparecerán en el mismo lugar en otros
mapas.

![Grid](http://test.visitnorway.org/wp-content/uploads/sites/2/2013/02/Grid_3.png)

Como mencionábamos, un grid consta generalmente de containers (contenedores),
rows (filas), columns (columnas) y gutters.

![Grid](https://mdn.mozillademos.org/files/13899/grid.png)

### Elementos del Grid System

- Container

![Container](http://j4n.co/content/4-blog/10-Creating-your-own-css-grid-system/container.png)

El objetivo del container es establecer el ancho de toda la grid. El ancho del
container generalmente es del 100%, pero también es posible que se desee
establecer un ancho máximo para pantallas más grandes.

- Row

![Row](http://j4n.co/content/4-blog/10-Creating-your-own-css-grid-system/row.png)

El propósito del row es evitar que las columns dentro de él se desborden en
otras rows.

- Columns

![Columns](http://j4n.co/content/4-blog/10-Creating-your-own-css-grid-system/column.png)

El propósito de las columns es contener a los elementos que queremos mostrar en
nuestro sitio web.

- Gutters

![Gutters](http://j4n.co/content/4-blog/10-Creating-your-own-css-grid-system/column-gutters.png)

Los gutters son los espacios entre las columns.

### Concluyendo

El sistema de grillas o cuadrículas tiene 3 elementos importantes: contenedor,
fila y columna. Algo a tener en cuenta es que, si bien, la lectura hace
referencia a un grid de 12 columnas, no es el único, podemos encontrar de 6, 9,
16 o 24 columnas. El más utilizado es el de 12 y es el que seguiremos en esta
unidad.

## ¿Cómo construyo mi layout con un sistema de grillas?

Para construir una web usando un sistema de grillas, primero imaginemos el
layout, para este ejemplo, haremos algo simple:

![12 columns grid layout](https://blog.keycdn.com/blog/wp-content/uploads/2017/02/fluid-grid.png)

Una vez que sabemos lo que vamos a hacer, crearemos nuestros 3 elementos
importantes en CSS:

```css
.container {
  width: 100%
}

.row:after,
.row:before {
  content: "";
  clear: both;
}

[class*='col-'] {
  float: left;
}

.col-1 {
  width: 8.33%;
}

.col-2 {
  width: 16.66%;
}

.col-3 {
  width: 25%;
}

.col-4 {
  width: 33.33%;
}

.col-5 {
  width: 41.66%;
}

.col-6 {
  width: 50%;
}

.col-7 {
  width: 58.33%;
}

.col-8 {
  width: 66.66%;
}

.col-9 {
  width: 75%;
}

.col-10 {
  width: 83.33%;
}

.col-11 {
  width: 91.66%;
}

.col-12 {
  width: 100%;
}
```

¿No te quedó muy claro cómo crear el grid system? Aquí, la súper teacheer
Allison creó un video con mucho amor para ti:

[![Grid System by Allison](https://img.youtube.com/vi/uUGHF0dM6GA/0.jpg)](https://www.youtube.com/watch?v=uUGHF0dM6GA)

Luego, creas la estructura en el HTML de la siguiente manera:

```html
<div class="container">
  <div class="row">
    <div class="col-1">1</div>
    <div class="col-11">11</div>
  </div>
  <div class="row">
    <div class="col-2">2</div>
    <div class="col-10">10</div>
  </div>
</div>
```

Agregando un poco de estilos como tamaños, colores y bordes podemos obtener el
resultado planteado para las 2 primeras filas del layout:

<iframe height='265' scrolling='no' title='CSS: Grid System'
src='//codepen.io/ivandevp/embed/ZaROvb/?height=265&theme-id=0&default-tab=css,result&embed-version=2'
frameborder='no' allowtransparency='true' allowfullscreen='true'
style='width: 100%;'>
  See the Pen
  <a href='https://codepen.io/ivandevp/pen/ZaROvb/'>CSS: Grid System</a> by Ivan
  (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on
  <a href='https://codepen.io'>CodePen</a>.
</iframe>

¿Te gustó? Completa las filas restantes, puedes dar click en `Edit on CodePen` y
te mandará a su página, para que puedas guardar tu trabajo en tu cuenta (créala
si aun no la tienes, 100% recomendado), y una vez en el editor le das click en
**Fork** (sí, igual que con tu súper nuevo amigo Github) y agrega/modifica lo
que desees :).

Aquí un último ejemplo de cómo harías un layout sin grillas:

<iframe height='265' scrolling='no' title='CSS: Layout sin grid'
src='//codepen.io/ivandevp/embed/wPXWXO/?height=265&theme-id=0&default-tab=css,result&embed-version=2'
frameborder='no' allowtransparency='true' allowfullscreen='true'
style='width: 100%;'>
  See the Pen
  <a href='https://codepen.io/ivandevp/pen/wPXWXO/'>CSS: Layout sin grid</a>
  by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on
  <a href='https://codepen.io'>CodePen</a>.
</iframe>

Ahora, encuentra las ventajas de usar grillas:

<iframe height='265' scrolling='no' title='CSS: Layout con grid' src='//codepen.io/ivandevp/embed/eeKzjZ/?height=265&theme-id=0&default-tab=css,result&embed-version=2'
frameborder='no' allowtransparency='true' allowfullscreen='true'
style='width: 100%;'>
  See the Pen
  <a href='https://codepen.io/ivandevp/pen/eeKzjZ/'>CSS: Layout con grid</a>
  by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on
  <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Reflexión

En esta lectura, hemos visto qué es un layout, además de qué es un sistema de
grillas. Practicamos implementando un grid system de 12 columnas, no es la única
forma de crearlo, te recomendamos busques otra forma de crearlos y no olvides
practicar, practicar, practicar * `Math.random() * +Infinity` (si no entendiste
que fue esto último, googlealo es JS) :).

Espero te haya gustado este tema, anda pensando en qué te va a servir durante
esta unidad para crear tu propia red social!

No olvides...

![CSS is awesome](https://huangxuan.me/css-sucks-2015/attach/joke/css_is_awesome.png)
