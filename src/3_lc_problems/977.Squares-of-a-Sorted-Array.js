"use strict";
var sortedSquares = function (nums) {
    return nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
};
