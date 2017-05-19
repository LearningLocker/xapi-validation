"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
exports.default = function (test) {
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default('20090131T230000-0100', test);
    itsValid_1.default('2009-01-31T23:00:00-01:00', test);
    itsValid_1.default('20170101', test);
    itsValid_1.default('2017-01-01', test);
    itsInvalid_1.default('2009-01-31T230000-01:00', 'not a Timestamp', test);
    itsInvalid_1.default('2017', 'not a Timestamp', test);
    itsInvalid_1.default('2017-01', 'not a Timestamp', test);
    itsInvalid_1.default('2013-99-99T04:13:00+00:00', 'not a Timestamp', test);
    itsValid_1.default('0785-10-10T04:13:00+00:00', test);
};
