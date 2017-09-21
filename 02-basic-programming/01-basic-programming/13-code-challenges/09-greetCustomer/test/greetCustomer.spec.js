
const Assert = require('chai').assert;
const greetCustomer = require('../solution/greetCustomer');

describe("greetCustomer()", function () {
  it("Test_1", function () {
		
	var pair = greetCustomer('Howard');
	var hasil = "Welcome back, Howard! So glad to see you again!";


	Assert.deepEqual( pair, hasil);

  });

  it("Test_2", function () {


	var pair = greetCustomer('Joe');
	var hasil = "Welcome back, Joe! We're glad you liked us the first time!";

	Assert.deepEqual( pair, hasil);

  });
  

  it("Test_3", function () {


	var pair = greetCustomer('Kemal');
	var hasil = "Welcome! Is this your first time?";

	Assert.deepEqual( pair, hasil);

  });
 

});
