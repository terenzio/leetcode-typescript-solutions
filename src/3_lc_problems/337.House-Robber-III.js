"use strict";
const dfs = (node) => {
    if (!node)
        return [0, 0];
    const left = dfs(node.left);
    const right = dfs(node.right);
    const withNode = node.val + left[1] + right[1];
    const withoutNode = Math.max(...left) + Math.max(...right);
    return [withNode, withoutNode];
};
function rob(root) {
    return Math.max(...dfs(root));
}
