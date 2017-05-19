"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = {
    'http://www.example.com': 'test',
};
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    itsInvalid_1.default({
        http: 'test'
    }, 'containing invalid keys', test);
    itsValid_1.default(validData, test);
};
