"use strict";
const sortString = (str) => [...str].sort().join('');
function groupAnagrams(strs) {
    const hash = {};
    for (const str of strs) {
        const sortedStr = sortString(str);
        if (!(sortedStr in hash)) {
            hash[sortedStr] = [];
        }
        hash[sortedStr].push(str);
    }
    return Object.values(hash);
}
