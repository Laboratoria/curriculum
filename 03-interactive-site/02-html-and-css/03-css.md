# Intro a CSS

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Aprender ...

***

link a slides de lab:
https://docs.google.com/a/laboratoria.la/presentation/d/1Ng9C2jND0wHISfVzkqEWmGznJPMQZ3PtCZ_6DB_MXLk/edit?usp=drive_web


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
<h1 style="color: blue; background-color: yellow; border: 1px solid black;">¡Hola Mundo!</h1>
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

### CSS en el head

En este caso, ubicamos los estilos dentro de un elemento `<style>` que
colocamos en el `head` del documento HTML. Por ejemplo, para representar
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

### CSS stylesheet externo

La manera ideal de agregar estilos a tu producto web es tener un archivo CSS
separado de tu archivo HTML. Todos los estilos se incluyen en este
archivo de tipo CSS externo, que las páginas HTML enlazan mediante la
etiqueta `<link>`.

En el caso de nuestro ejemplo anterior con los estilos para el `h1`, tendríamos
dos archivos:

#### 1. Archivo `index.html`

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

#### 2. Archivo `style.css`
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
           regla CSS
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



## Selectores
- universal
- etiquetas
- desendientes
- id
- class

### Reglas de cascada y especificidad

### Herencia

***
