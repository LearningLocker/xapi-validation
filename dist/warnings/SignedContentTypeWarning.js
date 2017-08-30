"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var SignedContentTypeWarning = (function (_super) {
    __extends(SignedContentTypeWarning, _super);
    function SignedContentTypeWarning(data, path, contentType) {
        var _this = _super.call(this, data, path) || this;
        _this.contentType = contentType;
        return _this;
    }
    return SignedContentTypeWarning;
}(rulr_1.Warning));
exports.default = SignedContentTypeWarning;
