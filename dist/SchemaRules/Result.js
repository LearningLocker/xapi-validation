"use strict";
var rulr_1 = require("rulr");
var Factory_1 = require("../Factory");
var score = rulr_1.restrictToSchema({
    scaled: rulr_1.optional(Factory_1.scaledValue),
    raw: rulr_1.optional(Factory_1.numberValue),
    min: rulr_1.optional(Factory_1.numberValue),
    max: rulr_1.optional(Factory_1.numberValue),
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.restrictToSchema({
    score: rulr_1.optional(score),
    success: rulr_1.optional(Factory_1.booleanValue),
    completion: rulr_1.optional(Factory_1.booleanValue),
    response: rulr_1.optional(Factory_1.stringValue),
    duration: rulr_1.optional(Factory_1.duration),
    extensions: rulr_1.optional(Factory_1.extensions),
});
