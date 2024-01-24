---
tracks:
  - web-dev
env: cjs
---

# addObjectProperty

Escribe una función llamada `addObjectProperty`.

Dado dos objetos y una llave, `addObjectProperty` establece una nueva propiedad
en el primer objeto en la llave dada. El valor de esta nueva propiedad es el
segundo objeto completo.

```js
const person1 = {
  name: 'Joe Blow',
  role: 'schlub',
};

const person2 = {
  name: 'Mr. Burns',
  role: 'supervisor',
};

addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // => { name: 'Mr. Burns', role: 'supervisor' }
```
