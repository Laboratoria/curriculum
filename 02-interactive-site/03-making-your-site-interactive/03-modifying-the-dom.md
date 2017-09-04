# Modificando el DOM
- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `30min`

## Objetivos de Aprendizaje

En esta unidad aprenderemos:
* Como a manipular los nodos del DOM.
* Como Crear, Añadir y Eliminar Nodos al DOM.
* Saber usar:
  - `.innerHTML`
  - `.textContent`
  - `.innerText`
  - `.value`
  - `document.createTextNode()`
  - `document.createElement()`
  - `.appendChild`
  - `.removeChild`
  - `.replaceChild`
  - `insertBefore`
  - `style.property`

***
http://eloquentjavascript.net/13_dom.html

## Modificando elementos y contenido del DOM
En el tema anterior vimos qué es el DOM y cómo seleccionar nodos utilizando JavaScript. En esta ocasión vamos a utilizar el DOM para modificar el documento – html – utilizando JavaScript.

Los siguientes atributos  innerHTML, textContent funcionan como métodos para obtener y establecer el valor de una propiedad específico.

#### textContent
Al utilizar textContent sobre un nodo se va a mostrar el contenido en texto que exista en el nodo y en los hijos del mismo.
Si hay etiquetas de html son ignoradas.
Si se le asigna un valor, va a reemplazar todo el contenido del nodo por la cadena de texto que se le asigne.
Si la cadena de texto contiene etiquetas HTML, estas se van a escapar y se van a visualizar como texto.

Los cambios realizados no van a ser permanentes, el documento va a regresar a su estado original una vez que se cargue el sitio.

