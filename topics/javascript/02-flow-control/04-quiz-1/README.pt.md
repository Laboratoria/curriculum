---
type: quiz
duration: 30min
---

# Quiz 1

## Perguntas

### 1) Quais das seguintes permitem modificar o controle de fluxo de um programa?

#### Opções

1. unicamente estruturas condicionais e repetitivas
2. unicamente funções
3. estruturas condicionais, estruturas repetitivas e funções
4. nenhuma das anteriores

<solution style="display:none;">3</solution>

### 2) Que forma de modificar o fluxo de um programa mostra a figura a seguir?

![Flujo
condicional](http://eloquentjavascript.net/img/controlflow-nested-if.svg)

#### Opções

1. while
2. do while
3. for
4. if
5. if else
6. if else "aninhado" (nested)

<solution style="display:none;">6</solution>

### 3) São exemplos de DRY

#### Opções

1. loops e funções
2. somente loops
3. somente funções
4. nenhuma das anteriores

<solution style="display:none;">1</solution>

### 4) Qual é o problema com o código a seguir?

```js
while (3 > 2) {
  console.log('Hello world');
}
```

#### Opções

1. Tem um erro de sintaxis
2. Não utiliza boas práticas
3. A variável não está bem declarada
4. Gera um loop infinito

<solution style="display:none;">4</solution>

### 5) Encontre o erro na seguinte função

```js
let result = 0;

const showSum = () => {
  result = num1 + num2;
  alert('O resultado é ' + result);
};

showSum();
```

#### Opções

1. A função carece de parâmetros e portanto "num1" e "num2" não estão definidos
2. A função não está sendo invocada
3. Possui um erro de sintaxis
4. alert não é uma função

<solution style="display:none;">1</solution>

### 6) Complete os espaços em branco (ordenadamente)

```js
const sum = _____ (num1, num2) {
  ________ num1 + num2;
};

_______(2, 3);
```

#### Opções

1. return - function - sum
2. function - sum - return
3. function - return - sum
4. for - return - while

<solution style="display:none;">3</solution>

### 7) Qual o resultado de

```js
let emoji = ':D';

const greet = (name) => {
  emoji = ':)';
  const myGreet = () => `Hola ${name} ${emoji}`;
  return myGreet();
};

console.log(greet('Laboratoria'));
```

#### Opções

1. Olá Laboratoria :D
2. Olá Laboratoria :)
3. Olá Laboratoria
4. undefined

<solution style="display:none;">2</solution>

### 8) Qual o resultado de

```js
let number = 0;

while (number <= 12) {
  console.log(number);
  number = number + 2;
}
```

#### Opções

1. imprime os números pares desde o 2 ao 10 (inclusive)
2. imprime os números pares desde o 2 ao 12 (inclusive)
3. imprime os números pares desde o 0 ao 10 (inclusive)
4. imprime os números pares desde o 0 ao 12 (inclusive)

<solution style="display:none;">4</solution>

### 9) Qual o resultado de

```js
for (let number = 1; number <= 8; number = number * 2) {
  console.log(number);
}
```

#### Opções

1. 2, 4, 6, 8
2. 1, 2, 4, 6, 8
3. 1, 2, 4, 8
4. 0, 1, 2, 4, 8

<solution style="display:none;">3</solution>

### 10) Ao seguinte switch lhe faltam alguns "breaks", porém qual seria o resultado de executar o código assim como está?

```js
const weather = 'nublado';

switch (weather) {
  case 'chuvoso':
    console.log('Lembre de levar um guarda-chuva.');
    break;
  case 'soleado':
    console.log('Use roupas leves.');
  case 'nublado':
    console.log('Saia para a rua');

  default:
    console.log('Tipo de clima desconhecido');
    break;
}
```

#### Opções

1. Erro de sintaxis
2. Imprime 'Saia para a rua.'
3. Imprime 'Tipo de Clima desconhecido.'
4. Imprime 'Saia para a rua.' e 'Tipo de Clima desconhecido.'

<solution style="display:none;">4</solution>

### 11) O que diferencia um loop "do" de um "while"?

#### Opções

1. Um loop "do" sempre executa seu corpo pelo menos uma vez.
2. O "while" pode gerar um ciclo infinito, mas um "do" nunca o fará.
3. O "do" executa uma só vez o cuerpo.
4. Não existe diferenças.

<solution style="display:none;">1</solution>

### 12) Qual é o resultado de

```js
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
}
```

#### Opções

1. Imprime os números inteiros de 1 a 10 (inclusive)
2. Imprime os números inteiros de 0 a 10 (inclusive) com exceção do número 5
3. Imprime os números inteiros de 0 a 10 (inclusive)
4. Imprime os números inteiros de 1 a 9 (inclusive) e logo imprime o número 5 de
   novo

<solution style="display:none;">2</solution>

### 13) Qual é o resultado de

```js
const medalForScore = (score) => {
  if (score < 3){
    return 'Bronze';
  }
  if (score < 7){
    return 'silver';
  }
  return 'Gold';
}

console.log(medalForScore(7));
```

#### Opções

1. Bronze
2. Silver
3. Gold
4. undefined

<solution style="display:none;">3</solution>

### 14) No exemplo a seguir

```js
const square = num => num * num;
square(12);
//->144
```

#### Opções

1. num é um parâmetro e 12 é o argumento
2. num e 12 são parâmetros
3. num e 12 são argumentos
4. num é um argumento e 12 é o parâmetro

<solution style="display:none;">1</solution>
