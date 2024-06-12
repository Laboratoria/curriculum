---
type: read
duration: 20min
---

# Modificando atributos desde el DOM

## Objetivos de Aprendizaje

En esta unidad aprenderemos:

- Cómo manipular atributos que utilizan la interfaz `HTMLElement` desde el DOM.
  * `.id`
  * `.src`
  * `.className`
- Cómo manipular atributos que no utilizan la interfaz `HTMLElement`.
  * `getAttribute()`
  * `setAttribute()`
- Cómo modificar atributos CSS desde el DOM
  * `.style.property`

***

### Atributos

Además de modificar el contenido del nodo o el nodo mismo, también podemos
modificar los atributos del nodo, conocer el valor o valores que tienen y
asignar valores distintos.

Los atributos con los que podemos trabajar directamente son los que utilizan la
interfaz `HTMLElement`.

![Nodos](http://blog.eamexicano.com/wp-content/uploads/2014/02/atributos.png)

```js
const paragraph = document.getElementById('paragraph');
/*
 * Para obtener el valor asignado utilizamos el nodo seguido del atributo que
 * queremos obtener
 */
paragraph.id;
/*
 * Para asignar valor o valores además del nombre del atributo se le asigna el o
 * los valores
 */
paragraph.className = 'nueva-clase';
/*
 * Se utiliza `.className` para hacer referencia al atributo `class`. En
 * JavaScript, class es una palabra reservada.
*/
```

Habrá ocasiones en que necesitamos trabajar con atributos que no son parte de
la interfaz `HTMLElement`. Para esos casos existen dos métodos:
`.setAttribute()` y `.getAttribute()`.

#### setAttribute('atributo', 'valor')

Crea un atributo y establece un valor.

#### getAttribute('atributo')

Obtiene el valor del atributo.

```html
<img id='image'
  src="http://blog.eamexicano.com/wp-content/uploads/2014/02/innerhtml.png"
  alt="DOM - innerHTML" width="100%"  />
```

```js
const image = document.getElementById('image');

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

## Manipulando estilos CSS por Javascript

A diferencia de la mayoría de los otros atributos, la propiedad de estilo en sí
es un objeto, que contiene propiedades.

### style

Esta propiedad se utiliza para mostrar, para establecer, modoficar o elimiar el
estilo del nodo sobre el que se esté utilizando.

- Sintaxis

  ```js
  elemento.style.propiedad = valor;
  ```

Tomar en cuenta que las propiedades de CSS que están separadas por un guión
(`font-family`, `font-size`, `border-bottom`) tienen que ser escritas con
notación _lowerCamelCase_ (`fontFamily`, `fontSize`, `borderBottom`).

```js
const paragraph  = document.getElementById('paragraph');
paragraph.style.padding = '5px';
paragraph.style.color = 'rgb(242, 242, 242)';
paragraph.style.fontFamily = 'helvetica';
```

![Styles in JS](http://blog.eamexicano.com/wp-content/uploads/2014/02/style.png)
