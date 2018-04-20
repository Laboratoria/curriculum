module.exports = config => config.set({

  browsers: ['PhantomJS'],

  frameworks: ['mocha'],

  files: [
    // { pattern: 'test/fixture.html', watched: false },
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/chai/chai.js',
    'index.js',
    'test/**/*.spec.js',
  ],

  preprocessors: {
    // '**/*.html': ['html2js'],
    // 'index.js': ['babel'],
    // 'test/**/*.js': ['babel'],
  },

  babelPreprocessor: {
    options: {
      presets: ['env'],
    },
  },

  reporters: ['mocha'],

  client: {
    mocha: {
      reporter: 'tap',
    },
  },

  plugins: [
    'karma-mocha',
    'karma-mocha-reporter',
    'karma-phantomjs-launcher',
    // 'karma-html2js-preprocessor',
    // 'karma-babel-preprocessor',
  ],

});
