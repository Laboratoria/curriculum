# Modelo Strings

* Tipo: `leitura`
* Formato: `individual`
* Duração: `5min`

***

Com ECMAScript 6 foram dadas algumas respostas a algumas necessidades mais básicas dos programadores no momento de trabalhar com strings, introduzindo a característica dos **modelos de cadeias de texto**.

## Sintaxe

O construtor de um modelo de texto é invocado delimitando a string com o caractere de **acento grave:** (\`). Ou seja, antes de ES6 seria:


```js
// ES5
var hello = "Olá Mundo";
// o também
var hello = 'Olá Mundo';
```

Agora podemos escrever:

```js
// ES6
let hello = `Olá Mundo`;
```

## Cadeias de texto de várias linhas

Podemos dispor de cadeias de texto de múltiplas linhas e passar disto:

```js
// ES5
var text = [
  'Em um lugar',
  'da mancha,',
  'de cujo nome',
  'não quero lembrar'
].join('\n');
```

para isto:

```js
// ES6
var quixote = `Em um lugar
 da mancha,
 de cujo nome
 não quero lembrar`;
```

Em ES5 se quiséssemos criar uma string com conteúdo estático, não havia muitas maneiras de fazê-lo a não ser o seguinte:

```js
// ES5
var dani = {
    name: 'Daniel',
    age: 32
};

var greet = function(person) {
    return 'Olá! Meu nome é ' + person.name + ' e eu tenho ' + person.age + ' anos de idade.';
};

greet(dani);
```

Contudo, com ES6 agora podemos converter a função `greet` em:

```js
// ES6
var greet = function(person) {
    return `Olá! Meu nome é ${person.name} e eu tenho ${person.age} anos de idade.`;
};
```

Isto possui uma vantagem adicionada: a de poder fazer substituições não somente por um valor, mas por qualquer expressão válida em JavaScript dentro dos símbolos de interpolação (`${}`):

```js
let minhaIdade = `Minha idade é ${person.age + 3} anos`;
```
