"use strict";
var objectTypeFactory_1 = require("../helpers/objectTypeFactory");
var factory_1 = require("../factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = objectTypeFactory_1.default(function () { return ({
    Agent: factory_1.agent,
    Group: factory_1.group,
}); }, 'Agent');
