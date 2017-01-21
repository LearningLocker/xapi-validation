"use strict";
require("mocha");
var itsInvalid_1 = require("../itsInvalid");
var agentSchema_1 = require("../helpers/agentSchema");
var factory_1 = require("../factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default({
        objectType: 'Group',
        name: 'Test',
        member: [],
    }, 'contains no members', test);
    describe('member', function () {
        factory_1.agent(function (value, valid) {
            return test({
                objectType: 'Group',
                name: 'Test',
                mbox: 'mailto:test@example.com',
                member: [value],
            }, valid);
        });
    });
    agentSchema_1.default(test);
};
