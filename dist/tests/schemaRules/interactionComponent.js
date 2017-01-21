"use strict";
var describeRequiredProp_1 = require("../describeRequiredProp");
var describeOptionalProp_1 = require("../describeOptionalProp");
var factory_1 = require("../factory");
var validData = {
    id: 'test',
    description: {},
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    describeRequiredProp_1.default('id', factory_1.stringValue, validData, test);
    describeOptionalProp_1.default('description', factory_1.languageMap, validData, test);
};
