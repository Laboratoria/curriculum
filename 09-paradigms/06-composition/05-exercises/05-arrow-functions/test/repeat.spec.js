const repeat = Submission.repeat;


describe('repeat', () => {

  it('debería invocar la operación num veces', () => {

    let count = 0;
    repeat(_ => count++, 3);
    Assert.equal(count, 3);
  });

});