const getShortMessages = Submission.getShortMessages;


describe('getShortMessages()', () => {

  it('debería retornar [] cuando input array es []', () => {

    Assert.deepEqual(getShortMessages([]), []);
  });

  it('debería retornar arreglo de strings con mensajes de menos de 50 chars', () => {

    Assert.deepEqual(getShortMessages([{
      message: 'Tempor quis esse consequat sunt ea eiusmod.'
    }, {
      message: 'Id culpa ad proident ad nulla laborum incididunt. Blah blah'
    }, {
      message: 'Ullamco in ea et ad anim anim ullamco est.'
    }, {
      message: 'Est ut irure irure nisi.'
    }]), [
      'Tempor quis esse consequat sunt ea eiusmod.',
      'Ullamco in ea et ad anim anim ullamco est.',
      'Est ut irure irure nisi.'
    ]);
  });

  it('NO debería usar for o while', () => {

    Assert.equal(/(for|while)\s+\(/g.test(getShortMessages.toString()), false);
  });

  it('debería invocar Array.prototype.filter y Array.prototype.map', () => {

    const filter = Array.prototype.filter;
    const map = Array.prototype.map;
    let filterCount = 0;
    let mapCount = 0;

    Array.prototype.filter = function (fn) {
      filterCount++;
      return filter.call(this, function () {
        return fn.apply(null, Array.prototype.slice.call(arguments));
      });
    };

    Array.prototype.map = function (fn) {
      mapCount++;
      return map.call(this, function () {
        return fn.apply(null, Array.prototype.slice.call(arguments));
      });
    };

    Assert.deepEqual(getShortMessages([{
      message: 'Tempor quis esse consequat sunt ea eiusmod.'
    }, {
      message: 'Id culpa ad proident ad nulla laborum incididunt. Blah blah'
    }, {
      message: 'Ullamco in ea et ad anim anim ullamco est.'
    }, {
      message: 'Est ut irure irure nisi.'
    }]), [
      'Tempor quis esse consequat sunt ea eiusmod.',
      'Ullamco in ea et ad anim anim ullamco est.',
      'Est ut irure irure nisi.'
    ]);

    Assert.equal(filterCount, 1);
    Assert.equal(mapCount, 1);

    Array.prototype.filter = filter;
    Array.prototype.map = map;
  });

});