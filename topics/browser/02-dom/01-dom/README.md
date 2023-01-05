---
type: read
duration: 30min
---

# Document Object Model (DOM)

## Objetivos de Aprendizaje

En esta unidad aprenderemos:

- ¿Qué es el DOM y para qué nos sirve?
- ¿Qué es un nodo?
- ¿Qué es el árbol de nodos?
- Conocer las propiedades para identificar los diferentes tipos de nodos del DOM:
  * `nodeName`
  * `nodeType`
  * `nodeValue`
- Conocer las siguientes propiedades para navegar a través de los nodos del DOM (Traversing):
  * `parentNode`
  * `childNodes`
  * `firstChild`
  * `lastChild`
  * `previousSibling`
  * `previousElementSibling`
  * `nextSibling`
  * `nextElementSibling`

## ¿Qué es el DOM?

La creación del Document Object Model o `DOM` es una de las innovaciones
que más ha influido en el desarrollo de las páginas web dinámicas y de las
aplicaciones web más complejas.

`DOM` es una herramienta que permite a los programadores web acceder y manipular
las páginas XHTML como si fueran documentos XML. De hecho, DOM se diseñó
originalmente para manipular de forma sencilla los documentos XML.

A pesar de sus orígenes, `DOM` se ha convertido en una utilidad disponible para
la mayoría de lenguajes de programación (Java, PHP, JavaScript) y cuyas únicas
diferencias se encuentran en la forma de implementarlo.

Una de las tareas habituales en la programación de aplicaciones web con
JavaScript consiste en la manipulación de las páginas web. De esta forma,
es habitual obtener el valor almacenado por algunos elementos (por ejemplo
los elementos de un formulario), crear un elemento (párrafos, `<div>`, etc.)
de forma dinámica y añadirlo a la página, aplicar una animación a un elemento
(que aparezca/desaparezca, que se desplace, etc.).

Todas estas tareas habituales son muy sencillas de realizar gracias a `DOM`, sin
embargo, para poder realizar dichas tareas es necesario `"transformar"` la
página original.

Una página HTML no es más que una sucesión de caracteres, por lo que es un
formato muy difícil de manipular por esta razón, los navegadores web (Chrome,
Mozilla, IE, etc) transforman automáticamente todas las páginas web en una
estructura más eficiente de manipular.

Esta transformación la realizan todos los navegadores de forma automática y nos
permite utilizar las herramientas de `DOM` de forma muy sencilla.

`DOM` transforma todos los documentos XHTML en un conjunto de elementos llamados
`nodos`, que están interconectados y que representan el contenido de la página
web y la relacion entre ellos. Por su aspecto, la unión de todos los nodos se
llama `"árbol de nodos"` tal y como se muestra en la imagen.

Página Web (1) | Árbol de Nodos DOM (2)
-- | --
![Página web][x] | ![DOM][y]  |

[x]:https://preview.ibb.co/kQZGj5/pag_Web_Sencilla.png

[y]:https://preview.ibb.co/drvdxQ/representaciondom.png

## Tipos de Nodos

La transformación automática de la página en un árbol de nodos siempre sigue las
mismas reglas.

- `Las etiquetas XHTML se transforman en dos nodos`

> El primero es la propia etiqueta y el segundo nodo es hijo del primero y
> consiste en el contenido textual de la etiqueta.

- `Si una etiqueta XHTML se encuentra dentro de otra`

> Se sigue el mismo procedimiento anterior, pero los nodos generados serán
nodos hijo de su etiqueta padre.

Como se puede suponer, las páginas XHTML habituales producen árboles con
miles de nodos. Aun así, el proceso de transformación es rápido y automático,
siendo las funciones proporcionadas por DOM (que se verán más adelante) las
únicas que permiten acceder a cualquier nodo de la página de forma sencilla
e inmediata.

