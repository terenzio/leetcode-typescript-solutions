"use strict";
function maximumUniqueSubarray(nums) {
    let res = 0;
    let sum = 0;
    const set = new Set();
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        console.log(left, right, set);
        if (set.has(nums[right])) {
            set.delete(nums[left]);
            sum -= nums[left];
            left++;
        }
        else {
            set.add(nums[right]);
            sum += nums[right];
            right++;
            res = Math.max(res, sum);
        }
    }
    return res;
}
