"use strict";
// Runtime: 88 ms, faster than 87.75% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 38.6 MB, less than 80.78% of JavaScript online submissions for Sort Array By Parity.
function sortArrayByParity(A) {
    const res = [];
    A.forEach((val) => (val % 2 ? res.push(val) : res.unshift(val)));
    return res;
}
// Runtime: 524 ms, faster than 5.43% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 68.7 MB, less than 5.03% of JavaScript online submissions for Sort Array By Parity.
function sortArrayByParity(A) {
    return A.reduce((acc, curr) => {
        return curr % 2 ? [...acc, curr] : [curr, ...acc];
    }, []);
}
