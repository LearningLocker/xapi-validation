"use strict";
var describeOptionalProp_1 = require("../describeOptionalProp");
var describeIfiProp_1 = require("../describeIfiProp");
var itsInvalid_1 = require("../itsInvalid");
var factory_1 = require("../factory");
var validData = {
    mbox: 'mailto:test@example.com',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    describeOptionalProp_1.default('name', factory_1.stringValue, validData, test);
    describeIfiProp_1.default('mbox', factory_1.mailto, test);
    describeIfiProp_1.default('mbox_sha1sum', factory_1.sha1, test);
    describeIfiProp_1.default('openid', factory_1.iri, test);
    describeIfiProp_1.default('account', factory_1.account, test);
    itsInvalid_1.default({
        objectType: 'Agent',
        name: 'Test',
    }, 'missing an IFI', test);
    itsInvalid_1.default({
        objectType: 'Agent',
        name: 'Test',
        mbox: 'mailto:test@example.com',
        openid: 'http://www.example.com',
    }, 'containing too many IFIs', test);
};
