import { assert } from 'chai';
import calculateBillTotal from '../solution/calculateBillTotal.js';

describe('calculateBillTotal()', () => {
  it('debería regresar 62.25, para 50', () => {
    const preTaxAndTipAmount = 50;
    const tax = preTaxAndTipAmount * (0.095);
    const tip = preTaxAndTipAmount * (0.15);
    const total = preTaxAndTipAmount + tax + tip;

    assert.deepEqual(calculateBillTotal(preTaxAndTipAmount), total);
  });

  it('debería regresar 24.9, para 20', () => {
    const preTaxAndTipAmount = 20;
    const tax = preTaxAndTipAmount * (0.095);
    const tip = preTaxAndTipAmount * (0.15);
    const total = preTaxAndTipAmount + tax + tip;

    assert.deepEqual(calculateBillTotal(preTaxAndTipAmount), total);
  });

  it('debería regresar 41.085, para 33', () => {
    const preTaxAndTipAmount = 33;
    const tax = preTaxAndTipAmount * (0.095);
    const tip = preTaxAndTipAmount * (0.15);
    const total = preTaxAndTipAmount + tax + tip;

    assert.deepEqual(calculateBillTotal(preTaxAndTipAmount), total);
  });
});
