global.window = global;
global.assert = require('chai').assert;
require('../src/cipher');
require('./cipher.spec.js');
