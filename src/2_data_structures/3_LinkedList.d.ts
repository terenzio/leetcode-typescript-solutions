export declare class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | null;
    constructor(data: T);
}
export declare class LinkedList<T> {
    head: LinkedListNode<T> | null;
    comparator: (a: T, b: T) => boolean;
    constructor(comparator: (a: T, b: T) => boolean);
    append(data: T): void;
    delete(data: T): void;
    search(data: T): LinkedListNode<T> | null;
    traverse(): void;
}
//# sourceMappingURL=3_LinkedList.d.ts.map