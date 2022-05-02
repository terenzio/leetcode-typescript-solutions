"use strict";
function subsets(nums) {
    const res = [[]];
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const aux = res.map((val) => [...val, curr]);
        res.push(...aux);
    }
    return res;
}
