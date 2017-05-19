"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var TypeWarning_1 = require("../warnings/TypeWarning");
exports.default = rulr_1.checkRegex(/^mailto:[A-Z0-9\.\`\'_%+-]+@[A-Z0-9.-]+\.[A-Z]{1,63}$/i, TypeWarning_1.createTypeWarning('Mailto'));
