
const Assert = require('chai').assert;
const areValidCredentials = require('../solution/areValidCredentials');

describe("areValidCredentials()", function () {
  it("debería regresar true cuando las credenciales son válidas", function () {
	var output = areValidCredentials('Kemal', 'testtesttest');
	Assert.deepEqual(output, true);
  });

  it("debería regresar false cuando el nombre es demasiado corto", function () {
	var output = areValidCredentials('K', 'mylongpassword');
	Assert.deepEqual(output, false);
  });
  
  it("debería regresar false cuando la contraseña es demasiado corta", function () {
	var output = areValidCredentials('Kemal', 'aah');
	Assert.deepEqual(output, false);
  });
});
