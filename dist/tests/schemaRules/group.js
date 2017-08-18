"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var itsInvalid_1 = require("../itsInvalid");
var agentSchema_1 = require("../helpers/agentSchema");
var describeMemberProp_1 = require("../describeMemberProp");
var factory_1 = require("../factory");
var objectTypeFactory_1 = require("../helpers/objectTypeFactory");
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    factory_1.subGroup(test);
    describeMemberProp_1.default(function (test) {
        return objectTypeFactory_1.default({
            Agent: factory_1.agent,
            Group: factory_1.subGroup,
        }, 'Agent', test, { mbox: 'mailto:test@example.org' });
    }, test);
    agentSchema_1.default(test);
};
