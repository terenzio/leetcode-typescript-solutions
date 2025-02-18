"use strict";
function smallestStringWithSwaps(s, pairs) {
    if (!pairs.length)
        return s;
    const res = Array(s.length).fill(s.length);
    const map = {};
    const visited = new Set();
    let chars = [];
    let indexes = [];
    const dfs = (i) => {
        if (visited.has(i))
            return;
        visited.add(i);
        const nodes = map[i];
        chars.push(s[i]);
        indexes.push(i);
        if (!nodes)
            return;
        for (const n of nodes) {
            dfs(n);
        }
    };
    for (const [u, v] of pairs) {
        if (map[u] == undefined)
            map[u] = [];
        if (map[v] == undefined)
            map[v] = [];
        map[u].push(v);
        map[v].push(u);
    }
    for (let i = 0; i < s.length; i++) {
        chars = [];
        indexes = [];
        dfs(i);
        chars.sort();
        indexes.sort((a, b) => a - b);
        for (let j = 0; j < indexes.length; j++) {
            res[indexes[j]] = chars[j];
        }
    }
    return res.join("");
}
