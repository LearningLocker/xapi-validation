"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var agentSchema_1 = require("../helpers/agentSchema");
var agentMember = {
    objectType: 'Agent',
    mbox: 'mailto:test@example.com',
};
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    itsInvalid_1.default({
        objectType: 'InvalidObjectType',
        mbox: 'mailto:test@example.org',
    }, 'uses invalid objectType', test);
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
        member: [agentMember, agentMember],
        mbox: agentMember.mbox
    }, 'contains an mbox on a group', test);
    itsInvalid_1.default({
        objectType: 'Group',
        member: [agentMember, agentMember],
        account: { name: 'test', homePage: 'http://example.org' }
    }, 'contains an account on a group', test);
    itsInvalid_1.default({
        objectType: 'Group',
        member: [agentMember, agentMember],
        mbox_sha1sum: 'a9993e364706816aba3e25717850c26c9cd0d89d'
    }, 'contains an mbox_sha1sum on a group', test);
    itsInvalid_1.default({
        objectType: 'Group',
        member: [agentMember, agentMember],
        openid: 'http://example.org/test'
    }, 'contains an mbox on a group', test);
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
