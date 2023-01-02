const Assert = require('chai').assert;
const Submission = require('../solution/serializeUser');


describe('serializeUser()', () => {

  it('debería retornar un string con el objeto serializado como JSON', () => {
    const grace = {
      userId: 'xxx',
      name: 'Grace Hopper',
      country: 'us',
      date: new Date()
    };
    const dateStr = grace.date.toJSON();
    Assert.equal(
      Submission(grace),
      `{"userId":"xxx","name":"Grace H...","country":"us","date":"${dateStr}"}`
    );
  });

  it('no debería mutar el objeto que recibe como argumento', () => {
    const grace = {
      userId: 'xxx',
      name: 'Grace Hopper',
      country: 'us',
      date: new Date()
    };
    Submission(grace);
    Assert.equal(grace.name, 'Grace Hopper');
    Assert.ok(grace.date instanceof Date);
  });

});
