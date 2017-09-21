const Assert = require('chai').assert;
const computeSumBetween = require('../solution/computeSumBetween');

describe("computeSumBetween()", function () {
  it("deberia regresar [{a: 1, b: 2, c: true}, {a: 10, b: 20, c: false}], para [[['a', 1], ['b', 2], ['c', true]],[['a', 10], ['b', 20], ['c', false]]]", function () {
    var output = computeSumBetween(5, 5);

    Assert.deepEqual(output, 0);
  });

  it("deberia regresar [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}], para [[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]", function () {
    var output = computeSumBetween(2, 5);

    Assert.deepEqual(output, 9);
  });
});
