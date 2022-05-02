"use strict";
function findMaxLength(nums) {
    let maxLength = 0;
    let count = 0;
    const map = new Map();
    map.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        nums[i] ? count++ : count--;
        if (map.has(count)) {
            maxLength = Math.max(maxLength, i - map.get(count));
        }
        else {
            map.set(count, i);
        }
    }
    return maxLength;
}
