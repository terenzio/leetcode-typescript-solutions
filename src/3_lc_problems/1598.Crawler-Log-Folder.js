"use strict";
// JS
var minOperations = function (logs) {
    let count = 0;
    for (const log of logs) {
        if (log === '../')
            count = Math.max(count - 1, 0);
        else if (log !== './')
            count++;
    }
    return count;
};
// TS
function minOperations(logs) {
    let count = 0;
    for (const log of logs) {
        if (log === '../')
            count = Math.max(count - 1, 0);
        else if (log !== './')
            count++;
    }
    return count;
}
