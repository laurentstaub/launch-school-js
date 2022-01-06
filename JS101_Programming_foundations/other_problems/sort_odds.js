/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

PROBLEM
Input: array
Output: array
Rules: sort only the odd numbers

EXAMPLES (cf below)

DATA STRUCTURE
  Use an object

ALGORITHM
iterate over the array
  if the element is even continue
  if the element is odd, look for the next odd element and switch


*/

function sortArray(array) {
  let oddNumbers = array
    .filter(number => Math.abs(number % 2) === 1)
    .sort((a, b) => a - b);

  array.forEach((number, index) => {
    if (Math.abs(number % 2) === 1) array[index] = oddNumbers.shift();
  });

  return array;
}

console.log(sortArray([4, 2]));  //  [4, 2]
console.log(sortArray([7, 1]));  //  [1, 7]
console.log(sortArray([7, 10, 1]));  //  [1, 10, 7]
console.log(sortArray([5, 8, 6, 3, 4]));  //  [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));  // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]