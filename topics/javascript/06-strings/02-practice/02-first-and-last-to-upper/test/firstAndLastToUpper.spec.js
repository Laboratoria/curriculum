const Assert = require('chai').assert;
const firstAndLastToUpper = require('../solution/firstAndLastToUpper');

describe('firstAndLastToUpper()', () => {
  it('debería retornar en mayúsculas la primer y última letra de un string', () => {
    Assert.deepEqual(firstAndLastToUpper('murcielago'), 'MurcielagO');
    Assert.deepEqual(firstAndLastToUpper('sol'), 'SoL');
    Assert.deepEqual(firstAndLastToUpper('abecedario'), 'AbecedariO');
  });

  it('debería retornar "" si no se le ingresa ningún parametro', () => {
    Assert.deepEqual(firstAndLastToUpper(''), '');
  });
});
