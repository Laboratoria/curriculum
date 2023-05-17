const Assert = require('chai').assert;
const Submission = require('../solution/notes');
const Note = Submission.Note;
const Notes = Submission.Notes;


describe('Note', () => {

  it('debería exportar función `Note`', () => {
    Assert.equal(typeof Note, 'function');
  });

  it('debería crear un nuevo objeto cuando invocamos new Note()', () => {
    const note = new Note('renovar dni');
    Assert.equal(note.text, 'renovar dni');
    Assert.ok(note.createdAt instanceof Date);
    Assert.equal(note.completed, false);
  });

  it('debería retornar undefined cuando invocamos Note() sin "new"', () => {
    Assert.equal(Note('renovar dni'), undefined);
  });

});


describe('Note#toString', () => {

  it('debería convertir objeto a string', () => {
    const note = new Note('foo');
    const date = (new Date()).toDateString();
    Assert.equal(note.toString(), '[ ] | ' + date + ' | foo');
    note.completed = true;
    Assert.equal(note.toString(), '[X] | ' + date + ' | foo');
  });

});


describe('Notes (oop)', () => {

  it('debería exportar función `Notes`', () => {
    Assert.equal(typeof Notes, 'function');
  });

});


describe('Notes#add', () => {

  it('debería botar error cuando argumento no es instancia de Note', () => {
    [
      undefined, null, true, false, 0, 1, 3.14, '', 'foo', [], [1, 2], {},
      { foo: 'bar' }, new Date(), function () { }
    ].forEach((val) => {

      const notes = new Notes();
      Assert.throws(_ => notes.add(val), Error);
    });
  });


  it('debería permitir añadir instancias de Note', () => {
    const notes = new Notes();
    Assert.doesNotThrow(_ => notes.add(new Note('one')));
  });

});


describe('Notes#toString', () => {

  it('debería retornar un string vacío cuando no hay notas', () => {
    const notes = new Notes();
    Assert.equal(notes.toString(), '');
  });


  it('debería ordenar lista por fecha de creación descendente', () => {
    const notes = new Notes();
    const note1 = new Note('one');
    const date = (new Date()).toDateString();

    notes.add(note1);
    notes.add(new Note('two'));

    Assert.equal(notes.toString(), [
      '[ ] | ' + date + ' | two',
      '[ ] | ' + date + ' | one'
    ].join('\n'));

    note1.completed = true;

    Assert.equal(notes.toString(), [
      '[ ] | ' + date + ' | two',
      '[X] | ' + date + ' | one'
    ].join('\n'));
  });

});
