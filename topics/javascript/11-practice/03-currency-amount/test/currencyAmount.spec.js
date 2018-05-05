const Assert = require('chai').assert;
const currencyAmount = require('../solution/currencyAmount');

describe('currencyAmount()', () => {
  it('debería regresar los montos cuando es un arreglo de montos enteros en monedas variadas', () => {
    const amounts = [ '$ 600 CLP', '$ 1000 MXN', 'S/. 200 PEN' ];
    const output = currencyAmount(amounts);
    Assert.deepEqual(output, [ 600, 1000, 200 ]);
  });

  it('debería regresar los montos cuando es un arreglo de montos reales en monedas variadas', () => {
    const amounts = [ '$ 825.50 CLP', '$ 999.99 MXN', 'S/. 500.25 PEN' ];
    const output = currencyAmount(amounts);
    Assert.deepEqual(output, [ 825.50, 999.99, 500.25 ]);
  });

  it('debería regresar los montos cuando es un arreglo de montos reales con una sola moneda', () => {
    const amounts = [ '$ 600 MXN', '$ 100.50 MXN', '$ 1349.99 MXN' ];
    const output = currencyAmount(amounts);
    Assert.deepEqual(output, [ 600, 100.50, 1349.99 ]);
  });

  it('debería regresar un arreglo vacío cuando es un arreglo vacíơ', () => {
    const amounts = [];
    const output = currencyAmount(amounts);
    Assert.deepEqual(output, []);
  });
});
