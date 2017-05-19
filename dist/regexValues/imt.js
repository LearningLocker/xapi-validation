"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var TypeWarning_1 = require("../warnings/TypeWarning");
exports.default = rulr_1.checkRegex(/^((application|audio|example|image|message|model|multipart|text|video)(\/[-\w\+\.]+)(;\s*[-\w]+\=[-\w]+)*;?)$/, TypeWarning_1.createTypeWarning('Internet Media Type (IMT)'));
