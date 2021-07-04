// It should be a function named sumOfSquares.js
// It should use reduce on an array of numbers
// It should return the sum of squares

// EXAMPLE

// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83

function sumOfSquares(arrayOfNumbers) {
  return arrayOfNumbers.reduce((accumulator, number) => {
      return accumulator + (number * number);
  });
}