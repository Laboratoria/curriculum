import { assert } from 'chai';
import calculateTip from '../solution/calculateTip.js';

describe('calculateTip()', () => {
  it('debería regresar 15, para (100)', () => {
    assert.deepEqual(calculateTip(100), 15);
  });

  it('debería regresar 4.5, para (30)', () => {
    assert.deepEqual(calculateTip(30), 4.5);
  });

  it('debería regresar 0, para (0)', () => {
    assert.deepEqual(calculateTip(0), 0);
  });

  it('debería regresar 7.5, para (50)', () => {
    assert.deepEqual(calculateTip(50), 7.5);
  });
});
