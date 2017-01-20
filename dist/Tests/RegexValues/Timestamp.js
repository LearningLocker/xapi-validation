"use strict";
var ItsInvalid_1 = require("../ItsInvalid");
var ItsValid_1 = require("../ItsValid");
var validData = '20090131T230000-0100';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default('2009-01-31T230000-01:00', 'not a Timestamp', test);
    ItsInvalid_1.default(10, 'not a String', test);
    ItsValid_1.default(validData, test);
    ItsValid_1.default('2009-01-31T23:00:00-01:00', test);
};
