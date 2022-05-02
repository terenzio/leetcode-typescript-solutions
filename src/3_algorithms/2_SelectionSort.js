"use strict";
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(arr, min, i);
    }
}
const arr3 = [5, 3, 1, 2, 4];
selectionSort(arr3);
console.log(arr3);
