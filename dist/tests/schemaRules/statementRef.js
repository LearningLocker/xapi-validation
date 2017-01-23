"use strict";
var describeRequiredProp_1 = require("../describeRequiredProp");
var itsInvalid_1 = require("../itsInvalid");
var factory_1 = require("../factory");
var validData = {
    objectType: 'StatementRef',
    id: '957f56b7-1d34-4b01-9408-3ffeb2053b28',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    describeRequiredProp_1.default('id', factory_1.uuid, validData, test);
};
