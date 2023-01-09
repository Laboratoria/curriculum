---
type: quiz
duration: 20min
---

# Quiz

## Objetivos

* Nesta seção, você terá a oportunidade de avaliar a si mesma colocando seu
  conhecimento à prova. É uma oportunidade para você se testar e verificar que
  realmente está aprendendo. Sucesso!

## Perguntas

### 1\) Os elementos de uma matriz devem ser todos do mesmo tipo de dados

#### Opções

1. Verdadeiro
2. Falso

<solution style="display:none;">2</solution>

### 2\) Para que os Arrays são úteis?

#### Opções

1. Para deixar de usar _strings_
2. Para iniciar seu programa
3. Para não mais usar variáveis
4. Para agrupar e manipular dados

<solution style="display:none;">4</solution>

### 3\) No código a seguir

```javascript
const listOfNumbers = [2, 3, 4, 5, 6];
```

Qual o resultado que obtenho quando executo `console.log(listOfNumbers[3])`?

#### Opções

1. `2`
2. `3`
3. `4`
4. `5`
5. `6`

<solution style="display:none;">4</solution>

### 4\) No código a seguir

```javascript
const listOfNumbers = [2, 3, 4, 5, 6];
```

se escrevermos `listOfNumbers[3] = 1`, qual seria o vetor resultante?

#### Opções

1. `[1, 3, 4, 5, 6]`
2. `[2, 1, 4, 5, 6]`
3. `[2, 3, 1, 5, 6]`
4. `[2, 3, 4, 1, 6]`
5. `[2, 3, 4, 5, 1]`

<solution style="display:none;">4</solution>

### 5\) No código a seguir

```javascript
const questions = [
  ['¿En cuántos países opera Laboratoria?', 3],
  ['¿Cuál es la capital de Perú?', 'Lima'],
  ['¿Cuál es baile típico Chileno?', 'Cueca'],
  ['¿Cuál es la moneda de México?', 'Peso'],
];
```

como obtenho o elemento `Lima`?

#### Opções

1. `console.log(questions[1][1])`
2. `console.log(questions[1][2])`
3. `console.log(questions[2][1])`
4. `console.log(questions[2][2])`

<solution style="display:none;">1</solution>

### 6\) Os elementos de um Array são armazenados em propriedades

#### Opções

1. Verdadeiro
2. Falso

<solution style="display:none;">1</solution>

### 7\) Qual é o resultado do código a seguir?

```javascript
const coders = ['michelle', 'lourdes', 'ruth'];
coders.push('alexandra');
```

#### Opções

1. `['alexandra']`
2. `['alexandra','michelle', 'lourdes', 'ruth']`
3. `['michelle', 'lourdes', 'ruth', 'alexandra']`
4. Faltam argumentos.

<solution style="display:none;">3</solution>

### 8\) Qual é o resultado do código abaixo?

```javascript
const coders = ['michelle', 'lourdes', 'ruth'];
const removed = coders.shift();

console.log('Elemento eliminado: ' + removed);
```

#### Opções

1. Elemento excluído: `michelle`
2. Elemento excluído: `lourdes`
3. Elemento excluído: `ruth`
4. `undefined`

<solution style="display:none;">1</solution>

### 9\) Qual é o resultado do código seguinte?

```javascript
const courses = ['Intro JS', 'Intro UX', 'UX master'];
courses.unshift('JS master', 'English for Developers');

console.log(courses.length);
```

#### Opções

1. `['JS master', 'English for Developers']`
2. `['Intro JS', 'Intro UX', 'UX master', 'JS master', 'English for
   Developers']`
3. `3`
4. `5`

<solution style="display:none;">4</solution>

### 10\) Qual é o resultado do código a seguir?

```javascript
const listOfNumbers = [];

for (let i = 0; i <= 5; i += 1) {
  listOfNumbers.push(i);
}

listOfNumbers.pop();

console.log(listOfNumbers.length);
```

#### Opções

1. `2`
2. `3`
3. `4`
4. `5`

<solution style="display:none;">4</solution>

### 11\) No código a seguir, preencha a lacuna

```javascript
const course1 = 'Intro JS, ' ;
const course2 = 'Intro UX, ';
const course3 = 'UX master.';

const allCourses = ___________(course2, course3);

console.log(allCourses);
// → Intro JS, Intro UX, UX master.
```

#### Opções

1. `concat{course1}`
2. `course1.concat`
3. `concat(course1).`
4. `concat + course1 +`

<solution style="display:none;">2</solution>

### 12\) Qual é o resultado código abaixo?

```javascript
const courses = ['Intro JS', 'Intro UX', 'UX master', 'JS master'];
courses.pop();
courses.push('English for Developers');
courses.indexOf('English for Developers');
```

#### Opções

1. `1`
2. `2`
3. `3`
4. `4`

<solution style="display:none;">3</solution>

### 13\) No código a seguir, qual método devo usar para obter o resultado solicitado?

```javascript
const courses = ['Intro JS', 'Intro UX', 'UX master', 'JS master'];
courses.___________;

// → 'Intro JS,Intro UX,UX master,JS master'
```

#### Opções

1. `concat()`
2. `join()`
3. `string()`
4. `unshift()`

<solution style="display:none;">2</solution>

### 14\) No código a seguir, qual seria o resultado?

```javascript
const coders = ['michelle', 'lourdes', 'ruth', 'mariana'];

if (coders.length < 3) {
  coders.push('alejandra');
  coders.slice(1, 2);
} else {
  coders.pop();
  coders.slice(1, 3);
}
```

#### Opções

1. `['alejandra']`
2. `['lourdes']`
3. `['lourdes', 'ruth']`
4. `['lourdes', 'ruth', 'mariana']`

<solution style="display:none;">3</solution>

### 15\) Qual seria o resultado do código a seguir?

```javascript
const listOfNumbers = [2, 12, 5, 8, 16, 12, 8];
listOfNumbers.lastIndexOf(12);
```

#### Opções

1. `1`
2. `2`
3. `5`
4. `6`

<solution style="display:none;">3</solution>

### 16\) No código seguinte, preencha os espaços para que a ordem dos elementos do vetor seja invertida

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i += 1) {
  const item = array._________();
  array._________(i, 0, item);
}

console.log(array);
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

#### Opções

1. `pop` - `slice`
2. `pop` - `splice`
3. `push` - `slice`
4. `push` - `splice`

<solution style="display:none;">2</solution>

### 17\) No código a seguir, o que devemos comparar? Complete as lacunas

```javascript
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

#### Opções

1. `array[i]` - `element`
2. `length` - `array[i]`
3. `i` - `element[i]`
4. `element[i]` - `array`

<solution style="display:none;">1</solution>
