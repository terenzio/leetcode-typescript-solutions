"use strict";
function distributeCandies(candyType) {
    return Math.min(new Set(candyType).size, candyType.length / 2);
}
