"use strict";
function kLengthApart(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            if (count < k)
                return false;
            count = 0;
        }
        else
            count++;
    }
    return true;
}
