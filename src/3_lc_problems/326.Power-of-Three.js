"use strict";
function isPowerOfThree(n) {
    let num = 1;
    while (num < n)
        num *= 3;
    return num === n;
}
