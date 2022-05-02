"use strict";
function generateParenthesis(n) {
    const res = [];
    const helper = (s, open, close) => {
        if (!close) {
            res.push(s);
            return;
        }
        if (open) {
            helper(s + '(', open - 1, close);
        }
        if (close > open) {
            helper(s + ')', open, close - 1);
        }
    };
    helper('', n, n);
    return res;
}
// var generateParenthesis = function (n) {
//   const res = [];
//   const helper = (s, open, close) => {
//     if (!close) {
//       res.push(s);
//       return;
//     }
//     if (open) {
//       helper(s + '(', open - 1, close);
//     }
//     if (close > open) {
//       helper(s + ')', open, close - 1);
//     }
//   };
//   helper('', n, n);
//   return res;
// };
