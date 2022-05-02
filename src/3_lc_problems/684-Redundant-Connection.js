"use strict";
function findRedundantConnection(edges) {
    const uf = {};
    const find = (x) => {
        if (!uf[x]) {
            uf[x] = x;
        }
        return uf[x] === x ? x : uf[find(x)];
    };
    const union = (a, b) => {
        uf[find(a)] = uf[find(b)];
    };
    for (const edge of edges) {
        const [u, v] = edge;
        if (find(u) === find(v))
            return edge;
        union(u, v);
    }
    return [];
}
