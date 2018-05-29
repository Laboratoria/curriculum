# 14 - Requiz

* Tipo: `quiz`
* Formato: `guiado`
* Duración: `30min`

## Objetivos

* Tomar un segundo quiz para asegurarnos que terminamos la unidad con un

  entendimiento pleno de los conceptos.

## Preguntas

### 1\) El nodo `document`, es `padre` de los objetos o nodos

#### Opciones

1. Nodos `meta` dentro de `head`
2. Nodos script dentro de `body`
3. Los nodos `head` y `body`
4. No es padre de ningún nodo

3

### 2\) Propiedades de los nodos del DOM

#### Opciones

1. `nodeName`
2. `nodeClass`
3. `nodeType`
4. `nodeValue`
5. `nodeID`

1,3,4

### 3\) Para el siguiente elemento

```markup
    <p id="paragraph">Hola, soy un párrafo sensual</p>
```

### ¿Cómo puedo cambiar el color de fondo de párrafo?

#### Opciones

1. ```javascript
      var paragraph = document.getElementById('paragraph');
      paragraph.style.background='red';
   ```
2. ```javascript
      var paragraph = document.getElementById('paragraph');
      paragraph.style.backgroundColor='red';
   ```
3. ```javascript
      var paragraph = document.getElementById('paragraph');
      paragraph.backgroundColor='red';
   ```

2

### 4\) `document.getElementsByClassName('unaClase')`, me regresa un

```javascript
var elementos = document.getElementsByClassName('unaClase');
console.log(elementos);
```

#### Opciones

1. Arreglo de nodos HTML con la clase `unaClase`;
2. Arreglo con el valor de texto contenido dentro de todos los elementos

   con clase `unaClase`;

3. Todos los caracteres del string `unaClase`;
4. Me regresa solo el primer Elemento con clase `unaClase`;

1

### 5\) Cuando quiero acceder a todos los elementos que comparten la misma etiqueta html, utilizo:

#### Opciones

1. `.querySelector();`
2. `.getElementsByClassName();`
3. `.lastChild();`
4. `.getElementsByTagName();`

4

### 6\) ¿Qué función utilizamos para crear animaciones con JS?

#### Opciones

1. `location.href`
2. `setTimeout();`
3. `setInterval();`
4. `confirm();`

3

### 7\) ¿Por qué es importante el objeto screen ?

#### Opciones

1. Para conocer resoluciones más utilizadas
2. Para identificar a un elemento del DOM
3. Para adaptar los diseños a las resoluciones más utilizadas
4. Para almacenar  datos en las etiquetas HTML sin modificar la presentación

   del document

1,3

### 8\) ¿Cómo puedo obtener la URL de la página anterior a la que estoy en este momento?

#### Opciones

1. `document.referrer`
2. `document.URL`
3. `document.title`
4. `document.lastModified`

1

### 9\) ¿Qué método utilizamos para agregar a `listaDeCompras`, un nuevo elemento llamado `elementoLista`?

```markup
  <ul id="listaDeCompras">
    <li>Leche Deslactosada</li>
    <li>Arequipe</li>
    <li>Harina para Hotcakes</li>
    <li>Moras</li>
  </ul>
```

#### Opciones

1. document.createTextNode\(elementoLista\);
2. listaDeCompras.appendChild\(elementoLista\);
3. listaDeCompras.getElementByName\('elementoLista'\);

2

### 10\) ¿Qué evento se desencadena al seleccionar el texto de un input o textarea?

#### Opciones

1. onclick
2. onselect
3. onmouseover
4. ondblclick

2

### 11\) Para almacenar datos en las etiquetas HTML sin modificar la presentación del documento, usamos

#### Opciones

1. Atributos data
2. Etiquetas semánticas
3. Variables
4. Datos-HTML

1

### 12\) Sintaxis de los atributos data

#### Opciones

1. var data = "valor"
2. data-nombreAsignado="valor"
3. data="valor"
4. nombreAsignado-Datos\(valor\)

2

### 13\) El método addEventListener nos sirve para

#### Opciones

1. Crear un elemento
2. Crear una clase desde el DOM
3. Crear un evento
4. Crear un nodo texto

3

### 14\) ¿Cuántos métodos define el BOM para manipular la ventana?

#### Opciones

1. 1
2. 2
3. 3
4. 4

4

### 15\) Selecciona los objetos del BOM

#### Opciones

1. Location
2. Screen
3. HTMLtags
4. Navigator

1,2,4

