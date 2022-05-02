"use strict";
const isNumber = (char) => char !== '' && !isNaN(Number(char));
function calculate(s) {
    s = s.replace(/\s/g, '');
    const stack = [];
    let num = 0;
    let op = '+';
    const evaluate = () => {
        switch (op) {
            case '+':
                stack.push(num);
                break;
            case '-':
                stack.push(-num);
                break;
            case '*':
                stack.push(stack.pop() * num);
                break;
            case '/':
                stack.push(Math.trunc(stack.pop() / num));
                break;
        }
        num = 0;
    };
    for (let i = 0; i <= s.length; i++) {
        if (isNumber(s.charAt(i))) {
            num = num * 10 + +s[i];
        }
        else {
            evaluate();
            op = s[i];
            num = 0;
        }
    }
    return stack.reduce((a, b) => a + b);
}
