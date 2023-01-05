---
type: read
duration: 60min
---

# Manipulación del DOM

## Objetivos de Aprendizaje

En esta unidad aprenderemos:

* Métodos de selección del DOM:
  - `document.getElementById()`
  - `document.getElementsByClassName()`
  - `document.getElementsByTagName()`
  - `document.querySelector()`
  - `document.querySelectorAll()`

***

## Selección de nodos del DOM

Una vez construido automáticamente el árbol completo de nodos DOM, ya es
posible utilizar las funciones DOM para acceder de forma directa a cualquier
nodo del árbol.

Como acceder a un nodo del árbol es equivalente a acceder a
"un trozo" de la página, una vez construido el árbol, ya es posible manipular
de forma sencilla la página: acceder al valor de un elemento, establecer el
valor de un elemento, mover un elemento de la página, crear y añadir nuevos
elementos, etc.

DOM proporciona dos métodos alternativos para acceder a un nodo específico:
acceso a través de sus nodos padre y acceso directo.

Las funciones que proporciona DOM para acceder a un nodo a través de sus nodos
padre consisten en acceder al nodo raíz de la página y después a sus nodos
hijos y a los nodos hijos de esos hijos y así sucesivamente hasta el último
nodo de la rama terminada por el nodo buscado. Sin embargo, cuando se quiere
acceder a un nodo específico, es mucho más rápido acceder directamente a ese
nodo y no llegar hasta él descendiendo a través de todos sus nodos padre.

Por ese motivo, no se van a presentar las funciones necesarias para el acceso
jerárquico de nodos y se muestran solamente las que permiten acceder de forma
directa a los nodos.

Es importante recordar que el acceso a los nodos, su modificación
y su eliminación solamente es posible cuando el árbol DOM ha sido construido
completamente, es decir, después de que la página XHTML se cargue por
completo. Más adelante se verá cómo asegurar que un código JavaScript
solamente se ejecute cuando el navegador ha cargado entera la página XHTML.

Por último, te recomendamos que pruebes los siguientes métodos replicando el
código en tu editor favorito.

### **getElementById()**

La función `getElementById()` es la más utilizada cuando se desarrollan
aplicaciones web dinámicas. Se trata de la función preferida para acceder
directamente a un nodo y poder leer o modificar sus propiedades.

La función `getElementById()` devuelve el elemento XHTML cuyo atributo `id`
coincide con el parámetro indicado en la función. Como el atributo id debe ser
único para cada elemento de una misma página, la función devuelve únicamente
el nodo deseado.

```html
<body>
 <h2>Hola Laboratoria</h2>
 <h2>Hola Mundo</h2>
 <h2>Mis Hobbies</h2>
 <ul>
  <li id="highlight">Programar</li>
  <li class="bolded">Bailar</li>
  <li class="bolded">Ver peliculas</li>
 </ul>
</body>
```

```js
const firstItem = document.getElementById("highlight");
```

### **getElementsByClassName()**

La función `getElementsByClassName()` devuelve una [lista de nodos](http://www.etnassoft.com/2011/08/09/las-listas-de-nodos-y-los-arrays-en-javascript/)
 XHTML cuyo atributo `class`coincide con el parámetro indicado en la función.

```html
<body>
 <h2>Hola Laboratoria</h2>
 <h2>Hola Mundo</h2>
 <h2>Mis Hobbies</h2>
 <ul>
  <li id="highlight">Programar</li>
  <li class="bolded">Bailar</li>
  <li class="bolded">Ver peliculas</li>
 </ul>
</body>
```

```js
const items = document.getElementsByClassName("bolded");
```

### **getElementsByTagName()**

Como sucede con todas las funciones que proporciona DOM, la función
`getElementsByTagName()` tiene un nombre muy largo, pero que lo hace
autoexplicativo.

La función `getElementsByTagName(nombreEtiqueta)` obtiene una [lista de nodos](http://www.etnassoft.com/2011/08/09/las-listas-de-nodos-y-los-arrays-en-javascript/).
de la página XHTML cuya etiqueta sea igual que el parámetro que se le pasa a la
función.

```html
<body>
 <h2>Hola Laboratoria</h2>
 <h2>Hola Mundo</h2>
 <h2>Mis Hobbies</h2>
 <ul>
  <li id="highlight">Programar</li>
  <li class="bolded">Bailar</li>
  <li class="bolded">Ver peliculas</li>
 </ul>
</body>
```

```js
const titles = document.getElementsByTagName('h2');

console.log(titles[0]);
console.log(titles[1]);
console.log(titles[2]);

const listItems = document.getElementsByTagName('li');
console.log(listItems[0]);
console.log(listItems[1]);
console.log(listItems[2]);

```

### **querySelector()**

Función que retorna el primer elemento que coincide con el selector CSS dado
como parámetro.

```html
<body>
 <h2>Hola Laboratoria</h2>
 <h2>Hola Mundo</h2>
 <h2>Mis Hobbies</h2>
 <ul>
  <li id="highlight">Programar</li>
  <li class="bolded">Bailar</li>
  <li class="bolded">Ver peliculas</li>
 </ul>
</body>
```

```js
// Selector css - id
const item = document.querySelector('#highlight');
console.log(item);
```

```js
// Selector css - class
const item = document.querySelector('.bolded');
console.log(item);
```

```js
// Selector css - etiqueta
const title = document.querySelector('h2');
console.log(title);
```

### **querySelectorAll()**

Función que retorna una [lista de nodos](http://www.etnassoft.com/2011/08/09/las-listas-de-nodos-y-los-arrays-en-javascript/)
que coinciden con el selector CSS dado como parámetro.

```html
<body>
 <h2>Hola Laboratoria</h2>
 <h2>Hola Mundo</h2>
 <h2>Mis Hobbies</h2>
 <ul>
  <li id="highlight">Programar</li>
  <li class="bolded">Bailar</li>
  <li class="bolded">Ver peliculas</li>
 </ul>
</body>
```

```js
// Selector css - etiqueta
const titles = document.querySelectorAll('h2');
console.log(titles);
```

```js
// Selector css - etiqueta
const items = document.querySelectorAll('.bolded');
console.log(items);
```

## Recapitulando

Prepara tu editor de código, replica lo que realiza Lulú en el siguiente video y
refuerza lo aprendido.

[![Métodos de Selección DOM](https://img.youtube.com/vi/7iHu7s54vIk/0.jpg)](https://www.youtube.com/watch?v=7iHu7s54vIk)

También tenemos el [link](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n#Qu.C3.A9_es_el_DOM.3F)
de la documentación oficial de Mozilla de qué es el DOM.

Otro [link](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n#C.C3.B3mo_se_accede_al_DOM.3F)
de cómo acceder a elementos del DOM con JS de la documentación oficial.
