---
env: cjs
---

# Montos sin moneda

Dado un arreglo de montos en distintas monedas, retornar solo los valores sin
importar la moneda.

> Las monedas participantes solo son pesos chilenos ($ CLP), pesos mexicanos
> ($ MXN) y soles (S/. PEN).

Ejemplo:

```javascript
const output = currencyAmount([ '$ 600 CLP', '$ 1000 MXN', 'S/. 200 PEN' ]);

console.log(ouput); // -> [ 600, 1000, 200 ]
```
