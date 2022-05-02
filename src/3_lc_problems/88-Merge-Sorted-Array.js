"use strict";
// Runtime: 72 ms, faster than 71.61% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 36.9 MB, less than 16.00% of JavaScript online submissions for Merge Sorted Array.
function merge(nums1, m, nums2, n) {
    const res = [];
    let i = 0;
    let j = 0;
    while (m - i && n - j) {
        if (nums1[i] < nums2[j]) {
            res.push(nums1[i]);
            i++;
        }
        else {
            res.push(nums2[j]);
            j++;
        }
    }
    while (m - i) {
        res.push(nums1[i]);
        i++;
    }
    while (n - j) {
        res.push(nums2[j]);
        j++;
    }
    res.forEach((num, index) => {
        nums1[index] = num;
    });
}
