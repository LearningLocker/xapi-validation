"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = 'choice';
exports.default = function (test) {
    itsInvalid_1.default('choices', 'not an Interaction Type', test);
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default(validData, test);
};
