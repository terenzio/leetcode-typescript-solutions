"use strict";
function connect(root) {
    if (!root)
        return root;
    let queue = [root];
    while (queue.length) {
        const nextQueue = [];
        while (queue.length) {
            const curr = queue.shift();
            if (queue.length)
                curr.next = queue[0];
            if (curr.left)
                nextQueue.push(curr.left);
            if (curr.right)
                nextQueue.push(curr.right);
        }
        queue = nextQueue;
    }
    return root;
}
