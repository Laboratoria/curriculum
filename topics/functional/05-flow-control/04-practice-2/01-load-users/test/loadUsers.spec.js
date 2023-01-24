const Assert = require('chai').assert;
const Sinon = require('sinon');
const Submission = require('../solution/loadUsers');


describe('loadUsers()', () => {

  it('debería exportar una función', () => {
    Assert.equal(typeof Submission, 'function');
  });

  it('no debería usar for o while', () => {
    const fnBody = Function.prototype.toString.call(Submission);
    // strip comments from source code
    const strippedFnBody = fnBody.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    Assert.equal(/(for|while)\s*\(/g.test(strippedFnBody), false);
  });

  it('debería mantener el orden de userIds en los resultados', (done) => {
    let count = 0;
    const load = (id, cb) =>
      setTimeout(() => cb && cb({ id: id, name: 'Lorem ipsum' }), 100 / ++count);

    Submission([1, 2, 3], load, (users) => {
      Assert.deepEqual(users, [
        { id: 1, name: 'Lorem ipsum' },
        { id: 2, name: 'Lorem ipsum' },
        { id: 3, name: 'Lorem ipsum' }
      ]);
      done();
    });
  });

  it('debería cargar los usuarios en paralelo', (done) => {
    const load = (id, cb) =>
      setTimeout(() => cb && cb({ id: id, name: 'Lorem ipsum' }), 100);

    const start = Date.now();
    Submission([3, 2, 1], load, (users) => {
      Assert.ok((Date.now() - start) < 150);
      done();
    });
  });

  it('debería invocar load para cada id de usario y callback con usuarios', (done) => {
    const load = (id, cb) =>
      setTimeout(() => cb && cb({ id: id, name: 'Lorem ipsum' }), 100);

    Submission([1, 2, 3], load, (users) => {
      Assert.deepEqual(users, [
        { id: 1, name: 'Lorem ipsum' },
        { id: 2, name: 'Lorem ipsum' },
        { id: 3, name: 'Lorem ipsum' }
      ]);
      done();
    });
  });

});
