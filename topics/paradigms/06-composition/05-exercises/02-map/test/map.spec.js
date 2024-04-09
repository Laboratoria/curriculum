import { assert } from 'chai';
import Submission from '../solution/map.js';


describe('doubleAll()', () => {

  it('debería retornar array con números multiplicados por 2', () => {
    assert.deepEqual(Submission([1, 2, 3]), [2, 4, 6]);
  });

  it('NO debería modificar array de entrada', () => {
    const input = [1, 2, 3];
    assert.deepEqual(Submission(input), [2, 4, 6]);
    assert.deepEqual(input, [1, 2, 3]);
  });

  it('NO debería usar for o while', () => {
    assert.equal(/(for|while)\s+\(/g.test(Submission.toString()), false);
  });

  it('debería invocar Array.prototype.map', () => {
    const map = Array.prototype.map;
    let mapCount = 0;
    let operationCount = 0;

    Array.prototype.map = function (fn) {
      mapCount++;
      return map.call(this, function () {
        operationCount++;
        return fn.apply(null, Array.prototype.slice.call(arguments));
      });
    };

    assert.deepEqual(Submission([1, 2, 3]), [2, 4, 6]);
    assert.equal(mapCount, 1);
    assert.equal(operationCount, 3);

    Array.prototype.map = map;
  });

});
