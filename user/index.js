"use strict";
exports.__esModule = true;
var apiService_1 = require("./apiService");
function execute() {
    var dado = apiService_1["default"].getUser('E56-477-514AX-DWWF52255', 'mario');
    console.log(dado);
}
execute();
