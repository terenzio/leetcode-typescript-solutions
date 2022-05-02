"use strict";
// Runtime: 84 ms, faster than 73.82% of JavaScript online submissions for Path Sum.
// Memory Usage: 39.9 MB, less than 30.91% of JavaScript online submissions for Path Sum.
function hasPathSum(root, sum) {
    if (!root)
        return false;
    const nextSum = sum - root.val;
    return ((nextSum === 0 && isLeaf(root)) ||
        hasPathSum(root.left, nextSum) ||
        hasPathSum(root.right, nextSum));
}
const isLeaf = (node) => {
    return Boolean(node && !node.left && !node.right);
};
