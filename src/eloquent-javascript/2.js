"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beanCounting = exports.countChar = exports.recursion = exports.minimum = void 0;
const minimum = (a, b) => {
    return a < b ? a : b;
};
exports.minimum = minimum;
const recursion = (num) => {
    if (num === 0)
        return "even";
    if (Math.abs(num) === 1)
        return "odd";
    return (0, exports.recursion)(Math.abs(num) - 2);
};
exports.recursion = recursion;
const countChar = (s, char) => {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === char)
            count++;
    }
    return count;
};
exports.countChar = countChar;
const beanCounting = (s) => {
    return (0, exports.countChar)(s, "B");
};
exports.beanCounting = beanCounting;
