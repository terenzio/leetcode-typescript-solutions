"use strict";
function isInterleave(s1, s2, s3) {
    if (s3.length !== s1.length + s2.length)
        return false;
    const dp = Array(s1.length + 1)
        .fill(null)
        .map(() => Array(s2.length + 1));
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0 && j == 0) {
                dp[i][j] = true;
            }
            else if (i == 0) {
                dp[i][j] = dp[i][j - 1] && s2.charAt(j - 1) == s3.charAt(i + j - 1);
            }
            else if (j == 0) {
                dp[i][j] = dp[i - 1][j] && s1.charAt(i - 1) == s3.charAt(i + j - 1);
            }
            else {
                dp[i][j] =
                    (dp[i - 1][j] && s1.charAt(i - 1) == s3.charAt(i + j - 1)) ||
                        (dp[i][j - 1] && s2.charAt(j - 1) == s3.charAt(i + j - 1));
            }
        }
    }
    return dp[s1.length][s2.length];
}
