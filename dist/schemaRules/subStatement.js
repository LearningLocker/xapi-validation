"use strict";
var rulr_1 = require("rulr");
var statementSchema_1 = require("../helpers/statementSchema");
var statementRules_1 = require("../helpers/statementRules");
var factory_1 = require("../factory");
var errors_1 = require("../errors");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema(Object.assign({}, statementSchema_1.default, {
        objectType: rulr_1.optional(factory_1.stringValue),
    })),
    statementRules_1.default,
    function (data, path) {
        var objectIsSubStatement = (data.object && data.object.objectType === 'SubStatement');
        return objectIsSubStatement ? [errors_1.subStatementError()(path)] : [];
    },
]);
