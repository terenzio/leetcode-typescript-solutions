"use strict";
function finalPrices(prices) {
    const getDiscount = (i) => {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                return prices[i] - prices[j];
            }
        }
        return prices[i];
    };
    return prices.map((_, i) => getDiscount(i));
}
