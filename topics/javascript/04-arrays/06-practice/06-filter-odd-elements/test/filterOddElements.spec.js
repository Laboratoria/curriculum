
const Assert = require('chai').assert;
const filterOddElements = require('../solution/filterOddElements');

describe("filterOddElements()", function () {
  it("Teste: ([2, 4, 6, 8, 10]) => []", function () {


	var arr = [2, 4, 6, 8, 10];
	var hasil = [];
	var call = filterOddElements(arr);

	Assert.deepEqual( call, hasil);

  });

  it("Teste: ([69, 10, 6, 8, 22]) => [69]", function () {

	var arr = [69, 10, 6, 8, 22];
var hasil = [69];
	var call = filterOddElements(arr);

	Assert.deepEqual( call, hasil);

  });


  it("Teste: ([1, 2, 3, 4, 5]) => [1, 3, 5]", function () {

	var arr = [1, 2, 3, 4, 5];
	var hasil = [1, 3, 5];
	var call = filterOddElements(arr);

	Assert.deepEqual( call, hasil);

  });


});
