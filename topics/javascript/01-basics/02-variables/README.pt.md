---
type: read
duration: 60min
---

# Variáveis

## Objetivos de Aprendizagem

- Aprender o que são _variáveis_ e sua utilidade.
- Conhecer as boas práticas de nomeação de variáveis.

***

O texto a continuação se baseia principalmente, com algumas modificações, no
capítulo 2 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn
Haverbeke, 2014. Tradução em
[Português](https://github.com/braziljs/eloquente-javascript/blob/master/chapters/01-valores-tipos-operadores.md).

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

A palavra chave (_keyword_) `var` indica que esta frase irá definir uma
variável. É seguida pelo nome da variável (o nome _age_) e, se queremos atribuir
imediatamente um valor, é seguido do operador `=` e uma expressão (o número 19).

***

NOTA: Neste primeiro exemplo usamos
[`var`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/var),
que nos dias de hoje é considerada uma forma antiquada de declarar variáveis.
Desdo ES6 (ES2015), preferimos usar a
[`let`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let)
(para declarar variáveis que vamos necessitar _reatribriuir_ um valor diferente)
ou a
[`const`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)
(para declarar variáveis que não vamos reatribuir), ambas variáveis possuem
escopo de bloco, como veremos mais a frente.

***

A declaração anterior cria uma variável chamada `age` (ou idade no português) e
é usada para reter o número `19`. A console devolve `undefined`, mas não pense
que é um erro. É o que o JavaScript faz quando um comando não devolve nenhum
valor. Quando você escreve `12 + 5`, o console devolve `17`. Mas ao declarar uma
variável chamada age atribuindo o valor `19`, não há um valor fornecido. É por
isso que a console simplesmente devolve `undefined` (no restante dos exemplos
vamos a omitir esse `undefined` devolvido porque não adiciona muito valor na
explicação).

Depois que uma variável tem sido definida, o nome dela pode ser usada como uma
_expressão_. O valor da expressão é o valor que a variável contém atualmente.
Continuemos com o exemplo anterior:

```js
// declaramos `age` usando `const` ja que não vamos reatribuir está variável.
const age = 19;
'Oi, meu nome é' + 'Rafael' + 'e tenho' + age + 'anos';
// returns "Oi, meu nome é Rafael e tenho 19 anos"
```

O console nos ajuda a saber o valor de uma variável. Se escrevemos o nome de uma
variável que foi declarada no console, nos devolve seu valor. Se essa variável
não foi declarada, o console devolve um erro. E se a variável foi declarada, mas
não foi atribuído nenhum valor, o console devolve `undefined`.

```js
age
// returns Uncaught ReferenceError: age is not defined
//           at <anonymous>:1:1

const age = 19;
age
// returns 19

let weight;
weight
// returns undefined
```

Quando uma variável aponta para um valor, não quer dizer que está ligada a esse
valor para sempre. De fato, são chamadas de variáveis porque seu valor pode
mudar. O operador `=` pode ser utilizado em qualquer momento em variáveis
existentes (declaradas com `let` ou `var`)para desconectá-las do seu valor atual
e ser apontadas para um novo. (valores declarados em `const` não podem ser
alterados).

```js
let age = 19;
// returns undefined
age = 24;
// returns 24
'Oi, meu nome é' + 'Rafael' + 'e tenho' + age + 'anos';
// returns "Oi, meu nome é Rafael e tenho 24 anos"
```

Leve em consideração que para atribuir um novo valor, você não tem que utilizar
a _keyword_ `var` ou `let` novamente. Você só utiliza ela quando precisa _criar_
novas variáveis.

Muitas vezes é explicado o conceito de variáveis com a analogia de uma caixa: as
variáveis são como "caixa" nas quais você pode colocar algum valor que depois
pode mudar por outro. Contudo, uma analogia mais fiel é pensar nas variáveis
como sendo **tentáculos**. As variáveis realmente não "contém" os valores (como
uma caixa); mas apenas os segura (como um tentáculo). De fato, duas variáveis
podem se referir a um mesmo valor. Um programa pode acessar apenas os valores
que ainda mantém "segurados". Quando você precisa lembrar algo, você cria um
novo tentáculo para "segurá-lo" ou muda um dos tentáculos existentes para
segurar o novo.

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
   sempre tem que considerar é que outras pessoas irão ler seu código e você
   deve fazer o esforço para utilizar nomes descritivos que ajudem o leitor a
   entender melhor o que seu programa faz.

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
let score = 0;
score = score + 1;
score;
// returns 1
```

Isso pode ser escrito de uma forma mais simples:

```js
let score = 0;
score++;
score;
// returns 1
```

O mesmo pode ser feito para diminuir o valor de uma variável. Por exemplo, num
videogame você pode precisar de uma variável chamada `lifePoints` que registra
os "pontos de vida" de um jogador. O jogador parte com 100 pontos e cada vez que
um inimigo bate nele, perde 25 pontos. Cada vez que bebe um refrigerante
recupera 10 pontos.

```js
let lifePoints = 100;
lifePoints = lifePoints - 25;
lifePoints
// returns 75

lifePoints = lifePoints + 10;
lifePoints
// returns 85
```

Isso pode ser escrito de forma reduzida, assim:

```js
let lifePoints = 100;
lifePoints -= 25;
lifePoints
// returns 75

lifePoints += 10;
lifePoints
// returns 85
```

Existem outros operadores similares a `+=` e `-=`. Por exemplo, existem também
`*=` e `/=`:

```js
let balloons = 100;
balloons *= 2;
balloons
// returns 200

let balloons = 100;
balloons /= 4;
balloons
// returns 25
```

## O escopo de uma variável

O _escopo_ de uma variável é o local onde ela pode ser encontrada. Por exemplo:

```js
const foo = () => {
  let x;
}
```

Aqui, o _direct scope_ (escopo direto) de `x` é a função `foo`. Esta variável
poderá ser acessada apenas dentro do corpo da função `foo`, mas não fora dela.

Normalmente, no JavaScript podíamos apenas criar um novo escopo quando criávamos
uma nova função. Mas desde a atualização do ES6 (ES2015) temos a `let` e a
`const`, que introduziram o conceito de _block scope_ no JavaScript.

### Lexical scoping

As variáveis no JavaScript são _lexically scoped_ (de escopo léxico), o que
significa que a estrutura estática do programa determina o escopo da variável,
que dizer que não é influenciada pelo local onde a função é chamada. Em palavras
mais simples, significa que as variáveis declarada dentro de um _escopo_ (uma
função, ou um bloco indicado pelos caracteres `{}` no caso da `let` e `const`),
não são visíveis fora desse _escopo_.

### Nested Scopes (escopos aninhados)

Se o escopo está aninhado dentro de um escopo direto de uma variável, a
variável será acessível a todos os escopos:

```js
function foo(arg) {
  function bar() {
    console.log(`arg: ${arg}`);
  }
  bar();
}

console.log(foo('hello')); // arg: hello
```

O escopo direto de `arg` é `foo`, mas também é acessível no escopo aninhado
`bar`. Com respeito ao aninhamento, `foo` é um _outer scope_ (escopo externo) e
`bar` é um _inner scope_ (escopo interno).

### Shadowing (sombra)

Sim, é possível declarar uma variável que tem o mesmo nome em um escopo interno
de uma função, com isso o acesso a variável externa é bloqueado no escopo
interno e todo os escopos aninhados dentro dela. Mudanças nas variáveis internas
não afetam a variável externa, a qual é acessível fora do escopo interno.
Exemplo:

```js
let x = 'global';
function f() {
  let x = 'local';
  console.log(x); // local
}
f();
console.log(x); // global
```

Dentro da função `f`, a variável `x` é "sombreada" pela variável local `x`.

***

## Diferença entre contexto e alcance

Cada invocação de função tem um certo alcance com o contexto associado a ela.
Fundamentalmente, o alcance é um conceito associado a funções enquanto que o
contexto é associado ao objeto. Em outras palavras, o alcance se refere a
acessibilidade de variável de uma função quando é chamada e é única para cada
invocação. Em contraste, o contexto é sempre o mesmo valor chamado de `this`
cuja a referência é sempre o objecto que está executando o código.

### Alcance de variáveis

As variáveis podem ser declaradas com **alcance local** ou **alcance global**, o
qual estabelece a sua acessibilidade de diferentes alcances no tempo de
execução. Qualquer variável definida como global será acessível no tempo de
execução em qualquer alcance, desde que tenha sido declarado fora do corpo de um
função.

Em contraste, as variáveis locais existem somente dentro do corpo de uma função
ou bloco. O alcance local de uma variável é somente definida a partir do corpo
de uma função ou bloco que a contenha.

## Declaração de variáveis no escopo local com "let""

A "palavra" `let` declara uma variável de alcance local, a qual, opcionalmente,
pode  ser inicializada com algum valor e permite ser reatribuída (diferente de
`const`).

O alcance da `let` é local ao bloco, a declaração ou expressão onde se está
usando. O que diferencia a palavra `let` da palavra `var`, a qual defini a
variável global ou local em uma função sem se importar com o escopo de bloco.

Vejamos alguns exemplos:

```js
if (x > y) {
  let gamma = 12.7 + y;
  i = gamma * x;
}
```

No exemplo a cima, `gama` existe apenas dentro do escopo do `if`.

```js
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
```

Podemos utilizar `let` para que a variável seja local ao escopo do laço `for`.
Se em seu lugar usássemos `var`, a variável seria visível em toda a função
dentro do laço.

```js
(function () {
  if (true) {
    let x = 'Olá mundo';
  }
  console.log(x);
  // Dá error, porque "x" foi definida dentro de "if"
})();
```

No exemplo, `console.log(x)` não tem acesso a `let x = "Olá mundo"` e da erro
porque `x` foi declarado dentro do laço `if`.

No seguinte exemplo o console imprime `Olá Ju`, ja que a variável `x` no bloco
do `if` se mantém dentro do seu escopo.

```js
(function () {
  let x = 'Olá Ju';

  if (true) {
    let x = 'Olá Palomita';
  }
  console.log(x);
  // Imprime Olá Ju
})();
```

## Variáveis não reatribuídas com "const"

As variáveis somente de leitura são outra novidade do ECMAScript 6, com a
introdução da nova palavra reservada `const`. Qualquer variável declarada como
constante não poderá ser reatribuída.

Vejamos o exemplo:

```js
(function () {
  const hello = 'hello world';
  hello = 'Olá mundo';
  // Acontecerá um ERROR, já que `hello` não pode ser reatribuído
})();
```

Neste exemplo vemos que desde o momento que declaramos a constante `hello`, seu
valor foi blindado e o interpretado lançará um erro quanto tentar reatribuir um
novo valor.

```js
(function () {
  const PI;
  PI = 3.15;
  // Acontecerá um ERROR, já que tentamos alterar o valor de `PI`, mesmo ele não
  // tendo valor
})();
```

Mas, o que acontece quando o valor de uma variável é um objeto, ou array?

```js
const user = {
  name: 'Adriana',
  surname: 'Arantes',
  age: 60
};

/**
 * A seguinte sentença funciona, pois estamos modificando a propriedade do
 * objeto, e não o valor em si, que é a referência do objeto, a qual não é
 * alterada.
 **/

user.name = 'João';

user.age = 'trinta'; // alterar o tipo de uma propriedade também funciona

console.log(user); // {name: 'João', surname: 'Arantes', age: 'trinta'}

// Mas se atribuímos um novo valor para `user` vemos um erro
user = 'Caro Covarrubias'; // Erro, não é permitido
```
