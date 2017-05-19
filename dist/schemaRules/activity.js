"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var factory_1 = require("../factory");
exports.default = rulr_1.restrictToSchema({
    objectType: rulr_1.optional(factory_1.stringValue),
    id: rulr_1.required(factory_1.iri),
    definition: rulr_1.optional(factory_1.definition),
});
