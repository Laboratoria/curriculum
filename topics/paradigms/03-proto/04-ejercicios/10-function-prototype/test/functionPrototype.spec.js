const Assert = require('chai').assert;
const Sinon = require('sinon');
const globalScope = (typeof self !== 'undefined' ? self : global);

const claim = globalScope.claim = (actual, expected) =>
  Array.isArray(expected) || (typeof expected === 'object' && expected instanceof Object) ?
    Assert.deepEqual(actual, expected) :
    Assert.equal(actual, expected);

const spy = Sinon.spy(globalScope, 'claim');
const Submission = require('../solution/functionPrototype');
const { Robot, robby, cranky } = Submission;

describe('functionPrototype', () => {

  it('debería exportar un objeto con las propiedades "Robot", "robby", "cranky" ', () => {
    Assert.equal(typeof Submission, 'object');
    Assert.ok(Submission.hasOwnProperty('Robot'));
    Assert.ok(Submission.hasOwnProperty('robby'));
    Assert.ok(Submission.hasOwnProperty('cranky'));
  });

  describe('Robot', () => {

    it('debería ser una función', () => {
      Assert.isFunction(Robot);
    });

    it('debería tener una instancia de parts', () => {
      const other = new Robot();
      Assert.isDefined(other.parts);
    });

    it('debería tener una instancia de capabilities', () => {
      const other = new Robot();
      Assert.isDefined(other.capabilities);
    });

    it('debería comenzar vacío', () => {
      const other = new Robot();
      Assert.equal(other.parts.length, 0);
    });

    describe('Robot.parts', () => {

      it('debería ser un array', () => {
        const other = new Robot();
        Assert.isArray(other.parts);
      })
    });

    describe('Robot.capabilities', () => {

      it('debería ser un array', () => {
        const other = new Robot();
        Assert.isArray(other.capabilities);
      });
    });

  });

  describe('robby', () => {

    it('debería ser una instancia de Robot', () => {
      Assert.instanceOf(robby, Robot);
    });

    it('debería tener un elemento', () => {
      Assert.equal(robby.parts.length, 1);
    });

    it('debería tener un elemento que sea "core"', () => {
      Assert.equal(robby.parts[0], 'core');
    });

    describe('robby.capabilities', () => {

      it('debería tener un elemento', () => {
        Assert.equal(robby.capabilities.length, 1);
      });

      it('Su primer elemento debería ser "fly"', () => {
        Assert.equal(robby.capabilities[0], 'fly');
      });
    });

  });

  describe('cranky', () => {

    it('debería ser una instancia de Robot', () => {
      Assert.instanceOf(cranky, Robot);
    });

    describe('cranky.parts', () => {

      it('debería tener 0 elementos', () => {
        Assert.equal(cranky.parts.length, 0);
      });

    });

    describe('cranky.capabilities', () => {

      it('no esta agregado directamente a cranky', () => {
        Assert.isFalse(cranky.hasOwnProperty('capabilities'));
      });

      it('debería tener un elemento', () => {
        Assert.equal(cranky.capabilities.length, 1);
      });

      it('Su primer elemento debería ser "fly"', () => {
        Assert.equal(cranky.capabilities[0], 'fly');
      });

    })
  });


});
