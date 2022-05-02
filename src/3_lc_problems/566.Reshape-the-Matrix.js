"use strict";
function matrixReshape(mat, r, c) {
    const rows = mat.length;
    const columns = mat[0].length;
    if (rows * columns !== c * r)
        return mat;
    const res = Array(r)
        .fill(null)
        .map(() => Array(c));
    let resi = 0;
    let resj = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            res[resi][resj] = mat[i][j];
            resj++;
            if (resj === c) {
                resj = 0;
                resi++;
            }
        }
    }
    return res;
}
