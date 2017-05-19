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
var VoidWarning = (function (_super) {
    __extends(VoidWarning, _super);
    function VoidWarning(data, path, voidVerbId) {
        var _this = _super.call(this, data, path) || this;
        _this.voidVerbId = voidVerbId;
        return _this;
    }
    return VoidWarning;
}(rulr_1.Warning));
exports.default = VoidWarning;
