---
type: quiz
duration: 30min
---

# Quiz #2: requizzing

## Objetivos

- Tomar un segundo quiz para asegurarnos que terminamos la unidad con un
  entendimiento pleno de los conceptos.

***

## Preguntas

### 1) Las siglas HTML significan

#### Opciones

1. Herramienta de Texto markdown Language.
2. Hypervinculo type markup Language
3. HyperText Markup Language

<solution style="display:none;">3</solution>

### 2) ¿Cuáles son las etiquetas que necesitan cierre?

#### Opciones

1. table
2. ol
3. img
4. br
5. a

<solution style="display:none;">1,2,5</solution>

### 3) Ejemplo correcto de anidación

#### Opciones

1. `<h3>Hola!!</h3> Soy una <strong>excelente</strong> <em>coder</em></p>`
2. `</p>Soy una </strong>excelente<strong> </em>coder<em><p>`
3. `<p>Soy una <strong>excelente</strong> <em>coder</em></p>`

<solution style="display:none;">3</solution>

### 4) ¿Cuál es el valor de la propiedad `position` por defecto de los elementos?

#### Opciones

1. fixed
2. absolute
3. static
4. relative

<solution style="display:none">3</solution>

### 5) Son características de un elemento en línea

#### Opciones

1. No comienzan con una nueva línea
2. Comienzan en una nueva línea
3. Pueden estar dentro de un elemento en bloque
4. Respetan las propiedades `margin-top` y `margin-bottom`

<solution style="display:none;">1,3</solution>

### 6) ¿Cuál es la diferencia entre `display:inline-block` y `display:inline`?

#### Opciones

1. A un elemento inline no se le puede determinar dimensiones, mientras que a
  uno inline-block sí
2. A un elemento inline-block no se le puede determinar dimensiones, mientras
  que a uno inline sí
3. No hay diferencias entre ambos
4. Un elemento inline no aparece en pantalla, mientras que un inline-block sí

<solution style="display:none;">1</solution>

### 7) ¿Cuál es la sintaxis correcta para la etiqueta `<a>`?

#### Opciones

1. `<a href="http://laboratoria.la/">Ir a Laboratoria</a>`
2. `<a src="http://laboratoria.la/">Ir a Laboratoria</a>`
3. `<a href="http://laboratoria.la/">`

<solution style="display:none;">1</solution>

### 8) Dados los siguientes estilos CSS, ¿qué color tendrán los `<h3>`?

```css
h3 {
  color: red !important;
}

h3 {
  color: blue;
}

h2 {
  color: yellow;
}
```

#### Opciones

1. red
2. blue
3. yellow

<solution style="display:none;">1</solution>

### 9) Tomando en cuenta el siguiente código, ¿cuál es el color del texto **JavaScript**?

**HTML:**

```html
<ul class="programming-languages" id="awesome">
  <li><span>Python</span></li>
  <li class="favorite"><span class="highlight">JavaScript</span></li>
</ul>
```

**CSS:**

```css
ul {
  color: red;
}

li {
  color: blue;
}
```

#### Opciones

1. Azul
2. Negro
3. Rojo

<solution style="display:none;">1</solution>

### 10) Tomando en cuenta el siguiente código, ¿cuál es el color del texto **JavaScript**?

**HTML:**

```html
<ul class="programming-languages" id="awesome">
  <li><span>Python</span></li>
  <li class="favorite" id="must-use"><span class="highlight">JavaScript</span></li>
</ul>
```

**CSS:**

```css
.programming-languages .favorite {
  color: red;
}

#must-use {
  color: blue;
}
```

#### Opciones

1. Rojo
2. Negro
3. Azul

<solution style="display:none;">3</solution>

### 11) Tomando en cuenta el siguiente código, ¿cuál es el color del texto **JavaScript**?

**HTML:**

```html
<ul class="programming-languages" id="awesome">
  <li><span>Python</span></li>
  <li class="favorite" id="must-use"><span class="highlight">JavaScript</span></li>
</ul>
```

**CSS:**

```css
ul#awesome {
  color: red;
}

ul.programming-languages li.favorite span {
  color: blue;
}
```

#### Opciones

1. Rojo
2. Negro
3. Azul

<solution style="display:none;">3</solution>

### 12) Tomando en cuenta el siguiente código, ¿cuál es el color del texto **JavaScript**?

**HTML:**

```html
<ul class="programming-languages" id="awesome">
  <li><span>Python</span></li>
  <li class="favorite" id="must-use"><span class="highlight">JavaScript</span></li>
</ul>
```

**CSS:**

```css
ul#awesome #must-use {
  color: red;
}

.favorite span {
  color: blue !important;
}
```

#### Opciones

1. Rojo
2. Negro
3. Azul

<solution style="display:none;">3</solution>

### 13) ¿Para qué sirve line-height?

#### Opciones

1. Establece la altura de cada línea de texto
2. Establece el color de texto
3. Establece el grosor del texto

<solution style="display:none">1</solution>

### 14) ¿Cuál es la sintaxis de css?

#### Opciones

1. Snippet 1:

   ```css
   { p = color: red;
     font-size: 15px;
   }
   ```

2. Snippet 2:

   ```css
   p {
     color: red,
     font-size: 15px,
   }
   ```

3. Snippet 3:

   ```css
   p {
     color: red;
     font-size: 15px;
   }
   ```

<solution style="display:none">3</solution>

### 15) ¿Cuáles son las propiedades para posicionar elementos?

#### Opciones

1. top, left, right, bottom
2. head, body, right, middle
3. up, down, left, right
4. inside, outside, forward, backward

<solution style="display:none">1</solution>

### 16) Tomando en cuenta el siguiente código, ¿cuál es el color del texto **JavaScript**?

**HTML:**

```html
<ul class="programming-languages" id="awesome">
  <li><span>Python</span></li>
  <li class="favorite" id="must-use"><span class="highlight">JavaScript</span></li>
</ul>
```

**CSS:**

```css
ul.programming-languages li .highlight {
  color: red;
}

ul.programming-languages li .highlight:nth-of-type(odd) {
  color: yellow;
}
```

#### Opciones

1. Rojo
2. Negro
3. Amarillo

<solution style="display:none;">3</solution>

### 17) Tomando en cuenta el siguiente código, ¿qué pasará con la posición de `#example`?

**HTML:**

```html
<p id="example">Hello!</p>
```

**CSS:**

```css
#example {
  margin-left: -5px;
}
```

#### Opciones

1. Se moverá `5px` a la izquierda
2. Todos los elementos anteriores se moverán `5px` a la derecha
3. Ninguno

<solution style="display:none;">1</solution>

### 18) ¿Qué propiedad usas para hacer que el contenido permanezca debajo de los elementos flotantes?

#### Opciones

1. hide
2. position
3. clear
4. overflow

<solution style="display:none">3</solution>

### 19) ¿Qué regla CSS te permite agregar una fuente externa?

#### Opciones

1. `@font-face`
2. `font-color`
3. `font-family`
4. `font-weight`
5. `float`

<solution style="display:none">1</solution>
