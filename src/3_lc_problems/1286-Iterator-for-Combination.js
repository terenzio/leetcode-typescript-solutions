"use strict";
// Runtime: 108 ms, faster than 100.00% of TypeScript online submissions for Iterator for Combination.
// Memory Usage: 46.7 MB, less than 100.00% of TypeScript online submissions for Iterator for Combination.
class CombinationIterator {
    constructor(characters, combinationLength) {
        this.characters = characters;
        this.combinationLength = combinationLength;
        this.current = 0;
        this.combinations = [];
        this.generateCombinations([], this.characters.split(''));
        this.size = this.combinations.length;
    }
    generateCombinations(have = [], stack = []) {
        if (have.length >= this.combinationLength) {
            this.combinations.push(have.join(''));
            return;
        }
        for (let i = 0; i < stack.length; i++) {
            const newStack = stack.filter((_, index) => index > i);
            this.generateCombinations([...have, stack[i]], newStack);
        }
    }
    next() {
        return this.combinations[this.current++];
    }
    hasNext() {
        return this.current < this.size;
    }
}
