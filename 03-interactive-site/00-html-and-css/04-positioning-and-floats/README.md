# Positioning & Floats

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

## Objetivos de Aprendizaje

- Aprender el `modelo de caja` y sus propiedades
- Comprender la diferencia entre _padding_, _border_ y _margin_; y sus propiedades
- Utilizar correctamente la propiedad `box-sizing`
- Aprender los diferentes tipos de `display`
- Conocer la diferencia entre `display: none` y `visibility: hidden`

***

## Positioning
La propiedad `position` de CSS es de las más utilizadas cuando queremos definir la ubicación de un elemento dentro de nuestro documento. Ésta especifica el _tipo de posicionamiento_ que tendrá el elemento al que afectaremos. Cabe destacar que todo esto varía según las características que tenga el valor de `position` que pongamos. Es decir, usaremos un valor distinto según cómo queramos posicionar dicho elemento.

### Valores de position
El significado de cada uno de los posibles valores de la propiedad `position` es el siguiente:

#### Static
Es el posicionamiento normal o estático, el cual es aplicado por el navegador de forma predefinida a todos los elementos de una página. Esto quiere decir, que aparecen según su orden en _HTML_, y para mostrar cada elemento sólo se tiene en cuenta su `display` (o sea, si está en linea, en bloque, etc).

Este valor no utiliza un eje de coordenadas, por lo que no toma en cuenta las propiedades `left`, `right`, `top` y `bottom`; por lo que si las ponemos, no sucederá nada con el elemento.

![static](https://cdn-images-1.medium.com/max/800/1*oNAAc_CUeTsAqPpOZjRwKA.png)

#### Absolute
Su posición se define en relación a los bordes del primer ancestro **no-static** que tenga. Si no tiene ancestros **no-static**, su posición se define en relación a los bordes del `body`.

![absolute-code](https://cdn-images-1.medium.com/max/800/1*I-L5xJ7P8HLPs8bPfbMWTQ.png)
![absolute](https://cdn-images-1.medium.com/max/800/1*j1j32f4xx26URfN99BjTmw.png)

#### Relative
Este valor genera un eje de coordenadas desde la posición inicial del elemento, es decir, la medida de desplazamiento empieza a contar desde el espacio donde éste se encuentra. Su desplazamiento no afecta a otros elementos del documento.

#### Fixed
Este valor deja fijo al elemento en el documento. Su eje de coordenadas es en relación a la ventana del navegador. Al hacer scroll el elemento siempre se verá en el mismo lugar.

>La propiedad position no permite controlar el posicionamiento flotante, que se establece con otra propiedad llamada float y que se explica más adelante. Además, la propiedad position sólo indica cómo se posiciona una caja, pero no la desplaza.

## Floats
Float es una propiedad de posicionamiento en CSS, es decir, el cómo se ubican los elementos dentro de un documento HTML. Podemos observar un ejemplo de float en un documento de word cuando “cuadramos” la imagen, o sea, que el texto se ajuste alrededor de la imagen. Acá un ejemplo:

imagen

luego aca van 2 imagenes una con float y otra sin float

Hace que los elementos se ajusten alrededor ya sea a la derecha o la izquierda. Está inspirado en las revistas donde los textos se ajustan alrededor de las imágenes.

### Valores de float

#### None
El elemento no flota. Este es el valor inicial.

#### Left
el elemento flota a la izquierda de su bloque contenedor

#### Right
el elemento flota a la derecha de su bloque contenedor

#### Inherit 
El elemento hereda la dirección de flotación de su padre


### Float vs Position: Absolute
Los elementos flotantes siguen siendo una parte del flujo de la página web . Esto es claramente diferente de elementos de página que utilizan posicionamiento absoluto. Elementos de la página con posición absoluta se retiran del flujo de la página, como cuando el cuadro de texto en el diseño de impresión se le dijo que ignorar la envoltura de la página.

### Clear
Es una propiedad que se utiliza para controlar el comportamiento de los elementos flotantes.
Como ya sabemos, los elementos después de un elemento flotante fluirán a su alrededor. 
En caso no quisiéramos que eso suceda con clear se especifica que un elemento no admite un flotante sobre su izquierda, sobre su derecha o a ambos lados.

#### Valores de clear

- none: predeterminado, permite elementos flotantes en ambos lado.
- left: No se permiten elementos flotantes en el lado izquierdo.
- right: No se permiten elementos flotantes en el lado derecho.
- both: No se permiten elementos flotantes en el lado izquierdo o derecho.
- inherit: Hereda el valor de su elemento padre.

Veamos un ejemplo: Queremos hacer un navegador de páginas. Entonces le damos la propiedad de float y le ponemos lo valores dependiendo de a qué lado queremos que vaya.

imagen aqui


### Clearfix
El maravilloso hack clearfix nos sirve para los contenedores de elementos float.

#### Colapso del contenedor padre
Normalmente si tenemos un elemento float dentro de un de un contenedor, éste, se reducirá y no contará al elemento flotante para su alto. Como en el siguiente caso:
imagen aqui

*Una forma de arreglar el código es agregar un elemento invisible que agregue un clear both al final del código.

#### Arreglando el colapso: Overflow auto
Una forma de arreglar el código y que debemos aplicar con mucho cuidado es overflow:hidden u overflow:auto. 
Nota: A veces esto genera un scrollbar no deseado en el código
imagen

#### Arreglando el colapso: clearfix
Le devuelve la capacidad al contenedor de block-elements “flotados” de contenerlos en una alineación horizontal.
imagen 

***
