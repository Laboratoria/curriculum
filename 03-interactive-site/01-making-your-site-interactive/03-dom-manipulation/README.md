# Modificando el DOM

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `120min`

## Objetivos de Aprendizaje

En esta unidad aprenderemos:

- Cómo manipular los nodos del DOM.
- Cómo crear, añadir y eliminar Nodos al DOM.
- Conocer sobre las siguientes propiedades:
  * `.innerHTML`
  * `.textContent`
  * `.innerText`
  * `.value`
  * `.style.property`
- Conocer sobre los siguientes métodos:
  * `document.createTextNode()`
  * `document.createElement()`
  * `.appendChild()`
  * `.removeChild()`
  * `.replaceChild()`
  * `.insertBefore()`

***

## Modificando elementos y contenido del DOM

En el tema anterior vimos qué es el DOM y cómo seleccionar nodos utilizando
JavaScript. En esta ocasión vamos a utilizar el DOM para modificar el
documento HTML utilizando JavaScript.

Los atributos `.textContent` y `.innerHTML` funcionan como propiedades para
obtener y establecer el valor de un elemento específico.

### textContent

Al utilizar textContent sobre un nodo, se va a mostrar el contenido del texto
que exista en el nodo y en los hijos del mismo.Si hay etiquetas HTML, son
ignoradas. Si se le asigna un valor, va a reemplazar todo el contenido del nodo
por la cadena de texto que se le asigne. Si la cadena de texto contiene
etiquetas HTML, éstas se van a escapar y se van a visualizar como texto.
Los cambios realizados no van a ser permanentes, el documento va a regresar a
su estado original una vez que se recargue el sitio.

