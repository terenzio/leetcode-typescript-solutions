"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.LinkedListNode = void 0;
class LinkedListNode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
exports.LinkedListNode = LinkedListNode;
class LinkedList {
    constructor(comparator) {
        this.head = null;
        this.comparator = comparator;
    }
    append(data) {
        if (!this.head) {
            this.head = new LinkedListNode(data);
        }
        else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new LinkedListNode(data);
        }
    }
    delete(data) {
        if (!this.head)
            return;
        // Check if the head node is the node to be removed
        if (this.comparator(this.head.data, data)) {
            this.head = this.head.next;
            return;
        }
        let current = this.head.next;
        let previous = this.head;
        /**
         * Search for the node to be removed and keep track of its previous node
         *
         * If it were a double linked list, we could simply search the node
         * and it would have a pointer to the previous node
         **/
        while (current) {
            if (this.comparator(current.data, data)) {
                current = null;
            }
            else {
                previous = current;
                current = current.next;
            }
        }
        /**
         * set previous.next to target.next, if the node target is not found,
         * the 'previous' will point to the last node,
         * since the last node hasn't next, nothing will happen
         **/
        previous.next = previous.next ? previous.next.next : null;
    }
    search(data) {
        let current = this.head;
        while (current) {
            if (this.comparator(current.data, data)) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    traverse() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
}
exports.LinkedList = LinkedList;
// function reverse(linkedList: LinkedList<number>) {
//     let prev = null;
//     let current = linkedList.head;
//     let next = linkedList.head;
//
//     while (current !== null) {
//         next = next.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
//
//     linkedList.head = prev;
// }
//
const linkedList = new LinkedList((a, b) => a === b);
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
console.log(" --- ");
linkedList.traverse();
linkedList.delete(4);
console.log(" --- ");
linkedList.traverse();
console.log(" --- ");
linkedList.traverse();
console.log(" --- linkedList.search(2): ");
console.log(linkedList.search(2));
// Runner technique to find the middle of the list
let slow = linkedList.head;
let fast = (_a = linkedList.head) === null || _a === void 0 ? void 0 : _a.next;
while (fast) {
    slow = slow === null || slow === void 0 ? void 0 : slow.next;
    fast = (_b = fast === null || fast === void 0 ? void 0 : fast.next) === null || _b === void 0 ? void 0 : _b.next;
}
console.log(" --- ");
console.log(slow);
