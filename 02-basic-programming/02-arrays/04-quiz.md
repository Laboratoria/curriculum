# 04 - Quiz

## Quiz 1

* Tipo: `quiz`
* Formato: `ritmo próprio`
* Duração: `20min`

### Objetivos

* Nesta seção, você terá a oportunidade de avaliar a si mesma para colocar seu conhecimento em teste. É uma oportunidade para você calibrar e validar que realmente está aprendendo. Sucesso!

### Perguntas

#### 1\) Os elementos de uma matriz devem ser todos do mesmo tipo de dados

**Opções**

1. Verdadeiro
2. Falso

2

#### 2\) Para que os Arrays são úteis?

**Opções**

1. Para não mais usar strings
2. Para iniciar seu programa
3. Para não mais usar variáveis
4. Para agrupar e manipular dados

4

#### 3\) No código a seguir

```text
var listOfNumbers = [2, 3, 4, 5, 6];
```

Qual o resultado que obtenho quando me apresento `console.log(listOfNumbers[3])`?

**Opções**

1. `2`
2. `3`
3. `4`
4. `5`
5. `6`

4

#### 4\) No código a seguir

```text
var listOfNumbers = [2, 3, 4, 5, 6];
```

Se escrever `listOfNumbers[3] = 1`, qual seria o resultado do Array?

**Opções**

1. `[1, 3, 4, 5, 6]`
2. `[2, 1, 4, 5, 6]`
3. `[2, 3, 1, 5, 6]`
4. `[2, 3, 4, 1, 6]`
5. `[2, 3, 4, 5, 1]`

4

#### 5\) No código a seguir

```text
var questions = [
  ['¿En cuántos países opera Laboratoria?', 3],
  ['¿Cuál es la capital de Perú?', 'Lima'],
  ['¿Cuál es baile típico Chileno?', 'Cueca'],
  ['¿Cuál es la moneda de México?', 'Peso']
];
```

Como obtenho o dado `Lima`?

**Opções**

1. `console.log(questions[1][1])`
2. `console.log(questions[1][2])`
3. `console.log(questions[2][1])`
4. `console.log(questions[2][2])`

1

#### 6\) Os elementos de uma matriz são armazenados em propriedades

**Opções**

1. Verdadeiro
2. Falso

1

#### 7\) Qual é o resultado do código a seguir?

```text
var coders = ['michelle', 'lourdes', 'ruth'];

coders.push('alejandra');
```

**Opções**

1. `['alejandra']`
2. `['alejandra','michelle', 'lourdes', 'ruth']`
3. `['michelle', 'lourdes', 'ruth', 'alejandra']`
4. Faltam argumentos.

3

#### 8\) Qual é o resultado do seguinte código?

```text
var coders = ['michelle', 'lourdes', 'ruth'];
var removed = coders.shift();

console.log('Elemento eliminado: ' + removed);
```

**Opções**

1. Elemento excluído: michelle
2. Elemento excluído: lourdes
3. Elemento excluído: ruth
4. undefined

1

#### 9\) Qual é o resultado do seguinte código?

```text
var courses = ['Intro JS', 'Intro UX', 'UX master'];
courses.unshift('JS master', 'English for Developers');

console.log(courses.length);
```

**Opções**

1. `['JS master', 'English for Developers']`
2. `['Intro JS', 'Intro UX', 'UX master', 'JS master', 'English for Developers']`
3. `3`
4. `5`

4

#### 10\) Qual é o resultado do código a seguir?

```text
var listOfNumbers = [];
for (var i = 0; i <= 5; i++) {
  listOfNumbers.push(i);
}
listOfNumbers.pop();

console.log(listOfNumbers.length);
```

**Opções**

1. `2`
2. `3`
3. `4`
4. `5`

4

#### 11\) No código a seguir, preencha o espaço

```text
var course1 = 'Intro JS, ' ;
var course2 = 'Intro UX, ';
var course3 = 'UX master.';

var allCourses = ___________(course2, course3);

console.log(allCourses);
// → Intro JS, Intro UX, UX master.
```

**Opções**

1. `concat{course1}`
2. `course1.concat`
3. `concat(course1).`
4. `concat + course1 +`

2

#### 12\) Qual é o resultado do seguinte código?

```text
var courses = ['Intro JS', 'Intro UX', 'UX master', 'JS master'];
courses.pop();
courses.push('English for Developers');

courses.indexOf('English for Developers');
```

**Opções**

1. `1`
2. `2`
3. `3`
4. `4`

3

#### 13\) No código a seguir, qual método devo usar para obter o resultado solicitado?

```text
var courses = ['Intro JS', 'Intro UX', 'UX master', 'JS master'];
courses.___________;

// → 'Intro JS,Intro UX,UX master,JS master'
```

**Opções**

1. `concat()`
2. `join()`
3. `string()`
4. `unshift()`

2

#### 14\) No código a seguir, qual seria o resultado?

```text
var coders = ['michelle', 'lourdes', 'ruth', 'mariana'];
if (coders.length < 3) {
  coders.push('alejandra');
  coders.slice(1,2);
} else {
  coders.pop();
  coders.slice(1,3);
}
```

**Opções**

1. `['alejandra']`
2. `['lourdes']`
3. `['lourdes', 'ruth']`
4. `['lourdes', 'ruth', 'mariana']`

3

#### 15\) Qual seria o resultado no código a seguir?

```text
var listOfNumbers = [2, 12, 5, 8, 16, 12, 8];
listOfNumbers.lastIndexOf(12);
```

**Opções**

1. `1`
2. `2`
3. `5`
4. `6`

3

#### 16\) No código a seguir, preencha os espaços para que a ordem dos elementos do `array` seja invertida

```text
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < array.length; i++) {
  var item = array._________();
  array._________(i, 0, item);
}

console.log(array);
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

**Opções**

1. `pop` - `slice`
2. `pop` - `splice`
3. `push` - `slice`
4. `push` - `splice`

2

#### 17\) No código a seguir, o que devemos comparar? Complete os espaços

```text
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

**Opções**

1. `array[i]` - `element`
2. `length` - `array[i]`
3. `i` - `element[i]`
4. `element[i]` - `array`

1

