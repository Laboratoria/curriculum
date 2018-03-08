const Assert = require('chai').assert;
const objectPropertiesCounter = require('../solution/objectPropertiesCounter');

describe('objectPropertiesCounter()', () => {
  it('debería regresar la cantidad de propiedades cuando es un objeto simple', () => {
    const obj = { 'name': 'John', 'lastname': 'Doe' };
    const output = objectPropertiesCounter(obj);
    Assert.deepEqual(output, 2);
  });

  it('debería regresar la cantidad de propiedades cuando es un objeto con propiedades anidadas', () => {
    const obj = {
      'name': 'Laboratoria',
      'cohorts': {
        'SCL': [ '2017-1', '2017-2' ],
        'CDMX': [ '2017-1', '2017-2' ]
      }
    };
    const output = objectPropertiesCounter(obj);
    Assert.deepEqual(output, 2);
  });

  it('debería regresar 0 cuando es un objeto vacío', () => {
    const obj = {};
    const output = objectPropertiesCounter(obj);
    Assert.deepEqual(output, 0);
  });
});
