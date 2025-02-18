"use strict";
// Hash and Array
// Runtime: 132 ms, faster than 55.59% of JavaScript online submissions for Find All Duplicates in an Array.
// Memory Usage: 47.9 MB, less than 21.43% of JavaScript online submissions for Find All Duplicates in an Array.
function findDuplicates(nums) {
    const hash = {};
    const res = [];
    nums.forEach((num) => {
        hash[num] ? res.push(num) : (hash[num] = 1);
    });
    return res;
}
