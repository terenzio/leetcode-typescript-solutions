"use strict";
function canVisitAllRooms(rooms) {
    const keys = new Set();
    const queue = [0];
    while (queue.length) {
        const curr = queue.shift();
        if (!keys.has(curr)) {
            keys.add(curr);
            queue.push(...rooms[curr]);
        }
    }
    return keys.size === rooms.length;
}
