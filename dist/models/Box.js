"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    constructor(value) {
        this.value = value;
    }
    get number() {
        return this.value;
    }
    set number(n) {
        this.value = n;
    }
}
exports.default = Box;
