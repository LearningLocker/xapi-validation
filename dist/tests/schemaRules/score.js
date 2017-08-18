"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var describeOptionalProp_1 = require("../describeOptionalProp");
var itsInvalid_1 = require("../itsInvalid");
var factory_1 = require("../factory");
var validData = {};
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    itsInvalid_1.default({
        min: 1,
        raw: 0,
    }, 'raw less than min', test);
    itsInvalid_1.default({
        max: 0,
        raw: 1,
    }, 'raw more than max', test);
    itsInvalid_1.default({
        max: 0,
        min: 1,
    }, 'min more than max', test);
    describeOptionalProp_1.default('scaled', factory_1.scaledValue, validData, test);
    describeOptionalProp_1.default('raw', factory_1.numberValue, validData, test);
    describeOptionalProp_1.default('min', factory_1.numberValue, validData, test);
    describeOptionalProp_1.default('max', factory_1.numberValue, validData, test);
};
