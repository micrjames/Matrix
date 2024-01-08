class Matrix {
   private _mat: any[];
   private N: number;

   constructor(N: number) {
	   this.N = N;
	   this.clear();
   }

   static fromArray(array: any[]): Matrix {
	   const N = array.length;
	   const arrMat = new Matrix(N);
	   arrMat._mat = array;

	   return arrMat;
   }

   private set() {
	   for(let i = 0; i < this.N; i++) {
		   this._mat = [...this._mat, Array(this.N).fill(0)];
	   }
   }

   clear() {
	   this._mat = [];
	   this.set();
   }

   get size(): number {
	   return this.N;
   }

   get mat()  {
	   return this._mat;
   }

   setElement(val: any, j: number, i: number) {
	  this._mat[j][i] = val;
   }
   getElement(j: number, i: number): any[] {
	  return this._mat[j][i];
   }

   setRow(val: any[], which: number) {
	  this._mat[which] = val;
   }
   getRow(which: number): any[] {
	  return this._mat.filter((_, index) => index == which).flat();
   }
   getCol(which: number): any[] {
	  return this._mat.map(row => row[which]);
   }

   getDiagonal(k: number) {
	   let diagonal = [];
	   let pivot = Math.abs(k);
	   if (k >= 0) {
		  for(let rowIndex = 0; rowIndex < this.N; rowIndex++) {
			  for(let colIndex = 0; colIndex < this.N; colIndex++) {
					if(colIndex == pivot) {
					   pivot++;
					   diagonal = [...diagonal, this._mat[rowIndex][colIndex]];

					   break;
					}
			  }
		  }
	   } else {
		  for(let colIndex = 0; colIndex < this.N; colIndex++) {
			  for(let rowIndex = 0; rowIndex < this.N; rowIndex++) {
					if(rowIndex == pivot) {
					   pivot++;
					   diagonal = [...diagonal, this._mat[rowIndex][colIndex]];

					   break;
					}
			  }
		  }
	   }

	   return diagonal;
   }
   getCounterDiagonal(k: number) {
	   const counterMatrix = new Matrix(this.N);
	   this._mat.forEach((row, index) => {
		   const revRow = row.reduce((acc, item) => [item].concat(acc), []);
		   counterMatrix.setRow(revRow, index);
	   });

	   const reverseCounterDiagonal = counterMatrix.getDiagonal(k);
	   const counterDiagonal = reverseCounterDiagonal.reverse();
	   return counterDiagonal;
   }
   get main_diagonal() {
	   return this.getDiagonal(0);
   }
   get main_counterDiagonal() {
	   return this.getCounterDiagonal(0);
   }

   transpose(): Matrix {
	  const tMat = new Matrix(this.N);

	  for(let j = 0; j < this.N; j++) {
		  for(let i = 0; i < this.N; i++) {
			  tMat.mat[j][i] = this._mat[i][j];
		  }
	  }
	  return tMat;
   }

   add(thatMat: Matrix): Matrix {
	  const addedArray = this._mat.map((row, rowIndex) => {
		   return row.map((el, elIndex) => {
			   return el + thatMat.mat[rowIndex][elIndex];
		   });
	   });
	  return Matrix.fromArray(addedArray);
   }
   multiply(thatMat: Matrix): Matrix {
	  const multArray = this._mat.map((row, rowIndex) => row.map((_, colIndex) => {
		  const row = this.getRow(rowIndex);
		  const col = thatMat.getCol(colIndex);
		  return row.reduce((accumulator, currentValue, currentIndex) => {
			 return currentValue * col[currentIndex] + accumulator;
		  }, 0);
	  })); 
	  return Matrix.fromArray(multArray);
   }
   multiply_scalar(scalar: number): Matrix {
	  return Matrix.fromArray(this._mat.map(row => row.map(el => scalar * el)));
   }

   toString(): string {
	  let mstring = '';

	  this._mat.forEach((row, rowIndex) => {
		mstring += '[\t';
		row.forEach((el, colIndex) => {
		   mstring += this._mat[rowIndex][colIndex] + '\t';
		});
		mstring += ']\n';
	  });

	  return mstring;
   }
}

exports.Matrix = Matrix;
