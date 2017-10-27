# Mensajes de error

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `60min`

## Objetivos de Aprendizaje

* Conocer los tipos diferentes de mensajes de error y el vocabulario en esos
  mensajes para resolver problemas en el código.

***

Todos hacen errores, incluso programadores con mucha experiencia.
Afortunadamente, la consola del Dev Tools te dirá cuando tienes un error.
Desafortunadamente, estos mensajes pueden ser difícil de comprender, y a veces
no es tan obvio que significan. El propósito de este curso es explorar algunos
errores comunes y sus significados, y así resuelvas problemas en el código.

## Errores Comunes

Hay muchos tipos de errores, pero hay un poco que son muy comunes. Lee estes
referencias para comprender los errores más comunes.

### ReferenceError: "x" is not defined

[ReferenceError: "x" is not defined - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Errors/Not_defined)

### SyntaxError: Unexpected token

Un "token" es una pieza pequena del código. Por ejemplo, variables, funciones,
operadores, y palabras claves (como `if` o `while`) todos son tokens.

La palabra "unexpected" significa "inesperado", entonces si tengas un token
inesperado, significa que el navegador estaba leyendo el código hasta que llegó
a algo que no debe estar allá. Usualmente, ese significa que hay algo
desaparecido (como un coma o un `+`) justo antes del justo antes del
token inesperado.

[SyntaxError: Unexpected token - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Errors/Unexpected_token)

Ejemplos:

```javascript
var foo = 'Nicole's code';
// Uncaught SyntaxError: Unexpected identifier (Chrome)
// SyntaxError: Unexpected token, expected ; (repl.it)
```

```javascript
var list = [1, 2,

var instruments = [
  'Ukulele',
  'Guitar',
  'Piano'
};
// Uncaught SyntaxError: Unexpected token var (Chrome)
// SyntaxError: Unexpected token (repl.it)
```

```javascript
var data = [{foo: 'bar'} {bar: 'foo'}];
// Uncaught SyntaxError: Unexpected token { (Chrome)
// SyntaxError: Unexpected token, expected , (repl.it)
```

A veces, en lugar de "Unexpected Token", verás algo como "Unexpected Identifier"
o "Unexpected Number". Estos son errores similares, y también casi siempre
significa que olvidaste agregar algo justo antes del
token inesperado. Afortunadamente, Chrome DevTools dirá el número de la linea
donde tengas el error, y repl.it no solo dirá el número de la linea, pero
también dirá el número de la columna.

![repl.it screenshot](https://github.com/Laboratoria/curricula-js/blob/632783f957accef3442934c87cecd254a202f2db/99-general-concepts/01-debugging/02-error-messages/img-line-number.png?raw=true)

### TypeError: "x" is not a function

[TypeError: "x" is not a function - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Errors/Not_a_function)

### SyntaxError: missing ) after argument list

[SyntaxError: missing ) after argument list - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list)

### Assignment in Conditional Expression

"Assignment in Conditional Expression" no es mensaje de error, sed mensaje de
advertencia en repl.it.

Significa que hay un operador de asignacion (`=`) en una condicional, pero debe
ser un operador de comparación (`===`).

Por ejemplo,

```javascript
if (x = 5) {
  console.log('x es 5.');
}
```

### Otras notas

Es importante conocer mensajes de error diferencian entre navegadores. La
guia de referencia MDN describe mensajes de Firefox - los mensajes de error en
otros navegadores son similares, pero no exactamente el mismo. Por ejemplo, los
mensajes

[Referencia MDN de Errores](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Errors)
