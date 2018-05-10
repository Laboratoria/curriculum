# 11 - Get Sum of All Elements at Property

## getSumOfAllElementsAtProperty

Escreva uma função chamada "getSumOfAllElementsAtProperty".

Dado um objeto e uma chave, "getSumOfAllElementsAtProperty" retorna a soma de todos os elementos da matriz.

Notas:

* Se o _array_ estiver vazia, ela deve retornar 0.
* Se a propriedade na chave fornecida não for um _array_, ela deverá retornar 0.
* Se não houver nenhuma propriedade na chave fornecida, ela deverá retornar 0.

```text
var obj = {
  key: [4, 1, 8];
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // -> 13
```

