const { assert } = require('chai');
const greetCustomer = require('../solution/greetCustomer');

describe('greetCustomer()', () => {
  it("debería regresar 'Welcome back, Howard! So glad to see you again!', para  ('Howard')", () => {
    const pair = greetCustomer('Howard');
    const hasil = 'Welcome back, Howard! So glad to see you again!';

    assert.deepEqual(pair, hasil);
  });

  it("debería regresar'Welcome back, Joe! We're glad you liked us the first time!', para ('Joe')", () => {
    const pair = greetCustomer('Joe');
    const hasil = "Welcome back, Joe! We're glad you liked us the first time!";

    assert.deepEqual(pair, hasil);
  });


  it("debería regresar  'Welcome! Is this your first time?', para  ('Kemal')", () => {
    const pair = greetCustomer('Kemal');
    const hasil = 'Welcome! Is this your first time?';

    assert.deepEqual(pair, hasil);
  });
});
