"use strict";
var ObjectTypeFactory_1 = require("../Helpers/ObjectTypeFactory");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ObjectTypeFactory_1.default(function () { return ({
    Agent: Factory_1.agent,
    Group: Factory_1.group,
}); }, 'Agent');
