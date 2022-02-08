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
var load = function (app) {
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var app, background, squares, circles, zigzagGraphics, graphicsContainer, topLayer, i, j, i, j, i, x, y, j, z, a, i, x, y, j, z, a, i, x, y, j, z, a, myFilter, allFilter, blurFilter, i, i;
    return __generator(this, function (_a) {
        app = new PIXI.Application();
        // Display application properly
        document.body.style.margin = '0';
        app.renderer.view.style.position = 'absolute';
        app.renderer.view.style.display = 'block';
        // View size = windows
        app.renderer.resize(window.innerWidth, window.innerHeight);
        // Load assets
        //await load(app);
        /*let sprite = new PIXI.Sprite(
            app.loader.resources['assets/hello-world.png'].texture
        );
        sprite.x = window.innerWidth / 2 - sprite.width / 2;
        sprite.y = window.innerHeight / 2 - sprite.height / 2;
        app.stage.addChild(sprite);*/
        // Handle window resizing
        window.addEventListener('resize', function (_e) {
            app.renderer.resize(window.innerWidth, window.innerHeight);
        });
        document.body.appendChild(app.view);
        background = new PIXI.Graphics();
        squares = new PIXI.Graphics();
        circles = new PIXI.Graphics();
        zigzagGraphics = new PIXI.Graphics();
        graphicsContainer = new PIXI.Container();
        topLayer = new PIXI.Graphics();
        background.beginFill(0x000000); //background
        background.drawRect(0, 0, 3 * window.innerWidth, 3 * window.innerHeight);
        background.endFill();
        for (i = 0; i < 46; i++) { //white squares
            for (j = 0; j < 28; j++) {
                background.beginFill(0xFFFFFF);
                background.drawRect(65 * i, 65 * j, 60, 60);
                background.endFill();
            }
        }
        for (i = 0; i < 46; i++) { //black rectangles
            for (j = 0; j < 28; j++) {
                background.beginFill(0x000000);
                background.drawRect(60 + 65 * i, 65 * j, 5, 50);
                background.endFill();
            }
        }
        background.beginFill(0x969696, 0.05); //white cover layer
        background.drawRect(0, 0, 3 * window.innerWidth, 3 * window.innerHeight);
        background.endFill();
        background.angle = 45;
        background.x = window.innerWidth / 2;
        background.y = -760;
        graphicsContainer.addChild(background);
        for (i = 0; i < 8; i++) {
            x = window.innerWidth / 8;
            y = window.innerHeight / 6;
            for (j = 0; j < 6; j++) {
                if (((j % 2 === 0 && i % 2 === 0) || ((j + 1) % 2 === 0 && (i + 1) % 2 === 0))) {
                    z = (Math.random() * 80) + 30;
                    a = (Math.random() * 160) - 80;
                    squares.beginFill(0x82100F); //square shadow
                    squares.drawRect(i * x + a, j * y, z, z);
                    squares.endFill();
                    squares.beginFill(0xF54E2B); //square
                    squares.drawRect(i * x + 5 + a, j * y - 5, z, z);
                    squares.endFill();
                }
            }
        }
        for (i = 0; i <= 8; i++) {
            x = window.innerWidth / 10;
            y = window.innerHeight / 8;
            for (j = 0; j <= 12; j++) {
                if ((i % 2 == 0 && j % 2 == 0 && j !== i)) {
                    z = (Math.random() * 20) + 20;
                    a = (Math.random() * 160) + 80;
                    circles.lineStyle(z, 0x114B66, 1);
                    circles.beginFill(0x000000, 0);
                    circles.drawCircle(i * x + 50 + a, j * y + 50, z);
                    circles.endFill();
                    circles.lineStyle(z, 0x59D5D8, 1);
                    circles.beginFill(0x000000, 0);
                    circles.drawCircle(i * x + 55 + a, j * y + 45, z);
                    circles.endFill();
                }
            }
        }
        //circles.y=250;
        circles.x = -200;
        //circles.angle=-45;
        for (i = 0; i <= 12; i++) {
            x = window.innerWidth / 10;
            y = window.innerHeight / 6;
            for (j = 0; j <= 12; j++) {
                if (j % 4 === 0 && i % 4 === 0) {
                    z = (Math.random() * 160) - 80;
                    a = (Math.random() * 160) - 80;
                    zigzagGraphics.beginFill(0x9E8800); //yellow zigzag shadow
                    zigzagGraphics.drawRect(x * i - 10 + 3 * z, y * j + 10 + 2 * a, 40, 100);
                    zigzagGraphics.drawRect(x * i - 10 + 3 * z, y * j + 10 + 2 * a, 100, 40);
                    zigzagGraphics.drawRect(x * i + 50 + 3 * z, y * j - 50 + 2 * a, 40, 100);
                    zigzagGraphics.drawRect(x * i + 50 + 3 * z, y * j - 50 + 2 * a, 100, 40);
                    zigzagGraphics.drawRect(x * i + 110 + 3 * z, y * j - 110 + 2 * a, 40, 100);
                    zigzagGraphics.endFill();
                    zigzagGraphics.beginFill(0xDCD917); //yellow zigzag
                    zigzagGraphics.drawRect(x * i + 3 * z, y * j + 2 * a, 40, 100);
                    zigzagGraphics.drawRect(x * i + 3 * z, y * j + 2 * a, 100, 40);
                    zigzagGraphics.drawRect(x * i + 3 * z + 60, y * j + 2 * a - 60, 40, 100);
                    zigzagGraphics.drawRect(x * i + 3 * z + 60, y * j + 2 * a - 60, 100, 40);
                    zigzagGraphics.drawRect(x * i + 3 * z + 120, y * j + 2 * a - 129, 40, 100);
                    zigzagGraphics.endFill();
                }
            }
            //zigzagGraphics.angle=15;
            zigzagGraphics.scale.x = 0.6;
            zigzagGraphics.scale.y = 0.6;
        }
        zigzagGraphics.x = 60;
        zigzagGraphics.y = -160;
        graphicsContainer.addChild(squares);
        graphicsContainer.addChild(zigzagGraphics);
        graphicsContainer.addChild(circles);
        myFilter = new PIXI.filters.BlurFilter();
        myFilter.blur = 4;
        myFilter.quality = 6;
        background.filters = [myFilter];
        allFilter = new PIXI.filters.ColorMatrixFilter();
        graphicsContainer.filters = [allFilter];
        allFilter.saturate(0.5, true);
        blurFilter = new PIXI.filters.BlurFilter();
        blurFilter.blur = 1;
        graphicsContainer.filters = [blurFilter];
        app.stage.addChild(graphicsContainer);
        for (i = 0; i < 41; i++) {
            topLayer.beginFill(0x000000);
            topLayer.drawRect(-30 + 87 * i, 0, 5, window.innerHeight);
            topLayer.endFill();
        }
        for (i = 0; i < 30; i++) {
            topLayer.beginFill(0x000000);
            topLayer.drawRect(0, -50 + 87 * i, window.innerWidth, 5);
            topLayer.endFill();
        }
        app.stage.addChild(topLayer);
        return [2 /*return*/];
    });
}); };
// Cannot be an arrow function. Arrow functions cannot have a 'this' parameter.
/*function update(this: any, delta: number) {
  if (this.sprite.x <= 0 || this.sprite.x >= window.innerWidth - this.sprite.width) {
      this.velocity.x = -this.velocity.x;
  }
  if (this.sprite.y <= 0 || this.sprite.y >= window.innerHeight - this.sprite.height) {
      this.velocity.y = -this.velocity.y;
  }
  this.sprite.x += this.velocity.x * delta;
  this.sprite.y += this.velocity.y;
};*/
main();
