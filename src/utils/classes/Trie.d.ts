declare class Trie {
    child: {
        [Key: string]: Trie;
    };
    isEnd: boolean;
    constructor();
    insert(word: string): void;
    search(word: string): boolean;
    startsWith(prefix: string): boolean;
}
//# sourceMappingURL=Trie.d.ts.map