"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const _2_data_structures_1 = require("../2_data_structures");
function isBST(node, min, max) {
    if (!node)
        return true;
    if ((min && node.data <= min) || (max && node.data > max)) {
        return false;
    }
    if (!isBST(node.leftNode, min, node.data) ||
        !isBST(node.rightNode, node.data, max)) {
        return false;
    }
    return true;
}
function comparator(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}
function run() {
    const bst = new _2_data_structures_1.BinarySearchTree(comparator);
    bst.insert(5);
    bst.insert(3);
    bst.insert(4);
    bst.insert(2);
    bst.insert(7);
    bst.insert(6);
    bst.insert(8);
    bst.insert(9);
    console.log(isBST(bst.root));
}
exports.run = run;
run();
