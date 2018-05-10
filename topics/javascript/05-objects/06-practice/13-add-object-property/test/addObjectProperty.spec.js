const Assert = require('chai').assert;
const addObjectProperty = require('../solution/addObjectProperty');

describe('addObjectProperty()', () => {
  it("debería regresar { name : 'Fadel', role : 'Aaaahhhh' }, para { name : 'Medina', role : 'Euuuuhhh' }, 'bawahan' y { name : 'Fadel', role : 'Aaaahhhh' }", () => {
    const person1 = { name: 'Medina', role: 'Euuuuhhh' };
    const person2 = { name: 'Fadel', role: 'Aaaahhhh' };

    addObjectProperty(person1, 'bawahan', person2);

    Assert.deepEqual(person1.bawahan, person2);
  });
});
