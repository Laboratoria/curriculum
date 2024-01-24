---
tracks:
  - web-dev
env: cjs
---

# reduce

Una función recursiva es una función que se llama a sí misma. Por ejemplo, esta
función recursiva recibe un Array de palabras, y retorna un arreglo con las
mismas palabras, pero todas en mayúsculas.

```js
function toUpperArray(items) {
  if (!items.length) {                      // caso base
    return [];
  }

  let head = items[0];                      // elemento sobre el que operar
  head = head.toUpperCase();                // llevamos a cabo operación
  const tail = items.slice(1);                // siguiente
  return [head].concat(toUpperArray(tail)); // recursión
}

toUpperArray(['hello', 'world']); // => ['HELLO', 'WORLD']
```

El objetivo de este ejercicio es que te familiarices con la recursión a través
de la implementación de una interfaz conocida usando una función recursiva.

## Tarea

Implementa `Array#reduce` usando recursión.

Tu función `reduce` recibirá un arreglo de palabras, una función, y un valor
inicial al que iremos sumando la cuenta de apariciones de cada palabra.

Por simplicidad, tu implementación de `reduce` **no necesita imitar el
comportamiento de un reduce sin valor inicial**. Puedes asumir que el valor
siempre se incluye en la invocación.

## Argumentos

* `arr`: El Array que queremos reducir
* `fn`: Function para usar en cada paso de la reducción. Igual que
  `Array#reduce`, esta función debe recibir `previousValue`, `currentValue`,
  `index` y el `array` sobre el que estamos iterando.
* `init`: Valor inicial de la reducción. A diferencia de `Array#reduce`, este
  valor es obligatorio (puedes asumir que siempre se incluye).

## Ejemplo

```js
// Tu función `reduce` debe comportarse como `Array.reduce`, pero recibirá el
// arreglo sobre el que operar como primer argumento:

reduce([1,2,3], function(prev, curr, index, arr) {
  return prev + curr
}, 0)
// => 6
```

## Requisitos

* No uses bucles `for/while` ni `Array#forEach`.
* No uses métodos de `Array` como `Array#map` o `Array.reduce`.

## Recursos

* [Wikipedia - Recursion](https://en.wikipedia.org/wiki/Recursion)
* [MDN - Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
