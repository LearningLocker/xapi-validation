"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var agentSchema_1 = require("../helpers/agentSchema");
var getUsedIfis_1 = require("../helpers/getUsedIfis");
var IfiCountWarning_1 = require("../warnings/IfiCountWarning");
var NoIfiWarning_1 = require("../warnings/NoIfiWarning");
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema(agentSchema_1.default),
    function (data, path) {
        var usedIfis = getUsedIfis_1.default(data);
        if (usedIfis.length > 1)
            return [new IfiCountWarning_1.default(data, path, usedIfis)];
        if (usedIfis.length === 0)
            return [new NoIfiWarning_1.default(data, path)];
        return [];
    },
]);
