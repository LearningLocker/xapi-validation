"use strict";
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = '20090131T230000-0100';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default('2009-01-31T230000-01:00', 'not a Timestamp', test);
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default(validData, test);
    itsValid_1.default('2009-01-31T23:00:00-01:00', test);
};
