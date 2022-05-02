"use strict";
const evaluate = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
};
function evalRPN(tokens) {
    const stack = [];
    while (tokens.length) {
        const t = tokens.shift();
        if (t in evaluate) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(evaluate[t](a, b));
        }
        else
            stack.push(Math.trunc(Number(t)));
    }
    return stack[0];
}
