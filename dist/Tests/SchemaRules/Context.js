"use strict";
var DescribeOptionalProp_1 = require("../DescribeOptionalProp");
var Factory_1 = require("../Factory");
var validData = {
    registration: 'd0310d1c-65fe-4b59-9d4f-c56de054243a',
    instructor: {
        objectType: 'Agent',
        mbox: 'mailto:test@example.com',
    },
    team: {
        objectType: 'Group',
        mbox: 'mailto:test@example.com',
    },
    contextActivities: {},
    revision: 'Test',
    platform: 'Test',
    language: 'en-US',
    statement: {
        objectType: 'StatementRef',
        id: 'd0310d1c-65fe-4b59-9d4f-c56de054243a',
    },
    extensions: {},
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    DescribeOptionalProp_1.default('registration', Factory_1.uuid, validData, test);
    DescribeOptionalProp_1.default('instructor', Factory_1.actor, validData, test);
    DescribeOptionalProp_1.default('team', Factory_1.group, validData, test);
    DescribeOptionalProp_1.default('contextActivities', Factory_1.contextActivities, validData, test);
    DescribeOptionalProp_1.default('revision', Factory_1.stringValue, validData, test);
    DescribeOptionalProp_1.default('platform', Factory_1.stringValue, validData, test);
    DescribeOptionalProp_1.default('language', Factory_1.language, validData, test);
    DescribeOptionalProp_1.default('statement', Factory_1.statementRef, validData, test);
    DescribeOptionalProp_1.default('extensions', Factory_1.extensions, validData, test);
};
