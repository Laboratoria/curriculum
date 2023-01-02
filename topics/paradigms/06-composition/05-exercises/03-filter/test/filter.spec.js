const Assert = require('chai').assert;
const Submission = require('../solution/filter');


const message = () => {
  return Assert.deepEqual(Submission([{
    message: 'Tempor quis esse consequat sunt ea eiusmod.'
  }, {
    message: 'Id culpgetShortMessages.speca ad proident ad nulla laborum incididunt. Blah blah'
  }, {
    message: 'Ullamco in ea et ad anim anim ullamco est.'
  }, {
    message: 'Est ut irure irure nisi.'
  }]), [
    'Tempor quis esse consequat sunt ea eiusmod.',
    'Ullamco in ea et ad anim anim ullamco est.',
    'Est ut irure irure nisi.'
  ]);
};


describe('getShortMessages()', () => {

  it('debería retornar [ ] cuando input array es [ ]', () => {
    Assert.deepEqual(Submission([]), []);
  });

  it('debería retornar arreglo de strings con mensajes de menos de 50 chars', () => {
    message();
  });

  it('NO debería usar for o while', () => {
    Assert.equal(/(for|while)\s+\(/g.test(Submission.toString()), false);
  });

  it('debería invocar Array.prototype.filter', () => {
    const filter = Array.prototype.filter;
    let filterCount = 0;

    Array.prototype.filter = function (fn) {
      filterCount++;
      return filter.call(this, function () {
        return fn.apply(null, Array.prototype.slice.call(arguments));
      });
    };

    message();
    Assert.equal(filterCount, 1);

    Array.prototype.filter = filter;
  });

  it('debería invocar Array.prototype.map', () => {
    const map = Array.prototype.map;
    let mapCount = 0;

    Array.prototype.map = function (fn) {
      mapCount++;
      return map.call(this, function () {
        return fn.apply(null, Array.prototype.slice.call(arguments));
      });
    };
    message();
    Assert.equal(mapCount, 1);
    Array.prototype.map = map;
  });

});
