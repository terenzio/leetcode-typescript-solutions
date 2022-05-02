"use strict";
function findOrder(numCourses, prerequisites) {
    const ranks = Array(numCourses).fill(0);
    const graph = {};
    const order = [];
    for (let i = 0; i < numCourses; i++)
        graph[i] = [];
    prerequisites.forEach(([course, prerequisite]) => {
        graph[prerequisite].push(course);
        ranks[course]++;
    });
    const visited = new Set();
    const queue = [];
    ranks.forEach((rank, i) => {
        if (rank === 0)
            queue.push(i);
    });
    while (queue.length) {
        const curr = queue.shift();
        visited.add(curr);
        order.push(curr);
        graph[curr].forEach((nextCourse) => {
            ranks[nextCourse]--;
            if (ranks[nextCourse] === 0)
                queue.push(nextCourse);
        });
    }
    return visited.size === numCourses ? order : [];
}
