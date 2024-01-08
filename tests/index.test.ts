const { Matrix } = require("../Matrix");

describe("A Matrix implementation.", () => {
   const numRows = 4;
   const mat = new Matrix(numRows);

   describe("A Matrix implemented initially with all zeroes.", () => {
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
   });

   describe("A Matrix successfully implemented.", () => {
	  describe("With a row set.", () => {
		 const row = [1, 1, 1, 1];
		 const index = 2;
		 mat.setRow(row, index);
		 const setMat = mat.mat;
		 test("Should set the specified row.", () => {
			const which = setMat.findIndex(element => element == row);
			expect(which).toBe(index);
		 }); 
		 test("Should contain the set row.", () => {
			const elementAt = setMat.at(2);
			expect(elementAt).toEqual(row);
		 });

		 test("Should retrieve the row set above.", () => {
			const retrievedRow = mat.getRow(index);
			expect(retrievedRow).toEqual(row);
		 });
		 test("Should retrive a column created from the row set above.", () => {
			const retrievedCol = mat.getCol(index);
			expect(retrievedCol.at(index)).toBe(row.at(index));
		 });
	  });

	  describe("With all rows set.", () => {
		 const row0 = [1, 0, 0, 1];
		 const row1 = [0, 1, 1, 0];
		 const row3 = [1, 0, 0, 1];
		 mat.setRow(row0, 0);
		 mat.setRow(row1, 1);
		 mat.setRow(row3, 3);
		 console.log(mat.mat);

		 describe("Getting the diagonal.", () => {
			const diagonal = mat.getDiagonal(-4);
			test.todo("Should not be undefined.");
			test.todo("Should be of size, N - k.");
			test.todo("Should retrieve the diagonal of the matrix at given k.");
			test.todo("Should retrieve the counter diagonal of the matrix at given k.");
         });

		 describe("Getting the counter diagonal.", () => {
			test.todo("Should not be undefined.");
			test.todo("Should be of size, N.");
			test.todo("Should retrieve the main diagonal of the matrix, i.e. k = 0.");
			test.todo("Should retrieve the main counter diagonal of the matrix, similar to the above.");
		 });
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
  
const addedMats = mat1.add(mat2);
console.log(`mat1 + mat2 = ${addedMats}`);

const scalarMult = mat1.multiply_scalar(2);
console.log(`2 * mat1 = ${scalarMult}`);

const matProd = mat1.multiply(mat2);
console.log(`mat1 * mat2 = ${matProd}`);
*/
