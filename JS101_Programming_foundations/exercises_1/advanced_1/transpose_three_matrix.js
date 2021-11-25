
/*
PROBLEM:
The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

Input: array of arrays
Output: array of arrays

EXAMPLES (see below)

DATA STRUCTURE
arrays

ALGORITHM
arr[0][0] => new[0][0]
arr[0][1] => new[1][0]
arr[0][2] => new[2][0]
arr[1][0] => new[0][1]
arr[1][1] => new[1][1]
arr[1][2] => new[2][1]
...

we copy the original array to a new array

we then mutate the element of the new array
we iterate though all the lines with index i
  we iterate over the first line of the original array with index j
    we assign arr[i][j] to new[j][i]

we return the new array

*/
function transpose(matrix) {
  const DIMENSION = 3;
  let newMatrix = matrix.map(subArray => subArray.slice());

  for (let row = 0; row < DIMENSION; row += 1) {
    for (let col = 0; col < DIMENSION; col += 1) {
      newMatrix[col][row] = matrix[row][col];
    }
  }

  return newMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]