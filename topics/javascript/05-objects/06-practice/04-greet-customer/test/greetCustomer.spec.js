
const Assert = require('chai').assert;
const greetCustomer = require('../solution/greetCustomer');

describe('greetCustomer()', () => {
  it("deve devolver 'Welcome back, Howard! So glad to see you again!', para  ('Howard')", () => {
    const pair = greetCustomer('Howard');
    const hasil = 'Welcome back, Howard! So glad to see you again!';


    Assert.deepEqual(pair, hasil);
  });

  it("deve devolver 'Welcome back, Joe! We're glad you liked us the first time!', para ('Joe')", () => {
    const pair = greetCustomer('Joe');
    const hasil = "Welcome back, Joe! We're glad you liked us the first time!";

    Assert.deepEqual(pair, hasil);
  });


  it("deve devolver 'Welcome! Is this your first time?', para  ('Kemal')", () => {
    const pair = greetCustomer('Kemal');
    const hasil = 'Welcome! Is this your first time?';

    Assert.deepEqual(pair, hasil);
  });
});
