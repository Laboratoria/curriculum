import { assert } from 'chai';
import canDriveAndVote from '../solution/canDriveAndVote.js';

describe('canDriveAndVote()', () => {
  it('debería retornar true si cumple con ambas condiciones (16 años o más y 18 años o más), en caso contrario retornar false', () => {
    assert.deepEqual(canDriveAndVote(25), true);
    assert.deepEqual(canDriveAndVote(12), false);
    assert.deepEqual(canDriveAndVote(16), false);
  });
});
