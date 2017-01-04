"use strict";
var rulr_1 = require("rulr");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    actor: rulr_1.required(Factory_1.actor),
    verb: rulr_1.required(Factory_1.verb),
    object: rulr_1.required(Factory_1.object),
    result: rulr_1.optional(Factory_1.result),
    context: rulr_1.optional(Factory_1.context),
    timestamp: rulr_1.optional(Factory_1.timestamp),
    attachments: rulr_1.optional(rulr_1.restrictToCollection(function () { return Factory_1.attachment; })),
};
