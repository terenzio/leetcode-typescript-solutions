"use strict";
function sumEvenGrandparent(root) {
    let sum = 0;
    const traverse = (node, evenParent, evenGrandParent) => {
        if (!node)
            return;
        traverse(node.left, !(node.val % 2), evenParent);
        if (evenGrandParent)
            sum += node.val;
        traverse(node.right, !(node.val % 2), evenParent);
    };
    traverse(root, false, false);
    return sum;
}
