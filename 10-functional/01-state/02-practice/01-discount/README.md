# Aplicando descuentos

* Environment: `js`

***

Un día aparece un bug en una tienda online en la que estás trabjando. Alguien
del equipo ha añadido una nueva funcionalidad para poder aplicar descuentos a
clientes frecuentes. Para ello, se ha implementado una función (`applyDiscount`)
que recibe un arreglo de objetos (el `cart`), cada uno con un precio, y un
porcentaje de descuento. La función retorna un arreglo de objetos con los
precios modificados de acuerdo al descuento.

Ahora, el problema es que esta función a veces se usa para calcular lo que
ahorrarías con un descuento, como "preview", pero para sorpresa de todxs, la
función parece estar mutando el cart original en vez de crear un arreglo nuevo,
y además los objetos dentro del arreglo también han sido mutados.

```js
const discount = .2;

// Broken: returns new array but mutates same object references.
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

## Tarea

## Ejemplo

```js
const myCart = [
  { price: 1 },
  { price: 2 },
  { price: 3 }
];

const cartWithDiscount = applyDiscount(myCart);
console.log(myCart, cartWithDiscount);
```
