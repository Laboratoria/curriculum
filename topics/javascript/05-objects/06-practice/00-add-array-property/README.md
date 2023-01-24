---
env: cjs
---

# addArrayProperty

Escribe una función llamada `addArrayProperty(obj, key, array)`.

Dado un objeto, una llave y un array, `addArrayProperty` asigna una nueva
propiedad sobre el objeto en la lave dada, con el array dado como valor.

Ejemplo de entrada:

```js
const myObj = {};
const myStr = 'myProperty';
const myArray = [1, 3];

addArrayProperty(myObj, myStr, myArray);
console.log(myObj.myProperty); // => [1, 3]
```
