
const Assert = require('chai').assert;
const greetCustomer = require('../solution/greetCustomer');

describe("greetCustomer()", function () {
  it("Prueba: ('Howard') => Welcome back, Howard! So glad to see you again!", function () {
		
	var pair = greetCustomer('Howard');
	var hasil = "Welcome back, Howard! So glad to see you again!";


	Assert.deepEqual( pair, hasil);

  });

  it("Prueba: ('Joe') => Welcome back, Joe! We're glad you liked us the first time!", function () {


	var pair = greetCustomer('Joe');
	var hasil = "Welcome back, Joe! We're glad you liked us the first time!";

	Assert.deepEqual( pair, hasil);

  });
  

  it("Prueba: ('Kemal') => Welcome! Is this your first time?", function () {


	var pair = greetCustomer('Kemal');
	var hasil = "Welcome! Is this your first time?";

	Assert.deepEqual( pair, hasil);

  });
 

});
