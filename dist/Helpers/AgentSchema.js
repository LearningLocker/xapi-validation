"use strict";
var rulr_1 = require("rulr");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    objectType: rulr_1.optional(Factory_1.stringValue),
    name: rulr_1.optional(Factory_1.stringValue),
    mbox: rulr_1.optional(Factory_1.mailto),
    mbox_sha1sum: rulr_1.optional(Factory_1.sha1),
    openid: rulr_1.optional(Factory_1.iri),
    account: rulr_1.optional(Factory_1.account),
};
