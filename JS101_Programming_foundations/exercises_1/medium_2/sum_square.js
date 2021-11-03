/*
Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.
*/

const square = number => number ** 2;

function sumSquareDifference(number) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let index = 1; index <= number; index += 1) {
    sum += index;
    sumOfSquares += square(index);
  }

  return square(sum) - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150