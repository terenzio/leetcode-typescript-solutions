"use strict";
// Without Follow-up
class Solution {
    constructor(head) {
        this.head = head;
        this.length = this.getLength();
    }
    getLength() {
        let len = 0;
        let curr = this.head;
        while (curr) {
            len++;
            curr = curr.next;
        }
        return len;
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    getRandom() {
        let curr = this.head;
        let jumps = this.getRandomInt(this.length);
        while (jumps) {
            jumps--;
            curr = curr.next;
        }
        return curr.val;
    }
}
