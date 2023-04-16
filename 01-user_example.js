var Roles;
(function (Roles) {
    Roles["SuperAdmin"] = "super-admin";
    Roles["Admin"] = "admin";
    Roles["Test"] = "test";
})(Roles || (Roles = {}));
var user = {
    nome: 'Owen',
    idade: 30,
    role: setRole(Roles.Admin)
};
function setRole(role) {
    return role;
}
var showUser = function () {
    console.log(user);
};
showUser();
