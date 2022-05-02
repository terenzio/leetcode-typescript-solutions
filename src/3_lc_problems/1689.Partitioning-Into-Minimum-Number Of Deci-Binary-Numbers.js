"use strict";
// TS
function minPartitions(n) {
    return Math.max(...n.split('').map(Number));
}
// JS
// var minPartitions = function (n) {
//   return Math.max(...n.split(''));
// };
