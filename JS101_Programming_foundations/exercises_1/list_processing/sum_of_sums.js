/*
PROBLEM
=======
Write a function that takes an array of numbers and returns the sum of the sums
of each leading subsequence in that array. Examine the examples to see what we
mean. You may assume that the array always contains at least one number.

EXAMPLES
========
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
*/

function sum(array, startIndex, endIndex) {
  let slicedArray = array.slice(startIndex, endIndex);
  return slicedArray.reduce((acc, value) => {
    return acc + value;
  }, 0);
}

function sumOfSums(array) {
  let total = 0;

  for (let index = 1; index <= array.length; index += 1) {
    total += sum(array, 0, index);
  }

  return total;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));