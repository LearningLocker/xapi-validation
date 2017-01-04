"use strict";
var rulr_1 = require("rulr");
var Factory_1 = require("../Factory");
var score = rulr_1.restrictToSchema({
    scaled: rulr_1.optional(Factory_1.scaled),
    raw: rulr_1.optional(Factory_1.number),
    min: rulr_1.optional(Factory_1.number),
    max: rulr_1.optional(Factory_1.number),
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.restrictToSchema({
    score: rulr_1.optional(score),
    success: rulr_1.optional(Factory_1.boolean),
    completion: rulr_1.optional(Factory_1.boolean),
    response: rulr_1.optional(Factory_1.string),
    duration: rulr_1.optional(Factory_1.duration),
    extensions: rulr_1.optional(Factory_1.extensions),
});
