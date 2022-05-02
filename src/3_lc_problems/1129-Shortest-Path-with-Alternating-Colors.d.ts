declare type Color = 'r' | 'b';
declare type Graph = {
    [key: string]: {
        [key in Color]: number[];
    };
};
declare type Visited = {
    [key in Color]: Set<number>;
};
declare function shortestAlternatingPaths(n: number, red_edges: number[][], blue_edges: number[][]): number[];
//# sourceMappingURL=1129-Shortest-Path-with-Alternating-Colors.d.ts.map