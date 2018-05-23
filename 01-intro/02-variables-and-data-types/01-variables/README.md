# Variáveis

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizagem

- Aprender o que são _variáveis_ e sua utilidade.
- Conhecer as boas práticas de nomeação de variáveis.

***

O texto a continuação se baseia principalmente, com algumas modificações, no
capítulo 2 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](http://hectorip.github.io).

## Variáveis

Você já conhece os tipos de dados mais frequentes no JavaScript. Você consegue
criar, combinar e transformar `numbers`, `strings` e `booleans`. Mas, o que
podemos fazer com isso? Até agora, tudo o que foi trabalhado tem sido para uso
imediato. Ou seja, os novos valores que geramos devem ser imediatamente
utilizados ou se perdem. Segue no seu console o seguinte exemplo:

```js
'Oi, meu nome é ' + 'Michelle' + ' e tenho ' + 19 + ' anos';
// returns: "Oi, meu nome é Michelle e tenho 19 anos"
```

Se quisesse utilizar esse `string` de novo, talvez porque Michelle fez
aniversário e agora queremos que apareça 20 anos no lugar de 19, não poderíamos
fazê-lo. O valor foi perdido.

Para capturar e manter os valores, o JavaScript fornece algo chamado `variável`.
É utilizada assim:

```js
var age = 19;
// returns: undefined
```

A palavra chave (_keyword_) `var` indica que esta frase irá definir uma variável.
É seguida pelo nome da variável (o nome _age_) e, se queremos atribuir
imediatamente um valor, é seguido do operador `=` e uma expressão (o número 19).

A declaração anterior cria uma variável chamada age (ou idade no português) e é
usada para reter o número 19. A console devolve undefined, mas não pense que é
um erro. É o que o JavaScript faz quando um comando não devolve nenhum valor.
Quando você escreve 12 + 5, o console devolve 17. Mas ao declarar uma variável
chamada age atribuindo o valor 19, não há um valor fornecido. É por isso que a
console simplesmente devolve undefined (no restante dos exemplos vamos a omitir
esse undefined devolvido porque não adiciona muito valor na explicação).

Depois que uma variável tem sido definida, o nome dela pode ser usada como uma
expressão. O valor da expressão é o valor que a variável contém atualmente.
Continuemos com o exemplo anterior:

```js
var age = 19;
'Oi, meu nome é ' + 'Michelle' + ' e tenho ' + age + ' anos';
// returns: "Oi, meu nome é Michelle e tenho 19 anos"
```

O console nos ajuda a saber o valor de uma variável. Se escrevemos o nome de uma
variável que foi declarada no console, nos devolve seu valor. Se essa variável
não foi declarada, o console devolve um erro. E se a variável foi declarada, mas
não foi atribuído nenhum valor, o console devolve undefined.

```js
age
// returns: Uncaught ReferenceError: age is not defined
//           at <anonymous>:1:1

var age = 19;
age
// returns: 19

var weight;
weight
// returns: undefined
```

Quando uma variável aponta para um valor, não quer dizer que está ligada a esse
valor para sempre. De fato, são chamadas de variáveis porque seu valor pode
mudar. O operador `=` pode ser utilizado em qualquer momento em variáveis
existentes para desconectá-las do seu valor atual e ser apontadas para um novo.

```js
var age = 19;
// returns: undefined
age = 20;
// returns: 20
'Oi, meu nome é ' + 'Michelle' + ' e tenho ' + age + ' anos';
// returns: "Oi, meu nome é Michelle e tenho 20 anos"
```

Leve em consideração que para atribuir um novo valor, você não tem que utilizar
a _keyword_ `var` novamente. Você só utiliza ela quando precisa _criar_ novas
variáveis.

Muitas vezes é explicado o conceito de variáveis com a analogia de uma caixa: as
variáveis são como "caixa" nas quais você pode colocar algum valor que depois
pode mudar por outro. Contudo, uma analogia mais fiel é pensar nas variáveis como
sendo **tentáculos**. As variáveis realmente não "contém" os valores (como uma
caixa); mas apenas os segura (como um tentáculo). De fato, duas variáveis podem
se referir a um mesmo valor. Um programa pode acessar apenas os valores que
ainda mantém "segurados". Quando você precisa lembrar algo, você cria um novo
tentáculo para "segurá-lo" ou muda um dos tentáculos existentes para segurar
o novo.

## Nomeando Variáveis

No JavaScript, existem certas regras para nomear variáveis. Os nomes das
variáveis:

1. **Não** podem incluir espaços
2. **Não** podem ser palavras reservadas (ou _keywords_), como a palavra `var`
3. **Não** podem começar com números, ainda que podem haver números dentro do
   nome (só não pode no início)
4. **Não** podem conter sinais de pontuação, salvo os símbolos `$` e `_`

Não respeitar alguma das regras anteriores produz um erro por parte do
JavaScript.

Além dessas regras, existem uma série de "sugestões" que você deve levar em
consideração na hora de nomear variáveis. São "sugestões" porque o JavaScript
não devolve nenhum erro se você não as segue. Porém, são "boas práticas" de
escrita de código que fazem com que seu trabalho seja de melhor qualidade. As
sugestões são:

1. Convenção _CamelCase_. Já que não é possível incluir espaços nos nomes das
   variáveis, uma convenção utilizada é a de `CamelCase`. A convenção determina
   que o nome da variável começa com uma letra minúscula e são colocadas em
   maiúscula a primeira letra das palavras que continuam. Por exemplo:
   `numberOfCandies` ou `studentTechScore`. É chamada _CamelCase_ porque
   aparenta a corcova do camelo.
2. Utilizar nomes em inglês. A programação está baseada no inglês, dessa forma é
   uma boa prática que esteja acostumado a escrever seu código em inglês.
3. Utilizar nomes descritivos. Assim como as outras sugestões, algo que você
   sempre tem que considerar é que outras pessoas irão ler seu código e você deve
   fazer o esforço para utilizar nomes descritivos que ajudem o leitor a entender
   melhor o que seu programa faz.

Vamos ver alguns exemplos:

| Nome ruim | Problema | Nome melhor
| ------------| -------- | ------------
| age of fiends | Erro: contém espaços | ageOfFriends
| null | Erro: palavra chave (keyword) | empty
| 1stName | Erro: começa com número | firstName
| full.price | Erro: contém "." | fullPrice
| full_price | não usa CamelCase | fullPrice
| x | não é descritivo | age
| altura | em português | height

## Aumentar e Diminuir

Como programadora, muitas vezes você terá que aumentar ou diminuir o valor de
uma variável numérica por um outro valor. Por exemplo, pode ser que você tenha a
variável `score` que registra a pontuação num jogo de futebol. Toda vez que
alguém faz um gol, a variável `score` deve aumentar em 1. Você consegue fazer
isso da seguinte forma:

```js
var score = 0;
score = score + 1;
score;
// returns > 1
```

Isso pode ser escrito de uma forma mais simples:

```js
var score = 0;
score++;
score;
// returns > 1
```

O mesmo pode ser feito para diminuir o valor de uma variável. Por exemplo, num
videogame você pode precisar de uma variável chamada `lifePoints` que registra
os "pontos de vida" de um jogador. O jogador parte com 100 pontos e cada vez que
um inimigo bate nele, perde 25 pontos. Cada vez que bebe um refrigerante
recupera 10 pontos.

```js
var lifePoints = 100;
lifePoints = lifePoints - 25;
lifePoints
// returns > 75

lifePoints = lifePoints + 10;
lifePoints
// returns > 85
```

Isso pode ser escrito de forma reduzida, assim:

```js
var lifePoints = 100;
lifePoints -= 25;
lifePoints
// returns > 75

lifePoints += 10;
lifePoints
// returns > 85
```

Existem outros operadores similares a `+=` e `-=`. Por exemplo, existem também
`*=` e `/=`:

```js
var balloons = 100;
balloons *= 2;
balloons
// returns > 200

var balloons = 100;
balloons /= 4;
balloons
// returns > 25
```
