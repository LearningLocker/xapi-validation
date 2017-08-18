"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var factory_1 = require("../factory");
var restrictToValue_1 = require("./restrictToValue");
exports.default = {
    objectType: rulr_1.optional(restrictToValue_1.default('Agent')),
    name: rulr_1.optional(factory_1.stringValue),
    mbox: rulr_1.optional(factory_1.mailto),
    mbox_sha1sum: rulr_1.optional(factory_1.sha1),
    openid: rulr_1.optional(factory_1.iri),
    account: rulr_1.optional(factory_1.account),
};
