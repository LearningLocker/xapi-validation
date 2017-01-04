"use strict";
var ItsInvalid_1 = require("../ItsInvalid");
var ItsValid_1 = require("../ItsValid");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default(1.01, 'too high', test);
    ItsInvalid_1.default(-1.01, 'too low', test);
    ItsInvalid_1.default('', 'not a Number', test);
    ItsValid_1.default(1, test);
    ItsValid_1.default(0.1, test);
    ItsValid_1.default(0, test);
    ItsValid_1.default(-0.1, test);
    ItsValid_1.default(-1, test);
};
