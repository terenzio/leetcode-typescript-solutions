"use strict";
class NumArray {
    constructor(nums) {
        this.nums = nums;
    }
    sumRange(i, j) {
        let sum = 0;
        for (let k = i; k <= j; k++) {
            sum += this.nums[k];
        }
        return sum;
    }
}
class NumArray {
    constructor(nums) {
        this.sums = nums;
        for (let i = 1; i < nums.length; i++) {
            this.sums[i] += this.sums[i - 1];
        }
        this.sums.unshift(0);
    }
    sumRange(i, j) {
        return this.sums[j + 1] - this.sums[i];
    }
}
