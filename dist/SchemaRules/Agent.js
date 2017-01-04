"use strict";
var rulr_1 = require("rulr");
var AgentSchema_1 = require("../Helpers/AgentSchema");
var GetUsedIfis_1 = require("../Helpers/GetUsedIfis");
var Errors_1 = require("../Errors");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema(AgentSchema_1.default),
    function (data, path) {
        var usedIfis = GetUsedIfis_1.default(data);
        if (usedIfis.length > 1)
            return [Errors_1.ifiCountError(usedIfis, data)(path)];
        if (usedIfis.length === 0)
            return [Errors_1.noIfiError(data)(path)];
        return [];
    },
]);
