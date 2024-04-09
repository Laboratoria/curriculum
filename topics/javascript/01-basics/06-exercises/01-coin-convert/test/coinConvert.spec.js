import { assert } from 'chai';
import coinConvert from '../solution/coinConvert.js';

describe('coinConvert()', () => {
  it('debería retornar [162.5, 900, 33000], para $50', () => {
    const dollars = 50;
    const soles = dollars * 3.25;
    const pesosMx = dollars * 18;
    const pesosCl = dollars * 660;
    assert.deepEqual(coinConvert(dollars), [soles, pesosMx, pesosCl]);
  });

  it('debería retornar [325, 1800, 66000], para $100', () => {
    const dollars = 100;
    const soles = dollars * 3.25;
    const pesosMx = dollars * 18;
    const pesosCl = dollars * 660;
    assert.deepEqual(coinConvert(dollars), [soles, pesosMx, pesosCl]);
  });

  it('debería retornar [243.75, 1350, 49500], para  $85', () => {
    const dollars = 85;
    const soles = dollars * 3.25;
    const pesosMx = dollars * 18;
    const pesosCl = dollars * 660;
    assert.deepEqual(coinConvert(dollars), [soles, pesosMx, pesosCl]);
  });
});
