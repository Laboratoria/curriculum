import { assert } from 'chai';
import firstAndLastToUpper from '../solution/firstAndLastToUpper.js';

describe('firstAndLastToUpper()', () => {
  it('debería retornar en mayúsculas la primer y última letra de un string', () => {
    assert.deepEqual(firstAndLastToUpper('murcielago'), 'MurcielagO');
    assert.deepEqual(firstAndLastToUpper('sol'), 'SoL');
    assert.deepEqual(firstAndLastToUpper('abecedario'), 'AbecedariO');
  });

  it('debería retornar "" si no se le ingresa ningún parametro', () => {
    assert.deepEqual(firstAndLastToUpper(''), '');
  });
});