![alt text](http://blog.eamexicano.com/wp-content/uploads/2014/02/textcontent.png)

#### innerHTML

Funciona de manera similar a textContent pero, además de mostrar el texto que exista en el nodo seleccionado y en los hijos, se van a mostrar las etiquetas de HTML que pudieran existir.
Si se le asigna un valor, se va a reemplazar el contenido del nodo incluyendo a sus hijos por la cadena de texto que se le asigne. A diferencia de textContent, si dentro de la cadena de texto asignada existen etiquetas de html se van a visualizar en el navegador. Los cambios realizados no van a ser permanentes, el documento va a regresar a su estado original una vez que se cargue el sitio.

![alt text](http://blog.eamexicano.com/wp-content/uploads/2014/02/innerhtml.png)

En el siguiente video vemos de forma practica, como utilizar innerHTML y textContent
  - https://www.youtube.com/watch?v=KpiYwPLGEWs&list=PLhSj3UTs2_yVC0iaCGf16glrrfXuiSd0G&index=16

#### value
La propiedad value establece o devuelve el valor del atributo value de un campo de texto.

* Sintaxis
  - Devuelve la propiedad value:
    `elementoNodo.value`
  - Establezca la propiedad value:
    `elementoNodo.value = text`

>Nota: Valor devuelto:	Una cadena, que representa el valor del campo de texto.

Veremos un ejemplo mas claro en el siguiente [link](https://codepen.io/Si7v4n4/pen/prBzoX?editors=1010#0)

#### insertBefore
Nos permite elegir un nodo del documento e incluir otro antes que él.

    `elemento_padre.insertBefore(nuevo_nodo,nodo_de_referencia);`

Si tuviéramos un fragmento de un documento como éste:

```html
<div id="padre">
    <p>primer párrafo.</p>
    <p>segundo párrafo.</p>
</div>
```            
y quisiéramos añadir un nuevo párrafo antes del segundo, lo haríamos así:

```javascript
// Creamos el nuevo párrafo con su hijo texto
var nuevoParrafo = document.createElement('p')
var textoNuevoParrafo = document.createTextNode('Nuevo párrafo.')
nuevoParrafo.appendChild(textoNuevoParrafo);

// Guardamos en una variable el padre y en otra variable el segundo párrafo
var padre = document.getElementById('padre');
var segundoParrafo = padre.getElementsByTagName('p')[1];

// Y ahora lo insertamos
padre.insertBefore(nuevoParrafo, segundoParrafo);
```
#### replaceChild
Este método se utiliza para reemplazar un nodo secundario por otro. Toma como argumentos dos nodos: un nuevo nodo y el nodo a ser reemplazado. El nodo reemplazado debe ser un elemento secundario del elemento al que se llama el método.

* Sintaxis:

  `elemento_padre.replaceChild(nuevo_nodo,nodo_a_reemplazar);`

Con el mismo marcado que para el ejemplo de insertBefore, si quisiéramos sustituir el segundo párrafo por el que creamos, lo haríamos así:

```javascript
document.getElementById('padre').replaceChild(nuevoParrafo,segundoParrafo);
```

> Tenga en cuenta que tanto replaceChild como insertBefore esperan el nuevo nodo como su primer argumento.

## Creación de nodos
El DOM nos ofrece una serie de métodos para añadir nodos al árbol de un documento, pero los más básicos son createElement, que crea un elemento, y createTextNode, que crea un nodo de texto.

#### createElement
Teniendo en cuenta que por medio del DOM podemos crear un documento prácticamente de la nada1, no es de extrañar que proporcione un método para crear un elemento concreto.
Hay que recordar que el DOM es la interfaz que conecta el documento HTML con JavaScript. Es por eso que, al utilizar createElement, el nodo no va a ser visible en el navegador hasta que lo añidamos en el documento.
* Sintaxis:

    `document.createElement('elemento_a_crear');`

Así, crear un nuevo párrafo es tan simple como document.createElement('p') —nota: atención a las comillas—. Eso sí, el elemento no será visible, no es más que una especie de fantasma que existe en el documento, pero hasta que no se le asigne una posición en el árbol no se mostrará al usuario. Cómo incluirlo en el árbol lo veremos en la secion de _añadir nodos al DOM_.

#### createTextNode

Al igual que podemos crear un elemento, podemos crear un texto con el que poblarlo por medio de createTextNode.
* Sintaxis:

    `document.createTextNode('el_texto_que_desee');`

Igual que para el elemento creado arriba con el metodo _createElement_, el texto a crear por medio de este método debe ir entrecomillado. Y de la misma manera también, el texto existe, pero en ninguna parte. Si quisieramos, por ejemplo, crear un nuevo párrafo en un documento con el texto «Menos que Macbeth, pero más grande», tendríamos que crear primero el elemento p, luego el nodo de texto, y por último convertir el nodo de texto en el hijo del párrafo por medio de appendChild, método que veremos en la seccion `añadir nodos al DOM`. Algo así:

```javascript
var parrafo = document.createElement('p');
var texto = document.createTextNode('Menos que Macbeth, pero más grande');
parrafo.appendChild(texto);
```
Con ello nuestra variable parrafo contendría un elemento p con su texto correspondiente, listo para ser incluido en el árbol del documento.

## Añadir nodos al DOM
Acabamos de ver cómo crear elementos y nodos de texto, pero también hemos visto que estos nodos creados se mantienen en el _limbo_ del documento hasta que los incluimos en el árbol del mismo.

Para trabajar incorporando, modificando o eliminando nodos, contamos con los métodos que vamos a ver a continuación.

#### appendChild
Por medio de este método podemos incluir a un nodo un nuevo hijo, de esta manera:
* Sintaxis

    `elemento_padre.appendChild(nuevo_nodo);`

__El nuevo nodo se incluye inmediatamente después de los hijos ya existentes —si hay alguno— y el nodo padre cuenta con una nueva rama.__

```javascript
// Crear nodo de tipo Element
var parrafo = document.createElement("p");

// Crear nodo de tipo Text
var contenido = document.createTextNode("Hola Mundo!");

// Añadir el nodo Text como hijo del nodo Element
parrafo.appendChild(contenido);

// Añadir el nodo Element como hijo de la pagina
document.body.appendChild(parrafo);
```

## Eliminar nodos del DOM
Dado que podemos incluir nuevos hijos en un nodo, tiene sentido que podamos eliminarlos. Para ello existe el método:

#### removeChild.
Para quitar un nodo del documento tenemos que seleccionar padre del nodo, y desde ahí, remover el nodo deseado.
Si no conocemos el padre del nodo podemos seleccionar directamente el nodo, obtener el padre – con parent – , para después utilizar removeChild y eliminarlo.

* Sintaxis:

  `elemento_padre.removeChild(nodo_a_eliminar);`

```javascript
var contenedor = document.getElementById('contenedor');
var parrafo = document.getElementById('parrafo');
contenedor.removeChild(parrafo);

/*
Con el nodo seleccionado utilizamos parentNode
para seleccionar el padre. Desde el padre utilizamos
removeChild para eliminar el nodo seleccionado.
*/
var parrafo = document.getElementById('parrafo');
parrafo.parentNode.removeChild(parrafo);
```
### AHORA VAMOS A PRACTICAR UN POCO:
En los siguientes videos vamos a poner en practica la parte teorica ya que utiliza los metodos  como crear, añadir y eliminar los nodos del DOM por medio de Javascript y así poder crear páginas dinámicas,te sugiero que lo vayas haciendo el ejercicio y si es necesario pauses los videos.

* En este video  dura 8:18; en el minuto 2:25 empieza a utilizar los metodos `.createElement`  `createTextNode`
- https://www.youtube.com/watch?v=b-ZWMiqsAeU&list=PLhSj3UTs2_yVC0iaCGf16glrrfXuiSd0G&index=14
* en el siguiete video agrega los nodos creados al DOM
- https://www.youtube.com/watch?v=yQdi_8nh9HE&index=15&list=PLhSj3UTs2_yVC0iaCGf16glrrfXuiSd0G

## Modificando atributos

#### Atributos

Además de modificar el contenido del nodo o el nodo, también podemos modificar los atributos del nodo.
Conocer el valor o valores que tienen y asignar valores distintos.

Los atributos con los que podemos trabajar directamente son los que utilizan la interfaz HTMLElement.

![alt atributte](http://blog.eamexicano.com/wp-content/uploads/2014/02/atributos.png)

```javascript
var parrafo = document.getElementById("parrafo")
/*
Para obtener el valor asignado utilizamos el nodo seguido del atributo que queremos obtener
*/
parrafo.id
/*
Para asignar valor o valores además del nombre del atributo se le asigna el o los valores
*/
parrafo.className = "test ejemplo"
/*
Se utiliza className para hacer referencia al atributo class. En javascript class es una palabra reservada que todavía no está en uso.
*/
```
Los atributos `data` permiten almacenar datos en las etiquetas sin modificar la presentación del documento. Para poder trabajar con estos atributos desde el DOM se utiliza dataset.Con dataset podemos definir y asignar un valor al atributo data. Para obtener el valor asignado al atributo se utiliza el nombre del atributo.
![alt atribute](http://blog.eamexicano.com/wp-content/uploads/2014/02/atributos-data.png)
```javascript
/*Definir el atributo data-nombre para el nodo del párrafo
Asignar el valor "Ejercicio" a ese atributo
*/
parrafo.dataset.nombre = "Ejercicio"

//Obtener el valor almacenado en el nodo data-nombre

parrafo.dataset.nombre
```
Quedando el nodo de la siguiente manera:
```html
<p id="parrafo" class="test ejemplo" data-nombre="Ejercicio">
  Nuevo contenido
</p>
```
Habrá ocasiones en que necesitamos trabajar con atributos que no son parte de la interfaz HTMLElement.

Para esos casos existen dos métodos setAttribute y getAttribute.
#### setAttribute(‘atributo’, ‘valor’)
Crea un atributo y establece un valor.
#### getAttribute(‘atributo’)
Obtiene el valor del atributo.
```html
<img id='imagen' src="http://blog.eamexicano.com/wp-content/uploads/2014/02/innerhtml.png" alt="DOM - innerHTML" width="100%"  />
```
```javascript
var mi_imagen = document.getElementById('imagen')
//Devuelve el tamaño de la imagen en px

mi_imagen.width
mi_imagen.height

//Devuelve el tamaño de la imagen como está especificado  en la etiqueta

mi_imagen.getAttribute('width')
mi_imagen.getAttribute('height')
/*
Si queremos asignar un tamaño a la imagen que no sea en px tenemos que utilizar setAttribute
*/
mi_imagen.width = "50%"
mi_imagen.height = "auto"

mi_imagen.setAttribute('width', '50%')
mi_imagen.setAttribute('height', 'auto')
```

## Añadiendo estilos por Javascript
"unlike most other attributes, the style property itself is an object."

#### Style

Esta propiedad se utiliza para mostrar o para establecer el estilo del nodo sobre el que se esté utilizando.

* Sintaxis

  `element.style.property = value`

Tomar en cuenta que las propiedades de CSS que están separadas por un guión (font-family, font-size, border-bottom) tienen que ser escritas con notación camelCase (fontFamily, fontSize, borderBottom).

```javascript
var parrafo  = document.getElementById('parrafo')
parrafo.style.padding = "5px"
parrafo.style.color = "color: rgb(242, 242, 242);"
parrafo.style.fontFamily = "helvetica"
```
![alt DOM](http://blog.eamexicano.com/wp-content/uploads/2014/02/style.png)


## DOM Animation
Las animaciones de JavaScript se realizan mediante la programación de cambios graduales en el estilo de un elemento.

Los cambios son llamados por un temporizador. Cuando el intervalo del temporizador es pequeño, la animación parece continua.

Para demostrar cómo crear animaciones HTML con JavaScript, utilizaremos una página web sencilla.

```html
<!DOCTYPE html>
<html>
    <body>
        <h2>My First JavaScript Animation</h2>
        <div id="animate">My animation will go here</div>
    </body>
</html>
```
Todas las animaciones deben ser relativas a un elemento de contenedor.

```html
<div id ="container">
    <div id ="animate">My animation will go here</div>
</div>
```
El elemento contenedor debe crearse con style = "position: relative".
El elemento de animación debe crearse con style = "position: absolute".

Mas adelante veremos este tema con detalle.
```css
#container {
    width: 400px;
    height: 400px;
    position: relative;
    background: yellow;
}
#animate {
    width: 50px;
    height: 50px;
    position: absolute;
    background: red;
}
```
y como lo mencionamos anteriormente las animaciones en javascript son cambios graduales con la funcion de setInterval podemos hacer dichos cambios y la funcion frame realiza los cambios en los estilos

```javascript
function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
```
Podemos ver este ejercicio en el siguiente [link](https://codepen.io/Si7v4n4/pen/OjdZer)

```
Muchos de los conceptos fueron tomados de las siguientes referencias:
- http://blog.eamexicano.com/dom/manipular-nodos/
- http://www.codexexempla.org/curso/curso_4_3_c.php
- http://www.codexexempla.org/curso/curso_4_3_c.php
- http://blog.eamexicano.com/dom/modificar-estilo-contenido/
- http://www.codexexempla.org/curso/curso_4_3_d.php
- https://www.w3schools.com/js/js_htmldom_animate.asp
```

***

[Continuar]( )
