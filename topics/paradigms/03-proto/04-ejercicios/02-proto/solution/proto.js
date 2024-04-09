import { assert } from 'chai';
import Sinon from 'sinon';
const globalScope = (typeof self !== 'undefined' ? self : global);
const claim = globalScope.claim = (actual, expected) => assert.equal(actual, expected);

const machine = {
  motors: 4
};

const robot = {
  friendly: true
};

const robby = {};

robot.__proto__ = machine;

robby.__proto__ = robot;

claim(robby.motors, 4);

claim(robby.friendly, true);

export default {
  machine,
  robot,
  robby,
};
