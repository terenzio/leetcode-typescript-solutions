"use strict";
function preorder(root) {
    if (!root)
        return [];
    const res = [];
    const traverse = (node) => {
        if (!node)
            return;
        res.push(node.val);
        node.children.forEach((child) => {
            traverse(child);
        });
    };
    traverse(root);
    return res;
}
