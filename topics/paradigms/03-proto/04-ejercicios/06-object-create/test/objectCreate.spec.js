import { assert } from 'chai';
import Sinon from 'sinon';
const globalScope = (typeof self !== 'undefined' ? self : global);

const claim = globalScope.claim = (actual, expected) =>
  Array.isArray(expected) || (typeof expected === 'object' && expected instanceof Object) ?
    assert.deepEqual(actual, expected) :
    assert.equal(actual, expected);

const spy = Sinon.spy(globalScope, 'claim');
import Submission from '../solution/objectCreate.js';
const { machine, robot, robby } = Submission;

describe('objectCreate', () => {

  it('debería exportar un objeto con las propiedades "machine", "robot" y "robby"', () => {
    assert.equal(typeof Submission, 'object');
    assert.ok(Submission.hasOwnProperty('machine'));
    assert.ok(Submission.hasOwnProperty('robot'));
    assert.ok(Submission.hasOwnProperty('robby'));
  });

  it('debería invocar claim 3 veces', () => {
    assert.equal(spy.callCount, 3);
  });

  [
    [true, true],
    [true, true],
    [{}, {}]
  ].forEach((args, idx) => {
    describe(`invocación ${idx + 1} a claim`, () =>
      it(`debería comparar ${args[0]} con ${args[1]}`, () =>
        assert.deepEqual(spy.getCall(idx).args, args)
      )
    );
  });

  describe('robot', () => {

    it('debería ser un objeto con machine como prototipo', () => {
      assert.equal(robot.__proto__, machine);
    });
  });

  describe('robby', () => {

    it('debería ser un objeto con machine como prototipo', () => {
      assert.equal(robby.__proto__.__proto__, machine);
    });

    it('debería ser un objeto con robot como prototipo', () => {
      assert.equal(robby.__proto__, robot);
    });
  });

})
