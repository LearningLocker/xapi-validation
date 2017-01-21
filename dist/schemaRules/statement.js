"use strict";
var rulr_1 = require("rulr");
var statementSchema_1 = require("../helpers/statementSchema");
var statementRules_1 = require("../helpers/statementRules");
var factory_1 = require("../factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema(Object.assign({}, statementSchema_1.default, {
        id: rulr_1.optional(factory_1.uuid),
        stored: rulr_1.optional(factory_1.timestamp),
        authority: rulr_1.optional(factory_1.authority),
        version: rulr_1.optional(factory_1.version),
    })),
    statementRules_1.default,
]);
