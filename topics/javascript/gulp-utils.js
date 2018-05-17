const shell = require('gulp-shell');

module.exports = (gulp, topic, lessons) => {
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
      npx eslint topics/javascript/${topic}
    `,
    mdlint: `
      cd ../../../ &&
      npx mdlint topics/javascript/${topic}
    `,
  };

  Object.keys(sh).forEach((task) => {
    gulp.task(task, shell.task(sh[task]));
  });

  gulp.task('lint', gulp.parallel('eslint', 'mdlint'));

  const tasks = gulp.series(['test', 'gen', 'lint']);
  const genTasks = gulp.series(['gen', 'test']);

  gulp.task('watch', gulp.series(genTasks, () => {
    gulp.watch('**/*.js', genTasks);
  }));

  gulp.task('default', tasks);
};
