"use strict";
var rulr_1 = require("rulr");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.restrictToSchema({
    objectType: rulr_1.optional(Factory_1.stringValue),
    id: rulr_1.required(Factory_1.iri),
    definition: rulr_1.optional(Factory_1.definition),
});
