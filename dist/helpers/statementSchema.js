"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var factory_1 = require("../factory");
exports.default = {
    actor: rulr_1.required(factory_1.actor),
    verb: rulr_1.required(factory_1.verb),
    object: rulr_1.required(factory_1.object),
    result: rulr_1.optional(factory_1.result),
    context: rulr_1.optional(factory_1.context),
    timestamp: rulr_1.optional(factory_1.timestamp),
    attachments: rulr_1.optional(rulr_1.restrictToCollection(function () { return factory_1.attachment; })),
};
