/*
PROBLEM
Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

Input: 2 numbers (count and multiplier)
Output: array (of count length)
Rule: increment the count

function sequence(count, multi) {
  return [...Array(count).keys()]
    .map(index => index + 1)
    .map(index => index * multi);
}
*/

const sequence = (count, multi) => [...Array(count).keys()].map(index => (index + 1) * multi);

// count * multiplier
// 1 * 1, 2 * 1, 3 * 1, 4 * 1, 5 * 1 
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// 1 * -7, 2 * -7, 3 * -7, 4 * -7
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []