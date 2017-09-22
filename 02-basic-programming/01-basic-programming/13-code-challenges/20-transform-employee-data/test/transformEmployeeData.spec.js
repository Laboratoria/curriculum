const Assert = require('chai').assert;
const transformEmployeeData = require('../solution/transformEmployeeData');

describe("transformEmployeeData()", function () {
  it("debería regresar [{a: 1, b: 2, c: true}, {a: 10, b: 20, c: false}], para [[['a', 1], ['b', 2], ['c', true]],[['a', 10], ['b', 20], ['c', false]]]", function () {
    var array = [
      [
        ['a', 1], ['b', 2], ['c', true]
      ],
      [
        ['a', 10], ['b', 20], ['c', false]
      ]
    ];
    var hasil = [
      { a: 1, b: 2, c: true },
      { a: 10, b: 20, c: false }
    ];
    Assert.deepEqual(transformEmployeeData(array), hasil);
  });

  it("debería regresar [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}], para [[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]", function () {
    var array = [
      [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
      ],
      [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
      ]
    ];
    var hasil = [
      { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
      { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
    ];
    Assert.deepEqual(transformEmployeeData(array), hasil);
  });
});
