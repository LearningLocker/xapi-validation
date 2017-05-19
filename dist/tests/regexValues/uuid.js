"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = '957f56b7-1d34-4b01-9408-3ffeb2053b28';
exports.default = function (test) {
    itsInvalid_1.default('957f56b7-1d34-4b01-9408-3ffeb2053b2', 'not a UUID', test);
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default(validData, test);
};
