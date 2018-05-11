# 12 - Get Product of All Elements at Property

## getProductOfAllElementsAtProperty

Escreva uma função chamada `getProductOfAllElementsAtProperty`.

Dado um objeto e uma chave, `getProductOfAllElementsAtProperty` retorna o produto de todos os elementos do _array_.

Notas:

* Se o _array_ estiver vazio, ela deve retornar 0.
* Se a propriedade na chave fornecida não for um _array_, ela deverá retornar 0.
* Se não houver nenhuma propriedade na chave fornecida, ela deverá retornar 0.

```javascript
var obj = {
  key: [1, 2, 3, 4];
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // -> 24
```

