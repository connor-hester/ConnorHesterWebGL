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
exports.SceneTwo = void 0;
var model_1 = require("./model");
var scene_1 = require("./scene");
var SceneTwo = /** @class */ (function (_super) {
    __extends(SceneTwo, _super);
    function SceneTwo(model) {
        var _this = _super.call(this, model) || this;
        _this.button.on('pointerdown', function () {
            model.getInstance().sceneState = model_1.SceneState.first;
            console.log(model.getInstance().sceneState);
        });
        return _this;
    }
    SceneTwo.prototype.update = function () {
        _super.prototype.update.call(this);
        var tempColor = this.model.buttonData.secondColor.slice(1);
        tempColor = '0x' + tempColor;
        this.button.clear();
        this.button.beginFill(tempColor);
        this.button.drawRoundedRect(100, 400, this.model.buttonData.width, this.model.buttonData.height, 15);
    };
    return SceneTwo;
}(scene_1.Scene));
exports.SceneTwo = SceneTwo;
