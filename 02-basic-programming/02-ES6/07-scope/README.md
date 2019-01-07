# Escopo

* Tipo: `leitura`
* Formato: `individual`
* Duração: `30min`

***

## O `escopo` de uma variável

O `escopo` de uma variável são os locais de onde pode ser acessada.
Por exemplo:

```js
function banana() {
  var fruta = "banana";
  console.log(fruta) // "banana"
  return fruta;
}

console.log(fruta) // ReferenceError: x is not defined
```

Aqui, o _direct scope_ (escopo direto) de `x` é a função `banana`. Esta
variável poderá ser acessada de dentro do corpo da função `banana`, mas não
fora dela.

Mas a variável `x` fosse criada fora da função `banana` ela poderia ser
utilizada dentro da função, pois ela foi criada no escopo global, e não
no escopo da função.

```js
var fruta = "banana";

function banana() {
  console.log(fruta) // "banana"
  return fruta;
}

console.log(fruta) // "banana"

```

Tradicionalmente, em JavaScript só poderíamos criar um novo escopo ou âmbito
criando uma nova função. Mais a frente nesta lição, veremos como `let` e
`const` introduzem o conceito de _block scope_ (escopo de bloco) em ES6.

### Shadowing (sombra)

Se um escopo declara uma variável que tem o mesmo nome que outra em um escopo
interno de uma função, o acesso à variável externa é bloqueado no escopo
interno e todos os escopos aninhados dentro dela. Mudanças na variável interna
não afetam a variável externa, a qual é acessível novamente quando o escopo
interno é desejado. Exemplo:

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

## Escopo de bloco (Block-Scoped)

As declarações em nível de bloco são aquelas que declaram variáveis
inacessíveis fora do âmbito de um bloco determinado. Os âmbitos de bloco,
também chamados âmbitos léxicos, são criados:

1. Dentro de uma função;
2. Dentro de um bloco (indicado pelo caracteres { }).

### Diferença entre contexto e alcance

Cada invocação de função tem tanto um alcance quanto um contexto associados.
Fundamentalmente, o alcance é um conceito associado a funções enquanto que o
contexto está associado a objetos. Em outras palavras, o alcance se refere à
acessibilidade de variáveis de uma função quando é invocada e é único a cada
invocação.

### Alcance de variáveis

As variáveis podem ser declaradas com **alcance local** ou **alcance global**,
os quais estabelecem sua acessibilidade de diferentes alcances em tempo de
execução. Qualquer variável definida como global será acessível em tempo de
execução de qualquer alcance, já que terá sido declarada fora do corpo de uma
função.

Por outro lado, as variáveis locais existem somente dentro do corpo de uma
função. O alcance local de uma variável só é definido a partir do corpo da
função que a contém, já que JavaScript até agora não permite definir um alcance
local dentro de uma condição `if`, blocos `switch`, ou iterações `for` e
`while`.

### Declaração de variáveis: `let`

A instrução `let` declara uma variável de alcance local a qual, opcionalmente,
pode ser iniciada com algum valor.

O alcance de `let` é local no bloco, declaração ou expressão de onde se está
usando-a. O anterior diferencia a expressão `let` da palavra reservada `var`, a
qual define uma variável global ou local em uma função sem importar o âmbito do
bloco.

Vejamos alguns exemplos:

```js
if (x > y) {
  let gamma = 12.7 + y;
  i = gamma * x;
}

console.log(gamma) // ReferenceError: gamma is not defined
```

No exemplo anterior, `gamma` só existe dentro do bloco do `if`.

```js
for (let i = 0; i < 10; i++) {
  console.log(i); // 0; 1; 2; 3; 4; 5; 5; 6; 7; 8; 9
}

console.log(i)// ReferenceError: i is not defined
```

Podemos usar `let` para que a variável seja local ao alcance do laço `for`. Se
em seu lugar usássemos `var`, a variável seria visível em toda a função que
contém o referido laço.

```js
function ola() {
  if (true) {
    let x = 'olá mundo';
  }
  console.log(x);
  // Dá erro, porque "x" foi definida dentro do "if"
}
ola();
```

