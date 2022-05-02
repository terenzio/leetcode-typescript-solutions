"use strict";
function maxDepth(s) {
    let maxCount = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(') {
            count++;
            maxCount = Math.max(maxCount, count);
        }
        else if (s.charAt(i) === ')') {
            count--;
        }
    }
    return maxCount;
}
