# removeStringValuesLongerThan

Escreva uma função chamada "removeStringValuesLongerThan".

Dado um número e um objeto, "removeStringValuesLongerThan" remove qualquer
propriedade no objeto dado cujos valores são strings maiores que o número
fornecido.

Exemplo de entrada:

```javascript
const obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
```
