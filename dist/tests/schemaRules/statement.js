"use strict";
var describeRequiredProp_1 = require("../describeRequiredProp");
var describeOptionalProp_1 = require("../describeOptionalProp");
var statementSchema_1 = require("../helpers/statementSchema");
var validStatementData_1 = require("../helpers/validStatementData");
var factory_1 = require("../factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    describeOptionalProp_1.default('id', factory_1.uuid, validStatementData_1.default, test);
    describeOptionalProp_1.default('stored', factory_1.timestamp, validStatementData_1.default, test);
    describeOptionalProp_1.default('authority', factory_1.authority, validStatementData_1.default, test);
    describeOptionalProp_1.default('version', factory_1.version, validStatementData_1.default, test);
    describeRequiredProp_1.default('object', factory_1.object, validStatementData_1.default, test);
    statementSchema_1.default(test);
};
