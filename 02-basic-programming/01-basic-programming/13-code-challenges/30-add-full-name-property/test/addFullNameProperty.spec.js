const Assert = require('chai').assert;
const addFullNameProperty = require('../solution/addFullNameProperty');

describe("addFullNameProperty()", function () {
  it("deberia regresar 'Kemal Mahmud', para { firstName : 'Kemal', lastName : 'Mahmud' }", function () {
    var name = { firstName: "Kemal", lastName: "Mahmud" };
    var full = { fullName: "Kemal Mahmud" };

    addFullNameProperty(name);

    Assert.deepEqual(name['fullName'], full['fullName']);
  });
});
