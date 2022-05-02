declare class CombinationIterator {
    private characters;
    private combinationLength;
    private combinations;
    private size;
    private current;
    constructor(characters: string, combinationLength: number);
    private generateCombinations;
    next(): string;
    hasNext(): boolean;
}
//# sourceMappingURL=1286-Iterator-for-Combination.d.ts.map