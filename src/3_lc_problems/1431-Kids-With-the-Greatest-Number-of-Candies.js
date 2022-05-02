"use strict";
// Runtime: 80 ms, faster than 89.39% of JavaScript online submissions for Kids With the Greatest Number of Candies.
// Memory Usage: 37.2 MB, less than 80.34% of JavaScript online submissions for Kids With the Greatest Number of Candies.
function kidsWithCandies(candies, extraCandies) {
    const max = Math.max(...candies);
    return candies.map((curr) => curr + extraCandies >= max);
}
