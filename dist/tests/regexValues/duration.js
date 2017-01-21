"use strict";
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = 'P3Y6M4DT12H30M5S';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default('3Y6M4DT12H30M5S', 'not a Duration', test);
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default(validData, test);
};
