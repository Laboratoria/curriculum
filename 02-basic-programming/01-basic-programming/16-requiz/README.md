# Quiz #2: requizzing

- Tipo: `quiz`
- Formato: `guiado`
- Duración: `30min`

***

## Objetivos

- Tomar un segundo quiz para asegurarnos que terminamos la unidad con un
  entendimiento pleno de los conceptos.

***

## Preguntas

### 1) En el siguiente ejemplo, el Array `mixedArray` presenta un error de syntaxis

```js
var mixedArray = [3, hola mundo, 627.5];
```

#### Opciones

1. Verdadero
2. Falso

<solution style="display:none;">1</solution>

### 2) ¿Para qué son útiles los Objects?

#### Opciones

1. Para dejar de usar arrays y variables
2. Para poder utilizar repositorios en `Git`
3. Para almacenar diferentes piezas de información sobre sí mismo
4. Para guardar mi información en la nube y posteriormente compartirla

<solution style="display:none;">3</solution>

### 3) ¿Cuál de los siguientes enunciados sobre Objects SÍ es correcto? Puedes seleccionar una o más opciones

#### Opciones

1. Las propiedades deben estar siempre entre comillas
2. No debemos incluir un array como propiedad
3. Podemos incluir una función como propiedad
4. Los _keys_ de los Objects son equivalente a sus propiedades

<solution style="display:none;">3,4</solution>

### 4) Podemos acceder a los valores de un Object usando corchetes `[ ]` o usando punto `.`

#### Opciones

1. Verdadero
2. Falso

<solution style="display:none;">1</solution>

### 5) Los métodos son \_\_\_\_\_\_\_\_\_\_\_\_\_ que contienen \_\_\_\_\_\_\_\_\_\_\_\_\_

#### Opciones

1. propiedades - funciones
2. funciones - propiedades
3. elementos - objetos
4. objetos - elementos

<solution style="display:none;">1</solution>

### 6) ¿Cuál de los siguientes enunciados NO es un método?

#### Opciones

1. `push`
2. `concat`
3. `length`
4. `lastIndexOf`

<solution style="display:none;">3</solution>

### 7) En el siguiente código

```js
var listOfNumbers = [1, 2, 3, 4, 5, 6];
```

¿Qué resultado obtengo al realizar `console.log(listOfNumbers[6])` ?

#### Opciones

1. `''`
2. `4`
3. `5`
4. `6`
5. `undefined`

<solution style="display:none;">5</solution>

### 8) En el siguiente código

```js
var listOfNumbers = [1, 2, 3, 4, 5, 6];
```

Si realizo `listOfNumbers[3] = 'hola'` ¿cuál sería el resultado del Array?

#### Opciones

1. `[1, 2, 'hola', 4, 5, 6]`
2. `[1, 2, 3, 'hola', 5, 6]`
3. `[1, 2, , 4, 5, 6]`
4. `[1, 2, 3, , 5, 6]`
5. `undefined`

<solution style="display:none;">2</solution>

### 9) En el siguiente código

```js
var questions = [
  ['¿En cuántos países opera Laboratoria?', 3],
  ['¿Cuál es la capital de Perú?', 'Lima'],
  ['¿Cuál es baile típico Chileno?', 'Cueca'],
  ['¿Cuál es la moneda de México?', 'Peso']
];
```

¿Cómo obtengo el dato `Peso`?

#### Opciones

1. `console.log(questions[1][3])`
2. `console.log(questions[2][4])`
3. `console.log(questions[3][1])`
4. `console.log(questions[4][2])`

<solution style="display:none;">3</solution>

### 10) ¿Cuál es el resultado del siguiente código?

```js
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  tags: ['Adventure', 'Comedy', 'Sci-Fi']
};

console.log(movie.tags[1]);
```

#### Opciones

1. Adventure
2. Comedy
3. Sci-Fi
4. undefined

<solution style="display:none;">2</solution>

### 11) ¿Cuál es el error en el siguiente código?

```js
var movie = {
  title: 'Back to the Future',
  director: 'Robert Zemeckis',
  stars: [ 'Michael J. Fox'; 'Christopher Lloyd'; 'Lea Thompson'],
  oscar: 1,
  'other awards': 'best sound',
  tags: []
};
```

#### Opciones

1. La propiedad `tags` no puede estar vacía
2. Le sobran las comillas `' '` a la propiedad `other awards`
3. En la propiedad `stars`, deben ir comas `,` en lugar de puntos y comas `;`
4. No hay ningún error

<solution style="display:none;">3</solution>

### 12) De los siguientes enunciados ¿cuál pertenece a `Github`? Puedes seleccionar una o más opciones

#### Opciones

1. Un visor de versiones
2. Un Sistema de Control de Versiones
3. Una herramienta de revisión de código
4. Una red donde podemos mantener nuestras cuentas unificadas

<solution style="display:none;">1, 3</solution>

### 13) ¿Cuál es la diferencia entre `Git` y `Github`?

#### Opciones

1. `Git` solamente sirve como una red social  y `Github` almacena extensiones
    de archivos
2. `Github` almacena los archivos JavaScript mientras que `Git`, los archivos
   `HTML` y `CSS`
3. `Git` guarda los archivos en la nube y `Github` solamente sirve como una red
   social
4. `Github` utiliza a `Git` como Sistema de Control de Versiones

<solution style="display:none;">4</solution>

### 14) Por medio de \_\_\_\_\_\_\_\_\_\_\_\_\_  estaremos indicando qué archivos queremos que pasen de nuestro _working directory_ al _staging area_, mientras que con \_\_\_\_\_\_\_\_\_\_\_\_\_ confirmaremos los archivos que declaramos como preparados con el comando anterior

