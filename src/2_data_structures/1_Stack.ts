class EmptyStackException extends Error {}

class Stack<T> {
    private array: T[] = [];

    pop(): T | undefined {
        if (this.isEmpty()) throw new EmptyStackException();

        return this.array.pop();
    }

    push(data: T): void {
        this.array.push(data);
    }

    peek(): T {
        if (this.isEmpty()) throw new EmptyStackException();

        return this.array[this.array.length - 1];
    }

    isEmpty(): boolean {
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