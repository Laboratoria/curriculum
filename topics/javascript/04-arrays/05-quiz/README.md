---
type: quiz
duration: 20min
---

# Quiz 1

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

### 3) En el siguiente código

```js
const listOfNumbers = [2, 3, 4, 5, 6];
```

¿Qué resultado obtengo al realizar `console.log(listOfNumbers[3])` ?

#### Opciones

1. `2`
2. `3`
3. `4`
4. `5`
5. `6`

<solution style="display:none;">4</solution>

### 4) En el siguiente código

```js
const listOfNumbers = [2, 3, 4, 5, 6];
```

Si realizo `listOfNumbers[3] = 1` ¿cuál sería el resultado del Array?

#### Opciones

1. `[1, 3, 4, 5, 6]`
2. `[2, 1, 4, 5, 6]`
3. `[2, 3, 1, 5, 6]`
4. `[2, 3, 4, 1, 6]`
5. `[2, 3, 4, 5, 1]`

<solution style="display:none;">4</solution>

### 5) En el siguiente código

```js
const questions = [
  ['¿En cuántos países opera Laboratoria?', 3],
  ['¿Cuál es la capital de Perú?', 'Lima'],
  ['¿Cuál es baile típico Chileno?', 'Cueca'],
  ['¿Cuál es la moneda de México?', 'Peso'],
];
```

¿Cómo obtengo el dato `Lima`?

#### Opciones

1. `console.log(questions[1][1])`
2. `console.log(questions[1][2])`
3. `console.log(questions[2][1])`
4. `console.log(questions[2][2])`

<solution style="display:none;">1</solution>

### 6) Los elementos de un Array se almacenan en propiedades

#### Opciones

1. Verdadero
2. Falso

<solution style="display:none;">1</solution>

### 7) ¿Cuál es el resultado del siguiente código?

```js
const coders = ['michelle', 'lourdes', 'ruth'];

coders.push('alejandra');
```

#### Opciones

1. `['alejandra']`
2. `['alejandra','michelle', 'lourdes', 'ruth']`
3. `['michelle', 'lourdes', 'ruth', 'alejandra']`
4. El código carece de argumentos.

<solution style="display:none;">3</solution>

### 8) ¿Cuál es el resultado del siguiente código?

```js
const coders = ['michelle', 'lourdes', 'ruth'];
const removed = coders.shift();

console.log('Elemento eliminado: ' + removed);
```

#### Opciones

1. Elemento eliminado: michelle
2. Elemento eliminado: lourdes
3. Elemento eliminado: ruth
4. undefined

<solution style="display:none;">1</solution>

### 9) ¿Cuál es el resultado del siguiente código?

```js
const courses = ['Intro JS', 'Intro UX', 'UX master'];
courses.unshift('JS master', 'English for Developers');

console.log(courses.length);
```

#### Opciones

1. `['JS master', 'English for Developers']`
2. `['Intro JS', 'Intro UX', 'UX master', 'JS master', 'English for Developers']`
3. `3`
4. `5`

<solution style="display:none;">4</solution>

### 10) ¿Cuál es el resultado del siguiente código?

```js
const listOfNumbers = [];

for (let i = 0; i <= 5; i += 1) {
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

### 11) En el siguiente código, completa el espacio

```js
const course1 = 'Intro JS, ' ;
const course2 = 'Intro UX, ';
const course3 = 'UX master.';

const allCourses = ___________(course2, course3);

console.log(allCourses);
// → Intro JS, Intro UX, UX master.
```

#### Opciones

1. `concat{course1}`
2. `course1.concat`
3. `concat(course1).`
4. `concat + course1 +`

<solution style="display:none;">2</solution>

### 12) ¿Cuál es el resultado del siguiente código?

```js
const courses = ['Intro JS', 'Intro UX', 'UX master', 'JS master'];
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

### 13) En el siguiente código, ¿qué método debo usar para obtener el resultado solicitado?

```js
const courses = ['Intro JS', 'Intro UX', 'UX master', 'JS master'];
courses.___________;

// → 'Intro JS,Intro UX,UX master,JS master'

```

#### Opciones

1. `concat()`
2. `join()`
3. `string()`
4. `unshift()`

<solution style="display:none;">2</solution>

### 14) En el siguiente código, ¿cuál sería el resultado?

```js
const coders = ['michelle', 'lourdes', 'ruth', 'mariana'];

if (coders.length < 3) {
  coders.push('alejandra');
  coders.slice(1, 2);
} else {
  coders.pop();
  coders.slice(1, 3);
}
```

#### Opciones

1. `['alejandra']`
2. `['lourdes']`
3. `['lourdes', 'ruth']`
4. `['lourdes', 'ruth', 'mariana']`

<solution style="display:none;">3</solution>

### 15) ¿Cuál sería el resultado en el siguiente código?

```js
const listOfNumbers = [2, 12, 5, 8, 16, 12, 8];
listOfNumbers.lastIndexOf(12);
```

#### Opciones

1. `1`
2. `2`
3. `5`
4. `6`

<solution style="display:none;">3</solution>

### 16) En el siguiente código, completa los espacios para que se invierta el orden de los elementos del `array`

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i += 1) {
  const item = array._________();
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

### 17) En el siguiente código, ¿qué debemos comparar? Completa los espacios

```js
const search = (array, element) => {
  for (let i = 0; i < array.length; i += 1) {
    if (_________ === _________) {
      return i;
    }
  }
};

console.log(search([1, 2, 3, 4, 5, 6, 7], 2));
// → 1
```

#### Opciones

1. `array[i]` - `element`
2. `length` - `array[i]`
3. `i` - `element[i]`
4. `element[i]` - `array`

<solution style="display:none;">1</solution>

<!--
### 18) ¿Qué es un algoritmo?

#### Opciones

1. Es un sistema informático
2. Es un conjunto de pasos para realizar una tarea
3. Es una ciencia que transmite información que luego se analiza
4. Es un método para generar una copia de seguridad de mis repositorios

<solution style="display:none;">2</solution>

### 19) Los algoritmos nos permiten comunicar \_\_\_\_\_ sin explicar el por qué

#### Opciones

1. diferentes funciones
2. muchas propiedades
3. métodos abstractos
4. tareas complejas

<solution style="display:none;">4</solution>
-->
