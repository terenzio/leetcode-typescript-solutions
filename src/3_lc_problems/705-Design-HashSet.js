"use strict";
// Runtime: 180 ms, faster than 85.27% of JavaScript online submissions for Design HashSet.
// Memory Usage: 45.3 MB, less than 6.67% of JavaScript online submissions for Design HashSet.
class MyHashSet {
    constructor() {
        this.hash = {};
        this.hash = {};
    }
    add(key) {
        this.hash[key] = true;
    }
    remove(key) {
        delete this.hash[key];
    }
    contains(key) {
        return !!this.hash[key];
    }
}
