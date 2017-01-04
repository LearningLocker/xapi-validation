"use strict";
var rulr_1 = require("rulr");
var StatementSchema_1 = require("../Helpers/StatementSchema");
var StatementRules_1 = require("../Helpers/StatementRules");
var Factory_1 = require("../Factory");
var Errors_1 = require("../Errors");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema(Object.assign({}, StatementSchema_1.default, {
        objectType: rulr_1.optional(Factory_1.string),
    })),
    StatementRules_1.default,
    function (data, path) {
        var objectIsSubStatement = (data.object && data.object.objectType === "SubStatement");
        return objectIsSubStatement ? [Errors_1.subStatementError(data)(path)] : [];
    },
]);
