# Intro a CSS

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

* Entender qué es CSS y cómo funciona
* Conocer las diferentes maneras de agregarle estilo a tu web
* Aprender la sintaxis CSS
* Aprender qué son selectores y cuáles son los selectores más utilizados
* Entender cómo funcionan las reglas de cascada y herencia de CSS
* Aprender los valores usuales de CSS y sus unidades

***
<!-- link a slides de lab:
https://docs.google.com/a/laboratoria.la/presentation/d/1Ng9C2jND0wHISfVzkqEWmGznJPMQZ3PtCZ_6DB_MXLk/edit?usp=drive_web -->

## ¿Qué es CSS y cómo funciona?
<!-- https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS -->

CSS significa _Cascading Style Sheets_
(en español: hojas de estilo en cascada). Es un lenguaje usado para definir y
crear la presentación de un documento escrito en HTML.

CSS describe cómo los elementos en la estructura del documento deben ser
presentados en la pantalla. Con CSS damos estilo y diseño a las páginas web.
Cambiamos colores, tamaños, espacios, agregamos animaciones, etc.

Existen tres opciones para incluir CSS en un documento HTML:

## CSS Inline

Ya hemos visto cómo agregar estilos a nuestros elementos HTML con el atributo
style. Por ejemplo:

```html
<h1 style="color: blue; background-color: yellow; border: 1px solid black;">
  ¡Hola Mundo!</h1>
```

En el navegador, el titular anterior se vería así:

![Inline Style](img-inline-style.png)

Esta forma de agregar CSS se llama CSS Inline, pero no es muy recomendada. Lo
hemos hecho hasta ahora por simplificar, pero no lo seguiremos haciendo. Su
mantenimiento es verdaderamente complicado (podríamos que tener que
actualizar la misma información muchas veces en cada documento), además de
mezclar la información de estilo con la información estructural del HTML,
haciendo el CSS difícil de leer y de entender. Manteniendo los distintos tipos
de código separados y puros, facilitará la tarea a aquellos que vayan a
trabajar posteriormente en el código.

## CSS en el head

Otra opción es colocar los estilos dentro de un elemento html `<style>` que
colocamos en el `head`. Por ejemplo, para representar
los mismos estilos del `h1` anterior tendríamos lo siguiente:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Entendiendo CSS</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
  </body>
</html>
```

Este método continúa siendo ineficiente. ¿Qué pasa si tenemos estilos similares
en otras páginas de mi sitio web? Tendría que repetir los estilos en cada
página. Y recordemos que no nos gusta repetirnos: DRY! :)

## CSS stylesheet externo

La manera ideal de agregar estilos a tu producto web es tener un archivo CSS
separado de tu archivo HTML. Todos los estilos se incluyen en este
archivo de tipo CSS externo, que las páginas HTML enlazan mediante la
etiqueta html `<link>`.

En el caso de nuestro ejemplo anterior con los estilos para el `h1`, tendríamos
dos archivos:

### 1. Archivo `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Entendiendo CSS</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>

```

### 2. Archivo `style.css`
```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}
```

La etiqueta `<link>` cuenta con el atributo `rel` para indicar la relación del
documento enlazado con el actual. El uso más común para este atributo es
especificar el enlace a una hoja de estilos externa: el atributo `rel` se
establece con valor `stylesheet`. El atributo `href` se establece con la
ruta a la hoja de estilos externa para dar formato a la página. En el ejemplo
anterior, dado que el archivo a linkear se encuentra en nuestro propio
ambiente, simplemente le ponemos el nombre del archivo: `style.css`.

## Sintaxis CSS

Como hemos visto en la lección anterior, para especificar el estilo hacemos
uso de los pares `propiedades-valores`:

* Propiedades: son identificadores que indican a las personas qué
característica de estilo (ancho, color de fondo, fuente) queremos cambiar.

* Valores: a cada propiedad se le da un valor, que indica cómo queremos
cambiar esta característica (por ejemplo qué fuente, qué ancho o qué color usar)

El par formado por una propiedad y un valor se denomina **declaración** CSS.
Varias declaraciones juntas forman un **bloque de declaraciones**. Para
definir a qué el elemento de la página web se debe aplicar el estilo
que especifica el bloque de declaración utilizamos un **selector**. El
selector le indica al navegador a qué elemento (o elementos) de una web debe
aplicar cierto estilo. Por ejemplo, un selector puede ser un titular, un
párrafo, una imagen, etc. Los bloques de declaraciones CSS emparejados con
selectores forman **Reglas CSS**.

Por ejemplo:

```
           regla css
_________________________________
selector        
|                    
p { color: red; font-size: 15px; }
      |     |       |       |
      prop  valor  prop    valor
      ___________  ______________
           |              |
      declaración     declaración
      ___________________________
                  |
         bloque de declaración
```

La convención para representar el ejemplo anterior es la siguiente
(fíjate que es mucho más fácil de leer):

```css
p {
  color: red;
  font-size: 15px;
}

