"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var describeRequiredProp_1 = require("../describeRequiredProp");
var describeOptionalProp_1 = require("../describeOptionalProp");
var itsInvalid_1 = require("../itsInvalid");
var factory_1 = require("../factory");
var validData = {
    id: 'test',
    description: {},
};
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    describeRequiredProp_1.default('id', factory_1.stringValue, validData, test);
    describeOptionalProp_1.default('description', factory_1.languageMap, validData, test);
};
