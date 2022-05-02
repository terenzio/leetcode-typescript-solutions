"use strict";
class NestedIterator {
    constructor(nestedList) {
        this.list = [];
        this.index = 0;
        this.flatten(nestedList);
    }
    flatten(nestedList) {
        while (nestedList.length) {
            const curr = nestedList.shift();
            if (curr.isInteger()) {
                this.list.push(curr.getInteger());
            }
            else
                this.flatten(curr.getList());
        }
    }
    hasNext() {
        return this.index < this.list.length;
    }
    next() {
        return this.list[this.index++];
    }
}
