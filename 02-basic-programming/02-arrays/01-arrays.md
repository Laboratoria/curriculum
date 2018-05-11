# 01 - Arrays

* Tipo: `leitura`
* Formato: `individual`
* Duração: `60 min`

***

## Objetivos de Aprendizagem {#objetivos-de-aprendizaje}

* Aprenda o que são vetores \(_arrays_\) e para que servem
* Aprenda a criar, acessar e modificar os dados de um vetor

O texto abaixo é baseado em grande parte, com alguns ajustes, no capítulo 4 de [Eloquent JavaScript](http://eloquentjavascript.net/) , por Marijn Haverbeke, 2014. Tradução em [espanhol](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html) disponível graças ao [hectorip](http://hectorip.github.io/), e capítulo 3 do [JavaScript for Kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf), Nick Morgan, 2015.

## Agrupando e manipulando dados {#agrupando-y-manipulando-data}

Como vimos, grande parte da programação consiste em agrupar e manipular dados. Isso nos permite transformar dados em informações e usar essas informações para resolver problemas. Até agora, pudemos agrupar e manipular dados usando tipos de dados simples, tais como: _numbers_, _booleans_ e _strings_. Com eles, criamos uma série de programas simples. Também aprendemos a modificar o fluxo desses programas, através de estruturas repetitivas, condicionais e funcionais, as quais nos permitiram criar produtos um pouco mais complexos. No entanto, nossos programas tinham muitas limitações porque operávamos apenas com **tipos de dados simples**.

Para resolver problemas mais complexos, precisamos ser capazes de agrupar e manipular dados de uma maneira mais interessante. Felizmente, um ambiente JavaScript nos permite alcançar isso através de _arrays_ e _objects_.

## Por que precisamos de matrizes? {#por-que-necesitamos-arrays}

Digamos, por exemplo, que queiramos representar um conjunto de números: `2`, `3`, `5`, `7` e `11`

Uma opção para representar isso seria:

```javascript
var firstNumber = 2;
var secondNumber = 3;
var thirdNumber = 5;
var fourthNumber = 7;
```

Esta lista é bem estranha e trabalhosa. Isso implica em ter uma variável para cada elemento da nossa lista. Quando, na realidade, devemos ter apenas uma única variável que "contenha" cada um. Imagine se você quiser uma lista de 1.000 elementos!

Outra opção - mais criativa - seria usar uma `string`. Afinal, as _strings_ podem ser de qualquer tamanho, e então podemos colocar muita informação nelas. Poderíamos usar uma cadeia de caracteres \(_string_\) com os números intercalados por um espaço, como esta:

```javascript
var listOfNumbers = '2 3 5 7 11';
```

No entanto, isso também é complicado. Teríamos que encontrar uma maneira de extrair cada elemento de uma `string` \(considerando os espaços entre eles\) e também teríamos que convertê-los para `number` a fim de acessar e manipular cada um dos números.

Felizmente, o Javascript fornece um tipo específico de dados para armazenar sequência de valores. É chamado de `array` \(arranjo ou vetor/matriz\) e é escrito como uma lista de valores entre colchetes, separados por vírgulas.

```javascript
var listOfNumbers = [2, 3, 5, 7, 11];
```

Os arranjos são extremamente úteis para agrupar e manipular dados. É como quando vamos ao mercado e temos nossa "lista de compras". Poderíamos ter uma folha de papel para cada item que queremos comprar. Por exemplo, poderíamos ter uma folha de papel que diz "ovos", outra folha que diz "pão" e outra folha que diz "laranjas". No entanto, a maioria das pessoas escreve todos os itens para comprar em **uma única folha de papel**.

## Acessando informações de um vetor {#accediendo-informacion-de-un-array}

Para obter um elemento de um `array`, a notação com colchetes é usada contento o índice \(_index_\) do elemento desejado. Veja o exemplo abaixo:

```javascript
var listOfNumbers = [2, 3, 5, 7, 11 ];
console.log(listOfNumbers[1]);
// → 3
console.log(listOfNumbers[1 - 1];
// → 2
```

Índice é o número que corresponde a \(ou coincide com\) a posição em que o valor é armazenado. Assim como nas _strings_, o primeiro elemento de um vetor está no índice `0`, o segundo no `1`, o terceiro no `2`, e assim por diante. É por isso que acessar o índice `1 - 1` no vetor acima, ou seja, devolve o número `2` \(índice `0`\).

```javascript
//                   ÍNDICE
//                   0  1  2  3  4
//                   |  |  |  |  |
var listOfNumbers = [2, 3, 5, 7, 11];
```

Se você não tem experiência em programação, habituar-se com essa convenção pode levar algum tempo. Mas a contagem baseada em zero tem uma longa tradição em tecnologia e, desde que a convenção seja seguida consistentemente \(o que é feito em JavaScript\), ela funciona bem. Tome muito cuidado, pois esse descuido é a causa de muitos _bugs_, inclusive para programadores um pouco mais experientes.

## Definindo ou alterando os elementos de um array {#definiendo-o-cambiando-los-elementos-de-un-array}

Podemos usar os índices entre colchetes para definir, alterar ou adicionar elementos a um vetor. Por exemplo, para substituir o primeiro elemento de `arraylistOfNumbers`  pelo número 1, poderíamos fazer o seguinte:

```javascript
var listOfNumbers = [2, 3, 5, 7, 11];
listOfNumbers[0] = 1;

console.log(listOfNumbers);
// → [1, 3, 5, 7, 11]
```

Também podemos usar os índices entre colchetes para adicionar elementos em um vetor. Por exemplo, para adicionar o número 13 ao _array_ `listOfNumbers`, faríamos assim:

```javascript
var listOfNumbers = [2, 3, 5, 7, 11];
listOfNumbers[5] = 13;

console.log(listOfNumbers);
// → [2, 3, 5, 7, 11, 13]
```

Ainda, podemos criar um vetor vazio e definir cada elemento individualmente a seguir, da seguinte maneira:

```javascript
var listOfNumbers = [];

listOfNumbers[0] = 2;
listOfNumbers[1] = 3;
listOfNumbers[2] = 5;
listOfNumbers[3] = 7;
listOfNumbers[4] = 11;

// imprime o vetor no console

console.log(listOfNumbers);
// → [2, 3, 5, 7, 11]
```

## Misturando tipos de dados em _arrays_ {#mezclando-tipos-de-datos-en-arrays}

Os elementos de um _array_ não precisam ser todos do mesmo tipo de dados. Podemos, por exemplo, ter um vetor que contenha um `number` \(o número 3\), uma `string` \("dinossauros"\) e outro `number` \(o número 3627.5\):

```javascript
var mixedArray = [3, 'olá mundo', 3627.5];
console.log(mixedArray[0]);
// → 3
console.log(mixedArray[1]);
// → olá mundo
console.log(mixedArray[2]);
// → 3627.5
```

Podemos até ter um vetor dentro de outro \(algo que muitas pessoas chamam de matriz ou _array_  de 2 dimensões\). Por exemplo, para organizar os dados de perguntas e respostas de um questionário, podemos usar um arranjo no qual cada elemento é um vetor com dois elementos: uma pergunta e uma resposta.

```javascript
var questions = [
  ['Em quantos países a Laboratoria opera?', 3],
  ['Qual é a capital do Peru?', 'Lima'],
  ['O que é dança chilena típica?', 'Cueca'],
  ['Qual é a moeda do México?', 'Peso']
];
```

Para acessar elementos individuais dos vetores internos, basta adicionar um novo par de colchetes com o índice correspondente. Por exemplo, para obter a resposta para a pergunta "Qual é a moeda do México?", nós faríamos:

```javascript
var questions = [
   ['Em quantos países a Laboratoria opera?', 3],
   ['Qual é a capital do Peru?' , 'Lima'],
   ['Qual a dança típica do Chile?' , 'Cueca'],
   ['Qual é a moeda do México?' , 'Peso']
];
console.log(perguntas[3][1]);
// → Peso
```

Quando escrevemos `console.log(questions[3][1])`, estamos dizendo ao JavaScript para procurar o índice 3 do _array_ `questions` \(o qual também é, por sua vez, um _array_: _ _`['Qual é a moeda do México?', 'Peso']`  e, dentro desse vetor, acessar o índice 1 \(_string_ `'Peso'`\) e imprimir o elemento no console.

A seguir, Michelle nos explica os principais conceitos de _arrays_ através de um exemplo:

![Exemplo: array &quot;dinossauros&quot; - pg. 44 - JS for Kids](https://img.youtube.com/vi/-hLSzYr3z44/0.jpg)