#### Opciones

1. `commit` - `add`
2. `add` - `commit`
3. `confirm` - `adding`
4. `adding` - `confirm`

<solution style="display:none;">2</solution>

### 15) ¿Para qué sirve la línea de comando?

#### Opciones

1. Para refactorizar nuestro código y utilizar los comandos para subirlo a
   `replit`
2. Para ver, manejar y manipular archivos de nuestra computadora por medio de
   comandos
3. Para crear nuevos comandos para `Git` y `Github`, y posteriormente darle el
   soporte adecuado
4. Para que podamos transformar nuestros archivos en extensión `.git` con la
   ayuda de los comandos

<solution style="display:none;">2</solution>

### 16) En el siguiente ejemplo, ¿qué método debo usar para obtener el resultado solicitado?

```js
var courses = ['Intro JS', 'Intro UX', 'UX master'];
var removed = courses.__________;

console.log('Elemento eliminado: ' + removed);
// → Elemento eliminado: Intro JS
```

#### Opciones

1. `pop()`
2. `push()`
3. `shift()`
4. `unshift()`

<solution style="display:none;">3</solution>

### 17) En el siguiente ejemplo, ¿cuáles de los siguientes métodos podrías usar para obtener el resultado solicitado? Puedes elegir más de una opción

```js
var courses = ['Intro JS', 'Intro UX', 'UX master'];
courses.__________('JS master', 'English for Developers');

console.log(courses.length);
// → 5
```

#### Opciones

1. `pop()`
2. `push()`
3. `shift()`
4. `unshift()`

<solution style="display:none;">2, 4</solution>

### 18) En el siguiente ejemplo, ¿qué métodos debo usar para obtener el resultado solicitado?

```js
var listOfNumbers = [];
for (var i = 1; i <= 7; i++) {
  listOfNumbers.__________(i);
}
listOfNumbers.__________();

console.log(listOfNumbers.length);
// → 6
```

#### Opciones

1. `join` - `search`
2. `push` - `pop`
3. `shift` - `unshift`
4. `slice` - `splice`

<solution style="display:none;">2</solution>

### 19) ¿Cuál sería el resultado en el siguiente código?

```js
var coder1 = 'Michelle, ';
var coder2 = 'Lourdes, ';
var coder3 = 'Ruth.';

var allCoders = coder1.concat(coder2, coder3);

console.log(allCoders);
```

#### Opciones

1. `Michelle, Lourdes, Ruth.`
2. `[Michelle, Lourdes, Ruth.]`
3. `['Michelle', 'Lourdes', 'Ruth'.]`
4. No hay resultado, debido a que el código está mal escrito.

<solution style="display:none;">1</solution>

### 20) ¿Cuál es el resultado del siguiente código?

```js
var coders = ['Michelle', 'Lourdes', 'Ruth'];
coders.pop();
coders.indexOf('Lourdes');
```

#### Opciones

1. `0`
2. `1`
3. `2`
4. `3`

<solution style="display:none;">2</solution>

### 21) En el siguiente código, ¿cuál sería el resultado?

```js
var coders = ['Michelle', 'Lourdes', 'Ruth'];
coders.push('Alejandra');
coders.join();
```

#### Opciones

1. `['Michelle,Lourdes,Ruth,Alejandra']`
2. `['Michelle,Lourdes,Ruth']`
3. `['Michelle', 'Lourdes', 'Ruth', 'Alejandra']`
4. `'Michelle,Lourdes,Ruth,Alejandra'`

<solution style="display:none;">4</solution>

### 22) En el siguiente ejemplo completa los espacios

```js
var coders = ['michelle', 'lourdes', 'ruth', 'alejandra'];
coders.pop();
coders.slice(____,____);

// → ['lourdes', 'ruth']
```

#### Opciones

1. `1` - `3`
2. `2` - `4`
3. `1` - `2`
4. `2` - `3`

<solution style="display:none;">1</solution>

### 23) En el siguiente ejemplo, ¿qué método debo usar para obtener el resultado solicitado?

```js
var listOfNumbers = [1, 2, 3, 1, 2, 3];
listOfNumbers.____________(2);

// → 4
```

#### Opciones

1. `pop()`
2. `indexOf()`
3. `unshift()`
4. `lastIndexOf()`

<solution style="display:none;">4</solution>

### 24) En el siguiente código, ¿cuál sería el resultado?

```js
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < array.length; i++) {
  var item = array.pop();
  array.splice(i, 0, item);
}

console.log(array);
```

#### Opciones

1. `[1, 2, 3, 4, 5]`
2. `[6, 7, 8, 9, 10]`
3. `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
4. `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

<solution style="display:none;">4</solution>

### 25) En el siguiente código, ¿cuál sería el resultado?

```js
function search(array, element) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
}

console.log(search([7, 6, 5, 4, 3, 2, 1], 5));
```

#### Opciones

1. `2`
2. `3`
3. `4`
4. `5`

<solution style="display:none;">1</solution>

### 26) ¿Cuáles son los 2 criterios que hacen que un algoritmo sea bueno?

#### Opciones

1. Novedad
2. Exactitud
3. Antigüedad
4. Dinámica
5. Eficiencia

<solution style="display:none;">2, 5</solution>

### 27) Los algoritmos nos permiten comunicar \_\_\_\_\_\_\_\_\_\_\_\_\_ sin explicar el por qué

#### Opciones

1. diferentes funciones
2. métodos abstractos
3. tareas complejas
4. muchas propiedades

<solution style="display:none;">3</solution>
