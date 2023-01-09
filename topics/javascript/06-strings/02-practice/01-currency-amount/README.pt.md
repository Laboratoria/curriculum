# Montantes sem moeda

* Environment: `js`

***

Dado um `array` de valores em diferentes moedas, retorne apenas os valores sem
importar a moeda.

> As moedas participantes são apenas pesos chilenos ($ CLP), pesos mexicanos
> ($ MXN) e soles (S/. PEN).

Exemplo:

```javascript
const output = currencyAmount([ '$ 600 CLP', '$ 1000 MXN', 'S/. 200 PEN' ]);

console.log(ouput); // -> [ 600, 1000, 200 ]
```
