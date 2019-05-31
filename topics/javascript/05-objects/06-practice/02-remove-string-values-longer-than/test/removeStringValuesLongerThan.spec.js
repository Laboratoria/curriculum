
const Assert = require('chai').assert;
const removeStringValuesLongerThan = require('../solution/removeStringValuesLongerThan');

describe("removeStringValuesLongerThan()", function () {
  it("Teste: key-value maior que 1", function () {

	var obj = {
	  name: 'Montana',
	  age: 20,
	  location: 'Texas'
	};

	var num = 1;
	var hasil = {
	  age: 20
	};
	Assert.deepEqual(removeStringValuesLongerThan(num, obj), hasil);

  });

  it("Teste: key-value maior que 6", function () {

   var obj = {
	  name: 'Montana',
	  age: 20,
	  location: 'Texas'
	};

	var num = 6;
	var hasil = {
	  age: 20,
	  location: 'Texas'
	};
	Assert.deepEqual(removeStringValuesLongerThan(num, obj), hasil);
  });


});
