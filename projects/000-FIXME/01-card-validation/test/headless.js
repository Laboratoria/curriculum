global.window = global;
global.assert = require('chai').assert;
require('../src/validation');
require('./validation.spec.js');
