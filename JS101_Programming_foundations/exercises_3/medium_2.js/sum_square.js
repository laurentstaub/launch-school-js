/*
Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

Input: number
Output: number

Get the digits
*/

function sumSquareDifference(nb) {
  let digits = [];
  
  for (let index = 1; index <= nb; index += 1) {
    digits.push(index);
  }

  let squareOfSum = digits.reduce((sum, dig) => sum + dig, 0) ** 2;
  let sumOfSquares = digits.reduce((sum, dig) => sum + (dig ** 2), 0);
  
  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150