"use strict";
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = 'mailto:test@example.com';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default('test@example.com', 'not a Mailto', test);
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default(validData, test);
    itsValid_1.default('mailto:test@example.horse', test);
    itsValid_1.default('mailto:te\`st@example.com', test);
};
