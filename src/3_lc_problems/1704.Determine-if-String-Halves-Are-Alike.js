"use strict";
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
const countVowels = (s) => {
    return s.split('').reduce((prev, c) => {
        return prev + Number(vowels.has(c));
    }, 0);
};
function halvesAreAlike(s) {
    const lower = s.toLocaleLowerCase();
    const first = lower.substr(0, s.length / 2);
    const second = lower.substr(s.length / 2);
    return countVowels(first) === countVowels(second);
}
