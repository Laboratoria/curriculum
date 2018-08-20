# Montantes sem moeda

Dado um vetor de montantes em distintas moedas, retornar somente os valores sem importar a moeda.

> As moedas participantes são somente pesos chilenos ($ CLP), pesos mexicanos ($ MXN) e soles (S/. PEN).

Exemplo:

```javascript
const output = currencyAmount([ '$ 600 CLP', '$ 1000 MXN', 'S/. 200 PEN' ]);

console.log(ouput); // -> [ 600, 1000, 200 ]
```
