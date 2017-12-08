# Quiz #1

- Tipo: `quiz`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos

- En esta sección tendrás la oportunidad de evaluarte para que pongas tus
  conocimientos a prueba. Es una oportunidad para que te calibres y valides que
  realmente estás aprendiendo. ¡Mucho éxito!

***

## Preguntas

### 1) Los elementos de un Array tienen que ser todos del mismo tipo de dato

#### Opciones

1. Verdadero
2. Falso

<solution style="display:none;">2</solution>

### 2) ¿Para qué son útiles los Arrays?

#### Opciones

1. Para ya no usar strings
2. Para iniciar tu programa
3. Para ya no usar variables
4. Para agrupar y manipular data

<solution style="display:none;">4</solution>

### 3) ¿Cuál de los siguientes enunciados sobre Objects **NO** es correcto?

#### Opciones

1. Los _Keys_ de los Objects son equivalente a sus propiedades
2. Podemos calcular su longitud con la propiedad `length`
3. No es necesario colocar los _Keys_ entre comillas
4. Podemos incluir una función como propiedad

<solution style="display:none;">2</solution>

### 4) ¿Cómo podemos acceder a los valores de un Object? Puedes seleccionar una o más opciones

#### Opciones

1. Usando corchetes `[]`
2. Usando paréntesis `()`
3. Usando dos puntos `:`
4. Usando punto `.`

<solution style="display:none;">1,4</solution>

### 5) Las propiedades generalmente \_\_\_\_\_\_\_\_\_\_\_\_\_ algo sobre el valor asociado y los métodos usualmente \_\_\_\_\_\_\_\_\_\_\_\_\_ algo sobre el valor asociado

#### Opciones

1. nos muestran - conservan
2. conservan -  nos muestran
3. nos dicen - hacen
4. hacen - nos dicen

<solution style="display:none;">3</solution>

### 6) `toUpperCase()` es \_\_\_\_\_\_\_\_\_\_\_\_\_ que hace la acción de transformar a _mayúscula_ el valor asociado, mientras que `length` es \_\_\_\_\_\_\_\_\_\_\_\_\_ que nos dice la _longitud_ del valor asociado

#### Opciones

1. un object - un array
2. un array - un object
3. una propiedad - un método
4. un método - una propiedad

<solution style="display:none;">4</solution>

### 7) En el siguiente código

```js
var listOfNumbers = [2, 3, 4, 5, 6];
```

¿Qué resultado obtengo al realizar `console.log(listOfNumbers[3])` ?

#### Opciones

1. `2`
2. `3`
3. `4`
4. `5`
5. `6`

<solution style="display:none;">4</solution>

### 8) En el siguiente código

```js
var listOfNumbers = [2, 3, 4, 5, 6];
```

Si realizo `listOfNumbers[3] = 1` ¿cuál sería el resultado del Array?

#### Opciones

1. `[1, 3, 4, 5, 6]`
2. `[2, 1, 4, 5, 6]`
3. `[2, 3, 1, 5, 6]`
4. `[2, 3, 4, 1, 6]`
5. `[2, 3, 4, 5, 1]`

<solution style="display:none;">4</solution>

### 9) En el siguiente código

```js
var questions = [
  ['¿En cuántos países opera Laboratoria?', 3],
  ['¿Cuál es la capital de Perú?', 'Lima'],
  ['¿Cuál es baile típico Chileno?', 'Cueca'],
  ['¿Cuál es la moneda de México?', 'Peso']
];
```

¿Cómo obtengo el dato `Lima`?

#### Opciones

1. `console.log(questions[1][1])`
2. `console.log(questions[1][2])`
3. `console.log(questions[2][1])`
4. `console.log(questions[2][2])`

<solution style="display:none;">1</solution>

### 10) En el siguiente código

```js
var movie = {
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

### 11) ¿Cuál es el error en el siguiente código?

```js
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson' ],
  oscar: 1,
  other awards: 'best sound',
  tags: []
}
```

#### Opciones

1. El número `1` debe ir entre comillas
2. Le faltan las comillas a la propiedad `other awards`
3. La propiedad `tags` no puede estar vacía
4. No hay ningún error

<solution style="display:none;">2</solution>

### 12) ¿Cuál es el resultado del siguiente código?

```js
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi']
};

