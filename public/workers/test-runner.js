//
// Este script es el web worker que usan los ejercicios para correr los tests.
//

/* global self, mocha, Mocha, chai, sinon */
/* eslint no-new-func: "off" */
/* eslint no-restricted-globals: "off" */

self.importScripts(
  'https://cdnjs.cloudflare.com/ajax/libs/mocha/9.1.4/mocha.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/chai/4.3.4/chai.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/sinon.js/12.0.1/sinon.min.js'
);

mocha.setup({
  ui: 'bdd',
  reporter: function UnReporter(runner) {
    Mocha.reporters.Base.call(this, runner);
  },
});

const wrapSubmission = str => new Function(`
  var module = { exports: {} };
  var exports = module.exports;
  ${str};;
  return module.exports;
`);

const wrapTests = str => new Function(
  'requires',
  `var require = (name) => {
     if (typeof requires[name] === 'function') {
       return requires[name]();
     }
   };
   ${str};;`
);

const loadTests = (tests, wrappedSubmission) => (
  Object.keys(tests).forEach(key =>
    wrapTests(tests[key])({
      chai: () => chai,
      sinon: () => sinon,
      [`../solution/${key.replace(/\.spec\.js$/, '')}`]: wrappedSubmission,
    })
  )
);

const testToJSON = test => ({
  title: test.title,
  fullTitle: test.fullTitle(),
  async: test.async,
  duration: test.duration,
  pending: test.pending,
  speed: test.speed || null,
  state: test.state,
  sync: test.sync,
  timedOut: test.timedOut,
  err: (test.err || {}).message || null,
});

const suiteToJSON = suite => ({
  title: suite.title,
  fullTitle: suite.fullTitle(),
  delayed: suite.delayed,
  pending: suite.pending,
  root: suite.root,
  suites: suite.suites.map(suiteToJSON),
  tests: suite.tests.map(testToJSON),
});

self.onmessage = (e) => {
  loadTests(e.data.tests, wrapSubmission(e.data.code));

  const runResults = mocha.run();

  runResults.on('end', () => {
    self.postMessage({
      failures: runResults.failures,
      stats: runResults.stats,
      total: runResults.total,
      suite: suiteToJSON(runResults.suite),
    });
  });
};
