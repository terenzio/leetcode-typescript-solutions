"use strict";
// Runtime: 68 ms, faster than 97.25% of JavaScript online submissions for Flatten a Multilevel Doubly Linked List.
// Memory Usage: 40 MB, less than 10.62% of JavaScript online submissions for Flatten a Multilevel Doubly Linked List.
class LLNode {
    constructor(val, prev, next, child) {
        this.val = val === undefined ? 0 : val;
        this.prev = prev === undefined ? null : prev;
        this.next = next === undefined ? null : next;
        this.child = child === undefined ? null : child;
    }
}
function flatten(head) {
    const queue = [];
    let curr = head;
    let prev = null;
    while (curr || queue.length) {
        if (curr) {
            if (curr.child) {
                if (curr.next) {
                    queue.push(curr.next);
                }
                curr.next = curr.child;
                curr.child.prev = curr;
                curr.child = null;
            }
            prev = curr;
            curr = curr.next;
        }
        else {
            curr = queue.pop();
            prev.next = curr;
            curr.prev = prev;
        }
    }
    return head;
}
