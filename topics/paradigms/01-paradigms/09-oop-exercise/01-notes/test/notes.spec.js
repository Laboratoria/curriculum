import { assert } from 'chai';
import { Note, Notes } from '../solution/notes.js';

describe('Note', () => {

  it('debería exportar función `Note`', () => {
    assert.equal(typeof Note, 'function');
  });

  it('debería crear un nuevo objeto cuando invocamos new Note()', () => {
    const note = new Note('renovar dni');
    assert.equal(note.text, 'renovar dni');
    assert.ok(note.createdAt instanceof Date);
    assert.equal(note.completed, false);
  });

  it('debería tirar un error cuando invocamos Note() sin "new"', () => {
    assert.throws(_ => Note('renovar dni'), TypeError);
  });

});


describe('Note#toString', () => {

  it('debería convertir objeto a string', () => {
    const note = new Note('foo');
    const date = (new Date()).toDateString();
    assert.equal(note.toString(), '[ ] | ' + date + ' | foo');
    note.completed = true;
    assert.equal(note.toString(), '[X] | ' + date + ' | foo');
  });

});


describe('Notes (oop)', () => {

  it('debería exportar función `Notes`', () => {
    assert.equal(typeof Notes, 'function');
  });

});


describe('Notes#add', () => {

  it('debería botar error cuando argumento no es instancia de Note', () => {
    [
      undefined, null, true, false, 0, 1, 3.14, '', 'foo', [], [1, 2], {},
      { foo: 'bar' }, new Date(), function () { }
    ].forEach((val) => {

      const notes = new Notes();
      assert.throws(_ => notes.add(val), Error);
    });
  });


  it('debería permitir añadir instancias de Note', () => {
    const notes = new Notes();
    assert.doesNotThrow(_ => notes.add(new Note('one')));
  });

});


describe('Notes#toString', () => {

  it('debería retornar un string vacío cuando no hay notas', () => {
    const notes = new Notes();
    assert.equal(notes.toString(), '');
  });


  it('debería ordenar lista por fecha de creación descendente', () => {
    const notes = new Notes();
    const note1 = new Note('one');
    const date = (new Date()).toDateString();

    notes.add(note1);
    notes.add(new Note('two'));

    assert.equal(notes.toString(), [
      '[ ] | ' + date + ' | two',
      '[ ] | ' + date + ' | one'
    ].join('\n'));

    note1.completed = true;

    assert.equal(notes.toString(), [
      '[ ] | ' + date + ' | two',
      '[X] | ' + date + ' | one'
    ].join('\n'));
  });

});
