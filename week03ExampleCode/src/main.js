"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var PIXI = require("pixi.js");
var dat = require("dat.gui");
var model_1 = require("./model");
var sceneOne_1 = require("./sceneOne");
var sceneTwo_1 = require("./sceneTwo");
var mModel = new model_1.Model();
var sceneOne = new sceneOne_1.SceneOne(mModel);
var sceneTwo = new sceneTwo_1.SceneTwo(mModel);
var graphics;
var load = function (app) {
    return new Promise(function (resolve) {
        app.loader.add('assets/hello-world.png').load(function () {
            resolve();
        });
    });
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var app, gui;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                app = new PIXI.Application({ antialias: true, backgroundColor: 0x111111 });
                // Display application properly
                document.body.style.margin = '0';
                app.renderer.view.style.position = 'absolute';
                app.renderer.view.style.display = 'block';
                // View size = windows
                app.renderer.resize(window.innerWidth, window.innerHeight);
                // Load assets
                return [4 /*yield*/, load(app)];
            case 1:
                // Load assets
                _a.sent();
                graphics = new PIXI.Graphics();
                app.stage.addChild(graphics);
                // app.stage.addChild(sprite);
                // let cont = new PIXI.Container();
                app.stage.addChild(sceneOne.container);
                app.stage.addChild(sceneTwo.container);
                // Handle window resizing
                window.addEventListener('resize', function (_e) {
                    app.renderer.resize(window.innerWidth, window.innerHeight);
                    // sprite.x = window.innerWidth / 2 - sprite.width / 2;
                    // sprite.y = window.innerHeight / 2 - sprite.height / 2;
                });
                document.body.appendChild(app.view);
                gui = new dat.GUI();
                gui.add(mModel.getInstance().buttonData, 'width', 0, 500);
                gui.add(mModel.getInstance().buttonData, 'height', 0, 500);
                gui.addColor(mModel.getInstance().buttonData, 'firstColor');
                gui.addColor(mModel.getInstance().buttonData, 'secondColor');
                app.ticker.add(update);
                return [2 /*return*/];
        }
    });
}); };
// Cannot be an arrow function. Arrow functions cannot have a 'this' parameter.
function update(delta) {
    switch (mModel.sceneState) {
        case model_1.SceneState.first:
            sceneOne.container.visible = true;
            sceneTwo.container.visible = false;
            sceneOne.update();
            break;
        case model_1.SceneState.second:
            sceneOne.container.visible = false;
            sceneTwo.container.visible = true;
            sceneTwo.update();
            break;
        default:
            break;
    }
}
;
main();
