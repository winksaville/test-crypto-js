import log from 'log.js';
import * as lib from 'lib.js';
import * as TC from 'test_crypto';

// Set onClick window functions
window.getField = lib.getField;
window.setField = lib.setField;
window.test = TC.test;
