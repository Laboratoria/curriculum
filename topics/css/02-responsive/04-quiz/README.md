---
type: quiz
duration: 15min
---

# Quiz #1

## Objetivos

- En esta sección tendrás la oportunidad de evaluarte para que pongas tus
  conocimientos a prueba. Es una oportunidad para que te calibres y valides que
  realmente estás aprendiendo. ¡Mucho éxito!

***

## Preguntas

### 1) ¿Qué es Responsive Web Design?

#### Opciones

1. Técnica de diseño que consigue que un único sitio se adapte perfectamente a
   todos los dispositivos
2. Tecnica de diseño en que se realizan diferentes sitios para múltiples
   dispositivos
3. Técnica de diseño en que se realizan estilos sólo para un dispositivo, por lo
   general para desktop

<solution style="display:none;">1</solution>

### 2) Los componentes de un grid son

#### Opciones

1. Columns
2. Cals
3. Setters
4. Gutters
5. Row

<solution style="display:none;">1,4,5</solution>

### 3) ¿Qué son los Media Queries?

#### Opciones

1. Una técnica que utiliza la regla @media para incluir nuevo HTML, que se
   ejecutará en nuestro JS
2. Una técnica que utiliza la regla @media para incluir bloques CSS que se
   ejecutarán si las condiciones dadas son verdaderas
3. Una técnica que utiliza la regla @media para incluir bloques CSS que se
   ejecutarán si las condiciones dadas son falsas
4. Una técnica que utiliza la regla @media para incluir bloques JS que se
   ejecutarán si las condiciones dadas son verdaderas

<solution style="display:none;">2</solution>

### 4) Las reglas @media son un tipo especial de regla CSS que permiten indicar

#### Opciones

1. Que se pueden combinar múltiples queries
2. Las características que, de ser verdaderas, aplicarán los estilos incluidos
   en la regla
3. El medio en que se aplican los estilos, incluido el nombre del medio después
   de @media
4. Ninguna de las anteriores

<solution style="display:none;">2,3</solution>

### 5) Los _____________ corresponden a la condición que debe cumplir el dispositivo y la cual debe ser verdadera para que se aplique el código contenido en nuestra media query

#### Opciones

1. Media Queries
2. Media Type
3. Media Feature
4. Operadores Lógicos

<solution style="display:none;">3</solution>

### 6) Las Media Queries están conformadas por

#### Opciones

1. Media Features
2. Media Query
3. Media Type
4. Media Operators
5. Operadores Lógicos
6. Operadores Query

<solution style="display:none;">1,3,5</solution>

### 7) ¿Para qué sirve el viewport?

#### Opciones

1. Para definir el ancho y alto usado por el navegador
2. Para definir el ancho y escala usado por el navegador
3. Para definir el ancho, alto y escala usado por el navegador
4. Para definir la cantidad de media queries a utilizar
5. Para definir la cantidad de archivos css a utilizar

<solution style="display:none;">3</solution>

### 8) Los ___________ corresponden a los distintos dispositivos donde se puede visualizar nuestro sitio web

#### Opciones

1. Media Features
2. Media Query
3. Media Type
4. Media Operators
5. Operadores Lógicos
6. Operadores Query

<solution style="display:none;">3</solution>

### 9) Teniendo el siguiente código, ¿qué sucederá?

```css
@media screen and (max-width: 700px){
  p {
    color: blue;
    font-size: 15px;
  }
}
```

#### Opciones

1. Los estilos del párrafo se ejecutarán cuando la pantalla del móvil tenga
   700px o más
2. Los estilos del párrafo se ejecutarán cuando la pantalla del móvil tenga
   700px o menos
3. Los estilos del párrafo se ejecutarán cuando la pantalla de la laptop tenga
   700px o más
4. Los estilos del párrafo se ejecutarán cuando la pantalla de la laptop tenga
   700px o menos

<solution style="display:none;">4</solution>

### 10) Teniendo el siguiente código, ¿qué sucederá?

```css
@media (min-width: 650px), tv and (orientation: landscape){
  img {
    max-width: 80%;
  }
}
```

#### Opciones

1. Los estilos de la imagen se ejecutarán cuando **(min-width: 650px)** sea
   verdadero
2. Los estilos de la imagen se ejecutarán cuando cualquiera de los media sea
   verdadero
3. Los estilos de la imagen se ejecutarán cuando **tv and (orientation: landscape)**
   sea verdadero
4. Los estilos de la imagen se ejecutarán cuando **(min-width: 650px), tv and
   (orientation: landscape)** sea verdadero
5. No sucede nada

<solution style="display:none;">4</solution>
