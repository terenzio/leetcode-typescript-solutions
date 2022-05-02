"use strict";
// Runtime: 84 ms, faster than 90.00% of TypeScript online submissions for Binary Tree Paths.
// Memory Usage: 40.3 MB, less than 50.00% of TypeScript online submissions for Binary Tree Paths.
function binaryTreePaths(root) {
    const res = [];
    const helper = (node, path) => {
        if (!node)
            return;
        const newPath = path + `${node.val}->`;
        if (!node.left && !node.right) {
            res.push(path + node.val);
            return;
        }
        helper(node.left, newPath);
        helper(node.right, newPath);
    };
    helper(root, '');
    return res;
}
