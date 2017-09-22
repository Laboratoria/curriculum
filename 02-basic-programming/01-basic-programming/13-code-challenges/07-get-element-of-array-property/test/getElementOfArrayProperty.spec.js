
const Assert = require('chai').assert;
const getElementOfArrayProperty = require('../solution/getElementOfArrayProperty');

describe("getElementOfArrayProperty()", function () {
  it("deberia regresar undefined, para ({yey: [1, 3, 5, 7]}, 'key', 1)", function () {
	
	var obj = {
	 yey: [1, 3, 5, 7]
	};
	var output = getElementOfArrayProperty(obj, 'key', 1); 

	Assert.deepEqual( output, undefined);

  });

  it("deberia regresar undefined, para  ({key: 'eyoooo'}, 'key', 1)", function () {


	var obj = {
	 key: 'eyoooo'
	};
	var output = getElementOfArrayProperty(obj, 'key', 0); 
	Assert.deepEqual( output, undefined);

  });
  

  it("deberia regresar undefined, para ({key: ['Kemal', 'Mahmud']}, 'key', 2)", function () {


	var obj = {
	 key: ["Kemal", "Mahmud"]
	};
	var output = getElementOfArrayProperty(obj, 'key', 2); 
	Assert.deepEqual( output, undefined);

  });

  it("deberia regresar 3, para ({key: [1, 2, 3, 4, 5]}, 'key', 2)", function () {


	var obj = {
	 key: [1, 2, 3, 4, 5]
	};
	var output = getElementOfArrayProperty(obj, 'key', 2); 
	Assert.deepEqual( output, 3);

  });

});
