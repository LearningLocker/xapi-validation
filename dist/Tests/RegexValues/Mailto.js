"use strict";
var ItsInvalid_1 = require("../ItsInvalid");
var ItsValid_1 = require("../ItsValid");
var validData = 'mailto:test@example.com';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default('test@example.com', 'not a Mailto', test);
    ItsInvalid_1.default(10, 'not a String', test);
    ItsValid_1.default(validData, test);
    ItsValid_1.default('mailto:test@example.horse', test);
    ItsValid_1.default('mailto:te\`st@example.com', test);
};
