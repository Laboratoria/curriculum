---
tracks:
  - web-dev
env: cjs
---

# getElementOfArrayProperty

Escriba una función llamada `getElementOfArrayProperty`.

Dado un objeto, una llave (nombre de una propiedad) y un índice numérico,
`getElementOfArrayProperty` devuelve el valor del elemento en el índice dado del
arreglo localizado dentro del objeto dado en la llave dada.

Notas:

- Si el arreglo está vacío, debería devolver `undefined`.
- Si el índice dado está fuera de rango del arreglo ubicado en la llave dada,
  debería devolver `undefined`.
- Si la propiedad en la llave dada no es un arreglo, debería devolver
  `undefined`.
- Si no hay ninguna propiedad en la llave, debería devolverse `undefined`.

Ejemplo de entrada:

```js
const obj = {
 key: ['Jamil', 'Albrey'],
};

const output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // => 'Jamil'
```
