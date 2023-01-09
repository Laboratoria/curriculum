---
type: quiz
duration: 30min
---

# Quiz 2

## Perguntas

### 1) Que forma de modificar o fluxo de um programa a figura a seguir revela?

![Flujo
bucle](https://camo.githubusercontent.com/48a2fb7be5218c417decdc954fe2e9bf7dc3a3a2/687474703a2f2f656c6f7175656e746a6176617363726970742e6e65742f696d672f636f6e74726f6c666c6f772d6c6f6f702e737667)

#### Opções

1. while
2. loops em geral
3. if
4. if else
5. if else "aninhado" (nested)

<solution style="display:none;">2</solution>

### 2) Qual é o problema com o seguinte código?

```js
do {
  console.log('Hello world');
} while (2 > 3);
```

#### Opções

1. Tem um erro de sintaxe
2. Não utiliza boas práticas
3. A variável não está bem declarada
4. Gera um loop infinito
5. Nenhum, funciona bem e imprime 'hello world' uma vez no console

<solution style="display:none;">5</solution>

### 3) Encontre o erro na seguinte função

```js
let result = 0;

const showSum = (num1, num2) => {
  result = num1 + num2;
  alert('El resultado es ' + result);
};

showSum(if, else);
```

#### Opções

1. A função não está sendo chamada
2. Os parâmetros não estão sendo declarados
3. alert não é uma função
4. Erro de sintaxe. Não se pode utilizar keywords como argumentos

<solution style="display:none;">4</solution>

### 4) A diferença entre undefined e null

#### Opções

1. Não existe, eles são a mesma coisa
2. Não importa
3. `undefined` não tem valor e `null` é um string vazio
4. `undefined` significa que não foi _assinalado_ um valor, enquanto `null`
   significa que _assinalamos_ o valor `null`

<solution style="display:none;">4</solution>

### 5) Qual é o resultado de

```js
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
```

#### Opções

1. imprime os números pares de 0 a 10 (inclusive)
2. imprime os números pares de 0 a 12 (inclusive)
3. imprime os números pares de 2 a 10 (inclusive)
4. imprime os números pares de 2 a 12 (inclusive)

<solution style="display:none;">2</solution>

### 6) O resultado de "Hola" + "mundo" é

#### Opções

1. "Hola Mundo"
2. "Hola mundo"
3. "Holamundo"
4. 'HolaMundo'

<solution style="display:none;">3</solution>

### 7) Qual o resultado de

```js
for (let number = 1; number < 8; number = number * 3) {
  console.log(number);
}
```

#### Opções

1. 1
2. 1, 3, 9
3. 0, 1, 3, 9
4. 1, 3

<solution style="display:none;">4</solution>

### 8) Ao seguinte switch lhe faltam alguns "breaks". Qual seria o resultado de executar o código assim como está?

```js
const weather = 'soleado';

switch (weather) {
  case 'chuvoso':
    console.log('Lembre-se de levar um guarda-chuvas.');
    break;
  case 'ensolarado':
    console.log('Vista-se com roupas leves.');
  case 'nublado':
    console.log('Saia para a rua.');

  default:
    console.log('Tipo de clima desconhecido');
    break;
}
```

#### Opciones

1. Imprime 'Saia para a rua.'
2. Imprime 'Tipo de Clima desconhecido.'
3. Imprime 'Saia para a rua.'" e 'Tipo de Clima desconhecido.'
4. Imprime 'Vista-se com roupas leves.', 'Saia para a rua.' e 'Tipo de Clima
   desconhecido.'

<solution style="display:none;">4</solution>

### 9) Qual é o resultado de

```js
for (let i = 0; i <= 10; i++) {
  if (i == 0) {
    continue;
  } else {
    console.log(i);
  }
}
```

#### Opções

1. Imprime os números inteiros do 0 a 10 (inclusive)
2. Imprime os números inteiros do 1 ao 10 (inclusive)
3. Imprime os números inteiros do 0 ao 10 (inclusive) e depois imprime o número
   0 de novo
4. Imprime os números inteiros do 1 ao 10 (inclusive) e depois imprime o número
   0 de novo

<solution style="display:none;">2</solution>

### 10) Qual o resultado de

```js
var medalForScore = function(score) {
  if (score < 3){
    return 'Bronze';
  }
  if (score < 7){
    return 'silver';
  }
  return 'Gold';
}

console.log(medalForScore(3));
```

#### Opções

1. Bronze
2. Silver
3. Gold
4. undefined

<solution style="display:none;">2</solution>

### 11) Uma função pode retornar múltiplos valores ao mesmo tempo

#### Opções

1. Verdadeiro
2. Falso

<solution style="display:none;">2</solution>

### 12) Os comandos como alert(), prompt() e console.log() são realmente funções

#### Opções

1. Verdadeiro
2. Falso

<solution style="display:none;">1</solution>
