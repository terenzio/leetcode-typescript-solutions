"use strict";
function delNodes(root, to_delete) {
    const res = [];
    const set = new Set(to_delete);
    const dfs = (node) => {
        if (!node)
            return node;
        node.left = dfs(node.left);
        node.right = dfs(node.right);
        if (set.has(node.val)) {
            if (node === null || node === void 0 ? void 0 : node.left) {
                res.push(node.left);
            }
            if (node === null || node === void 0 ? void 0 : node.right) {
                res.push(node.right);
            }
            return null;
        }
        return node;
    };
    if (root && !set.has(root.val)) {
        res.push(root);
    }
    dfs(root);
    return res;
}