Diferente de ECMAScript 5, no ESCMAScript 6 o bloco de uma instrução
condicional também atua como âmbito de bloco. No exemplo `console.log(x)` não
há acesso a `let x = olá mundo` e ocorre erro porque `x` foi definida dentro do
bloco `if`.

No exemplo a seguir o console imprime `Olá Ale`, já que a variável `x` no bloco
do `if` se mantém no seu âmbito.

```js
function ola() {
  let x = 'Olá Ale';

  if (true) {
    let x = 'Olá Joan';
  }
  console.log(x);
  // Imprime no console Olá Ale
}
ola();
```

### Declaração de variáveis: `const`

As variáveis de somente leitura são outra das novidades de ECMAScript 6, por
meio da introdução da nova palavra reservada `const`. Qualquer variável
declarada como constante, será de somente leitura e seu valor não poderá ser
modificado.

Vejamos um exemplo:

```js
function ola() {
  const hello = 'Olá world';
  hello = 'Olá mundo';
  // Dará ERROR, já que é somente leitura
}
ola();
```

Neste exemplo vemos como desde o momento em que declaramos a constante `HELLO`,
seu valor fica protegido e o interpretador disparará um erro ao tentar
modificá-la.

```js
function piError() {
  const pi;
  pi = 3.15;
  // Dará ERROR, já que você precisa atribuir um valor na declaração.
}
piError();
```

Mas, o que acontece quando a variável não tem um valor atribuído, mas sim um
array ou objeto?

Vejamos um exemplo:

```js
const user = {
  name: 'Vanessa',
  surname: 'Pinheiro',
  age: 20
};

/**
 * A seguinte instrução:
 * Funciona, já que estamos modificando uma propriedade
 * mas o objeto continua intacto
 **/
user.name = 'Juliana';

user.age = 'vinte'; // modificar o tipo de uma propriedade também funciona

console.log(user); // {name: 'Juliana', surname: 'Pinheiro', age: 'vinte'}

/**
 * Se quiséssemos trocar o tipo de dado da constante user
 * de um objeto para uma string ou qualquer outro tipo de dado diferente de um objeto,
 * teremos um erro, já que o tipo de dado de uma constante não pode ser modificado
 **/
user = 'Vanessa Pinheiro'; // Error, não é permitido
```

## Hoisting

Agora vamos entender a diferença entre as _function declarations_ e as
_function expression_, que foram explicadas no capítulo anterior.

**Hoisting** significa "elevar para o início do escopo". As
_function declarations_ são elevadas (_hoisted_) completamente, enquanto as
_function expression_ não, pois são declaradas em variáveis fazendo com que
sejam particalmente elevadas.

_Function declarations_ são completamente elevadas. Isso permite chamar uma
função antes de sua declaração:

```js
welcome(); // 'Welcome to CE - JS Deep Dive'

function welcome() { // esta função é elevada - hoisting
  console.log('Welcome to CE - JS Deep Dive');
}
```

A razão pela qual o código anterior funciona é que o motor de JavaScript move a
 declaração da função `welcome` para o início do escopo. Ele acaba executando
 como se estivesse escrito da seguinte maneira:

```js
function welcome() { // esta função é elevada - hoisting
  console.log('Welcome to CE - JS Deep Dive');
}
welcome(); // 'Welcome to CE - JS Deep Dive'
```

As declarações de variáveis são elevadas também, mas somente as declarações mas
não as atribuições. Portanto, definir uma função como expressão atribuindo a
uma variável acaba em um erro no exemplo anterior:

```js
welcome(); // TypeError: undefined is not a function
var welcome = function welcome() {
  console.log('Welcome to CE - JS Deep Dive');
};
```

Somente as declarações são elevadas. O motor de JavaScript executa o código
anterior como se estivesse escrito da seguinte maneira:

```js
var welcome; // undefined
welcome(); // TypeError: undefined is not a function
welcome = function welcome() {
  console.log('Welcome to CE - JS Deep Dive');
};
```