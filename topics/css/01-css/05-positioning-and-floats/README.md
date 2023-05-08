---
type: read
duration: 2h
---

# Positioning & Floats

## Objetivos de Aprendizaje

- Aprender a maquetar en html/css utilizando positioning
- Aprender a maquetar en html/css utilizando floats
- Reconocer cuándo es mejor usar cada uno

***

## 1. Flujo del Documento

>A continuación, la traducción a Español del artículo [MDN - Positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning):

Positioning es un tema bastante complejo, por lo que antes de sumergirnos en el
código vamos a repasar un par de cosas sobre el flujo del documento que hemos
visto hasta ahora.

En primer lugar, hemos visto que los elementos individuales son como "cajas" que
se presentan tomando su contenido y añadiéndoles relleno, borde y margen a su
alrededor - el modelo de la caja que vimos en la lección anterior.

También hemos visto que, por defecto, el contenido de un elemento de tipo
**bloque** es 100% del ancho del elemento padre y tan alto como su contenido.
Por el contrario, elementos de tipo **inline** son tan altos y tan amplios como
su contenido. No se puede establecer el ancho o la altura para elementos inline

- Los elementos inline simplemente se sitúan dentro del contenido de los
  elementos de nivel de bloque. Si deseas controlar el tamaño de un elemento
  inline debes configurarlo para comportarse como un elemento de tipo bloque con
  `display: block;`.

Eso explica los elementos individuales, pero ¿cómo interactúan los elementos
**entre sí**? Hasta ahora hemos visto que el flujo normal (por defecto o de
manera predeterminada) es que los elementos de tipo bloque están dispuestos
verticalmente, uno de debajo del otro: es decir, cada uno aparecerá en una nueva
línea debajo de la última y se separarán por cualquier margen que se establezca
en ellos.

Los elementos en línea se comportan de manera diferente: no aparecen en líneas
nuevas; en su lugar, se sientan en la misma línea que el otro y cualquier
contenido de texto adyacente (o envuelto), siempre y cuando haya espacio para
que lo hagan dentro del ancho del elemento de nivel de bloque padre. Si no hay
espacio, entonces el texto o los elementos que se desbordan se moverán hacia
abajo hasta una nueva línea.

Si dos elementos adyacentes tienen margen aplicado y los dos márgenes se tocan,
el más grande de los dos permanece, y el más pequeño desaparece - esto se llama
_colapso de margen_.

Veamos un ejemplo:

