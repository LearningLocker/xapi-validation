"use strict";
var DescribeRequiredProp_1 = require("../DescribeRequiredProp");
var DescribeOptionalProp_1 = require("../DescribeOptionalProp");
var StatementSchema_1 = require("../Helpers/StatementSchema");
var ValidStatementData_1 = require("../Helpers/ValidStatementData");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    DescribeOptionalProp_1.default('id', Factory_1.uuid, ValidStatementData_1.default, test);
    DescribeOptionalProp_1.default('stored', Factory_1.timestamp, ValidStatementData_1.default, test);
    DescribeOptionalProp_1.default('authority', Factory_1.authority, ValidStatementData_1.default, test);
    DescribeOptionalProp_1.default('version', Factory_1.version, ValidStatementData_1.default, test);
    DescribeRequiredProp_1.default('object', Factory_1.object, ValidStatementData_1.default, test);
    StatementSchema_1.default(test);
};
