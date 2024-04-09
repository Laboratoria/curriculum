import { assert } from 'chai';
import restaurantBill from '../solution/restaurantBill.js';

describe('restaurantBill()', () => {
  it('debería regresar $11, para 50', () => {
    const preTaxAmount = 50;
    const tax = preTaxAmount * 0.1;
    const total = `$${(preTaxAmount + tax) / 5}`;
    assert.deepEqual(restaurantBill(preTaxAmount), total);
  });

  it('debería regresar $22, para 100', () => {
    const preTaxAmount = 100;
    const tax = preTaxAmount * 0.1;
    const total = `$${(preTaxAmount + tax) / 5}`;
    assert.deepEqual(restaurantBill(preTaxAmount), total);
  });

  it('debería regresar $18.7, para 85', () => {
    const preTaxAmount = 85;
    const tax = preTaxAmount * 0.1;
    const total = `$${(preTaxAmount + tax) / 5}`;
    assert.deepEqual(restaurantBill(preTaxAmount), total);
  });
});
