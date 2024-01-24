---
tracks:
  - web-dev
env: cjs
---

# findShortestWordAmongMixedElements

Escribe una función llamada "findShortestWordAmongMixedElements".

Dado un array, "findShortestWordAmongMixedElements" devuelve la cadena más corta
dentro del array dado.

Notas:

- Si hay vínculos, debería devolver el primer elemento que aparezca en el array
  dado.
- Espera que el array tenga otros valores además de las cuerdas.
- Si el array dado está vacío, debería devolver una cadena vacía.
- Si el array dado no contiene cadenas, debería devolver una cadena vacía.

Ejemplo:

```js
const output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
```
