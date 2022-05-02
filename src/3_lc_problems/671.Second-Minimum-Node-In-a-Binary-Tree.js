"use strict";
function findSecondMinimumValue(root) {
    if (!root)
        return -1;
    let min = root.val;
    let res = Infinity;
    const traverse = (node) => {
        if (!node)
            return;
        if (node.val === min) {
            traverse(node.left);
            traverse(node.right);
        }
        else if (node.val > min && node.val < res) {
            res = node.val;
        }
    };
    traverse(root);
    return res === Infinity ? -1 : res;
}
