"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = 'P3Y6M4DT12H30M5S';
var validData2 = 'P4W';
exports.default = function (test) {
    itsInvalid_1.default('3Y6M4DT12H30M5S', 'not a Duration', test);
    itsInvalid_1.default('P4W1D', 'not a Duration', test);
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default(validData, test);
    itsValid_1.default(validData2, test);
};
