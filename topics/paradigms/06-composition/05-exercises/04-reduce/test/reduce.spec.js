const Assert = require('chai').assert;
const Submission = require('../solution/reduce');


describe('countWords()', () => {

  it('debería retornar un objeto que contenga el número de veces que aparece cada string en el array', () => {
    const input = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
    Assert.deepEqual(Submission(input), { Apple: 2, Banana: 1, Durian: 3 });
  });

  it('NO debería usar for o while', () => {
    Assert.equal(/(for|while)\s+\(/g.test(Submission.toString()), false);
  });

  it('debería invocar Array.prototype.reduce', () => {
    const reduce = Array.prototype.reduce;
    let reduceCount = 0;

    Array.prototype.reduce = function (fn, initial) {
      reduceCount++;
      return reduce.call(this, function () {
        return fn.apply(null, Array.prototype.slice.call(arguments));
      }, initial);
    };

    Assert.deepEqual(Submission(['foo', 'foo']), { foo: 2 });
    Assert.equal(reduceCount, 1);

    Array.prototype.reduce = reduce;
  });

});
