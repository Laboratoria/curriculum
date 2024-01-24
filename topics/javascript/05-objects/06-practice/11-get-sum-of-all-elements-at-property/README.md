---
tracks:
  - web-dev
env: cjs
---

# getSumOfAllElementsAtProperty

Escribe una función llamada `getSumOfAllElementsAtProperty`.

Dado un objeto y una key, `getSumOfAllElementsAtProperty` devuelve la suma de
todos los elementos del array.

Notas:

- Si el array está vacío, debe devolver `0`.
- Si la propiedad en la key dada no es un array, debe devolver `0`.
- Si no hay ninguna propiedad en la key dada, debe devolver `0`.

```js
const obj = {
  key: [4, 1, 8],
};

const output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // => 13
```
