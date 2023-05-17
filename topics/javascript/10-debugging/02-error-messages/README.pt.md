---
type: read
duration: 60min
---

# Mensagens de erro

## Objetivos de Aprendizagem

- Conhecer os diferentes tipos de mensagens de erro e o vocabulário dessas
  mensagens para resolver os problemas no código.

***

Todos cometem erros, inclusive programadores com muita experiência. Felizmente,
o console de Dev Tools dirá quando um erro acontece. Por outro lado, estas
mensagens podem ser difíceis de compreender e às vezes seus significados não são
tão óbvios. O objetivo desta leitura é explorar alguns erros comuns e seus
significados e assim resolver problemas no código.

## Erros comuns

Há muitos tipos de erros, mas há alguns que são mais comuns. Leia estas
referências para compreender os erros mais comuns.

### ReferenceError: "x" is not defined

[ReferenceError: "x" is not defined -
MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/N%C3%A3o_definido)

### SyntaxError: Unexpected token

Um "token" é uma peça pequena do código. Por exemplo, variáveis, funções,
operadores e palavras chave (como `if` ou `while`), todos são tokens.

A palavra "unexpected" significa "inesperado". Logo, se você tiver um token
inesperado significa que o navegador estava lendo o código até que chegou a algo
que não deveria esta ali. Usualmente isso significa que está faltando algo (como
uma vírgula ou um `+`) logo antes do token inesperado.

[SyntaxError: Unexpected token -
MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Unexpected_token)

Exemplos:

```javascript
const foo = 'Nicole's code';
// SyntaxError: unexpected token: identifier
```

```javascript
const list = [1, 2,

const instruments = [
  'Ukulele',
  'Guitar',
  'Piano'.
};
// SyntaxError: expected expression, got keyword 'const'
```

```javascript
const data = [{foo: 'bar'} {bar: 'foo'}];
// SyntaxError: missing ] after element list
```

Às vezes, ao invés de "Unexpected Token", será exibido algo como "Unexpected
Identifier" ou "Unexpected Number". Estes são erros similares e também quase
sempre significam que você esqueceu de adicionar algo logo antes do token
inesperado. Felizmente, Chrome DevTools dirá o número da linha na qual está o
erro e `repl.it` dirá não só o número da linha como também o número da coluna.

![repl.it screenshot](https://user-images.githubusercontent.com/11894994/62891126-4d4a6a80-bd1b-11e9-9087-2f1c5dd898d6.png).

### TypeError: "x" is not a function

[TypeError: "x" is not a function -
MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Not_a_function)

### SyntaxError: missing ) after argument list

[SyntaxError: missing ) after argument list -
MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Fata_par%C3%AAnteses_ap%C3%B3s_lista_argumento)

### Assignment in Conditional Expression

"Assignment in Conditional Expression" não é uma mensagem de erro. É uma
advertência de `repl.it`.

Significa que existe um operador de atribuição (`=`) em uma condição, mas
deveria ser um operador de comparação(`===`).

Por exemplo,

```javascript
if (x = 5) {
  console.log('x es 5.');
}
```

### Outras notas

É importante considerar que as mensagens de erros podem variar entre os
navegadores. O guia de referência do MDN descreve mensagens do Firefox. As
mensagens de erros dos outros navegadores são similares, mas não exatamente as
mesmas. Nesta leitura, focamos nas mensagens do Chrome e `repl.it`.

[Referência MDN de
Erros](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors)
