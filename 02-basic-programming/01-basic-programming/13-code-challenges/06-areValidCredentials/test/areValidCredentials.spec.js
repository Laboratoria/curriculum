
const Assert = require('chai').assert;
const areValidCredentials = require('../solution/areValidCredentials');

describe("areValidCredentials()", function () {
  it("Test_1", function () {
	var output = areValidCredentials('Kemal', 'testtesttest');
	
	Assert.deepEqual( output, true);

  });

  it("Test_2", function () {


	var output = areValidCredentials('K', 'mylongpassword');
	Assert.deepEqual( output, false);

  });
  

  it("Test_3", function () {


	var output = areValidCredentials('Kemal', 'aah');
	Assert.deepEqual( output, false);

  });

});
