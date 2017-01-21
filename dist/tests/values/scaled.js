"use strict";
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default(1.01, 'too high', test);
    itsInvalid_1.default(-1.01, 'too low', test);
    itsInvalid_1.default('', 'not a Number', test);
    itsValid_1.default(1, test);
    itsValid_1.default(0.1, test);
    itsValid_1.default(0, test);
    itsValid_1.default(-0.1, test);
    itsValid_1.default(-1, test);
};
