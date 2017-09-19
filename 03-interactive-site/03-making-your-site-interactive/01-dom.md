# Document Object Model (DOM)
- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `30min`

## Objetivos de Aprendizaje

En esta unidad aprenderemos:
* ¿Qué es el DOM y para que nos sirve?
* Pedir elementos del DOM usando selectores (getElementById, getElementsByClassName,etc)
* Recorrer elementos del DOM usando padres o hijos (firstChild, parentNode, etc)
* Saber usar:
  - `document.getElementById()`
  - `firstChild`
  - `lastChild`
  - `parentNode`
  - `childNodes`
  - `previousSibling`
  - `previousElementSibling`
  - `nextElementSibling`
  - `nextSibling`
  - `getElementsByTagName`
  - `.getElementsByClassName`
  - `querySelector()`
  - `querySelectorAll()`
  - `childNodes`

***

## ¿Qué es el DOM?

#### ToDo agregar intro con objetivos de lectura e instrucciones

#### Todo agregar introduccion a libros web.

http://librosweb.es/libro/javascript/capitulo_5/arbol_de_nodos.html

- DOM y HTML

## Navegando el DOM (DOM Tree)

Cada etiqueta contenedora y texto del documento HTML es lo que se denomina un nodo del DOM.

Cada uno de los nodos es un __objeto__ y como recordamos, los objetos tienen __propiedades y métodos__. Dichos objetos se organizan en una estructura de árbol, donde el propio  documento HTML es la raíz del árbol de todos los nodos.

  Pagina Web (1)| Árbol de Nodos DOM (2)
-- | --
![Imagen x][x] | ![Imagen y][y]  |

 [x]:https://preview.ibb.co/kQZGj5/pag_Web_Sencilla.png

 [y]:https://preview.ibb.co/drvdxQ/representaciondom.png

En el esquema anterior (2) , cada rectángulo representa un nodo (objeto) DOM, y las flechas indican las relaciones familiares (padre - hijos - hermanos) entre nodos.

Si, los nodos tienen relaciones familiares.

Asi como tu tienes hermanos, padre o hijos (ojala no :-) ), __los nodos del DOM también tienen una relación familiar__.

#### Relación Padres e hijos
____

