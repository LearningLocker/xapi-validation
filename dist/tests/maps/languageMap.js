"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = {
    'en-GB': 'test',
};
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    itsInvalid_1.default({
        '-': 'test'
    }, 'containing invalid keys', test);
    itsInvalid_1.default({
        'en-GB': 10
    }, 'containing invalid values', test);
    itsValid_1.default(validData, test);
};
