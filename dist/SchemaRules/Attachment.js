"use strict";
var rulr_1 = require("rulr");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.restrictToSchema({
    usageType: rulr_1.required(Factory_1.iri),
    display: rulr_1.required(Factory_1.languageMap),
    description: rulr_1.optional(Factory_1.languageMap),
    contentType: rulr_1.required(Factory_1.imt),
    length: rulr_1.required(Factory_1.integer),
    sha2: rulr_1.required(Factory_1.string),
    fileUrl: rulr_1.optional(Factory_1.iri),
});
