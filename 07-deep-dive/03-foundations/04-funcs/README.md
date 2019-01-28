# Funções

* Tipo: `leitura`
* Formato: `individual`
* Duração: `45min`

***

<iframe src="https://goo.gl/hsqvjb" frameborder="0" width="684" height="430"
allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
</iframe>

Veremos com profundidade o tema das funções, aproveitando que JavaScript é fortemente influenciada pela programação funcional em seu projeto e oferece características importantes como atribuir funções a uma variável, passar como parâmetro de outra função, trocar o escopo de variáveis, atribuir como valor uma propriedade de objeto, etc.

As funções são blocos de construção de aplicações que englobam múltiplas sentenças de código. São particularmente importantes em JavaScript porque suportam características como `first-class functions`, `functions as objects`, `runtime function definition` e outras que veremos nesta lição.

A seguir, são listados alguns princípios que ajudarão você a escrever funções melhores:

* **Don't Repeat Yourself (DRY)**: É muito comum que ao longo do desenvolvimento de uma solução encontremos um padrão que se repete ao longo de nosso código. Uma vez identificado um padrão, é hora de escrever uma função, objeto ou módulo que encapsule o padrão encontrado para que seja reutilizado facilmente. Isso ajuda também se encontrarmos algum *bug* ou quisermos adicionar alguma funcionalidade, só precisaremos fazer em um lugar. Além disso, escrevendo uma função reutilizável obriga você a analisar o padrão do problema, o que ajudar ter a funcionalidade relacionada de maneira agrupada.

* **Do One Thing (DOT)**: Cada função deve fazer somente uma coisa e fazê-la o melhor possível. Seguindo este princípio, você escreverá funções mais reutilizáveis, legíveis e fáceis de depurar.

* **Keep It Simple Stupid (KISS)**: Se as funções devem fazer somente uma coisa, é melhor fazê-la claramente mantendo a simplicidade e não adicionando complexidade desnecessária para resolver um problema. Isto não quer dizer que a solução seja ótima, mas que pode ser legível para poder dar manutenção ao longo do tempo.

* **Less Is More**: Para alcançar a maior legibilidade possível e reduzir a tentação de fazer mais de uma coisa, as funções devem ser tão pequenas quanto possível. Se a função se torna muito longa, é melhor considerar separá-la em subtarefas e dados ao longo de funções e objetos.

***

## Declarando uma função

A declaração de uma função é simplesmente a declaração de uma variável comum na qual o valor dado a tal variável resulta ser uma função. Por exemplo, o código a seguir define a variável `square` para fazer referência à função que retorna o quadrado de um dado número:

```js
  var square = function(x) {
    return x * x;
  };

  console.log(square(12));
  // -> 144
```

***

Funções são valores que podem ser chamados (invocados). Uma maneira de definir uma função é chamada uma `function declaration` ou `declaração de função`. Por exemplo, o código a seguir define uma função `id` que possue um parâmetro simples `x`:

```js
function id(x) {
  return x;
}
```

A instrução `return` retorna um valor da função `id`. Você pode chamar uma função por meio de seu nome, seguida de seus `argumentos` entre parênteses:

```js
// `>` emula o prompt que aparece no console do navegador
> id('hello');
'hello'
```

Se nada é retornado pela função, `undefined` é retornado (implicitamente):

```js
> function f() { }
> f();
undefined
```

Esta seção mostrou somente uma maneira de definir e chamar uma função. Outras formas serão mostradas em breve.

## Os 3 papéis das funções em JavaScript

Uma vez definida uma função, ela pode realizar vários papéis:

### Nonmethod function (função normal)

Você pode chamar uma função diretamente como vimos até o momento. Aqui um exemplo de chamada:

```js
id('hello');
```

Por convenção, os nomes destas funções _normais_ começam com letra minúscula seguindo o estilo **lowerCamelCase**.

### Construtor

Você pode invocar uma função por meio do operador `new`. Ele é utilizado para criação de objetos. Aqui um exemplo de invocação:

```js
new Date();
```

Por convenção, os nomes dos construtores começam com letra maiúscula, seguindo o estilo **UpperCamelCase**.

### Método

Você pode armazenar uma função em uma propriedade de um objeto, o que o converte em um _método_. Aqui um exemplo de como invocar um método definido em um objeto `obj`:

```js
obj.method();
```

Por convenção, os nomes dos métodos seguem o estilo das funções normais (_lowerCamelCase_).

## Terminologia: "Parâmetro" vs. "Argumento"

Os termos `parâmetro` e `argumento` são frequentemente usados para se referirem à mesma coisa já que é possível entender ao que se referem. Contudo, a seguir mostramos uma regra para diferenciá-los.

