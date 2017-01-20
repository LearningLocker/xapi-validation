"use strict";
var DescribeRequiredProp_1 = require("../DescribeRequiredProp");
var DescribeOptionalProp_1 = require("../DescribeOptionalProp");
var ValidStatementData_1 = require("../Helpers/ValidStatementData");
var StatementRules_1 = require("../Helpers/StatementRules");
var Collection_1 = require("../Helpers/Collection");
var Factory_1 = require("../Factory");
var attachments = Collection_1.default(Factory_1.attachment);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    DescribeRequiredProp_1.default('actor', Factory_1.actor, ValidStatementData_1.default, test);
    DescribeRequiredProp_1.default('verb', Factory_1.verb, ValidStatementData_1.default, test);
    DescribeOptionalProp_1.default('result', Factory_1.result, ValidStatementData_1.default, test);
    DescribeOptionalProp_1.default('context', Factory_1.context, ValidStatementData_1.default, test);
    DescribeOptionalProp_1.default('timestamp', Factory_1.timestamp, ValidStatementData_1.default, test);
    DescribeOptionalProp_1.default('attachments', attachments, ValidStatementData_1.default, test);
    StatementRules_1.default(function (data, valid) {
        return test(Object.assign({}, ValidStatementData_1.default, data), valid);
    });
};
