"use strict";
// TS
function averageOfLevels(root) {
    if (!root)
        return [];
    let stack = [root];
    const res = [];
    while (stack.length) {
        let sum = 0;
        const newStack = [];
        for (let node of stack) {
            sum += node.val;
            if (node.left)
                newStack.push(node.left);
            if (node.right)
                newStack.push(node.right);
        }
        res.push(sum / stack.length);
        stack = newStack;
    }
    return res;
}
// JS
// var averageOfLevels = function (root) {
//   let stack = [root];
//   const res = [];
//   while (stack.length) {
//     let sum = 0;
//     const newStack = [];
//     for (let node of stack) {
//       sum += node.val;
//       if (node.left) newStack.push(node.left);
//       if (node.right) newStack.push(node.right);
//     }
//     res.push(sum / stack.length);
//     stack = newStack;
//   }
//   return res;
// };
