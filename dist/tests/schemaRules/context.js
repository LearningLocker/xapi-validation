"use strict";
var describeOptionalProp_1 = require("../describeOptionalProp");
var itsInvalid_1 = require("../itsInvalid");
var factory_1 = require("../factory");
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
    itsInvalid_1.default(10, 'not an object', test);
    describeOptionalProp_1.default('registration', factory_1.uuid, validData, test);
    describeOptionalProp_1.default('instructor', factory_1.actor, validData, test);
    describeOptionalProp_1.default('team', factory_1.group, validData, test);
    describeOptionalProp_1.default('contextActivities', factory_1.contextActivities, validData, test);
    describeOptionalProp_1.default('revision', factory_1.stringValue, validData, test);
    describeOptionalProp_1.default('platform', factory_1.stringValue, validData, test);
    describeOptionalProp_1.default('language', factory_1.language, validData, test);
    describeOptionalProp_1.default('statement', factory_1.statementRef, validData, test);
    describeOptionalProp_1.default('extensions', factory_1.extensions, validData, test);
};
