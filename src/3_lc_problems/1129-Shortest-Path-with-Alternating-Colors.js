"use strict";
function shortestAlternatingPaths(n, red_edges, blue_edges) {
    const graph = {};
    for (let i = 0; i < n; i++)
        graph[i] = { r: [], b: [] };
    red_edges.forEach(([i, j]) => graph[i].r.push(j));
    blue_edges.forEach(([i, j]) => graph[i].b.push(j));
    const res = Array(n).fill(-1);
    const visited = {
        r: new Set(),
        b: new Set(),
    };
    const queue = [
        [0, 'r'],
        [0, 'b'],
    ];
    let len = 0;
    while (queue.length) {
        const j = queue.length;
        for (let i = 0; i < j; i++) {
            const [currValue, currColor] = queue.shift();
            if (res[currValue] === -1) {
                res[currValue] = len;
            }
            const nextValues = graph[currValue][currColor];
            const nextColor = currColor === 'b' ? 'r' : 'b';
            nextValues.forEach((nextValue) => {
                if (!visited[nextColor].has(nextValue)) {
                    visited[nextColor].add(nextValue);
                    queue.push([nextValue, nextColor]);
                }
            });
        }
        len++;
    }
    return res;
}
// JS
// Runtime: 104 ms, faster than 55.88% of JavaScript online submissions for Shortest Path with Alternating Colors.
// Memory Usage: 44.1 MB, less than 29.41% of JavaScript online submissions for Shortest Path with Alternating Colors.
// var shortestAlternatingPaths = function (n, red_edges, blue_edges) {
//   // Generate Graph
//   const graph = {};
//   for (let i = 0; i < n; i++) graph[i] = { r: [], b: [] };
//   red_edges.forEach(([i, j]) => graph[i].r.push(j));
//   blue_edges.forEach(([i, j]) => graph[i].b.push(j));
//   const res = Array(n).fill(-1);
//   const visited = {
//     r: new Set(),
//     b: new Set(),
//   };
//   const queue = [
//     [0, 'r'],
//     [0, 'b'],
//   ];
//   let len = 0;
//   while (queue.length) {
//     const j = queue.length;
//     for (let i = 0; i < j; i++) {
//       const [currValue, currColor] = queue.shift();
//       // First time reaching this node
//       if (res[currValue] === -1) {
//         res[currValue] = len; // Update node with current len of paths
//       }
//       const nextValues = graph[currValue][currColor];
//       const nextColor = currColor === 'b' ? 'r' : 'b';
//       nextValues.forEach((nextValue) => {
//         // If next node is not visited, update visited and push to queue
//         if (!visited[nextColor].has(nextValue)) {
//           visited[nextColor].add(nextValue);
//           queue.push([nextValue, nextColor]);
//         }
//       });
//     }
//     len++;
//   }
//   return res;
// };
