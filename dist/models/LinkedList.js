"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("./Node"));
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    get size() {
        return this.length;
    }
    add(data) {
        if (this.head === null) {
            this.head = new Node_1.default(data);
        }
        else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new Node_1.default(data);
        }
        this.length++;
    }
    remove() {
        if (this.head !== null) {
            this.head = this.head.next;
            this.length--;
        }
    }
    toString() {
        if (this.length === 0)
            return '[]';
        let data = '';
        let node = this.head;
        while (node !== null) {
            data = `${data}${node.data},`;
            node = node.next;
        }
        data = data.slice(0, -1);
        return `[${data}]`;
    }
}
exports.default = LinkedList;
