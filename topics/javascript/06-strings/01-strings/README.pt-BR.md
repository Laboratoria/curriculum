# Strings

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de Aprendizagem

- Aprender as possibilidades e flexibilidade que as `strings` nos oferecem

Este conteúdo foi quase uma tradução literal de
[https://javascript.info/string](https://javascript.info/string), aqui a
[fonte](https://github.com/iliakan/javascript-tutorial-en/blob/master/1-js/05-data-types/03-string/article.md)

***

Em JavaScript, todos os *textos* são do tipo `string`. Até apenas um caractere é
do tipo `string`.

## Quotes (Aspas)

Vamos lembrar o tipo de aspas que temos.

As `strings` podem ser aspas simples (*single quotes*), duplas (*double quotes*)
ou crase (*backticks*):

```js
const single = 'single-quoted';
const double = "double-quoted";
const backticks = `backticks`;

```

As aspas simples e duplas, são basicamente a mesma coisa. A crase tem uma
diferença, nos permite colocar (interpolar) qualquer expressão dentro de uma
string:

```js
const greeting = 'Mundo';
console.assert(`Olá ${greeting}` === 'Olá Mundo');

const sqrt = Math.sqrt(7);
console.assert(`sqrt(7) ~ ${sqrt.toFixed(2)}` === 'sqrt(7) ~ 2.65');

const sum = (a, b) => a + b;
console.assert(`1 + 2 = ${sum(1, 2)}` === '1 + 2 = 3');

console.assert(`${'Olá'.concat(` ${'Mun'.concat('do')}`)}!` === 'Olá Mundo!');

```

Outra vantagem de usar crase, é o que nós permite criar textos com múltiplas
linhas:

```js
const guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.assert(guestList === 'Guests:\n * John\n * Pete\n * Mary\n');

```

Se tentarmos usar aspas simples ou duplas para fazer o mesmo, dará um erro:

```js
let guestList = "Guests:  // Error: Unexpected token ILLEGAL
* John";
```

As aspas simples ou duplas foram herdadas de linguagem tradicionais, onde não se
contemplam a interpolação de variáveis ou as `strings` de mais de uma linha.

As crases apareceram muito depois e por isso são muito mais versáteis.

## Caracteres especiais

Como vimos antes, é possível criar um *multiline string* usando aspas simples,
graças a um caractere especial, chamado *newline character*, que é representado
por `\n`, e isso adiciona uma nova linha:

```js
console.assert(
  `Guests:
 * John
 * Pete
 * Mary` === 'Guests:\n * John\n * Pete\n * Mary',
);

console.assert(
  `Hello
World` === 'Hello\nWorld',
);

```

Existe outros caracteres especiais, que não são tão comuns. Aqui está a lista:

| Caractere | Descrição |
|-----------|-------------|
|`\'`|Single quote
|`\"`|Double quote
|`\\`|Backslash
|`\b`|Backspace
|`\f`|Form feed
|`\n`|Newline
|`\r`|Carriage return
|`\t`|Horizontal tab
|`\ddd`|Secuencia octal (3 digitos: ddd)
|`\xdd`|Secuencia hexadecimal (2 digitos: dd)
|`\uNNNN`|Símbolo unicode con código hexadecimal

Alguns exemplos com Unicode:

```js
console.assert('\u00A9' === '©');
console.assert('\u{1F60D}' === '😍');
```

Todos os caracteres especiais, começam com a barra invertida `\`. Também chamado
de *escape character*.

```js
console.assert('I\'m the Walrus!' === "I'm the Walrus!");
```

Note que só usamos a barra invertida apenas para que o intérprete do JavaScript
entenda o que queremos dizer. Uma vez na memória, o `\` desaparece.

O que fazemos se precisamos mostrar uma barra invertida? Usamos `\\`:

```js
alert( `The backslash: \\` ); // The backslash: \
```

## `String.length`

A propriedade `length` retorna o tamanho da `String`:

```js
console.assert('My\n'.length === 3);
```

Note que os caracteres especiais, apesar de serem compostos por 2 caractes,
contam apenas um.

## Acessando caracteres específicos

Para obter o caractere da posição `pos`, usamos os colchetes `[pos]` ou o
método `str.charAt(pos)`.

```js
let str = `Hello`;

console.assert(str[0] === 'H');
console.assert(str.charAt(0) === 'H');
console.assert(str[1000] === undefined);
console.assert(str.charAt(1000) === '');

/* o último caractere */
console.assert(str[str.length - 1] === 'o');
```

## Imutabilidade

Em JavaScript, as `string` **não podem alterar o seu valor**. Inclusive se
tentarmos, não conseguimos.

```js
str = 'Hi';
str[0] = 'P';
console.assert(str[0] === 'H'); /* No cambió */
```

A forma mais comum de fazer isso é criando uma nova `string` e passando a
anterior:

```js
str = 'Hi';
str = `P${str[1]}`; /* substituímos */

console.assert(str === 'Pi');
```

## Maiúscula / minúscula

```js
console.assert('Interface'.toUpperCase() === 'INTERFACE');
console.assert('Interface'.toLowerCase() === 'interface');
console.assert('Interface'[0].toLowerCase() === 'i');
```

## Substrings

### str.indexOf

```js
str = 'Widget with id';

console.assert(str.indexOf('Widget') === 0);
console.assert(str.indexOf('widget') === -1);
console.assert(str.indexOf('id') === 1);
```

`String.indexOf` funciona de maneira análoga `Array.indexOf`: recebe um segundo
parâmetro opcional, que nós permite começar a buscar a partir de uma posição
particular.

```js
console.assert(str.indexOf('id', 2) === 12);
```

Vejamos como seriam todas as ocorrências:

```js
const equal = (one, other) => JSON.stringify(one) === JSON.stringify(other);

str = 'As sly as a fox, as strong as an ox';

const target = 'as'; // texto a buscar
const result = [];

let pos = 0;
while (true) {
  const foundPos = str.indexOf(target, pos);
  if (foundPos === -1) break; // já não há mais ocorrências

  result.push(foundPos);
  pos = foundPos + 1; // próxima posição
}

console.assert(equal(
  result,
  [7, 17, 27],
));
```

Assim como no `Array`, também existem os métodos `lastIndexOf(pos)` e
`lastIndexOf`.

### `includes`, `startsWith`, `endsWith`

```js
console.assert('Widget with id'.includes('Widget'));
console.assert(!'Hello'.includes('Bye'));
```

Também conta com um segundo parâmetro opcional

```js
console.assert('Midget'.includes('id'));
console.assert(!'Midget'.includes('id', 3));
console.assert('Widget'.startsWith('Wid'));
console.assert('Widget'.endsWith('get'));
```

## Obtendo substrings

Existem 3 métodos no JavaScript que nos permitem obter substring: `substring`,
`substr` e `slice`.

`str.slice(start [, end])`: Retorna parte da string começando com `start` até
(mas sem incluir) `end`.

```js
str = 'stringify';
console.assert(str.slice(1, 4) === 'tri');
console.assert(str.slice(0, 1) === 's');
```

Se não passar o segundo parâmetro, a função vai até o final da `string`.

```js
str = 'stringify';
console.assert(str.slice(2) === 'ringify');
```

Valores negativamos para `start/end` também são possível. Isso quer dizer que a
posição é contada a partir do final:

```js
str = 'stringify';
console.assert(str.slice(-4, -1) === 'gif');

```

`str.substring(start [, end])`: Retorna a substring entre `start` e `end`.

É quase idêntico a `slice`, mas permite valores de `start` maiores que `end`.

```js
str = 'stringify';

console.assert(str.substring(2, 6) === 'ring');
console.assert(str.substring(6, 2) === 'ring');
```

Com `slice` não funciona:

```js
console.assert(str.slice(2, 6) === 'ring');
console.assert(str.slice(6, 2) === '');
```

`str.substr(start [, end])`: Retorna parte da `string` começando do `start` até
o `end`.

```js
str = 'stringify';
console.assert(str.substr(2, 4) === 'ring');
```

O primeiro argumento pode ser negativo e assim irá contar desde o final:

```js
str = 'stringify';
console.assert(str.substr(-4, 2) === 'gi');
```

Em resumo:

| método | seleciona... | argumentos negativos |
|--------|---------------|----------------------|
|`slice(start, end)`|desde `start` até `end` (exclui `end`)|permite negativos|
|`substring(start, end)`|entre `start` e `end`|interpreta como `0`|
|`substr(start, length)`|desde `start`, `length` caracteres|permite `start` negativo|

> Todos os anteriores realizam  a mesma tarefa, mas devemos ter em conta que
> `substr` não é parte das especificação do `core` do JavaScript, mas o *Anexo*
> B, que cobre funcionalidades exclusivas dos navegadores. Mas a prática
> funciona para todo o entorno.

## Comparando strings

As `strings` são comparadas caractere por caractere em ardem alfabética.

Mas existem alguns casos raros:

1. As minúsculas são sempre *maiores* que as maiúsculas:

   ```js
   console.assert('a' > 'Z');
   ```

2. Os caracteres com sinais diacríticos, são maiores que todos os outros
   caracteres:

   ```js
   console.assert('Ñandu' > 'Zebra');
   ```

Para entender o que acontece, vejamos um pouco como representam internamente as
`strings` em JavaScript.

As `strings` se codificam usando [UTF-16](https://pt.wikipedia.org/wiki/UTF-16).
Isso significa que cada caractere possui um código numérico. Nós temos métodos
especiais que nos permitem ir e vir entre um caractere e o código que o
representa.

`str.codePointAt(pos)`: Retorna o código do caractere na posição `pos`:

```js
console.assert('z'.codePointAt(0) === 122);
console.assert('Z'.codePointAt(0) === 90);
```

`String.fromCodePoint(code)`: Criar uma `string` a partir do `code` numérico:

```js
console.assert(String.fromCodePoint(90) === 'Z');
```

Agora vejamos qual são os caracteres com códigos dentre `65..220` (o alfabeto):

```js
let alphabet = '';
for (let i = 65; i <= 122; i += 1) {
  alphabet += String.fromCodePoint(i);
}

console.assert(
  alphabet === 'ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz',
);
```

Agora está claro porque `a > Z`.

## Resumo

- Tem 3 tipos de aspas. As crases nos permitem definir `strings` multilinhas e
  interpolar valores.
- As `strings` em JavaScript se codificam usando UTF-16.
- Existem caracteres especiais como `\n`.
- Para obter um caractere específico usamos: `[]`.
- Para obter uma substring, usamos: `slice` ou `substring`.

Existem vários métodos úteis:

- `str.trim()` -- retira os espaços extras do começo e final da `string`.
- `str.repeat(n)` -- repete a `string` `n` vezes.
- ... muito mais. leia no [Strings no
  MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
  para mais detalhes.

As `strings` também têm métodos para pesquisar e substituir usando expressões
*regular*, mas isso é para outra chance.

***

## Recursos sugeridos

- [UTF-16](https://en.wikipedia.org/wiki/UTF-16)
- [ASCII](https://ascii.cl/es/)
- [Js Strings Internals e
  Unicode](https://javascript.info/string#internals-unicode)
- [Uso da
  crase](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings)
