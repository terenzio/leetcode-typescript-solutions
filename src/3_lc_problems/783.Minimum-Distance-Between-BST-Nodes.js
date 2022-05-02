"use strict";
function minDiffInBST(root) {
    let prev;
    let res = Infinity;
    const inOrderTraverse = (node) => {
        if (!node)
            return;
        inOrderTraverse(node.left);
        if (prev !== undefined) {
            res = Math.min(node.val - prev, res);
        }
        prev = node.val;
        inOrderTraverse(node.right);
    };
    inOrderTraverse(root);
    return res;
}
