"use strict";
function suggestedProducts(products, searchWord) {
    products.sort();
    const res = new Array(searchWord.length).fill([]);
    for (let idx = 0; idx < searchWord.length; idx++) {
        const next = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i][idx] === searchWord[idx]) {
                next.push(products[i]);
                res[idx].length < 3 && res[idx].push(products[i]);
            }
        }
        products = next;
    }
    return res;
}
