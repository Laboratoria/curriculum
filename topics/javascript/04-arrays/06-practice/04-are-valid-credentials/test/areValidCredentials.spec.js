
const Assert = require('chai').assert;
const areValidCredentials = require('../solution/areValidCredentials');

describe("areValidCredentials()", function () {
  it("deve devolver true quando as credenciais são válidas", function () {
	var output = areValidCredentials('Kemal', 'testtesttest');
	Assert.deepEqual(output, true);
  });

  it("deve devolver false quando o nome é muito curto", function () {
	var output = areValidCredentials('K', 'mylongpassword');
	Assert.deepEqual(output, false);
  });

  it("deve devolver false quando a senha é muito curta", function () {
	var output = areValidCredentials('Kemal', 'aah');
	Assert.deepEqual(output, false);
  });
});
