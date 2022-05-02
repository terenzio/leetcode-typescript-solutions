export declare class Node<T> {
    data: T;
    adjacent: Node<T>[];
    comparator: (a: T, b: T) => number;
    constructor(data: T, comparator: (a: T, b: T) => number);
    addAdjacent(node: Node<T>): void;
    removeAdjacent(data: T): Node<T> | null;
}
export declare class Graph<T> {
    nodes: Map<T, Node<T>>;
    comparator: (a: T, b: T) => number;
    constructor(comparator: (a: T, b: T) => number);
    /**
     * Add a new node if it was not added before
     *
     * @param {T} data
     * @returns {Node<T>}
     */
    addNode(data: T): Node<T>;
    /**
     * Remove a node, also remove it from other nodes adjacency list
     *
     * @param {T} data
     * @returns {Node<T> | null}
     */
    removeNode(data: T): Node<T> | null;
    /**
     * Create an edge between two nodes
     *
     * @param {T} source
     * @param {T} destination
     */
    addEdge(source: T, destination: T): void;
    /**
     * Remove an edge between two nodes
     *
     * @param {T} source
     * @param {T} destination
     */
    removeEdge(source: T, destination: T): void;
    /**
     * Depth-first search
     *
     * @param {T} data
     * @param {Map<T, boolean>} visited
     * @returns
     */
    private depthFirstSearchAux;
    depthFirstSearch(): void;
    /**
     * Breadth-first search
     *
     * @param {T} data
     * @returns
     */
    private breadthFirstSearchAux;
    breadthFirstSearch(): void;
}
//# sourceMappingURL=6_Graph.d.ts.map