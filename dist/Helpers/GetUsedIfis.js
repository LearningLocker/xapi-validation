"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (data) {
    var ifis = ['mbox', 'mbox_sha1sum', 'openid', 'account'];
    var keys = Object.keys(data);
    return ifis.filter(function (ifi) { return keys.includes(ifi); });
};
