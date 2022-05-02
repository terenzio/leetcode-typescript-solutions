"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = void 0;
// TS
function flatten(root) {
    if (!root)
        return;
    const stack = [root];
    while (stack.length) {
        const curr = stack.pop();
        if (curr.right)
            stack.push(curr.right);
        if (curr.left)
            stack.push(curr.left);
        if (stack.length)
            curr.right = stack[0];
        curr.left = null;
    }
}
exports.flatten = flatten;
// JS
// const flatten = function (root) {
//   if (!root) return;
//   const stack = [root];
//   while (stack.length) {
//     const curr = stack.pop();
//     if (curr.right) stack.push(curr.right);
//     if (curr.left) stack.push(curr.left);
//     if (stack.length) curr.right = stack[stack.length - 1];
//     curr.left = null;
//   }
// };
