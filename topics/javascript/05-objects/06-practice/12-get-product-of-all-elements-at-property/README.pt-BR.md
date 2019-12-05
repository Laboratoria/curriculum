# getProductOfAllElementsAtProperty

Escreva uma função chamada `getProductOfAllElementsAtProperty`.

Dado um objeto e uma chave, `getProductOfAllElementsAtProperty` retorna o
produto de todos os elementos do _array_.

Notas:

* Se o _array_ estiver vazio, ela deve devolver 0.
* Se a propriedade na chave fornecida não for um _array_, ela deverá devolver 0.
* Se não houver nenhuma propriedade na chave fornecida, ela deverá devolver 0.

```javascript
const obj = {
  key: [1, 2, 3, 4],
};

const output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // -> 24
```
