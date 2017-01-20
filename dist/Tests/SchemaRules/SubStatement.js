"use strict";
var DescribeRequiredProp_1 = require("../DescribeRequiredProp");
var ItsInvalid_1 = require("../ItsInvalid");
var StatementSchema_1 = require("../Helpers/StatementSchema");
var ValidStatementData_1 = require("../Helpers/ValidStatementData");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default(Object.assign({}, ValidStatementData_1.default, {
        object: Object.assign({}, ValidStatementData_1.default, {
            objectType: 'SubStatement',
        }),
    }), 'object is a SubStatement', test);
    DescribeRequiredProp_1.default('object', Factory_1.subStatementObject, ValidStatementData_1.default, test);
    StatementSchema_1.default(function (data, valid) {
        return test(Object.assign({}, data), valid);
    });
};
