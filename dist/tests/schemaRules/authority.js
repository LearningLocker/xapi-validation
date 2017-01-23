"use strict";
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var agentSchema_1 = require("../helpers/agentSchema");
var agentMember = {
    objectType: 'Agent',
    mbox: 'mailto:test@example.com',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    itsInvalid_1.default({
        objectType: 'Group',
        member: [],
    }, 'contains no members', test);
    itsInvalid_1.default({
        objectType: 'Group',
        member: [agentMember],
    }, 'contains too few members', test);
    itsInvalid_1.default({
        objectType: 'Group',
        member: [agentMember, agentMember, agentMember],
    }, 'contains too many members', test);
    itsInvalid_1.default({
        objectType: 'Group',
        member: [agentMember, {
                objectType: 'Group',
                mbox: 'mailto:test@example.com',
            }],
    }, 'contains group members', test);
    itsValid_1.default({
        objectType: 'Group',
        member: [agentMember, agentMember],
    }, test);
    agentSchema_1.default(test);
};
