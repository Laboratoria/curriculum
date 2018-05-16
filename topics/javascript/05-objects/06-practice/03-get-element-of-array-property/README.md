# getElementOfArrayProperty

Escriba una función llamada `getElementOfArrayProperty`.

Dado un objeto, una clave y un índice numérico, `getElementOfArrayProperty`
devuelve el valor del elemento en el índice dado del arreglo localizado dentro
del objeto dado en la clave dada.

Notas:

- Si el arreglo está vacío, debería devolver `undefined`.
- Si el índice dado está fuera de rango del arreglo ubicado en la clave dada,
  debería devolver `undefined`.
- Si la propiedad en la clave dada no es un arreglo, debería devolver
  `undefined`.
- Si no hay ninguna propiedad en la clave, debería devolverse `undefined`.

Ejemplo de entrada:

```js
var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'
```
