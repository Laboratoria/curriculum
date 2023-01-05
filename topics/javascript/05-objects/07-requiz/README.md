---
type: quiz
duration: 15min
---

# Quiz 2

## Objetivos

- Tomar un segundo quiz para asegurarnos que terminamos la unidad con un
  entendimiento pleno de los conceptos.

***

## Preguntas

### 1) ¿Para qué son útiles los Objects?

#### Opciones

1. Para dejar de usar arrays y variables
2. Para poder utilizar repositorios en `Git`
3. Para almacenar diferentes piezas de información sobre sí mismo
4. Para guardar mi información en la nube y posteriormente compartirla

<solution style="display:none;">3</solution>

### 2) ¿Cuál de los siguientes enunciados sobre Objects SÍ es correcto? Puedes seleccionar una o más opciones

#### Opciones

1. Las propiedades deben estar siempre entre comillas
2. No debemos incluir un array como propiedad
3. Podemos incluir una función como propiedad
4. Los _keys_ de los Objects son equivalente a sus propiedades

<solution style="display:none;">3,4</solution>

### 3) Podemos acceder a los valores de un Object usando corchetes `[ ]` o usando punto `.`

#### Opciones

1. Verdadero
2. Falso

<solution style="display:none;">1</solution>

### 4) Los métodos son \_\_\_\_\_\_\_\_\_\_\_\_\_ que contienen \_\_\_\_\_\_\_\_\_\_\_\_\_

#### Opciones

1. propiedades - funciones
2. funciones - propiedades
3. elementos - objetos
4. objetos - elementos

<solution style="display:none;">1</solution>

### 5) ¿Cuál es el resultado del siguiente código?

```js
const movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
};

console.log(movie.tags[1]);
```

#### Opciones

1. Adventure
2. Comedy
3. Sci-Fi
4. undefined

<solution style="display:none;">2</solution>

### 6) ¿Cuál es el error en el siguiente código?

```js
const movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox'; 'Christopher Lloyd'; 'Lea Thompson'],
  oscar: 1,
  'other awards': 'best sound',
  tags: [],
};
```

#### Opciones

1. La propiedad `tags` no puede estar vacía
2. Le sobran las comillas `' '` a la propiedad `other awards`
3. En la propiedad `stars`, deben ir comas `,` en lugar de puntos y comas `;`
4. No hay ningún error

<solution style="display:none;">3</solution>
