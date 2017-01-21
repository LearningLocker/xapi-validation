"use strict";
var describeRequiredProp_1 = require("../describeRequiredProp");
var describeOptionalProp_1 = require("../describeOptionalProp");
var validStatementData_1 = require("../helpers/validStatementData");
var statementRules_1 = require("../helpers/statementRules");
var collection_1 = require("../helpers/collection");
var factory_1 = require("../factory");
var attachments = collection_1.default(factory_1.attachment);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    describeRequiredProp_1.default('actor', factory_1.actor, validStatementData_1.default, test);
    describeRequiredProp_1.default('verb', factory_1.verb, validStatementData_1.default, test);
    describeOptionalProp_1.default('result', factory_1.result, validStatementData_1.default, test);
    describeOptionalProp_1.default('context', factory_1.context, validStatementData_1.default, test);
    describeOptionalProp_1.default('timestamp', factory_1.timestamp, validStatementData_1.default, test);
    describeOptionalProp_1.default('attachments', attachments, validStatementData_1.default, test);
    statementRules_1.default(function (data, valid) {
        return test(Object.assign({}, validStatementData_1.default, data), valid);
    });
};
