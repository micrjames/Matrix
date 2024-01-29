# Matrix
An implementation of a Matrix with operations with which we can read the ordered collections of elements in the Matrix, as well as operations with which we can manipulate the ordered collections of elements in a Matrix or by combining the values stored within two Matrices to yield another Matrix.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
This project was developed to perform the operations on Matrices that are necessary to do many of the things that are necessary for the processing of graphics routines, representation of graph problems. The code to perform the operations between Matrices work much like would be expected in a way that is semantically comparable to the comparable matrix operations, but the support code to set up the Matrices is also included.

## Technologies Used
This entire project is created using es6 structures. These structures include constructing arrays using the spread operator, class templates for objects, functional array methods like map, reduce, and filter. The use of which allows for increased conciseness and brevity possibilities in the code that underlies the methods that implement the matrix operations.

## Features
As mentioned above, the Matrix class consists of methods that either perform one of the general matrix operations or methods that set up the matrices that perform or have the operations performed on them. 
* The Matrix that the class can produce and work with are defined in the constructor to be a **square** matrix.
* Setup a square matrix of a specified size.
* Read the size of the matrix.
* Read the underlying two dimensional array, implemented as an array of the given size of the specified number of arrays, that constitutes the structure of the Matrix.
* Clear every element of the Matrix by zeroing the value at each element in the Matrix, which is then meant to be set with new values.
* Write and read values from any given element in the Matrix.
* The various ordered collections of elements can be read from the Matrix.
   * Read the collection of elements at any index in either row or column orientation, which, by definition, are found in the same number.
   * Read any collection of elements found at any k<sup>th</sup> diagonal of the Matrix, where k = 0 is found at the diagonal with the largest number of elements belonging to that collection.
   * Similarly, the user can read the comparable counter diagonal counterpart to each of the collections described in the listed point above.
   * Lastly, the main diagonal and main counter diagonal can be read, where k = 0, in the descriptions of the collections of Matrix elements found in the previous two listed points.
* The following Matrix operations can be used to modify the values of each of the elements of the Matrix, which yield a modified form of the original Matrix or Matrices obtained by operating on the original(s).
   * Add each element at an index within a collection in the Matrix to the corresponding element at the same index within a collection in another Matrix, each resultant value of which is set in the corresponding element in a new Matrix.
   * Perform either scalar multiplication on a Matrix or the Matrix form of multiplication of two Matrices, where each resultant Matrix is obtained from the operations performed similarly to the described operation in the listed point above.

## Setup
Setting up the project involves first importing, in the case of using the class in a browser-based project, or requiring it, in the case of a node-based project. Then, we create a Matrix by instantiating the class, which produces a matrix of the size, as an integer, passed in the argument of the constructor to the class. For example,
```
const mat1 = new Matrix(2);
```
produces a zeroed 2 x 2 matrix, so that we get the following matrix from the code above,

&#9484; &nbsp; 0 &nbsp; &nbsp; 0 &nbsp; &#9488; <br>
&#9493; &nbsp; 0 &nbsp; &nbsp; 0 &nbsp; &#9496; .

## Usage
Once a matrix has been instantiated, we can read the various ordered collections of elements of the Matrix.

Given the matrix <br>
&#9484; &nbsp; &nbsp; 11 &nbsp; &nbsp; &nbsp; 4 &nbsp; &nbsp; 1 &nbsp; &nbsp; 32 &nbsp; &nbsp; &#9488; <br>
&#9475; &nbsp; &nbsp; 7 &nbsp; &nbsp; 87 &nbsp; &nbsp; 21 &nbsp; &nbsp; 45 &nbsp; &#9475; <br>
&#9475; &nbsp; 67 &nbsp; &nbsp; 13 &nbsp; &nbsp; 54 &nbsp; &nbsp; 81 &nbsp; &#9475; <br>
&#9493; &nbsp; &nbsp; 3 &nbsp; &nbsp; 56 &nbsp; &nbsp; 99 &nbsp; &nbsp; 12 &nbsp; &#9496; ,
we can find any particular row, column, or diagonal.

```
mat1.getRow(2);
```
yields [ 67 13 54 81 ].
```
mat1.getCol(1);
```
yields [ 4 87 13 56 ]. And we can get the diagonals and counter diagonals, similarly.
```
mat1.getDiagonal(0);
```
yields [ 11 87 54 12 ], which yields the same result as
```
mat1.main_diagonal;
```
, using a setter function, where k = 0, for the 0<sup>th</sup> diagonal, found above.
```
mat1.getCounterDiagonal(0);
```
yields [32 21 13 3 ], which yields the same output as
```
mat1.main_counterDiagonal;
```
, using a setter function, where k = 0, for the 0<sup>th</sup> counter diagonal, found above. Similarly, the k<sup>th</sup> diagonals and counter diagonals can be read by increasing k to the above and decreasing the value of k below the main diagonal and main counter diagonal, and passing that value of k to their arguments.
Also, we can manipulate the ordered collections of elements in a Matrix or combine those the values of those elements to produce another Matrix.
For the below examples take mat1 to be the Matrix defined above and, then, mat2 can be defined, in usual way, as

