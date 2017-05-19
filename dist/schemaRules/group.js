"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var agentSchema_1 = require("../helpers/agentSchema");
var getUsedIfis_1 = require("../helpers/getUsedIfis");
var factory_1 = require("../factory");
var IfiCountWarning_1 = require("../warnings/IfiCountWarning");
var NoMembersWarning_1 = require("../warnings/NoMembersWarning");
exports.default = rulr_1.composeRules([
    rulr_1.restrictToSchema(Object.assign({}, agentSchema_1.default, {
        member: rulr_1.optional(rulr_1.restrictToCollection(function () { return factory_1.actor; }))
    })),
    function (data, path) {
        var usedIfis = getUsedIfis_1.default(data);
        var usedMember = (data.member != null &&
            Array.isArray(data.member) &&
            data.member.length > 0);
        if (usedIfis.length > 1)
            return [new IfiCountWarning_1.default(data, path, usedIfis)];
        var hasNoMembers = usedIfis.length === 0 && !usedMember;
        return hasNoMembers ? [new NoMembersWarning_1.default(data, path)] : [];
    },
]);
