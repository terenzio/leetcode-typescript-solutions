"use strict";
const helper = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '#')
            stack.pop();
        else
            stack.push(str.charAt(i));
    }
    return stack.join('');
};
function backspaceCompare(s, t) {
    return helper(s) === helper(t);
}
