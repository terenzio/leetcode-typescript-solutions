"use strict";
function gardenNoAdj(n, paths) {
    const graph = {};
    const flowers = {};
    for (let i = 1; i <= n; i++)
        graph[i] = [];
    paths.forEach(([x, y]) => {
        graph[x].push(y);
        graph[y].push(x);
    });
    const getFlower = (i) => {
        const possibleTypes = new Set([1, 2, 3, 4]);
        graph[i].forEach((garden) => {
            possibleTypes.delete(flowers[garden]);
        });
        return Math.min(...possibleTypes);
    };
    for (let i = 1; i <= n; i++) {
        flowers[i] = getFlower(i);
    }
    return Object.values(flowers);
}
