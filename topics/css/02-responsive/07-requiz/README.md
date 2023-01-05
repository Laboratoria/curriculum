---
type: quiz
duration: 15min
---

# Quiz #2

## Objetivos

- En esta sección tendrás la oportunidad de evaluarte para que pongas tus
  conocimientos a prueba. Es una oportunidad para que te calibres y valides que
  realmente estás aprendiendo. ¡Mucho éxito!

***

## Preguntas

### 1) "Técnica de diseño que consigue que un único sitio se adapte perfectamente a todos los dispositivos". Es una definición que corresponde a

#### Opciones

1. Grid system
2. Media queries
3. Viewport
4. Responsive Web Design

<solution style="display:none;">4</solution>

### 2) En la siguiente imagen, si decimos que para la sección de títulos (Articles, Tools, etc) es un solo `row`, la clase a usar en un grid de 12 columnas para cada columna será `.col-`

![Ejemplo grid](https://cdn.tutsplus.com/webdesign/uploads/2013/08/grids-1.jpg)

#### Opciones

1. 2
2. 3
3. 4
4. 6
5. 12

<solution style="display:none;">1</solution>

### 3) Una técnica que utiliza la regla `@media` para incluir bloques CSS que se ejecutarán si las condiciones dadas son verdaderas. Es la definición de

#### Opciones

1. Grid system
2. Media queries
3. Viewport
4. Responsive Web Design

<solution style="display:none;">2</solution>

### 4) ¿Qué regla CSS permite evaluar características de un dispositivo para aplicar un determinado estilo?

#### Opciones

1. .row
2. .col
3. @media
4. `<meta name="viewport" content="width=device-width;initial-scale=1.0" />`

<solution style="display:none;">3</solution>

### 5) En el siguiente código, ¿cuál es el media feature?

```css
@media screen and (max-width: 480px) {
  body {
    background-color: #eee;
  }
}
```

#### Opciones

1. @media
2. screen
3. max-width: 480px
4. and

<solution style="display:none;">3</solution>

### 6) En el siguiente código, ¿cuál es el media type?

```css
@media screen and (max-width: 480px) {
  body {
    background-color: #eee;
  }
}
```

#### Opciones

1. @media
2. screen
3. max-width: 480px
4. and

<solution style="display:none;">2</solution>

### 7) En el siguiente código, ¿cuál es el operador lógico?

```css
@media screen and (max-width: 480px) {
  body {
    background-color: #eee;
  }
}
```

#### Opciones

1. @media
2. screen
3. max-width: 480px
4. and

<solution style="display:none;">4</solution>

### 8) Cuando desarrollamos un sitio responsivo, pero nos encontramos el caso del móvil en la izquierda, ¿qué debemos de agregar para que aparezca como en el móvil de la derecha?

![Missing viewport](https://developers.google.com/search/mobile-sites/imgs/mobile-seo/viewport.png)

#### Opciones

1. Falta indicar el meta viewport en el head
2. Falta el meta charset UTF8 en el head
3. Falta agregar el script en el footer
4. Falta hacer el website

<solution style="display:none;">1</solution>

### 9) Si se necesita adaptar estilos para dispositivos con tamaños mayor o igual a un iPhone 6 (width: 375px), ¿cuál sería el media feature a aplicar?

#### Opciones

1. max-width: 375px
2. min-width: 375px
3. max-height: 375px
4. min-height: 375px

<solution style="display:none;">2</solution>

### 9) Si se desea aplicar estilos a dispositivos con tamaños menor o igual a un Galaxy S5 con resolución 1080px y Device Pixel Ratio (DPR) de 3.0, ¿cuál sería el media query a aplicar?

> **Nota:**
> Los pixeles que usamos en CSS, no son siempre la resolución del dispositivo,
> esto es debido a que lo que usamos en CSS son Device Independent Pixels (DIP)
> que como infiere de su nombre, son independientes del hardware. Para calcular
> los DIP de un dispositivo, usamos la siguiente fórmula:
>
> ```text
> DIP = Resolution / DPR
> ```
>
> Sabiendo esta fórmula, ¿es suficiente para resolver esta pregunta?

#### Opciones

1. @media screen and (min-width: 1080px) { ... }
2. @media screen and (max-width: 1080px) { ... }
3. @media screen and (min-width: 360px) { ... }
4. @media screen and (max-width: 360px) { ... }

<solution style="display:none;">4</solution>
