import { assert } from 'chai';
import Submission from '../solution/parseItems.js';


describe('parseItems()', () => {

  it('debería retornar un nuevo arreglo', () => {
    const original = ['6', '3', '5', '2', '4'];
    const parsed = Submission(original);

    assert.notDeepEqual(original, parsed);
    assert.notEqual(original, parsed);
  });

  it('debería retornar un arreglo de números', () => {
    Submission(['6', '3', '5', '2', '4']).forEach(assert.isNumber);
  });

  it('debería retornar un arreglo ordenado', () => {
    assert.deepEqual(Submission(['6', '3', '5', '2', '4']), [2, 3, 4, 5, 6]);
  });

  it('no debería mutar arreglo de entrada', () => {
    const original = ['6', '3', '5', '2', '4'];
    const parsed = Submission(original);
    assert.deepEqual(original, ['6', '3', '5', '2', '4']);
  });

});
