const { Matrix } = require("./Matrix");

const mat = new Matrix(2);

console.log(mat.mat);

mat.setItem(1, 0, 0);

console.log(mat.mat);

const row0 = mat.getRow(0);
const row1 = mat.getRow(1);
console.log(row0, row1);

const col1 = mat.getCol(1);
console.log(col1);
