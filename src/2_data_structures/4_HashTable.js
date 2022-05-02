"use strict";
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
class HashTable {
    constructor(size) {
        this.data = [];
        this.size = size;
    }
    hash(value) {
        const sum = value
            .split("")
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
        // force sum into the hash table size
        return sum % this.size;
    }
    insert(value) {
        const index = this.hash(value);
        if (!this.data[index]) {
            this.data[index] = new LinkedList((a, b) => a === b);
        }
        this.data[index].append(value);
    }
    search(value) {
        const index = this.hash(value);
        console.log(this.data);
        if (this.data[index]) {
            return this.data[index].search(value).data;
        }
        return null;
    }
}
const hashTable = new HashTable(10);
hashTable.insert("aabb");
hashTable.insert("bbcc");
hashTable.insert("abcd");
console.log(hashTable.search("abcd"));
