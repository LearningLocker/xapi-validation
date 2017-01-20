"use strict";
var DescribeRequiredProp_1 = require("../DescribeRequiredProp");
var DescribeOptionalProp_1 = require("../DescribeOptionalProp");
var Factory_1 = require("../Factory");
var validData = {
    usageType: 'http://www.example.com',
    display: {},
    description: {},
    contentType: 'application/json',
    length: 10,
    sha2: 'test',
    fileUrl: 'http://www.example.com',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    DescribeRequiredProp_1.default('usageType', Factory_1.iri, validData, test);
    DescribeRequiredProp_1.default('display', Factory_1.languageMap, validData, test);
    DescribeOptionalProp_1.default('description', Factory_1.languageMap, validData, test);
    DescribeRequiredProp_1.default('contentType', Factory_1.imt, validData, test);
    DescribeRequiredProp_1.default('length', Factory_1.integerValue, validData, test);
    DescribeRequiredProp_1.default('sha2', Factory_1.stringValue, validData, test);
    DescribeOptionalProp_1.default('fileUrl', Factory_1.iri, validData, test);
};
