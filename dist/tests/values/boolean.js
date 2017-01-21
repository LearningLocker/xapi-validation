"use strict";
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default(10, 'not a Boolean', test);
    itsValid_1.default(true, test);
    itsValid_1.default(false, test);
};
