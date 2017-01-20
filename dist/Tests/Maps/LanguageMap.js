"use strict";
var ItsInvalid_1 = require("../ItsInvalid");
var ItsValid_1 = require("../ItsValid");
var validData = {
    'en-GB': 'test',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default({
        '-': 'test'
    }, 'containing invalid keys', test);
    ItsInvalid_1.default({
        'en-GB': 10
    }, 'containing invalid values', test);
    ItsValid_1.default(validData, test);
};
