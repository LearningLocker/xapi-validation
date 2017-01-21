"use strict";
var describeOptionalProp_1 = require("../describeOptionalProp");
var factory_1 = require("../factory");
var validData = {
    score: {},
    success: false,
    completion: false,
    response: 'test',
    duration: 'P3Y6M4DT12H30M5S',
    extensions: {},
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    describeOptionalProp_1.default('score', factory_1.score, validData, test);
    describeOptionalProp_1.default('success', factory_1.booleanValue, validData, test);
    describeOptionalProp_1.default('completion', factory_1.booleanValue, validData, test);
    describeOptionalProp_1.default('response', factory_1.stringValue, validData, test);
    describeOptionalProp_1.default('duration', factory_1.duration, validData, test);
    describeOptionalProp_1.default('extensions', factory_1.extensions, validData, test);
};
