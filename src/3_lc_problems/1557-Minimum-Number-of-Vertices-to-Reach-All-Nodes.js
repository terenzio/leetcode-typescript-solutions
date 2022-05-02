"use strict";
// Set
function findSmallestSetOfVertices(n, edges) {
    const set = new Set(Array.from({ length: n }, (_, i) => i));
    edges.forEach(([_, to]) => set.delete(to));
    return [...set];
}
// Hash
function findSmallestSetOfVertices(n, edges) {
    const hash = {};
    for (let i = 0; i < n; i++)
        hash[i] = 0;
    edges.forEach(([, to]) => {
        hash[to] ? hash[to]++ : (hash[to] = 1);
    });
    return Object.entries(hash)
        .filter(([, to]) => to === 0)
        .map(([from]) => parseInt(from));
}
