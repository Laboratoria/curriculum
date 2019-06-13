# Modificando o DOM

* Tipo: `leitura`
* Formato: `individual`
* Duração: `120min`

***

## Objetivos de Aprendizagem

Nesta unidade aprenderemos:

- Como manipular os nós no DOM
- Como criar, adicionar e eliminar nós no DOM
  * `document.createTextNode()`
  * `document.createElement()`
  * `.appendChild()`
  * `.removeChild()`
- Conhecer as seguintes propriedades:
  * `.innerHTML`
  * `.textContent`
  * `.innerText`
  * `.value`
- Conhecer sobre os seguintes métodos:
  * `.replaceChild()`
  * `.insertBefore()`


## Modificando elementos e conteúdo do DOM

No tópico anterior vimos o que é o DOM e como selecionar nós usando JavaScript.
Desta vez vamos usar o DOM para modificar o documento HTML usando JavaScript.

## Criação de nós

O DOM nos oferece uma série de métodos para adicionar nós a árvore de um
documento, os métodos mais básicos são `.createElement()`, para criar um
elemento e `.createTextNode()`, para criar um nós de texto.

Criar e adicionar a uma página um novo elemento é simples, você precisa de
apenas quatro passos:

1. Criar um nó do tipo `Element` que represente o elemento.
2. Criar um nós do tipo `Text` que presente o conteúdo do elemento.
3. Adicionar o nós `Text` como filho do nós `Element`.
4. Adicionar nós `Element` na página.

Este processo de criação de novos nós implica na utilização de três funções de
DOM:

1. `createElement(tag)`

    Cria um nós do tipo `Element` que representa um elemento XHTML cuja a _tag_
    é passada como parâmetro.

2. `createTextNode(conteúdo)`

    Criar um nós do tipo `Text` que armazena o conteúdo de texto dos elementos.

3. `nóPai.appendChild(nóFilho)`

    Adiciona o `nóFilho` dentor do `nóPai`.

Desta maneira, se quiser adicionar um parágrafo no final de um página, é necessário incluir o seguinte código JavaScript.

```js
// Cria o nó do tipo Element
const paragraph = document.createElement("p");
// Cria o nó do tipo Text
const content = document.createTextNode("Hola Mundo!");
// Adiciona o nó Text como filho do nós Element
paragraph.appendChild(content);
// Adiciona o nó Element como filho da página
document.body.appendChild(parrafo);
```





<!-- TODO CONTINUAR AQUI -->













Hay que recordar que el DOM es la interfaz que conecta el documento HTML con
JavaScript. Es por eso que, al utilizar `.createElement()`, el nodo no será
visible, ya que hasta este momento no es más que una especie de fantasma que
existe en el documento, pero hasta que no se le asigne una posición en el árbol
no se mostrará al usuario. De la misma manera, con la función
`.createTextNode()` el texto existe, pero en ninguna parte mas. Es necesario
convertir cualquiera de estos nodos en hijo de otro nodo existente por medio de
la función `.appendChild()`.

## Eliminar nodos del DOM

Dado que podemos incluir nuevos hijos en un nodo, tiene sentido que podamos
eliminarlos. Para ello existe el siguiente método:

### `removeChild()`

Para quitar un nodo del documento tenemos que seleccionar el padre del nodo, y
desde ahí, remover el nodo deseado.

Si no conocemos el padre del nodo podemos seleccionar directamente el nodo,
obtener el padre, con `.parentNode`, para después utilizar `.removeChild()`
y eliminarlo.

- Sintaxis:

  ```js
  padre.removeChild(nodoAEliminar);
  ```

```js
const container = document.getElementById('container');
const paragraph = document.getElementById('paragraph');
container.removeChild(paragraph);

/*
 * Con el nodo seleccionado utilizamos `.parentNode`
 * para seleccionar el padre. Desde el padre utilizamos
 * `.removeChild()` para eliminar el nodo seleccionado.
 */

const paragraph = document.getElementById('paragraph');
paragraph.parentNode.removeChild(paragraph);
```

