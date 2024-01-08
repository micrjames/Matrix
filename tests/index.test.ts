const { Matrix } = require("../Matrix");

describe("A Matrix implementation.", () => {
   const numRows = 4;
   const mat = new Matrix(numRows);

   test("Should not be undefined.", () => {
   	  expect(mat.mat).not.toBeUndefined();
   });

   test("Should have rows that are not undefined.", () => {
	  mat.mat.forEach(row => {
		 expect(row).not.toBeUndefined();
	  });
   });

   test("Should consist of 4 rows.", () => {
	  expect(mat.mat).toHaveLength(numRows);
   });

   test("Should consist of 4 x 4 set of all zeros.", () => {
	  mat.mat.forEach(row => {
		 expect(row).toHaveLength(numRows);
	  });
   });

   test("Should be all zeroes when the matrix is cleared.", () => {
	  mat.clear();
	  mat.mat.forEach(row => {
		 row.forEach(el => {
			expect(el).toBe(0);
		 });
	  });
   });

   test.todo("Should set the specified row."); 
   test.todo("Should contain the set row.");

   test.todo("Should retrieve the row set above.");
   test.todo("Should retrive the column create from the set above.");

   test.todo("Should retrieve the diagonal of the matrix at given k.");
   test.todo("Should retrieve the counter diagonal of the matrix at given k.");

   test.todo("Should retrieve the main diagonal of the matrix, i.e. k = 0.");
   test.todo("Should retrieve the main counter diagonal of the matrix, similar to the above.");
});

/*
const { Random } = require("../Random/Random");

const N = 5;
const mat1 = new Matrix(N);
const mat2 = new Matrix(N);

const rand = new Random(1, 10);

console.log(`mat1: ${mat1.mat}`);
console.log(`mat2: ${mat2.mat}`);

for(let j = 0; j < N; j++) {
    for(let i = 0; i < N; i++) {
	   mat1.setElement(rand.integer, i, j);
	}
}
for(let j = 0; j < N; j++) {
    for(let i = 0; i < N; i++) {
	   mat2.setElement(rand.integer, i, j);
	}
}

console.log(`mat1: ${mat1.mat}`);
console.log(`mat2: ${mat2.mat}`);

const diag = mat1.main_diagonal;
console.log(`mat1 main diagonal: ${diag}`);

const counterDiag = mat1.main_counterDiagonal;
console.log(`mat1 main counter diagonal: ${counterDiag}`);

const one_diag = mat1.getDiagonal(1);
console.log(`mat1 1-diagonal: ${one_diag}`);

const two_diag = mat1.getDiagonal(2);
console.log(`mat1 2-diagonal: ${two_diag}`);

const neg_one_diag = mat1.getDiagonal(-1);
console.log(`mat1 (-1)-diagonal: ${neg_one_diag}`);

const neg_two_diag = mat1.getDiagonal(-2);
console.log(`mat1 (-2)-diagonal: ${neg_two_diag}`);

const one_counterDiag = mat1.getCounterDiagonal(1);
console.log(`mat1 1-counter diagonal: ${one_counterDiag}`);

const two_counterDiag = mat1.getCounterDiagonal(2);
console.log(`mat1 2-counter diagonal: ${two_counterDiag}`);

const neg_one_counterDiag = mat1.getCounterDiagonal(-1);
console.log(`mat1 (-1)-counter diagonal: ${neg_one_counterDiag}`);

const neg_two_counterDiag = mat1.getCounterDiagonal(-2);
console.log(`mat1 (-2)-counter diagonal: ${neg_two_counterDiag}`);

const addedMats = mat1.add(mat2);
console.log(`mat1 + mat2 = ${addedMats}`);

const scalarMult = mat1.multiply_scalar(2);
console.log(`2 * mat1 = ${scalarMult}`);

const matProd = mat1.multiply(mat2);
console.log(`mat1 * mat2 = ${matProd}`);
*/
