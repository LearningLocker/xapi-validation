"use strict";
var DescribeRequiredProp_1 = require("../DescribeRequiredProp");
var DescribeOptionalProp_1 = require("../DescribeOptionalProp");
var StatementRules_1 = require("../Helpers/StatementRules");
var Collection_1 = require("../Helpers/Collection");
var Factory_1 = require("../Factory");
var attachments = Collection_1.default(Factory_1.attachment);
var validData = {
    actor: {
        objectType: 'Agent',
        mbox: 'mailto:test@example.com',
    },
    verb: {
        id: 'http://www.example.com',
    },
    object: {
        objectType: 'Activity',
        id: 'http://www.example.com',
    },
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    DescribeRequiredProp_1.default('actor', Factory_1.actor, validData, test);
    DescribeRequiredProp_1.default('verb', Factory_1.verb, validData, test);
    DescribeOptionalProp_1.default('result', Factory_1.result, validData, test);
    DescribeOptionalProp_1.default('context', Factory_1.context, validData, test);
    DescribeOptionalProp_1.default('timestamp', Factory_1.timestamp, validData, test);
    DescribeOptionalProp_1.default('attachments', attachments, validData, test);
    StatementRules_1.default(function (data, valid) {
        return test(Object.assign({}, validData, data), valid);
    });
};
