# Funções

- Tipo: `leitura`
- Formato: `individual`
- Duração: `60min`

***

O texto a seguir se baseia em grande medida, com alguns ajustes, aos
capítulos 2 e 3 do [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn
Haverbeke, 2014. Tradução em
[Português](http://braziljs.github.io/eloquente-javascript/chapters/valores-tipos-operadores)
, e ao capítulo 6 do
[JavaScript for kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf),
Nick Morgan, 2015;

## O que é uma função?

Uma função é uma forma de agrupar código para que ele possa ser reutilizado. As
funções nos permitem executar a mesma peça de código em vários lugares de um
programa sem ter que copiar e colar o código repetidamente. Dito de outra
maneira, uma função é um **pedaço de programa embrulhado em um valor**. Esse valor
pode ser "chamado" várias vezes, em diferentes lugares do teu programa, para que
execute o código que está ali dentro.

Ao longo deste curso temos utilizado funções, porém temos
chamado de _"comandos"_. Os comandos como `alert()`, `prompt()` e `console.log()`
são de fato funções.

## Funções em JavaScript

As funções são o pão de cada dia na programação com JavaScript.

A aplicação mais óbvia das funções é a de definir um novo vocabulário.
Criar novas palavras em uma linguagem humana comum (como o português, inglês ou
o espanhol) é tipicamente algo de mal gosto. Contudo, na programação isto é
indispensável.

Um adulto médio possui umas 20.000 palavras em seu vocabulário. Poucas linguagens
de programação possuem 20.000 comandos incorporados. E o vocabulário que
está disponível na programação tende a ser definido de forma mais precisa, e
portanto menos flexível que em uma linguagem humana. Como consequência,
usualmente _precisamos_ agregar algo do nosso próprio vocabulário para evitar
muitas repetições.

Agrupando fragmentos de código em uma função com um **nome fácil de
entender** (dado que será parte do vocabulário que você está construindo) podemos
estruturar melhor nosso código. Isto porque nos enfocamos em organizar as
funções, ao invés de cada linha de código que as compõem. Ao dividir nosso
código em peças menores e portanto mais fáceis de lidar, podemos ter uma
visão mais completa do que estamos fazendo. Nos permite elevar-nos a um nível
superior de abstração. Como diz o ditado: podemos visualizar a floresta
completa, vendo além das árvores.

## Principios para funções bem escritas

- **Don't Repeat Yourself (DRY)**: É muito comum que ao longo do
  desenvolvimento de uma solução encontremos um padrão que se repete ao longo
  de nosso código. Uma vez identificado um padrão, é hora de escrever uma
  função, objeto ou módulo que encapsule o padrão encontrado para que seja
  reutilizado facilmente. Isso ajuda também se encontrarmos algum *bug* ou
  quisermos adicionar alguma funcionalidade, só precisaremos fazer em um lugar.
  Além disso, escrevendo uma função reutilizável obriga você a analisar o
  padrão do problema, o que ajudar ter a funcionalidade relacionada de maneira
  agrupada.

- **Do One Thing (DOT)**: Cada função deve fazer somente uma coisa e fazê-la o
  melhor possível. Seguindo este princípio, você escreverá funções mais
  reutilizáveis, legíveis e fáceis de depurar.

- **Keep It Simple Stupid (KISS)**: Se as funções devem fazer somente uma
  coisa, é melhor fazê-la claramente mantendo a simplicidade e não adicionando
  complexidade desnecessária para resolver um problema. Isto não quer dizer que
  a solução seja ótima, mas que pode ser legível para poder dar manutenção ao
  longo do tempo.

- **Less Is More**: Para alcançar a maior legibilidade possível e reduzir a
  tentação de fazer mais de uma coisa, as funções devem ser tão pequenas quanto
  possível. Se a função se torna muito longa, é melhor considerar separá-la em
  subtarefas e dados ao longo de funções e objetos.

## Declarando uma função

A declaração de uma função é simplesmente a declaração de uma variável comum na
qual o valor dado a tal variável resulta ser uma função. Por exemplo, o código
a seguir define a variável `square` para fazer referência à função que retorna
o quadrado de um dado número:

```js
  function square(num) {
    return num * num;
  };

  console.log(square(12));
  // -> 144
```

Uma função é criada por uma expressão que começa com o keyword `function`.
As funções possuem um conjunto de _parâmetros_ (no exemplo anterior só
temos **um** parâmetro: `num`) e um _corpo_, que contêm as sentenças a
serem executadas. Os parâmetros servem para "transmitir" valores à função e,
assim, mudar seu comportamento segundo os valores oferecidos. O corpo da
função precisa estar sempre fechado em chaves, inclusive quando
houver uma única instrução (como no exemplo anterior).

## Chamando uma função

Para rodar o código dentro de uma função, necessitamos _"invocar, chamar, ou
aplicar"_ a função. Isto se faz escrevendo o nome da função
imediatamente seguido por parênteses. Dentro dos parênteses se inclui
o que você quer "transmitir" à função para usar como parâmetro. Os valores que
se trasnmitem à função para usar como parâmetros são chamados _argumentos_.

Agregando ao exemplo anterior um chamado à função `square` transmitindo-lhe como
argumento o valor `12` vemos que nos devolve `144` (ou seja, 12 ao quadrado).

```js
function square(num) {
  return num * num;
};

square(12);
// → 144
```

## O valor de retorno

Assim como os argumentos são os valores de "entrada" (input) que utiliza uma
função ao ser chamada, o valor de retorno é o valor de saída (output) que
devolve a função (o `144` do exemplo anterior), e que pode ser utilizado
em qualquer lugar do programa. Se uma função não especifica o valor de
retorno, então a função retorna `undefined`.

O valor de retorno se especifica com o _keyword_ `return`. No exemplo
anterior, se especifica que o valor de retorno é o parâmetro multiplicado por
si mesmo; isto é, o parâmetro ao quadrado. O keyword `return` sem uma
expressão depois dele também fará com que a função devolva `undefined`.

Adicionemos uma outra sentença ao exemplo anterior na qual se utilize o
valor de retorno da função `square`:

```js
function square(num) {
  return num * num;
};

console.log('O quadrado de 12 é ' + square(12));
// → O quadrado de 12 é 144
```

Com esta mudança acontece o seguinte: o valor de retorno que se obtém ao
chamar (ou invocar) a função `square` com o valor `12` de argumento é: `144`.
Este se concatena com o texto `'O quadrado de 12 é '` para formar
`'O quadrado de 12 é 144'`; o qual, por sua vez, se transmite como argumento à
função `console.log` para que o imprima no painel de comando.

## Múltiplos parâmetros

Uma função pode ter vários parâmetros ou pode não ter nenhum. No
seguinte exemplo, `makeNoise` não tem parâmetros, enquanto `power` tem
dois:

```js
function makeNoise() {
  console.log('Pling!');
};

makeNoise();
// → Pling!

function power(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
  result *= base;
  return result;
};

console.log(power(2, 10));
// → 1024
```

A seguir Michelle te explica funções com um exemplo do livro JavaScript
for Kids.

[![ejercicio guiado JS for Kids pg 128 funcion de imprimir caras](https://img.youtube.com/vi/Y0NgsjdumS8/0.jpg)](https://www.youtube.com/watch?v=Y0NgsjdumS8)

## Saindo de uma função com `return`

Quando o intérprete JavaScript observa um `return` dentro de uma função,
imediatamente pula fora da função atual e passa o valor retornado ao
código que a chamou. Isto é, qualquer sentença que coloquemos **depois**
do `return` em uma função, **não** será executada.

Uma forma comum de utilizar `return` é para sair da função antecipadamente
caso algum dos argumentos brindados não seja válido; isto é, se não
forem o tipo de argumentos que a função necessita para funcionar corretamente.
Por exemplo, a seguinte função devolve uma cadeia que indica o quinto
caracter do seu nome. Se o nome transmitido à função tem menos de cinco
caracteres, a função utiliza `return` para deixar a função imediatamente.
Isto significa que a declaração de devolução ao final, que te diz a quinta
letra do seu nome, nunca se executa.

```js
function fifthLetter(name) {
  if (name.length < 5) {
    return;
  }
  return 'A quinta letra do seu nome é ' + name[4] + '.';
};
```

## Funções e controle de fluxo

A funções também afetam o controle de fluxo do nosso programa. Com
funções podemos criar estruturas repetitivas (com algo que se chama
`recursividade`) e estruturas condicionais (com, por exemplo, múltiplos valores
de `return`). De fato, as funções são tão versáteis para armar a
estrutura de um programa que existe todo um _paradigma de programação_ baseado
em funções. Isto é, existe uma maneira de pensar na programação
que está baseada em funções. Isto se chama o **paradigma de programação funcional**.
Mais adiante estudaremos com mais profundidade funções e o paradigma de
programação funcional. Por enquanto, o importante é entender que as funções
são uma forma de agrupar código para que possa ser reutilizado.

Vejamos um exemplo para criar uma estrutura condicional com funções:

## Utilizando múltiplos `return` ao invés de `if... else`

Podemos usar vários `return` dentro de diferentes sentenças `if` no corpo
de uma função para que a função devolva um valor diferente, dependendo do
argumento oferecido. Por exemplo, digamos que você está escrevendo um jogo que
dá medalhas aos jogadores conforme a sua pontuação. Uma pontuação menor
a 3 é uma medalha de bronze, uma puntuação de 7 ou mais é ouro, e o que está no
meio é prata. Você poderia utilizar uma função como `medalForScore` para
avaliar uma pontuação e dar o tipo de medalha, como se mostra aqui:

```js
function medalForScore(score) {
  if (score < 3) {
    return 'Bronze';
  }
  if (score < 7) {
    return 'Silver';
  }
  return 'Gold';
};
```

Embora estejamos comprovando múltiplas condições, não necessitamos usar sentenças
`if ... else` encadeadas. Utilizamos as sentenças `if ... else` para
garantir que somente uma das sentenças se execute. Quando cada
uma das opções possui sua própria sentença de `return`,  garantimos que se
execute somente uma das opções --- porque, lembre-se, **as funções só
podem devolver uma vez**.

## Avançando com funções

### Terminologia: "Parâmetro" vs. "Argumento"

Os termos `parâmetro` e `argumento` são frequentemente usados para se referirem
à mesma coisa já que é possível entender ao que se referem. Contudo, a seguir
mostramos uma regra para diferenciá-los.

- **Parâmetros** são utilizados para definir uma função: No exemplo a seguir,
  `param1` e `param2` são parâmetros:

```js
function foo(param1, param2) {
  // ...
}
```

- **Argumentos** são utilizados para invocar uma função. No exemplo a seguir,
  `3` e `7` são argumentos:

```js
foo(3, 7);
```

### Criação de Funções

Nesta seção veremos 2 maneiras de criar uma função:

- Por meio de uma _function declaration_ (declaração de uma função).
- Por meio de uma _function expression_ (função como expressão).

#### Function Declarations

A seguir temos uma declaração de função:

```js
function add(x, y) {
  return x + y;
}

console.log(add(2, 3)); // 5
```

Em outras palavras, uma _function declaration_ consiste na palavra chave
reservada _function_, uma lista de parâmetros para a função, delimitados por
parênteses e vírgulas, e a sentença JavaScript que define a função, delimitada
por chaves.

### Function Expressions

Uma _function expression_ produz um valor - um objeto de função. Por exemplo:

```js
var add = function(x, y) {
  return x + y;
};

console.log(add(2, 3)); // 5
```

O código anterior atribui o resultado de uma função como expressão para a
variável `add` e pode ser chamada por meio desta variável. Neste tipo de função
é possível atribuir uma função a uma variável, passar como parâmetros de outra
função e outras coisas mais. Devido a este tipo de função não possuir um nome,
podem ser chamadas de _anonymous function expressions_ (funções anônimas).

#### Named Function Expressions

É possível nomear uma função como uma expressão. As
_named function expressions_ (funções que se expressam por nome) permitem à
função fazer referências a si mesma. Vemos refletida sua utilidade quando
desejamos aplicar recursividade. Por exemplo:

```js
var factorial = function fact(number) {
  if (number <= 1) {
    return 1;
  }
  return number * fact(number - 1);
};

console.log(factorial(3)); // 6
```

### Arrow Functions

#### Diferenças entre _arrow functions_ e funções clássicas

Uma das novidades mais interessantes de ES6 são as denominadas
**funções seta**, ou *arrow functions*. As funções setas são, como seu nome
indica, definidas por meio de uma nova sintaxe que utiliza uma "seta" (`=>`).
As funções seta se comportam de maneira sensivelmente diferente das funções
tradicionais de JavaScript. A seguir vamos mostrar as suas diferenças, mas não
se importe se não entender elas agora, iremos voltar para elas ao decorrer
do bootcamp:

- **Não podem ser chamadas com `new`**: Como não possuem um método construtor,
  não podem ser executadas como construtores. As funções seta dispararão um
  erro se forem utilizadas com `new`.
- **Não há protótipo**: Como não possuem construtor, tampouco é necessário um
  protótipo. Logo, não existirá a propriedade `prototype` e uma função seta.
- **Não criam um novo contexto**. O valor de `this`, `super`, `arguments` e
  `new.target` dentro da função será o mesmo que na função tradicional
  (*non-arrow*) mais próxima.
- **Não pode trocar `this`**: O valor de `this` dentro da função seta permanece
  imutável ao longo de todo o ciclo de vida da função.
- **Não existe objeto `arguments`**: Somente é possível atribuir parâmetros a
  uma função seta mediante parâmetros nomeados e *rest parameters*.
- **Não é possível duplicar parâmetros com o mesmo nome**: Tanto no modo
  estrito como no não estrito, diferente das funções clássicas, que não
  permitem somente o modo estrito.

### Sintaxe

O exemplo mais simples de uma *arrow functions* é o a seguir, embora vejamos
nos exemplos seguintes que podem existir diversas variações.

```js
// ES6
const echo = text => text;

echo("banana");
//return "banana"
```

Esta função seria equivalente a seguinte:

```js
// ES5
var echo = function(text) {
  return text;
};

echo("banana");
//return "banana"
```

Como com qualquer função, podemos passar tantos argumentos quanto quisermos
para a função:

```js
const sum = (a, b) => a + b;
console.log(sum(1, 1)); // 2
```

Ou nenhum, claro:

```js
const greet = () => 'Olá, estrangeiro!';
console.log(greet()); // Olá, estrangeiro!
```

Se quisermos realizar operações mais complicadas, podemos usar chaves e definir
um valor de retorno:

```js
const bhaskara = (a, b, c) => {
  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    return "Não tem raízes reais";
  } else if (delta === 0) {
    return `Só tem uma raiz: ${-b / (2 * a)}`
  } else {
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `Raiz 1:${raiz1} - Raiz 2:${raiz2}`;
  }
};

bhaskara(1, -5, 6); // 'Raiz 1:3 - Raiz 2:2'
```