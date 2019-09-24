global.window = global;
global.assert = require('chai').assert;
require('../src/validator');
require('./validator.spec.js');
