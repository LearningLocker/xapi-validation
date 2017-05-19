"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var describeOptionalProp_1 = require("../describeOptionalProp");
var itsInvalid_1 = require("../itsInvalid");
var factory_1 = require("../factory");
var validData = {
    score: {},
    success: false,
    completion: false,
    response: 'test',
    duration: 'P3Y6M4DT12H30M5S',
    extensions: {},
};
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    describeOptionalProp_1.default('score', factory_1.score, validData, test);
    describeOptionalProp_1.default('success', factory_1.booleanValue, validData, test);
    describeOptionalProp_1.default('completion', factory_1.booleanValue, validData, test);
    describeOptionalProp_1.default('response', factory_1.stringValue, validData, test);
    describeOptionalProp_1.default('duration', factory_1.duration, validData, test);
    describeOptionalProp_1.default('extensions', factory_1.extensions, validData, test);
};
