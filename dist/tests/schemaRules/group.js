"use strict";
require("mocha");
var agentSchema_1 = require("../helpers/agentSchema");
var describeMemberProp_1 = require("../describeMemberProp");
var factory_1 = require("../factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    factory_1.subGroup(test);
    describeMemberProp_1.default(factory_1.subGroup, test);
    agentSchema_1.default(test);
};
