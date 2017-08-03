# Template string

Con ECMAScript 6 se ha tratado de dar respuesta a algunas de las necesidades más
básicas de los programadores a la hora de trabajar con strings, introduciendo la
característica de las **plantillas de cadenas de texto**.

## Sintaxis para plantillas de cadenas de texto

El constructor de una plantilla de texto se invoca delimitando la string con el
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
