import { assert } from 'chai';
import * as Submission from '../solution/notes.js';
const { createNote, noteToString, createNotes, notesToString } = Submission;


describe('createNote()', () => {

  it('debería exportar función `createNote`', () => {
    assert.equal(typeof createNote, 'function');
  });

  it('debería crear un objeto con los campos esperados', () => {
    const note = createNote('renovar dni');
    assert.equal(note.text, 'renovar dni');
    assert.ok(note.createdAt instanceof Date);
    assert.equal(note.completed, false);
    assert.equal(note.__proto__, Object.prototype);
  });

});

describe('noteToString()', () => {

  it('debería exportar función `noteToString`', () => {
    assert.equal(typeof noteToString, 'function');
  });

  it('debería convertir objeto a string', () => {
    const note = createNote('foo');
    const date = (new Date()).toDateString();
    assert.equal(noteToString(note), '[ ] | ' + date + ' | foo');
    note.completed = true;
    assert.equal(noteToString(note), '[X] | ' + date + ' | foo');
  });

});

describe('createNotes()', () => {

  it('debería exportar función `createNotes`', () => {
    assert.equal(typeof createNotes, 'function');
  });

});

describe('notesToString()', () => {

  it('debería exportar función `notesToString`', () => {
    assert.equal(typeof notesToString, 'function');
  });

  it('debería retornar un string vacío cuando no hay notas', () => {
    const notes = createNotes([]);
    assert.equal(notesToString(notes), '');
  });


  it('debería ordenar lista por fecha de creación descendente', () => {
    const notes = createNotes(['one']);
    const date = (new Date()).toDateString();

    notes.unshift(createNote('two'));

    assert.equal(notesToString(notes), [
      '[ ] | ' + date + ' | two',
      '[ ] | ' + date + ' | one'
    ].join('\n'));

    notes[1].completed = true;

    assert.equal(notesToString(notes), [
      '[ ] | ' + date + ' | two',
      '[X] | ' + date + ' | one'
    ].join('\n'));
  });

});
