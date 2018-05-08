# 07 - Requiz

* Tipo: `quiz`
* Formato: `self-paced`
* Duración: `15min`

## Objetivos

* Tomar un segundo quiz para asegurarnos que terminamos la unidad con un

  entendimiento pleno de los conceptos.

## Preguntas

### 1\) En el siguiente ejemplo, el Array `mixedArray` presenta un error de syntaxis

```javascript
var mixedArray = [3, hola mundo, 627.5];
```

#### Opciones

1. Verdadero
2. Falso

1

### 2\) ¿Cuál de los siguientes enunciados NO es un método?

#### Opciones

1. `push`
2. `concat`
3. `length`
4. `lastIndexOf`

3

### 3\) En el siguiente código

```javascript
var listOfNumbers = [1, 2, 3, 4, 5, 6];
```

¿Qué resultado obtengo al realizar `console.log(listOfNumbers[6])`?

#### Opciones

1. `''`
2. `4`
3. `5`
4. `6`
5. `undefined`

5

### 4\) En el siguiente código

```javascript
var listOfNumbers = [1, 2, 3, 4, 5, 6];
```

Si realizo `listOfNumbers[3] = 'hola'` ¿cuál sería el resultado del Array?

#### Opciones

1. `[1, 2, 'hola', 4, 5, 6]`
2. `[1, 2, 3, 'hola', 5, 6]`
3. `[1, 2, , 4, 5, 6]`
4. `[1, 2, 3, , 5, 6]`
5. `undefined`

2

### 5\) En el siguiente código

```javascript
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

3

### 6\) En el siguiente ejemplo, ¿qué método debo usar para obtener el resultado solicitado?

```javascript
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

3

### 7\) En el siguiente ejemplo, ¿cuáles de los siguientes métodos podrías usar para obtener el resultado solicitado? Puedes elegir más de una opción

```javascript
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

2, 4

### 8\) En el siguiente ejemplo, ¿qué métodos debo usar para obtener el resultado solicitado?

```javascript
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

2

### 9\) ¿Cuál sería el resultado en el siguiente código?

```javascript
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

1

### 10\) ¿Cuál es el resultado del siguiente código?

```javascript
var coders = ['Michelle', 'Lourdes', 'Ruth'];
coders.pop();
coders.indexOf('Lourdes');
```

#### Opciones

1. `0`
2. `1`
3. `2`
4. `3`

2

### 11\) En el siguiente código, ¿cuál sería el resultado?

```javascript
var coders = ['Michelle', 'Lourdes', 'Ruth'];
coders.push('Alejandra');
coders.join();
```

#### Opciones

1. `['Michelle,Lourdes,Ruth,Alejandra']`
2. `['Michelle,Lourdes,Ruth']`
3. `['Michelle', 'Lourdes', 'Ruth', 'Alejandra']`
4. `'Michelle,Lourdes,Ruth,Alejandra'`

4

### 12\) En el siguiente ejemplo completa los espacios

```javascript
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

1

### 13\) En el siguiente ejemplo, ¿qué método debo usar para obtener el resultado solicitado?

```javascript
var listOfNumbers = [1, 2, 3, 1, 2, 3];
listOfNumbers.____________(2);

// → 4
```

#### Opciones

1. `pop()`
2. `indexOf()`
3. `unshift()`
4. `lastIndexOf()`

4

### 14\) En el siguiente código, ¿cuál sería el resultado?

```javascript
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

4

### 15\) En el siguiente código, ¿cuál sería el resultado?

```javascript
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

1

