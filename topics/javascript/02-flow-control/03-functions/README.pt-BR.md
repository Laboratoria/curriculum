# Funções

- Tipo: `lectura`
- Formato: `self-paced`
- Duração: `30min`

## Objetivos

- Conhecer o conceito de _Don't Repeat Yourself (DRY)_
- Entender o que são as funções e como afetam o controle de fluxo de um programa
- Conhecer a estrutura das funções em JavaScript
- Entender como transmitir argumentos a uma função
- Entender o conceito de `return` das funções

***

O texto a seguir se baseia em grande medida, com alguns ajustes, ao capítulo 2 e
3do [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn Haverbeke,
2014. Tradução em
[Português](https://github.com/braziljs/eloquente-javascript/blob/master/chapters/01-valores-tipos-operadores.md).

## DRY

Na programação, existe um conceito que você escutará mais de uma vez. Ele diz o
seguinte: _"Don't Repeat Yourself"_, e é comumente conhecido como `DRY`. Em
português significa _"não se repita"_. Se você estiver copiando e colando
pedaços de código, ou se tiver sentenças de código similares ao longo do seu
programa, significa que você está se repetindo. Já vimos este conceito em
prática com o uso de `estruturas repetitivas` (loop): ao invés de ter um mesmo
bloco de código repetido, você pode sustituí-lo por um `for` ou um `while`. Com
as funções você pode alcançar o mesmo objetivo. Vejamos quais são as `funções`,
como usá-las e por que são importantes.

## O que é uma função?

Uma função é uma forma de agrupar código para que ele possa ser reutilizado. As
funções nos permitem executar a mesma peça de código em vários lugares de um
programa sem ter que copiar e colar o código repetidamente. Dito de outra
maneira, uma função é um **pedaço de programa embrulhado em um valor**. Esse
valor pode ser "chamado" várias vezes, em diferentes lugares do teu programa,
para que execute o código que está ali dentro.

Ao longo deste curso temos utilizado funções, porém temos chamado de
_"comandos"_. Os comandos como `alert()`, `prompt()` e `console.log()` são de
fato funções.

## Funções em JavaScript

As funções são o pão de cada dia na programação com JavaScript.

A aplicação mais óbvia das funções é a de definir um novo vocabulário. Criar
novas palavras em uma linguagem humana comum (como o português, inglês ou o
espanhol) é tipicamente algo de mal gosto. Contudo, na programação isto é
indispensável.

Um adulto médio possui umas 20.000 palavras em seu vocabulário. Poucas
linguagens de programação possuem 20.000 comandos incorporados. E o vocabulário
que está disponível na programação tende a ser definido de forma mais precisa, e
portanto menos flexível que em uma linguagem humana. Como consequência,
usualmente _precisamos_ agregar algo do nosso próprio vocabulário para evitar
muitas repetições.

Agrupando fragmentos de código em uma função com um **nome fácil de entender**
(dado que será parte do vocabulário que você está construindo) podemos
estruturar melhor nosso código. Isto porque nos enfocamos em organizar as
funções, ao invés de cada linha de código que as compõem. Ao dividir nosso
código em peças menores e portanto mais fáceis de lidar, podemos ter uma visão
mais completa do que estamos fazendo. Nos permite elevar-nos a um nível superior
de abstração. Como diz o ditado: podemos visualizar a floresta completa, vendo
além das árvores.

## Definindo uma função

A definição de uma função é simplesmente uma definição regular de uma variável,
mas onde o valor dado à variável é uma função. Por exemplo, o código a seguir
define a variável `square` para se referir à _função_ que produz o quadrado de
um número dado:

```js
const square = function (num) {
  return num * num;
};
```

A mesma função usando a sintaxe de _função flecha_ (arrow function):

```js
const square = num => num * num;
```

Uma função é criada por uma expressão que começa com o keyword `function`, ou
pode ser usando a sintaxe de _arrow function_. As funções possuem um conjunto de
_parâmetros_ (no exemplo anterior só temos **um** parâmetro: `num`) e um
_corpo_, que contêm as sentenças a serem executadas. Os parâmetros servem para
"transmitir" valores à função e, assim, mudar seu comportamento segundo os
valores oferecidos. O corpo da função, usando a _keyword_ `function`, precisa
estar sempre fechado em chaves, inclusive quando houver uma única instrução
(como no exemplo anterior), enquanto funções usando _arrow function_ podemos
fazer o retorno implícito quando o corpo possui apenas uma expressão. (que será
implícitamente o valor do retorno).

## Chamando uma função

Para rodar o código dentro de uma função, necessitamos _"invocar, chamar, ou
aplicar"_ a função. Isto se faz escrevendo o nome da função imediatamente
seguido por parênteses `()`. Dentro dos parênteses se inclui o que você quer
"transmitir" à função para usar como parâmetro. Os valores que se transmitem à
função para usar como parâmetros são chamados _argumentos_.

Agregando ao exemplo anterior um chamado à função `square` transmitindo-lhe como
argumento o valor `12` vemos que nos devolve `144` (ou seja, 12 ao quadrado).

```js
const square = function (num) {
  return num * num;
};

square(12);
// → 144
```

## O valor de retorno

Assim como os argumentos são os valores de "entrada" (input) que utiliza uma
função ao ser chamada, o valor de retorno é o valor de saída (output) que
devolve a função (o `144` do exemplo anterior), e que pode ser utilizado em
qualquer lugar do programa. Se uma função não especifica o valor de retorno,
então a função retorna `undefined`.

O valor de retorno se especifica com o _keyword_ `return`. No exemplo anterior,
se especifica que o valor de retorno é o parâmetro multiplicado por si mesmo;
isto é, o parâmetro ao quadrado. O keyword `return` sem uma expressão depois
dele também fará com que a função devolva `undefined`.

Adicionemos uma outra sentença ao exemplo anterior na qual se utilize o valor de
retorno da função `square`:

```js
const square = function (num) {
  return num * num;
};

console.log('El cuadrado de 12 es ' + square(12));
// → El cuadrado de 12 es 144
```

Com esta mudança acontece o seguinte: o valor de retorno que se obtém ao chamar
(ou invocar) a função `square` com o valor `12` de argumento é: `144`. Este se
concatena com o texto `'O quadrado de 12 é '` para formar `'O quadrado de 12 é
144'`; o qual, por sua vez, se transmite como argumento à função `console.log`
para que o imprima no painel de comando.

## Múltiplos parâmetros

Uma função pode ter vários parâmetros ou pode não ter nenhum. No seguinte
exemplo, `makeNoise` não tem parâmetros, enquanto `power` tem dois:

```js
const makeNoise = function () {
  console.log('Pling!');
};

makeNoise();
// → Pling!

const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024
```

A seguir Daniel te explica mais sobre funções:
[![Funções](https://img.youtube.com/vi/68743wkEjiw/0.jpg)](https://www.youtube.com/watch?v=68743wkEjiw)

## Saindo de uma função com `return`

Quando o intérprete JavaScript observa um `return` dentro de uma função,
imediatamente pula fora da função atual e passa o valor retornado ao código que
a chamou. Isto é, qualquer sentença que coloquemos **depois** do `return` em uma
função, **não** será executada.

Uma forma comum de utilizar `return` é para sair da função antecipadamente caso
algum dos argumentos brindados não seja válido; isto é, se não forem o tipo de
argumentos que a função necessita para funcionar corretamente. Por exemplo, a
seguinte função devolve uma cadeia que indica o quinto caracter do seu nome. Se
o nome transmitido à função tem menos de cinco caracteres, a função utiliza
`return` para deixar a função imediatamente. Isto significa que a declaração de
devolução ao final, que te diz a quinta letra do seu nome, nunca se executa.

```js
const fifthLetter = function (name) {
  if (name.length < 5) {
    return;
  }
  return 'A quinta letra do seu nome é' + name[4] + '.';
};
```

## Funções e controle de fluxo

A funções também afetam o controle de fluxo do nosso programa. Com funções
podemos criar estruturas repetitivas (com algo que se chama `recursividade`) e
estruturas condicionais (com, por exemplo, múltiplos valores de `return`). De
fato, as funções são tão versáteis para armar a estrutura de um programa que
existe todo um _paradigma de programação_ baseado em funções. Isto é, existe uma
maneira de pensar na programação que está baseada em funções. Isto se chama o
**paradigma de programação funcional**. Mais adiante estudaremos com mais
profundidade funções e o paradigma de programação funcional. Por enquanto, o
importante é entender que as funções são uma forma de agrupar código para que
possa ser reutilizado.

## Utilizando múltiplos `return` no lugar de `if... else`

Podemos usar vários `return` dentro de diferentes sentenças `if` no corpo de uma
função para que a função devolva um valor diferente, dependendo do argumento
oferecido. Por exemplo, digamos que você está escrevendo um jogo que dá medalhas
aos jogadores conforme a sua pontuação. Uma pontuação menor a 3 é uma medalha de
bronze, uma pontuação de 7 ou mais é ouro, e o que está no meio é prata. Você
poderia utilizar uma função como `medalForScore` para avaliar uma pontuação e
dar o tipo de medalha, como se mostra aqui:

```js
const medalForScore = function (score) {
  if (score < 3) {
    return 'Bronze';
  }
  if (score < 7) {
    return 'Silver';
  }
  return 'Gold';
};
```

Embora estejamos comprovando múltiplas condições, não necessitamos usar
sentenças `if ... else` encadeadas. Utilizamos as sentenças `if ... else` para
garantir que somente uma das sentenças se execute. Quando cada uma das opções
possui sua própria sentença de `return`,  garantimos que se execute somente uma
das opções --- porque, lembre-se, **as funções só podem devolver uma vez**.
