"use strict";
function bitwiseComplement(N) {
    const complement = parseInt('1'.repeat(N.toString(2).length), 2);
    return N ^ complement;
}
