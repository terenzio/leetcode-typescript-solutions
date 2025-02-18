"use strict";
// Runtime: 568 ms, faster than 22.50% of JavaScript online submissions for Find Right Interval.
// Memory Usage: 43.7 MB, less than 75.00% of JavaScript online submissions for Find Right Interval.
function findRightInterval(intervals) {
    const helper = intervals
        .map(([start, end], index) => ({
        index,
        start,
        end,
    }))
        .sort((a, b) => a.start - b.start);
    return intervals.map(([, end]) => {
        const auxIndex = helper.findIndex(({ start }) => start >= end);
        return auxIndex === -1 ? -1 : helper[auxIndex].index;
    });
}
