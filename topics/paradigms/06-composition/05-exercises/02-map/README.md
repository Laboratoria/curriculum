---
env: cjs
---

# Map

## Tarea

Refactorizar el siguiente código reemplazando el bucle `for` con `Array#map`:

```js
const doubleAll => (numbers) => {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }

  return result;
};
```

## Argumentos

* numbers: Un Array de 0 a 20 números enteros entre 0 y 9

## Requisitos

* Tu solución debe usar `Array.prototype.map()`.
* No uses ningún bucle `for/while` o `Array.prototype.forEach`.
* No crees ninguna función extra (helpers, ...).

## Recursos

* [Array.map - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
