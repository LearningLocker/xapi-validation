"use strict";
var ItsInvalid_1 = require("../ItsInvalid");
var AgentSchema_1 = require("../Helpers/AgentSchema");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default({
        objectType: 'Group',
        name: 'Test',
        member: [],
    }, 'contains no members', test);
    describe('member', function () {
        Factory_1.agent(function (value, valid) {
            return test({
                objectType: 'Group',
                name: 'Test',
                mbox: 'mailto:test@example.com',
                member: [value],
            }, valid);
        });
    });
    AgentSchema_1.default(test);
};
