# Matrix
An implementation of a Matrix with operations written in JavaScript.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
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
produces a zeroed 2 x 2 matrix, so that we get the following matrix from the code above:

&#9484; &nbsp; 0 &nbsp; &nbsp; 0 &nbsp; &#9488; <br>
&#9493; &nbsp; 0 &nbsp; &nbsp; 0 &nbsp; &#9496; .

## Usage
