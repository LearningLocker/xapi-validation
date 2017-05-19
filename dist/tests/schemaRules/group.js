"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var itsInvalid_1 = require("../itsInvalid");
var agentSchema_1 = require("../helpers/agentSchema");
var describeMemberProp_1 = require("../describeMemberProp");
var factory_1 = require("../factory");
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    factory_1.subGroup(test);
    describeMemberProp_1.default(factory_1.subGroup, test);
    agentSchema_1.default(test);
};
