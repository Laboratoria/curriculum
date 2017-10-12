# Box Model & Display

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `1h`

## Objetivos de Aprendizaje

- Aprender el `modelo de caja` y sus propiedades
- Comprender la diferencia entre _padding_, _border_ y _margin_; y sus propiedades
- Utilizar correctamente la propiedad `box-sizing`
- Aprender los diferentes tipos de `display`
- Conocer la diferencia entre `display: none` y `visibility: hidden`

***

## El modelo de la caja

Es hora de conocer uno de los fundamentos más importantes del CSS: `box model`
(modelo de caja). Es muy fácil, pero entenderlo bien es vital para poder
realizar una buena maquetación de la web.

![box model](https://fotos.subefotos.com/e1001df7d218a9a8a8670d88628f0cc5o.png)

### ¿Qué es el modelo de cajas?

Volviendo a nuestra fuente MDN, en el capítulo tutorial del [modelo de la caja](https://developer.mozilla.org/es/docs/Learn/CSS/Introduction_to_CSS/Modelo_cajas)
explica lo siguiente:

> El modelo de cajas es la base del diseño web — cada elemento se representa
> como una caja rectangular, con su contenido, padding (espacio interior), borde
> y margen construidos uno sobre otro como las capas de una cebolla. El
> navegador, para interpretar el diseño de una página, procesa los estilos que
> se aplicarán a cada caja, el tamaño de las capas de la cebolla y la ubicación
> de unas cajas con respecto a otras. Antes de comprender cómo crear diseños CSS,
> debemos entender el modelo de cajas — que es lo que veremos en este artículo.

Dicho de otra manera, el modelo de caja CSS es esencialmente una caja
rectangular que rodea cada elemento HTML. Cada vez que se inserta una etiqueta
HTML, se crea una nueva caja, la cual encierra los contenidos de ese elemento.

Como ejemplo tenemos la siguiente imagen, la cual muestra tres cajas
rectangulares que se crean de las tres etiquetas HTML usadas: `<p>`, `<strong>`
y nuevamente `<p>`.

![box model](https://fotos.subefotos.com/bf683e9aa7e08dcc951b9b9e529ae627o.gif)

### Elementos que componen el modelo de cajas

Las partes que componen cada caja consisten en el **contenido real**, el
**relleno**, los **bordes** y los **márgenes**; podemos ver la imagen de abajo
que ilustra el modelo de caja:

![box model](http://image.ibb.co/cQZxTw/modelo_De_Caja.png)

Explicación de cada parte que compone cada caja:

- __Content (_contenido_):__ Se trata del contenido HTML del elemento (las
  palabras de un párrafo, una imagen, el texto de una lista de elementos, etc.)
- __Padding (_relleno_):__ Espacio libre opcional existente entre el contenido y
  el borde.
- __Border (_borde_):__ Línea que encierra el contenido y el padding.
- __Margin (_margen_):__ Separación opcional existente entre la caja y el resto
  de las cajas adyacentes.

### Propiedades de los elementos de la caja

CSS define 4 propiedades para controlar los elementos de la caja (a excepción de
_width_ y _height_).

- __Top__: lado superior
- __Right__: lado derecho
- __Bottom__: lado inferior
- __Left__: lado izquierdo

![box model](https://fotos.subefotos.com/46cd99b85adea7f3106700cd9ffa473fo.png)

## Padding, Border & Margin

### Padding

Es el **relleno**, es decir, el espacio libre opcional entre el _contenido_ y el
_borde_.

 ![padding](https://fotos.subefotos.com/179d7bd111acebc38e6b29ed62a5522eo.png)

Su valor se puede definir en: **unidades de medida**, **porcentaje** o el valor
`inherit` (especifica que el _padding_ debe ser heredado del elemento padre).

CSS define cuatro propiedades para controlar cada uno de los espacios de relleno
horizontales y verticales de un elemento:

- `padding-top`: relleno superior
- `padding-right`: relleno derecho
- `padding-bottom`: relleno inferior
- `padding-left`: relleno izquierdo

También podemos usar la propiedad de tipo "shorthand" llamada `padding` para
establecer los cuatro rellenos de un elemento de forma simultánea.

Esto significa que admite entre uno y cuatro valores, con el siguiente
significado:

- Si solo se indica **un valor**:
  * **Todos** los rellenos tienen ese valor

  ```css
  div {
    padding: 2em;
  }

  /* Todos los rellenos valen 2em */
  ```

- Si se indican **dos valores**:
  * El **primero** se asigna al relleno **superior e inferior**
  * El **segundo** se asigna al **derecho e izquierdo**

  ```css
  div {
    padding: 1em 2em;
  }

  /*
   *  Superior e inferior = 1em,
   *  Izquierdo y derecho = 2em
   */
  ```

- Si se indican **tres valores**:
  * El **primero** se asigna al relleno **superior**
  * El **segundo** valor se asigna al **derecho e izquierdo**
  * El **tercero** se asigna al relleno **inferior**

  ```css
  div {
    padding: 1em 2em 3em;
  }

  /*
   * Superior = 1em, Derecho = 2em,
   * Inferior = 3em, Izquierdo = 2em
   */
  ```

- Si se indican los **cuatro valores**:
  * Se asignarán los rellenos en **orden horario**, de la siguiente forma:
    superior, derecho, inferior e izquierdo.

  ```css
  div {
    padding: 1em 2em 3em 4em;
  }

  /*
   * Superior = 1em, Derecho = 2em,
   * Inferior = 3em, Izquierdo = 4em
   */
  ```

### Border

Es la **línea** que encierra el _contenido_ y el _padding_. Es aplicable a todos
los elementos.

![border](http://image.ibb.co/nKwpab/border_Anchos.png)

Para cada borde se puede establecer su anchura o grosor, su color y su estilo,
por lo que en total CSS define distintas propiedades relacionadas con los bordes.

#### Anchura o grosor

Establece el **grosor** de cada uno de los cuatro bordes de los elementos.

La anchura de los bordes se indica mediante una **unidad de medida**; mediante
las palabras clave `thin` (borde delgado), `medium` (borde normal) y `thick`
(borde ancho); o el valor `inherit`.

#### Estilo

El **estilo** de los bordes sólo se puede indicar mediante alguna de las
palabras reservadas definidas por CSS. Como el valor por defecto de esta
propiedad es `none`(sin borde), los elementos no muestran ningún borde visible a
menos que se establezca explícitamente un estilo de borde.

En la siguiente imágen podemos ver los diferentes estilos de borde y la
_palabra reservada_ para cada uno de ellos:

![estilos_bordes](https://lenguajecss.com/p/css/propiedades/border-styles.png)

#### Color

Establece el **color** de cada uno de los cuatro bordes de los elementos.

Los valores que puede tomar son: [**valores de color**](http://librosweb.es/referencia/css/colores.html),
`transparent` o `inherit`.

#### Propiedad shorthand "border"

CSS define la propiedad de tipo "shorthand" global para establecer el valor de
todos los atributos de todos los bordes de forma directa: `border`.

Su valor se puede definir en: **anchura de borde + estilo de borde + color de borde**,
o `inherit`(especifica que el borde debe ser heredado del elemento padre).
Veamos el siguiente ejemplo:

```css
div {
  border: 1px solid blue;
}
```

> De esta forma, con la propiedad `border` hemos asignado el **ancho**,
> **estilo** y **color** de borde para todos los cuatro lados de la caja del
> elemento `div`.

También, tenemos la posibilidad de asignar los valores (ancho, estilo y color)
para un lado en especial de la siguiente manera:

```css
div {
  border-top: 1px solid blue;
  border-right: 1px solid blue;
  border-bottom: 1px solid blue;
  border-left: 1px solid blue;
}
```

> [Aprender más sobre `border`.](http://librosweb.es/libro/css/capitulo_4/bordes.html)

### Margin (___margen___)

Es la **separación opcional** existente entre la caja y el resto de las cajas
adyacentes.

![margin](http://image.ibb.co/hH9LgG/margin.png)

Su valor se puede definir en: **Unidades de medida**, **porcentaje** o `inherit`
(especifica que el margin debe ser heredado del elemento padre).

CSS define cuatro propiedades para controlar cada uno de los espacios de margen
horizontales y verticales de un elemento:

- `margin-top`: margen superior
- `margin-right`: margen derecho
- `margin-bottom`: margen inferior
- `margin-left`: margen izquierdo

También podemos usar la propiedad de tipo "shorthand" llamada `margin` para
establecer los cuatro márgenes de un elemento de forma simultánea.
Esto significa que admite entre uno y cuatro valores, al igual que la propiedad
`padding`, la cual vimos anteriomente.

```css
div {
  margin: 5em 4em 3em 2em;
}

/*
 * Superior = 5em, Derecho = 4em,
 * Inferior = 3em, Izquierdo = 2em
 */
```

### Otras propiedades

#### Background image (_imagen de fondo_)

Es la imagen que se muestra por detrás del _contenido_ y el espacio de _relleno_.

#### Background color (_color de fondo_)

Es el color que se muestra por detrás del _contenido_ y el espacio de _relleno_.

> Padding y Margin son transparentes, el espacio ocupado por el relleno se
> muestra la imagen o el color de fondo (si están definidos) y en el espacio
> ocupado por el margen se muestra la imagen o el color de fondo de su elemento
> padre (si están definidos).
> Si una caja define tanto un color como una imagen de fondo, la imagen tiene
> más prioridad y es la que se visualiza.

## Anchura y Altura

### Width (_ancho_)

Controla el ancho de la caja o de un elemento.

![width](https://fotos.subefotos.com/ad307ef682632ca28282a778c74610b0o.png)

Su valor se puede definir en: **unidades de medida**, **porcentaje**, `auto` o
`inherit`. Siendo como valor inicial `auto` .
La propiedad **width** no admite valores negativos y los valores en porcentaje
se calculan a partir de la anchura de su elemento padre.

```css
div {
  width: 200px;
}
```

### Height (_alto_)

Controla la altura de la caja o de un elemento.

![height](https://fotos.subefotos.com/4395164aa663621f860b4d12c2d8fcd5o.png)

Su valor se puede definir en: **Unidades de medida**, **porcentaje**, `auto` o
`inherit`. Siendo como valor inicial `auto`.
Al igual que sucede con _width_, la propiedad **height** no admite valores
negativos. Si se indica un **porcentaje**, se toma como referencia la altura del
elemento padre.

```CSS
div {
  height: 400px;
}
```

## Box sizing

La propiedad `box-sizing` se utiliza para indicar al navegador cuáles deben ser
las propiedades de tamaño (ancho y alto).

Además le indicamos si deseamos incluir el relleno, el borde y/o el margen.

### Valores

#### Valor "content-box"

Para el valor `content-box` las propiedades _width_ y _height_ incluyen sólo el
contenido, no incluyen el _padding_, _border_ o _margin_. Este es el valor por
defecto.

```CSS
div {
  box-sizing: content-box;
}
```

![content-box](https://fotos.subefotos.com/9958eea0026f6d90ae1cd9be0f47f2ebo.png)

#### Valor "border-box"

Para el valor `border-box` las propiedades _width_ y _height_ incluyen el
_padding_ y el _border_, pero no el _margin_.

```CSS
div {
  box-sizing: border-box;
}
```

![border-box](http://image.ibb.co/nAbcTw/border_box.png)

> También podemos utilizar el valor `inherit`, que es el valor que hereda esta
> propiedad de su elemento padre.

## Display

### ¿Qué es la propiedad display?

Establece el tipo de caja generada por un elemento.
![display](https://fotos.subefotos.com/7ffd4c0c33fafb4d898a16a8935a0697o.png)

### Valores

#### Valor "inline"

La propiedad `display: inline` hace que el elemento tenga como naturaleza
posicionarse en línea, es decir que un elemento se coloque al lado del otro y
por lo tanto sólo ocupa el espacio necesario para mostrar sus contenidos:

![inline](https://fotos.subefotos.com/46ddc8db6addcac25aaf5d1b79275232o.png)

Sus características son:

- Se ajusta al flujo del texto
- No salta a la siguiente línea
- Se le puede aplicar la propiedad de `white-space`
- Ignorará los márgenes _top_ y _bottom_, sólo se puede poner _left_ y _right_ y
  cualquier padding
- Si se utiliza la propiedad floating se convertirán en `block`
- Se les puede aplicar la propiedad `vertical-align`

#### Valor "block"

La propiedad `display: block` hace que el elemento tenga como naturaleza
posicionarse en bloques, por lo que siempre empiezan en una nueva línea y ocupan
todo el espacio disponible en la línea, aunque sus contenidos no ocupen todo el
sitio:

![block](https://fotos.subefotos.com/0a7b2184ae765750e3929af6482473bfo.png)

Sus características son:

- Si no hay ancho definido, se expanden hasta llenar el espacio de su contenedor
  padre
- Pueden tener márgenes y rellenos
- Si no se define altura, crecerán hasta contener a sus hijos
- Por defecto hace un salto de línea
- Ignoran la propiedad `vertical-align`

#### Valor "inline-block"

La propiedad `display: inline-block` mezcla lo mejor de ambos mundos haciendo
que los elementos se posicionen de forma inline pero que mantenga su naturaleza
de bloque, es decir, pueden alinearse:

![inline-block](https://fotos.subefotos.com/7892f0763915a586528d36559d76a451o.png)

#### Valor "none"

La propiedad `display: none` quita el elemento para que este no se muestre en pantalla.

##### ¿Cuál la diferencia entre "display: none" y "visibility: hidden"?

Ambos atributos permiten "esconder" un elemento en el navegador. Sin embargo,
existe una diferencia muy importante:

- `display: none` quita el elemento definitivamente del espacio que ocupaba y es
  reemplazado por los elementos adyacentes, como si el elemento ya no existiera.

  ![none](https://fotos.subefotos.com/54885d2a934503abd48eb254549f099fo.png)

- `visibility: hidden` oculta el elemento, pero sigue conservando el espacio que
  ocupaba, mientras que los elementos adyacentes conservan su ubicación.

  ![hidden](https://fotos.subefotos.com/22776b343dd0dde50cf523b9544ad7d2o.png)

#### Resumen de características Display

![Resumen Display](https://fotos.subefotos.com/5bddcb7ef810c7290e982d0ad17e4941o.png)

## Lecturas complementarias

Continúa leyendo y aprendiendo sobre el modelo de la caja con los siguientes recursos:

- [Modelo de la caja - MDN](https://developer.mozilla.org/es/docs/Learn/CSS/Introduction_to_CSS/Modelo_cajas)
- [Modelo de la Caja - Libros Web](http://librosweb.es/libro/css/capitulo_4.html)
- [Display - Libros Web](http://librosweb.es/referencia/css/display.html)
