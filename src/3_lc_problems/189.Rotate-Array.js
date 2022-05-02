"use strict";
function rotate(nums, k) {
    let i = k % nums.length;
    while (i) {
        nums.unshift(nums.pop());
        i--;
    }
}
