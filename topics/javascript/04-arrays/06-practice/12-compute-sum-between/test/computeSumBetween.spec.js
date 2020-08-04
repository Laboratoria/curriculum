const { assert } = require('chai');
const computeSumBetween = require('../solution/computeSumBetween');

describe('computeSumBetween()', () => {
  it("debería regresar [{a: 1, b: 2, c: true}, {a: 10, b: 20, c: false}], para [[['a', 1], ['b', 2], ['c', true]],[['a', 10], ['b', 20], ['c', false]]]", () => {
    const output = computeSumBetween(5, 5);

    assert.deepEqual(output, 0);
  });

  it("debería regresar [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}], para [[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]", () => {
    const output = computeSumBetween(2, 5);

    assert.deepEqual(output, 9);
  });
});
