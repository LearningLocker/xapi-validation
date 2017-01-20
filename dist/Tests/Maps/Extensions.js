"use strict";
var ItsInvalid_1 = require("../ItsInvalid");
var ItsValid_1 = require("../ItsValid");
var validData = {
    'http://www.example.com': 'test',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default({
        'http': 'test'
    }, 'containing invalid keys', test);
    ItsValid_1.default(validData, test);
};