```html
<h1>Basic document flow</h1>

<p>I am a basic block level element. My adjacent block level elements sit on
new lines below me.</p>

<p>By default we span 100% of the width of our parent element, and we are as
tall as our child content. Our total width and height is our content + padding
+ border width/height.</p>

<p>We are separated by our margins. Because of margin collapsing, we are
separated by the width of one of our margins, not both.</p>

<p>inline elements <span>like this one</span> and <span>this one</span> sit on
the same line as one another, and adjacent text nodes, if there is space on
the same line. Overflowing inline elements will <span>wrap onto a new line if
possible (like this one containing text)</span>, or just go on to a new line
if not, much like this image will do: <img
src="https://mdn.mozillademos.org/files/13360/long.jpg"></p>

```

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}
```

![Basic Document Flow](https://github.com/Laboratoria/curricula-js/blob/441a522e53ff2f34843e1ca740c01ea526fe8c19/03-interactive-site/00-html-and-css/04-positioning-and-floats/img-normal-flow.png?raw=true)

## 2. Positioning

El propósito de positioning es permitirnos sobrescribir el comportamiento
normal del flujo del documento descrito anteriormente, para producir efectos
interesantes. ¿Qué pasa si quieres alterar ligeramente la posición de algunas
cajas dentro de un diseño para dar una sensación ligeramente peculiar y
angustiada? El posicionamiento es tu herramienta. ¿O si deseas crear una
interfaz de usuario donde un elemento flota sobre la parte superior de otras
partes de la página y/o siempre se sienta en el mismo lugar dentro de la ventana
del navegador sin importar cuánto se despliegue la página? El posicionamiento
hace posible este trabajo de estructura (layout).

La propiedad `position` de CSS es de las más utilizadas cuando queremos definir
la ubicación de un elemento dentro de nuestro documento. Ésta especifica el
_tipo de posicionamiento_ que tendrá el elemento al que afectaremos. Cabe
destacar que todo esto varía según las características que tenga el valor de
`position` que pongamos. Es decir, usaremos un valor distinto según cómo
queramos posicionar dicho elemento.

El significado de cada uno de los posibles valores de la propiedad `position`
es el siguiente:

### Static

Es el posicionamiento normal o estático, el cual es aplicado por el navegador
de forma predefinida a todos los elementos de una página. Esto quiere decir,
que aparecen según su orden en _HTML_, y para mostrar cada elemento sólo se
tiene en cuenta su `display` (o sea, si está en linea, en bloque, etc).
Nada nuevo :)

<!-- Este valor no utiliza un eje de coordenadas, por lo que no toma en cuenta
las propiedades `left`, `right`, `top` y `bottom`; por lo que si las ponemos,
no sucederá nada con el elemento.

![static](https://cdn-images-1.medium.com/max/800/1*oNAAc_CUeTsAqPpOZjRwKA.png) -->

### Relative

Esto es muy similar al posicionamiento estático, excepto que una vez que el
elemento posicionado ha tomado su lugar en el flujo de disposición normal,
podemos modificar su posición final (incluso haciendo que se superponga a otros
elementos en la página) por medio de las propiedades: `top`, `bottom`, `left` y
`right`.

Lee más de position relative aquí:

- [Libros Web - Posicionamiento Relativo](http://librosweb.es/libro/css/capitulo_5/posicionamiento_relativo.html)

### Absolute

Un elemento de posición absoluta ya no existe en el flujo normal del documento.
El elemento se sienta en su propia capa separada de todo lo demás. Su posición
se define en relación a los bordes del primer ancestro **no-static** que tenga.
Si no tiene ancestros **no-static**, su posición se define en relación a los
bordes del `body`. Al igual que position relative, podemos modificar la
posición final del elemento por medio de las propiedades: `top`, `bottom`,
`left` y `right`.

<!-- ![absolute-code](https://cdn-images-1.medium.com/max/800/1*I-L5xJ7P8HLPs8b
PfbMWTQ.png)
![absolute](https://cdn-images-1.medium.com/max/800/1*j1j32f4xx26URfN99BjTmw.
png) -->

Lee más de position absolute aquí:

- [Libros Web - Posicionamiento Absoluto](http://librosweb.es/libro/css/capitulo_5/posicionamiento_absoluto.html)

### Fixed

Este valor deja fijo al elemento en el documento. Su eje de coordenadas es en
relación a la ventana del navegador. Al hacer scroll el elemento siempre se verá
en el mismo lugar.

Fixed funciona de la misma manera que el posicionamiento absoluto, con una
diferencia clave: mientras que el posicionamiento absoluto fija un elemento en
su lugar con respecto al elemento < html > o su antecesor posicionado más cercano
, el posicionamiento fijo fija un elemento en relación con la propia ventana
del navegador.

Lee más de position fixed aquí:

- [Libros Web - Posicionamiento Fijo](http://librosweb.es/libro/css/capitulo_5/posicionamiento_fijo.html)

<!-- >La propiedad position no permite controlar el posicionamiento flotante,
que se establece con otra propiedad llamada float y que se explica más adelante.
Además, la propiedad position sólo indica cómo se posiciona una caja, pero no la
desplaza. -->

## 3. Floats

Float es una propiedad de posicionamiento en CSS, es decir, el cómo se ubican
los elementos dentro de un documento HTML. Float hace que los elementos se
ajusten alrededor ya sea a la derecha o la izquierda. Está inspirado en las
revistas donde los textos se ajustan alrededor de las imágenes.

<!-- Podemos observar un ejemplo de float en un documento de word cuando
“cuadramos” la imagen, o sea, que el texto se ajuste alrededor de la imagen. Acá
un ejemplo:

imagen -->

Los elementos flotantes siguen siendo parte del flujo del documento. Esto es
claramente distinto a los elementos que utilizan posicionamiento absoluto. Los
elementos de página con posición absoluta se quitan del flujo de la página web.
Los elementos de página con posición absoluta no afectarán la posición de otros
elementos y otros elementos no los afectarán, se toquen o no.

Lee sobre floats [aquí](http://librosweb.es/libro/css/capitulo_5/posicionamiento_flotante.html)

<!-- ### Valores de float

#### None
El elemento no flota. Este es el valor inicial.

#### Left
el elemento flota a la izquierda de su bloque contenedor

#### Right
el elemento flota a la derecha de su bloque contenedor

#### Inherit
El elemento hereda la dirección de flotación de su padre

### Float vs Position: Absolute
Los elementos flotantes siguen siendo una parte del flujo de la página web .
Esto es claramente diferente de elementos de página que utilizan
posicionamiento absoluto. Elementos de la página con posición absoluta se
retiran del flujo de la página, como cuando el cuadro de texto en el diseño de
impresión se le dijo que ignorar la envoltura de la página.

### Clear
Es una propiedad que se utiliza para controlar el comportamiento de los
elementos flotantes.
Como ya sabemos, los elementos después de un elemento flotante fluirán a su
alrededor.
En caso no quisiéramos que eso suceda con clear se especifica que un elemento
no admite un flotante sobre su izquierda, sobre su derecha o a ambos lados.

#### Valores de clear

- none: predeterminado, permite elementos flotantes en ambos lado.
- left: No se permiten elementos flotantes en el lado izquierdo.
- right: No se permiten elementos flotantes en el lado derecho.
- both: No se permiten elementos flotantes en el lado izquierdo o derecho.
- inherit: Hereda el valor de su elemento padre.

Veamos un ejemplo: Queremos hacer un navegador de páginas. Entonces le damos la
propiedad de float y le ponemos lo valores dependiendo de a qué lado queremos
que vaya.

imagen aqui

### Clearfix
El maravilloso hack clearfix nos sirve para los contenedores de elementos float.

#### Colapso del contenedor padre
Normalmente si tenemos un elemento float dentro de un de un contenedor, éste,
se reducirá y no contará al elemento flotante para su alto. Como en el
siguiente caso:
imagen aqui

*Una forma de arreglar el código es agregar un elemento invisible que agregue
un clear both al final del código.

#### Arreglando el colapso: Overflow auto
Una forma de arreglar el código y que debemos aplicar con mucho cuidado es
overflow:hidden u overflow:auto.
Nota: A veces esto genera un scrollbar no deseado en el código
imagen

#### Arreglando el colapso: clearfix
Le devuelve la capacidad al contenedor de block-elements “flotados” de
contenerlos en una alineación horizontal.
imagen -->

***
