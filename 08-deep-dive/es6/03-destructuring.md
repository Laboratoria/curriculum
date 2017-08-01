# Iterators - Classes

An iterator is a structured pattern for pulling information from a source in one-at-a-time fashion. This pattern has been around programming for a long time. And to be sure, JS developers have been ad hoc designing and implementing iterators in JS programs since before anyone can remember, so it's not at all a new topic.

What ES6 has done is introduce an implicit standardized interface for iterators. Many of the built-in data structures in JavaScript will now expose an iterator implementing this standard. And you can also construct your own iterators adhering to the same standard, for maximal interoperability.


# Desestructuración de arrays y objetos

## Desestructuración de Arrays

```javascript
const numbers = ["1", "2", "3"];

// without destructuring
const one   = numbers[0];
const two   = numbers[1];
const three = numbers[2];

// with destructuring
const [uno, dos, tres] = numbers;

console.log(one, two, three); // 1 2 3
console.log(uno, dos, tres); // 1 2 3
```

Podemos asignar de forma desestructurada sin una declaración en la asignación:

```javascript
let ichi, ni, san;
[ichi, ni, san] = ["uno", "dos", "tres"];
```

Yendo un poco más allá, podemos utilizar funciones para devolver un conjunto de valores y asignarlos de forma desestructurada:

```javascript
function users(){
  return ['joan', 'carlos', 'david', 'dani'];
}
```

De este modo podemos devolver cualquier número de valores de forma arbitraria. Hasta aquí ninguna novedad, pero si utilizamos la asignación desestructurada:

```javascript
let [joan, carlos, david, dani] = users();
console.log(joan, carlos, david, dani); // joan carlos david dani
```

La asignación de variables se realiza en orden, el primer valor se asigna a la primera variable, el segundo a la segunda... y así.














* next() Iteration
* Iterator Loop
* Custom Iterators
* Iterator Consumption
* Generators