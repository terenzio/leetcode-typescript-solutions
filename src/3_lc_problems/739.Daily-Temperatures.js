"use strict";
function dailyTemperatures(temperatures) {
    const res = Array(temperatures.length).fill(0);
    const stack = []; // [temp,index]
    let i = 0;
    while (i < temperatures.length) {
        while (stack.length && temperatures[i] > stack[stack.length - 1][0]) {
            const [, stackI] = stack.pop();
            res[stackI] = i - stackI;
        }
        stack.push([temperatures[i], i]);
        i++;
    }
    return res;
}
