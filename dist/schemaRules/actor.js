"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectTypeFactory_1 = require("../helpers/objectTypeFactory");
var factory_1 = require("../factory");
exports.default = objectTypeFactory_1.default(function () { return ({
    Agent: factory_1.agent,
    Group: factory_1.group,
}); }, 'Agent');
