---
type: quiz
duration: 30min
---

# Quiz #1

## Objetivos

- En esta sección tendrás la oportunidad de evaluarte para que pongas tus
  conocimientos a prueba. Es una oportunidad para que te calibres y valides que
  realmente estás aprendiendo. ¡Mucho éxito!

***

## Preguntas

### 1) Completa el siguiente enunciado: `Las etiquetas HTML siempre serán nodos de tipo _______.`

#### Opciones

  1. Texto
  2. Comentario
  3. Elemento
  4. Atributo

<solution style="display:none;">3</solution>

### 2) En la siguiente imagen, el texto `¡Hola Mundo! ¡La programación es muy cool!` entre las etiquetas h1, corresponde a un nodo tipo ______

```html
<body>
  <h1>¡Hola Mundo! ¡La programación es muy cool!</h1>
</body>
```

#### Opciones

  1. Condicional
  2. Texto
  3. Elemento
  4. Atributo

<solution style="display:none;">2</solution>

### 3) El DOM nos sirve para

#### Opciones

  1. Entrar a los elementos de una página html y modificar sus propiedades
  2. Acceder a los elementos del navegador y modificarlos
  3. Dominar el mundo de la programación
  4. Crear bucles y condicionales

<solution style="display:none;">1</solution>

### 4) Cuando quiero acceder u obtener un elemento único de mi página web a través de su identificador, ¿qué método/métodos de selección del DOM puedo utilizar?

#### Opciones

  1. `.getElementsByTagName();`
  2. `.getElementsByClassName();`
  3. `.getElementById();`
  4. `.querySelector();`

<solution style="display:none;">3</solution>

### 5) Para acceder a elementos de mi página web que tienen la misma etiqueta HTML, ¿qué método/métodos del DOM puedo utilizar?

#### Opciones

  1. `.getElementsByTagName();`
  2. `.getElementsByClassName();`
  3. `.getElementById();`
  4. `.querySelector();`

<solution style="display:none;">1</solution>

### 6) Selecciona los objetos del BOM

#### Opciones

  1. Location
  2. Screen
  3. HTMLtags
  4. Navigator

<solution style="display:none;">1,2,4</solution>

### 7) BOM define ______ métodos para manipular el tamaño y la posición de la ______

#### Opciones

  1. dos, ventana
  2. cuatro, ventana
  3. tres, etiqueta
  4. dos, información

<solution style="display:none;">2</solution>

### 8) ¿Para qué puedo utilizar los atributos data?

#### Opciones

  1. Para agregar estilos a través de css a un elemento del HTML
  2. Para identificar a un elemento del DOM
  3. Para obtener el valor de una entrada de texto
  4. Para almacenar datos en las etiquetas HTML sin modificar la presentación
     del documento

<solution style="display:none;">4</solution>

### 9) ¿Cuál de las siguientes opciones es la correcta para hacer uso de los atributos data?

#### Opciones

1. Snippet 1:

   ```html
    <ul>
      <li data-lista="frutas">Manzana</li>
      <li data-lista="frutas">Peras</li>
      <li data-lista="frutas">Fresas</li>
    </ul>
   ```

2. Snippet 2:

   ```html
    <ul>
      <li data="frutas">Manzana</li>
      <li data="frutas">Peras</li>
      <li data="frutas">Fresas</li>
    </ul>
   ```

3. Snippet 3:

   ```html
    <ul>
      <li data-lista-frutas>Manzana</li>
      <li data-lista-frutas>Peras</li>
      <li data-lista-frutas>Fresas</li>
    </ul>
   ```

4. Snippet 4:

   ```html
    <ul>
      <li data-lista(frutas)>Manzana</li>
      <li data-lista(frutas)>Peras</li>
      <li data-lista(frutas)>Fresas</li>
    </ul>
   ```

<solution style="display:none;">1</solution>

### 10)  Viendo el siguiente código, ¿cómo accedemos a nuestros atributos data a través de js?

```html
<p id="text" data-autor="Gustavo Monet">
  Aquí está nuestro texto
</p>
```

#### Opciones

1. Snippet 1:

   ```js
   const text = document.getElementById('text');
   const autor = autor.dataset;
   ```

2. Snippet 2:

   ```js
   const text = document.getElementById('text');
   const autor = dataset.text.autor;
   ```

3. Snippet 3:

   ```js
   const text = document.getElementById('text');
   const autor = text.dataset.autor;
   ```

4. Snippet 4:

   ```js
   const text = document.getElementById('text');
   const text.dataset = autor;
   ```

<solution style="display:none;">3</solution>

### 11) ¿A través de qué método eliminas un nodo del DOM?

#### Opciones

  1. elementoPadre.removeAttribute(**nodo**);
  2. elementoPadre.appendChild(**nodo**);
  3. elementoPadre.removeChild(**nodo**);
  4. elementoPadre.removeNode(**nodo**);

<solution style="display:none;">3</solution>

### 12) ¿Con qué método creas un evento?

#### Opciones

  1. .addEventListener('____', **funcion**);
  2. .createEvent(' _____',**funcion**);
  3. .createElement('_____');
  4. .actionListener('_____');

<solution style="display:none;">1</solution>

### 13) ¿Qué son los eventos?

#### Opciones

  1. Acciones que realiza el navegador cuando algo no anda bien.
  2. Acciones que se desencadenan a partir de la interacción del usuario con
     un elemento de la página web.
  3. Fechas importantes para el navegador.

<solution style="display:none;">2</solution>

### 14) ¿Cómo agregas un evento a un elemento?

#### Opciones

1. Snippet 1:

   ```js
   const boton = document.getElementById('boton');
   boton.createEventListener(click, funcion_a_ejecutar);
   ```

2. Snippet 2:

   ```js
   const boton = document.getElementById('boton');
   boton.addEventListener = 'click' + 'funcion_a_ejecutar';
   ```

3. Snippet 3:

   ```js
   const boton = document.getElementById('boton');
   boton.addEventListener('click', funcion_a_ejecutar);
   ```

4. Snippet 4:

   ```js
   const boton = document.getElementById('boton');
   boton = document.addEventListener('click', funcion_a_ejecutar);
   ```

<solution style="display:none;">3</solution>

### 15) En ocasiones tenemos que usar e.preventDefault() para

#### Opciones

  1. Para prevenir cierto comportamiento que ya tienen los eventos.
  2. Para que nuestro evento tenga un valor por default.
  3. Para que el evento se ejecute en automático.
  4. Para prevenir que se llame al evento.

<solution style="display:none;">1</solution>
