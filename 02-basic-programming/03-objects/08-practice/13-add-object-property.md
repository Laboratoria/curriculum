# 13 - Add Object Property

## addObjectProperty

Escreva uma função chamada "addObjectProperty".

Dados dois objetos e uma chave, "addObjectProperty" define uma nova propriedade no primeiro objeto na chave determinada. O valor dessa nova propriedade é o segundo objeto completo.

```text
var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }
```



