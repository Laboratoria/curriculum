# Document Object Model (DOM)

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

## Objetivos de Aprendizaje

En esta unidad aprenderemos:

- ¿Qué es el DOM y para qué nos sirve?
<<<<<<< HEAD
=======
- Pedir elementos del DOM usando selectores (getElementById,
  getElementsByClassName, etc)
- Recorrer elementos del DOM usando padres o hijos (firstChild, parentNode, etc.)
>>>>>>> 58efdf0b6c463bf606d4769b4c79d2626b54d0a0
- Conocer las siguientes propiedades:
  * `parentNode`
  * `childNodes`
  * `firstChild`
  * `lastChild`
  * `previousSibling`
  * `previousElementSibling`
  * `nextSibling`
  * `nextElementSibling`
- Conocer los siguientes métodos:
  * `document.getElementById()`
  * `document.getElementsByTagName()`
  * `document.getElementsByClassName()`
  * `document.querySelector()`
  * `document.querySelectorAll()`

***

## ¿Qué es el DOM?

En la siguiente [lectura](http://librosweb.es/libro/javascript/capitulo_5/arbol_de_nodos.html)
podemos ver qué es el DOM. Esta información es extracto de LibrosWeb, un
pionero en creación de contenido educativo para desarrollo web.

## Navegando el DOM (DOM Tree)

Cada etiqueta contenedora y texto del documento HTML es lo que se denomina un
nodo del DOM.

Cada uno de los nodos es un __objeto__ y como recordamos, los objetos
tienen __propiedades y métodos__. Dichos objetos se organizan en una estructura
de árbol, donde el propio documento HTML es la raíz del árbol de todos los
nodos.

Página Web (1)| Árbol de Nodos DOM (2)
-- | --
![Página web][x] | ![DOM][y]  |

[x]:https://preview.ibb.co/kQZGj5/pag_Web_Sencilla.png

[y]:https://preview.ibb.co/drvdxQ/representaciondom.png

En el esquema anterior (2) , cada rectángulo representa un nodo (objeto) DOM, y
las flechas indican las relaciones familiares (padre - hijos - hermanos) entre
nodos. Sí, los nodos tienen relaciones familiares. Así como tú tienes hermanos,
padre o hijos, **los nodos del DOM también tienen una relación familiar**.

### Relación padres e hijos

#### Analicemos esta imagen

![DOM Tree](https://www.w3schools.com/js/pic_htmltree.gif)

- La raíz del árbol de nodos de cualquier página web siempre es la misma:
  **un nodo llamado document** que es el objeto `padre` de los objetos
  restantes.

- El nodo **html** es el `padre` de los objetos o nodos **head** y **body**
  (pero **hijo** del nodo **document**).

- El objeto o nodo **body** es el `padre` del **a** y el **h1**, por lo
  tanto estas etiquetas son `hijos` del  nodo **body**.

- El nodo de texto **My header** es `hijo` del nodo **h1**.

#### Relación hermanos

Analizando la misma imagen de arriba:

- Los nodos `hermanos` hacen referencia a los nodos que tiene el mismo padre, es
  decir, son nodos del mismo nivel en el árbol del DOM.

- Los objetos o nodos **head** y **body** son `hermanos`, cuyo padre es el objeto
  o nodo **html**.

- El nodo de texto **My link** y el nodo **attribute** son nodos `hermanos`,
  cuyo padre es el objeto o nodo **a**. (En la imagen parece que **attribute**
  es hermano del nodo **a** pero **a** es padre de **attribute**.)

### Los 2 tipos de nodos más usados

Como podrás notar, la transformación de la página web en un árbol DOM genera
dos tipos de nodos: el primero es `nodo de tipo elemento` y corresponde a una
etiqueta HTML y el segundo es `nodo de tipo texto` que contiene el texto
encerrado por una etiqueta HTML.

Así, la siguiente etiqueta HTML:

```html
<title>Página Sencilla</title>
```

genera los siguientes nodos:

- `Nodo de tipo elemento` por la etiqueta `title`.
- `Nodo de tipo texto` por el texto `"Página Sencilla"`

Por lo tanto se tiene 1 nodo de tipo elemento y 1 nodo de tipo texto

![nodo tipo texto - nodo tipo elemento](https://image.ibb.co/grkdE5/nodotipo_Texto_Nodotipo_Elemento.png)

De la misma manera, la etiqueta HTML:

```html
<p>Esta página es <strong>muy sencilla</strong></p>
```

genera los siguientes nodos:

- `Nodo de tipo elemento` correspondiente a la etiqueta `p`.
- `Nodo de tipo texto` por el contenido textual `"Esta página es"`.
- Como el contenido de la etiqueta p incluye en su interior una `etiqueta
  strong`, esta se trasnforma en un `nodo de tipo elemento`.
- Finalmente, el contenido textual se convierte en un `nodo de tipo texto`
  por el texto `"muy sencilla"`.

Por lo tanto se tiene 2 nodos de tipo elemento y 2 nodos de tipo texto.

![nodo tipo texto - nodo tipo elemento](https://image.ibb.co/dFBPnQ/nodotipo_Texto_Nodotipo_Elemento2.png)

#### Algunas reglas

- Las etiquetas HTML serán siempre nodos de tipo elemento.
- Si dentro de las etiquetas HTML hay contenido textual, entonces, se formará un
  nodo de tipo texto, quien a su vez será un nodo hijo del primero.
- Si una etiqueta HTML se encuentra dentro de otra, se sigue el mismo
  procedimiento anterior, pero los nodos generados serán nodos hijo de su
  etiqueta padre.

#### Más tipos de nodos

Hasta el momento hemos indicado 2 tipos de nodos : de tipo elemento (element) y
de tipo texto (text).
Sin embargo, la especificación completa del DOM define 12 tipos de nodos
indicados a continuación:

| Nombre del Nodo | Significado  | Tipo de Nodo |
| :------- | :------: | -----: |
| ELEMENT_NODE | Nodo del tipo `Element`  | 1   |
| ATTRIBUTE_NODE   | Nodo del tipo `Attr`     | 2 |
| TEXT_NODE | Nodo del tipo `Text`  | 3 |
| CDATA_SECTION_NODE   | Nodo del tipo `CDATASection`  | 4 |
| ENTITY_REFERENCE_NODE   | Nodo del tipo `EntityReference`    | 5 |
| ENTITY_NODE  | Nodo del tipo `Entity`   | 6 |
| PROCESSING_INSTRUCTION_NODE   | Nodo del tipo `ProcessingInstruction`   | 7 |
| COMMENT_NODE   | Nodo del tipo `Comment`     | 8 |
| DOCUMENT_NODE   | Nodo del tipo `Document`    | 9 |
| DOCUMENT_TYPE_NODE  | Nodo del tipo `DocumentType`    | 10 |
| DOCUMENT_FRAGMENT_NODE   | Nodo del tipo `DocumentFragment`     | 11 |
| NOTATION_NODE   |  Nodo del tipo `Notation`   | 12 |

De dicha lista, nos concentraremos en los cinco nodos más habituales con los
cuales podremos manipular las páginas Web a través del DOM.

Veamos a continuación más específicamente sus características.

- Nodo Element: representa cada una de las etiquetas HTML. Pueden ser hijos de
  otro nodo de tipo elemento, y también tener hijos (nodos elementos o nodo de
  texto).

  ```html
  Etiquetas HTML

  <html></html> <head></head> <body></body> <h1></h1> <p></p> <div></div>
  <form></form> <a></a> <img/> <strong></strong>
  ```

  ```html
  Nodo Element con hijos Element

  <html>
    <head></head>
    <body></body>
  </html>

  3 nodo Element --> etiquetas html, head y body
  ```

  ```html
  Nodo Element con hijo texto

  <h1>Hola Mundo</h1>

  1 nodo Element --> etiqueta h1
  1 nodo Text --> hola mundo
  ```

- Nodo Attr: se define un nodo de este tipo para representar cada uno de los
  atributos de las etiquetas HTML. Estos nodos son siempre hijos de un nodo
  Element y no pueden tener hijos.

  ```html
  <img src="images/logo.png" alt="Logo Laboratoria" />

  1 nodo Element --> etiqueta img
  2 nodo Attr --> src y alt
  ```

- Nodo Text: nodo que contiene el texto encerrado por una etiqueta HTML. Estos
  nodos son siempre hijos de un nodo Element y no pueden tener hijos.

  ```html
  <h1>Seré una futura developer de Laboratoria</h1>
  <h2>¿Qué debo hacer?</h2>
  <ul>
    <li>Mentalidad de crecimiento</li>
    <li>Practicar mucho</li>
    <li>Autoaprender y preguntar siempre</li>
  </ul>

  6 nodos Element --> etiquetas h1, h2, ul, li,
  5 nodos Text --> 'Seré una futura developer de Laboratoria', '¿Qué debo hacer?'
  , 'Mentalidad de crecimiento', ´Practicar mucho´, 'Autoaprender y preguntar
  siempre'
  ```

- Nodo Comment: representa los comentarios incluídos en la página HTML.

  ```html
  <html>
    <head>
      <title>Página Sencilla</title>
    </head>
    <body>
      <!-- Hola Esto es un comentario-->
      <h1>Hola Mundo</h1>
      <!--Por favor coloca una imagen-->
      <img src="images/logo.png" alt="Logo Laboratoria"/>
    </body>
  </html>

  6 nodos Element --> etiqueta html, head, title, body, h1, img
  2 nodos Text --> 'Página Sencilla', 'Hola Mundo'
  2 nodos Attr --> src y alt
  2 nodos Comment --> <!--Hola esto es un comentario--> <!--Por favor coloca una
    imagen-->
  ```

- Nodo Document: representa al nodo raíz del que derivan todos los demás nodos
  del árbol del DOM. No tiene padre y únicamente tiene un hijo, que es el
  elemento HTML.

## Propiedades de los nodos

Los nodos del DOM poseen propiedades básicas, que cuales son:

- **nodeName**, indica el nombre del nodo.

- **nodeType**, es un número entero que describe el tipo de nodo: `1` para
  las etiquetas HTML, `3` para los nodos tipo texto, `8` para los nodos tipo
  comentarios, `9` para el nodo tipo document, etc.

- **nodeValue**, es el texto contenido dentro de un nodo de texto. Esta
  propiedad solo se utiliza para los nodos tipo texto `3` y nodos tipo
  comentarios `8`.

## Seleccionando elementos del DOM

En la siguiente [lectura](http://librosweb.es/libro/javascript/capitulo_5/acceso_directo_a_los_nodos.html)
vemos cómo seleccionar nodos y qué es un nodo en el DOM.

## Recapitulando

Para terminar, mira el siguiente video de Lulú donde menciona los conceptos de
DOM.

[![Repaso DOM](https://img.youtube.com/vi/7iHu7s54vIk/0.jpg)](https://www.youtube.com/watch?v=7iHu7s54vIk)

[![Recorriendo el DOM](https://img.youtube.com/vi/D93IP_n6kj8/0.jpg)](https://www.youtube.com/watch?v=D93IP_n6kj8)

También tenemos el [link](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n#Qu.C3.A9_es_el_DOM.3F)
de la documentación oficial de Mozilla de qué es el DOM.

Otro [link](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n#C.C3.B3mo_se_accede_al_DOM.3F)
de cómo acceder a elementos del DOM con JS de la documentación oficial.
