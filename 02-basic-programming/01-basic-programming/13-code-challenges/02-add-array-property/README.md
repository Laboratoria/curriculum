# addArrayProperty

Escribe una función llamada "addArrayProperty(obj, key, array)".

Dado un objeto, una clave y un array, "addArrayProperty" establece una nueva
propiedad  sobre el objeto en la clave dada, con su valor establecido en el
array dado.

Ejemplo de entrada:

```js
var myObj = {};
var myStr = 'myProperty';
var myArray = [1, 3];

addArrayProperty(myObj, myStr, myArray);
console.log(myObj.myProperty); // --> [1, 3]
```
