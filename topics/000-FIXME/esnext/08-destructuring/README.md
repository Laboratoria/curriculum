# Asignación desestructurada de arrays y objetos

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

## Desestructuración de Arrays

La sintaxis de _destructuring assignment_ es una expresión de JavaScript que
hace posible la extracción de datos de arreglos u objetos usando una sintaxis
que equivale a la construcción de arreglos y objetos literales.

Algo particularmente útil que puedes hacer con destructuring assignment es leer
una estructura completa en una sola sentencia, aunque también otras cosas
interesantes que puedes hacer, como se muestra en los siguientes ejemplos:

```js
const numbers = ["1", "2", "3"];

// sin destructuring
const one   = numbers[0];
const two   = numbers[1];
const three = numbers[2];

// con destructuring
const [uno, dos, tres] = numbers;

console.log(one, two, three); // 1 2 3
console.log(uno, dos, tres); // 1 2 3
```

Podemos asignar de forma desestructurada sin una declaración en la asignación:

```js
let ichi, ni, san;
[ichi, ni, san] = ['uno', 'dos', 'tres'];
```

Yendo un poco más allá, podemos utilizar funciones para devolver un conjunto de
valores y asignarlos de forma desestructurada:

```js
function users(){
  return ['joan', 'carlos', 'david', 'dani'];
}
```

De este modo podemos devolver cualquier número de valores de forma arbitraria.
Hasta aquí ninguna novedad, pero si utilizamos la asignación desestructurada:

```js
let [joan, carlos, david, dani] = users();
console.log(joan, carlos, david, dani); // 'joan' 'carlos' 'david' 'dani'
```

La asignación de variables se realiza en orden, el primer valor se asigna a la
primera variable, el segundo a la segunda... y así sucesivamente.

Puedes ignorar los valores de retorno en los que no estás interesado:

```js
function f() {
  return [1, 2, 3];
}

let [a, , b] = f();
console.log(`A es ${a}, B es ${b}`); // 'A es 1, B es 3'
```

Después de correr este código a vale 1 y b vale 3. El valor 2 es ignorado.
Puedes ignorar cualquiera de los valores retornados (o incluso todos).
