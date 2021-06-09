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

![El model de caja en las herramientas del navegador](https://user-images.githubusercontent.com/110297/120221523-2ae15400-c204-11eb-818a-ea5bb8e767e4.png)

_Vista del modelo de caja en las herramientas de desarrollador del navegador_.

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

![Box Model](https://user-images.githubusercontent.com/110297/120232292-e7ddab80-c218-11eb-94a6-b93b268d077e.png)

### Elementos que componen el modelo de cajas

Las partes que componen cada caja consisten en el **contenido real**, el
**relleno**, los **bordes** y los **márgenes**; podemos ver la imagen de abajo
que ilustra el modelo de caja:

![El model de cajas](https://user-images.githubusercontent.com/110297/120221945-d8546780-c204-11eb-8733-e363a588e546.png)

_Imagen tomada de [MDN - The Box Nodel](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)_

Explicación de cada parte que compone cada caja:

- __Content (_contenido_):__ Se trata del contenido HTML del elemento (las
  palabras de un párrafo, una imagen, el texto de una lista de elementos, etc.)
- __Padding (_relleno_):__ Espacio libre opcional existente entre el contenido y
  el borde.
- __Border (_borde_):__ Línea que encierra el contenido y el padding.
- __Margin (_margen_):__ Separación opcional existente entre la caja y el resto
  de las cajas adyacentes.

A continuación veremos cómo manipular el _tamaño_ de cada una de estas partes.

## Padding, Border & Margin

### Padding

Es el **relleno**, es decir, el espacio libre opcional entre el _contenido_ y el
_borde_.

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

![Estilos de borde](https://user-images.githubusercontent.com/110297/120240846-2b3f1680-c227-11eb-834c-756b3330fd87.png)

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

![content-box](https://user-images.githubusercontent.com/110297/120241173-ccc66800-c227-11eb-9edd-055f62fbb1a4.png)

#### Valor "border-box"

Para el valor `border-box` las propiedades _width_ y _height_ incluyen el
_padding_ y el _border_, pero no el _margin_.

```CSS
div {
  box-sizing: border-box;
}
```

![border-box](https://user-images.githubusercontent.com/110297/120241219-e2d42880-c227-11eb-91fc-01969e27271d.png)

> También podemos utilizar el valor `inherit`, que es el valor que hereda esta
> propiedad de su elemento padre.

## Display

### ¿Qué es la propiedad display?

Establece el tipo de caja generada por un elemento. Acá cubriremos los valores
más comunes (`inline`, `block`, `inline-block` y `none`), y más adelante, en
otras lecturas, exploraremos en detalle opciones más avanzadas como `flex` y
`grid`.

### Valores

#### Valor "inline"

La propiedad `display: inline` hace que el elemento tenga como naturaleza
posicionarse en línea, es decir que un elemento se coloque al lado del otro y
por lo tanto sólo ocupa el espacio necesario para mostrar sus contenidos.

Veamos un ejemplo. Si partimos con el siguiente fragmento de HTML:

```html
<h3>3 divs</h3>
<div>A</div>
<div>B</div>
<div>C</div>
```

Y aplicamos los siguientes estilos a los `<div>`s:

```css
div {
  border: 1px solid blue;
  background-color: aliceblue;
  padding: 10px;
  width: 200px;
  display: inline;
}
```

Veríamos que los 3 `<div>`s aparecen en la misma línea. Además, también toma
nota de que la directiva de ancho (`width`) se ha ignorado. Le habíamos dado
`200px` de ancho, pero claramente vemos que esto no ha afectado a cómo se ven
los `<div>`s. Esto es porque en los elementos `inline` no podemos fijar el
ancho.

![Inline](https://user-images.githubusercontent.com/110297/120243481-5298e200-c22d-11eb-8c10-5db63c132190.png)

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
sitio.

Siguiendo con el ejemplo anterior, ahora cambiamos solamente el valor de la
propiedad `display` a `block`:

```css
div {
  border: 1px solid blue;
  background-color: aliceblue;
  padding: 10px;
  width: 200px;
  display: block;
}
```

Y obtenemos el siguiente resultado:

![block](https://user-images.githubusercontent.com/110297/120243599-a277a900-c22d-11eb-9094-62f9359951bd.png)

Podemos ver que ahora con `display: block` nuestros `<div>`s si toman el ancho
que les dimos (`200px`) y además automáticamente agrega un _salto_ de línea al
final del bloque, de manera que cualquier elemento que venga después tendrá que
ir abajo.

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
de bloque, es decir, pueden alinearse.

Cambiamos el valor de `display` a `inline-block`:

```css
div {
  border: 1px solid blue;
  background-color: aliceblue;
  padding: 10px;
  width: 200px;
  display: inline-block;
}
```

Y ahora vemos cómo podemos darle un ancho determinado (como bloque), pero al
mismo tiempo los bloques se posicionan _en línea_, en vez de cada uno comenzar
en una nueva línea.

![inline-block](https://user-images.githubusercontent.com/110297/120243831-3a759280-c22e-11eb-8e8d-11a2c4708d16.png)

#### Valor "none"

La propiedad `display: none` quita el elemento para que este no se muestre en pantalla.

##### ¿Cuál la diferencia entre "display: none" y "visibility: hidden"?

Ambos atributos permiten "esconder" un elemento en el navegador. Sin embargo,
existe una diferencia muy importante:

- `display: none` quita el elemento definitivamente del espacio que ocupaba y es
  reemplazado por los elementos adyacentes, como si el elemento ya no existiera.
  Si al ejemplo anterior le agregamos una clase `hide`:

  ```css
  .hide {
    display: none;
  }
  ```

  Y aplicamos esa clase al segundo div:

  ```html
  <div>A</div>
  <div class="hide">B</div>
  <div>C</div>
  ```

  Veremos que el elemento no se muestra, y es como si no existiera, dejando que
  otros elementos tomen su lugar.

  ![display none](https://user-images.githubusercontent.com/110297/120243908-6133c900-c22e-11eb-9914-644c9dbcc184.png)

- `visibility: hidden` oculta el elemento, pero sigue conservando el espacio que
  ocupaba, mientras que los elementos adyacentes conservan su ubicación. Si
  cambiamos la clase `hide` para usar esta propiedad:

  ```css
  .hide {
    visibility: hidden;
  }
  ```

  Ahora veremos que a pesar de que el elemento ya no aparece en pantalla, el
  espacio que ocuparía queda vacío. El elemento es invisible, pero sigue
  ocupando espacio en la pantalla.

  ![visibility hidden](https://user-images.githubusercontent.com/110297/120244005-ace67280-c22e-11eb-95e7-741648478b49.png)

## Lecturas complementarias

Continúa leyendo y aprendiendo sobre el modelo de la caja con los siguientes recursos:

- [Modelo de la caja - MDN](https://developer.mozilla.org/es/docs/Learn/CSS/Introduction_to_CSS/Modelo_cajas)
- [CSS: display - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [Modelo de la Caja - Libros Web](http://librosweb.es/libro/css/capitulo_4.html)
- [Display - Libros Web](http://librosweb.es/referencia/css/display.html)
