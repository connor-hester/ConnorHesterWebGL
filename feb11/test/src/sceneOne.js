"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SceneOne = void 0;
var model_1 = require("./model");
var scene_1 = require("./scene");
var SceneOne = /** @class */ (function (_super) {
    __extends(SceneOne, _super);
    function SceneOne(model) {
        var _this = _super.call(this, model) || this;
        _this.button.on('pointerdown', function () {
            _this.model.sceneState = model_1.SceneState.second;
            console.log(_this.model.sceneState);
        });
        return _this;
    }
    SceneOne.prototype.update = function () {
        _super.prototype.update.call(this);
        var tempColor = this.model.buttonData.firstColor.slice(1);
        tempColor = '0x' + tempColor;
        this.button.clear();
        this.button.beginFill(tempColor);
        this.button.drawRoundedRect(100, 100, this.model.buttonData.width, this.model.buttonData.height, 15);
    };
    return SceneOne;
}(scene_1.Scene));
exports.SceneOne = SceneOne;
