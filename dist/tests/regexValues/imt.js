"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = 'application/json';
exports.default = function (test) {
    itsInvalid_1.default('applications/json', 'not a IMT', test);
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default(validData, test);
    itsValid_1.default('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', test);
};