##### Analizemos esta imagen:
![alt text](https://www.w3schools.com/js/pic_htmltree.gif)

- La raíz del árbol de nodos de cualquier página web siempre es la misma :
___Un nodo llamado document___ que es el objeto `padre` de los objetos restantes.

- El nodo ___html___ es el `padre` de los objetos o nodos ___head y body___ (pero __hijo__ del nodo __document__ ).

- El objeto o nodo ___body___ es el `padre` de el __a__ y el __h1__, por lo tanto estas etiquetas son `hijos` del  nodo ___body___.

- El nodo de texto ___"My header"___ es `hijo` del nodo ___h1___.


#### Relacion hermanos
___

Analizando la misma imagen de arriba.
- Los nodos `hermanos` hacen referencia a los nodos que tiene el mismo padre, es decir, son nodos del mismo nivel en el árbol del DOM.

- Los objetos o nodos ___head y body___ son `hermanos`, cuyo padre es el objeto o nodo ___html___.

- el nodo de texto ___My link___ y el nodo ___attribute___ son nodos `hermanos`, cuyo padre es el objeto o nodo ___a___
-
### Los 2 tipos de nodos mas usados

Como podrás notar, la transformación de la página web en un árbol DOM genera dos tipos de nodos : el primero es ___`"nodo de tipo elemento"`___ y corresponde a una etiqueta HTML y el segundo es ___`"nodo de tipo texto"`___  que contiene el texto encerrado por una etiqueta HTML.

Así, la siguiente etiqueta HTML:

```html
<title>Pagina Sencilla</title>
```

genera los siguientes nodos:

  - ___`nodo de tipo elemento`___ por la `etiqueta title`
  - ___`nodo de tipo texto`___ por el texto `"Página Sencilla"`

Por lo tanto se tiene 1 nodo de tipo elemento y 1 nodo de tipo texto

![nodo tipo texto - nodo tipo elemento](https://image.ibb.co/grkdE5/nodotipo_Texto_Nodotipo_Elemento.png)

De la misma manera, la etiqueta HTML:

```html
<p>Esta página es <strong>muy sencilla</strong></p>
```

genera los siguientes nodos:

- ___`nodo de tipo elemento`___ correspondiente a la etiqueta ` p`.
- ___`nodo de tipo texto`___  por el contenido textual `"Esta página es"`
- como el contenido de la etiqueta p incluye en su interior una `etiqueta strong`, esta se trasnforma en un ___`nodo de tipo elemento`___ .
- finalmente, el contenido textual se convierte en un ___`nodo de tipo texto`___ por el texto `"muy sencilla"`

Por lo tanto se tiene 2 nodos de tipo elemento y 2 nodos de tipo texto.

![nodo tipo texto - nodo tipo elemento](https://image.ibb.co/dFBPnQ/nodotipo_Texto_Nodotipo_Elemento2.png)

#### Algunas reglas

- Las etiquetas HTML serán siempre nodos de tipo elemento.
- Si dentro de las etiquetas HTML hay contenido textual, entonces, se formará un nodo de tipo texto, quien a su vez será un nodo hijo del primero.
- Si una etiqueta HTML se encuentra dentro de otra, se sigue el mismo procedimiento anterior, pero los nodos generados serán nodos hijo de su etiqueta padre.

#### Mas tipos de nodos

Hasta el momento hemos indicado 2 tipos de nodos : de tipo elemento (element) y de tipo texto (text).
Sin embargo, la especificación completa del DOM define 12 tipos de nodos indicados a continuación:

| Nombre del Nodo | Significado  | Tipo de Nodo |
| :------- | :------: | -----: |
| ELEMENT_NODE | Node del tipo [Element]()  | 1   |
| ATTRIBUTE_NODE   | Nodo del tipo [Attr]()     | 2 |
| TEXT_NODE | Nodo del tipo [Text]()  | 3 |
| CDATA_SECTION_NODE   | Nodo del tipo CDATASection  | 4 |
| ENTITY_REFERENCE_NODE   | Nodo del tipo EntityReference    | 5 |
| ENTITY_NODE  | Nodo del tipo Entity   | 6 |
| PROCESSING_INSTRUCTION_NODE   | Nodo del tipo ProcessingInstruction   | 7 |
| COMMENT_NODE   | Nodo del tipo [Comment]()     | 8 |
| DOCUMENT_NODE   | Nodo del tipo [Document]()    | 9 |
| DOCUMENT_TYPE_NODE  | Nodo del tipo DocumentType    | 10 |
| DOCUMENT_FRAGMENT_NODE   | Nodo del tipo DocumentFragment     | 11 |
| NOTATION_NODE   |  Nodo del tipo Notation   | 12 |

de dicha lista, nos concentraremos en los cinco nodos más habituales con los cuales podremos manipular las páginas Web a través del DOM.

Veamos a continuación más especificamente sus caracteristicas.

- Nodo Element : representa cada una de las etiquetas HTML. Pueden ser hijos de otro nodo de tipo elemento, y también tener hijos (nodos elementos o nodo de texto).

```html
Etiquetas HTML

<html></html> <head></head> <body></body> <h1></h1> <p></p> <div></div> <form></form> <a></a> <img/> <strong></strong>
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


- Nodo Attr : se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas HTML. Estos nodos son siempre hijos de un nodo Element y no pueden tener hijos.

```html
  <img src="imagenes/icon1" alt="logo1" />

 1 nodo Element --> etiqueta img
 2 nodo Attr --> src y alt
 ```

- Nodo Text : nodo que contiene el texto encerrado por una etiqueta HTML. Estos
nodos son siempre hijos de un nodo Element y ni pueden tener hijos.

```html
<h1>Seré una futura developer de Laboratoria</h1>
<h2>¿Que debo hacer?</h2>
<ul>
  <li>Mentalidad Growth mindset</li>
  <li>Practicar mucho</li>
  <li>Autoaprender y preguntar siempre</li>
</ul>

7 nodos Element --> etiquetas h1, h2, ul, li,
5 nodos Text --> 'Seré una futura developer de Laboratoria', '¿Qué debo hacer?', 'Mentalidad Growth mindset', ´Practicar mucho´, 'Autoaprender y preguntar siempre'
```

- Nodo Comment : representa los comentarios incluidos en la pagina HTML.

```html
<html>
  <head>
    <title>Página Sencilla</title>
  </head>
  <body>
    <!-- Hola Esto es un comentario-->
    <h1>Hola Mundo</h1>
    <!--Por favor coloca una imagen-->
    <img src="imagenes/icon1" alt="icono"/>
  </body>
</html>

6 nodos Element --> etiqueta html, head, title, body, h1, img
2 nodos Text --> 'Pagina Sencilla', 'Hola Mundo'
2 nodos Attr --> src y alt
2 nodos Comment --> <!--Hola esto es un comentario--> <!--Por favor coloca una imagen-->

```
- Nodo Document : representa al nodo raíz del que derivan todos los demás nodos del árbol del DOM. No tiene padre y únicamente tiene un hijo, que es el Elemento HTML.

## 3.2 Propiedades de los nodos

Los nodos del DOM poseen propiedades básicas las cuales son:

- ___nodeName___, indica el nombre del nodo.

- ___nodeType___ , es un número entero que describe el tipo de nodo: `1` para las etiquetas HTML, `3` para los nodos tipo texto, `8` para los nodos tipo comentarios, `9` para el nodo tipo document, etc.

- ___nodeValue___ , es el texto contenido dentro de un nodo de texto. Esta propiedad solo se utiliza para los nodos tipo texto `8` y nodos tipo comentarios `9`.



- Nodos
- Nodos vs. elementos
- Padres, hijos, hermanos, etc.

## Seleccionando elementos del DOM

#### To Do agregar objetivos e instrucciones
http://librosweb.es/libro/javascript/capitulo_5/acceso_directo_a_los_nodos.html

- selecting elements by ID
- selecting elements by tag
- selecting elements by clase
- selecting elements by CSS queries

https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

### Todo agregar video DOM manupulación - by TA
### Primero se hace código - code review -> grabar
###Conseguir último ejercicio - NO code review

***
[Continuar]( )
