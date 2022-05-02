declare class EmptyStackException extends Error {
}
declare class Stack<T> {
    private array;
    pop(): T | undefined;
    push(data: T): void;
    peek(): T;
    isEmpty(): boolean;
}
declare const stack: Stack<unknown>;
//# sourceMappingURL=1_Stack.d.ts.map