"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var lodash_1 = require("lodash");
var factory_1 = require("../factory");
var SignedContentTypeWarning_1 = require("../warnings/SignedContentTypeWarning");
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema({
        usageType: rulr_1.required(factory_1.iri),
        display: rulr_1.required(factory_1.languageMap),
        description: rulr_1.optional(factory_1.languageMap),
        contentType: rulr_1.required(factory_1.imt),
        length: rulr_1.required(factory_1.integerValue),
        sha2: rulr_1.required(factory_1.stringValue),
        fileUrl: rulr_1.optional(factory_1.iri),
    }),
    function (data, path) {
        if (!lodash_1.isPlainObject(data))
            return [];
        if (data.usageType === 'http://adlnet.gov/expapi/attachments/signature' &&
            data.contentType !== 'application/octet-stream') {
            return [new SignedContentTypeWarning_1.default(data, path, data.contentType)];
        }
        return [];
    }
]);
