---
env: cjs
---

# addFullNameProperty

Escribe una función llamada `addFullNameProperty(person)`.

Dado un objeto `person` con una propiedad `firstName` y una propiedad
`lastName`, `addFullNameProperty(person)` debe retornar un nuevo objeto con las
mismas propiedades que el objeto recibido pero con una propiedad más `fullName`,
cuyo valor debe ser una cadena (string) con el nombre y el apellido separados
por un espacio.

```js
const person = {
  firstName: 'Jade',
  lastName: 'Smith',
};

const personWithFullName = addFullNameProperty(person);

console.log(personWithFullName.fullName); // => 'Jade Smith'
console.log(personWithFullName.firstName); // => 'Jade'
console.log(personWithFullName.lastName); // => 'Smith'
```
