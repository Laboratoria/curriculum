# addFullNameProperty

Escreva uma função chamada "addFullNameProperty".

Dado um objeto que tem uma propriedade `firstName` e uma propriedade `lastName`,
`addFullNameProperty(person)` retorna um novo objeto com as mesmas propriedades
que o objeto recebido, mas com mais uma propriedade `fullName` cujo valor é
uma string com o nome e sobrenome separados por um espaço.

```javascript
const person = {
  firstName: 'Jade',
  lastName: 'Smith',
};

const personWithFullName = addFullNameProperty(person);

console.log(personWithFullName.fullName); // => 'Jade Smith'
console.log(personWithFullName.firstName); // => 'Jade'
console.log(personWithFullName.lastName); // => 'Smith'
```
