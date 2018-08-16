# Escopo

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

## Background

Nesta lição, é preciso ter claro os seguintes conceitos:

### O `escopo` de uma variável

O `escopo` de uma variável são os locais de onde pode ser acessada. 
Por exemplo:

```js
function foo() {
  var x;
}
```

Aqui, o _direct scope_ (escopo direto) de `x` é a função `foo`. Esta variável poderá ser acessada de dentro do corpo da função `foo`, mas não fora dela.

Tradicionalmente, em JavaScript só poderíamos criar um novo escopo ou âmbito criando uma nova função. Mais a frente nesta lição, veremos como `let` e `const` introduzem o conceito de _block scope_ em ES6.

### Lexical scoping

As variáveis em `ES5` são  _lexically scoped_ (de âmbito léxico). Assim que a estrutura estática de um programa determina o âmbito da variável (não é influenciada por onde se invoca a função).

### Nested Scopes (âmbitos aninhados)

Se o âmbito estiver aninhado dentro do âmbito direto de uma variável, a variável será acessível em todos os âmbitos.

```js
function foo(arg) {
  function bar() {
    console.log(`arg: ${arg}`);
  }
  bar();
}

console.log(foo('hello')); // arg: hello
```

O âmbito direto de `arg` é `foo`, mas é também acessível do âmbito aninhado `bar`. Com respeito ao aninhamento, `foo` é o _outer scope_ (alcance ou âmbito externo) e `bar` é o _inner scope_ (alcance ou âmbito interno).

### Shadowing (sombra)

Se um escopo declara uma variável que tem o mesmo nome que outra em um escopo interno de uma função, o acesso à variável externa é bloqueado no escopo interno e todos os escopos aninhados dentro dela. Mudanças na variável interna não afetam a variável externa, a qual é acessível novamente quando o escopo interno é desejado. Exemplo:

```js
var x = 'global';
function f() {
  var x = 'local';
  console.log(x); // local
}
f();
console.log(x); // global
```

Dentro da função `f`, a variável `x` é sombreada pela variável local `x`.

***

## Block-Scoped Declarations

As declarações em nível de bloco são aquelas que declaram variáveis inacessíveis fora do âmbito de um bloco determinado. Os âmbitos de bloco, também chamados âmbitos léxicos, são criados:

1. Dentro de uma função;
2. Dentro de um bloco (indicado pelo caracteres { }).

## Diferença entre contexto e alcance

Cada invocação de função tem tanto um alcance quanto um contexto associados. Fundamentalmente, o alcance é um conceito associado a funções enquanto que o contexto está associado a objetos. Em outras palavras, o alcance se refere à acessibilidade de variáveis de uma função quando é invocada e é único a cada invocação. Por outro lado, o contexto sempre é o valor de `this` cuja referência é sempre o objeto que está executando o código.

### Alcance de variáveis

As variáveis podem ser declaradas com **alcance local** ou **alcance global**, os quais estabelecem sua acessibilidade de diferentes alcances em tempo de execução. Qualquer variável definida como global será acessível em tempo de execução de qualquer alcance, já que terá sido declarada fora do corpo de uma função.

Por outro lado, as variáveis locais existem somente dentro do corpo de uma função. O alcance local de uma variável só é definido a partir do corpo da função que a contém, já que JavaScript até agora não permite definir um alcance local dentro de uma condição `if`, blocos `switch`, ou iterações `for` e `while`.

## Declaração de variáveis de âmbito local: `let`

A instrução `let` declara uma variável de alcance local a qual, opcionalmente, pode ser iniciada com algum valor.

O alcance de `let` é local no bloco, declaração ou expressão de onde se está usando-a. O anterior diferencia a expressão `let` da palavra reservada `var`, a qual define uma variável global ou local em uma função sem importar o âmbito do bloco.

Vejamos alguns exemplos:

```js
if (x > y) {
  let gamma = 12.7 + y;
  i = gamma * x;
}
```

No exemplo anterior, `gamma` só existe dentro do bloco do `if`.

```js
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
```

Podemos usar `let` para que a variável seja local ao alcance do laço `for`. Se em seu lugar usássemos `var`, a variável seria visível em toda a função que contém o referido laço.

```js
(function () {
  if (true) {
    let x = 'olá mundo';
  }
  console.log(x);
  // Dá erro, porque "x" foi definida dentro do "if"
})();
```

Diferente de ECMAScript 5, no ESCMAScript 6 o bloco de uma instrução condicional também atua como âmbito de bloco. No exemplo `console.log(x)` não há acesso a `let x = olá mundo` e ocorre erro porque `x` foi definida dentro do bloco `if`.

No exemplo a seguir o console imprime `Olá Ale`, já que a variável `x` no bloco do `if` se mantém no seu âmbito.

```js
(function () {
  let x = 'Olá Ale';

  if (true) {
    let x = 'Olá Joan';
  }
  console.log(x);
  // Imprime no console Olá Ale
})();
```

## Variáveis de somente leitura: `const`

As variáveis de somente leitura são outra das novidades de ECMAScript 6, por meio da introdução da nova palavra reservada `const`. Qualquer variável declarada como constante, será de somente leitura e seu valor não poderá ser modificado. 

Vejamos um exemplo:

```js
(function () {
  const HELLO = 'Olá world';
  HELLO = 'Olá mundo';
  // Dará ERROR, já que é somente leitura
})();
```

Neste exemplo vemos como desde o momento em que declaramos a constante `HELLO`, seu valor fica protegido e o interpretador disparará um erro ao tentar modificá-la.

```js
(function () {
  const PI;
  PI = 3.15;
  // Dará ERROR, já que você precisa atribuir um valor na declaração.
})();
```

Mas, o que acontece quando a variável não tem um valor atribuído, mas sim um objeto?

Vejamos um exemplo:

```js
const USER = {
  name: 'Caro',
  surname: 'Covarrubias',
  age: 20
};

/**
 * A seguinte instrução:
 * Funciona, já que estamos modificando uma propriedade
 * mas o objeto continua intacto
 **/
USER.name = 'Joan';

USER.age = 'vinte'; // modificar o tipo de uma propriedade também funciona

console.log(USER); // {name: 'Joan', surname: 'Covarrubias', age: 'vinte'}

/**
 * Se quiséssemos trocar o tipo de dado da constante USER
 * de um objeto para uma string ou qualquer outro tipo de dado diferente de um objeto,
 * teremos um erro, já que o tipo de dado de uma constante não pode ser modificado
 **/
USER = 'Caro Covarrubias'; // Error, não é permitido
```
