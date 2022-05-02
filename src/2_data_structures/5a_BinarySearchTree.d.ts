export declare class BinarySearchTreeNode<T> {
    data: T;
    leftNode?: BinarySearchTreeNode<T>;
    rightNode?: BinarySearchTreeNode<T>;
    constructor(data: T);
}
export declare class BinarySearchTree<T> {
    root?: BinarySearchTreeNode<T>;
    comparator: (a: T, b: T) => number;
    constructor(comparator: (a: T, b: T) => number);
    insert(data: T): BinarySearchTreeNode<T> | undefined;
    search(data: T): BinarySearchTreeNode<T> | undefined;
    inOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void;
    preOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void;
    postOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void;
}
//# sourceMappingURL=5a_BinarySearchTree.d.ts.map