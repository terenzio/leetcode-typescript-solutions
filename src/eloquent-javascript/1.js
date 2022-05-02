"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessboard = exports.fizzBuzz = void 0;
const fizzBuzz = () => {
    let i = 1;
    while (i <= 15) {
        if (!(i % 3) && !(i % 5))
            console.log("FIZZBUZZ");
        else if (!(i % 3))
            console.log("FIZZ");
        else if (!(i % 5))
            console.log("BUZZ");
        else
            console.log(i);
        i++;
    }
};
exports.fizzBuzz = fizzBuzz;
const chessboard = (size = 8) => {
    let a = "";
    let b = "";
    const board = [];
    for (let i = 0; i < size; i++) {
        if (i % 2) {
            a += "#";
            b += " ";
        }
        else {
            a += " ";
            b += "#";
        }
    }
    for (let i = 0; i < size; i++) {
        if (i % 2)
            board.push(b);
        else
            board.push(a);
    }
};
exports.chessboard = chessboard;
