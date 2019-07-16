const Assert = require('chai').assert;
const transformEmployeeData = require('../solution/transformEmployeeData');

describe('transformEmployeeData()', () => {
  it("deve devolver [{a: 1, b: 2, c: true}, {a: 10, b: 20, c: false}], para [[['a', 1], ['b', 2], ['c', true]],[['a', 10], ['b', 20], ['c', false]]]", () => {
    const array = [
      [
        ['a', 1], ['b', 2], ['c', true],
      ],
      [
        ['a', 10], ['b', 20], ['c', false],
      ],
    ];
    const hasil = [
      { a: 1, b: 2, c: true },
      { a: 10, b: 20, c: false },
    ];
    Assert.deepEqual(transformEmployeeData(array), hasil);
  });

  it("deve devolver [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}], para [[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]", () => {
    const array = [
      [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk'],
      ],
      [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager'],
      ],
    ];
    const hasil = [
      {
        firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk',
      },
      {
        firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager',
      },
    ];
    Assert.deepEqual(transformEmployeeData(array), hasil);
  });
});
