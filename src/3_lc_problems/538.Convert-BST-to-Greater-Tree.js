"use strict";
// JS
var convertBST = function (root) {
    let prev = 0;
    const traverse = (node) => {
        if (!node)
            return;
        traverse(node.right);
        prev = node.val += prev;
        traverse(node.left);
    };
    traverse(root);
    return root;
};
// TS
function convertBST(root) {
    let prev = 0;
    const traverse = (node) => {
        if (!node)
            return;
        traverse(node.right);
        prev = node.val += prev;
        traverse(node.left);
    };
    traverse(root);
    return root;
}
