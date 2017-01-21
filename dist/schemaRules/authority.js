"use strict";
var rulr_1 = require("rulr");
var factory_1 = require("../factory");
var errors_1 = require("../errors");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.composeRules([
    factory_1.actor,
    function (data, path) {
        if (data == null || data.constructor !== Object)
            return [];
        if (data.objectType === 'Group') {
            var members = Array.isArray(data.member) ? data.member.length : 0;
            if (members !== 2)
                return [errors_1.membersTypeError()(path)];
            var invalidMembers = data.member.filter(function (member) {
                return member.objectType !== 'Agent' && member.objectType !== undefined;
            });
            if (invalidMembers.length > 0)
                return [errors_1.membersLengthError()(path)];
        }
        return [];
    },
]);
