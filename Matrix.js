class Matrix {
   #mat = [];

   constructor(N) {
	   for(let i = 0; i < N; i++) {
		   this.#mat = [...this.#mat, Array(N).fill(0)];
	   }
   }

   get mat() {
	   return this.#mat;
   }

   setItem(val, row, col) {
	   this.#mat[row][col] = val;
   }

   getRow(which) {
	   return this.#mat.map(row => row[which]);
   }
   getCol(which) {
       return this.#mat.map(row => row[which]);
   }
}

module.exports = { Matrix };
