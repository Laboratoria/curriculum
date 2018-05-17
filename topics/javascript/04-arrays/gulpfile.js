const gulp = require('gulp');
const shell = require('gulp-shell');

const sh = {
  test: 'node 01-arrays/README.js',
  gen: `
    rm 01-arrays/*.md &&
    ../../../node_modules/jdi/jdi **/*.js &&
    ../../../node_modules/renamer/bin/cli.js --find 'js.md' --replace 'md' **/*
  `,
  lint: '../../../node_modules/eslint/bin/eslint.js . --fix',
};

Object.keys(sh).forEach((task) => {
  gulp.task(task, shell.task(sh[task]));
});

const tasks = ['test', 'lint', 'gen'];

gulp.task('watch', () => {
  gulp.watch('**/*.js', tasks);
});

gulp.task('default', [...tasks, 'watch']);
