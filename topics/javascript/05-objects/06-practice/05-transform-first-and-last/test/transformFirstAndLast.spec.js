import { assert } from 'chai';
import transformFirstAndLast from '../solution/transformFirstAndLast.js';

describe('transformFirstAndLast()', () => {
  it("debería regresar { King : 'Freddie' }, para ['King', 'Kemal', 'Freddie']", () => {
    assert.deepEqual(transformFirstAndLast(['King', 'Kemal', 'Freddie']), { King: 'Freddie' });
  });

  it("debería regresar { Queen : 'Beyonce' }, para ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']", () => {
    assert.deepEqual(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']), { Queen: 'Beyonce' });
  });
});
