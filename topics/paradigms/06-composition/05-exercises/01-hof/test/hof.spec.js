import { assert } from 'chai';
import Submission from '../solution/hof.js';


describe('repeat', () => {

  it('debería exportar una función', () => {
    assert.equal(typeof Submission, 'function');
  });

  it('debería invocar la operación num veces', () => {
    let count = 0;
    Submission(_ => count++, 3);
    assert.equal(count, 3);
  });

});
