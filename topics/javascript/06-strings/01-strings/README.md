---
type: read
duration: 30min
---

# Strings

## Objetivos de Aprendizaje

* Aprender las posibilidades y flexibilidad que ofrecen los `strings`

Esta lección es una traducción casi literal de
[https://javascript.info/string](https://javascript.info/string),
aquí el [fuente](https://github.com/iliakan/javascript-tutorial-en/blob/master/1-js/05-data-types/03-string/article.md)

***

En JavaScript, los tipos de dato *texto*, se guardan como *tiras de caracteres*,
más popularmente conocidas como `strings`.

## Comillas (*Quotes*)

Recordemos los tipos de comillas que tenemos.

Los `Strings` pueden encerrarse en comillas simples (*single quotes*),
dobles (*doble quotes*)
o tildes invertidas (*backticks*):

```js
const single = 'single-quoted';
const double = "double-quoted";
const backticks = `backticks`;

```

Las comillas simples y dobles, son básicamente lo mismo.
Las tildes invertidas en cambio,
nos permiten embeber (interpolar) cualquier expresión dentro de un string:

```js
const greeting = 'Mundo';
console.assert(`Hola ${greeting}` === 'Hola Mundo');

const sqrt = Math.sqrt(7);
console.assert(`sqrt(7) ~ ${sqrt.toFixed(2)}` === 'sqrt(7) ~ 2.65');

const sum = (a, b) => a + b;
console.assert(`1 + 2 = ${sum(1, 2)}` === '1 + 2 = 3');

console.assert(`${'Hola'.concat(` ${'Mun'.concat('do')}`)}!` === 'Hola Mundo!');

```

Otra ventaja de usar tildes invertidas, es que nos permiten
definir textos multi línea:

```js
const guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.assert(guestList === 'Guests:\n * John\n * Pete\n * Mary\n');

```

Si intentamos usar comillas simples o dobles para hacer lo mismo,
habrá un error

```js
let guestList = "Guests:  // Error: Unexpected token ILLEGAL
* John";
```

Las comillas simples y dobles las hemos heredado de
los lenguajes tradicionales, donde no se contemplaban
la interpolación de variables o los strings de más
de una línea.

Las tildes invertidas aparecieron mucho después y por lo tanto
son más versátiles.

## Caracteres especiales

Como vimos antes, es posible crear un *multiline string*
usando comillas simples, gracias a un caracter especial, llamado
*"newline character"*, que se representa asi `\n`,
y representa un salto de línea:

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

Hay otros caracteres especiales, que no son tan comunes. Aca la lista:

| Caracter | Descripción |
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

Algunos ejemplos con Unicode:

```js
console.assert('\u00A9' === '©');
console.assert('\u{1F60D}' === '😍');
```

Todos los caracteres especiales, comienzan con la barra invertida `\`.
También se la llama *"escape character"*.

```js
console.assert('I\'m the Walrus!' === "I'm the Walrus!");
```

Ten cuenta que sólo usamos la barra invertida para que el intérprete de
JavaScript entienda lo que le queremos decir. Una vez en memoria, el `\`
desaparece.

¿Qué hacemos si necesitamos mostras una barra invertida? Usamos `\\`:

```js
alert( `The backslash: \\` ); // The backslash: \
```

## `String.length`

La propiedad `length` guarda la longitud del `String`:

```js
console.assert('My\n'.length === 3);
```

Nota que los caracteres especiales, a pesar de estar compuestos por 2
caracteres, cuentan como un sólo caracter.

## Accediendo caracteres específicos

Para obtener el caracter de la posición `pos`, usamos corchetes `[pos]` o el
método `str.charAt(pos)`.

```js
let str = `Hello`;

console.assert(str[0] === 'H');
console.assert(str.charAt(0) === 'H');
console.assert(str[1000] === undefined);
console.assert(str.charAt(1000) === '');

/* el último caracter */
console.assert(str[str.length - 1] === 'o');
```

## Immutabilidad

En JavaScript, a los `Strings` **no se puede modificar su valor**.
Inclusive si lo intentamos, no podremos.

```js
str = 'Hi';
str[0] = 'P';
console.assert(str[0] === 'H'); /* No cambió */
```

La forma usual de lograr esto es creando un nuevo string
pisando al anterior:

```js
str = 'Hi';
str = `P${str[1]}`; /* replazamos */

console.assert(str === 'Pi');
```

## Mayúsculas / minúsculas

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

`String.indexOf` funciona de manera análoga a `Array.indexOf`:
recibe un segundo parámetro opcional, que nos permite comenzar
la búsqueda a partir de una posición en particular.

```js
console.assert(str.indexOf('id', 2) === 12);
```

Veamos como sería si queremos todas las ocurrencias:

```js
const equal = (one, other) => JSON.stringify(one) === JSON.stringify(other);

str = 'As sly as a fox, as strong as an ox';

const target = 'as'; // texto a buscar
const result = [];

let pos = 0;
while (true) {
  const foundPos = str.indexOf(target, pos);
  if (foundPos === -1) break; // ya no hay mas ocurrencias

  result.push(foundPos);
  pos = foundPos + 1; // siguiente posición
}

console.assert(equal(
  result,
  [7, 17, 27],
));
```

Asi como en `Arrays`, también existen los métodos `lastIndexOf(pos)`
y `lastIndexOf`.

### `includes`, `startsWith`, `endsWith`

```js
console.assert('Widget with id'.includes('Widget'));
console.assert(!'Hello'.includes('Bye'));
```

También cuenta con un segundo parámetro opcional

```js
console.assert('Midget'.includes('id'));
console.assert(!'Midget'.includes('id', 3));
console.assert('Widget'.startsWith('Wid'));
console.assert('Widget'.endsWith('get'));
```

## Obteniendo substrings

Hay 3 métodos en Javascript que nos permiten obtener substrings:
`substring`, `substr` and `slice`.

`str.slice(start [, end])`
: Devuelve parte del string comenzando en `start`
hasta (pero sin incluir) `end`.

```js
str = 'stringify';
console.assert(str.slice(1, 4) === 'tri');
console.assert(str.slice(0, 1) === 's');
```

Si no hay segundo parámetro, corre hasta el final del string.

```js
str = 'stringify';
console.assert(str.slice(2) === 'ringify');
```

Valores negativos para `start/end` también son posibles.
Quiere decir que la posición se cuenta comenzando por el final:

```js
str = 'stringify';
console.assert(str.slice(-4, -1) === 'gif');

```

`str.substring(start [, end])`
: Devuelve el substring *entre* `start` y `end`.

Es casi idéntico a `slice`, pero permite valores
de `start` mayores que `end`.

```js
str = 'stringify';

console.assert(str.substring(2, 6) === 'ring');
console.assert(str.substring(6, 2) === 'ring');
```

Con `slice` no funciona:

```js
console.assert(str.slice(2, 6) === 'ring');
console.assert(str.slice(6, 2) === '');
```

`str.substr(start [, length])`
: Devuelve parte del string comenzando desde `start`, `length` caracteres.

```js
str = 'stringify';
console.assert(str.substr(2, 4) === 'ring');
```

El primer argumento puede ser negativo,
para contar desde el final:

```js
str = 'stringify';
console.assert(str.substr(-4, 2) === 'gi');
```

En resumen:

| método | selecciona... | argumentos negativos |
|--------|---------------|----------------------|
|`slice(start, end)`|desde `start` hasta `end` (excluye `end`)|permite negativos|
|`substring(start, end)`|entre `start` y `end`|los interpreta como `0`|
|`substr(start, length)`|desde `start`, `length` caracteres|permite `start` negativo|

> Todos los anteriores realizan la misma tarea, pero debemos tener en cuenta que
> `substr` no es parte de las especificación del `core` de JavaScript, sino del
> *Anexo* B, que cubre funcionalidades exclusivas de los navegadores. Pero en la
> práctica funciona en todos los entornos.

## Comparando strings

Los strings son comparados caracter por caracter en orden alfabético.

Pero existen algunos casos raros:

1. Las minúsculas son siempre *"mayores"* que las mayúsculas:

   ```js
   console.assert('a' > 'Z');
   ```

2. Los caracteres con signos diacríticos, son mayores que todos los otros
   caracteres:

   ```js
   console.assert('Ñandu' > 'Zebra');
   ```

Para entender lo que sucede, veamos un poco como se representan internamente
los strings en JavaScript

Los strings se codifican usando [UTF-16](https://en.wikipedia.org/wiki/UTF-16).
Esto quiere decir que a cada caracter, le corresponde un código numérico.
Contamos con métodos especiales que nos permite ir y venir entre un caracter
y el código que lo representa.

`str.codePointAt(pos)`: Devuelve el código del caracter en la posición `pos`:

```js
console.assert('z'.codePointAt(0) === 122);
console.assert('Z'.codePointAt(0) === 90);
```

`String.fromCodePoint(code)`: Crea un string a partir del `code` numérico:

```js
console.assert(String.fromCodePoint(90) === 'Z');
```

Ahora veamos cuáles son los caracteres con códigos entre `65..220` (el
alfabeto):

```js
let alphabet = '';
for (let i = 65; i <= 122; i += 1) {
  alphabet += String.fromCodePoint(i);
}

console.assert(
  alphabet === 'ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz',
);
```

Ahora se ve claro por qué `a > Z`.

## Resumen

* Hay 3 tipos de comillas. Las tildes invertidas no permiten definir strings
  multilineales e interpolar valores.
* Los Strings en JavaScript se codifican usando UTF-16.
* Existen caracteres especiales como `\n`.
* Para obtener un caracter espec[ifico usamos: `[]`.
* Para obtener un substring, usamos: `slice` o `substring`.

Quedan varios métodos bien útiles:

* `str.trim()` -- quita espacios extras del comienzo y fin del string.
* `str.repeat(n)` -- repite el string `n` veces.
* ... mucho más. chequea [Strings en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)
  para más detalles.

Los `Strings` además tienen métodos para buscar y reemplazar usando *expresiones
regulares*, pero eso queda para otra oportunidad.

***

## Recursos sugeridos

* [UTF-16](https://en.wikipedia.org/wiki/UTF-16)
* [ASCII](https://ascii.cl/es/)
* [Js Strings Internals y Unicode](https://javascript.info/string#internals-unicode)
* [Usos de las tildes invertidas](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings)