La especificación completa de `DOM` define 12 tipos de nodos, los cuales se
detallan a continuación:

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

 Aunque las páginas XHTML que manejaremos se pueden manipular manejando
 solamente cuatro o cinco tipos de estos nodos:

- `DOCUMENT_NODE`, nodo raíz del que derivan todos los demás nodos del árbol.

- `ELEMENT_NODE`, representa cada una de las etiquetas XHTML. Se trata del único
  nodo que puede contener atributos y el único del que pueden derivar otros nodos.

  ```html
  <html>
    <head></head>
    <body></body>
  </html>

  3 nodo del tipo Element --> html, head y body
  ```

- `ATTRIBUTE_NODE`, se define un nodo de este tipo para representar cada uno de
  los atributos de las etiquetas XHTML, es decir, uno por cada par atributo=valor.

  ```html
  <img src="images/logo.png" alt="Logo Laboratoria" />

  1 nodo tipo Element --> etiqueta img
  2 nodo tipo Attr --> src y alt
  ```

- `TEXT_NODE`, nodo que contiene el texto encerrado por una etiqueta XHTML.

  ```html
  <h1>Seré una futura developer de Laboratoria</h1>
  <h2>¿Qué debo hacer?</h2>
  <ul>
    <li>Mentalidad de crecimiento</li>
    <li>Practicar mucho</li>
    <li>Autoaprender y preguntar siempre</li>
  </ul>

  6 nodos tipo Element --> etiquetas h1, h2, ul, li,
  5 nodos tipo Text --> 'Seré una futura developer de Laboratoria', '¿Qué debo
    hacer?','Mentalidad de crecimiento','Practicar mucho', 'Autoaprender y
    preguntar siempre'
  ```

- `COMMENT_NODE`, representa los comentarios incluidos en la página XHTML.

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
  2 nodos Comment --> <!--Hola esto es un comentario-->
  <!--Por favor coloca una imagen-->
  ```

Los otros tipos de nodos existentes que no se van a considerar son
`DocumentType`, `CDataSection`, `DocumentFragment`, `Entity`, `EntityReference`,
`ProcessingInstruction` y `Notation`.

## Relación entre Nodos

Los nodos del DOM se relacionan entre sí teniendo en cuenta quien es el nodo
padre, los nodos hermanos e hijos. Así como tú tienes hermanos,padre o hijos,
**los nodos del DOM también tienen una relación familiar**.

### Analicemos esta imagen

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

- Los objetos o nodos **head** y **body** son `hermanos`, cuyo padre es el
  objeto o nodo **html**.

- El nodo de texto **My link** y el nodo **attribute** son nodos `hermanos`,
  cuyo padre es el objeto o nodo **a**. (En la imagen parece que **attribute**
  es hermano del nodo **a** pero **a** es padre de **attribute**.)

## Propiedades de los nodos

Primero, cada vez que hablemos de `nodos` en realidad nos estamos refiriendo a
un **objeto** y como recordarás, los objetos tienen **propiedades y métodos**.
Por lo tanto los `nodos` tienen propiedades y métodos que te ayudarán a
identificarlos.

A continuación te presentamos tres propiedades de los nodos las cuales te
ayudarán a identificar su nombre, tipo y valor.

- **nodeName**, indica el nombre del nodo.
- **nodeType**, es un número entero que describe el tipo de nodo: `1` para
  las etiquetas HTML, `3` para los nodos tipo texto, `8` para los nodos tipo
  comentarios, `9` para el nodo tipo document, etc.
- **nodeValue**, es el texto contenido dentro de un nodo de texto. Esta
  propiedad solo se utiliza para los nodos tipo texto `3` y nodos tipo
  comentarios `8`.

## Recapitulando

Prepara tu editor de código, replica lo que realiza Lulú en el siguiente video y
refuerza lo aprendido.

[![Recorriendo el DOM](https://img.youtube.com/vi/D93IP_n6kj8/0.jpg)](https://www.youtube.com/watch?v=D93IP_n6kj8)
