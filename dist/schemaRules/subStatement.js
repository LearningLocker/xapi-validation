"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var statementSchema_1 = require("../helpers/statementSchema");
var statementRules_1 = require("../helpers/statementRules");
var factory_1 = require("../factory");
var SubStatementWarning_1 = require("../warnings/SubStatementWarning");
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema(Object.assign({}, statementSchema_1.default, {
        objectType: rulr_1.optional(factory_1.stringValue),
    })),
    statementRules_1.default,
    function (data, path) {
        var objectIsSubStatement = (data.object && data.object.objectType === 'SubStatement');
        return objectIsSubStatement ? [new SubStatementWarning_1.default(data, path)] : [];
    },
]);
