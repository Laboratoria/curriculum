---
type: read
duration: 2h
---

# Flexbox

## Objetivos de aprendizaje

- Aprender los fundamentos de la herramienta de CSS _flexbox_, utilizado para
alinear y posicionar elementos, así como cómo utilizar todas sus
funcionalidades correctamente.

***

## ¿Qué es Flexbox?

Por mucho tiempo las únicas herramientas disponibles para la creación de
_layouts_ en CSS y posicionar elementos con una buena compatibilidad entre
diferentes navegadores era `float` y `position`.
Sin embargo, estas herramientas tenían algunas limitaciones bastante
frustrantes, especialmente cuando teníamos en cuenta lo _responsive_.
Algunas tareas que consideramos básicas en un _layout_, como centrar de manera
vertical un elemento según el contenedor en el que esté, hacer que elementos en
fila ocupen la misma cantidad de espacio o que las columnas sean del mismo
tamaño independientemente del contenido que tengan dentro, eran imposibles o muy
dificiles de lograrse con `float` o `position`, al menos de una forma práctica
y _flexible_.

Flexbox (que viene de _Flexible Box_) fue creada para que estas tareas fuesen
mucho más simples y funcionales: los hijos de un elemento con Flexbox pueden
posicionarse en cualquier dirección y pueden tener dimensiones flexibles para
adaptarse.

## Elementos

**Flex container** es el elemento que va a contener una estructura de elementos.
Se puede definir utilizando la propiedad `display` con valor `flex` o
`inline-flex`.

```html
  <div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
```

```css
  .flex-container {
    display: flex;
  }
```

**Flex Item** los elementos _hijos_ de un flex container.

**Ejes** son las direcciones basicas que existen en un flex container: _main
axis_ que sería el eje horizontal o el eje principal y _cross axis_ que es el
eje vertical.

## Propriedades para elementos madre

![container flex](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)

Cuando utilizamos _Flexbox_, es muy importante saber qué propiedades son
declaradas en los elementos madre (por ejemplo, un `section` que alineará a los
elementos hijos o _flex items_) y cuáles serán declarados en los elementos
hijos.
Abajo estan algunas de las propiedades que deben ser declaradas utilizando un
elemento madre como selector (para alinear a sus hijos):

**flex-direction** determina el origen y el fin del flujo de dos items. Siguen
el patrón establecido en la escritura occidental: de izquierda hacia derecha en
`row`, de arriba hacia abajo en `column`, y para indicar que sea el sentido
inverso, podemos utilizar `-reverse`.

```css
  .flex-container {
    flex-direction: row | row-reverse | column | column-reverse;
  }
```

![flex-direction](https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg)

Podrás definir si los elementos tienen que caber en una misma línea o se iran
rompiendo en varias líneas con la propiedad **flex-wrap**.

```css
  .flex-container {
    flex-wrap: nowrap | wrap | wrap-reverse;
  }
```

![flex-wrap](https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg)

La propiedad **flex-flow** es un tipo de propiedad _shorthand_ (una sola
declaración que incluye varios valores relacionados a una misma propiedad) que
incluye `flex-direction` y `flex-wrap`. Determina el orden en el cual aparecerán
los elementos.

**justify-content** define la alineación de los hijos en el largo del eje
principal.

```css
  .flex-container {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  }
```

![justify-content](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)

**align-items** define el comportamiento predeterminado de como los _flex items_
son alineados de acuerdo al eje vertical (_cross axis_). De esta forma, funciona
de una manera similar a `justify-content`, pero en el eje perpendicular.

```css
  .flex-container {
    align-items: stretch | flex-start | flex-end | center | baseline;
  }
```

![align-items](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)

**align-content** alinea el contenido dentro del contenedor cuando haya espacio
extra en el eje vertical, similar a como `justify-content` alinea los items
individuales en el eje principal.

```css
  .flex-container {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  }
```

![align-content](https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg)

## Propriedades para elementos hijos

A continuación, veremos las propiedades que pueden ser declaradas teniendo como
selector a los elementos hijos.

```html
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>
```

Esto significa que donde existe un elemento madre con propiedad _flex_, es
posible atribuir propiedades flex específicas a sus hijos.

_¡Importante!_

- CSS no se encarga de la jerarquía entre madre e hijos; no va a aplicar las
propiedades flex a elementos HTML que no estén directamente relacionados.
- Para que las propiedades funcionen en los elementos hijos, los contenedores
madre deberán tener la propiedad _flex_.
- Las propiedades `float`, `clear` y `vertical-align` no tienen ningún efecto en
los _flex items_.

La propiedad **order** determina el orden en el cual apareceran los elementos.

```css
  .flex-item {
    order: <número>; /* el valor por default es 0*/
  }
```

![order](https://css-tricks.com/wp-content/uploads/2018/10/order.svg)

**flex-grow** define la habilidad de un elemento hijo de 'crecer' y ocupar un
área más grande si es necesario. Por ejemplo, si en una lista de 3 hijos, 2 de
ellos tienen la propiedad `flex-grow: 1` y uno de ellos tiene `flex-grow: 2`,
este último crecerá para ocupar el doble de tamaño de sus hermanos.

```css
  .flex-item {
    flex-grow: <número>; /* el valor por default es 0 */
  }
```

![grow](https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg)

**align-self** permite un alineamiento predeterminado (definido por
`align-items`) que sobrescribirá para items individuales.

```css
  .flex-item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
  }
```

![align-self](https://css-tricks.com/wp-content/uploads/2018/10/align-self.svg)

Existen otras propiedades para los hijos como `flex-shrink`, `flex-basis` y el
shorthand `flex`, puedes investigar más sobre ellos para conocer aún más
propiedades.

## Practiquemos

[Flexbox Froggy](https://flexboxfroggy.com/)

## Lecturas Complementarias

Así como cualquier otra nueva funcionalidad que aprendemos, es muy importante
practicar bastante e investigar siempre que tengamos dudas. Dejamos algunos
links con más información debajo.

Este contenido se basa en su mayoría en el tutorial
[CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/),
¡guardenlo en sus favoritos para siempre tenerlo a mano!

- [Flexbox explicado con gifs (en inglés)](https://medium.freecodecamp.org/even-more-about-how-flexbox-works-explained-in-big-colorful-animated-gifs-a5a74812b053)

- [Flexbox en MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

- [Tabla con funcionalidades de Flexbox](https://internetingishard.com/html-and-css/flexbox/flexbox-layouts-7abd58.png)
