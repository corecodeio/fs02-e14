"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Box_1 = __importDefault(require("./models/Box"));
class Main {
    start() {
        const box = new Box_1.default(2);
        console.log(typeof box.number);
        //console.log(box.number.toUpperCase());
        const otherBox = new Box_1.default('Yosef');
        console.log(typeof otherBox.number);
        console.log(otherBox.number.toUpperCase());
    }
}
exports.default = Main;
