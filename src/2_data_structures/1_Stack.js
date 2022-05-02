"use strict";
class EmptyStackException extends Error {
}
class Stack {
    constructor() {
        this.array = [];
    }
    pop() {
        if (this.isEmpty())
            throw new EmptyStackException();
        return this.array.pop();
    }
    push(data) {
        this.array.push(data);
    }
    peek() {
        if (this.isEmpty())
            throw new EmptyStackException();
        return this.array[this.array.length - 1];
    }
    isEmpty() {
        return this.array.length === 0;
    }
}
const stack = new Stack();
console.log("stack.isEmpty()");
console.log(stack.isEmpty());
console.log("\nstack.push");
stack.push(1);
stack.push(2);
stack.push(3);
console.log("\nstack.isEmpty()");
console.log(stack.isEmpty());
console.log("\nstack.peek()");
console.log(stack.peek());
console.log("\nstack.pop");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
