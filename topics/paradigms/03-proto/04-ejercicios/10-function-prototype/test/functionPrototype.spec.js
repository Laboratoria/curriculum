import { assert } from 'chai';
import Sinon from 'sinon';
const globalScope = (typeof self !== 'undefined' ? self : global);

const claim = globalScope.claim = (actual, expected) =>
  Array.isArray(expected) || (typeof expected === 'object' && expected instanceof Object) ?
    assert.deepEqual(actual, expected) :
    assert.equal(actual, expected);

const spy = Sinon.spy(globalScope, 'claim');
import * as Submission from '../solution/functionPrototype.js';
const { Robot, robby, cranky } = Submission;

describe('functionPrototype', () => {

  it('debería exportar un objeto con las propiedades "Robot", "robby", "cranky" ', () => {
    assert.equal(typeof Submission, 'object');
    assert.ok(Submission.Robot);
    assert.ok(Submission.robby);
    assert.ok(Submission.cranky);
  });

  describe('Robot', () => {

    it('debería ser una función', () => {
      assert.isFunction(Robot);
    });

    it('debería tener una instancia de parts', () => {
      const other = new Robot();
      assert.isDefined(other.parts);
    });

    it('debería tener una instancia de capabilities', () => {
      const other = new Robot();
      assert.isDefined(other.capabilities);
    });

    it('debería comenzar vacío', () => {
      const other = new Robot();
      assert.equal(other.parts.length, 0);
    });

    describe('Robot.parts', () => {

      it('debería ser un array', () => {
        const other = new Robot();
        assert.isArray(other.parts);
      })
    });

    describe('Robot.capabilities', () => {

      it('debería ser un array', () => {
        const other = new Robot();
        assert.isArray(other.capabilities);
      });
    });

  });

  describe('robby', () => {

    it('debería ser una instancia de Robot', () => {
      assert.instanceOf(robby, Robot);
    });

    it('debería tener un elemento', () => {
      assert.equal(robby.parts.length, 1);
    });

    it('debería tener un elemento que sea "core"', () => {
      assert.equal(robby.parts[0], 'core');
    });

    describe('robby.capabilities', () => {

      it('debería tener un elemento', () => {
        assert.equal(robby.capabilities.length, 1);
      });

      it('Su primer elemento debería ser "fly"', () => {
        assert.equal(robby.capabilities[0], 'fly');
      });
    });

  });

  describe('cranky', () => {

    it('debería ser una instancia de Robot', () => {
      assert.instanceOf(cranky, Robot);
    });

    describe('cranky.parts', () => {

      it('debería tener 0 elementos', () => {
        assert.equal(cranky.parts.length, 0);
      });

    });

    describe('cranky.capabilities', () => {

      it('no esta agregado directamente a cranky', () => {
        assert.isFalse(cranky.hasOwnProperty('capabilities'));
      });

      it('debería tener un elemento', () => {
        assert.equal(cranky.capabilities.length, 1);
      });

      it('Su primer elemento debería ser "fly"', () => {
        assert.equal(cranky.capabilities[0], 'fly');
      });

    })
  });


});
