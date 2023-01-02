const Assert = require('chai').assert;
const Sinon = require('sinon');
const globalScope = (typeof self !== 'undefined' ? self : global);

const claim = globalScope.claim = (actual, expected) =>
  Array.isArray(expected) || (typeof expected === 'object' && expected instanceof Object) ?
    Assert.deepEqual(actual, expected) :
    Assert.equal(actual, expected);

const spy = Sinon.spy(globalScope, 'claim');
const Submission = require('../solution/arraysAndObjects');
const { machine, vehicle, robot } = Submission;


describe('arraysAndObjects', () => {

  it('debería exportar un objeto con las propiedades "machine", "vehicle" y "robot"', () => {
    Assert.equal(typeof Submission, 'object');
    Assert.ok(Submission.hasOwnProperty('machine'));
    Assert.ok(Submission.hasOwnProperty('vehicle'));
    Assert.ok(Submission.hasOwnProperty('robot'));
  });

  it('debería invocar claim 8 veces', () => {
    Assert.equal(spy.callCount, 8);
  });

  [[['core'], []],
  [['core'], []],
  [{ fly: true }, {}],
  [{ fly: true }, {}],
  [['core'], ['core']],
  [['core'], ['core']],
  [{ fly: true }, { fly: true }],
  [{ fly: true }, { fly: true }]
  ].forEach((args, idx) => {
    describe(`invocación ${idx + 1} a claim`, () =>
      it(`debería comparar ${args[0]} con ${args[1]}`, () =>
        Assert.deepEqual(spy.getCall(idx).args, args)
      )
    );
  })

  describe('machine', () => {

    it('debería tener una propiedad parts y capabilities', () => {
      Assert.ok(machine.hasOwnProperty('parts'));
      Assert.ok(machine.hasOwnProperty('capabilities'));
    });

    describe('machine.parts', () => {
      it('debería tener valor ["core"]', () => {
        Assert.deepEqual(machine.parts, ['core']);
      });
    });

    describe('machine.capabilities', () => {
      it('debería tener valor { fly: true }', () => {
        Assert.deepEqual(machine.capabilities, { fly: true });
      });
    });
  });

  describe('vehicle', () => {

    it('debería ser un objeto con machine como prototipo', () => {
      Assert.equal(vehicle.__proto__, machine);
    });
  })

  describe('robot', () => {

    it('debería ser un objeto con machine como prototipo', () => {
      Assert.equal(robot.__proto__, machine);
    });
  })

});
