
# Document Object Model (DOM)
- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `30min`

## Objetivos de Aprendizaje

* Entender los conceptos de internet, servidor web y url 
* Entender la diferencia entre internet y la web.
* Entender la arquitectura básica cliente-servidor (web)
* Entender que es el DOM 


 
***

El texto a continuación se basa en gran medida, con ciertos ajustes, en las siguientes publicación 

-   [How does the Internet work -  MDN web docs](https://developer.mozilla.org/es/docs/Learn/Common_questions/How_does_the_Internet_work).

-   [Introducción a Internet - MDN web docs](https://si.ua.es/es/documentos/documentacion/pdf-s/mozilla1-pdf.pdf)

Así mismo del libro

- Programación HTML5, CSS3 Y Javascript, titulo original (Sams Teach Yourself  HTML, CSS, and Javascript All in One ) de Julie C. Meloni, edición española: Ediciones Anaya Multimedia ISBN:978-84-415-3193-2 : Capitulo 1: Publicar contenido Web 
 
***

# 1.- Introducción al Desarrollo Web
Antes de iniciar el maravilloso tema del DOM  leamos e interioricemos atentamete los siguientes conceptos que nos darán una introducción al desarrollo Web.

## ¿Qué es internet?
Seguramente has escuchado que Internet es la "web" o la "nube". En realidad no es así.

En su forma más básica, Internet, es una red de ordenadores conectados en todo el mundo que ofrecen diversos servicios a sus usuarios, como pueden ser : correo electrónico, chat, contenido web,teleconferencias, videollamadas, etc.

Todos los servicios que ofrece Internet son llevados a cabo por miles de ordenadores que están permanentemente encendidos y conectados a dicha red (servidores), esperando que los usuarios (clientes) lo soliciten y sirviendolos una vez solicitados. Estos ordenadores son los servidores.

## ¿Qué es un servidor?

Son grandes computadoras que guardan y transmiten datos vía Internet y pueden ser de difentes tipos según el servicio que brindan. Así tenemos:
- Servidores de correo electrónico como : gmail, hotmail, yahoo etc.
- Servidores que hacen posible nuestras conversaciones por chat : WhatsApp, Facebook Messenger, Line, Snapchat, etc.
- Servidores que permiten hacer videollamadas individuales o grupales : skype.
- Servidores que permiten la transferencia de archivos.
- Servidores Web que permiten ver contenido web (audio, video, texto, imágenes a través de una pagina web).

## ¿Que es un servidor web?

Un servidor web, no es más que un ordenador conectado a Internet capaz de servir `páginas Web ` (texto, imagenes, videos, audios, etc) a los usuarios que lo soliciten (clientes) normalmente a través de un navegador que puede ser (Internet Explorer, Mozilla,Google Chrome) desde cualquier dispositivo que esté conectado a Internet (Laptop, computadora, celular, tablet, etc)

En 1993, sólo alrededor de 100 ordenadores de todo el mundo estaban prepadarados para servir páginas Web. Estas páginas interconectadas recibieron el nombre de `World Wide Web (WWW)` . 
A partir de ahí, el continuo desarrollo de los navegadores y la estandarización de HTML (lenguaje de marcado de hipertexto) nos ha conducido al mundo en que vivimos hoy, en el que más de 110 millones de servidores Web atienden peticiones de más de 25,000 millones de archivos de texto y multimedia.

Sí, HTML es el lenguaje con el que se definen tanto la estructura como el contenido de una página Web. Basicamente y como lo has visto anteriormente, se trata de un conjunto de etiquetas que sirven para definir la forma de presentar el texto y otros elementos de la página, como pueden ser : imágenes, video, audio, formularios, etc.

## Publicando contenido Web (Arquitectura Cliente - Servidor)

Para generar finalmente el contenido web que podemos ver a través del navegador, se dan varios procesos en muchos sitios diferentes.

Estos procesos ocurren muy rápido (en cuestión de milisegundos), y entre bastidores. En otras palabras, aunque puede parecer que lo único que hacemos es abrir un navegador, escribir una dirección web y ver al instante el contenido solicitado, la tecnología está trabajando duro para nosotros en un segundo plano. 

La siguiente imagen muestra la interacción básica entre un navegador (cliente) y un servidor.

![Arquitectura cliente - servidor](https://laurmolina7821.files.wordpress.com/2013/03/servidor1.png)

-   `Petición` hecha desde el navegador hacia el servidor Web

-   `Respuesta` desde el servidor Web hacia el navegador

Supongamos ahora, que deseas hacer una búsqueda en Google, de modo que tecleas la siguiente dirección Web
([https://www.google.com.pe](https://www.google.com.pe) ) en la barra de direccciones. 

Observa que de manera inmediata el navegador muestra algo muy parecido a la siguiente imagen .

![Arquitectura cliente - servidor](https://s-media-cache-ak0.pinimg.com/originals/01/bc/8d/01bc8dad5c089e521320c4c577c05a20.gif)

¿Que muestra la imagen? un sitio Web (Google) que contiene texto y una imagen (el logo de Google). Pero, ¿cómo llegamos a ver esto a través del navegador?

Lee atentamente los procesos que se dieron entre el servidor y el navegador a continuación:

1 .- El navegador Web (en mi caso Google Chrome) envía una `petición`, una solicitud, del archivo `index.html` que se encuentra en la dirección `https://www.google.com`, es decir, solicita al servidor le sirva el archivo index.html.

2 .-El servidor tras recibir la petición de un archivo específico,busca en los contenidos de su directorio el archivo en cuestión.

![Directorio de archivos en el servidor web](http://s2.subirimagenes.com/imagen/previo/thump_9784370archivosservidor.png)

Una vez que lo encuentra, lo abre, y devuelve el contenido de dicho archivo en el navegador.
Es decir, devuelve código HTML de la siguiente manera :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Google</title>
    <link type="text/css" src="estilos/main.css"></link>
  </head>
  <body>
    <!--Barra de Navegacion superior-->
     <div class="navbar">
        <ul>
          <li><a href="#">Gmail</a></li>
          <li><a href="#">Imagenes</a></li>
          <li><a href="#"><img src="" alt="icono1"></a></li>
          <li><a href="#"><img src="" alt="icono2"></a></li> 
          <li><a href="#"><img src="" alt="icono3"></a></li>
        </ul>
     </div>
     <!--Seccion del logo de Google-->
     <div>  
        <img src="imagenes/logos.gif" alt="Google"/>
     </div>
     <!--Sección del formulario de de busqueda de Google -->
     <form>
        <input type="text"> 
        <button> Buscar con Google </button>
        <button> Me siento con suerte </button>
     </form> 
     <!--script de código javascript-->
     <script type="text/javascritp" src="js/app.js"></script>
  </body>
</html>

```

3.- El navegador Web recibe el contenido del archivo `index.html` el cual está escrito en lenguaje HTML (lenguaje de marcado de hipertexto) y renderiza, es decir, pinta el contenido en función a las etiquetas HTML. Mientras lo hace, el navegador se topa con el logo de Google a través del siguiente código HTML:

```html
<img src="imagenes/logos.jpg" alt="Google"/>
```
la etiqueta proporciona atributos que le dicen la ubicación de la imagen `src="imagenes/logos.jpg" ` y el texto alternativo `alt="Google" `

4.- El navegador mira el atributo src de la etiqueta `<img/>` y solicita al servidor Web dicha imagen.

5.- El servidor Web interpreta dicha solicitud, localiza el archivo en el directorio de carpetas y envía el contenido al navegador.

6.- Finalmente el navegador muestra tanto el texto y la imagen por el monitor y listo!! 


Observa, los navegadores son algo más que la ventana por donde visualizamos contenido de nuestras páginas Web (texto, imagenes, videos, etc). 

Los navegadores ensamblan los componentes del archivo `index.html`
y lo muestran según las etiquetas HTML y para realizar este maravilloso proceso, todos los navegadores, absolutamente todos, utilizan una herramienta que tienen integrada dentro de si, un programa llamado DOM (Document Object Model) y va permitir dos cosas :

-	Al navegador, mostrar todo el contenido de nuestros archivos html, es decir, todas nuestras soluciones web.

-	Y a todas ustedes, futuras developers de Laboratoria, elaborar soluciones Web super alucinantes y dinámicas llenas de interactividad y funcionalidad de la mano con Javascript.

¡ Esto es emocionante ! ¡ Vamos aprender del DOM !

# 2.- ¿Qué es el Dom? (Document Object Model)

***
El texto a continuación se basa en gran medida, con ciertos ajustes, en las siguientes publicación 

-   [Referencia DOM de Gecko -  MDN web docs](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n).

- [Introduccion a JavaScritp :  Capitulo 5 (DOM)](www.librosweb.es)

Así mismo del libro

- Programación HTML5, CSS3 Y Javascript, titulo original (Sams Teach Yourself  HTML, CSS, and Javascript All in One ) de Julie C. Meloni, edición española: Ediciones Anaya Multimedia ISBN:978-84-415-3193-2 : Capitulo 15: Trabajar con el modelo de objetos del documento (DOM) 

***


El DOM (Document Object Model) es un estándar definido por el W3C (World Wide Web Consortium) y es una interfaz de programación de aplicaciones para los documentos XML y HTML que viene incorporado en los navegadores Web. 

El DOM organiza los documentos XML y HTML como un grupo de nodos, a través de una estructura de árbol, al cual se pueda acceder a través de un lenguaje de programación, en nuestro caso JavaScript, con el fin de modificar, tanto su estructura, estilo y contenido.

XML (Extensible Markup Language) | HTML (HyperText Markup Language)
-- | --
![Imagen 1][1] |  ![Imagen 2][2]


 [1]: http://www.elguille.info/colabora/NET2005/Percynet_ManejoXML_VBNET02.gif
 [2]: https://preview.ibb.co/difuMk/html_Google2.png 





Veamos a continuación la representación DOM de un pagina Web


Pagina Web | Documento HTML | Representación DOM 
-- | -- | --
![Imagen a][a] | ![Imagen b][b]  | ![Imagen c][c]
 
 [a]: https://preview.ibb.co/fGZh7Q/web_Google.png

 [b]: https://preview.ibb.co/difuMk/html_Google2.png
 [c]: https://www.html5rocks.com/es/tutorials/internals/howbrowserswork/image025.png  


Pon atención, una página web es un documento HTML o también llamado `objeto document` . Este documento puede exhibirse en la ventana del navegador o también llamado `objeto window `.

Cuando el navegador carga una página web, crea internamente de manera casi automática una representación del documento en forma de árbol jerárquico gracias al DOM.

El DOM nos otorga una representación jerárquica del `objeto document` a través de `nodos`. Estos nodos, se van a organizan en una estructura arbórea y en función a las etiquetas del documento HTML.


## 2.1) El Objeto Window (window object) 

El `objeto window` representa la ventana del navegador y se encuentra en la parte superior de la jerarquía del navegador. 

Observa la siguiente imagen :

![El objeto window y sus descendientes -  BOW](https://www.arkaitzgarro.com/javascript/images/cap06/jerarquia.png)

Como puedes ver el objeto window es el objeto padre de todos los demás objetos (document, frames, history, etc) y a lo largo del curso ya has utilizado por lo menos un método de este objeto.

- `alert()` : recibe como parámetro el mensaje que se muestra en un cuadro de alerta.

- `prompt()`: función que se utiliza cuando el usuario ingresa dotos por medio del teclado.


En adelante nos concentraremos en el objeto document  y como podemos acceder a él a través del DOM.

Los demás objetos descendientes del window se verán en el capitulo del BOM (Browser Object Model).


## 2.2) El Objeto Document (document object)

Como mencionamos anteriormente el `objeto document` representa un documento HTML o página Web. 

Las paginas Web se muestran dentro de la ventana del navegador, es decir, a través del objeto window, por ello se dice que el objeto window es padre del objeto document. 

Como todos los documentos HTML, éste se compone de varias etiquetas y su contenido respectivo. 

```html
<!doctype html>
<html>
  <head>
    <title>My home page</title>
  </head>
  <body>
    <h1>My home page</h1>
    <p>Hello, I am Marijn and this is my home page.</p>
    <p>I also wrote a book! Read it
      <a href="http://eloquentjavascript.net">here</a>.</p>
  </body>
</html>
```
Como se observa, la etiqueta `<html>` forma un gran contenedor, dentro de él se encuentran las etiquetas `<head>` y `<body>`.
Así mismo, la etiqueta head es el contenedor de la etiqueta `<title>` quien a su vez es el contenedor del texto `My home Page` y así sucesivamente como indica la siguiente imagen :

![Etiquetas html - contenedores](http://eloquentjavascript.net/img/html-boxes.svg)


El DOM (Document Object Model) se centra especificamente en la representación a través de `nodos` de los contenedores (etiquetas html) y del texto de nuestra página web.

# 3.- Los Nodos del DOM 

Cada contenedor y texto del objeto document es lo que se denomina un nodo del DOM. 

Cada uno de los nodos es un objeto en sí y por ser un objeto tienen propiedades y métodos. Dichos objetos se organizan en una estructura de árbol, donde el propio objeto document es la raíz del árbol de nodos.

  Pagina Web (1)| Árbol de Nodos DOM (2)
-- | -- 
![Imagen x][x] | ![Imagen y][y]  | 
 
 [x]:https://preview.ibb.co/kQZGj5/pag_Web_Sencilla.png

 [y]:https://preview.ibb.co/drvdxQ/representaciondom.png

En el esquema (2) , cada rectángulo representa un nodo (objeto) DOM, y las flechas indican las relaciones (padre - hijos - hermanos) entre nodos de la siguiente manera:

### Relación Padres e hijos
____

- La raíz del árbol de nodos de cualquier página web siempre es la misma : 
___Un nodo llamado objeto document___ que es el objeto `padre` de los objetos restantes.

- El objeto o nodo ___html___ es el `padre` de los objetos o nodos ___head y body___.

- El objeto o nodo ___head___ es el `padre` de los objeto o nodos ___meta y title___, por lo tanto ___meta y title___ son `hijos` del objeto o nodo ___head___. el nodo de texto ___"pagina sencilla"___ es `hijo` del objeto o nodo ___title___.



### Relacion hermanos
___

- Los nodos `hermanos` hacen referencia a los objetos o nodos que tiene el mismo padre, es decir, son nodos del mismo nivel en el árbol del DOM.

- Los objetos o nodos ___head y body___ son `hermanos`, cuyo padre es el objeto o nodo ___html___.

- el nodo de texto ___esta página es___ y el objeto o nodo ___strong___ son nodos `hermanos`, cuyo padre es el objeto o nodo ___p___


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

- ___`nodo de tipo elemento`___ correspondiente a la `etiqueta p`.
- ___`nodo de tipo texto`___  por el contenido textual `"Esta página es"` 
- como el contenido de la etiqueta p incluye en su interior una `etiqueta strong`, esta se trasnforma en un ___`nodo de tipo elemento`___ .
- finalmente, el contenido textual se convierte en un ___`nodo de tipo texto`___ por el texto `"muy sencilla"`

Por lo tanto se tiene 2 nodos de tipo elemento y 2 nodos de tipo texto.

![nodo tipo texto - nodo tipo elemento](https://image.ibb.co/dFBPnQ/nodotipo_Texto_Nodotipo_Elemento2.png)

La transformación automática de la página en un árbol de nodos siempre sigue las mismas reglas:

- Las etiquetas HTML serán siempre nodos de tipo elemento.
- Si dentro de las etiquetas HTML hay contenido textual, entonces, se formará un nodo de tipo texto, quien a su vez será un nodo hijo del primero.
- Si una etiqueta HTML se encuentra dentro de otra, se sigue el mismo procedimiento anterior, pero los nodos generados serán nodos hijo de su etiqueta padre.

## 3.1 Tipos de Nodos

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


## 3.3 Nodos vs Elementos

![nodo tipo texto - nodo tipo elemento](https://preview.ibb.co/jkFBmk/nodo_Vs_Elemento.png)


  ___Nodos___ : Cuando indicamos nodos, a secas, nos estamos refiriendo a todos los nodos del DOM y para poder recorrerlos utilizamos las siguientes propiedades.

- ChildNode : es una lista de nodos (nodeList) con todos los nodos hijos
- parentNode : es el nodo padre
- firstChild : es el primer nodo hijo
- lastChild  : es el último nodo hijo
- siblings  : 
- nextSiblings : 
- previusSibling : Retona al nodo hermano anterior al nodo actual
- textContent : Retorna el contenido de texto del nodo


___Elementos___ : Cuando indicamos elementos, nos referimos exclusivamente a los nodos del tipo Elemento, es decir aquellos que hacen refencia a las etiquetas html y para poder recorrerlos utilizamos las siguientes propiedades.

- children : es una colección de elementos HTML e incluye a todos los elementos hijos de un nodo.
- parentElement : es el elemento padre.
- firstElementChild :es el primer elemento hijo.
- lastElementChild : es el último elemento hijo.
- nextElementSibling : es el siguiente elemento hermano al elemento actual.
- previousElementSibling : es el elemento hermano anterior al elemento actual.


# 4.- Metodos para seleccionar 

- selecting elements by ID : 
- selecting elements by Class :
- selecting elements by tagName :
- selecting elements by name :



[Continuar]( )

***
[Continuar]( )
