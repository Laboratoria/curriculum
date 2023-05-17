const Assert = require('chai').assert;
const Submission = require('../solution/parseItems');


describe('parseItems()', () => {

  it('debería retornar un nuevo arreglo', () => {
    const original = ['6', '3', '5', '2', '4'];
    const parsed = Submission(original);

    Assert.notDeepEqual(original, parsed);
    Assert.notEqual(original, parsed);
  });

  it('debería retornar un arreglo de números', () => {
    Submission(['6', '3', '5', '2', '4']).forEach(Assert.isNumber);
  });

  it('debería retornar un arreglo ordenado', () => {
    Assert.deepEqual(Submission(['6', '3', '5', '2', '4']), [2, 3, 4, 5, 6]);
  });

  it('no debería mutar arreglo de entrada', () => {
    const original = ['6', '3', '5', '2', '4'];
    const parsed = Submission(original);
    Assert.deepEqual(original, ['6', '3', '5', '2', '4']);
  });

});
