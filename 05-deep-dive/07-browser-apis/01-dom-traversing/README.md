# Recorrido del DOM

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

La creación del Document Object Model o `DOM` es una de las innovaciones
que más ha influido en el desarrollo de las páginas web dinámicas y de las
aplicaciones web más complejas.

`DOM` permite a los programadores web acceder y manipular las páginas XHTML
como si fueran documentos XML. De hecho, DOM se diseñó originalmente para
manipular de forma sencilla los documentos XML.

A pesar de sus orígenes, `DOM` se ha convertido en una utilidad disponible para
la mayoría de lenguajes de programación (Java, PHP, JavaScript) y cuyas únicas
diferencias se encuentran en la forma de implementarlo.

Una de las tareas habituales en la programación de aplicaciones web con
JavaScript consiste en la manipulación de las páginas web. De esta forma,
es habitual obtener el valor almacenado por algunos elementos (por ejemplo
los elementos de un formulario), crear un elemento (párrafos, `<div>`, etc.)
de forma dinámica y añadirlo a la página, aplicar una animación a un elemento
(que aparezca/desaparezca, que se desplace, etc.).

Todas estas tareas habituales son muy sencillas de realizar gracias a `DOM`.
Sin embargo, para poder utilizar las utilidades de `DOM`, es necesario
"transformar" la página original. Una página HTML normal no es más que una
sucesión de caracteres, por lo que es un formato muy difícil de manipular.
Por ello, los navegadores web transforman automáticamente todas las páginas web
en una estructura más eficiente de manipular.

Esta transformación la realizan todos los navegadores de forma automática y nos
permite utilizar las herramientas de `DOM` de forma muy sencilla.
El motivo por el que se muestra el funcionamiento de esta transformación
interna es que condiciona el comportamiento de `DOM` y por tanto, la forma
en la que se manipulan las páginas.

`DOM` transforma todos los documentos XHTML en un conjunto de elementos
llamados nodos, que están interconectados y que representan los contenidos de
las páginas web y las relaciones entre ellos. Por su aspecto, la unión de todos
los nodos se llama "árbol de nodos".

Nodos generados automáticamente por DOM para una etiqueta XHTML con otras
etiquetas XHTML en su interior.

La transformación automática de la página en un árbol de nodos siempre
sigue las mismas reglas.

## Las etiquetas XHTML se transforman en dos nodos

El primero es la propia etiqueta y el segundo nodo es hijo del primero y
consiste en el contenido textual de la etiqueta.

## Si una etiqueta XHTML se encuentra dentro de otra

Se sigue el mismo procedimiento anterior, pero los nodos generados serán
nodos hijo de su etiqueta padre.

Como se puede suponer, las páginas XHTML habituales producen árboles con
miles de nodos. Aun así, el proceso de transformación es rápido y automático,
siendo las funciones proporcionadas por DOM (que se verán más adelante) las
únicas que permiten acceder a cualquier nodo de la página de forma sencilla
e inmediata.

La especificación completa de `DOM` define 12 tipos de nodos, aunque las
páginas XHTML habituales se pueden manipular manejando solamente cuatro
o cinco tipos de nodos:

1 `Document`, nodo raíz del que derivan todos los demás nodos del árbol.

2 `Element`, representa cada una de las etiquetas XHTML. Se trata del único

nodo que puede contener atributos y el único del que pueden derivar otros nodos.

3 `Attr`, se define un nodo de este tipo para representar cada uno de los

atributos de las etiquetas XHTML, es decir, uno por cada par atributo=valor.
Text, nodo que contiene el texto encerrado por una etiqueta XHTML.

4 `Comment`, representa los comentarios incluidos en la página XHTML.

Los otros tipos de nodos existentes que no se van a considerar son
`DocumentType`, `CDataSection`, `DocumentFragment`, `Entity`, `EntityReference`
,`ProcessingInstruction` y `Notation`.