console.log(movie.stars[2]);
```

#### Opciones

1. Michael J. Fox
2. Christopher Lloyd
3. Lea Thompson
4. undefined

<solution style="display:none;">3</solution>

### 13) En el siguiente código

```js
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi']
};
```

¿cómo podemos acceder a la lista de _keys_ del Objeto `movie`?

#### Opciones

1. `movie:keys`
2. `movie.length`
3. `Object.keys(movie)`
4. `return keys(movie)`

<solution style="display:none;">3</solution>

### 14) Los elementos de un Array se almacenan en propiedades

#### Opciones

1. Verdadero
2. Falso

<solution style="display:none;">1</solution>

### 15) `Git` es un \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

#### Opciones

1. Sistema de código en línea
2. Sistema que controla a `Github`
3. Sistema de control de versiones
4. Sistema para mantener nuestras cuentas

<solution style="display:none;">3</solution>

### 16) De los siguientes enunciados, ¿cuál **NO** pertenece a `Github`?

#### Opciones

1. Una red donde podemos mantener nuestras cuentas unificadas
2. Un sistema de seguimiento de problemas
3. Una herramienta de revisión de código
4. Un visor de versiones

<solution style="display:none;">1</solution>

### 17) Por medio de \_\_\_\_\_\_\_\_\_\_\_\_\_ enviaremos nuestra _nueva versión_ a nuestro repositorio remoto, mientras que \_\_\_\_\_\_\_\_\_\_\_\_\_ sirve para actualizar nuestro repositorio local al _último commit_ que tengamos registrado en el repositorio remoto

#### Opciones

1. `add` - `update`
2. `update` - `add`
3. `push` - `pull`
4. `pull` - `push`

<solution style="display:none;">3</solution>

### 18) ¿Cuáles de los siguientes enunciados son comandos de `Git`? Puedes seleccionar una o más opciones

#### Opciones

1. `git update nombre-rama`
2. `git status`
3. `git commit -m 'añadiendo un comentario'`
4. `git end`
5. `git init`
6. `git change -a 'cambiando un comentario'`

<solution style="display:none;">2,3,5</solution>

### 19) ¿Para qué sirve la línea de comando?

#### Opciones

1. Para usar los comandos y transformar nuestros archivos `.js` en `.git`
2. Para refactorizar nuestro código y subirlo sin necesidad de utilizar `Github`
3. Para crear nuevos comandos para `Git` y `Github`, y posteriormente darles
   soporte
4. Para ver, manejar y manipular archivos de nuestra computadora por medio de
   comandos.

<solution style="display:none;">4</solution>

### 20) ¿Cuál es el resultado del siguiente código?

```js
var coders = ['michelle', 'lourdes', 'ruth'];

coders.push('alejandra');
```

#### Opciones

1. `['alejandra']`
2. `['alejandra','michelle', 'lourdes', 'ruth']`
3. `['michelle', 'lourdes', 'ruth', 'alejandra']`
4. El código carece de argumentos.

<solution style="display:none;">3</solution>

### 21) ¿Cuál es el resultado del siguiente código?

```js
var coders = ['michelle', 'lourdes', 'ruth'];
var removed = coders.shift();

console.log('Elemento eliminado: ' + removed);
```

#### Opciones

1. Elemento eliminado: michelle
2. Elemento eliminado: lourdes
3. Elemento eliminado: ruth
4. undefined

<solution style="display:none;">1</solution>

### 22) ¿Cuál es el resultado del siguiente código?

```js
var courses = ['Intro JS', 'Intro UX', 'UX master'];
courses.unshift('JS master', 'English for Developers');

console.log(courses.length);
```

#### Opciones

1. `['JS master', 'English for Developers']`
2. `['Intro JS', 'Intro UX', 'UX master', 'JS master', 'English for Developers']`
3. `3`
4. `5`

<solution style="display:none;">4</solution>

### 23) ¿Cuál es el resultado del siguiente código?

```js
var listOfNumbers = [];
for (var i = 0; i <= 5; i++) {
  listOfNumbers.push(i);
}
listOfNumbers.pop();

