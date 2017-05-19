"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var TypeWarning_1 = require("../warnings/TypeWarning");
exports.default = rulr_1.checkRegex(/^\{?[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[8,9,a,b][A-Z0-9]{3}-[A-Z0-9]{12}\}?$/i, TypeWarning_1.createTypeWarning('Universal Unique Identifier (UUID)'));
