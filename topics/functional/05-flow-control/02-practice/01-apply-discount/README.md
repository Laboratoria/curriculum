---
env: cjs
---

# Reemplaza iteración con recursión

## Tarea

Refactoriza la función `applyDiscount()` reemplazando iteración con recursión y
asegúrate de que no tenga efectos secundarios.

```js
// Broken: mutates array as well as objects!!
const applyDiscount = (cart, discount) => {
  for (let i = 0; i < cart.length; i++) {
    cart[i].price *= (1 - discount);
  }
  return cart;
};

module.exports = applyDiscount;
```

## Ejemplo

Ejemplo de uso de la función:

```js
const myCart = [
  { price: 1 },
  { price: 2 },
  { price: 3 }
];

const cartWithDiscount = applyDiscount(myCart, .3);
console.log(myCart, cartWithDiscount);
// => [ { price: 0.7 }, { price: 1.4 }, { price: 2.0999999999999996 } ]
```