Cuando se elimina un nodo, también se eliminan automáticamente todos los nodos
hijos que tenga, por lo que no es necesario borrar manualmente cada nodo hijo.

## Más funciones para manipulación de DOM

Aquí arriba te hemos mostrado algunas funciones con las cuales puedes empezar a
guiarte, pero es importante mencionar que a la hora de programar no hay una
única solución posible y la solución que uno como desarrollador puede ofrecer
depende mucho de las necesidades de cada proyecto, así que te presentaremos
otros métodos y propiedades que puedes comenzar a probar.

Comencemos por `.textContent` y `.innerHTML` que funcionan como propiedades para
obtener y establecer el valor de un elemento específico.

### `textContent`

Al utilizar textContent sobre un nodo, se va a mostrar el contenido del texto
que exista en el nodo y en los hijos del mismo. Si hay etiquetas HTML, son
ignoradas. Si se le asigna un valor, va a reemplazar todo el contenido del nodo
por la cadena de texto que se le asigne. Si la cadena de texto contiene
etiquetas HTML, éstas se van a escapar y se van a visualizar como texto.
Los cambios realizados no van a ser permanentes, el documento va a regresar a
su estado original una vez que se recargue el sitio.

![textContent](http://blog.eamexicano.com/wp-content/uploads/2014/02/textcontent.png)

#### innerHTML

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

#### value

La propiedad `value` establece o devuelve el valor del atributo value de un
elemento html, siempre y cuando en dicho elemento exista la propiedad value,
algunas de las etiquetas que contienen la propiedad `value` son elementos de
formularios.

- Sintaxis

  * Devuelve la propiedad value: `elemento.value;`
  * Establece la propiedad value: `elemento.value = texto;`

> Nota: el valor devuelto es un string, que representa el valor del campo de
> texto.

Puedes ver un ejemplo más claro en este [pen](https://codepen.io/Si7v4n4/pen/prBzoX?editors=1010#0).

#### insertBefore

Nos permite elegir un nodo del documento e incluir otro antes que él.

```js
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

```js
// Creamos el nuevo párrafo con su hijo texto
const newParagraph = document.createElement('p');
const paragraphText = document.createTextNode('Nuevo párrafo.');
newParagraph.appendChild(paragraphText);

// Guardamos en una variable el padre y en otra variable el segundo párrafo
const container = document.getElementById('container');
const secondParagraph = container.getElementsByTagName('p')[1];

// Y ahora lo insertamos
container.insertBefore(newParagraph, secondParagraph);
```

#### replaceChild

Este método se utiliza para reemplazar un nodo secundario por otro. Toma como
argumentos dos nodos: un nuevo nodo y el nodo a ser reemplazado. El nodo
reemplazado debe ser un elemento secundario del elemento al que se llama el
método.

- Sintaxis:

  ```js
  padre.replaceChild(nuevoNodo, nodoAReemplazar);
  ```

Con el mismo HTML que para el ejemplo de `.insertBefore()`, si quisiéramos
sustituir el segundo párrafo por el que creamos, lo haríamos así:

```js
container.replaceChild(newParagraph, secondParagraph);
```

> Tenga en cuenta que tanto `.replaceChild()` como `.insertBefore()` esperan el
> nuevo nodo como su primer argumento.

### A practicar

Te recomendamos replicar los ejemplos de código que se han ido mostrando a la
largo de la lectura. Además de poner en práctica la teoría con los siguientes
vídeos.

- Este video dura 8:18, en el minuto 2:25 empieza a utilizar los métodos
  `.createElement()` y `.createTextNode()`.

  [Creando nodos del DOM](https://www.youtube.com/watch?v=b-ZWMiqsAeU&list=PLhSj3UTs2_yVC0iaCGf16glrrfXuiSd0G&index=14)

- Este otro video agrega los nodos creados al DOM.

  [Agragando nodos al DOM](https://www.youtube.com/watch?v=yQdi_8nh9HE&index=15&list=PLhSj3UTs2_yVC0iaCGf16glrrfXuiSd0G)
