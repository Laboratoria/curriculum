const Assert = require('chai').assert;
const canDriveAndVote = require('../solution/canDriveAndVote');

describe('canDriveAndVote()', () => {

  it('debería retornar true si cumple con ambas condiciones (16 años o más y 18 años o más), en caso contrario retornar false', () => {
    Assert.deepEqual(canDriveAndVote(25), true);
    Assert.deepEqual(canDriveAndVote(12), false);
    Assert.deepEqual(canDriveAndVote(16), false);
  });

});
