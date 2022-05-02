"use strict";
const getFrequencies = (s) => {
    const frequencies = {};
    for (let i = 0; i < s.length; i++) {
        frequencies[s.charAt(i)]
            ? frequencies[s.charAt(i)]++
            : (frequencies[s.charAt(i)] = 1);
    }
    return frequencies;
};
function wordSubsets(A, B) {
    const hash = {};
    B.forEach((b) => {
        const bFreqs = getFrequencies(b);
        Object.entries(bFreqs).forEach(([key, value]) => {
            !(key in hash)
                ? (hash[key] = value)
                : (hash[key] = Math.max(hash[key], value));
        });
    });
    return A.filter((a) => {
        const aFreqs = getFrequencies(a);
        for (const [key, value] of Object.entries(hash)) {
            if (!(key in aFreqs) || value > aFreqs[key])
                return false;
        }
        return true;
    });
}
