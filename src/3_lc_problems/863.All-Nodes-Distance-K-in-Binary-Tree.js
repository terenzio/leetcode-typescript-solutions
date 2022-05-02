"use strict";
function distanceK(root, target, K) {
    if (!root || !target)
        return [];
    const parentHash = {};
    const visited = new Set();
    const findTarget = (node, parent) => {
        if (!node || target.val in parentHash)
            return;
        parentHash[node.val] = parent;
        findTarget(node.left, node);
        findTarget(node.right, node);
    };
    findTarget(root, null);
    let queue = [target];
    while (K) {
        const newQueue = [];
        while (queue.length) {
            const curr = queue.shift();
            visited.add(curr.val);
            if (parentHash[curr.val] && !visited.has(parentHash[curr.val].val)) {
                newQueue.push(parentHash[curr.val]);
            }
            if (curr.left && !visited.has(curr.left.val))
                newQueue.push(curr.left);
            if (curr.right && !visited.has(curr.right.val))
                newQueue.push(curr.right);
        }
        queue = newQueue;
        K--;
    }
    return queue.map((node) => node.val);
}