* **Parâmetros** são utilizados para definir uma função: No exemplo a seguir, `param1` e `param2` são parâmetros:

  ```js
  function foo(param1, param2) {
    // ...
  }
  ```
* **Argumentos** são utilizados para invocar uma função. No exemplo a seguir, `3` e `7` são argumentos:

  ```js
  foo(3, 7);
  ```

## Criação de Funções

Nesta seção veremos 3 maneiras de criar uma função:

* Por meio de uma _function expression_ (função como expressão).
* Por meio de uma _function declaration_ (declaração de uma função).
* Por meio do construtor `Function()`.

Todas as funções são objetos, instâncias de `Function`:

```js
function id(x) {
  return x;
}

console.log(id instanceof Function); // true
```
Para tal, as funções obtêm seus métodos de `Function.prototype`.

### Function Expressions

Uma _function expression_ produz um valor - um objeto de função. Por exemplo:

```js
var add = function(x, y) {
  return x + y;
};

console.log(add(2, 3)); // 5
```

O código anterior atribui o resultado de uma função como expressão para a variável `add` e pode ser chamada por meio desta variável. Neste tipo de função é possível atribuir uma função a uma variável, passar como parâmetros de outra função e outras coisas mais. Devido a este tipo de função não possuir um nome, podem ser chamadas de _anonymous function expressions_ (funções anônimas).

#### Named Function Expressions

É possível nomear uma função como uma expressão. As _named function expressions_ (funções que se expressam por nome) permitem à função fazer referências a si mesma. Vemos refletida sua utilidade quando desejamos aplicar recursividade. Por exemplo:

```js
var factorial = function fact(number) {
  if (number <= 1) {
    return 1;
  }
  return number * fact(number - 1);
};

console.log(factorial(3)); // 6
```

**Nota:** Os nomes das funções como expressão com nome só são acessíveis dentro da função:

```js
var repeat = function me(n, str) {
  return n > 0 ? str + me(n-1, str) : '';
};

console.log(repeat(3, 'Yeah')); // YeahYeahYeah
console.log(me); // ReferenceError: me is not defined
```

### Function Declarations

A seguir temos uma declaração de função:

```js
function add(x, y) {
  return x + y;
}
```

O código anterior é parecido com o de uma função como expressão, mas é uma instrução. De certa maneira, é equivalente ao código a seguir:

```js
var add = function(x, y) {
  return x + y;
};
```

Em outras palavras, uma _function declaration_ consiste na palavra chave reservada _function_, uma lista de parâmetros para a função, delimitados por parênteses e vírgulas, e a sentença JavaScript que define a função, delimitada por chaves.

### Function Constructor

O construtor `Function()` avalia código JavaScript armazenado em strings. Por exemplo, o código a seguir é equivalente aos dos exemplos anteriores:

```js
var add = new Function('x', 'y', 'return x + y');
```

No entanto, esta maneira de definir uma função é lenta e deixa o código entre strings (ficam inacessíveis a ferramentas, por exemplo, de depuração com _Dev Tools_). Portanto é melhor utilizar _function expression_ ou uma _function declaration_ se for possível.

## Hoisting

**Hoisting** significa "elevar para o início do escopo". _Function declarations_ são elevadas (_hoisted_) completamente, enquanto as declarações de variáveis só parcialmente. 

_Function declarations_ são completamente elevadas. Isso permite chamar uma função antes de sua declaração:

```js
welcome(); // 'Welcome to CE - JS Deep Dive'
function welcome() { // esta função é elevada - hoisting
  console.log('Welcome to CE - JS Deep Dive');
}
```

A razão pela qual o código anterior funciona é que o motor de JavaScript move a declaração da função `welcome` para o início do escopo. Ele acaba executando como se estivesse escrito da seguinte maneira:

```js
function welcome() { // esta função é elevada - hoisting
  console.log('Welcome to CE - JS Deep Dive');
}
welcome(); // 'Welcome to CE - JS Deep Dive'
```

As declarações de variáveis são elevadas também, mas somente as declarações mas não as atribuições. Portanto, definir uma função como expressão atribuindo a uma variável acaba em um erro no exemplo anterior:

```js
welcome(); // TypeError: undefined is not a function
var welcome = function welcome() {
  console.log('Welcome to CE - JS Deep Dive');
};
```

Somente as declarações são elevadas. O motor de JavaScript executa o código anterior como se estivesse escrito da seguinte maneira:

```js
var welcome; // undefined
welcome(); // TypeError: undefined is not a function
welcome = function welcome() {
  console.log('Welcome to CE - JS Deep Dive');
};
```

***

## Arrow Functions

### Diferenças entre _arrow functions_ e funções clássicas

