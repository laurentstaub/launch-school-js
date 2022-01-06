/*
Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

Input: array
Output: array of 2 arrays

Algorithm
Declare a `result` empty array

Slice the first part of the array to half of the array and add it to `result`
Do the same for the second hald of the array

slice to the ceil of array length / 2
*/

function halvsies(array) {
  let result = [];
  let arrayHalfIndex = Math.ceil(array.length / 2);

  result.push(array.slice(0, arrayHalfIndex));
  result.push(array.slice(arrayHalfIndex));

  return result;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]