"use strict";
// Recursion
// Runtime: 64 ms, faster than 94.85% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 37.2 MB, less than 5.08% of JavaScript online submissions for Binary Tree Preorder Traversal.
function preorderTraversal(root) {
    if (!root)
        return [];
    return [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right),
    ];
}
// Helper Function
// Runtime: 64 ms, faster than 94.85% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 37 MB, less than 6.10% of JavaScript online submissions for Binary Tree Preorder Traversal.
function preorderTraversal(root) {
    const res = [];
    const helper = (node) => {
        if (!node)
            return;
        res.push(node.val);
        helper(node.left);
        helper(node.right);
    };
    helper(root);
    return res;
}
