# getElementOfArrayProperty

Escreva uma função chamada `getElementOfArrayProperty`.

Dado um objeto, uma chave e um índice numérico, `getElementOfArrayProperty`
retorna o valor do elemento no índice fornecido do array localizado dentro do
objeto informado na chave especificada.

Notas:

* Se a matriz estiver vazia, ela deve devolver `undefined`.
* Se o índice fornecido estiver fora do intervalo da matriz localizada na chave
  especificada, ela deverá devolver `undefined`.
* Se a propriedade na chave fornecida não for uma matriz, ela deve devolver
  `undefined`.
* Se não houver propriedade na chave, ela deve devolver `undefined`.

Exemplo de entrada:

```javascript
const obj = {
 key: ['Jamil', 'Albrey'],
};

const output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'
```
