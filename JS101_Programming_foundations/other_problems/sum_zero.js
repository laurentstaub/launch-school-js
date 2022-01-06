/*
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. Return an array that
includes both values that sum to zero or undefined if a pair does not exist.

PROBLEM
Find the first pair where the sum is zero
Input: array
Output: array or undefined
Rules: the array is sorted

*/
function sumZero(array) {
  let start = 0;
  let end = array.length - 1;

  while(start < end) {
    if (array[start] + array[end] === 0) return [array[start], array[end]];
    else if (array[start] + array[end] > 0) end -= 1;
    else start += 1
  }

  return undefined;
}

console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3] 
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero([1,2,3])) // undefined