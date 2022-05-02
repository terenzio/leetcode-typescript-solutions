"use strict";
class WordDictionary {
    constructor() {
        this.child = {};
        this.isWord = false;
    }
    addWord(word) {
        let curr = this;
        for (const char of word) {
            if (!curr.child[char]) {
                curr.child[char] = new WordDictionary();
            }
            curr = curr.child[char];
        }
        curr.isWord = true;
    }
    search(word) {
        let curr = this;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (char === ".") {
                const rest = word.slice(i + 1);
                for (const key in curr.child) {
                    if (curr.child[key].search(rest)) {
                        return true;
                    }
                }
                return false;
            }
            if (!curr.child[char]) {
                return false;
            }
            curr = curr.child[char];
        }
        return curr.isWord;
    }
}
