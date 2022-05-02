"use strict";
function minJumps(arr) {
    const hash = {};
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (!(curr in hash)) {
            hash[curr] = new Set();
        }
        hash[curr].add(i);
    }
    const neighbours = (idx) => {
        const res = [];
        if (idx + 1 < arr.length)
            res.push(idx + 1);
        if (idx - 1 >= 0)
            res.push(idx - 1);
        res.push(...hash[arr[idx]]);
        hash[arr[idx]].clear();
        return res;
    };
    let steps = 0;
    const visited = new Set([0]);
    let queue = [0];
    while (true) {
        let newQueue = [];
        while (queue.length) {
            let idx = queue.pop();
            if (idx === arr.length - 1) {
                return steps;
            }
            for (let neigh of neighbours(idx)) {
                if (!visited.has(neigh)) {
                    visited.add(neigh);
                    newQueue.push(neigh);
                }
            }
        }
        steps++;
        queue = newQueue;
    }
}
