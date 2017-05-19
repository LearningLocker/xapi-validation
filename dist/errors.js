"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
exports.subStatementError = function () {
    return function (path) {
        return "The SubStatement should not contain a SubStatement in " + rulr_1.pathString(path) + ". Please remove this nested SubStatement to remove this error.";
    };
};
exports.contextPropError = function () {
    return function (path) {
        return "The platform and revision properties must only be used if `object.objectType` is \"Activity\" in " + rulr_1.pathString(path) + ". Please remove these properties or ensure the object is an Activity to remove this error.";
    };
};
exports.voidError = function (voidVerbId) {
    return function (path) {
        return "`" + voidVerbId + "` must only be used if `object.objectType` is \"StatementRef\" in " + rulr_1.pathString(path) + ". Please use a different verb identifier or use a StatementRef in the object to remove this error.";
    };
};
exports.membersTypeError = function () {
    return function (path) {
        return "An authority group can only contain agents as members in `" + rulr_1.pathString(path) + "`. Please ensure that all members are agents to remove this error.";
    };
};
exports.membersLengthError = function () {
    return function (path) {
        return "An authority group can only contain agents as members in `" + rulr_1.pathString(path) + "`. Please ensure that all members are agents to remove this error.";
    };
};
exports.noMembersError = function () {
    return function (path) {
        return "An anonymous group must have at least one member in " + rulr_1.pathString(path) + ". Please add a member to remove this error.";
    };
};
exports.noIfiError = function () {
    return function (path) {
        return "An Agent must be identified by one of the four types of IFIs in " + rulr_1.pathString(path) + ". Please use one of the four types of IFIs (mbox, mbox_sha1sum, openid, or account) to remove this error.";
    };
};
exports.invalidComponentsError = function (invalidComponents) {
    return function (path) {
        return "Didn't expect unsupported components (" + invalidComponents.join(', ') + ") to be set in " + rulr_1.pathString(path) + ". Please remove the unsupported components to remove this error.";
    };
};
exports.ifiCountError = function (usedIfis) {
    return function (path) {
        return "There are too many inverse functional identifiers (IFI) in " + rulr_1.pathString(path) + ". Please select one IFI from the `" + usedIfis.join(', ') + "` and remove the other IFIs to remove this error.";
    };
};