![textContent](http://blog.eamexicano.com/wp-content/uploads/2014/02/textcontent.png)

### innerHTML

Funciona de manera similar a textContent pero, además de mostrar el texto que
exista en el nodo seleccionado y en los hijos, se van a mostrar las etiquetas
de HTML que pudieran existir. Si se le asigna un valor, se va a reemplazar el
contenido del nodo incluyendo a sus hijos por la cadena de texto que se le
asigne. A diferencia de `textContent`, si dentro de la cadena de texto asignada
existen etiquetas HTML, se van a visualizar en el navegador. Los cambios
realizados no van a ser permanentes, el documento va a regresar a su estado
original una vez que se recargue el sitio.

![textContent](http://blog.eamexicano.com/wp-content/uploads/2014/02/innerhtml.png)

En el siguiente video vemos de forma práctica, cómo utilizar `.innerHTML` y
`.textContent`:

[Modificando, reemplazando y eliminando nodos](https://www.youtube.com/watch?v=KpiYwPLGEWs&list=PLhSj3UTs2_yVC0iaCGf16glrrfXuiSd0G&index=16)

### value

La propiedad `value` establece o devuelve el valor del atributo value de un
campo de texto.

- Sintaxis

  * Devuelve la propiedad value: `elemento.value;`
  * Establece la propiedad value: `elemento.value = texto;`

> Nota: el valor devuelto es un string, que representa el valor del campo de
> texto.

Puedes ver un ejemplo más claro en este [pen](https://codepen.io/Si7v4n4/pen/prBzoX?editors=1010#0).

### insertBefore

Nos permite elegir un nodo del documento e incluir otro antes que él.

```javascript
padre.insertBefore(nuevoNodo, nodoDeReferencia);
```

Si tuviéramos un fragmento de un documento como éste:

```html
<div id="container">
    <p>Primer párrafo.</p>
    <p>Segundo párrafo.</p>
</div>
```

y quisiéramos añadir un nuevo párrafo antes del segundo, lo haríamos así:

```javascript
// Creamos el nuevo párrafo con su hijo texto
var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('Nuevo párrafo.');
newParagraph.appendChild(paragraphText);

// Guardamos en una variable el padre y en otra variable el segundo párrafo
var container = document.getElementById('container');
var secondParagraph = container.getElementsByTagName('p')[1];

// Y ahora lo insertamos
container.insertBefore(newParagraph, secondParagraph);
```

### replaceChild

Este método se utiliza para reemplazar un nodo secundario por otro. Toma como
argumentos dos nodos: un nuevo nodo y el nodo a ser reemplazado. El nodo
reemplazado debe ser un elemento secundario del elemento al que se llama el
método.

- Sintaxis:

  ```javascript
	padre.replaceChild(nuevoNodo, nodoAReemplazar);
	```

Con el mismo HTML que para el ejemplo de `.insertBefore()`, si quisiéramos
sustituir el segundo párrafo por el que creamos, lo haríamos así:

```javascript
container.replaceChild(newParagraph, secondParagraph);
```

> Tenga en cuenta que tanto `.replaceChild()` como `.insertBefore()` esperan el
> nuevo nodo como su primer argumento.

## Creación de nodos

El DOM nos ofrece una serie de métodos para añadir nodos al árbol de un
documento, pero los más básicos son `.createElement()`, que crea un elemento, y
`.createTextNode()`, que crea un nodo de texto.

### createElement

Teniendo en cuenta que por medio del DOM podemos crear un documento
prácticamente de la nada, no es de extrañar que proporcione un método para
crear un elemento concreto.

Hay que recordar que el DOM es la interfaz que conecta el documento HTML con
JavaScript. Es por eso que, al utilizar `.createElement()`, el nodo no va a ser
visible en el navegador hasta que lo añadamos en el documento.

- Sintaxis:

  ```javascript
	document.createElement('elemento');
	```

Así, crear un nuevo párrafo es tan simple como `document.createElement('p');`,
atención a las comillas. Eso sí, el elemento no será visible, no es más
que una especie de fantasma que existe en el documento, pero hasta que no se le
asigne una posición en el árbol no se mostrará al usuario. Cómo incluirlo en el
árbol lo veremos en la sección de _añadir nodos al DOM_.

### createTextNode

Al igual que podemos crear un elemento, podemos crear un texto con el cual
ocuparlo por medio de createTextNode.

- Sintaxis:

  ```javascript
	document.createTextNode('texto');
	```

Igual que para el elemento creado arriba con el metodo `.createElement()`, el
texto a crear por medio de este método debe ir entre comillas. Y de la misma
manera también, el texto existe, pero en ninguna parte. Si quisiéramos, por
ejemplo, crear un nuevo párrafo en un documento con el texto _Felicidades coders_,
tendríamos que crear primero el elemento `p`, luego el nodo de texto, y por
último convertir el nodo de texto en el hijo del párrafo por medio de
`.appendChild()`, método que veremos en la seccion _añadir nodos al DOM_.

```javascript
var paragraph = document.createElement('p');
var message = document.createTextNode('Felicidades coders');
paragraph.appendChild(message);
```

Con ello nuestra variable párrafo contendría un elemento `p` con su texto
correspondiente, listo para ser incluído en el árbol del documento.

## Añadir nodos al DOM

Acabamos de ver cómo crear elementos y nodos de texto, pero también hemos visto
que estos nodos creados se mantienen en el _limbo_ del documento hasta que los
incluimos en el árbol del mismo.

Para trabajar incorporando, modificando o eliminando nodos, contamos con los
métodos que vamos a ver a continuación.

### appendChild

Por medio de este método podemos añadir a un nodo un nuevo hijo, de esta manera:

- Sintaxis

  ```javascript
	padre.appendChild(nuevoNodo);
	```

El nuevo nodo se incluye inmediatamente después de los hijos ya existentes, si
hay alguno y el nodo padre cuenta con un nuevo hijo.

```javascript
// Crear nodo de tipo Element
var paragraph = document.createElement('p');

// Crear nodo de tipo Text
var content = document.createTextNode('Hola Mundo!');

// Añadir el nodo Text como hijo del nodo Element
paragraph.appendChild(content);

// Añadir el nodo Element como hijo de la pagina
document.body.appendChild(paragraph);
```

## Eliminar nodos del DOM

Dado que podemos incluir nuevos hijos en un nodo, tiene sentido que podamos
eliminarlos. Para ello existe el siguiente método:

### removeChild

Para quitar un nodo del documento tenemos que seleccionar el padre del nodo, y
desde ahí, remover el nodo deseado.

Si no conocemos el padre del nodo podemos seleccionar directamente el nodo,
obtener el padre (con `.parentElement`), para después utilizar `.removeChild()`
y eliminarlo.

- Sintaxis:

  ```javascript
	padre.removeChild(nodoAEliminar);
	```

```javascript
var container = document.getElementById('container');
var paragraph = document.getElementById('paragraph');
container.removeChild(paragraph);

/*
 * Con el nodo seleccionado utilizamos `.parentElement`
 * para seleccionar el padre. Desde el padre utilizamos
 * `.removeChild()` para eliminar el nodo seleccionado.
 */

var paragraph = document.getElementById('paragraph');
paragraph.parentElement.removeChild(paragraph);
```

## AHORA, VAMOS A PRACTICAR UN POCO

En los siguientes videos vamos a poner en práctica la parte teórica ya que
utilizan los métodos como crear, añadir y eliminar los nodos del DOM por medio
de Javascript y así poder crear páginas dinámicas, te sugiero que vayas
haciendo el ejercicio junto con el video y si es necesario puedes irlo pausando.

- Este video dura 8:18, en el minuto 2:25 empieza a utilizar los métodos
  `.createElement()` y `.createTextNode()`.

  [Creando nodos del DOM](https://www.youtube.com/watch?v=b-ZWMiqsAeU&list=PLhSj3UTs2_yVC0iaCGf16glrrfXuiSd0G&index=14)

- Este otro video agrega los nodos creados al DOM.

  [Agragando nodos al DOM](https://www.youtube.com/watch?v=yQdi_8nh9HE&index=15&list=PLhSj3UTs2_yVC0iaCGf16glrrfXuiSd0G)

## Modificando atributos

### Atributos

Además de modificar el contenido del nodo o el nodo, también podemos modificar
los atributos del nodo, conocer el valor o valores que tienen y asignar valores
distintos.

Los atributos con los que podemos trabajar directamente son los que utilizan la
interfaz `HTMLElement`.

![Nodos](http://blog.eamexicano.com/wp-content/uploads/2014/02/atributos.png)

```javascript
var paragraph = document.getElementById('paragraph');
/*
 * Para obtener el valor asignado utilizamos el nodo seguido del atributo que
 * queremos obtener
 */
paragraph.id;
/*
 * Para asignar valor o valores además del nombre del atributo se le asigna el o
 * los valores
 */
paragraph.className = 'nuevo mensaje';
/*
 * Se utiliza `.className` para hacer referencia al atributo `class`. En
 * JavaScript, class es una palabra reservada.
*/
```

Habrá ocasiones en que necesitamos trabajar con atributos que no son parte de
la interfaz HTMLElement. Para esos casos existen dos métodos: `.setAttribute()`
y `.getAttribute()`.

#### setAttribute('atributo', 'valor')

Crea un atributo y establece un valor.

#### getAttribute('atributo')

Obtiene el valor del atributo.

```html
<img id='image'
  src="http://blog.eamexicano.com/wp-content/uploads/2014/02/innerhtml.png"
  alt="DOM - innerHTML" width="100%"  />
```

```javascript
var image = document.getElementById('image');

// Devuelve el tamaño de la imagen en px
image.width;
image.height;

// Devuelve el tamaño de la imagen como está especificado  en la etiqueta
image.getAttribute('width');
image.getAttribute('height');

/*
 * Si queremos asignar un tamaño a la imagen que no sea en px tenemos que
 * utilizar `.setAttribute()`
 */
image.width = '50%';
image.height = 'auto';

image.setAttribute('width', '50%');
image.setAttribute('height', 'auto');
```

## Añadiendo estilos por Javascript

"Unlike most other attributes, the style property itself is an object."

### style

Esta propiedad se utiliza para mostrar o para establecer el estilo del nodo
sobre el que se esté utilizando.

- Sintaxis

  ```javascript
	elemento.style.propiedad = valor;
	```

Tomar en cuenta que las propiedades de CSS que están separadas por un guión
(`font-family`, `font-size`, `border-bottom`) tienen que ser escritas con
notación _lowerCamelCase_ (`fontFamily`, `fontSize`, `borderBottom`).

```javascript
var paragraph  = document.getElementById('paragraph');
paragraph.style.padding = '5px';
paragraph.style.color = 'rgb(242, 242, 242)';
paragraph.style.fontFamily = 'helvetica';
```

![Styles in JS](http://blog.eamexicano.com/wp-content/uploads/2014/02/style.png)

## DOM Animation

Las animaciones de JavaScript se realizan mediante la programación de cambios
graduales en el estilo de un elemento.

Los cambios son llamados por un temporizador. Cuando el intervalo del
temporizador es pequeño, la animación parece continua.

Para demostrar cómo crear animaciones HTML con JavaScript, utilizaremos una
página web sencilla.

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
<div id ="container" class="container">
    <div id ="animate" class="animate">My animation will go here</div>
</div>
```

El elemento contenedor debe crearse con `style="position: relative"`.
El elemento de animación debe crearse con `style="position: absolute"`.

Más adelante veremos este tema con detalle.

```css
.container {
    width: 400px;
    height: 400px;
    position: relative;
    background-color: yellow;
}

.animate {
    width: 50px;
    height: 50px;
    position: absolute;
    background-color: red;
}
```

Como lo mencionamos anteriormente, las animaciones en javascript son cambios
graduales. Con la función de `setInterval()` podemos hacer dichos cambios y la
función frame realiza los cambios en los estilos.

```javascript
var animatedElement = document.getElementById("animate");
var animationId = -1;
var position = 0;

function animate() {
  if (position === 350) {
    clearInterval(id);
  } else {
    position++;
    animatedElement.style.top = position + 'px';
    animatedElement.style.left = position + 'px';
  }
}

function startAnimation() {
  id = setInterval(animate, 5);
}
```

Podemos ver este ejercicio en el siguiente [pen](https://codepen.io/Si7v4n4/pen/OjdZer).

### Detalle de JavaScript para animaciones

Con DOM y Javascript tenemos varias formas de ejecutar código o programar su
ejecución, ahora veremos con más detalles las funciones que nos permiten esto.
Hay que recordar que incluso las funciones podemos guardarlas como variables,
así como también podemos pasarlas como parámetros de otras funciones.

#### setInterval

Nos permite ejecutar una función cada cierto tiempo, como si fuera un
metrónomo. El tiempo se mide en milisegundos (1 segundo = 1000 milisegundos) y
es el segundo parámetro de `setInterval()`, donde el primero es la función que
queremos que se ejecute en cada momento.

```javascript
setInterval(miFuncion, 500);
```

En general usaremos tiempos más bajos, comunmente se usa 15ms o 16ms ya que así
estaremos dividiendo 1 segundo entre 60, que es lo más utilizado en videojuegos
y nos dará aproximadamente 60 cuadros (o frames) por segundo.

El problema con `setInterval()` es que quedará andando hasta la eternidad. Para
resolver esto necesitamos usar otra función llamada `clearInterval()`, para
ello guardaremos como variable el resultado de ejecutar `setInterval()`:

```javascript
var id = setInterval(myFunction, 500);

// Luego cuando queramos detener la animación o función:
clearInterval(id);
```

#### setTimeout

A diferencia de `setInterval()`, esta función ejecutará una y solo una vez la
función que le demos como primer parámetro. El tiempo que le ingresamos también
es medido en milisegundos.

```javascript
setTimeout(miFuncion, 500);
```

Al igual que `setInterval()`, también puedes cancelar la ejecución de
`setTimeout()`:

```javascript
var id = setTimeout(myFunction, 500);

// Luego cuando queramos detener la ejecución programada:
clearTimeout(id);
```

Puedes combinar a través de varias funciones y combinación de `setTimeout()` y
`setInterval()` animaciones que se ejecutan una o varias veces y controlar su
acción.

## Referencias

- [http://blog.eamexicano.com/dom/manipular-nodos/](http://blog.eamexicano.com/dom/manipular-nodos/)
- [http://www.codexexempla.org/curso/curso_4_3_c.php](http://www.codexexempla.org/curso/curso_4_3_c.php)
- [http://www.codexexempla.org/curso/curso_4_3_c.php](http://www.codexexempla.org/curso/curso_4_3_c.php)
- [http://blog.eamexicano.com/dom/modificar-estilo-contenido/](http://blog.eamexicano.com/dom/modificar-estilo-contenido/)
- [http://www.codexexempla.org/curso/curso_4_3_d.php](http://www.codexexempla.org/curso/curso_4_3_d.php)
- [https://www.w3schools.com/js/js_htmldom_animate.asp](https://www.w3schools.com/js/js_htmldom_animate.asp)
- [https://developer.mozilla.org/es/docs/Referencia_DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n#Importancia_de_los_tipos_de_datos#Interfaces_esenciales_en_el_DOM)
- [https://www.w3schools.com/jsref/met_win_setinterval.asp](https://www.w3schools.com/jsref/met_win_setinterval.asp)
- [https://www.w3schools.com/jsref/met_win_settimeout.asp](https://www.w3schools.com/jsref/met_win_settimeout.asp)
