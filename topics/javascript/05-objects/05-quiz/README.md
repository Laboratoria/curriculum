---
type: quiz
duration: 15min
---

# Quiz 1

## Objetivos

- En esta sección tendrás la oportunidad de evaluarte para que pongas tus
  conocimientos a prueba. Es una oportunidad para que te calibres y valides que
  realmente estás aprendiendo. ¡Mucho éxito!

***

## Preguntas

### 1) ¿Cuál de los siguientes enunciados sobre Objects **NO** es correcto?

#### Opciones

1. Los _Keys_ de los Objects son equivalente a sus propiedades
2. Podemos calcular su longitud con la propiedad `length`
3. No es necesario colocar los _Keys_ entre comillas
4. Podemos incluir una función como propiedad

<solution style="display:none;">2</solution>

### 2) ¿Cómo podemos acceder a los valores de un Object? Puedes seleccionar una o más opciones

#### Opciones

1. Usando corchetes `[]`
2. Usando paréntesis `()`
3. Usando dos puntos `:`
4. Usando punto `.`

<solution style="display:none;">1,4</solution>

### 3) Las propiedades generalmente \_\_\_\_\_\_\_\_\_\_\_\_\_ algo sobre el valor asociado y los métodos usualmente \_\_\_\_\_\_\_\_\_\_\_\_\_ algo sobre el valor asociado

#### Opciones

1. nos muestran - conservan
2. conservan -  nos muestran
3. nos dicen - hacen
4. hacen - nos dicen

<solution style="display:none;">3</solution>

### 4) `toUpperCase()` es \_\_\_\_\_\_\_\_\_\_\_\_\_ que hace la acción de transformar a _mayúsculas_ el valor asociado, mientras que `length` es \_\_\_\_\_\_\_\_\_\_\_\_\_ que nos dice la _longitud_ del valor asociado

#### Opciones

1. un object - un array
2. un array - un object
3. una propiedad - un método
4. un método - una propiedad

<solution style="display:none;">4</solution>

### 5) En el siguiente código

```js
const movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi']
};
```

¿Cómo accedo a la propiedad `director`?

#### Opciones

1. `movie{director}`
2. `director[0]`
3. `movie.director`
4. `return director`

<solution style="display:none;">3</solution>

### 6) ¿Cuál es el error en el siguiente código?

```js
const movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson' ],
  oscar: 1,
  other awards: 'best sound',
  tags: []
};
```

#### Opciones

1. El número `1` debe ir entre comillas
2. Le faltan las comillas a la propiedad `other awards`
3. La propiedad `tags` no puede estar vacía
4. No hay ningún error

<solution style="display:none;">2</solution>

### 7) ¿Cuál es el resultado del siguiente código?

```js
const movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
};

console.log(movie.stars[2]);
```

#### Opciones

1. Michael J. Fox
2. Christopher Lloyd
3. Lea Thompson
4. undefined

<solution style="display:none;">3</solution>

### 8) En el siguiente código

```js
const movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi'],
};
```

¿cómo podemos acceder a la lista de _keys_ del Objeto `movie`?

#### Opciones

1. `movie:keys`
2. `movie.length`
3. `Object.keys(movie)`
4. `return keys(movie)`

<solution style="display:none;">3</solution>

### 9) ¿Cuál es el error en el siguiente código?

```js
const objectToArray = (object) => {
  const items = Object.keys(object);
  const newArray = [];

  for (let i = 0; i < items.length; i += 1) {
    newArray.pop([items[i], object[items[i]]]);
  }

  return newArray;
};

console.log(objectToArray({make: 'Ford', model: 'Mustang', year: 1964}));
// → [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
```

#### Opciones

1. La variable `newArray` no puede estar vacía
2. La variable `i` debe empezar en `1`
3. Se debe usar `push` en lugar de `pop`
4. Se debe usar `console.log` en lugar de `return`

<solution style="display:none;">3</solution>
