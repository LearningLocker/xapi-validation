"use strict";
var rulr_1 = require("rulr");
var agentSchema_1 = require("../helpers/agentSchema");
var getUsedIfis_1 = require("../helpers/getUsedIfis");
var errors_1 = require("../errors");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema(agentSchema_1.default),
    function (data, path) {
        var usedIfis = getUsedIfis_1.default(data);
        if (usedIfis.length > 1)
            return [errors_1.ifiCountError(usedIfis)(path)];
        if (usedIfis.length === 0)
            return [errors_1.noIfiError()(path)];
        return [];
    },
]);
