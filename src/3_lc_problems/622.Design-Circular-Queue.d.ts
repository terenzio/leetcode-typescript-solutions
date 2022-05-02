declare class MyCircularQueue {
    queue: number[];
    k: number;
    count: number;
    head: number;
    constructor(k: number);
    enQueue(value: number): boolean;
    deQueue(): boolean;
    Front(): number;
    Rear(): number;
    isEmpty(): boolean;
    isFull(): boolean;
}
/**
//  * @param {number} k
//  */
//# sourceMappingURL=622.Design-Circular-Queue.d.ts.map