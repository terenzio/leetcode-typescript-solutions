"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = exports.Node = void 0;
class EmptyQueueException extends Error {
}
class Queue {
    constructor() {
        this.array = [];
    }
    add(data) {
        this.array.push(data);
    }
    remove() {
        if (this.isEmpty())
            throw new EmptyQueueException();
        return this.array.shift();
    }
    peek() {
        if (this.isEmpty())
            throw new EmptyQueueException();
        return this.array[0];
    }
    isEmpty() {
        return this.array.length === 0;
    }
}
class Node {
    constructor(data, comparator) {
        this.data = data;
        this.adjacent = [];
        this.comparator = comparator;
    }
    addAdjacent(node) {
        this.adjacent.push(node);
    }
    removeAdjacent(data) {
        const index = this.adjacent.findIndex((node) => this.comparator(node.data, data) === 0);
        if (index > -1) {
            return this.adjacent.splice(index, 1)[0];
        }
        return null;
    }
}
exports.Node = Node;
class Graph {
    constructor(comparator) {
        this.nodes = new Map();
        this.comparator = comparator;
    }
    /**
     * Add a new node if it was not added before
     *
     * @param {T} data
     * @returns {Node<T>}
     */
    addNode(data) {
        let node = this.nodes.get(data);
        if (node)
            return node;
        node = new Node(data, this.comparator);
        this.nodes.set(data, node);
        return node;
    }
    /**
     * Remove a node, also remove it from other nodes adjacency list
     *
     * @param {T} data
     * @returns {Node<T> | null}
     */
    removeNode(data) {
        const nodeToRemove = this.nodes.get(data);
        if (!nodeToRemove)
            return null;
        this.nodes.forEach((node) => {
            node.removeAdjacent(nodeToRemove.data);
        });
        this.nodes.delete(data);
        return nodeToRemove;
    }
    /**
     * Create an edge between two nodes
     *
     * @param {T} source
     * @param {T} destination
     */
    addEdge(source, destination) {
        const sourceNode = this.addNode(source);
        const destinationNode = this.addNode(destination);
        sourceNode.addAdjacent(destinationNode);
    }
    /**
     * Remove an edge between two nodes
     *
     * @param {T} source
     * @param {T} destination
     */
    removeEdge(source, destination) {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);
        if (sourceNode && destinationNode) {
            sourceNode.removeAdjacent(destination);
        }
    }
    /**
     * Depth-first search
     *
     * @param {T} data
     * @param {Map<T, boolean>} visited
     * @returns
     */
    depthFirstSearchAux(node, visited) {
        if (!node)
            return;
        visited.set(node.data, true);
        console.log(node.data);
        node.adjacent.forEach((item) => {
            if (!visited.has(item.data)) {
                this.depthFirstSearchAux(item, visited);
            }
        });
    }
    depthFirstSearch() {
        const visited = new Map();
        this.nodes.forEach((node) => {
            if (!visited.has(node.data)) {
                this.depthFirstSearchAux(node, visited);
            }
        });
    }
    /**
     * Breadth-first search
     *
     * @param {T} data
     * @returns
     */
    breadthFirstSearchAux(node, visited) {
        const queue = new Queue();
        if (!node)
            return;
        queue.add(node);
        visited.set(node.data, true);
        while (!queue.isEmpty()) {
            node = queue.remove();
            if (!node)
                continue;
            console.log(node.data);
            node.adjacent.forEach((item) => {
                if (!visited.has(item.data)) {
                    visited.set(item.data, true);
                    queue.add(item);
                }
            });
        }
    }
    breadthFirstSearch() {
        const visited = new Map();
        this.nodes.forEach((node) => {
            if (!visited.has(node.data)) {
                this.breadthFirstSearchAux(node, visited);
            }
        });
    }
}
exports.Graph = Graph;
function comparator(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}
const graph = new Graph(comparator);
const n1 = graph.addNode(1);
const n2 = graph.addNode(2);
const n3 = graph.addNode(3);
const n4 = graph.addNode(4);
const n5 = graph.addNode(5);
// graph.addNode(2);
graph.addEdge(n1.data, n2.data);
graph.addEdge(n1.data, n3.data);
graph.addEdge(n2.data, n4.data);
graph.addEdge(n3.data, n4.data);
// graph.addEdge(n4.data, n5.data);
graph.breadthFirstSearch();
// graph.depthFirstSearch();
// console.log(graph.nodes.get(1));
// graph.removeEdge(n1.data, n2.data);
// console.log(graph.nodes.get(1));
// console.log(graph.nodes);
// graph.printAllNodes();
// graph.removeNode(1);
// graph.printAllNodes();
// graph.depthFirstSearch(n1.data);
// graph.breadthFirstSearch(n1.data);
