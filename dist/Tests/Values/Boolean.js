"use strict";
var ItsInvalid_1 = require("../ItsInvalid");
var ItsValid_1 = require("../ItsValid");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default(10, 'not a Boolean', test);
    ItsValid_1.default(true, test);
    ItsValid_1.default(false, test);
};
