import { assert } from 'chai';
import addObjectProperty from '../solution/addObjectProperty.js';

describe('addObjectProperty(obj1, key, obj2)', () => {
  it('debería asignar obj2 en obj1[key]', () => {
    const person1 = { name: 'Medina', role: 'Euuuuhhh' };
    const person2 = { name: 'Fadel', role: 'Aaaahhhh' };

    addObjectProperty(person1, 'bawahan', person2);

    assert.deepEqual(person1.bawahan, person2);
  });
});
