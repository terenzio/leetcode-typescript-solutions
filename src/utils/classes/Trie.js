"use strict";
class Trie {
    constructor() {
        this.child = {};
        this.isEnd = false;
    }
    insert(word) {
        let curr = this;
        for (const char of word) {
            if (!(char in curr.child)) {
                curr.child[char] = new Trie();
            }
            curr = curr.child[char];
        }
        curr.isEnd = true;
    }
    search(word) {
        let curr = this;
        for (const char of word) {
            if (!(char in curr.child)) {
                return false;
            }
            curr = curr.child[char];
        }
        return curr.isEnd;
    }
    startsWith(prefix) {
        let curr = this;
        for (const char of prefix) {
            if (!(char in curr.child)) {
                return false;
            }
            curr = curr.child[char];
        }
        return true;
    }
}
