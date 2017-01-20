"use strict";
var DescribeRequiredProp_1 = require("../DescribeRequiredProp");
var Factory_1 = require("../Factory");
var validData = {
    objectType: 'StatementRef',
    id: '957f56b7-1d34-4b01-9408-3ffeb2053b28',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    DescribeRequiredProp_1.default('id', Factory_1.uuid, validData, test);
};
