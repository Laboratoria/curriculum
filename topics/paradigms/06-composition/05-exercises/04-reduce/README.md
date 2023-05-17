---
env: cjs
---

# Reduce

## Tarea

Dado un `Array` de strings, usa `Array#reduce` para crear un objeto que contenga
el número de veces que aparece cada string en el array. Retorna el object
directamente (no hay necesidad de hacer `console.log`).

## Ejemplo

```js
const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

console.log(countWords(inputWords))

// => { Apple: 2, Banana: 1, Durian: 3 }
```

## Argumentos

* `inputWords`: Un array de Strings.

## Requisitos

* No uses ningún bucle `for/while` o `Array.prototype.forEach`.
* No crees ninguna función extra (helpers, ...).

## Recursos

* [Reduce - Wikipedia](https://en.wikipedia.org/wiki/Reduce_(higher-order_function))
* [Array.reduce - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
