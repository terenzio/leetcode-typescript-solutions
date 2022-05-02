"use strict";
function subarraySum(nums, k) {
    var _a;
    const hash = { 0: 1 };
    let sum = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const diff = sum - k;
        if (hash[diff])
            res += hash[diff];
        hash[sum] = ((_a = hash[sum]) !== null && _a !== void 0 ? _a : 0) + 1;
    }
    return res;
}
