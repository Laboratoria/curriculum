import { assert } from 'chai';
import Sinon from 'sinon';
const globalScope = (typeof self !== 'undefined' ? self : global);

const claim = globalScope.claim = (actual, expected) =>
  Array.isArray(expected) || (typeof expected === 'object' && expected instanceof Object) ?
    assert.deepEqual(actual, expected) :
    assert.equal(actual, expected);

const spy = Sinon.spy(globalScope, 'claim');
import * as Submission from '../solution/constructorFunctions.js';
const { Robot, robby } = Submission;

describe('objectCreate', () => {

  it('debería exportar un objeto con las propiedades "Robot", "robby"', () => {
    assert.equal(typeof Submission, 'object');
    assert.ok(Submission.hasOwnProperty('Robot'));
    assert.ok(Submission.hasOwnProperty('robby'));
  });

  it('debería invocar claim 2 veces', () => {
    assert.equal(spy.callCount, 2);
  });

  [
    [true, true],
    [2, 2]
  ].forEach((args, idx) => {
    describe(`invocación ${idx + 1} a claim`, () =>
      it(`debería comparar ${args[0]} con ${args[1]}`, () =>
        assert.deepEqual(spy.getCall(idx).args, args)
      )
    );
  });

  describe('Robot', () => {

    it('debería ser un constructor', () => {
      assert.equal(typeof Robot, 'function');
    });

  });

  describe('robby', () => {

    it('debería ser una una instancia de robot', () => {
      assert.equal(robby.__proto__, new Robot().__proto__);
    });

    it('debería tener una propiedad motors con valor 2', () => {
      assert.equal(robby.motors, 2);
    });

  });


});
