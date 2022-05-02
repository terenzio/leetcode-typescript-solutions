declare type Hash = {
    [key: string]: true | undefined;
};
declare class MyHashSet {
    private hash;
    constructor();
    add(key: number): void;
    remove(key: number): void;
    contains(key: number): boolean;
}
//# sourceMappingURL=705-Design-HashSet.d.ts.map