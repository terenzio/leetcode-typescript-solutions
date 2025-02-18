"use strict";
// Short Version
function getKth(lo, hi, k) {
    const hash = {};
    for (let i = lo; i <= hi; i++)
        hash[i] = getPower(i);
    return parseInt(Object.entries(hash).sort(([, a], [, b]) => a - b)[k - 1][0]);
}
const getPower = (x, power = 0) => {
    if (x === 1)
        return power;
    return x % 2 ? getPower(3 * x + 1, power + 1) : getPower(x / 2, power + 1);
};
// Long Version
function getKth(lo, hi, k) {
    const hash = {};
    for (let i = lo; i <= hi; i++) {
        hash[i] = getPower(i);
    }
    const arr = Object.entries(hash).sort(([, a], [, b]) => a - b);
    const res = arr[k - 1][0];
    return parseInt(res);
}
const getPower = (x, power = 0) => {
    if (x === 1)
        return power;
    if (x % 2) {
        return getPower(3 * x + 1, power + 1);
    }
    return getPower(x / 2, power + 1);
};
