"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = exports.BinarySearchTreeNode = void 0;
class BinarySearchTreeNode {
    constructor(data) {
        this.data = data;
    }
}
exports.BinarySearchTreeNode = BinarySearchTreeNode;
class BinarySearchTree {
    constructor(comparator) {
        this.comparator = comparator;
    }
    insert(data) {
        if (!this.root) {
            this.root = new BinarySearchTreeNode(data);
            return this.root;
        }
        let current = this.root;
        while (true) {
            if (this.comparator(data, current.data) === 1) {
                if (current.rightNode) {
                    current = current.rightNode;
                }
                else {
                    current.rightNode = new BinarySearchTreeNode(data);
                    return current.rightNode;
                }
            }
            else {
                if (current.leftNode) {
                    current = current.leftNode;
                }
                else {
                    current.leftNode = new BinarySearchTreeNode(data);
                    return current.leftNode;
                }
            }
        }
    }
    search(data) {
        if (!this.root)
            return undefined;
        let current = this.root;
        while (this.comparator(data, current.data) !== 0) {
            if (this.comparator(data, current.data) === 1) {
                if (!current.rightNode)
                    return;
                current = current.rightNode;
            }
            else {
                if (!current.leftNode)
                    return;
                current = current.leftNode;
            }
        }
        return current;
    }
    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.leftNode);
            console.log(node.data);
            this.inOrderTraversal(node.rightNode);
        }
    }
    preOrderTraversal(node) {
        if (node) {
            console.log(node.data);
            this.preOrderTraversal(node.leftNode);
            this.preOrderTraversal(node.rightNode);
        }
    }
    postOrderTraversal(node) {
        if (node) {
            this.postOrderTraversal(node.leftNode);
            this.postOrderTraversal(node.rightNode);
            console.log(node.data);
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
function comparator(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}
const bst = new BinarySearchTree(comparator);
bst.insert(5);
bst.insert(2);
bst.insert(3);
bst.insert(1);
bst.insert(7);
bst.insert(6);
bst.insert(8);
bst.inOrderTraversal(bst.root);
// console.log(bst.getHeight(bst.root));
console.log(JSON.stringify(bst));
console.log(bst.search(7));
bst.inOrderTraversal(bst.root);
console.log(" --- ");
bst.preOrderTraversal(bst.root);
console.log(" --- ");
bst.postOrderTraversal(bst.root);
