"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectTypeFactory_1 = require("../helpers/objectTypeFactory");
var factory_1 = require("../factory");
exports.default = function (additionalTypes) {
    return function (test) {
        return objectTypeFactory_1.default(Object.assign({}, {
            Agent: factory_1.agent,
            Group: factory_1.group,
            Activity: factory_1.activity,
            StatementRef: factory_1.statementRef,
        }, additionalTypes), 'Activity', test, { id: 'http://www.example.org/activity' });
    };
};
