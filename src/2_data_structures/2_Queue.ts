class EmptyQueueException extends Error {}

class Queue<T> {
    private array: T[] = [];

    add(data: T): void {
        this.array.push(data);
    }

    remove(): T | undefined {
        if (this.isEmpty()) throw new EmptyQueueException();

        return this.array.shift();
    }

    peek(): T {
        if (this.isEmpty()) throw new EmptyQueueException();

        return this.array[0];
    }

    isEmpty(): boolean {
        return this.array.length === 0;
    }
}

const queue = new Queue();

queue.add(1);
queue.add(2);
queue.add(3);

console.log("queue.isEmpty()");
console.log(queue.isEmpty());

console.log("\nqueue.peek()");
console.log(queue.peek());

console.log("\nqueue.remove()");
console.log(queue.remove());
console.log("queue.remove()");
console.log(queue.remove());
console.log("queue.remove()");
console.log(queue.remove());

console.log("\nqueue.isEmpty()");
console.log(queue.isEmpty());