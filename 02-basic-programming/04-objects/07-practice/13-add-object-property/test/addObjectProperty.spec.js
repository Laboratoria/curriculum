const Assert = require('chai').assert;
const addObjectProperty = require('../solution/addObjectProperty');

describe("addObjectProperty()", function () {
  it("deve devolver { name : 'Fadel', role : 'Aaaahhhh' }, para { name : 'Medina', role : 'Euuuuhhh' }, 'bawahan' y { name : 'Fadel', role : 'Aaaahhhh' }", function () {
    var person1 = { name: 'Medina', role: 'Euuuuhhh' };
    var person2 = { name: 'Fadel', role: 'Aaaahhhh' };

    addObjectProperty(person1, 'bawahan', person2);

    Assert.deepEqual(person1.bawahan, person2);
  });
});
