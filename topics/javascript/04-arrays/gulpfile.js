const gulp = require('gulp');
const shell = require('gulp-shell');

const lessons = [
  '01-arrays',
  '02-array-proto',
  '03-filter-map-sort-reduce',
];

const sh = {
  test: lessons.reduce((cmd, l) => `${cmd} && node ${l}/index.js`, 'true'),
  /*
  - elimina todo los `md` que hayan de antes
  - regenera los `mds`
  - quita el timestamp que genera `jdi` al final del md
  */
  gen: lessons.reduce((cmd, l) => `
    ${cmd} &&
    rm ${l}/README.md || true &&
    npx jdi ${l}/index.js &&
    head -n -4 ${l}/index.js.md > ${l}/README.md && rm ${l}/index.js.md`,
  'true'),
  eslint: `
    cd ../../../ &&
    npx eslint topics/javascript/04-arrays
  `,
  mdlint: `
    cd ../../../ &&
    npx mdlint topics/javascript/04-arrays
  `,
  lint: `
    cd ../../../ &&
    npx eslint topics/javascript/04-arrays &&
    npx mdlint topics/javascript/04-arrays 
  `,
};

Object.keys(sh).forEach((task) => {
  gulp.task(task, shell.task(sh[task]));
});

const tasks = ['test', 'gen', 'lint'];

gulp.task('watch', tasks, () => {
  gulp.watch('**/*.js', tasks);
});

gulp.task('default', tasks);