&#9484; &nbsp; &nbsp; 14 &nbsp; &nbsp; 7 &nbsp; &nbsp; 3 &nbsp; &nbsp; 15 &nbsp; &nbsp; &nbsp; &#9488; <br>
&#9475; &nbsp; &nbsp; 6 &nbsp; &nbsp; 58 &nbsp; &nbsp; 91 &nbsp; &nbsp; 23 &nbsp; &#9475; <br>
&#9475; &nbsp; 34 &nbsp; &nbsp; 19 &nbsp; &nbsp; 73 &nbsp; &nbsp; 79 &nbsp; &#9475; <br>
&#9493; &nbsp; &nbsp; 5 &nbsp; &nbsp; 63 &nbsp; &nbsp; 38 &nbsp; &nbsp; 17 &nbsp; &#9496;

There are two such operations that can be performed:
* We can add each element at an index within a collection in the Matrix to the corresponding element at the same index similarly in another Matrix, such as:
```
mat3 = mat1.add(mat2);
```
, where mat 3 is <br>
&#9484; &nbsp; &nbsp; 25 &nbsp; &nbsp; 11 &nbsp; &nbsp; 4 &nbsp; &nbsp; 47 &nbsp; &nbsp; &nbsp; &nbsp; &#9488; <br>
&#9475; &nbsp; &nbsp; 13 &nbsp; &nbsp; 145 &nbsp; &nbsp; 112 &nbsp; &nbsp; 68 &nbsp; &#9475; <br>
&#9475; &nbsp; 101 &nbsp; &nbsp; 32 &nbsp; &nbsp; 127 &nbsp; &nbsp; 160 &nbsp; &#9475; <br>
&#9493; &nbsp; &nbsp; 8 &nbsp; &nbsp; 119 &nbsp; &nbsp; 137 &nbsp; &nbsp; 29 &nbsp; &nbsp; &#9496; .
* Similarly to the addition operation, we can perform either scalar multiplication or matrix multiplication, where the output yields another matrix. To multiply mat1 by the scalar 5,
```
mat3 = mat1.multiply_scalar(5);
```
, which yields <br>
&#9484; &nbsp; &nbsp; &nbsp; 55 &nbsp; &nbsp; 20 &nbsp; &nbsp; &nbsp; 5 &nbsp; &nbsp; &nbsp; 160 &nbsp; &nbsp; &#9488; <br>
&#9475; &nbsp; &nbsp; &nbsp; 35 &nbsp; &nbsp; 435 &nbsp; 105 &nbsp; &nbsp; 225 &nbsp; &#9475; <br>
&#9475; &nbsp; 335 &nbsp; &nbsp; 65 &nbsp; &nbsp; 270 &nbsp; &nbsp; 405 &nbsp; &#9475; <br>
&#9493; &nbsp; &nbsp; 15 &nbsp; &nbsp; 280 &nbsp; &nbsp; 405 &nbsp; &nbsp; 60 &nbsp; &#9496; .
Furthermore, we can perform matrix multiplication on mat1 and mat2,
```
mat1.multiply(mat2);
```
, which yields <br>
&#9484; &nbsp; &nbsp; &nbsp; &nbsp; 372 &nbsp; &nbsp; 2344 &nbsp; &nbsp; 1686 &nbsp; &nbsp; 890 &nbsp; &nbsp; &#9488; <br>
&#9475; &nbsp; &nbsp; &nbsp; 1559 &nbsp; &nbsp; 8329 &nbsp; &nbsp; 11181 &nbsp; &nbsp; 4530 &nbsp; &#9475; <br>
&#9475; &nbsp; &nbsp; &nbsp; 3257 &nbsp; &nbsp; 7352 &nbsp; &nbsp; 8404 &nbsp; &nbsp; 6947 &nbsp; &#9475; <br>
&#9493; &nbsp; &nbsp; 3804 &nbsp; &nbsp; 5906 &nbsp; &nbsp; 12788 &nbsp; &nbsp; 9358 &nbsp; &#9496; .

## Project Status
This project will be updated with further Matrix operations and other supporting functions as the need arises to work with other projects or as time comes available, so the project is a work in progress.

## Room for Improvement
There is room for improvement in that the class structures available in javascript work fine for the project currently entails. However, rewriting the project for typescript can only improve the project as the class structures available there are improved over those available in javascript.

## Contact
Feel free to contact me @michaelrjamesjr on twitter.
