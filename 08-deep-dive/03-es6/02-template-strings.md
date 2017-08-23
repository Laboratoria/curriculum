# Template string

* Formato: `lectura` 
* Duración: `10 min`

Durante esta sesión nos aseguraremos,
que comprendas de manera general las ventajas que nos 
entrega `ES6` al trabajar con strings.


***

## Template String (Plantillas de cadenas de texto)

Con ECMAScript 6 se ha tratado de dar respuesta a algunas de las necesidades más
básicas de los programadores a la hora de trabajar con strings, introduciendo la
característica de las **plantillas de cadenas de texto**.

## Sintaxis para plantillas de cadenas de texto

El constructor de una plantilla de texto se invoca delimitando el string con el
carácter de **acento grave:** (\`). Es decir, lo que antes de ES2015 hubiese
sido:

```javascript
// ES5
var hello = "Hola Mundo";
// o bien
var hello = 'Hola Mundo';
```

Ahora puede expresar con:

```javascript
// ES6
let hello = `Hola Mundo`;
```

## Cadenas de texto de varias líneas

Podemos disponer de cadenas de texto de múltiples líneas, y pasar de esto:

```javascript
// ES5
var text = [
  'En un lugar',
  'de la mancha,',
  'de cuyo nombre',
  'no quiero acordarme'
].join('\n');
```

A esto:

```javascript
// ES6
var quijote = `En un lugar
 de la mancha,
 de cuyo nombre
 no quiero acordarme`;
```
En ES5, si queríamos crear un string con contenido no estático, no había muchas formas mejores de hacerlo que la siguiente:

```javascript
// ES5
var dani = {
    name: 'Daniel',
    age: 32
};

var greet = function(person) {
    return 'Hello! My name is ' + person.name + ' and I\'m ' + person.age + ' years old';
};

greet(dani);
```

Sin embargo, con ES2015 ahora podemos convertir la función `greet` en:

```javascript
// ES6
var greet = function(person) {
    return `Hello! My name is ${person.name} and I'm ${person.age} years old`;
};
```

Esto tiene una ventaja añadida: la de poder hacer sustituciones no solo por un valor, sino por cualquier expresión válida en JavaScript dentro de los símbolos de interpolación:

```javascript
let myAge = `Mi edad es ${person.age + 3} años`;
```

***

[Continuar](03-destructuring.md)