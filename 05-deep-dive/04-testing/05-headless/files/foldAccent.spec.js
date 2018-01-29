describe('foldAccent()', () => {

  it('debería retornar a para á', () => {
    assert.equal(foldAccent('á'), 'a');
  });

  it('debería retornar b para b', () => {
    assert.equal(foldAccent('b'), 'b');
  });

  it('debería retornar undefined para undefined', () => {
    assert.equal(foldAccent(undefined), undefined);
  });


});
