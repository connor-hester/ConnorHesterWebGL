"use strict";
exports.__esModule = true;
exports.Scene = void 0;
var pixi_js_1 = require("pixi.js");
var Scene = /** @class */ (function () {
    function Scene(model) {
        var _this = this;
        this.isOver = false;
        this.isPressed = false;
        this.model = model;
        this.container = new pixi_js_1.Container();
        this.container.width = window.innerWidth;
        this.container.height = window.innerHeight;
        this.button = new pixi_js_1.Graphics();
        this.button.interactive = true;
        this.button.buttonMode = true;
        this.button.on('pointerover', function () { _this.isOver = true; });
        this.button.on('pointerout', function () { _this.isOver = false; });
        //this.button.on('pointerdown', () => { this.isPressed = true })
        this.button.on('pointerup', function () { _this.isPressed = false; });
        this.container.addChild(this.button);
    }
    Scene.prototype.update = function () { };
    return Scene;
}());
exports.Scene = Scene;
