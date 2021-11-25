/*
PROBLEM
Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

EXAMPLES: See below
DATA STRUCTURE: Arrays

ALGORITHM
"Transform a row into a column"
[
  [1, 2, 3], 
  [4, 5, 6],
]

[
  [4, 1], 
  [5, 2],
  [6, 3],
]

array[0][0] => new[0][1]   length array - 1 - col
array[0][1] => new[1][1]
array[0][2] => new[2][1]
array[1][0] => new[0][0]
array[1][1] => new[1][0]
array[1][2] => new[2][0]

*/
function rotate90(matrix) {
  return matrix[0]
    .map((_, row) => matrix
      .map((_, col) => matrix[col][row]).reverse());
}


/*
function rotate90(matrix) {
  const zeroesArray = length => new Array(length).fill(0);

  return zeroesArray(matrix[0].length)
    .map((_, row) => zeroesArray(matrix.length)
      .map((_, col) => matrix[col][row]).reverse());
}

function rotate90(matrix) {
  const DIM_R = matrix.length;
  const DIM_C = matrix[0].length;
  let newMatrix = new Array(DIM_C);

  for (let row = 0; row < DIM_C; row += 1) {
    newMatrix[row] = new Array(DIM_R);
  }

  return newMatrix.forEach((row, rowIndex) => row.forEach((col, colIndex) => {
    col[rowIndex] = matrix[rowIndex, colIndex];
  }))

  for (let row = 0; row < DIM_R; row += 1) {
    for (let col = 0; col < DIM_C; col += 1) {
      newMatrix[col][DIM_R - 1 - row] = matrix[row][col];
    }
  }
}
  */

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]