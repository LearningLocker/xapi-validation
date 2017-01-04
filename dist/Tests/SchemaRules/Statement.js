"use strict";
var DescribeRequiredProp_1 = require("../DescribeRequiredProp");
var DescribeOptionalProp_1 = require("../DescribeOptionalProp");
var StatementSchema_1 = require("../Helpers/StatementSchema");
var Factory_1 = require("../Factory");
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
    DescribeOptionalProp_1.default('id', Factory_1.uuid, validData, test);
    DescribeOptionalProp_1.default('stored', Factory_1.timestamp, validData, test);
    DescribeOptionalProp_1.default('authority', Factory_1.authority, validData, test);
    DescribeOptionalProp_1.default('version', Factory_1.version, validData, test);
    DescribeRequiredProp_1.default('object', Factory_1.object, validData, test);
    StatementSchema_1.default(test);
};
