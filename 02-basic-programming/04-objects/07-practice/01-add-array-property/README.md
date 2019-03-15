# addArrayProperty

Escreva uma função chamada "addArrayProperty\(obj, key, array\)".

Dado um objeto, uma chave \(_key_\) e um array, "addArrayProperty" define uma
nova propriedade no objeto na chave fornecida, com seu valor definido no
_array_ especificado.

Exemplo de entrada:

```javascript
var myObj = {};
var myStr = 'myProperty';
var myArray = [1 ,3 ];

addArrayProperty(myObj, myStr, myArray);
console.log(myObj.myProperty); // -> [1, 3]
```
