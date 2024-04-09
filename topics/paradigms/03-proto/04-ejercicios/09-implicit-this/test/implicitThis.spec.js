import { assert } from 'chai';
import Sinon from 'sinon';
const globalScope = (typeof self !== 'undefined' ? self : global);

const claim = globalScope.claim = (actual, expected) =>
  Array.isArray(expected) || (typeof expected === 'object' && expected instanceof Object) ?
    assert.deepEqual(actual, expected) :
    assert.equal(actual, expected);

const spy = Sinon.spy(globalScope, 'claim');
import Submission from '../solution/implicitThis.js';
const { Robot, Vehicle } = Submission;

describe('implicitThis', () => {

  it('debería exportar un objeto con las propiedades "Robot", "Vehicle"', () => {
    assert.equal(typeof Submission, 'object');
    assert.ok(Submission.hasOwnProperty('Robot'));
    assert.ok(Submission.hasOwnProperty('Vehicle'));
  });

  describe('Robot', () => {

    it('debería ser un constructor', () => {
      assert.equal(typeof Robot, 'function');
    });

    describe('new Robot', () => {

      it('debería retornar una instancia de robot', () => {
        const robot = new Robot();
        assert.equal(robot instanceof Robot, true);
      })
    })

  });

  describe('Vehicle', () => {

    it('debería ser un constructor', () => {
      assert.equal(typeof Vehicle, 'function');
    });

    describe('new Vehicle', () => {

      it('no debería retornar una instancia de Vehicle', () => {
        const vehicle = new Vehicle();
        assert.equal(vehicle instanceof Vehicle, false);
      });

    });


  });


});
