declare class WordDictionary {
    child: {
        [key: string]: WordDictionary;
    };
    isWord: boolean;
    constructor();
    addWord(word: string): void;
    search(word: string): boolean;
}
//# sourceMappingURL=211-Add-and-Search-Word-Data-structure-design.d.ts.map