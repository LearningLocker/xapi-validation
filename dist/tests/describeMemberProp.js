"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
exports.default = function (describer, test) {
    return describe('member', function () {
        describer(function (value, valid) {
            return test({
                objectType: 'Group',
                name: 'Test',
                mbox: 'mailto:test@example.com',
                member: [value],
            }, valid);
        });
    });
};
