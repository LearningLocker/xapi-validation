"use strict";
var ObjectTypeFactory_1 = require("../Helpers/ObjectTypeFactory");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    return ObjectTypeFactory_1.default({
        Agent: Factory_1.agent,
        Group: Factory_1.group,
        Activity: Factory_1.activity,
        StatementRef: Factory_1.statementRef,
    }, 'Activity', test);
};
