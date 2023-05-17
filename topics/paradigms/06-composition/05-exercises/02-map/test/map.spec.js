const Assert = require('chai').assert;
const Submission = require('../solution/map');


describe('doubleAll()', () => {

  it('debería retornar array con números multiplicados por 2', () => {
    Assert.deepEqual(Submission([1, 2, 3]), [2, 4, 6]);
  });

  it('NO debería modificar array de entrada', () => {
    const input = [1, 2, 3];
    Assert.deepEqual(Submission(input), [2, 4, 6]);
    Assert.deepEqual(input, [1, 2, 3]);
  });

  it('NO debería usar for o while', () => {
    Assert.equal(/(for|while)\s+\(/g.test(Submission.toString()), false);
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

    Assert.deepEqual(Submission([1, 2, 3]), [2, 4, 6]);
    Assert.equal(mapCount, 1);
    Assert.equal(operationCount, 3);

    Array.prototype.map = map;
  });

});
