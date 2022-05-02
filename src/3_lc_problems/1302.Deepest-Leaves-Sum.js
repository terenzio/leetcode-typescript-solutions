"use strict";
function deepestLeavesSum(root) {
    if (!root)
        return 0;
    let queue = [root];
    const levels = [];
    while (queue.length) {
        levels.unshift(0);
        const newQueue = [];
        while (queue.length) {
            const curr = queue.shift();
            levels[0] += curr.val;
            if (curr.left)
                newQueue.push(curr.left);
            if (curr.right)
                newQueue.push(curr.right);
        }
        queue = newQueue;
    }
    return levels[0];
}
