const { Matrix } = require("../Matrix");
const { dot } = require("../utils/utils");

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

		 describe("Getting the diagonal and counter diagonal.", () => {
			const k = -2;
			const diagonal = mat.getDiagonal(k);
			const counterDiagonal = mat.getCounterDiagonal(k);
			test("Should not be empty.", () => {
           		expect(diagonal).not.toBeFalsy(); 
			});
			test("Should be of size, N - |k|.", () => {
			    const N = mat.size;
				expect(diagonal.length).toBe(N - Math.abs(k));
			});
			test("Should retrieve the diagonal of the matrix at given k.", () => {
			    expect(diagonal).toEqual([1, 0]);
			});
			test("Should retrieve the counter diagonal of the matrix at given k.", () => {
			    expect(counterDiagonal).toEqual([0, 1]);
			});
         });

		 describe("Getting the main diagonal and counter diagonal.", () => {
			const main_diagonal = mat.main_diagonal;
			const main_counterDiagonal = mat.main_counterDiagonal;
			test("Should not be empty.", () => {
			    expect(main_diagonal.length).not.toBeFalsy();
			});
			test("Should be of size, N.", () => {
			    const N = mat.size;
				expect(main_diagonal.length).toBe(N);
			});
			test("Should retrieve the main diagonal of the matrix, i.e. k = 0.", () => {
			    expect(main_diagonal).toEqual([1, 1, 1, 1]);
			});
			test("Should retrieve the main counter diagonal of the matrix, as above.", () => {
			    expect(main_counterDiagonal).toEqual([1, 1, 1, 1]);
			});
		 });
	  });
	  describe("With operations applied.", () => {
		 describe("From array.", () => {
			const matArr = [[1, 1], [1, 1]];
			const arrMat = Matrix.fromArray(matArr);
			test("Should be the same size as array.", () => {
			    expect(arrMat.mat).toHaveLength(matArr.length);
			});
			test("Should have the same elements.", () => {
			    expect(arrMat.mat).toEqual(matArr);
			});
		 });
		 describe("Apply between matrices.", () => {
			test("Should add matrices.", () => {
			    const addedMat = mat.add(mat);
				mat.mat.forEach((row, rowIndex) => {
				    row.forEach((_, index) => {
					    const added = addedMat.getElement(rowIndex, index);
					    const value = mat.getElement(rowIndex, index);
					    expect(added).toBe(value + value);
					});
				});
			});
			test("Should multiply matrices.", () => {
			    const multMat = mat.multiply(mat);
				mat.mat.forEach((row, rowIndex) => {
				    row.forEach((_, index) => {
					    const dotProd = dot(mat.getRow(rowIndex), mat.getCol(index));
						const multMatEl = multMat.getElement(rowIndex, index);
						expect(multMatEl).toBe(dotProd);
					});
				});
			});
			test("Should perform scalar multiplication.", () => {
			    const five_mult = mat.multiply_scalar(5);
				mat.mat.forEach((row, rowIndex) => {
				    row.forEach((_, index) => {
					    const scalarMult = five_mult.getElement(rowIndex, index);
					    const value = mat.getElement(rowIndex, index);
					    expect(scalarMult).toBe(5 * value);
					});
				});
			});
		 });
		 describe("Miscellaneous operations.", () => {
			test("Should perform transpose.", () => {
			    const tMat = mat.transpose();
			    mat.mat.forEach((row: any[], rowIndex: number) => {
				    row.forEach((_, index: number) => {
					    const matEl = mat.getElement(index, rowIndex);
					    const tMatEl = tMat.getElement(rowIndex,index)
					    expect(matEl).toBe(tMatEl);
					});
				});
			});
			test("Should retrieve a single element.", () => {
				expect(mat.getElement(2,1)).toBe(1);
			});
			test("Should set a single element.", () => {
			    mat.setElement(0, 2, 1);
			    expect(mat.getElement(2,1)).toBe(0); 
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
	  });
   });
});
