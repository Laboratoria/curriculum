const gulp = require('gulp');
const shell = require('gulp-shell');

const sh = {
  test: 'node 01-arrays/README.js',
  /*
  - elimina todo los `md` que hayan de antes
  - regenera los `mds`
  - quita el timestamp que genera `jdi` al final del md
  */
  gen: `
    rm 01-arrays/*.md &&
    ../../../node_modules/jdi/jdi **/*.js &&
    head -n -4 01-arrays/README.js.md > 01-arrays/README.md && rm 01-arrays/README.js.md
  `,
  lint: `
    cd ../../../   &&
    npx eslint topics/javascript/04-arrays --fix &&
    npx mdlint topics/javascript/04-arrays
  `,
};

Object.keys(sh).forEach((task) => {
  gulp.task(task, shell.task(sh[task]));
});

const tasks = ['test', 'gen', 'lint'];

gulp.task('watch', () => {
  gulp.watch('**/*.js', tasks);
});

gulp.task('default', tasks);

