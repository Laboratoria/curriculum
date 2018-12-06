# Quiz 1

- Tipo: `quiz`
- Formato: `self-paced`
- Duración: `30min`

***

## Preguntas

### 1) Qual das seguintes opções permite modificar o controle de fluxo de um programa?

#### Opciones

1. Apenas estruturas condicionais e repetitivas
2. Apenas funções
3. Estruturas condicionais, estruturas repetitivas e funções
4. Nenhuma das anteriores

<solution style="display:none;">3</solution>

### 2) Qual é a forma de modificar o fluxo de um programa é mostrada na figura abaixo?

![Fluxo condicional](http://eloquentjavascript.net/img/controlflow-nested-if.svg)

#### Opciones

1. while
2. do while
3. for
4. if
5. if else
6. if else "aninhado" (nested)

<solution style="display:none;">6</solution>

### 3) São exemplos de DRY

#### Opciones

1. Laços e funções
2. Apenas laços
3. Apenas funções
4. Nenhuma das anteriores

<solution style="display:none;">1</solution>

### 4) Qual é o problema no código abaixo?

```js
while(3 > 2) {
  console.log('Hello world');
}
```

#### Opciones

1. Tem um erro de sintaxe
2. Não utiliza boas práticas
3. A variável não está declarada
4. Gera um loop infinito

<solution style="display:none;">4</solution>

### 5) Encontre o erro na função a seguir

```js
var result = 0;

var showSum = function () {
  result = num1 + num2;
  alert('El resultado es ' + result);
}

showSum();
```

#### Opciones

1. A função não possui parâmetros e por tanto o "num1" e "num2" não estão definidos
2. A função não está sendo chamada
3. Possui um erro de sintaxe
4. alert não é uma função

<solution style="display:none;">1</solution>

### 6) Complete os espaços em branco

```js
var sum = _____(num1, num2) {
  ________ num1 + num2;
}

_______(2, 3);
```

#### Opciones

1. return - function - sum
2. function - sum - return
3. function - return - sum
4. for - return - while

<solution style="display:none;">3</solution>

### 7) Qual é o resultado gerado

```js
var emoji = ':D';

var greet = function (name) {
  emoji = ':)';
  var myGreet = function () {
    return 'Hola ' + name + ' ' + emoji;
  }
  return myGreet();
}

console.log(greet('Laboratoria'));
```

#### Opciones

1. Hola Laboratoria :D
2. Hola Laboratoria :)
3. Hola Laboratoria
4. undefined

<solution style="display:none;">2</solution>

### 8) Qual é o resultado gerado

```js
var number = 0;

while (number <= 12) {
  console.log(number);
  number = number + 2;
}
```

#### Opciones

1. imprime os números pares de 2 até 10 (incluindo o 10)
2. imprime os números pares de 2 até 12 (incluindo o 12)
3. imprime os números pares de 0 até 10 (incluindo o 10)
4. imprime os números pares de 0 até 12 (incluindo o 12)

<solution style="display:none;">4</solution>

### 9) Qual é o resultado de

```js
for (var number = 1; number <= 8; number = number * 2) {
  console.log(number);
}
```

#### Opciones

1. 2, 4, 6, 8
2. 1, 2, 4, 6, 8
3. 1, 2, 4, 8
4. 0, 1, 2, 4, 8

<solution style="display:none;">3</solution>

### 10) O "switch" abaixo está com alguns "breaks" faltando. Qual seria o resultado se o código fosse execultado assim?

```js
var weather = 'nublado';

switch (weather) {
  case 'chuvoso':
    console.log('Lembre-se de levar um guarda-chuva.');
    break;
  case 'ensolarado':
    console.log('Não esqueça do protetor.');
  case 'nublado':
    console.log('Vamos assistir Netflix.');

  default:
    console.log('Clima desconhecido.');
    break;
}
```

#### Opciones

1. Erro de sintaxe
2. Imprime 'Clima desconhecido.'
3. Imprime 'Vamos assistir Netflix.'
4. Imprime 'Vamos assistir Netflix.' e 'Clima desconhecido.'

<solution style="display:none;">4</solution>

### 11) Qual a diferença entre os laços "do" e "while"?

#### Opciones

1. Um laço "do" sempre executa o seu corpo pelo menos uma vez.
2. O laço "while" pode gerar um ciclo infinito, mas um "do" nunca.
3. O "do" executa apenas uma vez o seu corpo.
4. Não existe diferenças.

<solution style="display:none;">1</solution>

### 12) Qual é o resultado

```js
for (var i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
}
```

#### Opciones

1. Imprime os números entre 1 e 10 (incluse o 10)
2. Imprime os números entre 0 e 10 (incluse o 10) com exceção do 5
3. Imprime os números entre 0 e 10 (incluse o 10)
4. Imprime os números entre 1 e 9 (incluse o 10) com 5 em primeiro

<solution style="display:none;">2</solution>

### 13) Qual é o resultado

```js
var medalForScore = function (score) {
  if (score < 3){
    return 'Bronze';
  }
  if (score < 7){
    return 'Silver';
  }
  return 'Gold';
}

console.log(medalForScore(7));
```

#### Opciones

1. Bronze
2. Silver
3. Gold
4. undefined

<solution style="display:none;">3</solution>

### 14) No exemplo a seguir

```js
var square = function (num) {
  return num * num;
};
square(12);
//->144
```

#### Opciones

1. "num" é um parâmetro e o 12 é um argumento
2. "num" e 12 são parâmetros
3. "num" e 12 são argumentos
4. "num" é um agumento e 12 é um parâmetro

<solution style="display:none;">1</solution>
