"use strict";
var ItsInvalid_1 = require("../ItsInvalid");
var ItsValid_1 = require("../ItsValid");
var AgentSchema_1 = require("../Helpers/AgentSchema");
var agentMember = {
    objectType: 'Agent',
    mbox: 'mailto:test@example.com',
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    ItsInvalid_1.default({
        objectType: 'Group',
        member: [],
    }, 'contains no members', test);
    ItsInvalid_1.default({
        objectType: 'Group',
        member: [agentMember],
    }, 'contains too few members', test);
    ItsInvalid_1.default({
        objectType: 'Group',
        member: [agentMember, agentMember, agentMember],
    }, 'contains too many members', test);
    ItsInvalid_1.default({
        objectType: 'Group',
        member: [agentMember, {
                objectType: 'Group',
                mbox: 'mailto:test@example.com',
            }],
    }, 'contains group members', test);
    ItsValid_1.default({
        objectType: 'Group',
        member: [agentMember, agentMember],
    }, test);
    AgentSchema_1.default(test);
};
