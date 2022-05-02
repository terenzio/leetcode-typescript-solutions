"use strict";
function isCompleteTree(root) {
    let seenNull = false;
    let queue = [root];
    while (queue.length) {
        const next = [];
        for (let node of queue) {
            if (!node)
                seenNull = true;
            else {
                if (seenNull)
                    return false;
                next.push(node.left);
                next.push(node.right);
            }
        }
        console.log(next);
        queue = next;
    }
    return true;
}
