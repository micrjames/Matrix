class Matrix {
   private _mat: any[];
   private N: number;

   constructor(N: number) {
	   this.N = N;
	   this.clear();
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
}

exports.Matrix = Matrix;
