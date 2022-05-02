"use strict";
class CustomStack {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.stack = [];
    }
    push(x) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x);
        }
    }
    pop() {
        var _a;
        return (_a = this.stack.pop()) !== null && _a !== void 0 ? _a : -1;
    }
    increment(k, val) {
        const j = Math.min(k, this.stack.length);
        for (let i = 0; i < j; i++) {
            this.stack[i] += val;
        }
    }
}
