"use strict";
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
function findIndex(nums, targetNum) {
    console.log(nums);
    console.log(targetNum);
    let low = 0;
    let high = nums.length - 1;
    console.log("low: " + low);
    console.log("high: " + high);
    // let mid = low + Math.floor((high - low)/2)
    // console.log(mid)
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        console.log("mid: " + mid);
        console.log("nums[mid]: " + nums[mid]);
        if (nums[mid] == targetNum) {
            return mid;
        }
        else if (nums[mid] < targetNum) {
            console.log("<");
            low = mid + 1;
            console.log("New Low: " + low);
        }
        else {
            console.log(">");
            high = mid - 1;
            console.log("New high: " + high);
        }
    }
    return -1;
}
const numbersList = [-1, 0, 3, 5, 9, 12];
const targetInput = 10;
let result = findIndex(numbersList, targetInput);
console.log("Result: " + result);
if (result == -1) {
    console.log("Target Number is not in the List!");
}
else {
    console.log("Target Number is at position: " + result);
}
