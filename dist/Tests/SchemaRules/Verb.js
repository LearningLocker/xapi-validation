"use strict";
var DescribeRequiredProp_1 = require("../DescribeRequiredProp");
var DescribeOptionalProp_1 = require("../DescribeOptionalProp");
var Factory_1 = require("../Factory");
var validData = {
    id: 'http://www.example.com',
    display: {},
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    DescribeRequiredProp_1.default('id', Factory_1.iri, validData, test);
    DescribeOptionalProp_1.default('display', Factory_1.languageMap, validData, test);
};
