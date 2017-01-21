"use strict";
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = 'http://www.example.com';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default('http', 'not an IRI', test);
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default(validData, test);
};
