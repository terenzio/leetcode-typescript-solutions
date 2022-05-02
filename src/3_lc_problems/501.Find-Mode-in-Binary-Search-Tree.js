"use strict";
// TS
// Runtime: 96 ms, faster than 100.00% of TypeScript online submissions for Find Mode in Binary Search Tree.
// Memory Usage: 45.2 MB, less than 100.00% of TypeScript online submissions for Find Mode in Binary Search Tree.
function findMode(root) {
    let res = [];
    let prev = null;
    let count = 0;
    let max = 0;
    const traverse = (node) => {
        if (!node)
            return;
        traverse(node.left);
        if (node.val !== prev) {
            prev = node.val;
            count = 0;
        }
        count++;
        if (count > max) {
            res = [node.val];
            max = count;
        }
        else if (count === max) {
            res.push(node.val);
        }
        traverse(node.right);
    };
    traverse(root);
    return res;
}
