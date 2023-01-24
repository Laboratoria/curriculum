---
env: cjs
---

# getProductOfAllElementsAtProperty

Escribe una función llamada `getProductOfAllElementsAtProperty`.

Dado un objeto y una key, `getProductOfAllElementsAtProperty` devuelve el
producto de todos los elementos del array.

Notas:

- Si el array está vacío, debe devolver 0.
- Si la propiedad en la key dada no es un array, debe devolver 0.
- Si no hay ninguna propiedad en la key dada, debe devolver 0.

```js
const obj = {
  key: [1, 2, 3, 4],
};

const output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // => 24
```
