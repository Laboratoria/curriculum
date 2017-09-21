
const Assert = require('chai').assert;
const findPairForSum = require('../solution/findPairForSum');

describe("findPairForSum()", function () {
  it("Test_1", function () {
		
	var pair = findPairForSum([0, 8, 1, 7, 19, 12, 4], 1);
	var hasil = [0, 1];

	Assert.deepEqual( pair, hasil);

  });

  it("Test_2", function () {


	var pair = findPairForSum([1, 2, 6, 8, 11, 10], 13);
	var hasil = [2, 11];

	Assert.deepEqual( pair, hasil);

  });
  

  it("Test_3", function () {


	var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
	var hasil = [4, 5];

	Assert.deepEqual( pair, hasil);

  });
 

});
