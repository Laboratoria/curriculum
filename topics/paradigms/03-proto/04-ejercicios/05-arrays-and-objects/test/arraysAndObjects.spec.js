import { assert } from 'chai';
import Sinon from 'sinon';
const globalScope = (typeof self !== 'undefined' ? self : global);

const claim = globalScope.claim = (actual, expected) =>
  Array.isArray(expected) || (typeof expected === 'object' && expected instanceof Object) ?
    assert.deepEqual(actual, expected) :
    assert.equal(actual, expected);

const spy = Sinon.spy(globalScope, 'claim');
import Submission from '../solution/arraysAndObjects.js';
const { machine, vehicle, robot } = Submission;


describe('arraysAndObjects', () => {

  it('debería exportar un objeto con las propiedades "machine", "vehicle" y "robot"', () => {
    assert.equal(typeof Submission, 'object');
    assert.ok(Submission.hasOwnProperty('machine'));
    assert.ok(Submission.hasOwnProperty('vehicle'));
    assert.ok(Submission.hasOwnProperty('robot'));
  });

  it('debería invocar claim 8 veces', () => {
    assert.equal(spy.callCount, 8);
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
        assert.deepEqual(spy.getCall(idx).args, args)
      )
    );
  })

  describe('machine', () => {

    it('debería tener una propiedad parts y capabilities', () => {
      assert.ok(machine.hasOwnProperty('parts'));
      assert.ok(machine.hasOwnProperty('capabilities'));
    });

    describe('machine.parts', () => {
      it('debería tener valor ["core"]', () => {
        assert.deepEqual(machine.parts, ['core']);
      });
    });

    describe('machine.capabilities', () => {
      it('debería tener valor { fly: true }', () => {
        assert.deepEqual(machine.capabilities, { fly: true });
      });
    });
  });

  describe('vehicle', () => {

    it('debería ser un objeto con machine como prototipo', () => {
      assert.equal(vehicle.__proto__, machine);
    });
  })

  describe('robot', () => {

    it('debería ser un objeto con machine como prototipo', () => {
      assert.equal(robot.__proto__, machine);
    });
  })

});
