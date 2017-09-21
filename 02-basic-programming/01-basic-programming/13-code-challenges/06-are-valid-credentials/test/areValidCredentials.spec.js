
const Assert = require('chai').assert;
const areValidCredentials = require('../solution/areValidCredentials');

describe("areValidCredentials()", function () {
  it("Prueba 1: ('Kemal', 'testtesttest') => true", function () {
	var output = areValidCredentials('Kemal', 'testtesttest');
	
	Assert.deepEqual( output, true);

  });

  it("Prueba 2: ('K', 'mylongpassword') => false", function () {


	var output = areValidCredentials('K', 'mylongpassword');
	Assert.deepEqual( output, false);

  });
  

  it("Prueba 3: ('Kemal', 'aah') => false", function () {


	var output = areValidCredentials('Kemal', 'aah');
	Assert.deepEqual( output, false);

  });

});
