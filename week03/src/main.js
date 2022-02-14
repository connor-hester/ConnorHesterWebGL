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
//import * as dat from 'dat.gui'
/*import { Model, SceneState } from './model'
import { Scene } from './scene'
import { SceneOne } from './sceneOne';
import { SceneTwo } from './sceneTwo';

let mModel = new Model();
let sceneOne: SceneOne = new SceneOne(mModel);
let sceneTwo: SceneTwo = new SceneTwo(mModel);*/
var load = function (app) {
    return new Promise(function (resolve) {
        app.loader.add('assets/hello-world.png').load(function () {
            resolve();
        });
    });
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var app, graphics, circles, otherShapes, hours, minutes, morning, tens, ones, i, i, i, i;
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
                graphics = new PIXI.Container();
                circles = new PIXI.Graphics();
                otherShapes = new PIXI.Graphics();
                morning = true;
                hours = updateTime()[0];
                minutes = updateTime()[1];
                if (hours > 12) {
                    morning = false;
                    hours = hours - 12;
                }
                else {
                    morning = true;
                    hours = hours;
                }
                circles.beginFill(0xFFFFFF, 0.75);
                if (minutes >= 10) {
                    tens = Math.floor(minutes / 10);
                    ones = minutes % 10;
                    for (i = 0; i < ones; i++) {
                        if (i < 5) {
                            circles.drawCircle(3 * window.innerWidth / 4 + 40, 3 * window.innerHeight / 4 - 60 * i, 30);
                        }
                        if (i >= 5 && i < 9) {
                            circles.drawCircle(3 * window.innerWidth / 4 + 100, 3 * window.innerHeight / 4 - 60 * (i - 5), 30);
                        }
                    }
                    for (i = 0; i < tens; i++) {
                        if (i < 5) {
                            circles.drawCircle(3 * window.innerWidth / 4 - 210, 3 * window.innerHeight / 4 - 70 * i - 5, 35);
                        }
                        if (i >= 5 && i < 9) {
                            circles.drawCircle(3 * window.innerWidth / 4 - 150, 3 * window.innerHeight / 4 - 70 * (i - 5) - 5, 35);
                        }
                    }
                }
                else {
                    for (i = 0; i < minutes; i++) {
                        if (i < 5) {
                            circles.drawCircle(3 * window.innerWidth / 4 + 90, 3 * window.innerHeight / 4 - 60 * i, 30);
                        }
                        if (i >= 5 && i < 9) {
                            circles.drawCircle(3 * window.innerWidth / 4 + 150, 3 * window.innerHeight / 4 - 60 * (i - 5), 30);
                        }
                    }
                }
                for (i = 0; i < hours; i++) {
                    if (i < 4) {
                        circles.drawCircle(window.innerWidth / 4 - 100, 3 * window.innerHeight / 4 - 100 * i - 10, 50);
                    }
                    if (i >= 4 && i < 8) {
                        circles.drawCircle(window.innerWidth / 4, 3 * window.innerHeight / 4 - 100 * (i - 4) - 10, 50);
                    }
                    if (i >= 8) {
                        circles.drawCircle(window.innerWidth / 4 + 100, 3 * window.innerHeight / 4 - 100 * (i - 8) - 10, 50);
                    }
                }
                otherShapes.beginFill(0xFFFFFF);
                otherShapes.drawRect(window.innerWidth / 16 - 50, window.innerHeight / 8 - 50, 7 * window.innerWidth / 8 + 100, 3 * window.innerHeight / 4 + 100);
                otherShapes.endFill();
                if ((hours > 11 && morning === false) || (hours <= 4 && morning === true)) { //11pm-4am
                    otherShapes.beginFill(0x102223);
                }
                else if (((hours > 4 && hours <= 6 && morning === true)) || ((morning === false && hours > 8 && hours <= 11))) { //4-6am and 8-11pm
                    otherShapes.beginFill(0x1E3F40);
                }
                else if (hours > 6 && hours <= 8 && morning === true) { //6-8am
                    otherShapes.beginFill(0x356D6F);
                }
                else if ((hours > 8 && hours <= 10 && morning === true) || (hours > 2 && hours <= 4 && morning === false)) { //8-10am and 2-4 pm
                    otherShapes.beginFill(0x5DC1C5);
                }
                else if ((hours > 10 && morning === true) || (hours <= 2 && morning === false)) { //10am-2pm
                    otherShapes.beginFill(0x77F7FC);
                }
                else if (hours > 6 && hours <= 8 && morning === false) { //6-8 PM
                    otherShapes.beginFill(0x2B5759);
                }
                otherShapes.drawRect(window.innerWidth / 16, window.innerHeight / 8, 7 * window.innerWidth / 8, 3 * window.innerHeight / 4);
                otherShapes.endFill();
                otherShapes.beginFill(0xFFFFFF);
                otherShapes.drawRect(window.innerWidth / 2 - 50, 3 * window.innerHeight / 8, 20, 20);
                otherShapes.drawRect(window.innerWidth / 2 - 50, 5 * window.innerHeight / 8, 20, 20);
                otherShapes.endFill();
                graphics.addChild(otherShapes);
                graphics.addChild(circles);
                app.stage.addChild(graphics);
                // app.stage.addChild(sprite);
                // let cont = new PIXI.Container();
                //app.stage.addChild(sceneOne.container);
                //app.stage.addChild(sceneTwo.container);
                // Handle window resizing
                window.addEventListener('resize', function (_e) {
                    app.renderer.resize(window.innerWidth, window.innerHeight);
                    // sprite.x = window.innerWidth / 2 - sprite.width / 2;
                    // sprite.y = window.innerHeight / 2 - sprite.height / 2;
                });
                document.body.appendChild(app.view);
                /*const gui = new dat.GUI()
                gui.add(mModel.getInstance().buttonData, 'width', 0, 200)
                gui.add(mModel.getInstance().buttonData, 'height', 0, 200)
                gui.addColor(mModel.getInstance().buttonData, 'firstColor')
                gui.addColor(mModel.getInstance().buttonData, 'secondColor')
            */
                app.ticker.speed = 2;
                app.ticker.add(updateTime);
                return [2 /*return*/];
        }
    });
}); };
// Cannot be an arrow function. Arrow functions cannot have a 'this' parameter.
function updateTime() {
    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    return ([hrs, mins]);
}
/*function update(delta: number) {

    switch (mModel.sceneState) {
        case SceneState.first:
            sceneOne.container.visible = true;
            sceneTwo.container.visible = false;
            sceneOne.update();
            break;
        
        case SceneState.second:
            sceneOne.container.visible = false;
            sceneTwo.container.visible = true;
            sceneTwo.update();
            break;
    
        default:
            break;
    }
};*/
main();
