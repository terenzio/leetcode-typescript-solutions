declare class LLNode {
    val: number;
    prev: LLNode | null;
    next: LLNode | null;
    child: LLNode | null;
    constructor(val?: number, prev?: LLNode, next?: LLNode, child?: LLNode);
}
declare function flatten(head: LLNode | null): LLNode | null;
//# sourceMappingURL=430-Flatten-a-Multilevel-Doubly-Linked-List.d.ts.map