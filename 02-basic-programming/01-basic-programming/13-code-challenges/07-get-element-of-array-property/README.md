# getElementOfArrayProperty

Escriba una función llamada `getElementOfArrayProperty`.

Dado un objeto, una clave y un índice numérico, `getElementOfArrayProperty` devuelve el valor del elemento en el índice dado de la matriz localizada dentro del objeto dado en la clave dada.

Notas:
* Si el array está vacío, debería volver `undefined`.
* Si el índice dado está fuera de rango del array ubicado en la tecla dada, debería volver `undefined`.
* Si la propiedad en la clave dada no es un array, debería devolverse `undefined`.
* Si no hay ninguna propiedad en la llave, debería devolverse `undefined`.

Ejemplo de entrada:

```js
var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'
```
