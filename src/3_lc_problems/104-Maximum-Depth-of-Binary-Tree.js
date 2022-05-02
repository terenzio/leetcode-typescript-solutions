"use strict";
// Recursion
// Runtime: 84 ms, faster than 58.89% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 38.8 MB, less than 56.66% of JavaScript online submissions for Maximum Depth of Binary Tree.
function maxDepth(root, i = 0) {
    if (!root)
        return i;
    return Math.max(i, maxDepth(root.left, i + 1), maxDepth(root.right, i + 1));
}
// Helper Recursion
// Runtime: 80 ms, faster than 74.61% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 39.8 MB, less than 13.64% of JavaScript online submissions for Maximum Depth of Binary Tree.
function maxDepth(root) {
    const helper = (node, i) => {
        if (!node)
            return i;
        return Math.max(i, helper(node.left, i + 1), helper(node.right, i + 1));
    };
    return helper(root, 0);
}
