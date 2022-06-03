"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("./models/LinkedList"));
class Main {
    start() {
        const l = new LinkedList_1.default();
        // console.log(l.toString());
        l.add(2);
        l.add(45);
        l.add(23);
        l.add(12);
        console.log(l.toString());
        console.log(l.size);
        l.remove();
        console.log(l.toString());
        console.log(l.size);
    }
}
exports.default = Main;
