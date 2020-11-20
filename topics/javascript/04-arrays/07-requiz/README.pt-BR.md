# Quiz 2

- Tipo: `quiz`
- Formato: `individual`
- Duração: `15 min`

***

## Objetivos

- Faça um segundo teste para garantir que terminamos a unidade com total
  compreensão dos conceitos.

## Perguntas

### 1\) No exemplo a seguir, o _array_  `mixedArray` apresenta um erro de sintaxe

```javascript
const mixedArray = [3, oi mundo, 627.5];
```

#### Opções

1. Verdadeiro
2. Falsa

<solution style="display:none;">1</solution>

### 2\) Qual das seguintes opções NÃO é um método?

#### Opções

1. `push`
2. `concat`
3. `length`
4. `lastIndexOf`

<solution style="display:none;">3</solution>

### 3\) Considere o código abaixo

```javascript
const listOfNumbers = [1, 2, 3, 4, 5, 6];
```

Que resultado obtenho ao executar `console.log(listOfNumbers[6])`?

#### Opções

1. `''`
2. `4`
3. `5`
4. `6`
5. `undefined`

<solution style="display:none;">5</solution>

### 4\) No código a seguir

```javascript
const listOfNumbers = [1, 2, 3, 4, 5, 6];
```

como ficaria o _array_ se executarmos `listOfNumbers[3] = 'hola'`?

#### Opções

1. `[1, 2, 'hola', 4, 5, 6]`
2. `[1, 2, 3, 'hola', 5, 6]`
3. `[1, 2, , 4, 5, 6]`
4. `[1, 2, 3, , 5, 6]`
5. `undefined`

<solution style="display:none;">2</solution>

### 5\) No código a seguir

```javascript
const questions = [
  ['¿En cuántos países opera Laboratoria?', 3],
  ['¿Cuál es la capital de Perú?', 'Lima'],
  ['¿Cuál es baile típico Chileno?', 'Cueca'],
  ['¿Cuál es la moneda de México?', 'Peso']
];
```

como obtenho o elemento `Peso`?

#### Opções

1. `console.log(questions[1][3])`
2. `console.log(questions[2][4])`
3. `console.log(questions[3][1])`
4. `console.log(questions[4][2])`

<solution style="display:none;">3</solution>

### 6\) No exemplo a seguir, qual método devo usar para obter o resultado do comentário de código?

```javascript
let courses = ['Intro JS', 'Intro UX', 'UX master'];
let removed = courses.__________;

console.log('Elemento eliminado: ' + removed);
// → Elemento eliminado: Intro JS
```

#### Opções

1. `pop()`
2. `push()`
3. `shift()`
4. `unshift()`

<solution style="display:none;">3</solution>

### 7\) No exemplo a seguir, quais dos seguintes métodos você poderia usar para obter o resultado solicitado? Você pode escolher mais de uma opção

```javascript
let courses = ['Intro JS', 'Intro UX', 'UX master'];
courses.__________('JS master', 'English for Developers');

console.log(courses.length);
// → 5
```

#### Opções

1. `pop()`
2. `push()`
3. `shift()`
4. `unshift()`

<solution style="display:none;">2,4</solution>

### 8\) No exemplo a seguir, quais métodos devo usar para obter o resultado solicitado?

```javascript
let listOfNumbers = [];
for (let i = 1; i <= 7; i++) {
  listOfNumbers.__________(i);
}
listOfNumbers.__________();

console.log(listOfNumbers.length);
// → 6
```

#### Opções

1. `join` - `search`
2. `push` - `pop`
3. `shift` - `unshift`
4. `slice` - `splice`

<solution style="display:none;">2</solution>

### 9\) Qual seria o resultado do código a seguir?

```javascript
const coder1 = 'Michelle, ';
const coder2 = 'Lourdes, ';
const coder3 = 'Ruth.';

const allCoders = coder1.concat(coder2, coder3);

console.log(allCoders);
```

#### Opções

1. `Michelle, Lourdes, Ruth.`
2. `[Michelle, Lourdes, Ruth.]`
3. `['Michelle', 'Lourdes', 'Ruth'.]`
4. No hay resultado, debido a que el código está mal escrito.

<solution style="display:none;">1</solution>

### 10\) Qual é o resultado do código abaixo?

```javascript
let coders = ['Michelle', 'Lourdes', 'Ruth'];
coders.pop();
coders.indexOf('Lourdes');
```

#### Opções

1. `0`
2. `1`
3. `2`
4. `3`

<solution style="display:none;">2</solution>

### 11\) No código a seguir, qual seria o resultado?

```javascript
let coders = ['Michelle', 'Lourdes', 'Ruth'];
coders.push('Alejandra');
coders.join();
```

#### Opções

1. `['Michelle,Lourdes,Ruth,Alejandra']`
2. `['Michelle,Lourdes,Ruth']`
3. `['Michelle', 'Lourdes', 'Ruth', 'Alejandra']`
4. `'Michelle,Lourdes,Ruth,Alejandra'`

<solution style="display:none;">4</solution>

### 12\) No exemplo a seguir, complete os espaços

```javascript
let coders = ['michelle', 'lourdes', 'ruth', 'alejandra'];
coders.pop();
coders.slice(____,____);

// → ['lourdes', 'ruth']
```

#### Opções

1. `1` - `3`
2. `2` - `4`
3. `1` - `2`
4. `2` - `3`

<solution style="display:none;">1</solution>

### 13\) No exemplo a seguir, qual método devo usar para obter o resultado comentado?

```javascript
let listOfNumbers = [1, 2, 3, 1, 2, 3];
listOfNumbers.____________(2);

// → 4
```

#### Opções

1. `pop()`
2. `indexOf()`
3. `unshift()`
4. `lastIndexOf()`

<solution style="display:none;">4</solution>

### 14\) No código a seguir, qual seria o resultado?

```javascript
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  let item = array.pop();
  array.splice(i, 0, item);
}

console.log(array);
```

#### Opções

1. `[1, 2, 3, 4, 5]`
2. `[6, 7, 8, 9, 10]`
3. `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
4. `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

<solution style="display:none;">4</solution>

### 15\) No código a seguir, qual seria o resultado?

```javascript
function search(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
}

console.log(search([7, 6, 5, 4, 3, 2, 1], 5));
```

#### Opções

1. `2`
2. `3`
3. `4`
4. `5`

<solution style="display:none;">1</solution>
