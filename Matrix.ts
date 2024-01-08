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

   setRow(val: any, which: number) {
	  this._mat[which] = val;
   }
   getRow(which: number): any[] {
	  return this._mat.filter((_, index) => index == which).flat();
   }
   getCol(which: number): any[] {
	  return this._mat.map(row => row[which]);
   }
}

exports.Matrix = Matrix;
