
const Assert = require('chai').assert;
const findPairForSum = require('../solution/findPairForSum');

describe("findPairForSum()", function () {
  it("deve devolver [0, 1], para ([0, 8, 1, 7, 19, 12, 4], 1)", function () {

	var pair = findPairForSum([0, 8, 1, 7, 19, 12, 4], 1);
	var hasil = [0, 1];

	Assert.deepEqual( pair, hasil);

  });

  it("deve devolver [2, 11], para  ([1, 2, 6, 8, 11, 10], 13)", function () {


	var pair = findPairForSum([1, 2, 6, 8, 11, 10], 13);
	var hasil = [2, 11];

	Assert.deepEqual( pair, hasil);

  });


  it("deve devolver [4, 5], para ([3, 34, 4, 12, 5, 2], 9)", function () {


	var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
	var hasil = [4, 5];

	Assert.deepEqual( pair, hasil);

  });


});
