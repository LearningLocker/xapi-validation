"use strict";
var ItsInvalid_1 = require("../ItsInvalid");
var ItsValid_1 = require("../ItsValid");
var validData = '1.0.0';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default('1.0', 'not a Version', test);
    ItsInvalid_1.default(10, 'not a String', test);
    ItsValid_1.default(validData, test);
};
