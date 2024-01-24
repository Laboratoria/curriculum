---
tracks:
  - web-dev
env: cjs
---

# Cuenta de restaurante

Imagina que has salido a comer con tus cuatro mejores amigas.  La cuenta total
del consumo es de 50 dólares, pero a eso debes agregarle el 10% de Impuesto al
Valor Agregado (IVA). Quieres dividir la cuenta equitativamente entre las cinco.
Para eso vamos a crear este programa.

El ejercicio incluye un _boilerplate_ (_plantilla_) que ya incluye una función
(`restaurantBill`), la cual espera recibir un _argumento_ (`bill`) con el monto
de la cuenta antes de impuestos (un _número_), y espera que retornemos un
_string_ con la cantidad que le toca pagar a cada una ya teniendo en cuenta el
10% de impuestos (e incluyendo el símbolo de dólar).

El _boilerplate_ (_plantilla_):

```js
const restaurantBill = (bill) => {
  const tax = /* ??? */

  /* ??? */

  return /* ??? */
};
```

Sigue los pasos a continuación para completar la implementación de la _función_
`restaurantBill`.

1. Asigna el resultado de multiplicar `bill` por `10%` en la variable `tax`
   (impuesto en inglés). Tip: `10%` en decimal se escribe `0.1`.
2. Crea una variable llamada `total` y asígnale el resultado de sumar `bill` más
  `tax`.
3. Retorna el monto que cada una debe pagar (`total` divido entre 5), con el
   símbolo `$` adelante (por ejemplo: `$11`). Tip: puedes usar concatenación de
   _strings_ (o _string literals_) para crear un _string_ con el número y el
   símbolo `$` adelante.

Ejemplo:

```js
const output = restaurantBill(50);
console.log(output); // --> '$11'
```

¡Mucha suerte!
