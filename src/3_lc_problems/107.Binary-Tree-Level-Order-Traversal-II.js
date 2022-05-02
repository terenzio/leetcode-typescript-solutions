"use strict";
function levelOrderBottom(root) {
    const res = [];
    const helper = (node, level) => {
        if (!node)
            return;
        if (!res[level])
            res.push([node.val]);
        else
            res[level].push(node.val);
        helper(node.left, level + 1);
        helper(node.right, level + 1);
    };
    helper(root, 0);
    return res.reverse();
}
