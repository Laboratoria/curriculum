# Grid System

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

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

## Elementos del Grid System

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

El proposito de las columns es contener a los elementos que queremos mostrar en
nuestro sitio web.

- Gutters

![Gutters](http://j4n.co/content/4-blog/10-Creating-your-own-css-grid-system/column-gutters.png)

Los gutters son los espacios entre las columns.

- - -

Si quieres entender un poco más cómo funcionan las grids, lee el siguiente .
