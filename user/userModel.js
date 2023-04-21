"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    User.prototype.toString = function () {
        return "User { id: ".concat(this.id, ", nome: ").concat(this.nome, " }");
    };
    return User;
}());
exports.User = User;
