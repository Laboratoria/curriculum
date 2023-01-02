const Assert = require('chai').assert;
const Submission = require('../solution/notes');
const { createNote, noteToString, createNotes, notesToString } = Submission;


describe('createNote()', () => {

  it('debería exportar función `createNote`', () => {
    Assert.equal(typeof createNote, 'function');
  });

  it('debería crear un objeto con los campos esperados', () => {
    const note = createNote('renovar dni');
    Assert.equal(note.text, 'renovar dni');
    Assert.ok(note.createdAt instanceof Date);
    Assert.equal(note.completed, false);
    Assert.equal(note.__proto__, Object.prototype);
  });

});

describe('noteToString()', () => {

  it('debería exportar función `noteToString`', () => {
    Assert.equal(typeof noteToString, 'function');
  });

  it('debería convertir objeto a string', () => {
    const note = createNote('foo');
    const date = (new Date()).toDateString();
    Assert.equal(noteToString(note), '[ ] | ' + date + ' | foo');
    note.completed = true;
    Assert.equal(noteToString(note), '[X] | ' + date + ' | foo');
  });

});

describe('createNotes()', () => {

  it('debería exportar función `createNotes`', () => {
    Assert.equal(typeof createNotes, 'function');
  });

});

describe('notesToString()', () => {

  it('debería exportar función `notesToString`', () => {
    Assert.equal(typeof notesToString, 'function');
  });

  it('debería retornar un string vacío cuando no hay notas', () => {
    const notes = createNotes([]);
    Assert.equal(notesToString(notes), '');
  });


  it('debería ordenar lista por fecha de creación descendente', () => {
    const notes = createNotes(['one']);
    const date = (new Date()).toDateString();

    notes.unshift(createNote('two'));

    Assert.equal(notesToString(notes), [
      '[ ] | ' + date + ' | two',
      '[ ] | ' + date + ' | one'
    ].join('\n'));

    notes[1].completed = true;

    Assert.equal(notesToString(notes), [
      '[ ] | ' + date + ' | two',
      '[X] | ' + date + ' | one'
    ].join('\n'));
  });

});
