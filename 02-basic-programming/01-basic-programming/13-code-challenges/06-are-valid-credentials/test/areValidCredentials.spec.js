
const Assert = require('chai').assert;
const areValidCredentials = require('../solution/areValidCredentials');

describe("areValidCredentials()", function () {
  it("debería regresar true, para ('Kemal', 'testtesttest')", function () {
	var output = areValidCredentials('Kemal', 'testtesttest');
	Assert.deepEqual( output, true);

  });

  it("debería regresar false, para  ('K', 'mylongpassword') ", function () {
	var output = areValidCredentials('K', 'mylongpassword');
	Assert.deepEqual( output, false);

  });
  

  it("debería regresar false, para ('Kemal', 'aah') ", function () {
	var output = areValidCredentials('Kemal', 'aah');
	Assert.deepEqual( output, false);

  });

});
