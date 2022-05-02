"use strict";
// TS
// Runtime: 124 ms, faster than 90.48% of TypeScript online submissions for Find Duplicate Subtrees.
// Memory Usage: 46.1 MB, less than 38.10% of TypeScript online submissions for Find Duplicate Subtrees.
function findDuplicateSubtrees(root) {
    const map = new Map();
    const res = [];
    function dfs(node) {
        if (!node)
            return null;
        const subtree = `${node.val}.${dfs(node.left)}.${dfs(node.right)}`;
        map.set(subtree, (map.get(subtree) || 0) + 1);
        if (map.get(subtree) === 2)
            res.push(node);
        return subtree;
    }
    dfs(root);
    return res;
}
// JS
// Runtime: 128 ms, faster than 71.93% of JavaScript online submissions for Find Duplicate Subtrees.
// Memory Usage: 45.3 MB, less than 94.30% of JavaScript online submissions for Find Duplicate Subtrees.
// var findDuplicateSubtrees = function (root) {
//   const map = new Map();
//   const res = [];
//   function dfs(node) {
//     if (!node) return null;
//     const subtree = `${node.val}.${dfs(node.left)}.${dfs(node.right)}`;
//     map.set(subtree, (map.get(subtree) || 0) + 1);
//     if (map.get(subtree) === 2) res.push(node);
//     return subtree;
//   }
//   dfs(root);
//   return res;
// };