```

En resumen, el bloque de declaración indica qué hay que hacer y el selector
indica a quién hay que aplicárselo. Por lo tanto, los selectores son
imprescindibles para aplicar de forma correcta los estilos CSS en una
página. A un mismo elemento HTML se le pueden aplicar varias reglas CSS y
cada regla CSS puede aplicarse a un número ilimitado de elementos.

## Selectores

Existen múltiples selectores. Lee la siguiente documentación:

* [Selectores Simples - MDN](https://developer.mozilla.org/es/docs/Learn/CSS/Introduction_to_CSS/Selectores_simples)
* [Selectores Básicos - Libros Web](http://librosweb.es/libro/css/capitulo_2/selectores_basicos.html)

Al finalizar tu investigación debes saber qué es y cómo usar:
* Selector universal
* Selector de elementos (de tipo)
* Selectores de clases
* Selectores ID
* Selector descendiente
* Selector hijo
* Selectores de atributo

## Reglas de cascada y herencia

Como hemos visto, diferentes reglas CSS pueden aplicarse a un número ilimitado
de elementos. Esto puede generar estilos que entran en conflicto:
declaraciones con estilos diferentes afectando el mismo elemento.
Afortunadamente. CSS cuenta con un mecanismo conocido como la **cascada**
que gobierna cómo interactúan los estilos y qué estilos tienen preferencia
cuando existe un conflicto. De hecho, este mecanismo de cascada es la razón
por la cual CSS tiene su nombre: _Cascading Style Sheets_
(en español: hojas de estilo en cascada).

Otra característica de CSS es la **herencia** de estilos. La herencia es el
proceso por el cual algunas declaraciones de CSS aplicadas a un elemento pasan
de forma automática a los elementos que se encuentran anidados
(sus descendientes).

Lee los siguientes artículos para entender los conceptos de cascada y herencia
en CSS:

* [Cascada y Herencia - MDN](https://developer.mozilla.org/es/docs/Learn/CSS/Introduction_to_CSS/Cascada_y_herencia)
* [Herencia - Librosweb](http://librosweb.es/libro/css/capitulo_2/herencia.html)
* [Colisiones de estilos - Librosweb](http://librosweb.es/libro/css/capitulo_2/colisiones_de_estilos.html)

Al terminar tu investigación, debes ser capaz de entender los 3 factores que
determinan el mecanismo de cascada. En particular, responde lo siguiente:

1. ¿Qué orden prevalece para asignar un estilo? ¿el último? ¿el primero?
2. ¿Qué significa que un selector es más específico que otro? Dame un ejemplo
3. ¿Se aplica el estilo con mayor o menor especificidad?
4. ¿Cómo se calcula la especificidad?
5. ¿Qué significa `!important`? ¿Por qué **NO** no debemos usarlo a menos que
sea estrictamente necesario?
6. ¿Todos los estilos en CSS se heredan? ¿Por qué?
7. ¿Qué es y para qué sirve `inherit`?

## Valores y unidades

Existen una gran variedad de valores CSS,los cuales se pueden expresar con
diferentes unidades. Por ejemplo: la altura, el ancho y el margen de un
elemento pueden ser definidos en milímetros, centímetros, pulgadas
o pixeles. El color podemos definirlo con palabras clave (como `red`), con
valores, o con el modelo RGB.

Haz tu investigación de los siguientes recursos y aprende las múltiples formas
de representar los valores en CSS:

* [Valores y unidades - MDN ](https://developer.mozilla.org/es/docs/Learn/CSS/Introduction_to_CSS/Valores_y_unidades)
* [Unidades y medidas - Librosweb](http://librosweb.es/libro/css/capitulo_3/unidades_de_medida.html)
* [Colores - Librosweb](http://librosweb.es/libro/css/capitulo_3/colores.html)

Al finalizar esta lectura, debes saber responder las siguientes preguntas:

* Dame un ejemplo de una undidad absoluta y una relativa
* ¿Para qué sirve `line-height`?
* ¿Para qué sirven valores en procentajes? Dame un ejemplo
* El tamaño de fuente por defecto que los navegadores usan antes de aplicar
CSS es de ...
* ¿Qué unidad es `#ff0000`? ¿Qué color representa?
* ¿RGB es una función?
* ¿Qué color representa `rgb(0,0,255)`?
* ¿Cómo le damos opacidad al color?
* ¿Cuándo se utilizan valores sin unidades?
* ¿Cuáles son las recomendaciones generales para el uso de unidades?

## Continuando la página de Grace Hopper de wikipedia

Ahora que ya conoces más a profundidad sobre CSS puedes seguir a Michelle en
el siguiente video donde termina de desarrollar la página de Garce Hopper,
utilizando una estructura semántica y todas las bondades de CSS para
representar el diseño lo más fiel posible.

[![Grace Hopper](https://img.youtube.com/vi/9w5ITAr2hlQ/0.jpg)](https://www.youtube.com/watch?v=9w5ITAr2hlQ)
