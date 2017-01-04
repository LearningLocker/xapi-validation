"use strict";
var DescribeOptionalProp_1 = require("../DescribeOptionalProp");
var Factory_1 = require("../Factory");
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
    DescribeOptionalProp_1.default('score', Factory_1.score, validData, test);
    DescribeOptionalProp_1.default('success', Factory_1.boolean, validData, test);
    DescribeOptionalProp_1.default('completion', Factory_1.boolean, validData, test);
    DescribeOptionalProp_1.default('response', Factory_1.string, validData, test);
    DescribeOptionalProp_1.default('duration', Factory_1.duration, validData, test);
    DescribeOptionalProp_1.default('extensions', Factory_1.extensions, validData, test);
};
