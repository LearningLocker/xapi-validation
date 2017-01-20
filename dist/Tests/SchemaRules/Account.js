"use strict";
var DescribeRequiredProp_1 = require("../DescribeRequiredProp");
var Factory_1 = require("../Factory");
var validData = {
    homePage: 'http://www.example.com',
    name: '123',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    DescribeRequiredProp_1.default('homePage', Factory_1.iri, validData, test);
    DescribeRequiredProp_1.default('name', Factory_1.stringValue, validData, test);
};
