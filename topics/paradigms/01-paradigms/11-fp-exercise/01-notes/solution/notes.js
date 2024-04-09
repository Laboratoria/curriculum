export const createNote = text => ({
  text,
  createdAt: new Date(),
  completed: false
});

export const noteToString = note => [
  '[' + (note.completed ? 'X' : ' ') + ']',
  ' | ' + note.createdAt.toDateString(),
  ' | ' + note.text
].join('');

export const createNotes = array => array.map(createNote);

export const notesToString = notes => notes.map(noteToString).join('\n');

