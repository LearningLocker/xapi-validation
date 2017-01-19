"use strict";
var DescribeOptionalProp_1 = require("../DescribeOptionalProp");
var Factory_1 = require("../Factory");
var validData = {
    scaled: 0,
    raw: 0,
    min: 0,
    max: 0,
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    DescribeOptionalProp_1.default('scaled', Factory_1.scaledValue, validData, test);
    DescribeOptionalProp_1.default('raw', Factory_1.numberValue, validData, test);
    DescribeOptionalProp_1.default('min', Factory_1.numberValue, validData, test);
    DescribeOptionalProp_1.default('max', Factory_1.numberValue, validData, test);
};
