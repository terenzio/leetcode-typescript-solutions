"use strict";
// Runtime: 80 ms, faster than 62.73% of JavaScript online submissions for The K Weakest Rows in a Matrix.
// Memory Usage: 38.8 MB, less than 11.11% of JavaScript online submissions for The K Weakest Rows in a Matrix.
function kWeakestRows(mat, k) {
    const hash = {};
    mat.forEach((row, rowIndex) => {
        hash[rowIndex] = 0;
        row.forEach((val) => {
            if (val) {
                hash[rowIndex]++;
            }
        });
    });
    return Object.entries(hash)
        .sort(([, a], [, b]) => a - b)
        .map(([key]) => parseInt(key))
        .slice(0, k);
}
