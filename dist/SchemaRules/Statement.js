"use strict";
var rulr_1 = require("rulr");
var StatementSchema_1 = require("../Helpers/StatementSchema");
var StatementRules_1 = require("../Helpers/StatementRules");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema(Object.assign({}, StatementSchema_1.default, {
        id: rulr_1.optional(Factory_1.uuid),
        stored: rulr_1.optional(Factory_1.timestamp),
        authority: rulr_1.optional(Factory_1.authority),
        version: rulr_1.optional(Factory_1.version),
    })),
    StatementRules_1.default,
]);
