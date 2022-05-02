"use strict";
function nextGreaterElement(nums1, nums2) {
    const hash = {};
    const stack = [];
    for (const num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            hash[stack.pop()] = num;
        }
        stack.push(num);
    }
    return nums1.map((num) => {
        return num in hash ? hash[num] : -1;
    });
}
// var nextGreaterElement = function (nums1, nums2) {
//     const hash = {};
//     const stack = [];
//     for (const num of nums2) {
//       while (stack.length && stack[stack.length - 1] < num) {
//         hash[stack.pop()] = num;
//       }
//       stack.push(num);
//     }
//     return nums1.map((num) => {
//       return num in hash ? hash[num] : -1;
//     });
//   };
