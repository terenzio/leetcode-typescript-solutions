"use strict";
function maximumWealth(accounts) {
    const wealths = accounts.map((account) => account.reduce((prev, curr) => prev + curr, 0));
    return Math.max(...wealths);
}
