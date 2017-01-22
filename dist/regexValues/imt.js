"use strict";
var rulr_1 = require("rulr");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.checkRegex(/^((application|audio|example|image|message|model|multipart|text|video)(\/[-\w\+\.]+)(;\s*[-\w]+\=[-\w]+)*;?)$/, rulr_1.checkTypeWarning('Internet Media Type (IMT)'));
