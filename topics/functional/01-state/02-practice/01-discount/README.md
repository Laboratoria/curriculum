---
tracks:
  - web-dev
env: cjs
---

# Aplicando descuentos

Un día aparece un bug en una tienda online en la que estás trabjando. Alguien
del equipo ha añadido una nueva funcionalidad para poder aplicar descuentos a
clientes frecuentes. Para ello, se ha implementado una función
(`applyDiscount(cart, discount)`) que recibe un arreglo de objetos (el `cart`),
cada uno con un precio, y un porcentaje de descuento. La función retorna un
arreglo de objetos con los precios modificados de acuerdo al descuento.

Por ejemplo:

```js
const myCart = [
  { price: 1 },
  { price: 2 },
  { price: 3 }
];

const cartWithDiscount = applyDiscount(myCart, .3);
console.log(myCart, cartWithDiscount);
```

Ahora, después de investigar un rato descubrimos dos problemas:

1. La función parece estar mutando los objetos dentro del arreglo en vez de
   crear objetos nuevos!
2. La función parece estar ignorando el descuento que le indicamos en el
   argumento `discount` y siempre aplica un 20%!

El código en cuestión es este:

```js
const discount = .2;

// Broken: returns new array but mutates objects.
const applyDiscount = (cart) => {
  if (!cart.length) {
    return [];
  }

  const current = cart.shift();
  current.price *= (1 - discount);
  return [current].concat(applyDiscount(cart));
};

module.exports = applyDiscount;
```

En resumen, tal y como está ahora, la función no es _pura_ ya que tiene efectos
colaterales (modifica el arreglo `cart`) y hace uso de una variable fuera de su
scope (`discount`) en vez de un _argumento_.

## Tarea

Refactoriza la función `applyDiscount()` para convertirla en una función pura.
Para ello tendrás que:

* Evitar mutar los objetos del arreglo que recibe como argumento.
* Usar el argumento `discount` que recibe la función durante la invocación en
  vez de la variable `discount` declarada fuera de la función.
