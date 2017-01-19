"use strict";
var DescribeOptionalProp_1 = require("../DescribeOptionalProp");
var DescribeIfiProp_1 = require("../DescribeIfiProp");
var ItsInvalid_1 = require("../ItsInvalid");
var Factory_1 = require("../Factory");
var validData = {
    mbox: 'mailto:test@example.com',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    DescribeOptionalProp_1.default('name', Factory_1.stringValue, validData, test);
    DescribeIfiProp_1.default('mbox', Factory_1.mailto, test);
    DescribeIfiProp_1.default('mbox_sha1sum', Factory_1.sha1, test);
    DescribeIfiProp_1.default('openid', Factory_1.iri, test);
    DescribeIfiProp_1.default('account', Factory_1.account, test);
    ItsInvalid_1.default({
        objectType: 'Agent',
        name: 'Test',
    }, 'missing an IFI', test);
    ItsInvalid_1.default({
        objectType: 'Agent',
        name: 'Test',
        mbox: 'mailto:test@example.com',
        openid: 'http://www.example.com',
    }, 'containing too many IFIs', test);
};
