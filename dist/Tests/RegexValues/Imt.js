"use strict";
var ItsInvalid_1 = require("../ItsInvalid");
var ItsValid_1 = require("../ItsValid");
var validData = 'application/json';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default('applications/json', 'not a IMT', test);
    ItsInvalid_1.default(10, 'not a String', test);
    ItsValid_1.default(validData, test);
    ItsValid_1.default('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', test);
};