Uma das novidades mais interessantes de ES6 são as denominadas **funções seta**, ou *arrow functions*. As funções setas são, como seu nome indica, definidas por meio de uma nova sintaxe que utiliza uma "seta" (`=>`). As funções seta se comportam de maneira sensivelmente diferente das funções tradicionais de JavaScript. A seguir, algumas de suas diferenças:

* **Não podem ser chamadas com `new`**: Como não possuem um método construtor, não podem ser executadas como construtores. As funções seta dispararão um erro se forem utilizadas com `new`.
* **Não há protótipo**: Como não possuem construtor, tampouco é necessário um protótipo. Logo, não existirá a propriedade `prototype` e uma função seta.
* **Não criam um novo contexto**. O valor de `this`, `super`, `arguments` e `new.target` dentro da função será o mesmo que na função tradicional (*non-arrow*) mais próxima.
* **Não pode trocar `this`**: O valor de `this` dentro da função seta permanece imutável ao longo de todo o ciclo de vida da função.
* **Não existe objeto `arguments`**: Somente é possível atribuir parâmetros a uma função seta mediante parâmetros nomeados e *rest parameters*.
* **Não é possível duplicar parâmetros com o mesmo nome**: Tanto no modo estrito como no não estrito, diferente das funções clássicas, que não permitem somente o modo estrito.

### Sintaxe

O exemplo mais simples de uma **arrow functions* é o a seguir, embora vejamos nos exemplos seguintes que podem existir diversas variações.

```js
// ES6
const echo = text => text;
```

Esta função seria equivalente a seguinte:

```js
// ES5
var echo = function(text) {
  return text;
};
```

Nos dois casos, a execução da função daria a seguinte saída:

```js
console.log(echo('Olá Mundo!')); // Olá Mundo!
```

Como com qualquer função, podemos passar tantos argumentos quanto quisermos para a função:

```js
const sum = (a, b) => a + b;
console.log(sum(1, 1)); // 2
```

Ou nenhum, claro:

```js
const greet = () => 'Olá, estrangeiro!';
console.log(greet()); // Olá, estrangeiro!
```

Se quisermos realizar operações mais complicadas, podemos usar chaves e definir um valor de retorno:

```js
const resize = ({x, y}, ratio) => {
  return {
    x: x * ratio,
    y: y * ratio
  };
};

console.log(resize({x: 5, y: 15}, 100)); // { x: 500, y: 1500 }
```

Uma função seta não cria um novo contexto. Uma de suas maiores fontes de erros em JavaScript acontecia pela criação de diferentes contextos em uma função dependendo de quem a executa. Vejamos o exemplo a seguir:

```js
const randomWinner = function(drivers) {
  const winner = Math.floor(Math.random() * (0 - drivers.length) + drivers.length);
  return drivers[winner];
};

const F1Race = {
  drivers: [
    'Alonso',
    'Vettel',
    'Button',
    'Massa'
  ],
  init: function() {
    console.log('Os seguintes pilotos começarão a corrida:', this.drivers);
    setTimeout((function() {
      console.log('O ganhador é ', randomWinner(this.drivers));
    }), 1000);
  }
};

F1Race.init();
```

`F1Race` é um objeto que inicia uma corrida de Fórmula 1 por meio de sua função `init()`. Após um segundo, será executada a função `randowWinner()`, que a partir de um array de pilotos, escolherá um aleatoriamente.

Quando executamos a função `init()`, o programa escreve no console o seguinte:

```text
Os seguintes pilotos começarão a corrida: [ 'Alonso', 'Vettel', 'Button', 'Massa']
```

Isso é possível já que a função `init` tem como contexto o próprio objeto `F1Race`. Contudo, a função dá erro após um segundo, enquanto tenta calcular o ganhador de maneira aleatória. Como isso é possível?

O motivo é que a função de *callback* que é passada ao `setTimetout` cria um novo contexto, no qual não existe o array de pilotos.

No ES5 podíamos solucionar esse problema utilizando `bind(this)` para atribuir o contexto de uma função de *callback* ao objeto que a contém da seguinte maneira:

```js
init: function() {
  console.log('Os seguintes pilotos começarão a corrida:', this.drivers);
  setTimeout((function() {
    console.log('O ganhador é ', randomWinner(this.drivers));
  }).bind(this), 1000);
}
```

Com ES2015, podemos solucionar este contratempo utilizando funções seta de uma maneira muito mais elegante, já que ao criar o novo contexto, `this` sempre virá determinado pela função o contém:

```js
init: function() {
  console.log('Os seguintes pilotos começarão a corrida:', this.drivers);
  setTimeout(() => console.log('O ganhador é ', randomWinner(this.drivers)), 1000);
}
```
