class Matrix {
   private _mat: any[];
   private N: number;

   constructor(N: number) {
	   this.N = N;
	   this._mat = [];
	   this.set();
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
}

exports.Matrix = Matrix;
