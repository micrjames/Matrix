const { Matrix } = require("./Matrix");
const { Random } = require("../Random/Random");

const N = 2;
const mat1 = new Matrix(N);
const mat2 = new Matrix(N);

const rand = new Random(1, 10);

console.log(mat1.mat);
console.log(mat2.mat);

for(let j = 0; j < N; j++) {
    for(let i = 0; i < N; i++) {
	   mat1.setElement(rand.int, i, j);
	}
}
for(let j = 0; j < N; j++) {
    for(let i = 0; i < N; i++) {
	   mat2.setElement(rand.int, i, j);
	}
}

console.log(mat1.mat);
console.log(mat2.mat);

const addedMats = mat1.add(mat2);
console.log(addedMats);

const scalarMult = mat1.multiply_scalar(2);
console.log(scalarMult);

