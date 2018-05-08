const createNote = text => {}; // debes implementar esta función ;-)

const noteToString = note => [
  '[' + (note.completed ? 'X' : ' ') + ']',
  ' | ' + note.createdAt.toDateString(),
  ' | ' + note.text
].join('');

const createNotes = array => {}; // debes implementar esta función ;-)

const notesToString = notes => {}; // debes implementar esta función ;-)
