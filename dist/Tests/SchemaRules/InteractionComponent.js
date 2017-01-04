"use strict";
var DescribeRequiredProp_1 = require("../DescribeRequiredProp");
var DescribeOptionalProp_1 = require("../DescribeOptionalProp");
var Factory_1 = require("../Factory");
var validData = {
    id: 'test',
    description: {},
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    DescribeRequiredProp_1.default('id', Factory_1.string, validData, test);
    DescribeOptionalProp_1.default('description', Factory_1.languageMap, validData, test);
};
