import { assert } from 'chai';
import Sinon from 'sinon';
const globalScope = (typeof self !== 'undefined' ? self : global);

const claim = globalScope.claim = (actual, expected) =>
  Array.isArray(expected) || (typeof expected === 'object' && expected instanceof Object) ?
    assert.deepEqual(actual, expected) :
    assert.equal(actual, expected);

const spy = Sinon.spy(globalScope, 'claim');
import * as Submission from '../solution/dotNew.js';
const { Robot } = Submission;

describe('dotNew', () => {

  it('debería exportar un objeto con las propiedades "Robot"', () => {
    assert.equal(typeof Submission, 'object');
    assert.ok(Submission.hasOwnProperty('Robot'));
  });

  describe('Robot', () => {

    it('debería tener una función llamada "new"', () => {
      assert.equal(typeof Robot.new, 'function');
    });

    describe('Robot.new', () => {

      it('debería devolver un objeto que tiene como prototipo a Robot', () => {
        assert.equal(Robot.new().__proto__, Robot);
      });

    });

  });

});
