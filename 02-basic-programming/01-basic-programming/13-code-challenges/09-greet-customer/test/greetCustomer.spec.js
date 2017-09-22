
const Assert = require('chai').assert;
const greetCustomer = require('../solution/greetCustomer');

describe("greetCustomer()", function () {
  it("deberia regresar 'Welcome back, Howard! So glad to see you again!', para  ('Howard')", function () {
		
	var pair = greetCustomer('Howard');
	var hasil = "Welcome back, Howard! So glad to see you again!";


	Assert.deepEqual( pair, hasil);

  });

  it("deberia regresar'Welcome back, Joe! We're glad you liked us the first time!', para ('Joe')", function () {


	var pair = greetCustomer('Joe');
	var hasil = "Welcome back, Joe! We're glad you liked us the first time!";

	Assert.deepEqual( pair, hasil);

  });
  

  it("deberia regresar  'Welcome! Is this your first time?', para  ('Kemal')", function () {

	var pair = greetCustomer('Kemal');
	var hasil = "Welcome! Is this your first time?";

	Assert.deepEqual( pair, hasil);

  });
 

});
