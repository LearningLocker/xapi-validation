"use strict";
var describeRequiredProp_1 = require("../describeRequiredProp");
var itsInvalid_1 = require("../itsInvalid");
var statementSchema_1 = require("../helpers/statementSchema");
var validStatementData_1 = require("../helpers/validStatementData");
var factory_1 = require("../factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default(Object.assign({}, validStatementData_1.default, {
        object: Object.assign({}, validStatementData_1.default, {
            objectType: 'SubStatement',
        }),
    }), 'object is a SubStatement', test);
    describeRequiredProp_1.default('object', factory_1.subStatementObject, validStatementData_1.default, test);
    statementSchema_1.default(function (data, valid) {
        return test(Object.assign({}, data), valid);
    });
};
