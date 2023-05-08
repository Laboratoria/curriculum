# getSumOfAllElementsAtProperty

Escreva uma função chamada "getSumOfAllElementsAtProperty".

Dado um objeto e uma chave, "getSumOfAllElementsAtProperty" devolve a soma de
todos os elementos da matriz.

Notas:

* Se o _array_ estiver vazio, ela deve devolver 0.
* Se a propriedade na chave fornecida não for um _array_, ela deverá devolver 0.
* Se não houver nenhuma propriedade na chave fornecida, ela deverá devolver 0.

```javascript
const obj = {
  key: [4, 1, 8],
};

const output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // -> 13
```
