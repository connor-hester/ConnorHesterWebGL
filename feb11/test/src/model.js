"use strict";
exports.__esModule = true;
exports.SceneState = exports.Model = void 0;
var Model = /** @class */ (function () {
    function Model() {
        this.buttonData = {
            width: 200,
            height: 100,
            firstColor: '#3d983d',
            secondColor: '#ff0000'
        };
        this.sceneState = SceneState.first;
        if (Model.instance) {
            return Model.instance;
        }
        Model.instance = this;
    }
    Model.prototype.getInstance = function () {
        return Model.instance;
    };
    return Model;
}());
exports.Model = Model;
var SceneState;
(function (SceneState) {
    SceneState["first"] = "scene one";
    SceneState["second"] = "scene two";
})(SceneState = exports.SceneState || (exports.SceneState = {}));
