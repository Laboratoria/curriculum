import { assert } from 'chai';
import powerOfTwo from '../solution/powerOfTwo.js';

describe('powerOfTwo()', () => {
  it('debería regresar la potencia de 2 elevado al número ingresado cuando es positivo', () => {
    const output = powerOfTwo(10);
    assert.deepEqual(output, 1024);
  });

  it('debería regresar 1 cuando el número ingresado es 0', () => {
    const output = powerOfTwo(0);
    assert.deepEqual(output, 1);
  });

  it('debería regresar 1 cuando el número ingresado es negativo', () => {
    const output = powerOfTwo(-5);
    assert.deepEqual(output, 1);
  });
});
