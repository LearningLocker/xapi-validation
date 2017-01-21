"use strict";
require("mocha");
var agentSchema_1 = require("../helpers/agentSchema");
var factory_1 = require("../factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    factory_1.subGroup(test);
    describe('member', function () {
        factory_1.subGroup(function (value, valid) {
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
