"use strict";
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = {
    'http://www.example.com': 'test',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default({
        'http': 'test'
    }, 'containing invalid keys', test);
    itsValid_1.default(validData, test);
};
