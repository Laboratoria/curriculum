export function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

Note.prototype.toString = function () {
  let str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};


export function Notes() {
  this.data = [];
}

Notes.prototype.add = function (note) {
  if (!(note instanceof Note)) {
    throw new Error('Wrong type!');
  }

  this.data.unshift(note);
};

Notes.prototype.toString = function () {
  let str = '';
  for (let i = 0; i < this.data.length; i++) {
    if (i > 0) {
      str += '\n';
    }
    str += this.data[i].toString();
  }
  return str;
};

