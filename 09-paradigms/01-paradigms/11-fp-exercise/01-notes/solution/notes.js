const createNote = text => ({
  text,
  createdAt: new Date(),
  completed: false
});

const noteToString = note => [
  '[' + (note.completed ? 'X' : ' ') + ']',
  ' | ' + note.createdAt.toDateString(),
  ' | ' + note.text
].join('');

const createNotes = array => array.map(createNote);

const notesToString = notes => notes.map(noteToString).join('\n');

exports.createNote = createNote;
exports.noteToString = noteToString;
exports.createNotes = createNotes;
exports.notesToString = notesToString;
