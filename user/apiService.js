"use strict";
exports.__esModule = true;
var userModel_1 = require("./userModel");
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.prototype.getUser = function (id, nome) {
        var user = new userModel_1.User(id, nome);
        return user;
    };
    return Api;
}());
exports["default"] = new Api;
