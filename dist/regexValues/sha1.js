"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var TypeWarning_1 = require("../warnings/TypeWarning");
exports.default = rulr_1.checkRegex(/^\b[0-9a-f]{5,40}$/i, TypeWarning_1.createTypeWarning('Sha1'));
