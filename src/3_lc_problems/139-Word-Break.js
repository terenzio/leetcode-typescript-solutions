"use strict";
function wordBreak(s, wordDict) {
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = i; j <= s.length; j++) {
            const curr = s.slice(i - 1, j);
            if (wordDict.includes(curr) && dp[j - curr.length])
                dp[j] = true;
        }
    }
    return dp[s.length];
}
