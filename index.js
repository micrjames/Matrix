const { Matrix } = require("./Matrix");
const { Random } = require("./Random");

const N = 2;
const mat = new Matrix(N);

const rand = new Random(1, 10);

console.log(mat.mat);

for(let j = 0; j < N; j++) {
    for(let i = 0; i < N; i++) {
	   mat.setElement(rand.int, i, j);
	}
}

console.log(mat.mat);

const diag = mat.diagonal;
const counter_diagonal = mat.counterDiagonal;

console.log(diag);
console.log(counter_diagonal);
