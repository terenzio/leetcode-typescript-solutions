declare class EmptyQueueException extends Error {
}
declare class Queue<T> {
    private array;
    add(data: T): void;
    remove(): T | undefined;
    peek(): T;
    isEmpty(): boolean;
}
declare const queue: Queue<unknown>;
//# sourceMappingURL=2_Queue.d.ts.map