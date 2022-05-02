"use strict";
// TS
// Runtime: 324 ms, faster than 80.00% of TypeScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
// Memory Usage: 60.6 MB, less than 40.00% of TypeScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
function getTargetCopy(original, cloned, target) {
    const dfs = (o, c) => {
        if (!o)
            return null;
        const left = dfs(o.left, c.left);
        if (left) {
            return left;
        }
        if (o === target) {
            return c;
        }
        return dfs(o.right, c.right);
    };
    return dfs(original, cloned);
}