console.log(listOfNumbers.length);
```

#### Opciones

1. `2`
2. `3`
3. `4`
4. `5`

<solution style="display:none;">4</solution>

### 24) En el siguiente código, completa el espacio

```js
var course1 = 'Intro JS, ' ;
var course2 = 'Intro UX, ';
var course3 = 'UX master.';

var allCourses = ___________(course2,course3);

console.log(allCourses);
// → Intro JS, Intro UX, UX master.
```

#### Opciones

1. `concat{course1}`
2. `course1.concat`
3. `concat(course1).`
4. `concat + course1 +`

<solution style="display:none;">2</solution>

### 25) ¿Cuál es el resultado del siguiente código?

```js
var courses = ['Intro JS', 'Intro UX', 'UX master', 'JS master'];
courses.pop();
courses.push('English for Developers');

courses.indexOf('English for Developers');
```

#### Opciones

1. `1`
2. `2`
3. `3`
4. `4`

<solution style="display:none;">3</solution>

### 26) En el siguiente código, ¿qué método debo usar para obtener el resultado solicitado?

```js
var courses = ['Intro JS', 'Intro UX', 'UX master', 'JS master'];
courses.___________;

// → 'Intro JS,Intro UX,UX master,JS master'

```

#### Opciones

1. `concat()`
2. `join()`
3. `string()`
4. `unshift()`

<solution style="display:none;">2</solution>

### 27) En el siguiente código, ¿cuál sería el resultado?

```js
var coders = ['michelle', 'lourdes', 'ruth', 'mariana'];
if (coders.length < 3) {
  coders.push('alejandra');
  coders.slice(1,2);
} else {
  coders.pop();
  coders.slice(1,3);
}
```

#### Opciones

1. `['alejandra']`
2. `['lourdes']`
3. `['lourdes', 'ruth']`
4. `['lourdes', 'ruth', 'mariana']`

<solution style="display:none;">3</solution>

### 28) ¿Cuál sería el resultado en el siguiente código?

```js
var listOfNumbers = [2, 12, 5, 8, 16, 12, 8];
listOfNumbers.lastIndexOf(12);
```

#### Opciones

1. `1`
2. `2`
3. `5`
4. `6`

<solution style="display:none;">3</solution>

### 29) En el siguiente código, completa los espacios para que se invierta el orden de los elementos del `array`

```js
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < array.length; i++) {
  var item = array._________();
  array._________(i, 0, item);
}

console.log(array);
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

#### Opciones

1. `pop` - `slice`
2. `pop` - `splice`
3. `push` - `slice`
4. `push` - `splice`

<solution style="display:none;">2</solution>

### 30) En el siguiente código, ¿qué debemos comparar? Completa los espacios

```js
function search(array, element) {
  for (var i = 0; i < array.length; i++) {
    if (_________ === _________) {
      return i;
    }
  }
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 2));
// → 1
```

#### Opciones

1. `array[i]` - `element`
2. `length` - `array[i]`
3. `i` - `element[i]`
4. `element[i]` - `array`

<solution style="display:none;">1</solution>

### 31) ¿Cuál es el error en el siguiente código?

```js
function objectToArray(object) {

  var items = Object.keys(object);
  var newArray = [];

  for (var i = 0; i < items.length; i++) {
    newArray.pop([items[i], object[items[i]]]);
  }

  return newArray;
}

console.log(objectToArray({make: 'Ford', model: 'Mustang', year: 1964}));
// → [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
```

#### Opciones

1. La variable `newArray` no puede estar vacía
2. La variable `i` debe empezar en `1`
3. Se debe usar `push` en lugar de `pop`
4. Se debe usar `console.log` en lugar de `return`

<solution style="display:none;">3</solution>

### 32) ¿Qué es un algoritmo?

#### Opciones

1. Es un sistema informático
2. Es un conjunto de pasos para realizar una tarea
3. Es una ciencia que transmite información que luego se analiza
4. Es un método para generar una copia de seguridad de mis repositorios

<solution style="display:none;">2</solution>

### 33) Los algoritmos nos permiten comunicar \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ sin explicar el por qué

#### Opciones

1. diferentes funciones
2. muchas propiedades
3. métodos abstractos
4. tareas complejas

<solution style="display:none;">4</solution>
