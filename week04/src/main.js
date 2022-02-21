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
var gsap_1 = require("gsap");
var pixi_js_1 = require("pixi.js");
var tl = gsap_1.gsap.timeline({ delay: 27 });
var master = gsap_1.gsap.timeline({ defaults: { delay: -1, smoothChildTiming: true } });
var arrowContainer1 = new pixi_js_1.Container();
var arrowContainer2 = new pixi_js_1.Container();
var arrowContainer3 = new pixi_js_1.Container();
var arrowContainer4 = new pixi_js_1.Container();
var arrowContainer5 = new pixi_js_1.Container();
var w = window.innerWidth;
var h = window.innerHeight;
var load = function (app) {
    return new Promise(function (resolve) {
        app.loader.add('world1', 'assets/hello-world.png').load(function () {
            resolve();
        });
    });
};
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var app, gui, timelineFolder, tlCallbacks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                app = new PIXI.Application({ antialias: true, backgroundColor: 0x30C2D5 });
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
                app.stage.addChild(arrowContainer1);
                app.stage.addChild(arrowContainer2);
                app.stage.addChild(arrowContainer3);
                app.stage.addChild(arrowContainer4);
                app.stage.addChild(arrowContainer5);
                app.stage.interactive = true;
                app.stage.hitArea = new PIXI.Polygon([
                    0, 0,
                    window.innerWidth, 0,
                    window.innerWidth, window.innerHeight,
                    0, window.innerHeight
                ]);
                // Handle window resizing
                window.addEventListener('resize', function (_e) {
                    app.renderer.resize(window.innerWidth, window.innerHeight);
                    app.stage.hitArea = new PIXI.Polygon([
                        0, 0,
                        window.innerWidth, 0,
                        window.innerWidth, window.innerHeight,
                        0, window.innerHeight
                    ]);
                });
                document.body.appendChild(app.view);
                gui = new dat.GUI();
                timelineFolder = gui.addFolder("timeline");
                timelineFolder.open();
                tlCallbacks = {
                    pause: function () { return master.pause(); },
                    play: function () { return master.play(); },
                    reverse: function () { return master.reverse(); },
                    progress: 0
                };
                timelineFolder.add(tlCallbacks, "pause");
                timelineFolder.add(tlCallbacks, "play");
                timelineFolder.add(tlCallbacks, "reverse");
                timelineFolder.add(tlCallbacks, "progress", 0.0, 1, 0.01).onChange(function (value) {
                    master.play();
                    master.progress(value);
                    master.pause();
                });
                tl.add(fifth());
                master.add(first());
                master.add(second());
                master.add(third());
                master.add(fourth());
                //master.timescale(2);
                master.play();
                tl.play();
                return [2 /*return*/];
        }
    });
}); };
function fifth() {
    var tl = gsap_1.gsap.timeline();
    for (var j = 0; j < 6; j++) {
        for (var i = 0; i < 40; i++) {
            var arrow = new PIXI.Graphics();
            arrow.beginFill(0x9B0F29);
            if (i % 2 == 0) {
                arrow.drawRect(50 + 40 * i, 0, 30, 1);
            }
            else if (i % 2 != 0) {
                arrow.drawRect(40 * i, 0, 30, 1);
                arrow.setTransform(w, h, 1, 1, Math.PI, 0, 0, 0, 0);
            }
            arrow.endFill();
            arrowContainer5.addChild(arrow);
        }
    }
    for (var i = 0; i < 240; i++) {
        if (i == 0) {
            tl.fromTo(arrowContainer5.getChildAt(i), { height: arrowContainer5.getChildAt(i).scale.y }, { height: h, duration: 1.2, ease: "power3.inOut", repeat: 1, yoyo: true }, "<");
            //tl.fromTo(arrowContainer4.getChildAt(80+i),{height:arrowContainer4.getChildAt(80+i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%");
        }
        else if (i % 2 == 0) {
            tl.fromTo(arrowContainer5.getChildAt(i), { height: arrowContainer5.getChildAt(i).scale.y }, { height: h, duration: 1.2, ease: "power3.inOut", repeat: 1, yoyo: true }, "<2%");
            //tl.fromTo(arrowContainer4.getChildAt(80+i),{height:arrowContainer4.getChildAt(80+i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%");
        }
        else if (i % 2 != 0) {
            tl.fromTo(arrowContainer5.getChildAt(i), { height: arrowContainer5.getChildAt(i).scale.y }, { height: h, duration: 1.2, ease: "power3.inOut", repeat: 1, yoyo: true }, "<2%");
            //tl.fromTo(arrowContainer4.getChildAt(80+i),{height:arrowContainer4.getChildAt(80+i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%")
        }
    }
    return tl;
}
function fourth() {
    var tl = gsap_1.gsap.timeline();
    for (var j = 0; j < 6; j++) {
        for (var i = 0; i < 40; i++) {
            var arrow = new PIXI.Graphics();
            arrow.beginFill(0xD53058);
            if (i % 2 == 0) {
                arrow.drawRect(50 + 40 * i, 0, 30, 1);
            }
            else if (i % 2 != 0) {
                arrow.drawRect(40 * i, 0, 30, 1);
                arrow.setTransform(w, h, 1, 1, Math.PI, 0, 0, 0, 0);
            }
            arrow.endFill();
            arrowContainer4.addChild(arrow);
        }
    }
    for (var i = 0; i < 240; i++) {
        if (i == 0) {
            tl.fromTo(arrowContainer4.getChildAt(i), { height: arrowContainer4.getChildAt(i).scale.y }, { height: h, duration: 1.2, ease: "power3.inOut", repeat: 1, yoyo: true }, "<");
            //tl.fromTo(arrowContainer4.getChildAt(80+i),{height:arrowContainer4.getChildAt(80+i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%");
        }
        else if (i % 2 == 0) {
            tl.fromTo(arrowContainer4.getChildAt(i), { height: arrowContainer4.getChildAt(i).scale.y }, { height: h, duration: 1.2, ease: "power3.inOut", repeat: 1, yoyo: true }, "<2%");
            //tl.fromTo(arrowContainer4.getChildAt(80+i),{height:arrowContainer4.getChildAt(80+i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%");
        }
        else if (i % 2 != 0) {
            tl.fromTo(arrowContainer4.getChildAt(i), { height: arrowContainer4.getChildAt(i).scale.y }, { height: h, duration: 1.2, ease: "power3.inOut", repeat: 1, yoyo: true }, "<2%");
            //tl.fromTo(arrowContainer4.getChildAt(80+i),{height:arrowContainer4.getChildAt(80+i).scale.y},{height:h, duration:1.2,ease:"power3.inOut",repeat:1, yoyo:true},"<2%")
        }
    }
    return tl;
}
function third() {
    var tl = gsap_1.gsap.timeline();
    for (var i = 0; i < 40; i++) {
        var arrow = new PIXI.Graphics();
        arrow.beginFill(0xD53058);
        if (i % 2 == 0) {
            arrow.drawRect(50 + 40 * i, 0, 30, 1);
        }
        else if (i % 2 != 0) {
            arrow.drawRect(40 * i, 0, 30, 1);
            //arrow.angle=180;
            arrow.setTransform(w, h, 1, 1, Math.PI, 0, 0, 0, 0);
        }
        arrow.endFill();
        arrowContainer3.addChild(arrow);
    }
    for (var j = 0; j < 4; j++) {
        var pct = 4 - j;
        var percent = pct.toString();
        var percentString = void 0;
        if (j < 2) {
            percentString = "<2%";
        }
        else {
            percentString = "<" + percent + "%";
        }
        for (var i = 0; i < 40; i++) {
            if (i == 0) {
                if (j == 1) {
                    arrowContainer3.getChildAt(i).alpha = 0;
                }
                else {
                    arrowContainer3.getChildAt(i).alpha = 0;
                }
                tl.fromTo(arrowContainer3.getChildAt(i), { height: arrowContainer3.getChildAt(i).scale.y }, { height: h, duration: 1 - j / 10, ease: "power3.inOut", repeat: 1, yoyo: true });
            }
            else if (i % 2 == 0 && (j == 0 || j == 2 || j == 3)) {
                tl.fromTo(arrowContainer3.getChildAt(i), { height: arrowContainer3.getChildAt(i).scale.y }, { height: h, duration: 1 - j / 10, ease: "power3.inOut", repeat: 1, yoyo: true }, percentString);
            }
            else if (i % 2 != 0 && (j == 1 || j == 2 || j == 3)) {
                tl.fromTo(arrowContainer3.getChildAt(i), { height: arrowContainer3.getChildAt(i).scale.y }, { height: h, duration: 1 - j / 10, ease: "power3.inOut", repeat: 1, yoyo: true }, percentString);
            }
        }
    }
    return tl;
}
function second() {
    var tl = gsap_1.gsap.timeline();
    for (var i = 0; i < 20; i++) {
        var arrow = new PIXI.Graphics();
        arrow.beginFill(0xD53058);
        if (i % 2 == 0) {
            arrow.drawRect(0, 40 * i, 1, 30);
        }
        else if (i % 2 != 0) {
            arrow.drawRect(0, 50 + h - 40 * i, 1, 30);
            //arrow.angle=180;
            arrow.setTransform(w, h, 1, 1, Math.PI, 0, 0, 0, 0);
        }
        arrow.endFill();
        arrowContainer2.addChild(arrow);
    }
    for (var j = 0; j < 3; j++) {
        var pct = 6 - 2 * j;
        var percent = pct.toString();
        var percentString = "<" + percent + "%";
        for (var i = 0; i < 20; i++) {
            if (i == 0) {
                tl.fromTo(arrowContainer2.getChildAt(i), { width: arrowContainer2.getChildAt(i).scale.x }, { width: w, duration: 1 - j / 8, ease: "power3.inOut", repeat: 1, yoyo: true });
            }
            else if (i % 2 == 0) {
                tl.fromTo(arrowContainer2.getChildAt(i), { width: arrowContainer2.getChildAt(i).scale.x }, { width: w, duration: 1 - j / 8, ease: "power3.inOut", repeat: 1, yoyo: true }, percentString);
            }
            else {
                tl.fromTo(arrowContainer2.getChildAt(i), { width: arrowContainer2.getChildAt(i).scale.x }, { width: w, duration: 1 - j / 8, ease: "power3.inOut", repeat: 1, yoyo: true }, percentString);
            }
        }
    }
    return tl;
}
function first() {
    var tl = gsap_1.gsap.timeline();
    for (var i = 0; i < 9; i++) {
        var arrow = new PIXI.Graphics();
        arrow.beginFill(0xD53058);
        arrow.drawRect(0, h / 2, 1, 30);
        arrow.endFill();
        arrowContainer1.addChild(arrow);
    }
    tl.fromTo(arrowContainer1.getChildAt(0), { width: arrowContainer1.getChildAt(0).scale.x }, { width: w, duration: 1, ease: "power3.out" });
    tl.to(arrowContainer1.getChildAt(0), { width: 0, duration: 1, ease: "power3.in" });
    arrowContainer1.getChildAt(1).setTransform(w, h, 1, 1, Math.PI, 0, 0, 0, 0);
    tl.fromTo(arrowContainer1.getChildAt(1), { width: arrowContainer1.getChildAt(1).scale.x }, { width: w, duration: 1, ease: "power3.out" });
    tl.to(arrowContainer1.getChildAt(1), { width: 0, duration: 1, ease: "power3.in" });
    arrowContainer1.getChildAt(2).setTransform(0, 20, 1, 1, 0, 0, 0, 0, 0);
    tl.fromTo(arrowContainer1.getChildAt(2), { width: arrowContainer1.getChildAt(2).scale.x }, { width: w, duration: 1, ease: "power3.out" }, "<-1");
    tl.to(arrowContainer1.getChildAt(2), { width: 0, duration: 1, ease: "power3.in" }, ">");
    arrowContainer1.getChildAt(3).setTransform(w, h - 100, 1, 1, Math.PI, 0, 0, 0, 0);
    tl.fromTo(arrowContainer1.getChildAt(3), { width: arrowContainer1.getChildAt(3).scale.x }, { width: w, duration: 1, ease: "power3.out" });
    tl.to(arrowContainer1.getChildAt(3), { width: 0, duration: 1, ease: "power3.in" });
    arrowContainer1.getChildAt(4).setTransform(0, -70, 1, 1, 0, 0, 0, 0, 0);
    tl.fromTo(arrowContainer1.getChildAt(4), { width: arrowContainer1.getChildAt(4).scale.x }, { width: w, duration: 1, ease: "power3.out" }, "<-1");
    tl.to(arrowContainer1.getChildAt(4), { width: 0, duration: 1, ease: "power3.in" }, ">");
    arrowContainer1.getChildAt(5).setTransform(w, h + 20, 1, 1, Math.PI, 0, 0, 0, 0);
    tl.fromTo(arrowContainer1.getChildAt(5), { width: arrowContainer1.getChildAt(5).scale.x }, { width: w, duration: 1, ease: "power3.out" }, "<-0.95");
    tl.to(arrowContainer1.getChildAt(5), { width: 0, duration: 1, ease: "power3.in" }, ">");
    arrowContainer1.getChildAt(6).setTransform(0, 50, 1, 1, 0, 0, 0, 0, 0);
    tl.fromTo(arrowContainer1.getChildAt(6), { width: arrowContainer1.getChildAt(6).scale.x }, { width: w, duration: 1, ease: "power3.out" }, "<-0.95");
    tl.to(arrowContainer1.getChildAt(6), { width: 0, duration: 1, ease: "power3.in" }, ">");
    arrowContainer1.getChildAt(7).setTransform(w, h + 140, 1, 1, Math.PI, 0, 0, 0, 0);
    tl.fromTo(arrowContainer1.getChildAt(7), { width: arrowContainer1.getChildAt(7).scale.x }, { width: w, duration: 1, ease: "power3.out" }, "<-0.9");
    tl.to(arrowContainer1.getChildAt(7), { width: 0, duration: 1, ease: "power3.in" }, ">");
    arrowContainer1.getChildAt(8).setTransform(0, +170, 1, 1, 0, 0, 0, 0, 0);
    tl.fromTo(arrowContainer1.getChildAt(8), { width: arrowContainer1.getChildAt(8).scale.x }, { width: w, duration: 1, ease: "power3.out" }, "<-0.9");
    tl.to(arrowContainer1.getChildAt(8), { width: 0, duration: 1, ease: "power3.in" }, ">");
    return tl;
    //arrowContainer.removeChildren(0,8);
}
main();
